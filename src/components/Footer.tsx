export default function Footer() {
  return (
    <footer className="relative z-10 mx-auto w-full max-w-6xl px-4 py-10 sm:px-6">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-sm text-silver-dim sm:flex-row">
        <p>© 2026 Arpit Yadav. Built with Next.js + Three.js.</p>
        <p className="font-mono text-xs">
          <span className="text-accent-bright">tip:</span> press{" "}
          <kbd className="rounded bg-white/10 px-1.5 py-0.5">Ctrl</kbd>+
          <kbd className="rounded bg-white/10 px-1.5 py-0.5">`</kbd> for a
          terminal · try the Konami code ↑↑↓↓←→←→BA
        </p>
      </div>
    </footer>
  );
}
