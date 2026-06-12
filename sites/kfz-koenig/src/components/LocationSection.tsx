import { MapPin, Clock, Mail, Phone, Navigation } from "lucide-react";
import { business, openingHours } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function LocationSection() {
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${business.name}, ${business.street}, ${business.zip} ${business.city}`
  )}`;

  return (
    <section id="kontakt" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Standort"
          title="Sie finden uns mitten im Gewerbegebiet"
          text="Gut erreichbar, kostenlose Parkplätze direkt vor der Tür — und der Kaffee in der Wartezone geht aufs Haus."
        />

        <div className="mt-14 grid gap-4 lg:grid-cols-5">
          {/* Karte (Demo-Platzhalter — im Kundenprojekt: Google-Maps-Embed) */}
          <Reveal className="lg:col-span-3">
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Standort in Google Maps öffnen"
              className="noise group relative block h-full min-h-[320px] overflow-hidden rounded-2xl border border-line bg-surface"
            >
              <div
                className="absolute inset-0 opacity-60"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
                  backgroundSize: "48px 48px",
                }}
                aria-hidden
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(255,107,44,0.08), transparent 65%)",
                }}
                aria-hidden
              />
              {/* Straßen-Andeutung */}
              <div className="absolute left-0 top-1/2 h-px w-full rotate-6 bg-paper/10" aria-hidden />
              <div className="absolute left-1/3 top-0 h-full w-px -rotate-12 bg-paper/10" aria-hidden />

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-ember text-bg shadow-[0_0_40px_rgba(255,107,44,0.5)]">
                  <MapPin className="h-6 w-6" aria-hidden />
                </span>
                <p className="mt-3 font-display text-lg font-semibold uppercase text-paper">
                  {business.name}
                </p>
                <p className="font-mono text-[11px] text-muted">
                  {business.street} · {business.zip} {business.city}
                </p>
              </div>

              <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-line bg-black/60 px-4 py-2 font-mono text-[10px] uppercase tracking-widest text-paper/70 backdrop-blur transition-colors group-hover:border-ember/40 group-hover:text-paper">
                <Navigation className="h-3.5 w-3.5 text-ember" aria-hidden />
                Route in Google Maps
              </span>
            </a>
          </Reveal>

          <div className="space-y-4 lg:col-span-2">
            <Reveal delay={0.08}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold uppercase tracking-wide text-paper">
                  <Clock className="h-5 w-5 text-ember" aria-hidden />
                  Öffnungszeiten
                </h3>
                <dl className="mt-4 space-y-2.5">
                  {openingHours.map((h) => (
                    <div key={h.days} className="flex items-center justify-between border-b border-line pb-2.5 text-sm last:border-0 last:pb-0">
                      <dt className="text-paper/70">{h.days}</dt>
                      <dd className={`font-mono text-xs ${h.time === "Geschlossen" ? "text-muted" : "text-paper"}`}>
                        {h.time}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            <Reveal delay={0.14}>
              <div className="rounded-2xl border border-line bg-surface p-6">
                <h3 className="flex items-center gap-2.5 font-display text-lg font-semibold uppercase tracking-wide text-paper">
                  <Phone className="h-5 w-5 text-ember" aria-hidden />
                  Kontakt
                </h3>
                <div className="mt-4 space-y-3 text-sm">
                  <a href={`tel:${business.phone}`} className="flex items-center gap-3 text-paper/80 transition-colors hover:text-ember">
                    <Phone className="h-4 w-4 shrink-0 text-muted" aria-hidden />
                    {business.phoneDisplay}
                  </a>
                  <a href={`mailto:${business.email}`} className="flex items-center gap-3 text-paper/80 transition-colors hover:text-ember">
                    <Mail className="h-4 w-4 shrink-0 text-muted" aria-hidden />
                    {business.email}
                  </a>
                  <p className="flex items-start gap-3 text-paper/80">
                    <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted" aria-hidden />
                    {business.street}, {business.zip} {business.city}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
