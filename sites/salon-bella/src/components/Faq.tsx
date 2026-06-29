"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

export function Faq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative border-y border-line bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="FAQ"
          title="Häufige Fragen"
          text="Alles Wichtige rund um Termin, Kosten und Garantie — kurz beantwortet."
          align="center"
        />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => {
            const open = openIdx === i;
            return (
              <Reveal key={f.q} delay={i * 0.04}>
                <div className={`overflow-hidden rounded-2xl border transition-colors ${open ? "border-ember/40 bg-surface" : "border-line bg-surface/60"}`}>
                  <button
                    onClick={() => setOpenIdx(open ? null : i)}
                    aria-expanded={open}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg font-semibold uppercase tracking-wide text-paper">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: open ? 45 : 0 }}
                      transition={{ duration: 0.25 }}
                      className={`shrink-0 ${open ? "text-ember" : "text-muted"}`}
                      aria-hidden
                    >
                      <Plus className="h-5 w-5" />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {open && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-sm leading-relaxed text-muted">{f.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
