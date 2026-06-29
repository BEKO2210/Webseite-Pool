# KÖNIG Werkstatt — Kfz-Werkstatt Landingpage (Template Nr. 1)

Premium-Demo-Landingpage für Kfz-Werkstätten: cinematic Dark-Design,
Terminanfrage-Formular, Local-SEO (JSON-LD AutoRepair), Framer-Motion-Animationen,
mobile-first mit Sticky-CTA. Mit Higgsfield generierte cinematic Assets.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · lucide-react

## Starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
```

## Was wurde gebaut

| Bereich | Komponente |
|---|---|
| Cinematic Hero + Video-Loop + Claim + CTA | `src/components/Hero.tsx` |
| Marken-Marquee | `BrandStrip.tsx` |
| 8 Leistungen (Inspektion … Unfall) | `Services.tsx` |
| Ablauf / transparente Freigabe | `Process.tsx` |
| Trust (Meisterbetrieb, Ersatzwagen …) | `Trust.tsx` |
| Werkstatt-Einblicke + Vorher/Nachher-Slider | `Showcase.tsx`, `BeforeAfter.tsx` |
| Google-Bewertungen (Demo) | `Reviews.tsx` |
| Terminformular mit Success-State | `Booking.tsx` |
| Notfall-Hotline-Banner | `Emergency.tsx` |
| FAQ-Accordion | `Faq.tsx` |
| Standort / Öffnungszeiten | `LocationSection.tsx` |
| Sticky Mobile-CTA (Anrufen / Termin) | `StickyCta.tsx` |
| SEO, Open Graph, JSON-LD AutoRepair | `src/app/layout.tsx` |

## Texte & Daten ändern

**Eine Datei:** `src/lib/content.ts` — Firmenname, Telefon, Adresse,
Öffnungszeiten, Leistungen, Preise, Bewertungen, FAQ, SEO-Texte.
Layout-Code muss nicht angefasst werden.

Design-Tokens (Farben, Fonts): `src/app/globals.css` (`@theme`-Block).

## Bilder & Videos ersetzen

Assets liegen in `public/assets/`. Generierungs-Prompts (Higgsfield-kompatibel,
16:9 & 9:16) inkl. Zuordnungstabelle: [`docs/asset-prompts.md`](docs/asset-prompts.md).

## Nächste Schritte für echte Kundenprojekte

1. `content.ts` mit echten Kundendaten füllen (Name, Adresse, Preise, HU-Partner)
2. Echte Fotos/Videos einsetzen oder via `docs/asset-prompts.md` generieren
3. Formular-Backend anbinden (`Booking.tsx` → Route Handler + z. B. Resend/E-Mail)
4. Impressum/Datenschutz als echte Seiten anlegen (aktuell Demo-Hinweise)
5. Google-Maps-Embed + echtes Google-Business-Profil verknüpfen
6. Domain aufschalten, `business.url` in `content.ts` aktualisieren
