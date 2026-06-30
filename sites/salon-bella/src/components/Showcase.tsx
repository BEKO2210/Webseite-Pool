import { ArrowRight } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { MediaPlaceholder } from "./MediaPlaceholder";

export function Showcase() {
  return (
    <section id="galerie" className="relative border-y border-line bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Einblicke"
          title="Unser Salon. In Bewegung."
          text="Ruhige Hände, gute Atmosphäre und Liebe zum Detail — schau uns über die Schulter, bevor du auf dem Stuhl Platz nimmst."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <MediaPlaceholder
              label="Salon-Atmosphäre · am Spiegel"
              videoSrc="/assets/spiegel.mp4"
              className="aspect-[16/9] w-full md:aspect-auto md:h-full md:min-h-[300px]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <MediaPlaceholder
              label="Präzision · Schnitt im Detail"
              videoSrc="/assets/schere.mp4"
              className="aspect-[16/9] w-full md:aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <MediaPlaceholder
              label="Pflege · Wäsche & Treatment"
              videoSrc="/assets/waschbecken.mp4"
              className="aspect-[16/9] w-full md:aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-2">
            <a
              href="#termin"
              className="noise group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-2xl border border-line bg-bg p-8 transition-colors hover:border-ember/50"
            >
              <div
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse 80% 70% at 85% 15%, rgba(201,163,106,0.14), transparent 60%), radial-gradient(ellipse 50% 50% at 10% 95%, rgba(211,167,187,0.10), transparent 70%)",
                }}
                aria-hidden
              />
              <p className="relative font-mono text-[11px] uppercase tracking-[0.3em] text-amber-glow">
                Über 20.000 Verwandlungen
              </p>
              <div className="relative">
                <h3 className="max-w-md font-display text-3xl font-semibold uppercase leading-[0.95] tracking-tight text-paper sm:text-4xl">
                  Dein nächster Lieblings-Look wartet schon.
                </h3>
                <span className="mt-5 inline-flex items-center gap-2 font-medium text-ember">
                  Termin anfragen
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
                </span>
              </div>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
