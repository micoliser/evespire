import { ServicePageTemplate } from "@/components/common/service-page-template";

export default function VisaAssistance() {
  return (
    <ServicePageTemplate
      heading="Visa Assistance"
      currentRoute="Visa Assistance"
      heroImage="/images/visa-assistance-image.jpg"
      heroAlt="Visa Assistance"
      intro={{
        title: "Visa Application Made Simple",
        text: "We demystify the visa process, helping you gather the right documents, prepare for interviews, and avoid common pitfalls. Our team stays up-to-date on the latest requirements for each destination, so you can submit your application with confidence.",
        list: [
          "Step-by-step visa application support",
          "Document preparation and review",
          "Mock interviews and coaching",
          "Updates on changing visa rules",
          "Pre-departure checklists",
        ],
      }}
      sections={[
        {
          title: "How We Help",
          list: [
            "Personalized document checklists for your destination",
            "Expert review of all forms and supporting materials",
            "Practice interviews to boost your confidence",
            "Real-time updates on embassy requirements",
            "Advice on financial documentation and proof of funds",
          ],
        },
        {
          title: "Success Stories",
          text: "Students have secured their visas with our help. We stay with you every step of the way, from your first question to your final approval.",
        },
      ]}
      ctaText="Want to know more?"
      ctaDescription="If you have questions about the visa process or need help with your application, our experts are here for you."
      ctaButton="Send us a message"
      ctaHref="/contact"
    />
  );
}
