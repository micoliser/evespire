export const getClientIp = (request) => {
  const headers = request.headers;
  const forwarded = headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0].trim();
  }

  const realIp = headers.get("x-real-ip");
  if (realIp) {
    return realIp;
  }

  const cfConnecting = headers.get("cf-connecting-ip");
  if (cfConnecting) {
    return cfConnecting;
  }

  return "unknown";
};

export const isHoneypotFilled = (payload, fieldName) => {
  const value = String(payload[fieldName] || "").trim();
  return value.length > 0;
};
