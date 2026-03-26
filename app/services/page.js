import Link from "next/link";
import { PageRouteHero } from "@/components/common/page-route-hero";
import { ScrollRevealSection } from "@/components/common/scroll-reveal-section";

const services = [
  {
    label: "Application Guidance",
    href: "/services/application-guidance",
    image: "https://placehold.co/400x200?text=Application+Guidance",
    desc: "Personalized support for university selection, personal statements, and application forms...",
  },
  {
    label: "Visa Assistance",
    href: "/services/visa-assistance",
    image: "https://placehold.co/400x200?text=Visa+Assistance",
    desc: "Step-by-step help with visa documents, interviews, and up-to-date requirements...",
  },
  {
    label: "Pre-departure Support",
    href: "/services/pre-departure-support",
    image: "https://placehold.co/400x200?text=Pre-departure+Support",
    desc: "Guidance on travel, accommodation, and settling in for a smooth transition...",
  },
  {
    label: "Scholarship Advice",
    href: "/services/scholarship-advice",
    image: "https://placehold.co/400x200?text=Scholarship+Advice",
    desc: "Find scholarships, get help with essays, and maximize your funding opportunities...",
  },
  {
    label: "Parent Consultation",
    href: "/services/parent-consultation",
    image: "https://placehold.co/400x200?text=Parent+Consultation",
    desc: "Support and information for parents to help their children succeed abroad...",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen pb-16">
      <PageRouteHero heading={"Our Services"} currentRoute={"services"} />
      <ScrollRevealSection>
        <div className="mx-auto max-w-4xl px-4 py-12">
          <div className="text-center mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              What we offer
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Comprehensive Support for Your Global Education Journey
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, idx) => (
              <div
                key={service.href}
                className={`rounded-2xl border border-slate-200 bg-white shadow hover:shadow-lg transition overflow-hidden flex flex-col evespire-scroll-reveal${idx < 2 ? " evespire-delay-1" : " evespire-delay-2"}`}
                style={{
                  transitionDelay: `${(idx % 2) * 450 + Math.floor(idx / 2) * 450}ms`,
                }}
              >
                <img
                  src={service.image}
                  alt={service.label}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6 flex-1 flex flex-col">
                  <h2 className="text-xl font-semibold text-blue-700 mb-2">
                    {service.label}
                  </h2>
                  <p className="text-slate-700 mb-4 flex-1">
                    {service.desc.replace(/\.\.\.$/, "")}
                    {"..."}
                    <Link
                      href={service.href}
                      className="ml-1 text-cyan-600 font-semibold underline-offset-4 hover:underline transition"
                    >
                      Learn more
                    </Link>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </ScrollRevealSection>
    </main>
  );
}
