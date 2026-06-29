import { Star } from "lucide-react";
import { reviews } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Reviews() {
  return (
    <section id="bewertungen" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            kicker="Bewertungen"
            title="Das sagen unsere Kunden"
            text="Demo-Bewertungen — im Kundenprojekt werden hier echte Google-Rezensionen eingebunden."
          />
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-line bg-surface px-6 py-4 text-center">
              <p className="font-display text-4xl font-bold text-paper">4,9</p>
              <div className="mt-1 flex justify-center" aria-label="4,9 von 5 Sternen">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-amber-glow text-amber-glow" aria-hidden />
                ))}
              </div>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                188 Google-Rezensionen
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {reviews.map((r, i) => (
            <Reveal key={r.name} delay={(i % 2) * 0.08}>
              <figure className="flex h-full flex-col rounded-2xl border border-line bg-surface p-6">
                <div className="flex" aria-label={`${r.rating} von 5 Sternen`}>
                  {[...Array(r.rating)].map((_, j) => (
                    <Star key={j} className="h-4 w-4 fill-amber-glow text-amber-glow" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-paper/80">
                  „{r.text}“
                </blockquote>
                <figcaption className="mt-5 flex items-center justify-between border-t border-line pt-4">
                  <div>
                    <p className="text-sm font-semibold text-paper">{r.name}</p>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-muted">
                      {r.date} · Google
                    </p>
                  </div>
                  <span className="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-amber-glow">
                    {r.service}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
