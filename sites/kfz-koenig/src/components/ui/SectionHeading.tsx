import { Reveal } from "./Reveal";

type Props = {
  kicker: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export function SectionHeading({ kicker, title, text, align = "left" }: Props) {
  const center = align === "center";
  return (
    <Reveal className={center ? "text-center" : ""}>
      <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-ember">
        {`// ${kicker}`}
      </p>
      <h2 className="mt-3 font-display text-4xl font-semibold uppercase leading-[0.95] tracking-tight text-paper sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {text && (
        <p className={`mt-5 max-w-2xl text-base leading-relaxed text-muted ${center ? "mx-auto" : ""}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
