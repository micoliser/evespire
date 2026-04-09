const BRAND_NAME = "Evespire";

export const escapeHtml = (input) =>
  String(input)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

const renderDetailsRows = (items) =>
  items
    .map(
      ({ label, value }) => `
        <tr>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #334155; width: 36%; font-weight: 600; vertical-align: top;">${escapeHtml(label)}</td>
          <td style="padding: 10px 12px; border-bottom: 1px solid #e2e8f0; font-size: 13px; color: #0f172a; white-space: pre-wrap;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

export const renderBrandedEmail = ({
  preheader,
  title,
  subtitle,
  intro,
  details,
  outro,
}) => {
  const detailsHtml = details?.length
    ? `
      <div style="margin-top: 18px; border: 1px solid #dbeafe; border-radius: 12px; overflow: hidden;">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse; background: #ffffff;">
          <tbody>
            ${renderDetailsRows(details)}
          </tbody>
        </table>
      </div>
    `
    : "";

  return `
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin: 0; padding: 0; background: linear-gradient(180deg, #f8fafc 0%, #eff6ff 100%); font-family: Arial, Helvetica, sans-serif; color: #0f172a;">
    <div style="display: none; max-height: 0; overflow: hidden; opacity: 0;">${escapeHtml(preheader || title)}</div>
    <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="padding: 28px 14px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width: 640px; border-collapse: separate; border-spacing: 0; background: #ffffff; border-radius: 18px; overflow: hidden; border: 1px solid #dbeafe; box-shadow: 0 10px 35px rgba(15, 23, 42, 0.08);">
            <tr>
              <td style="background: linear-gradient(135deg, #1e3a8a 0%, #0369a1 100%); padding: 22px 24px; color: #f8fafc;">
                <p style="margin: 0; font-size: 11px; letter-spacing: 0.16em; text-transform: uppercase; opacity: 0.9; font-weight: 600;">${BRAND_NAME}</p>
                <h1 style="margin: 10px 0 0; font-size: 24px; line-height: 1.2; font-weight: 700;">${escapeHtml(title)}</h1>
                <p style="margin: 8px 0 0; font-size: 14px; line-height: 1.5; color: #e2e8f0;">${escapeHtml(subtitle)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 22px 24px;">
                <p style="margin: 0; font-size: 14px; line-height: 1.7; color: #334155;">${escapeHtml(intro)}</p>
                ${detailsHtml}
                <p style="margin: 18px 0 0; font-size: 14px; line-height: 1.7; color: #334155;">${escapeHtml(outro)}</p>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 24px; border-top: 1px solid #e2e8f0; background: #f8fafc; color: #64748b; font-size: 12px; line-height: 1.6;">
                This message was sent by ${BRAND_NAME}. If this was unexpected, please contact us at info@evespireedu.com.
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;
};

export const renderPlainTextEmail = ({ title, intro, details, outro }) => {
  const detailsText = details?.length
    ? `\n${details.map((item) => `${item.label}: ${item.value}`).join("\n")}`
    : "";

  return `${title}\n\n${intro}${detailsText}\n\n${outro}\n\nEvespire`;
};
