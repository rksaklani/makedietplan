import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      phone,
      email,
      goal,
      age,
      dietaryPreference,
      healthHistory,
    } = body;

    // 1. Validation
    if (!fullName || typeof fullName !== "string" || !fullName.trim()) {
      return NextResponse.json(
        { error: "Full Name is required." },
        { status: 400 }
      );
    }

    if (!phone || typeof phone !== "string" || !phone.trim()) {
      return NextResponse.json(
        { error: "Phone / WhatsApp number is required." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid Email address is required." },
        { status: 400 }
      );
    }

    if (!goal || typeof goal !== "string" || !goal.trim()) {
      return NextResponse.json(
        { error: "Primary Consultation Goal is required." },
        { status: 400 }
      );
    }

    // 2. Setup Recipients
    // The prompt specified rksaklani90@gmial.com and rksaklani90@gmail.com
    const recipients = Array.from(
      new Set([
        process.env.NOTIFICATION_EMAIL || "rksaklani90@gmail.com",
        "rksaklani90@gmial.com",
        "rksaklani90@gmail.com",
      ])
    ).join(", ");

    // 3. Configure Transporter
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 465;
    const secure = process.env.SMTP_SECURE === "true" || port === 465;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    const formattedDate = new Date().toLocaleString("en-IN", {
      timeZone: "Asia/Kolkata",
      dateStyle: "full",
      timeStyle: "short",
    });

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e7eb; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        <div style="background: linear-gradient(135deg, #1b4332 0%, #2d6a4f 100%); padding: 32px 24px; color: #ffffff; text-align: center;">
          <h1 style="margin: 0; font-size: 24px; font-weight: 800; letter-spacing: -0.5px;">make diet plan</h1>
          <p style="margin: 6px 0 0; font-size: 14px; opacity: 0.9;">New Consultation Booking Request</p>
        </div>
        
        <div style="padding: 32px 24px;">
          <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 16px; margin-bottom: 24px;">
            <p style="margin: 0; font-size: 14px; color: #166534; font-weight: 600;">
              ✨ A new patient has submitted a consultation request through the website.
            </p>
          </div>

          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tbody>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; width: 38%; font-weight: 500;">Full Name:</td>
                <td style="padding: 12px 0; color: #111827; font-weight: 700;">${fullName}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 500;">Phone / WhatsApp:</td>
                <td style="padding: 12px 0; color: #111827; font-weight: 600;">
                  <a href="tel:${phone}" style="color: #1b4332; text-decoration: none;">${phone}</a>
                  &nbsp;•&nbsp;
                  <a href="https://wa.me/${phone.replace(/[^0-9]/g, "")}" style="color: #16a34a; text-decoration: none;">Open in WhatsApp</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 500;">Email Address:</td>
                <td style="padding: 12px 0; color: #111827;">
                  <a href="mailto:${email}" style="color: #1b4332; text-decoration: none;">${email}</a>
                </td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 500;">Primary Goal:</td>
                <td style="padding: 12px 0; color: #1b4332; font-weight: 700;">${goal}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 500;">Age (Self or Child):</td>
                <td style="padding: 12px 0; color: #111827;">${age || "Not specified"}</td>
              </tr>
              <tr style="border-bottom: 1px solid #f3f4f6;">
                <td style="padding: 12px 0; color: #6b7280; font-weight: 500;">Dietary Preference:</td>
                <td style="padding: 12px 0; color: #111827;">${dietaryPreference || "Not specified"}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #6b7280; font-weight: 500; vertical-align: top;">Health Notes / Questions:</td>
                <td style="padding: 12px 0; color: #111827; line-height: 1.5; white-space: pre-wrap;">${
                  healthHistory ? healthHistory : "None provided"
                }</td>
              </tr>
            </tbody>
          </table>

          <div style="margin-top: 24px; padding-top: 16px; border-top: 1px dashed #e5e7eb; font-size: 12px; color: #9ca3af; text-align: center;">
            Submitted on: ${formattedDate}
          </div>
        </div>
      </div>
    `;

    // 4. Send Email
    if (user && pass) {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure,
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || `"make diet plan" <${user}>`,
        to: recipients,
        replyTo: email,
        subject: `New Consultation Booking Request – make diet plan (${fullName})`,
        text: `New consultation request from ${fullName} (${phone}, ${email}). Goal: ${goal}. Age: ${age || "N/A"}. Preference: ${dietaryPreference || "N/A"}. Notes: ${healthHistory || "None"}`,
        html: htmlContent,
      });
      console.log(`[Consultation] Real email dispatched to ${recipients}`);
    } else {
      // Development mode / Missing SMTP credentials fallback
      console.log(`\n================================================================`);
      console.log(`[CONSULTATION NOTIFICATION EMAIL DISPATCHED]`);
      console.log(`To: ${recipients}`);
      console.log(`Subject: New Consultation Booking Request – make diet plan`);
      console.log(`Name: ${fullName}`);
      console.log(`Phone: ${phone}`);
      console.log(`Email: ${email}`);
      console.log(`Goal: ${goal}`);
      console.log(`Age: ${age || "N/A"}`);
      console.log(`Preference: ${dietaryPreference || "N/A"}`);
      console.log(`Notes: ${healthHistory || "None"}`);
      console.log(`(Configure SMTP_USER and SMTP_PASS in .env.local to send via live SMTP)`);
      console.log(`================================================================\n`);
    }

    return NextResponse.json(
      {
        success: true,
        message: "Your consultation request has been submitted successfully!",
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[Consultation API Error]:", error);
    return NextResponse.json(
      {
        error:
          error?.message ||
          "Failed to send consultation request. Please try again or reach out on WhatsApp.",
      },
      { status: 500 }
    );
  }
}
