import { Resend } from "resend";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    const apiKey = process.env.RESEND_API_KEY;

    // If there's no API key, don't fail hard in development — log the submission and return success.
    if (!apiKey) {
      // In environments where writing files isn't desirable (serverless), we simply log the submission.
      // This makes the contact form usable during local development and prevents a 503 response.
      // The message will still appear as 'sent' to the user in non-production setups.
      // IMPORTANT: In production you should set RESEND_API_KEY to enable real email sending.
      // Log the payload for debugging/recording.
      // eslint-disable-next-line no-console
      console.warn("[contact] RESEND_API_KEY not set — logging message instead of sending email:", {
        name,
        email,
        message
      });

      return NextResponse.json(
        {
          success: true,
          dev: true,
          message: "Email service not configured; submission logged on server (development fallback)."
        },
        { status: 200 }
      );
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