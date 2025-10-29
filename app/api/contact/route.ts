import { Resend } from "resend";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
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
