import { PageRouteHero } from "@/components/common/page-route-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollRevealSection } from "@/components/common/scroll-reveal-section";
import { FaWhatsapp } from "react-icons/fa";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <PageRouteHero heading="Contact Us" currentRoute="Contact" />

      <ScrollRevealSection className="bg-white py-14 sm:py-16">
        <div className="mx-auto grid w-full max-w-6xl items-stretch gap-8 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="evespire-delay-1 h-full rounded-3xl border-slate-200 shadow-sm">
            <CardContent className="p-6 sm:p-8">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
                Send an Enquiry
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                Tell us where you want to study
              </h2>
              <p className="mt-3 text-slate-600">
                Share your goals and timeline. Our admissions team will contact
                you with practical next steps.
              </p>

              <form className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="space-y-2 sm:col-span-1">
                  <label
                    htmlFor="fullName"
                    className="text-sm font-medium text-slate-700"
                  >
                    Full Name
                  </label>
                  <Input id="fullName" name="fullName" placeholder="Sam John" />
                </div>

                <div className="space-y-2 sm:col-span-1">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-slate-700"
                  >
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="sam@example.com"
                  />
                </div>

                <div className="space-y-2 sm:col-span-1">
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-slate-700"
                  >
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    placeholder="+234 800 000 0000"
                  />
                </div>

                <div className="space-y-2 sm:col-span-1">
                  <label
                    htmlFor="destination"
                    className="text-sm font-medium text-slate-700"
                  >
                    Preferred Destination
                  </label>
                  <Input
                    id="destination"
                    name="destination"
                    placeholder="Europe, Canada, Australia..."
                  />
                </div>

                <div className="space-y-2 sm:col-span-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium text-slate-700"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us your current level, preferred intake, and any questions you have."
                    className="min-h-36"
                  />
                </div>

                <div className="sm:col-span-2">
                  <Button className="h-12 rounded-xl bg-blue-700 px-7 text-base font-semibold text-white hover:bg-blue-800">
                    Submit Enquiry
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="evespire-delay-2 flex flex-col gap-4">
            <Card className="rounded-3xl border-slate-200 shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  Contact Information
                </h3>

                <div className="mt-5 space-y-4 text-sm text-slate-700">
                  <div className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-4 w-4 text-blue-700" />
                    <span>info@evespire.com</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-4 w-4 text-blue-700" />
                    <span>+234 800 000 0000</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-4 w-4 text-blue-700" />
                    <span>
                      4th Floor, Right Wing, Mulliner Towers, Plot 39 Alfred
                      Rewane Road, Ikoyi, Lagos, Nigeria
                    </span>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="mt-0.5 h-4 w-4 text-blue-700" />
                    <span>Mon - Fri, 9:00 AM - 5:00 PM</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-800 bg-slate-900 text-white shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-blue-300">
                  Quick Support
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200">
                  Need immediate assistance? We are available 24/7 to answer
                  your questions.
                </p>

                <div className="mt-5 flex flex-col gap-3">
                  <Button
                    asChild
                    className="h-11 w-full rounded-xl bg-green-600 text-white hover:!bg-green-600 hover:!text-white active:!bg-green-600"
                  >
                    <a
                      href="https://wa.me/2348000000000"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaWhatsapp className="h-4 w-4" />
                      Chat on WhatsApp
                    </a>
                  </Button>

                  <Button
                    asChild
                    className="h-11 w-full rounded-xl bg-blue-700 text-white hover:!bg-blue-700 hover:!text-white active:!bg-blue-700"
                  >
                    <a href="tel:+2348000000000">
                      <Phone className="h-4 w-4" />
                      Place a Phone Call
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card className="rounded-3xl border-slate-200 bg-slate-50 shadow-sm">
              <CardContent className="p-4">
                <h3 className="text-xl font-semibold text-slate-900">
                  Why Reach Out Early?
                </h3>
                <ul className="mt-4 space-y-3 text-sm text-slate-700">
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700" />
                    Better school choices based on your profile and budget.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700" />
                    Enough time for essays, documents, and visa preparation.
                  </li>
                  <li className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-blue-700" />
                    Clear timeline from first consultation to campus arrival.
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollRevealSection>

      <ScrollRevealSection className="bg-slate-50 py-14 sm:py-16">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
          <h3 className="evespire-delay-1 text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Frequently asked questions
          </h3>

          <Card className="evespire-delay-2 mt-6 rounded-2xl border-slate-200">
            <CardContent className="p-4 sm:p-5">
              <Accordion type="multiple" className="w-full">
                <AccordionItem value="item-1" className="px-1 sm:px-3">
                  <AccordionTrigger className="py-4 text-left text-[15px] font-semibold leading-6 text-slate-900 sm:text-base">
                    How quickly will Evespire respond after I submit this form?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pr-1 text-[15px] leading-7 text-slate-600 sm:pr-8">
                    We usually respond within 24 business hours. During peak
                    admission periods, it may take a little longer, but we
                    always follow up.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="px-1 sm:px-3">
                  <AccordionTrigger className="py-4 text-left text-[15px] font-semibold leading-6 text-slate-900 sm:text-base">
                    Can you help me choose the best country and university?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pr-1 text-[15px] leading-7 text-slate-600 sm:pr-8">
                    Yes. We match your profile, budget, course interest, and
                    long-term goals to suitable destinations and schools.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="px-1 sm:px-3">
                  <AccordionTrigger className="py-4 text-left text-[15px] font-semibold leading-6 text-slate-900 sm:text-base">
                    Do you also support visa and pre-departure planning?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pr-1 text-[15px] leading-7 text-slate-600 sm:pr-8">
                    Absolutely. We guide you through visa preparation and key
                    pre-departure steps, including travel readiness and settling
                    into your new study environment.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="px-1 sm:px-3">
                  <AccordionTrigger className="py-4 text-left text-[15px] font-semibold leading-6 text-slate-900 sm:text-base">
                    Can my parents or guardian join the consultation?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pr-1 text-[15px] leading-7 text-slate-600 sm:pr-8">
                    Yes. We encourage parents and guardians to join, so everyone
                    is aligned on timelines, costs, and decisions.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="px-1 sm:px-3">
                  <AccordionTrigger className="py-4 text-left text-[15px] font-semibold leading-6 text-slate-900 sm:text-base">
                    I am not ready yet. Can I still contact you early?
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 pr-1 text-[15px] leading-7 text-slate-600 sm:pr-8">
                    Yes. Reaching out early gives you more time for planning,
                    document preparation, and stronger application outcomes.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </CardContent>
          </Card>
        </div>
      </ScrollRevealSection>
    </>
  );
}
