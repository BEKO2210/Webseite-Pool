import Image from "next/image";
import { Play } from "lucide-react";

/**
 * Medien-Kachel für Galerie & Vertrauens-Sektion.
 * Rendert ein echtes <video> (autoplay/muted/loop) wenn `videoSrc` gesetzt ist,
 * sonst ein <Image> (`src`) oder — als Fallback — einen weichen Verlauf.
 */

type Props = {
  /** Barrierefreie Beschriftung + Caption-Text */
  label: string;
  /** Pfad unter /public zu einem Video-Loop (.mp4) */
  videoSrc?: string;
  /** Pfad unter /public zu einem Bild */
  src?: string;
  /** Poster-Bild für das Video (optional) */
  poster?: string;
  /** Sanfter Licht-Sweep über dem Medium */
  scanline?: boolean;
  className?: string;
};

export function MediaPlaceholder({ label, videoSrc, src, poster, scanline, className = "" }: Props) {
  return (
    <figure
      className={`noise group relative overflow-hidden rounded-2xl border border-line bg-surface ${className}`}
      aria-label={label}
    >
      {videoSrc ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
        >
          <source src={videoSrc} type="video/mp4" />
        </video>
      ) : src ? (
        <div className="animate-drift absolute inset-0">
          <Image
            src={src}
            alt={label}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      ) : (
        <div
          className="animate-drift absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 55% at 60% 25%, rgba(201,163,106,0.22), transparent 65%), linear-gradient(160deg, #1f1925 0%, #0c0a0d 70%)",
          }}
          aria-hidden
        />
      )}

      {/* Boden-Verlauf für Lesbarkeit der Caption */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/70 to-transparent"
        aria-hidden
      />
      {scanline && (
        <div
          className="animate-scan absolute inset-x-6 top-0 h-1/4 bg-gradient-to-b from-transparent via-ice/15 to-transparent"
          aria-hidden
        />
      )}

      {/* Caption */}
      <figcaption className="absolute inset-x-0 bottom-0 p-4 font-mono text-[10px] uppercase tracking-[0.22em] text-paper/70">
        {label}
      </figcaption>

      {videoSrc && (
        <span className="absolute left-4 top-4 flex items-center gap-2 rounded-full border border-ember/40 bg-black/55 px-3 py-1.5 backdrop-blur">
          <span className="animate-pulse-soft flex h-2 w-2 rounded-full bg-ember" aria-hidden />
          <Play className="h-3 w-3 text-ember" aria-hidden />
          <span className="font-mono text-[9px] uppercase tracking-widest text-paper/80">
            Live im Salon
          </span>
        </span>
      )}
    </figure>
  );
}
