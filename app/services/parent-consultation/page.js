import { ServicePageTemplate } from "@/components/common/service-page-template";

export default function ParentConsultation() {
  return (
    <ServicePageTemplate
      heading="Parent Consultation"
      currentRoute="Parent Consultation"
      heroImage="https://placehold.co/600x300?text=Parent+Consultation"
      heroAlt="Parent Consultation"
      intro={{
        title: "Support for Parents",
        text: "We work closely with parents to answer questions, address concerns, and provide clear information about the study abroad journey. Our consultations help families feel informed, confident, and ready to support their students.",
        list: [
          "One-on-one parent consultations",
          "Financial planning and budgeting",
          "Safety, health, and well-being advice",
          "Ongoing family support",
          "Communication tips for staying connected",
        ],
      }}
      sections={[
        {
          title: "What Parents Can Expect",
          list: [
            "Workshops on supporting your child abroad",
            "Guidance on legal and medical documentation",
            "Advice for handling emergencies",
            "Tips for maintaining healthy communication",
            "Access to a parent support network",
          ],
        },
        {
          title: "Our Commitment",
          text: "We believe parents are partners in the study abroad journey. Our team is here to empower you with knowledge and peace of mind at every stage.",
        },
      ]}
      ctaText="Want to know more?"
      ctaDescription="We're here to support parents every step of the way. Get in touch for more information or to schedule a consultation."
      ctaButton="Send us a message"
      ctaHref="/contact"
    />
  );
}
