import { processSteps } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Process() {
  return (
    <section id="ablauf" className="relative border-y border-line bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="So läuft's ab"
          title="Transparenz ist kein Versprechen. Sondern Ablauf."
          text="Vier klare Schritte — Sie wissen jederzeit, was mit Ihrem Fahrzeug passiert und was es kostet."
        />

        <ol className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {processSteps.map((p, i) => (
            <Reveal key={p.step} delay={i * 0.1}>
              <li className="relative h-full rounded-2xl border border-line bg-bg p-6">
                <span className="font-display text-5xl font-bold text-ember/90" aria-hidden>
                  {p.step}
                </span>
                <span
                  className="absolute right-6 top-7 hidden h-px w-10 bg-gradient-to-r from-line to-transparent lg:block"
                  aria-hidden
                />
                <h3 className="mt-4 font-display text-lg font-semibold uppercase tracking-wide text-paper">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
