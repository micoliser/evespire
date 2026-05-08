import { DestinationPageTemplate } from "@/components/common/destination-page-template";
import { buildMetadata } from "@/lib/seo";

const pageData = {
  title: "Study in Australia",
  routeLabel: "Study in Australia",
  heroImage: "/images/why-study-in-australia-image.png",
  heroAlt: "Students preparing for study opportunities in Australia",
  intro:
    "Australia is a top destination for students who want internationally recognized qualifications, high quality of life, and practical graduate outcomes.",
  whyStudy: [
    "Australian universities are globally competitive and supported by clear national quality frameworks.",
    "Programs are designed to balance academic depth with employability and applied learning.",
    "Students benefit from safe, multicultural study environments across major cities and regional hubs.",
  ],
  benefits: [
    {
      title: "Recognized Degrees",
      description:
        "Australian qualifications are widely accepted by employers and institutions across many countries.",
    },
    {
      title: "Student Work Rights",
      description:
        "Eligible student visa holders may work under current visa conditions while studying.",
    },
    {
      title: "Post-Study Opportunities",
      description:
        "Eligible graduates may access temporary graduate pathways after study, subject to prevailing immigration rules.",
    },
  ],
  requirements: [
    "Enrollment confirmation from an approved provider, usually a Confirmation of Enrolment (CoE).",
    "Student visa (subclass 500) application with Genuine Student assessment requirements.",
    "Evidence of financial capacity and English proficiency based on visa and provider criteria.",
    "Overseas Student Health Cover (OSHC) for the relevant duration of stay.",
    "Health and character checks, including biometrics or examinations where requested.",
  ],
  references: [
    {
      label: "Australian Home Affairs: Student Visa (subclass 500)",
      href: "https://immi.homeaffairs.gov.au/visas/getting-a-visa/visa-listing/student-500",
    },
    {
      label: "Study Australia: International Students",
      href: "https://www.studyaustralia.gov.au/",
    },
  ],
};

export default function StudyInAustraliaPage() {
  return <DestinationPageTemplate {...pageData} />;
}

export function generateMetadata() {
  return buildMetadata({
    title: pageData.title,
    description: pageData.intro,
    pathname: "/study-in-australia",
    image: pageData.heroImage,
  });
}
