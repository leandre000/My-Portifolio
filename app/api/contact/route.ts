import { Resend } from "resend";
import { NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

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
          timestamp: new Date().toISOString()
        };

        submissions.push(entry);

        await fs.writeFile(filePath, JSON.stringify(submissions, null, 2), "utf-8");

        // eslint-disable-next-line no-console
        console.warn("[contact] RESEND_API_KEY not set — saved submission to data/contact-submissions.json:", entry);

        return NextResponse.json(
          {
            success: true,
            dev: true,
            message: "Email service not configured; submission saved to data/contact-submissions.json (development fallback).",
            savedTo: "/data/contact-submissions.json"
          },
          { status: 200 }
        );
      } catch (fsErr) {
        // eslint-disable-next-line no-console
        console.error("[contact] failed to persist submission:", fsErr);
        return NextResponse.json(
          { error: "Email service not configured and failed to persist submission." },
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
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error("[contact] error sending email:", err);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}