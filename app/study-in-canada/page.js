import { DestinationPageTemplate } from "@/components/common/destination-page-template";
import { buildMetadata } from "@/lib/seo";

const pageData = {
  title: "Study in Canada",
  routeLabel: "Study in Canada",
  heroImage: "/images/why-study-in-canada-image.jpg",
  heroAlt: "International students discussing study options in Canada",
  intro:
    "Canada is consistently chosen for quality education, student-friendly cities, and practical work and settlement pathways after graduation.",
  whyStudy: [
    "Canadian institutions are known for high academic standards and practical, career-oriented learning models.",
    "Cities and campuses are generally multicultural, making adaptation easier for international students.",
    "Many programs include co-op or internship opportunities that connect learning with real work experience.",
  ],
  benefits: [
    {
      title: "High Education Quality",
      description:
        "Public colleges and universities maintain strong quality assurance, with programs recognized internationally.",
    },
    {
      title: "Work and Post-Study Options",
      description:
        "Eligible graduates may qualify for a Post-Graduation Work Permit (PGWP), supporting transition into the labor market.",
    },
    {
      title: "Strong Student Support",
      description:
        "Institutions typically offer dedicated newcomer support, advising, and academic resources for international students.",
    },
  ],
  requirements: [
    "Letter of acceptance from a Designated Learning Institution (DLI).",
    "Study permit application with valid passport and required identity/biometric steps.",
    "Proof of financial support for tuition, living costs, and return transportation.",
    "Additional policy documents where applicable, such as a Provincial Attestation Letter for many post-secondary applicants.",
    "Medical exam and/or police certificates when required by your travel history or application profile.",
  ],
  references: [
    {
      label: "IRCC: Study Permit",
      href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit.html",
    },
    {
      label: "IRCC: Designated Learning Institutions",
      href: "https://www.canada.ca/en/immigration-refugees-citizenship/services/study-canada/study-permit/prepare/designated-learning-institutions-list.html",
    },
  ],
};

export default function StudyInCanadaPage() {
  return <DestinationPageTemplate {...pageData} />;
}

export function generateMetadata() {
  return buildMetadata({
    title: pageData.title,
    description: pageData.intro,
    pathname: "/study-in-canada",
    image: pageData.heroImage,
  });
}
