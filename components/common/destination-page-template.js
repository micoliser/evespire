import Image from "next/image";
import Link from "next/link";
import { PageRouteHero } from "@/components/common/page-route-hero";
import { ScrollRevealSection } from "@/components/common/scroll-reveal-section";
import { Card, CardContent } from "@/components/ui/card";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DestinationPageTemplate({
  title,
  routeLabel,
  heroImage,
  heroAlt,
  intro,
  whyStudy,
  benefits,
  requirements,
  references,
}) {
  return (
    <>
      <PageRouteHero heading={title} currentRoute={routeLabel} />

      <ScrollRevealSection className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="evespire-delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Destination Guide
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Why Study In {title.replace("Study in ", "")}
            </h2>
            <p className="mt-4 text-slate-600">{intro}</p>

            <ul className="mt-6 space-y-3 text-slate-700">
              {whyStudy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="evespire-delay-2">
            <div className="relative min-h-[320px] sm:min-h-[380px]">
              <Image
                src={heroImage}
                alt={heroAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="evespire-delay-1 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Key Advantages
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Benefits Of Studying In {title.replace("Study in ", "")}
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <Card
                key={benefit.title}
                className={`evespire-delay-${index + 1} rounded-3xl border-slate-200 shadow-sm`}
              >
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="flex items-center gap-2 mb-2">
                    <Check
                      className="w-5 h-5 shrink-0 text-blue-700"
                      strokeWidth={2.2}
                    />
                    <h3 className="text-lg font-semibold text-blue-700">
                      {benefit.title}
                    </h3>
                  </div>
                  <p className="text-slate-600">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection className="bg-white py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="evespire-delay-1 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Entry Checklist
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Some Requirements Needed To Study In{" "}
              {title.replace("Study in ", "")}
            </h2>
          </div>

          <Card className="evespire-delay-2 mt-8 rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <ul className="space-y-4 text-slate-700">
                {requirements.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="evespire-delay-3 mt-6 rounded-3xl border-slate-200 bg-slate-50 shadow-sm">
            <CardContent className="p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-slate-500">
                Reference Sources
              </p>
              <ul className="mt-3 space-y-2 text-sm text-slate-700">
                {references.map((ref) => (
                  <li key={ref.href}>
                    <Link
                      href={ref.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-700 underline-offset-4 hover:underline"
                    >
                      {ref.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <div className="evespire-delay-4 mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <span className="text-base text-lg font-medium text-slate-700">
              Want to get started?
            </span>
            <Button
              asChild
              className="h-12 rounded-xl p-0 border-none shadow-none bg-blue-700"
            >
              <a
                href={`https://wa.me/2349113218889?text=${encodeURIComponent(
                  `Hello, I am contacting Evespire to know more about studying in ${title.replace("Study in ", "")}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="advisor-whatsapp block h-12 rounded-xl bg-blue-700 px-7 text-base font-semibold text-white transition-colors duration-200"
              >
                Speak With An Advisor
              </a>
            </Button>
          </div>
        </div>
      </ScrollRevealSection>
    </>
  );
}
