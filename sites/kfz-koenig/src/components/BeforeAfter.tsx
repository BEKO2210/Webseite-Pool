"use client";

import { useCallback, useRef, useState } from "react";
import Image from "next/image";

/**
 * Vorher/Nachher-Slider — Bremsenservice.
 * Bilder via Higgsfield generiert (docs/asset-prompts.md, Abschnitt 4).
 */
export function BeforeAfter({ className = "" }: { className?: string }) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  return (
    <div
      ref={ref}
      className={`noise relative select-none overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
      role="group"
      aria-label="Vorher-Nachher-Vergleich: Bremsenservice"
    >
      {/* NACHHER (volle Fläche) */}
      <Image
        src="/assets/bremse-nachher.jpg"
        alt="Bremsscheibe nach dem Service — neuwertig"
        fill
        sizes="(max-width: 768px) 100vw, 66vw"
        className="object-cover"
        draggable={false}
      />
      <span className="absolute bottom-4 right-4 rounded-full bg-ember px-3 py-1 font-mono text-[10px] font-medium uppercase tracking-widest text-bg">
        Nachher
      </span>

      {/* VORHER (geclippt) */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
        aria-hidden
      >
        <Image
          src="/assets/bremse-vorher.jpg"
          alt="Verschlissene Bremsscheibe vor dem Service"
          fill
          sizes="(max-width: 768px) 100vw, 66vw"
          className="object-cover"
          draggable={false}
        />
        <span className="absolute bottom-4 left-4 rounded-full border border-line bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-paper/70 backdrop-blur">
          Vorher
        </span>
      </div>

      {/* Griff */}
      <div className="absolute inset-y-0 z-10" style={{ left: `${pos}%` }} aria-hidden>
        <div className="absolute inset-y-0 -translate-x-1/2 border-l border-dashed border-paper/50" />
        <div className="absolute top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-paper/30 bg-bg/90 backdrop-blur">
          <span className="font-mono text-xs text-paper/80">⇄</span>
        </div>
      </div>

      {/* Tastatur-Bedienung */}
      <input
        type="range"
        min={4}
        max={96}
        value={Math.round(pos)}
        onChange={(e) => setPos(Number(e.target.value))}
        className="absolute inset-x-0 bottom-0 z-20 h-8 w-full cursor-ew-resize opacity-0"
        aria-label="Vorher-Nachher-Regler"
      />
      <p className="absolute left-4 top-4 font-mono text-[10px] uppercase tracking-[0.2em] text-paper/50">
        Bremsenservice · Ziehen zum Vergleichen
      </p>
    </div>
  );
}
