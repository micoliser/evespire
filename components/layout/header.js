import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-slate-900"
        >
          Evespire
        </Link>

        <nav className="flex items-center gap-2">
          <Link
            href="/"
            className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            Home
          </Link>
          <Link
            href="/contact"
            className="rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
          >
            Contact
          </Link>
          <Link href="/contact" className="hidden sm:inline-flex">
            <Button size="default">Enquire</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
