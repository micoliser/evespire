"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Pacifico } from "next/font/google";
import { Menu, X } from "lucide-react";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsOpen(false);

  return (
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
          isOpen ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
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
        </nav>
      </div>
    </header>
  );
}
