import { NextResponse } from "next/server";
import { getOrgNotificationEmail, sendSmtpMail } from "@/lib/email/smtp";
import {
  renderBrandedEmail,
  renderPlainTextEmail,
} from "@/lib/email/templates";
import { checkRateLimit } from "@/lib/rate-limit";
import { getClientIp, isHoneypotFilled } from "@/lib/abuse-prevention";

export const runtime = "nodejs";

const nameRegex = /^[A-Za-z]+(?:\s[A-Za-z]+)*$/;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^[+]?[(]?[0-9\s\-()]{7,20}$/;
const destinationRegex = /^[A-Za-z\s,&/-]+$/;

const validatePayload = (payload) => {
  const errors = {};

  if (!payload.fullName) {
    errors.fullName = "Full name is required.";
  } else if (!nameRegex.test(payload.fullName)) {
    errors.fullName =
      "Full name must contain letters only, with a single space between names.";
  }

  if (!payload.email) {
    errors.email = "Email address is required.";
  } else if (!emailRegex.test(payload.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!payload.phone) {
    errors.phone = "Phone number is required.";
  } else if (!phoneRegex.test(payload.phone)) {
    errors.phone = "Please enter a valid phone number.";
  }

  if (!payload.destination) {
    errors.destination = "Preferred destination is required.";
  } else if (!destinationRegex.test(payload.destination)) {
    errors.destination =
      "Preferred destination can only include letters, spaces, and common separators.";
  }

  if (!payload.message) {
    errors.message = "Message is required.";
  } else if (payload.message.length < 10) {
    errors.message = "Message should be at least 10 characters long.";
  }

  return errors;
};

export async function POST(request) {
  try {
    const clientIp = getClientIp(request);

    // Rate limiting check
    const rateLimit = checkRateLimit({
      key: `${clientIp}:contact`,
      limit: 5,
      windowMs: 600000, // 10 minutes
    });

    if (!rateLimit.allowed) {
      return NextResponse.json(
        { message: "Too many requests. Please try again shortly." },
        { status: 429 },
      );
    }

    const body = await request.json();

    // Honeypot check (silently ignore bot submissions)
    if (isHoneypotFilled(body, "websiteUrl")) {
      return NextResponse.json({ message: "Request processed successfully." });
    }
    const payload = {
      fullName: String(body.fullName || "").trim(),
      email: String(body.email || "").trim(),
      phone: String(body.phone || "").trim(),
      destination: String(body.destination || "").trim(),
      message: String(body.message || "").trim(),
    };

    const errors = validatePayload(payload);
    if (Object.keys(errors).length > 0) {
      return NextResponse.json(
        {
          message: "Please correct the highlighted fields.",
          fieldErrors: errors,
        },
        { status: 400 },
      );
    }

    const detailItems = [
      { label: "Full Name", value: payload.fullName },
      { label: "Email", value: payload.email },
      { label: "Phone", value: payload.phone },
      { label: "Preferred Destination", value: payload.destination },
      { label: "Message", value: payload.message },
    ];

    const orgHtml = renderBrandedEmail({
      preheader: "New contact form submission received",
      title: "New Contact Form Submission",
      subtitle: "A prospective student has submitted an enquiry.",
      intro:
        "A new contact request has been submitted through the Evespire website.",
      details: detailItems,
      outro: "Reply to this email to continue the conversation with the lead.",
    });

    const orgText = renderPlainTextEmail({
      title: "New Contact Form Submission",
      intro: "A new contact request has been submitted through the website.",
      details: detailItems,
      outro: "Reply to this email to continue the conversation with the lead.",
    });

    const userHtml = renderBrandedEmail({
      preheader: "We have received your enquiry",
      title: "We Received Your Request",
      subtitle: "Thank you for contacting Evespire.",
      intro: `Hi ${payload.fullName}, we have received your enquiry and our team will get back to you soon with next steps.`,
      details: [
        { label: "Submitted For", value: "Contact Enquiry" },
        { label: "Preferred Destination", value: payload.destination },
      ],
      outro:
        "If you need urgent support, please reply to this email and our team will assist you.",
    });

    const userText = renderPlainTextEmail({
      title: "We Received Your Request",
      intro: `Hi ${payload.fullName}, we have received your enquiry and will get back to you shortly.`,
      details: [
        { label: "Submitted For", value: "Contact Enquiry" },
        { label: "Preferred Destination", value: payload.destination },
      ],
      outro:
        "If you need urgent support, please reply to this email and our team will assist you.",
    });

    const orgRecipient = getOrgNotificationEmail();

    await sendSmtpMail({
      to: orgRecipient,
      subject: `New Contact Form Submission - ${payload.fullName}`,
      html: orgHtml,
      text: orgText,
      replyTo: payload.email,
    });

    await sendSmtpMail({
      to: payload.email,
      subject: "Evespire: We Received Your Request",
      html: userHtml,
      text: userText,
      replyTo: orgRecipient,
    });

    return NextResponse.json({
      message: "Contact request submitted successfully.",
    });
  } catch (error) {
    console.error("Contact form mail error:", error);
    return NextResponse.json(
      {
        message:
          "We could not send your request right now. Please try again in a moment.",
      },
      { status: 500 },
    );
  }
}
