import { ServicePageTemplate } from "@/components/common/service-page-template";

export default function ScholarshipAdvice() {
  return (
    <ServicePageTemplate
      heading="Scholarship Advice"
      currentRoute="Scholarship Advice"
      heroImage="https://placehold.co/600x300?text=Scholarship+Advice"
      heroAlt="Scholarship Advice"
      intro={{
        title: "Find and Win Scholarships",
        text: "Our team helps you identify scholarships, craft strong applications, and meet all requirements. We share tips for writing winning essays and guide you through the process, so you can secure the financial support you need.",
        list: [
          "Scholarship search and matching",
          "Application and essay strategy",
          "Document and eligibility checks",
          "Deadline management",
          "Interview preparation",
        ],
      }}
      sections={[
        {
          title: "Our Expertise",
          list: [
            "Guidance on merit-based and need-based scholarships",
            "Help with government, university, and private awards",
            "Essay brainstorming and editing support",
            "Advice on recommendation letters",
            "Interview tips and mock sessions",
          ],
        },
        {
          title: "Why Work With Us?",
          text: "We have helped students win scholarships at top institutions. Our team knows what selection committees look for and will help you stand out from the crowd.",
        },
      ]}
      ctaText="Want to know more?"
      ctaDescription="Contact us for personalized scholarship advice and let us help you maximize your funding opportunities."
      ctaButton="Send us a message"
      ctaHref="/contact"
    />
  );
}
