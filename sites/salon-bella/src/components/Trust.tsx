import { Award, FileCheck2, CalendarClock, Car, type LucideIcon } from "lucide-react";
import { trustPoints, business } from "@/lib/content";
import { Reveal } from "./ui/Reveal";
import { MediaPlaceholder } from "./MediaPlaceholder";

const icons: Record<string, LucideIcon> = { Award, FileCheck2, CalendarClock, Car };

export function Trust() {
  return (
    <section className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
              {"// Vertrauen"}
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Warum {business.city} uns
              <br />
              die Schlüssel gibt
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
              Seit {business.founded} stehen wir für ehrliche Werkstattarbeit:
              Meisterhand statt Massenabfertigung, Befund statt Bauchgefühl.
            </p>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {trustPoints.map((t) => {
                const Icon = icons[t.icon] ?? Award;
                return (
                  <div key={t.title} className="flex gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-line bg-surface text-ember">
                      <Icon className="h-5 w-5" aria-hidden />
                    </span>
                    <div>
                      <h3 className="font-display text-base font-semibold uppercase tracking-wide text-paper">
                        {t.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted">{t.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="relative">
            <MediaPlaceholder
              scene="diagnose"
              asset="diagnose-clip.mp4"
              src="/assets/diagnose.jpg"
              video
              scanline
              className="aspect-[4/5] w-full"
            />
            {/* Meister-Badge */}
            <div className="absolute -bottom-5 -left-3 rounded-2xl border border-ember/40 bg-bg/95 px-6 py-4 backdrop-blur sm:-left-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-amber-glow">
                Handwerkskammer
              </p>
              <p className="mt-1 font-display text-xl font-semibold uppercase text-paper">
                Eingetragener Meisterbetrieb
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
