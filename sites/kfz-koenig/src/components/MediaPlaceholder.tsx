import Image from "next/image";
import { Play, Clapperboard } from "lucide-react";

/**
 * Cinematic Asset-Platzhalter.
 * Jede Szene hat eine eigene Licht-Stimmung (CSS-Gradients statt Bild),
 * damit die Demo ohne echte Assets hochwertig wirkt.
 * `asset` referenziert den Dateinamen aus docs/asset-prompts.md —
 * im Kundenprojekt wird hier <video> bzw. <Image> eingesetzt.
 */

const scenes = {
  "hero-loop": {
    bg: "radial-gradient(ellipse 80% 60% at 65% 20%, rgba(255,180,84,0.22), transparent 65%), radial-gradient(ellipse 50% 40% at 20% 80%, rgba(255,107,44,0.12), transparent 70%), linear-gradient(160deg, #16181c 0%, #0a0a0b 60%)",
    label: "Hero-Loop · Hebebühne im Lichtkegel",
  },
  diagnose: {
    bg: "radial-gradient(ellipse 60% 50% at 30% 35%, rgba(155,178,201,0.25), transparent 65%), linear-gradient(200deg, #13161b 0%, #0a0a0b 70%)",
    label: "Mechaniker · Fehlerdiagnose",
  },
  reifen: {
    bg: "radial-gradient(ellipse 70% 55% at 70% 65%, rgba(255,140,60,0.18), transparent 60%), linear-gradient(140deg, #17171a 0%, #0a0a0b 65%)",
    label: "Reifenwechsel · Close-up",
  },
  bremse: {
    bg: "radial-gradient(ellipse 55% 45% at 50% 30%, rgba(255,90,40,0.2), transparent 60%), linear-gradient(180deg, #15141a 0%, #0a0a0b 70%)",
    label: "Bremsenservice · Detail",
  },
  nacht: {
    bg: "radial-gradient(ellipse 75% 50% at 50% 0%, rgba(120,150,190,0.18), transparent 60%), radial-gradient(ellipse 40% 30% at 80% 90%, rgba(255,107,44,0.1), transparent 70%), linear-gradient(170deg, #0e1117 0%, #0a0a0b 75%)",
    label: "Werkstatt bei Nacht",
  },
  uebergabe: {
    bg: "radial-gradient(ellipse 65% 55% at 60% 40%, rgba(255,190,120,0.16), transparent 65%), linear-gradient(150deg, #16140f 0%, #0a0a0b 70%)",
    label: "Kundenübergabe · Schlüssel",
  },
} as const;

export type SceneKey = keyof typeof scenes;

type Props = {
  scene: SceneKey;
  asset: string;
  /** Pfad unter /public — wenn gesetzt, wird das echte Bild statt des CSS-Platzhalters gerendert. */
  src?: string;
  video?: boolean;
  scanline?: boolean;
  className?: string;
};

export function MediaPlaceholder({ scene, asset, src, video, scanline, className = "" }: Props) {
  const s = scenes[scene];
  return (
    <figure
      className={`noise group relative overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
      aria-label={s.label}
    >
      {src ? (
        <div className="animate-drift absolute inset-0">
          <Image
            src={src}
            alt={s.label}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className="animate-drift absolute inset-0"
          style={{ background: s.bg }}
          aria-hidden
        />
      )}
      {/* Bodenlinie / Werkstatt-Silhouette */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"
        aria-hidden
      />
      {scanline && (
        <div
          className="animate-scan absolute inset-x-6 top-0 h-1/4 bg-gradient-to-b from-transparent via-ice/15 to-transparent"
          aria-hidden
        />
      )}

      {/* Asset-Kennung (in Kundenprojekten durch echtes Medium ersetzt) */}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4">
        <figcaption className="font-mono text-[10px] uppercase tracking-[0.2em] text-paper/60">
          {s.label}
        </figcaption>
        <span className="flex items-center gap-1.5 rounded-full border border-line bg-black/50 px-2.5 py-1 font-mono text-[9px] uppercase tracking-widest text-paper/50 backdrop-blur">
          <Clapperboard className="h-3 w-3" aria-hidden />
          {asset}
        </span>
      </div>

      {video && (
        <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-ember/40 bg-black/60 px-3 py-1.5 backdrop-blur">
          <span className="animate-pulse-soft flex h-2 w-2 rounded-full bg-ember" aria-hidden />
          <Play className="h-3 w-3 text-ember" aria-hidden />
          <span className="font-mono text-[9px] uppercase tracking-widest text-paper/80">
            Video-Loop
          </span>
        </span>
      )}
    </figure>
  );
}
