import Image from "next/image";
import Link from "next/link";
import { PageRouteHero } from "@/components/common/page-route-hero";
import { ScrollRevealSection } from "@/components/common/scroll-reveal-section";

export function ServicePageTemplate({
  heading,
  currentRoute,
  heroImage,
  heroAlt,
  intro,
  sections = [],
  ctaText = "Want to know more?",
  ctaDescription = "Our team is ready to answer your questions and provide personalized guidance.",
  ctaButton = "Send us a message",
  ctaHref = "/contact",
}) {
  return (
    <main className="bg-white min-h-screen">
      <PageRouteHero
        heading={heading}
        currentRoute={currentRoute}
        previousRoutes={["services"]}
      />
      <ScrollRevealSection>
        <section className="mx-auto max-w-3xl px-4 py-12">
          {heroImage && (
            <img
              src={heroImage}
              alt={heroAlt || heading}
              className="rounded-lg mb-8 w-full object-cover max-h-64"
            />
          )}
          <h2 className="text-2xl font-bold mb-4">{intro.title}</h2>
          <p className="mb-6 text-slate-700">{intro.text}</p>
          {intro.list && (
            <ul className="list-disc pl-6 text-slate-700 space-y-2 mb-8">
              {intro.list.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )}
          {sections.map((section, idx) => (
            <div key={section.title || idx} className="mb-8">
              {section.title && (
                <h3 className="font-semibold text-blue-700 tracking-[0.2em] mb-2">
                  {section.title}
                </h3>
              )}
              {section.text && (
                <p className="text-slate-700 mb-2">{section.text}</p>
              )}
              {section.list && (
                <ul className="list-disc pl-6 text-slate-700 space-y-1 mb-6">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </section>
      </ScrollRevealSection>
      <ScrollRevealSection>
        <section className="mx-auto max-w-3xl px-4 pb-16 flex flex-col items-center">
          <div className="bg-blue-50 rounded-lg p-6 w-full flex flex-col items-center">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">
              {ctaText}
            </h4>
            <p className="mb-4 text-slate-700 text-center">{ctaDescription}</p>
            <a
              href={ctaHref}
              className="inline-block rounded-full bg-blue-700 px-6 py-2 text-white font-semibold uppercase tracking-wide shadow hover:bg-blue-800 transition"
            >
              {ctaButton}
            </a>
          </div>
        </section>
      </ScrollRevealSection>
    </main>
  );
}
