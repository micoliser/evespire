"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArticleCard } from "@/components/home/article-card";
import { ScrollRevealSection } from "@/components/common/scroll-reveal-section";

const mediaItems = [
  {
    type: "image",
    src: "/images/home-top-bg-1.png",
    alt: "Happy students celebrating",
  },
  {
    type: "image",
    src: "/images/home-top-bg-2.png",
    alt: "Three students sitting together and looking at a laptop, smiling",
  },
  { type: "video", src: "/videos/home-top-vid-1.mp4" },
  {
    type: "image",
    src: "/images/home-top-bg-3.png",
    alt: "Happy students in a school library",
  },
  {
    type: "image",
    src: "/images/home-top-bg-4.jpg",
    alt: "Educational consulting meeting",
  },
  { type: "video", src: "/videos/home-top-vid-2.mp4" },
];

const serviceCards = [
  {
    title: "University Selection",
    description:
      "We match your goals, budget, and career plan to the right schools in the UK, US, Canada, Germany, Australia and more. You also get a realistic shortlist with clear tuition comparisons and admission fit guidance.",
  },
  {
    title: "Application Support",
    description:
      "From personal statements to documentation checks, we help you submit confidently and on time. We review each submission step with you so your application remains strong, complete, and deadline-ready.",
  },
  {
    title: "Visa & Pre-Departure",
    description:
      "We guide your visa process and prepare you for accommodation, travel, and your first semester abroad. Our team helps you plan practical arrival details so you can settle in quickly and confidently.",
  },
];

const pathwaySteps = [
  {
    step: "01",
    title: "Discovery Call",
    description:
      "We understand your profile, preferred destination, and timeline.",
  },
  {
    step: "02",
    title: "Strategy Plan",
    description:
      "You get a clear roadmap for schools, documents, and deadlines.",
  },
  {
    step: "03",
    title: "Application Execution",
    description:
      "We work with you on applications, essays, and admission tracking.",
  },
  {
    step: "04",
    title: "Visa to Arrival",
    description:
      "Final support to help you transition smoothly into your new campus life.",
  },
];

const destinationCards = [
  {
    country: "United Kingdom",
    href: "/study-in-uk-europe",
    flag: "https://flagcdn.com/w80/gb.png",
    intake: "Main Intake: Sep",
    note: "Top pick for one-year masters and strong employability pathways.",
  },
  {
    country: "Canada",
    href: "/study-in-canada",
    flag: "https://flagcdn.com/w80/ca.png",
    intake: "Intakes: Jan, May, Sep",
    note: "Popular for quality education and post-study work opportunities.",
  },
  {
    country: "Australia",
    href: "/study-in-australia",
    flag: "https://flagcdn.com/w80/au.png",
    intake: "Intakes: Feb, Jul",
    note: "Great option for practical learning and student-friendly cities.",
  },
  {
    country: "United States",
    href: "/study-in-us",
    flag: "https://flagcdn.com/w80/us.png",
    intake: "Intakes: Jan, Sep",
    note: "World leader in research, innovation, and campus diversity.",
  },
];

const studentReviews = [
  {
    name: "Student A",
    reviewText:
      "The support was clear from day one. I had a plan, deadlines, and strong document checks that helped me submit with confidence.",
  },
  {
    name: "Student B",
    reviewText:
      "Every visa step was explained in simple terms. I knew exactly what to prepare, and the process felt organized and stress-free.",
  },
  {
    name: "Student C",
    reviewText:
      "From school selection to pre-departure, the team stayed responsive and practical. It felt like having a trusted partner throughout.",
  },
  {
    name: "Student D",
    reviewText:
      "I appreciated how simple the whole process felt. The guidance was practical, timely, and helped me stay on track from start to finish.",
  },
];

export default function HomeClient() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [hasMounted, setHasMounted] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);
  const [hasSlideChanged, setHasSlideChanged] = useState(false);
  const [showJourneyCards, setShowJourneyCards] = useState(false);
  const journeyCardsRef = useRef(null);

  const leftBase = {
    animationName: "evespireSlideInLeft",
    animationDuration: "800ms",
    animationTimingFunction: "ease-out",
    animationFillMode: "both",
  };

  const rightBase = {
    animationName: "evespireSlideInRight",
    animationDuration: "800ms",
    animationTimingFunction: "ease-out",
    animationFillMode: "both",
  };

  const firstLoadLeftBase = {
    animationName: "evespireSlideInLeftViewport",
    animationDuration: "950ms",
    animationTimingFunction: "ease-out",
    animationFillMode: "both",
  };

  const firstLoadRightBase = {
    animationName: "evespireSlideInRightViewport",
    animationDuration: "950ms",
    animationTimingFunction: "ease-out",
    animationFillMode: "both",
  };

  useEffect(() => {
    setHasMounted(true);
    const firstLoadTimer = setTimeout(() => {
      setIsFirstLoad(false);
    }, 1100);

    return () => clearTimeout(firstLoadTimer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setHasSlideChanged(true);
      setActiveIndex((prev) => (prev + 1) % mediaItems.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShowJourneyCards(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    if (journeyCardsRef.current) {
      observer.observe(journeyCardsRef.current);
    }

    return () => {
      if (journeyCardsRef.current) {
        observer.unobserve(journeyCardsRef.current);
      }
    };
  }, []);

  const getLeftAnimationStyle = (delayMs) => {
    if (!hasMounted) return undefined;
    if (isFirstLoad)
      return { ...firstLoadLeftBase, animationDelay: `${delayMs}ms` };
    if (!hasSlideChanged) return undefined;
    const base = leftBase;
    return { ...base, animationDelay: `${delayMs}ms` };
  };

  const getRightAnimationStyle = (delayMs) => {
    if (!hasMounted) return undefined;
    if (isFirstLoad)
      return { ...firstLoadRightBase, animationDelay: `${delayMs}ms` };
    if (!hasSlideChanged) return undefined;
    const base = rightBase;
    return { ...base, animationDelay: `${delayMs}ms` };
  };

  const openAppointmentSidebar = () => {
    window.dispatchEvent(new Event("evespire:open-appointment"));
  };

  return (
    <main className="bg-white">
      <section className="relative min-h-[calc(100vh-5rem)] overflow-hidden">
        <div className="absolute inset-0">
          {mediaItems.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.src}
                className={`absolute inset-0 transition-opacity duration-700 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.type === "image" ? (
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="100vw"
                    priority={index === 0}
                    className="object-cover"
                  />
                ) : (
                  <video
                    key={item.src}
                    className="h-full w-full object-cover"
                    src={item.src}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  />
                )}
              </div>
            );
          })}
        </div>

        <div className="absolute inset-0 bg-black/45" />

        <div className="relative mx-auto flex min-h-[calc(100vh-5rem)] w-full max-w-6xl items-center justify-center px-4 py-16 text-center sm:px-6">
          <div className="max-w-2xl text-white">
            <p
              key={`intro-${activeIndex}`}
              style={getLeftAnimationStyle(0)}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100"
            >
              Welcome to Evespire
            </p>
            <h1
              key={`heading-${activeIndex}`}
              style={getLeftAnimationStyle(100)}
              className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl"
            >
              Educational consulting designed to guide your study abroad.
            </h1>
            <p
              key={`description-${activeIndex}`}
              style={getRightAnimationStyle(250)}
              className="mt-5 text-base text-blue-50/90 sm:text-lg font-bold"
            >
              We help students and families make confident academic decisions to
              study abroad with clear, practical support.
            </p>

            <div
              key={`flags-${activeIndex}`}
              style={getRightAnimationStyle(320)}
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
              aria-label="Supported study destinations"
            >
              <img
                src="https://flagcdn.com/w80/gb.png"
                alt="United Kingdom flag"
                title="United Kingdom"
                className="h-7 w-11 rounded-sm object-cover shadow-md sm:h-8 sm:w-12"
                loading="lazy"
              />
              <img
                src="https://flagcdn.com/w80/kr.png"
                alt="South Korea flag"
                title="Asia"
                className="h-7 w-11 rounded-sm object-cover shadow-md sm:h-8 sm:w-12"
                loading="lazy"
              />
              <img
                src="https://flagcdn.com/w80/ca.png"
                alt="Canada flag"
                title="Canada"
                className="h-7 w-11 rounded-sm object-cover shadow-md sm:h-8 sm:w-12"
                loading="lazy"
              />
              <img
                src="https://flagcdn.com/w80/us.png"
                alt="United States flag"
                title="United States"
                className="h-7 w-11 rounded-sm object-cover shadow-md sm:h-8 sm:w-12"
                loading="lazy"
              />
              <img
                src="https://flagcdn.com/w80/au.png"
                alt="Australia flag"
                title="Australia"
                className="h-7 w-11 rounded-sm object-cover shadow-md sm:h-8 sm:w-12"
                loading="lazy"
              />
            </div>

            <div
              key={`cta-${activeIndex}`}
              style={getRightAnimationStyle(400)}
              className="mt-8 flex justify-center"
            >
              <Link href="/contact" className="inline-flex">
                <Button
                  size="lg"
                  className="px-7 py-6 text-lg bg-blue-700 text-white"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <ScrollRevealSection className="relative overflow-hidden bg-slate-50 py-20">
        <div className="pointer-events-none absolute -left-16 top-8 h-48 w-48 rounded-full bg-blue-200/40 blur-3xl" />
        <div className="pointer-events-none absolute -right-10 bottom-0 h-56 w-56 rounded-full bg-cyan-200/40 blur-3xl" />

        <div className="relative mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              What We Do
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Practical support for African students aiming for global education
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {serviceCards.map((card, index) => (
              <ArticleCard
                key={card.title}
                title={card.title}
                description={card.description}
                delayClass={`evespire-delay-${index + 1}`}
                className="group rounded-2xl border-0 bg-transparent p-6 ring-0 shadow-none transition duration-300 hover:-translate-y-1"
                titleClassName="text-xl font-semibold text-blue-700"
              />
            ))}
          </div>
        </div>
      </ScrollRevealSection>

      <section className="py-20">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <ScrollRevealSection className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
              Your Journey
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              A clear 4-step pathway from Africa to your dream campus
            </h2>
          </ScrollRevealSection>

          <div
            className="mt-12 grid gap-10 lg:grid-cols-4"
            ref={journeyCardsRef}
          >
            {pathwaySteps.map((item, index) => (
              <Card
                key={item.step}
                style={
                  showJourneyCards
                    ? {
                        opacity: 0,
                        transform: "translateY(30px)",
                        animation: `journeyCardReveal 700ms ease-out forwards`,
                        animationDelay: `${index * 500}ms`,
                      }
                    : {}
                }
                className="relative overflow-visible rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
              >
                <CardContent className="p-0">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {item.step}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-slate-600">{item.description}</p>
                </CardContent>

                {index < pathwaySteps.length - 1 && (
                  <>
                    <div
                      className="absolute left-1/2 top-full z-10 mt-3 -translate-x-1/2 text-blue-500 lg:hidden"
                      aria-hidden="true"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                      >
                        <path
                          d="M12 4V19M12 19L6 13M12 19L18 13"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>

                    <div
                      className="absolute left-full top-1/2 z-10 ml-3 hidden -translate-y-1/2 text-blue-500 lg:block"
                      aria-hidden="true"
                    >
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-7 w-7"
                      >
                        <path
                          d="M4 12H19M19 12L13 6M19 12L13 18"
                          stroke="currentColor"
                          strokeWidth="2.25"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      <ScrollRevealSection className="bg-slate-900 py-20 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Choose a study destination that fits your future
            </h2>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {destinationCards.map((destination, index) => (
              <Card
                key={destination.country}
                className={`evespire-delay-${index + 1} rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-sm transition duration-300 hover:bg-white/10`}
              >
                <CardContent className="p-0">
                  <img
                    src={destination.flag}
                    alt={`${destination.country} flag`}
                    className="mb-3 h-7 w-11 rounded-sm object-cover shadow-md"
                    loading="lazy"
                  />
                  <h3 className="text-lg font-semibold text-blue-700">
                    {destination.country}
                  </h3>
                  <p className="mt-2 text-sm text-cyan-200">
                    {destination.intake}
                  </p>
                  <p className="mt-3 text-sm text-slate-200">
                    {destination.note}
                  </p>
                  <Link
                    href={destination.href}
                    className="mt-4 inline-flex text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
                  >
                    Learn more
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection className="bg-slate-900 py-20 text-white">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <div className="grid items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl space-y-4 text-slate-200">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Why Evespire
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Why families trust Evespire
              </h2>
              <p className="text-base leading-relaxed sm:text-lg">
                Families choose Evespire because they need clarity, not
                confusion. We break down every step into practical actions, so
                students and parents can make decisions with confidence.
              </p>
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                Instead of generic advice, our team gives tailored direction for
                your budget, destination, and timeline, then stays close through
                applications, visa preparation, and pre-departure planning.
              </p>
            </div>

            <div className="w-full overflow-hidden lg:ml-auto lg:max-w-xl">
              <Image
                src="/images/why-families-trust-evespire-image.png"
                alt="Why families trust Evespire"
                width={640}
                height={480}
                className="block h-auto w-full object-cover"
                priority={false}
              />
            </div>
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 py-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-6 px-4 text-center text-white sm:px-6 lg:flex-row lg:text-left">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-100">
              Start Your Journey
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to plan your study abroad path?
            </h2>
            <p className="mt-2 text-blue-100">
              Book a consultation and get a tailored roadmap for your next step.
            </p>
          </div>

          <div className="evespire-delay-2">
            <Button
              type="button"
              onClick={openAppointmentSidebar}
              className="h-14 rounded-xl bg-white px-8 text-base font-semibold text-blue-700 hover:bg-blue-50"
            >
              Book Free Consultation
            </Button>
          </div>
        </div>
      </ScrollRevealSection>

      <style jsx global>{`
        @keyframes evespireSlideInLeft {
          from {
            opacity: 0;
            transform: translateX(-56px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes evespireSlideInRight {
          from {
            opacity: 0;
            transform: translateX(56px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes evespireSlideInLeftViewport {
          from {
            opacity: 0;
            transform: translateX(-110vw);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes evespireSlideInRightViewport {
          from {
            opacity: 0;
            transform: translateX(110vw);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes evespireFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .evespire-reveal {
          animation: evespireFadeUp 0.8s ease-out both;
        }

        .evespire-delay-1 {
          animation-delay: 80ms;
        }

        .evespire-delay-2 {
          animation-delay: 150ms;
        }

        .evespire-delay-3 {
          animation-delay: 220ms;
        }

        .evespire-delay-4 {
          animation-delay: 290ms;
        }

        @keyframes journeyCardReveal {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </main>
  );
}
