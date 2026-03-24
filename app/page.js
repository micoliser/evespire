import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-20 sm:px-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-10 sm:p-14">
        <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
          Welcome to Evespire
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
          Educational consulting designed to guide your next step.
        </h1>
        <p className="mt-5 max-w-xl text-base text-slate-600 sm:text-lg">
          We help students and families make confident academic decisions with
          clear, practical support.
        </p>

        <div className="mt-8">
          <Link href="/contact" className="inline-flex">
            <Button size="lg">Contact Us</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
