import Link from "next/link";
import { PageRouteHero } from "@/components/common/page-route-hero";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white pb-16">
      <PageRouteHero heading={"Page Not Found"} currentRoute={"404"} />

      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute -left-20 top-8 h-56 w-56 rounded-full bg-cyan-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 bottom-0 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 py-14">
          <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-700">
              Error 404
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              This page is not available
            </h1>
            <p className="mt-4 max-w-2xl text-slate-600">
              The page you requested might have been moved, renamed, or may no
              longer exist. Use one of the links below to continue your journey.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/"
                className="inline-flex items-center rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-800"
              >
                Back to Home
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-400 hover:bg-slate-50"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
