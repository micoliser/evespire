import ContactClient from "./page.client";
import { buildMetadata } from "@/lib/seo";

export default function ContactPage() {
  return <ContactClient />;
}

export function generateMetadata() {
  return buildMetadata({
    title: "Contact Evespire",
    description:
      "Share your study goals and timeline. Our admissions team will contact you with practical next steps.",
    pathname: "/contact",
    image: "/images/why-families-trust-evespire-image.png",
  });
}
