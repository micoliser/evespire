export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-6 text-sm text-slate-600 sm:px-6">
        <p>© {new Date().getFullYear()} Evespire Investment Limited</p>
        <p>Educational Consulting</p>
      </div>
    </footer>
  );
}
