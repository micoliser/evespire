import Link from "next/link";

export function PageRouteHero({
  heading,
  currentRoute,
  homeLabel = "Home",
  homeHref = "/",
  previousRoutes = [],
}) {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white">
      <div className="pointer-events-none absolute -left-24 top-0 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl px-4 py-6">
        <div className="flex flex-wrap items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-slate-300">
          <Link
            href={homeHref}
            className="text-cyan-300 transition hover:text-cyan-200"
          >
            {homeLabel}
          </Link>
          {previousRoutes.map((route, index) => (
            <div key={index} className="flex items-center gap-2">
              <span className="text-slate-500">&gt;</span>
              <span>{route}</span>
            </div>
          ))}
          <span className="text-slate-500">&gt;</span>
          <span>{currentRoute}</span>
        </div>

        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white">
          {heading}
        </h1>
      </div>

      <div className="h-1 w-full bg-blue-600" />
    </section>
  );
}
