import { ServicePageTemplate } from "@/components/common/service-page-template";

export default function ApplicationGuidance() {
  return (
    <ServicePageTemplate
      heading="Application Guidance"
      currentRoute="Application Guidance"
      heroImage="/images/application-guidance-image.jpg"
      heroAlt="Application Guidance"
      intro={{
        title: "Personalized Application Support",
        text: "Our advisors help you select the right universities, prepare strong personal statements, and ensure your documents are complete and compelling. We guide you through every form, deadline, and requirement, so you can apply with confidence and clarity.",
        list: [
          "University and course selection strategy",
          "Personal statement and essay review",
          "Document checklist and submission guidance",
          "Deadline tracking and reminders",
          "Application portal navigation",
        ],
      }}
      sections={[
        {
          title: "What You Get",
          list: [
            "One-on-one sessions with experienced advisors",
            "Tailored university shortlisting based on your goals",
            "Detailed feedback on every draft and document",
            "Support for UCAS, Common App, and other platforms",
            "Guidance on reference letters and recommendations",
          ],
        },
        {
          title: "Why Choose Us?",
          text: "We have a proven track record of successful applications to top universities worldwide. Our personalized approach ensures you never miss a step, and our team is always available to answer your questions.",
        },
      ]}
      ctaText="Want to know more?"
      ctaDescription="Our team is ready to answer your questions and provide personalized guidance for your application journey."
      ctaButton="Send us a message"
      ctaHref="/contact"
    />
  );
}
