/** Marken-Marquee: zeigt verwendete Premium-Produkte (reine Text-Nennung, keine Logos). */
const brands = [
  "Olaplex", "Kérastase", "Wella Professionals", "L'Oréal Pro", "Schwarzkopf",
  "Great Lengths", "Moroccanoil", "Redken", "Davines", "Balmain Hair",
];

export function BrandStrip() {
  const row = [...brands, ...brands];
  return (
    <section aria-label="Wir arbeiten mit Premium-Produkten" className="overflow-hidden border-y border-line bg-surface/60 py-5">
      <div className="flex w-max animate-marquee items-center gap-12">
        {row.map((b, i) => (
          <span
            key={`${b}-${i}`}
            className="flex items-center gap-12 font-display text-lg font-medium uppercase tracking-[0.2em] text-paper/35"
          >
            {b}
            <span className="h-1 w-1 rounded-full bg-ember/60" aria-hidden />
          </span>
        ))}
      </div>
      <p className="sr-only">
        Wir arbeiten mit Premium-Produkten von {brands.join(", ")} und weiteren Marken.
      </p>
    </section>
  );
}
