import { Resend } from "resend";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

// Simple in-memory rate limiting (for production, use Redis or similar)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

function rateLimit(ip: string): boolean {
  const now = Date.now();
  const windowMs = 15 * 60 * 1000; // 15 minutes
  const maxRequests = 5; // Max 5 requests per 15 minutes
  
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs });
    return true;
  }
  
  if (record.count >= maxRequests) {
    return false;
  }
  
  record.count++;
  return true;
}

function sanitizeInput(input: string): string {
  return input
    .trim()
    .replace(/[<>"'&]/g, (match) => {
      const entities: Record<string, string> = {
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#x27;',
        '&': '&amp;'
      };
      return entities[match] || match;
    })
    .substring(0, 2000); // Prevent extremely long inputs
}

function validateEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(email) && email.length <= 254;
}

function detectSpam(content: string): boolean {
  const spamPatterns = [
    /\b(viagra|cialis|casino|lottery|winner|congratulations)\b/i,
    /\b(click here|act now|limited time|urgent)\b/i,
    /(http[s]?:\/\/[^\s]+){3,}/g, // Multiple URLs
    /[A-Z]{10,}/, // Excessive caps
    /(..)\1{4,}/ // Repeated characters
  ];
  
  return spamPatterns.some(pattern => pattern.test(content));
}

export async function POST(request: Request) {
  try {
    // Rate limiting
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0] : "127.0.0.1";
    
    if (!rateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, subject, message, timestamp, userAgent, referrer } = body;

    // Sanitize inputs
    const sanitizedName = sanitizeInput(name || "");
    const sanitizedEmail = sanitizeInput(email || "");
    const sanitizedSubject = sanitizeInput(subject || "");
    const sanitizedMessage = sanitizeInput(message || "");

    // Validation with detailed error messages
    const fieldErrors: Record<string, string> = {};
    
    if (!sanitizedName) {
      fieldErrors.name = "Name is required";
    } else if (sanitizedName.length < 2) {
      fieldErrors.name = "Name must be at least 2 characters";
    } else if (sanitizedName.length > 50) {
      fieldErrors.name = "Name must be less than 50 characters";
    }
    
    if (!sanitizedEmail) {
      fieldErrors.email = "Email is required";
    } else if (!validateEmail(sanitizedEmail)) {
      fieldErrors.email = "Please enter a valid email address";
    }
    
    if (!sanitizedSubject) {
      fieldErrors.subject = "Subject is required";
    } else if (sanitizedSubject.length < 3) {
      fieldErrors.subject = "Subject must be at least 3 characters";
    } else if (sanitizedSubject.length > 100) {
      fieldErrors.subject = "Subject must be less than 100 characters";
    }
    
    if (!sanitizedMessage) {
      fieldErrors.message = "Message is required";
    } else if (sanitizedMessage.length < 10) {
      fieldErrors.message = "Message must be at least 10 characters";
    } else if (sanitizedMessage.length > 1000) {
      fieldErrors.message = "Message must be less than 1000 characters";
    }
    
    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        { error: "Validation failed", fieldErrors },
        { status: 400 }
      );
    }

    // Spam detection
    const fullContent = `${sanitizedName} ${sanitizedEmail} ${sanitizedSubject} ${sanitizedMessage}`;
    if (detectSpam(fullContent)) {
      console.warn(`[contact] Potential spam detected from ${ip}:`, { name: sanitizedName, email: sanitizedEmail });
      return NextResponse.json(
        { error: "Message could not be processed. Please try again." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;

    // If there's no API key, don't fail hard in development — persist the submission and return success.
    if (!apiKey) {
      try {
        const dataDir = path.join(process.cwd(), "data");
        const filePath = path.join(dataDir, "contact-submissions.json");

        // Ensure data directory exists
        await fs.mkdir(dataDir, { recursive: true });

        // Read existing submissions (if any)
        let submissions: any[] = [];
        try {
          const existing = await fs.readFile(filePath, "utf-8");
          submissions = JSON.parse(existing);
          if (!Array.isArray(submissions)) submissions = [];
        } catch (err) {
          // File might not exist yet — ignore
        }

        const entry = {
          name,
          email,
          message,
          timestamp: new Date().toISOString(),
        };

        submissions.push(entry);

        await fs.writeFile(
          filePath,
          JSON.stringify(submissions, null, 2),
          "utf-8"
        );

        // eslint-disable-next-line no-console
        console.warn(
          "[contact] RESEND_API_KEY not set — saved submission to data/contact-submissions.json:",
          entry
        );

        return NextResponse.json(
          {
            success: true,
            dev: true,
            message:
              "Email service not configured; submission saved to data/contact-submissions.json (development fallback).",
            savedTo: "/data/contact-submissions.json",
          },
          { status: 200 }
        );
      } catch (fsErr) {
        // eslint-disable-next-line no-console
        console.error("[contact] failed to persist submission:", fsErr);
        return NextResponse.json(
          {
            error:
              "Email service not configured and failed to persist submission.",
          },
          { status: 500 }
        );
      }
    }

    // If we have an API key, initialize Resend and send the email.
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "munezadieudonne2021@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; }
              .container { padding: 20px; max-width: 600px; margin: 0 auto; }
              .header { background: #f8f9fa; padding: 20px; border-radius: 5px; margin-bottom: 20px; }
              .content { line-height: 1.6; color: #333; }
              .footer { margin-top: 30px; font-size: 0.9em; color: #666; }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h2>New Contact Form Submission</h2>
              </div>
              <div class="content">
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p style="white-space: pre-wrap;">${message}</p>
              </div>
              <div class="footer">
                <p>This message was sent from your portfolio contact form.</p>
                <p>Timestamp: ${new Date().toISOString()}</p>
              </div>
            </div>
          </body>
        </html>
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact] error sending email:", err);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
