import HomeClient from "./page.client";
import { buildMetadata } from "@/lib/seo";

export default function HomePage() {
  return <HomeClient />;
}

export function generateMetadata() {
  return buildMetadata({
    title: "Evespire - Home",
    description:
      "Evespire helps African students and families build clear, practical pathways to global education opportunities.",
    pathname: "/",
    image: "/images/why-families-trust-evespire-image.png",
  });
}
