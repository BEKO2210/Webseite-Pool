import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";
import { MediaPlaceholder } from "./MediaPlaceholder";
import { BeforeAfter } from "./BeforeAfter";

export function Showcase() {
  return (
    <section id="werkstatt" className="relative border-y border-line bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          kicker="Einblicke"
          title="Unsere Werkstatt. Ihr Fahrzeug in besten Händen."
          text="Moderne Hebebühnen, aktuelle Diagnosetechnik und ein Team, das sein Handwerk liebt — schauen Sie uns über die Schulter."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          <Reveal className="md:col-span-2">
            <MediaPlaceholder
              scene="nacht"
              asset="werkstatt-nacht.jpg"
              src="/assets/nacht.jpg"
              className="aspect-[16/9] w-full md:aspect-auto md:h-full md:min-h-[280px]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <MediaPlaceholder
              scene="reifen"
              asset="reifen-loop.mp4"
              src="/assets/reifen.jpg"
              video
              className="aspect-[16/9] w-full md:aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.05}>
            <MediaPlaceholder
              scene="uebergabe"
              asset="uebergabe.jpg"
              src="/assets/uebergabe.jpg"
              className="aspect-[16/9] w-full md:aspect-[3/4]"
            />
          </Reveal>
          <Reveal delay={0.12} className="md:col-span-2">
            <BeforeAfter className="aspect-[16/9] w-full md:aspect-auto md:h-full md:min-h-[280px]" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
