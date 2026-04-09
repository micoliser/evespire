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

const appointmentTimes = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
];

const validModes = ["phone call", "whatsapp", "physical"];

const formatIsoDate = (value) => {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return "";

  return new Intl.DateTimeFormat("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
};

const validatePayload = (payload) => {
  const errors = {};
  const normalizedDate = new Date(payload.date);
  const today = new Date();
  today.setHours(0, 0, 0, 0);

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

  if (!payload.date) {
    errors.date = "Preferred date is required.";
  } else if (Number.isNaN(normalizedDate.getTime())) {
    errors.date = "Please select a valid preferred date.";
  } else {
    const selectedDay = new Date(normalizedDate);
    selectedDay.setHours(0, 0, 0, 0);
    if (selectedDay < today) {
      errors.date = "Preferred date cannot be in the past.";
    }
  }

  if (!payload.time) {
    errors.time = "Preferred time is required.";
  } else if (!appointmentTimes.includes(payload.time)) {
    errors.time = "Please select a valid time slot.";
  }

  if (!payload.mode) {
    errors.mode = "Appointment mode is required.";
  } else if (!validModes.includes(payload.mode)) {
    errors.mode = "Please select a valid appointment mode.";
  }

  return errors;
};

export async function POST(request) {
  try {
    const clientIp = getClientIp(request);

    // Rate limiting check
    const rateLimit = checkRateLimit({
      key: `${clientIp}:appointment`,
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
      date: String(body.date || "").trim(),
      time: String(body.time || "").trim(),
      mode: String(body.mode || "")
        .trim()
        .toLowerCase(),
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

    const readableDate = formatIsoDate(payload.date);
    const detailItems = [
      { label: "Full Name", value: payload.fullName },
      { label: "Email", value: payload.email },
      { label: "Preferred Date", value: readableDate },
      { label: "Preferred Time", value: payload.time },
      {
        label: "Appointment Mode",
        value: payload.mode[0].toUpperCase() + payload.mode.slice(1),
      },
    ];

    const orgHtml = renderBrandedEmail({
      preheader: "New appointment request received",
      title: "New Appointment Request",
      subtitle: "A user has booked an appointment from the website.",
      intro: "A new appointment request has been submitted on Evespire.",
      details: detailItems,
      outro: "Reply to this email to continue directly with the applicant.",
    });

    const orgText = renderPlainTextEmail({
      title: "New Appointment Request",
      intro: "A new appointment request has been submitted on Evespire.",
      details: detailItems,
      outro: "Reply to this email to continue directly with the applicant.",
    });

    const userHtml = renderBrandedEmail({
      preheader: "Your appointment request was received",
      title: "Appointment Request Received",
      subtitle: "Thank you for booking with Evespire.",
      intro: `Hi ${payload.fullName}, your appointment request has been received. Our team will contact you shortly to confirm your consultation details.`,
      details: [
        { label: "Preferred Date", value: readableDate },
        { label: "Preferred Time", value: payload.time },
        {
          label: "Appointment Mode",
          value: payload.mode[0].toUpperCase() + payload.mode.slice(1),
        },
      ],
      outro:
        "If you need to adjust your request, reply to this email and we will assist.",
    });

    const userText = renderPlainTextEmail({
      title: "Appointment Request Received",
      intro: `Hi ${payload.fullName}, your appointment request has been received and we will contact you shortly.`,
      details: [
        { label: "Preferred Date", value: readableDate },
        { label: "Preferred Time", value: payload.time },
        {
          label: "Appointment Mode",
          value: payload.mode[0].toUpperCase() + payload.mode.slice(1),
        },
      ],
      outro:
        "If you need to adjust your request, reply to this email and we will assist.",
    });

    const orgRecipient = getOrgNotificationEmail();

    await sendSmtpMail({
      to: orgRecipient,
      subject: `New Appointment Request - ${payload.fullName}`,
      html: orgHtml,
      text: orgText,
      replyTo: payload.email,
    });

    await sendSmtpMail({
      to: payload.email,
      subject: "Evespire: Appointment Request Received",
      html: userHtml,
      text: userText,
      replyTo: orgRecipient,
    });

    return NextResponse.json({
      message: "Appointment request submitted successfully.",
    });
  } catch (error) {
    console.error("Appointment form mail error:", error);
    return NextResponse.json(
      {
        message:
          "We could not send your appointment request right now. Please try again shortly.",
      },
      { status: 500 },
    );
  }
}
