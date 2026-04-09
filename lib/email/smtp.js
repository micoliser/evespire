import nodemailer from "nodemailer";

let cachedTransporter;

const getSmtpPort = () => Number(process.env.SMTP_PORT || 587);

const isSmtpSecure = (port) => {
  if (process.env.SMTP_SECURE) {
    return process.env.SMTP_SECURE === "true";
  }

  return port === 465;
};

const getTransporter = () => {
  if (cachedTransporter) return cachedTransporter;

  const host = process.env.SMTP_HOST;
  const port = getSmtpPort();
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    throw new Error(
      "SMTP is not configured. Set SMTP_HOST, SMTP_PORT, SMTP_USER, and SMTP_PASS.",
    );
  }

  cachedTransporter = nodemailer.createTransport({
    host,
    port,
    secure: isSmtpSecure(port),
    auth: {
      user,
      pass,
    },
  });

  return cachedTransporter;
};

export const getOrgNotificationEmail = () =>
  process.env.ORG_NOTIFICATION_EMAIL ||
  process.env.MAIL_FROM ||
  process.env.SMTP_USER ||
  "info@evespireedu.com";

export const getMailFromAddress = () =>
  process.env.MAIL_FROM || process.env.SMTP_USER || "info@evespireedu.com";

export const sendSmtpMail = async ({ to, subject, html, text, replyTo }) => {
  const transporter = getTransporter();

  return transporter.sendMail({
    from: getMailFromAddress(),
    to,
    subject,
    html,
    text,
    replyTo,
  });
};
