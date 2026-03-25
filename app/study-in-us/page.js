import { DestinationPageTemplate } from "@/components/common/destination-page-template";

const pageData = {
  title: "Study in the US",
  routeLabel: "Study in the US",
  heroImage: "/images/euSe5fQjBiE.jpg",
  heroAlt: "Students in a US university counseling session",
  intro:
    "The United States is a leading destination for students seeking research depth, flexible academic pathways, and strong university-industry connections.",
  whyStudy: [
    "US institutions are known for world-class research output, advanced facilities, and interdisciplinary course structures.",
    "Students can often explore electives before finalizing concentration areas, which supports better academic fit.",
    "Campuses usually provide robust support ecosystems, including writing centers, career services, and international student offices.",
  ],
  benefits: [
    {
      title: "Research and Innovation Access",
      description:
        "Students can engage with high-impact labs, faculty projects, and startup ecosystems in major US education hubs.",
    },
    {
      title: "Career Exposure",
      description:
        "Eligible students may pursue Optional Practical Training (OPT), and some STEM graduates may qualify for an extension under current rules.",
    },
    {
      title: "Wide Program Choice",
      description:
        "From liberal arts to specialized professional tracks, the US offers one of the largest ranges of accredited academic programs.",
    },
  ],
  requirements: [
    "Admission from a SEVP-certified school and issuance of Form I-20.",
    "Payment of the SEVIS I-901 fee before visa interview scheduling.",
    "Completion of DS-160 and attendance at an F-1 visa interview where required.",
    "Proof of financial capacity for tuition and living costs for the intended period of study.",
    "A valid passport and supporting academic/identity documents requested by your institution and consular office.",
  ],
  references: [
    {
      label: "US Department of State: Student Visa",
      href: "https://travel.state.gov/content/travel/en/us-visas/study/student-visa.html",
    },
    {
      label: "US ICE SEVP: Form I-20 and SEVIS",
      href: "https://www.ice.gov/sevis/students",
    },
  ],
};

export default function StudyInUsPage() {
  return <DestinationPageTemplate {...pageData} />;
}
