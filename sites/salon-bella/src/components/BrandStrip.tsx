/** Marken-Marquee: zeigt markenübergreifende Kompetenz (reine Text-Nennung, keine Logos). */
const brands = [
  "Volkswagen", "BMW", "Mercedes-Benz", "Audi", "Opel", "Ford",
  "Skoda", "Seat", "Toyota", "Hyundai", "Renault", "Volvo",
];

export function BrandStrip() {
  const row = [...brands, ...brands];
  return (
    <section aria-label="Wir reparieren alle Marken" className="overflow-hidden border-y border-line bg-surface/60 py-5">
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
        Markenübergreifender Service für {brands.join(", ")} und weitere Hersteller.
      </p>
    </section>
  );
}
