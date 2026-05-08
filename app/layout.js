import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

export const metadata = {
  title: { default: "Evespire", template: "%s | Evespire" },
  description:
    "Evespire helps African students and families build clear, practical pathways to global education opportunities.",
  openGraph: {
    title: "Evespire",
    description:
      "Evespire helps African students and families build clear, practical pathways to global education opportunities.",
    url: "https://evespireedu.com",
    siteName: "Evespire",
    images: [
      {
        url: "https://evespireedu.com/images/why-families-trust-evespire-image.png",
        width: 1200,
        height: 630,
        alt: "Evespire - Education pathways",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Evespire",
    description:
      "Evespire helps African students and families build clear, practical pathways to global education opportunities.",
    images: [
      "https://evespireedu.com/images/why-families-trust-evespire-image.png",
    ],
  },
  metadataBase: new URL("https://evespireedu.com"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-slate-900">
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 pt-20">{children}</main>
          <Footer />
        </div>
        {/* JSON-LD Organization schema for SEO/social */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Evespire Investment Limited",
              url: "https://evespireedu.com",
              logo: "https://evespireedu.com/images/why-families-trust-evespire-image.png",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+2349113218889",
                  contactType: "customer service",
                  areaServed: "NG",
                },
              ],
              sameAs: [
                "https://www.instagram.com/evespireofficial",
                "https://www.tiktok.com/evespireofficial",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
