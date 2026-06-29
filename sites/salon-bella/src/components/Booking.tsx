"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarCheck2, CheckCircle2, Loader2, ShieldCheck, Phone } from "lucide-react";
import { business, services } from "@/lib/content";
import { SectionHeading } from "./ui/SectionHeading";
import { Reveal } from "./ui/Reveal";

type Status = "idle" | "sending" | "done";

const inputCls =
  "w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-paper placeholder:text-muted/60 outline-none transition-colors focus:border-ember/60 focus:ring-2 focus:ring-ember/20";

export function Booking() {
  const [status, setStatus] = useState<Status>("idle");
  const [name, setName] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    const data = new FormData(e.currentTarget);
    setName(String(data.get("name") ?? ""));
    setStatus("sending");
    // Demo: clientseitiger Success-State.
    // Im Kundenprojekt: hier POST an Route-Handler / E-Mail-Service (z. B. Resend).
    setTimeout(() => setStatus("done"), 1100);
  }

  // Wunschdatum: frühestens morgen — als DOM-Sync via Ref, damit der statische
  // Build kein veraltetes Datum einbackt
  const setMinDate = (el: HTMLInputElement | null) => {
    if (el) el.min = new Date(Date.now() + 86_400_000).toISOString().split("T")[0];
  };

  return (
    <section id="termin" className="noise relative overflow-hidden border-y border-line py-24 lg:py-32">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 80% 10%, rgba(255,107,44,0.09), transparent 60%), radial-gradient(ellipse 50% 50% at 10% 90%, rgba(155,178,201,0.05), transparent 70%)",
        }}
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
          <div className="lg:col-span-2">
            <SectionHeading
              kicker="Terminbuchung"
              title="Termin anfragen — in 60 Sekunden"
              text="Kurz ausfüllen, abschicken, fertig. Wir melden uns werktags innerhalb von 24 Stunden mit einem festen Terminvorschlag."
            />
            <Reveal delay={0.15}>
              <ul className="mt-8 space-y-4">
                {[
                  "Unverbindliche Anfrage — kein Vertragsabschluss",
                  "Festpreis-Angebot vor jeder Reparatur",
                  "Ersatzwagen & Hol-/Bringservice auf Wunsch",
                ].map((t) => (
                  <li key={t} className="flex items-center gap-3 text-sm text-paper/75">
                    <ShieldCheck className="h-5 w-5 shrink-0 text-ember" aria-hidden />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-2xl border border-line bg-surface p-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted">
                  Lieber direkt sprechen?
                </p>
                <a
                  href={`tel:${business.phone}`}
                  className="mt-2 flex items-center gap-2.5 font-display text-2xl font-semibold text-paper transition-colors hover:text-ember"
                >
                  <Phone className="h-5 w-5 text-ember" aria-hidden />
                  {business.phoneDisplay}
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1} className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-3xl border border-line bg-surface p-6 sm:p-8">
              <AnimatePresence mode="wait">
                {status === "done" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="flex min-h-[420px] flex-col items-center justify-center text-center"
                    role="status"
                  >
                    <span className="flex h-16 w-16 items-center justify-center rounded-full bg-ember/15">
                      <CheckCircle2 className="h-9 w-9 text-ember" aria-hidden />
                    </span>
                    <h3 className="mt-6 font-display text-3xl font-semibold uppercase text-paper">
                      Anfrage eingegangen{name ? `, ${name.split(" ")[0]}` : ""}!
                    </h3>
                    <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                      Vielen Dank für Ihre Terminanfrage. Wir melden uns werktags
                      innerhalb von 24 Stunden telefonisch oder per E-Mail mit
                      einem konkreten Terminvorschlag.
                    </p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="mt-8 rounded-xl border border-line px-5 py-2.5 text-sm font-medium text-paper/70 transition-colors hover:border-paper/40 hover:text-paper"
                    >
                      Weitere Anfrage stellen
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -12 }}
                    className="grid gap-4 sm:grid-cols-2"
                  >
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-xs font-medium text-paper/70">
                        Name *
                      </label>
                      <input id="name" name="name" required autoComplete="name" placeholder="Max Mustermann" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-xs font-medium text-paper/70">
                        Telefonnummer *
                      </label>
                      <input id="phone" name="phone" type="tel" required autoComplete="tel" placeholder="0151 23456789" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-xs font-medium text-paper/70">
                        E-Mail *
                      </label>
                      <input id="email" name="email" type="email" required autoComplete="email" placeholder="max@beispiel.de" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="vehicle" className="mb-1.5 block text-xs font-medium text-paper/70">
                        Fahrzeugmodell *
                      </label>
                      <input id="vehicle" name="vehicle" required placeholder="z. B. VW Golf 8, 2021" className={inputCls} />
                    </div>
                    <div>
                      <label htmlFor="plate" className="mb-1.5 block text-xs font-medium text-paper/70">
                        Kennzeichen <span className="text-muted">(optional)</span>
                      </label>
                      <input id="plate" name="plate" placeholder="DO-XX 123" className={`${inputCls} font-mono uppercase`} />
                    </div>
                    <div>
                      <label htmlFor="service" className="mb-1.5 block text-xs font-medium text-paper/70">
                        Gewünschte Leistung *
                      </label>
                      <select id="service" name="service" required defaultValue="" className={inputCls}>
                        <option value="" disabled>Bitte wählen …</option>
                        {services.map((s) => (
                          <option key={s.id} value={s.id}>{s.title}</option>
                        ))}
                        <option value="sonstiges">Sonstiges / Beratung</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="date" className="mb-1.5 block text-xs font-medium text-paper/70">
                        Wunschdatum *
                      </label>
                      <input id="date" name="date" type="date" required ref={setMinDate} className={`${inputCls} [color-scheme:dark]`} />
                    </div>
                    <div className="flex items-end">
                      <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-line bg-bg px-4 py-3 text-sm text-paper/70 transition-colors hover:border-paper/30">
                        <input type="checkbox" name="rental" className="h-4 w-4 accent-[#ff6b2c]" />
                        Ersatzwagen gewünscht
                      </label>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className="mb-1.5 block text-xs font-medium text-paper/70">
                        Nachricht <span className="text-muted">(optional)</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        placeholder="Beschreiben Sie kurz Ihr Anliegen — z. B. Geräusche, Warnleuchten, gewünschter Zeitraum …"
                        className={`${inputCls} resize-none`}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <button
                        type="submit"
                        disabled={status === "sending"}
                        className="glow-ember flex w-full items-center justify-center gap-2.5 rounded-xl bg-ember px-7 py-4 text-base font-semibold text-bg transition-transform hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                      >
                        {status === "sending" ? (
                          <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
                        ) : (
                          <CalendarCheck2 className="h-5 w-5" aria-hidden />
                        )}
                        {status === "sending" ? "Wird gesendet …" : "Termin unverbindlich anfragen"}
                      </button>
                      <p className="mt-3 text-center text-xs leading-relaxed text-muted">
                        Mit dem Absenden stimmen Sie der Verarbeitung Ihrer Angaben zur
                        Terminabstimmung zu. Demo-Formular — es werden keine Daten übertragen.
                      </p>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
