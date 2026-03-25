"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Pacifico } from "next/font/google";
import { Mail, MapPin, Menu, Phone, X, ChevronDown } from "lucide-react";
const destinations = [
  { label: "UK & Europe", href: "/study-in-uk-europe" },
  { label: "United States", href: "/study-in-us" },
  { label: "Canada", href: "/study-in-canada" },
  { label: "Australia", href: "/study-in-australia" },
  { label: "Asia", href: "/study-in-asia" },
];
import { Button } from "@/components/ui/button";
import { DatePicker } from "@/components/common/date-picker";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

const appointmentTimes = [
  "09:00 AM",
  "09:30 AM",
  "10:00 AM",
  "10:30 AM",
  "11:00 AM",
  "11:30 AM",
  "12:00 PM",
  "12:30 PM",
  "01:00 PM",
  "01:30 PM",
  "02:00 PM",
  "02:30 PM",
  "03:00 PM",
  "03:30 PM",
  "04:00 PM",
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [appointmentSidebarState, setAppointmentSidebarState] =
    useState("closed"); // "closed" | "opening" | "open" | "closing"
  const [appointmentDate, setAppointmentDate] = useState();
  const [appointmentTime, setAppointmentTime] = useState("");
  const [appointmentMode, setAppointmentMode] = useState("phone call");
  const [destDropdownOpen, setDestDropdownOpen] = useState(false);
  const pathname = usePathname();
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const closeMenu = () => setIsOpen(false);
  const openAppointment = () => {
    setIsOpen(false);
    setAppointmentSidebarState("opening");
    setTimeout(() => setAppointmentSidebarState("open"), 10);
  };
  const closeAppointment = () => {
    setAppointmentSidebarState("closing");
    setTimeout(() => setAppointmentSidebarState("closed"), 450);
  };

  useEffect(() => {
    if (
      appointmentSidebarState !== "open" &&
      appointmentSidebarState !== "opening"
    )
      return;

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeAppointment();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [appointmentSidebarState]);

  useEffect(() => {
    const handleOpenAppointment = () => {
      setIsOpen(false);
      openAppointment();
    };

    window.addEventListener("evespire:open-appointment", handleOpenAppointment);

    return () => {
      window.removeEventListener(
        "evespire:open-appointment",
        handleOpenAppointment,
      );
    };
  }, []);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-20 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
          <Link
            href="/"
            className={`${pacifico.className} text-4xl tracking-tight text-slate-900`}
            onClick={closeMenu}
          >
            Evespire
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            <Link
              href="/"
              className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide uppercase transition ${
                pathname === "/"
                  ? "bg-blue-700 text-white"
                  : "text-blue-700 hover:bg-blue-700 hover:text-white"
              }`}
            >
              Home
            </Link>
            {/* Destinations Dropdown (Desktop) */}
            <div className="relative group">
              <div
                className="relative"
                onMouseEnter={() => setDestDropdownOpen(true)}
                onMouseLeave={() => setDestDropdownOpen(false)}
                onFocus={() => setDestDropdownOpen(true)}
                onBlur={() => setDestDropdownOpen(false)}
                tabIndex={0}
              >
                <button
                  type="button"
                  className={`flex items-center rounded-md px-3 py-2 text-sm font-medium tracking-wide uppercase transition
                    ${pathname.startsWith("/study-in-") ? "bg-blue-700 text-white" : "text-blue-700 hover:bg-blue-700 hover:text-white"}
                  `}
                  aria-haspopup="true"
                  aria-expanded={destDropdownOpen}
                >
                  Destinations
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform ${destDropdownOpen ? "rotate-180" : ""}`}
                  />
                </button>
                <div
                  className={`absolute left-0 top-full z-40 min-w-[200px] rounded-md border border-slate-200 bg-white shadow-lg transition-all duration-300 ease-in-out origin-top overflow-hidden
                    ${destDropdownOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-95 opacity-0 pointer-events-none"}`}
                  style={{ transformOrigin: "top" }}
                >
                  <div className="py-2">
                    {destinations.map((dest) => (
                      <Link
                        key={dest.href}
                        href={dest.href}
                        className={`block w-full px-4 py-2 text-left text-sm transition
                          ${pathname === dest.href ? "bg-blue-700 text-white" : "text-blue-700 hover:bg-blue-700 hover:text-white"}
                        `}
                        onClick={() => setDestDropdownOpen(false)}
                      >
                        {dest.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/about"
              className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide uppercase transition ${
                pathname === "/about"
                  ? "bg-blue-700 text-white"
                  : "text-blue-700 hover:bg-blue-700 hover:text-white"
              }`}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide uppercase transition ${
                pathname === "/contact"
                  ? "bg-blue-700 text-white"
                  : "text-blue-700 hover:bg-blue-700 hover:text-white"
              }`}
            >
              Contact
            </Link>

            <Button
              type="button"
              onClick={openAppointment}
              className="ml-2 h-10 rounded-md border border-blue-200 bg-blue-50 px-4 text-sm font-semibold uppercase tracking-wide text-blue-700 shadow-none hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:shadow-md"
            >
              Book Appointment
            </Button>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-slate-800 transition hover:bg-slate-100 md:hidden"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>

        <div
          className={`overflow-hidden border-t border-slate-200 bg-white transition-all duration-700 ease-out md:hidden ${
            isOpen ? "max-h-[30rem] opacity-100" : "max-h-0 opacity-0"
          }`}
          style={{ position: "static" }}
        >
          <nav className="mx-auto flex w-full max-w-6xl flex-col gap-2 px-4 py-4 sm:px-6">
            <Link
              href="/"
              className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide uppercase transition ${
                pathname === "/"
                  ? "bg-blue-700 text-white"
                  : "text-blue-700 hover:bg-blue-700 hover:text-white"
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            {/* Destinations Dropdown (Mobile) */}
            <details className="group" open={pathname.startsWith("/study-in-")}>
              <summary
                className={`flex cursor-pointer items-center rounded-md px-3 py-2 text-sm font-medium tracking-wide uppercase transition select-none
                  ${pathname.startsWith("/study-in-") ? "bg-blue-700 text-white" : "text-blue-700 hover:bg-blue-700 hover:text-white"}
                `}
              >
                Destinations
                <ChevronDown className="ml-1 h-4 w-4 transition-transform group-open:rotate-180" />
              </summary>
              <div className="pl-4 pb-2 pt-1 flex flex-col gap-1">
                {destinations.map((dest) => (
                  <Link
                    key={dest.href}
                    href={dest.href}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition
                      ${pathname === dest.href ? "bg-blue-700 text-white" : "text-blue-700 hover:bg-blue-700 hover:text-white"}
                    `}
                    onClick={closeMenu}
                  >
                    {dest.label}
                  </Link>
                ))}
              </div>
            </details>
            <Link
              href="/about"
              className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide uppercase transition ${
                pathname === "/about"
                  ? "bg-blue-700 text-white"
                  : "text-blue-700 hover:bg-blue-700 hover:text-white"
              }`}
              onClick={closeMenu}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={`rounded-md px-3 py-2 text-sm font-medium tracking-wide uppercase transition ${
                pathname === "/contact"
                  ? "bg-blue-700 text-white"
                  : "text-blue-700 hover:bg-blue-700 hover:text-white"
              }`}
              onClick={closeMenu}
            >
              Contact
            </Link>

            <Button
              type="button"
              onClick={openAppointment}
              className="mt-1 h-10 rounded-md border border-blue-200 bg-blue-50 px-4 text-sm font-semibold uppercase tracking-wide text-blue-700 shadow-none hover:border-blue-700 hover:bg-blue-700 hover:text-white hover:shadow-md"
            >
              Book Appointment
            </Button>
          </nav>
        </div>
      </header>

      {(appointmentSidebarState === "opening" ||
        appointmentSidebarState === "open" ||
        appointmentSidebarState === "closing") && (
        <div className="fixed inset-0 z-[70]">
          <button
            type="button"
            aria-label="Close appointment sidebar overlay"
            onClick={closeAppointment}
            className="absolute inset-0 bg-slate-950/45"
          />

          <aside
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-title"
            className={`absolute right-0 top-0 flex h-full w-full max-w-md flex-col border-l border-blue-600/40 bg-gradient-to-b from-blue-900 via-blue-800 to-slate-900 text-blue-50 shadow-2xl transition-transform duration-450 will-change-transform
              ${appointmentSidebarState === "opening" || appointmentSidebarState === "open" ? "animate-appointment-slidein" : "animate-appointment-slideout"}`}
          >
            <div className="border-b border-blue-700/60 px-5 py-10">
              <div className="flex items-center justify-between">
                <h2 id="appointment-title" className="text-lg font-semibold">
                  Book an Appointment
                </h2>
                <Button
                  type="button"
                  onClick={closeAppointment}
                  variant="ghost"
                  size="icon"
                  className="rounded-md text-blue-100 hover:bg-blue-800 hover:text-blue-100"
                  aria-label="Close appointment sidebar"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <p className="mt-2 text-sm text-blue-100/90">
                Choose a convenient time and we will reach out to confirm your
                consultation details.
              </p>
            </div>

            <form className="flex-1 space-y-4 overflow-y-auto px-5 py-5">
              <div className="space-y-2">
                <Label htmlFor="appointmentName" className="text-blue-50">
                  Full Name
                </Label>
                <Input
                  id="appointmentName"
                  name="appointmentName"
                  type="text"
                  placeholder="Your full name"
                  className="h-11 rounded-md border-blue-300/35 bg-blue-950/25 px-3 text-blue-50 placeholder:text-blue-100/70"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appointmentDate" className="text-blue-50">
                  Preferred Date
                </Label>
                <DatePicker
                  date={appointmentDate}
                  onDateChange={setAppointmentDate}
                  placeholder="Select a date"
                  fromDate={today}
                />
                <Input
                  id="appointmentDate"
                  name="appointmentDate"
                  tabIndex={-1}
                  aria-hidden="true"
                  readOnly
                  value={appointmentDate ? appointmentDate.toISOString() : ""}
                  className="sr-only h-0 border-0 p-0"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="appointmentTime" className="text-blue-50">
                  Preferred Time (9:00 AM - 4:00 PM)
                </Label>
                <Select
                  name="appointmentTime"
                  value={appointmentTime}
                  onValueChange={setAppointmentTime}
                  required
                >
                  <SelectTrigger
                    id="appointmentTime"
                    className="!h-11 w-full rounded-md border-blue-300/35 bg-blue-950/25 px-3 text-blue-50 hover:bg-blue-900/35 focus:bg-blue-950/25 focus-visible:bg-blue-950/25 data-[state=open]:bg-blue-900/35 data-[placeholder]:text-blue-100/70"
                  >
                    <SelectValue placeholder="Select a time slot" />
                  </SelectTrigger>

                  <SelectContent className="z-[90] border-blue-300/35 bg-blue-950 text-blue-50">
                    <SelectGroup>
                      {appointmentTimes.map((time) => (
                        <SelectItem
                          key={time}
                          value={time}
                          className="cursor-pointer text-blue-50 focus:bg-blue-800 focus:text-white"
                        >
                          {time}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>

              <fieldset className="space-y-3">
                <legend className="text-sm font-medium text-blue-50">
                  Appointment Mode
                </legend>
                <RadioGroup
                  name="appointmentMode"
                  value={appointmentMode}
                  onValueChange={setAppointmentMode}
                  className="grid gap-2 sm:grid-cols-3"
                >
                  <Label
                    htmlFor="mode-phone"
                    className="cursor-pointer rounded-md border border-blue-300/35 bg-white/10 px-3 py-2 text-blue-50 has-[button[data-state=checked]]:border-blue-300/80 has-[button[data-state=checked]]:bg-blue-600/30"
                  >
                    <RadioGroupItem
                      id="mode-phone"
                      value="phone call"
                      className="cursor-pointer border-blue-300/45 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                    />
                    Phone Call
                  </Label>

                  <Label
                    htmlFor="mode-whatsapp"
                    className="cursor-pointer rounded-md border border-blue-300/35 bg-white/10 px-3 py-2 text-blue-50 has-[button[data-state=checked]]:border-blue-300/80 has-[button[data-state=checked]]:bg-blue-600/30"
                  >
                    <RadioGroupItem
                      id="mode-whatsapp"
                      value="whatsapp"
                      className="cursor-pointer border-blue-300/45 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                    />
                    WhatsApp
                  </Label>

                  <Label
                    htmlFor="mode-physical"
                    className="cursor-pointer rounded-md border border-blue-300/35 bg-white/10 px-3 py-2 text-blue-50 has-[button[data-state=checked]]:border-blue-300/80 has-[button[data-state=checked]]:bg-blue-600/30"
                  >
                    <RadioGroupItem
                      id="mode-physical"
                      value="physical"
                      className="cursor-pointer border-blue-300/45 data-[state=checked]:border-blue-500 data-[state=checked]:bg-blue-500 data-[state=checked]:text-white"
                    />
                    Physical
                  </Label>
                </RadioGroup>
              </fieldset>

              <Button
                type="submit"
                className="mt-3 h-12 w-full rounded-md bg-cyan-400 font-semibold text-blue-950 shadow-md hover:bg-cyan-300"
              >
                Book Appointment
              </Button>

              <div className="rounded-xl border border-blue-500/35 bg-blue-950/45 p-4 text-sm">
                <p className="font-semibold text-blue-100">Contact Details</p>
                <div className="mt-3 space-y-2 text-blue-100/95">
                  <p className="flex items-start gap-2">
                    <Phone className="mt-0.5 h-4 w-4" />
                    <a href="tel:+2348000000000" className="hover:underline">
                      +234 800 000 0000
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <Mail className="mt-0.5 h-4 w-4" />
                    <a
                      href="mailto:info@evespire.com"
                      className="hover:underline"
                    >
                      info@evespire.com
                    </a>
                  </p>
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 h-4 w-4" />
                    <span>
                      4th Floor, Right Wing, Mulliner Towers, Plot 39 Alfred
                      Rewane Road, Ikoyi, Lagos, Nigeria
                    </span>
                  </p>
                </div>
              </div>
            </form>
          </aside>
        </div>
      )}
    </>
  );
}
