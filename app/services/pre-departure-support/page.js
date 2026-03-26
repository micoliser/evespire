import { ServicePageTemplate } from "@/components/common/service-page-template";

export default function PreDepartureSupport() {
  return (
    <ServicePageTemplate
      heading="Pre-departure Support"
      currentRoute="Pre-departure Support"
      heroImage="/images/PjaFSKJEQCA.jpg"
      heroAlt="Pre-departure Support"
      intro={{
        title: "Settle In With Confidence",
        text: "We help you prepare for life in a new country, from travel logistics to cultural adjustment. Our pre-departure sessions cover everything you need to know for a successful start, so you can arrive feeling ready and supported.",
        list: [
          "Travel and packing guidance",
          "Accommodation and arrival tips",
          "Health, safety, and insurance advice",
          "Cultural orientation and expectations",
          "Emergency contacts and support",
        ],
      }}
      sections={[
        {
          title: "What We Cover",
          list: [
            "Airport pickup and transportation options",
            "Opening a bank account abroad",
            "Mobile phone and internet setup",
            "Tips for making friends and joining communities",
            "How to handle homesickness and culture shock",
          ],
        },
        {
          title: "Ongoing Support",
          text: "Our support doesn't end when you board your flight. We're available for questions and guidance throughout your first semester and beyond.",
        },
      ]}
      ctaText="Want to know more?"
      ctaDescription="Reach out to us for more information on preparing for your journey abroad. We're happy to help!"
      ctaButton="Send us a message"
      ctaHref="/contact"
    />
  );
}
