import { DestinationPageTemplate } from "@/components/common/destination-page-template";
import { buildMetadata } from "@/lib/seo";

const pageData = {
  title: "Study in the UK/Europe",
  routeLabel: "Study in the UK/Europe",
  heroImage: "/images/why-study-in-uk-europe-image.jpg",
  heroAlt: "Students discussing options for universities in the UK and Europe",
  intro:
    "The UK and Europe remain top choices for international students because of globally ranked universities, diverse degree options, and access to international career networks.",
  whyStudy: [
    "The region offers a broad mix of high-ranking institutions, from UK research universities to strong technical universities in countries such as Germany, the Netherlands, and France.",
    "Academic structures in much of Europe follow the Bologna framework, which supports degree recognition and easier mobility across participating countries.",
    "Many programs are available in English, especially at postgraduate level, while still giving students access to multilingual and cross-cultural environments.",
  ],
  benefits: [
    {
      title: "Strong Global Recognition",
      description:
        "Degrees from UK and established European universities are widely recognized by employers and postgraduate institutions globally.",
    },
    {
      title: "Post-Study Pathways",
      description:
        "In the UK, eligible graduates can use the Graduate route after studies. Several European countries also provide post-study residence or job-seeking permits.",
    },
    {
      title: "Academic Variety",
      description:
        "Students can choose from one-year UK master's routes, research-focused programs, and career-oriented applied degrees across Europe.",
    },
  ],
  requirements: [
    "Confirmed admission from a licensed institution. For the UK, this is typically a Confirmation of Acceptance for Studies (CAS).",
    "Valid passport and student visa/residence permit application for the specific country where you will study.",
    "Financial evidence that you can cover tuition and living costs (amounts and evidence rules vary by country).",
    "Proof of language proficiency, often English test results (or program/language-based alternatives where permitted).",
    "Health and immigration compliance documents, such as biometrics and country-specific insurance or health surcharge requirements.",
  ],
  references: [
    {
      label: "UK Government: Student Visa",
      href: "https://www.gov.uk/student-visa",
    },
    {
      label: "EU: European Higher Education Area / Bologna Process",
      href: "https://www.ehea.info/",
    },
  ],
};

export default function StudyInUkEuropePage() {
  return <DestinationPageTemplate {...pageData} />;
}

export function generateMetadata() {
  return buildMetadata({
    title: pageData.title,
    description: pageData.intro,
    pathname: "/study-in-uk-europe",
    image: pageData.heroImage,
  });
}
