"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Phone, Sparkles, Star, Clock } from "lucide-react";
import { business, stats } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduce = useReducedMotion();
  const anim = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 32 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay, ease },
        };

  return (
    <section className="noise spotlight relative flex min-h-svh flex-col justify-end overflow-hidden">
      {/* Hintergrund: Video-Loop aus dem Salon */}
      <div className="absolute inset-0" aria-hidden>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src="/assets/spiegel.mp4" type="video/mp4" />
        </video>
        {/* Warmer Grade über dem Video */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 70% 18%, rgba(201,163,106,0.12), transparent 65%), linear-gradient(165deg, rgba(12,10,13,0.55) 0%, rgba(12,10,13,0.78) 62%)",
          }}
        />
        {/* Lichtschein von oben */}
        <div
          className="absolute left-1/2 top-0 h-[70vh] w-[120vw] -translate-x-1/2"
          style={{
            background:
              "conic-gradient(from 180deg at 50% 0%, transparent 42%, rgba(201,163,106,0.08) 50%, transparent 58%)",
          }}
        />
        {/* Boden-Vignette */}
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-bg via-bg/70 to-transparent" />
        {/* Riesige Hintergrund-Typo */}
        <p
          className="text-stroke pointer-events-none absolute -right-8 top-24 select-none font-display text-[24vw] font-bold uppercase leading-none opacity-40 lg:text-[18vw]"
          aria-hidden
        >
          Bella
        </p>
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-14 pt-36 sm:px-6 lg:px-8 lg:pb-20">
        <motion.p
          {...anim(0.05)}
          className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.3em] text-amber-glow"
        >
          <Sparkles className="h-4 w-4" aria-hidden />
          {business.masterSince} · {business.city}
        </motion.p>

        <motion.h1
          {...anim(0.15)}
          className="mt-5 max-w-4xl font-display text-[15vw] font-bold uppercase leading-[0.92] tracking-tight sm:text-7xl lg:text-8xl"
        >
          Schönheit
          <br />
          ist <span className="text-ember">Handwerk</span>
        </motion.h1>

        <motion.p {...anim(0.28)} className="mt-6 max-w-xl text-lg leading-relaxed text-paper/75">
          Ehrliche Typberatung, präzises Handwerk und Premium-Produkte —
          dein Friseur- &amp; Beauty-Salon in {business.city} für Schnitt, Farbe und Styling.
        </motion.p>

        <motion.div {...anim(0.4)} className="mt-9 flex flex-wrap items-center gap-4">
          <a
            href="#termin"
            className="glow-ember group flex items-center gap-2.5 rounded-xl bg-ember px-7 py-4 text-base font-semibold text-bg transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Termin anfragen
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden />
          </a>
          <a
            href={`tel:${business.phone}`}
            className="flex items-center gap-2.5 rounded-xl border border-line bg-surface/60 px-7 py-4 text-base font-medium text-paper backdrop-blur transition-colors hover:border-paper/30"
          >
            <Phone className="h-5 w-5 text-ember" aria-hidden />
            {business.phoneDisplay}
          </a>
        </motion.div>

        <motion.div {...anim(0.55)} className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-paper/60">
          <span className="flex items-center gap-1.5">
            <span className="flex" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-amber-glow text-amber-glow" />
              ))}
            </span>
            4,9 bei Google
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-ember" aria-hidden />
            Termin oft noch diese Woche
          </span>
        </motion.div>

        {/* Stats-Leiste */}
        <motion.dl
          {...anim(0.7)}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-surface/80 px-6 py-5 backdrop-blur">
              <dt className="order-2 mt-1 block font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                {s.label}
              </dt>
              <dd className="font-display text-3xl font-semibold text-paper">{s.value}</dd>
            </div>
          ))}
        </motion.dl>
      </div>
    </section>
  );
}
