const SITE_URL = "https://evespireedu.com";

export function buildMetadata({
  title,
  description,
  pathname = "/",
  image = "/images/why-families-trust-evespire-image.png",
  type = "website",
}) {
  const url = new URL(pathname, SITE_URL).toString();
  const imageUrl = image.startsWith("http")
    ? image
    : new URL(image, SITE_URL).toString();

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      siteName: "Evespire",
      images: [
        {
          url: imageUrl,
          alt: title,
        },
      ],
      type,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
    alternates: {
      canonical: url,
    },
  };
}

export const SITE_URL_CONST = SITE_URL;
