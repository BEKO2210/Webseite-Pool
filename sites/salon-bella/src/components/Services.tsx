"use client";

import { motion } from "framer-motion";
import {
  ClipboardCheck, Droplets, Disc3, CircleDot, ScanLine, Snowflake, BadgeCheck, Wrench,
  ArrowUpRight, type LucideIcon,
} from "lucide-react";
import { services } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";

const icons: Record<string, LucideIcon> = {
  ClipboardCheck, Droplets, Disc3, CircleDot, ScanLine, Snowflake, BadgeCheck, Wrench,
};

export function Services() {
  return (
    <section id="leistungen" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Leistungen"
          title="Alles für Ihr Auto. Unter einem Dach."
          text="Von der Inspektion bis zur Unfallinstandsetzung — markenübergreifend, mit Festpreis-Angebot vor jeder Reparatur. Preise sind Demo-Richtwerte."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => {
            const Icon = icons[s.icon] ?? Wrench;
            return (
              <motion.a
                key={s.id}
                href="#termin"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors duration-300 hover:border-ember/50"
              >
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(255,107,44,0.08), transparent 70%)",
                  }}
                  aria-hidden
                />
                <div className="flex items-start justify-between">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-line bg-surface-2 text-ember transition-colors group-hover:border-ember/40">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <ArrowUpRight
                    className="h-5 w-5 text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:text-ember group-hover:opacity-100"
                    aria-hidden
                  />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold uppercase tracking-wide text-paper">
                  {s.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">{s.text}</p>
                <p className="mt-5 border-t border-line pt-4 font-mono text-xs uppercase tracking-[0.15em] text-amber-glow">
                  {s.price}
                </p>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
