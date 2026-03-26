import { DestinationPageTemplate } from "@/components/common/destination-page-template";

const pageData = {
  title: "Study in Asia",
  routeLabel: "Study in Asia",
  heroImage: "/images/AVLGNZizmkU.jpg",
  heroAlt: "Students exploring study opportunities across Asia",
  intro:
    "Asia is increasingly attractive for international education because of strong universities, innovation-driven cities, and competitive costs in several countries.",
  whyStudy: [
    "Major study hubs such as Singapore, Japan, South Korea, China, and Malaysia offer high-quality universities with growing global visibility.",
    "Many institutions provide English-medium programs while also giving students access to strategic regional languages and markets.",
    "Students can combine academics with exposure to fast-growing technology, business, and manufacturing ecosystems.",
  ],
  benefits: [
    {
      title: "Cost-to-Value Advantage",
      description:
        "In many Asian destinations, tuition and living costs can be lower than traditional western destinations while maintaining strong academic outcomes.",
    },
    {
      title: "Regional Career Access",
      description:
        "Students build networks in economies with strong demand across technology, logistics, engineering, and finance sectors.",
    },
    {
      title: "Cultural and Language Edge",
      description:
        "Studying in Asia can provide language exposure and cross-cultural competencies highly valued in global careers.",
    },
  ],
  requirements: [
    "Admission to a recognized full-time program in the destination country.",
    "Student visa/pass approval process specific to the country (for example, Student's Pass in Singapore or COE-linked processes in Japan).",
    "Proof of finances, valid passport, and institution-specific supporting documents.",
    "Medical, insurance, or vaccination documentation where required by local authorities.",
    "Compliance with country-specific immigration timelines and post-arrival formalities.",
  ],
  references: [
    {
      label: "Singapore ICA: Becoming a Student's Pass Holder",
      href: "https://www.ica.gov.sg/reside/STP/apply",
    },
    {
      label: "Japan ISA: Certificate of Eligibility Procedures",
      href: "https://www.moj.go.jp/isa/applications/procedures/16-1.html?hl=en",
    },
  ],
};

export default function StudyInAsiaPage() {
  return <DestinationPageTemplate {...pageData} />;
}
