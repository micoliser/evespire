import Link from "next/link";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { FaInstagram, FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Services", href: "#" },
  { label: "Destinations", href: "#" },
  { label: "Student Stories", href: "#" },
];

const destinationLinks = [
  { label: "Study in UK/Europe", href: "/study-in-uk-europe" },
  { label: "Study in US", href: "/study-in-us" },
  { label: "Study in Canada", href: "/study-in-canada" },
  { label: "Study in Australia", href: "/study-in-australia" },
  { label: "Study in Asia", href: "/study-in-asia" },
];

const supportLinks = [
  { label: "Application Guidance", href: "#" },
  { label: "Visa Assistance", href: "#" },
  { label: "Pre-Departure Support", href: "#" },
  { label: "Scholarship Advice", href: "#" },
  { label: "Parent Consultations", href: "#" },
];

const socialLinks = [
  { label: "Instagram", icon: FaInstagram, href: "#" },
  { label: "Facebook", icon: FaFacebook, href: "#" },
  { label: "LinkedIn", icon: FaLinkedin, href: "#" },
  { label: "YouTube", icon: FaYoutube, href: "#" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-slate-900 text-white">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-4 pb-8 pt-14 sm:px-6 sm:pt-16">
        <div className="grid gap-10 border-b border-white/10 pb-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="sm:col-span-2">
            <h3 className="text-2xl font-bold tracking-tight text-blue-300">
              Evespire Investment Limited
            </h3>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-300">
              We help African students and families build clear, practical
              pathways to global education opportunities with confidence,
              structure, and full support.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-200">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>info@evespire.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-cyan-400" />
                <span>+234 800 000 0000</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-cyan-400" />
                <span>
                  4th Floor, Right Wing, Mulliner Towers, Plot 39 Alfred Rewane
                  Road, Ikoyi, Lagos, Nigeria
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-cyan-400" />
                <span>Mon - Fri, 9:00 AM - 5:00 PM</span>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-300 transition hover:border-cyan-300/40 hover:bg-cyan-400/10 hover:text-cyan-200 hover:underline"
                    aria-label={item.label}
                  >
                    <IconComponent className="h-5 w-5" />
                  </Link>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Quick Links
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-cyan-200 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Destinations
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {destinationLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-cyan-200 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
              Student Support
            </h4>
            <ul className="mt-4 space-y-2 text-sm text-slate-300">
              {supportLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-cyan-200 hover:underline"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-6 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} Evespire Investment Limited. All rights
            reserved.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="#"
              className="transition hover:text-slate-200 hover:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="#"
              className="transition hover:text-slate-200 hover:underline"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
