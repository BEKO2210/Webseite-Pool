import { Siren, PhoneCall } from "lucide-react";
import { business } from "@/lib/content";
import { Reveal } from "./ui/Reveal";

export function Emergency() {
  return (
    <section aria-label="Notfallkontakt" className="relative py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="flex flex-col items-start justify-between gap-6 overflow-hidden rounded-3xl border border-ember/30 bg-gradient-to-r from-ember/15 via-surface to-surface p-7 sm:flex-row sm:items-center sm:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ember/20">
                <Siren className="h-6 w-6 text-ember" aria-hidden />
              </span>
              <div>
                <h2 className="font-display text-2xl font-semibold uppercase tracking-wide text-paper">
                  Panne oder Notfall?
                </h2>
                <p className="mt-1 max-w-xl text-sm leading-relaxed text-paper/70">
                  Liegengeblieben, Warnleuchte rot, Bremsen reagieren nicht? Rufen Sie
                  unsere Notfall-Hotline an — wir organisieren Abschleppen und Soforthilfe.
                </p>
              </div>
            </div>
            <a
              href={`tel:${business.emergencyPhone}`}
              className="glow-ember flex shrink-0 items-center gap-2.5 rounded-xl bg-ember px-6 py-3.5 font-semibold text-bg transition-transform hover:scale-[1.03]"
            >
              <PhoneCall className="h-5 w-5" aria-hidden />
              {business.emergencyPhoneDisplay}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
