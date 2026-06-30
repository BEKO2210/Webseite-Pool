import { Scissors } from "lucide-react";
import { business } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface/40 pb-28 pt-14 lg:pb-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ember text-bg">
                <Scissors className="h-4 w-4" strokeWidth={2.5} aria-hidden />
              </span>
              <span className="font-display text-xl font-semibold uppercase tracking-wide">
                Salon<span className="text-ember">.</span>Bella
              </span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
              {business.masterSince}. Schnitt, Coloration, Balayage, Pflege,
              Braut-Styling und Beauty — mitten in {business.city}.
            </p>
          </div>

          <nav aria-label="Footer-Navigation">
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Seiten</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {[
                ["#leistungen", "Leistungen"],
                ["#ablauf", "Ablauf"],
                ["#bewertungen", "Bewertungen"],
                ["#faq", "FAQ"],
                ["#termin", "Termin anfragen"],
              ].map(([href, label]) => (
                <li key={href}>
                  <a href={href} className="text-paper/70 transition-colors hover:text-paper">
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">Kontakt</h3>
            <address className="mt-4 space-y-2.5 text-sm not-italic text-paper/70">
              <p>{business.legalName}</p>
              <p>{business.street}<br />{business.zip} {business.city}</p>
              <p>
                <a href={`tel:${business.phone}`} className="transition-colors hover:text-paper">
                  {business.phoneDisplay}
                </a>
              </p>
              <p>
                <a href={`mailto:${business.email}`} className="transition-colors hover:text-paper">
                  {business.email}
                </a>
              </p>
            </address>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {business.legalName} · Alle Rechte vorbehalten
          </p>
          <ul className="flex gap-6 text-xs text-muted">
            <li><span className="cursor-default transition-colors hover:text-paper/70">Impressum (Demo)</span></li>
            <li><span className="cursor-default transition-colors hover:text-paper/70">Datenschutz (Demo)</span></li>
            <li><span className="cursor-default transition-colors hover:text-paper/70">AGB (Demo)</span></li>
          </ul>
        </div>

        <p className="mt-6 rounded-xl border border-line bg-bg px-4 py-3 text-center font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
          Demo-Website · Alle Firmendaten, Preise &amp; Bewertungen sind Beispielinhalte
        </p>
      </div>
    </footer>
  );
}
