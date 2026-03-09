import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const { email } = (await request.json()) as { email?: string };
    const trimmedEmail = email?.trim().toLowerCase();

    if (!trimmedEmail || !emailPattern.test(trimmedEmail)) {
      return NextResponse.json(
        { message: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;

    if (!gmailUser || !gmailAppPassword) {
      return NextResponse.json(
        { message: "Email service is not configured yet." },
        { status: 500 }
      );
    }

    // Test

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
    });

    await transporter.sendMail({
      from: `"Qiyam" <${gmailUser}>`,
      to: trimmedEmail,
      subject: "Welcome to Qiyam Early Access",
      text: [
        "Assalamualaikum,",
        "",
        "Thank you for signing up for Qiyam Early Access.",
        "We will let you know when the first version is ready.",
        "",
        "Regards,",
        "Qiyam",
      ].join("\n"),
      html: `
        <p>Assalamualaikum,</p>
        <p>Thank you for signing up for <strong>Qiyam Early Access</strong>.</p>
        <p>We will let you know when the first version is ready.</p>
        <p>Regards,<br />Qiyam</p>
      `,
    });

    return NextResponse.json({
      message: "Confirmation email sent. Please check your inbox.",
    });
  } catch (error) {
    console.error("Signup email failed", error);

    return NextResponse.json(
      { message: "We could not send the email right now. Please try again." },
      { status: 500 }
    );
  }
}
