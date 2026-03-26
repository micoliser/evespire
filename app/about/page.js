import Link from "next/link";
import Image from "next/image";
import { PageRouteHero } from "@/components/common/page-route-hero";
import { ScrollRevealSection } from "@/components/common/scroll-reveal-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap, ScrollText, ShieldCheck } from "lucide-react";

const valuePoints = [
  {
    title: "Student-First Guidance",
    icon: GraduationCap,
    description:
      "Every recommendation is tailored to the student's profile, budget, goals, and long-term career direction.",
  },
  {
    title: "Transparent Process",
    icon: ScrollText,
    description:
      "We keep families informed at every stage with clear timelines, practical updates, and honest advice.",
  },
  {
    title: "End-to-End Support",
    icon: ShieldCheck,
    description:
      "From school selection to visa and pre-departure preparation, we support students through each key step.",
  },
];

const teamMembers = [
  {
    name: "Ada Okafor",
    role: "Lead Education Advisor",
    bio: "Ada guides students on destination and course strategy, ensuring every application aligns with long-term academic goals.",
    image: "/images/UA6h1Cs.jpg",
  },
  {
    name: "Daniel Mensah",
    role: "Admissions Specialist",
    bio: "Daniel supports document checks, personal statements, and deadline management to keep submissions strong and complete.",
    image: "/images/euSe5fQjBiE.jpg",
  },
  {
    name: "Fatima Bello",
    role: "Visa & Compliance Officer",
    bio: "Fatima helps families prepare accurate visa documentation and practical pre-departure plans for a smooth transition.",
    image: "/images/KUzlAah2dog.jpg",
  },
  {
    name: "Ibrahim Yusuf",
    role: "Student Success Coordinator",
    bio: "Ibrahim provides ongoing student support, from travel readiness to settling into campus life in new countries.",
    image: "/images/UA6h1Cs.jpg",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageRouteHero heading="About Us" currentRoute="About" />

      <ScrollRevealSection className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="evespire-delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Who We Are
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Helping African students access global education opportunities
            </h2>
            <p className="mt-4 text-slate-600">
              Evespire Investment Limited is an education consulting team
              focused on helping students and families make confident study
              abroad decisions. We combine practical planning with personalized
              support to turn complex admission journeys into clear, achievable
              steps.
            </p>
            <p className="mt-3 text-slate-600">
              Our approach is simple: understand your goals, build the right
              strategy, and stay with you until you are prepared for your next
              academic destination.
            </p>
          </div>

          <Card className="evespire-delay-2 rounded-3xl border-slate-200 bg-slate-50 shadow-sm">
            <CardContent className="p-6 sm:p-7">
              <h3 className="text-xl font-semibold text-slate-900">
                Evespire At A Glance
              </h3>

              <div className="mt-5 grid grid-cols-2 gap-4">
                <div className="evespire-delay-1 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-2xl font-bold text-blue-700">5+</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                    Major Destinations
                  </p>
                </div>
                <div className="evespire-delay-2 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-2xl font-bold text-blue-700">1:1</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                    Personalized Advising
                  </p>
                </div>
                <div className="evespire-delay-3 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-2xl font-bold text-blue-700">End-to-End</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                    Application Support
                  </p>
                </div>
                <div className="evespire-delay-4 rounded-2xl border border-slate-200 bg-white p-4">
                  <p className="text-2xl font-bold text-blue-700">24/7</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.12em] text-slate-500">
                    Quick Support Access
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            <div className="evespire-delay-1 order-2 flex h-full flex-col justify-center lg:order-1">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Our Mission
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Supporting students from ambition to achievement
              </h2>
              <p className="mt-4 text-slate-600">
                Our mission is to bridge the gap between ambition and
                achievement by providing comprehensive support to students
                aspiring to study abroad. From personalized counseling to visa
                processing, we are committed to making the journey to
                international education seamless and accessible.
              </p>
            </div>

            <div className="evespire-delay-2 order-1 relative min-h-[320px] overflow-hidden border border-slate-200 bg-white shadow-sm sm:min-h-[380px] lg:order-2">
              <Image
                src="/images/huiJUttuiJPQ.png"
                alt="Evespire team supporting students"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection className="bg-white py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid items-stretch gap-8 lg:grid-cols-2">
            <div className="evespire-delay-1 order-1 relative min-h-[320px] overflow-hidden border border-slate-200 bg-slate-50 shadow-sm sm:min-h-[380px] lg:order-1">
              <Image
                src="/images/oiHYFUFfyyGF.jpg"
                alt="Students planning international education journey"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="evespire-delay-2 order-2 flex h-full flex-col justify-center lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Our Vision
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Becoming a trusted partner for global education success
              </h2>
              <p className="mt-4 text-slate-600">
                We envision a future where African students can confidently
                access global opportunities with the right guidance and support.
                Our goal is to be the most trusted education consulting partner
                for families seeking long-term academic and career outcomes.
              </p>
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection className="bg-white py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="evespire-delay-1 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Our Values
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              What families can always expect from us
            </h2>
          </div>

          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {valuePoints.map((item, index) => (
              <Card
                key={item.title}
                className={`evespire-delay-${index + 2} rounded-3xl border-slate-200 shadow-sm`}
              >
                <CardContent className="p-6">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-slate-600">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection className="bg-white py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="evespire-delay-1 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Meet The Team
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              The people supporting your study abroad journey
            </h2>
          </div>

          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {teamMembers.map((member, index) => (
              <Card
                key={member.name}
                className={`evespire-delay-${index + 1} gap-0 py-0 overflow-hidden border-0 shadow-md`}
              >
                <div className="relative h-56">
                  <Image
                    src={member.image}
                    alt={`${member.name} - ${member.role}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 25vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
                    <div className="flex flex-col items-start">
                      <div className="block w-fit bg-black/75 px-3 py-4 text-white">
                        <p className="text-base font-semibold leading-tight">
                          {member.name}
                        </p>
                      </div>
                      <div className="relative z-10 -mt-3 ml-4 block w-fit bg-blue-700/85 px-3 py-1.5 text-white">
                        <p className="block max-w-full overflow-hidden text-ellipsis whitespace-nowrap text-[10px] uppercase tracking-[0.08em] leading-tight sm:text-[11px]">
                          {member.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <p className="text-sm leading-relaxed text-slate-600">
                    {member.bio}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center text-white sm:px-6 lg:flex-row lg:text-left">
          <div className="evespire-delay-1">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Talk To Our Team
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Let us help you plan your next academic move
            </h2>
            <p className="mt-2 text-blue-100">
              Book a consultation and get a roadmap built around your goals.
            </p>
          </div>

          <div className="evespire-delay-2">
            <Link href="/contact" className="inline-flex">
              <Button className="h-12 rounded-xl bg-white px-8 text-base font-semibold text-blue-700">
                Send us a message
              </Button>
            </Link>
          </div>
        </div>
      </ScrollRevealSection>

      <div className="h-[100px] bg-white" />
    </>
  );
}
