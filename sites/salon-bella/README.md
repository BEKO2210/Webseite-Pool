# Salon Bella — Friseur- & Beauty-Landingpage (Demo Nr. 2)

https://webseite-pool.vercel.app/

Premium-Demo-Landingpage für einen Friseur- & Beauty-Salon: elegantes, warm-dunkles
Design mit Champagne-Gold-Akzent und Serif-Display, echte Video-Loops aus dem Salon,
Terminanfrage-Formular, Local-SEO (JSON-LD HairSalon), Framer-Motion-Animationen,
mobile-first mit Sticky-CTA.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS v4 · Framer Motion · lucide-react ·
Google Fonts (Cormorant Garamond, Archivo, IBM Plex Mono)

## Starten

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Produktions-Build
```

## Was wurde gebaut

| Bereich | Komponente |
|---|---|
| Hero mit Video-Loop + Claim + CTA | `src/components/Hero.tsx` |
| Produkt-Marquee (Olaplex, Kérastase …) | `BrandStrip.tsx` |
| 8 Leistungen (Schnitt … Beauty) | `Services.tsx` |
| Ablauf in 4 Schritten | `Process.tsx` |
| Trust (Meisterbetrieb, Premium-Produkte …) | `Trust.tsx` |
| Salon-Galerie mit 3 Video-Loops | `Showcase.tsx`, `MediaPlaceholder.tsx` |
| Google-Bewertungen (Demo) | `Reviews.tsx` |
| Terminformular mit Success-State | `Booking.tsx` |
| Express-/Spontan-Termin-Banner | `Emergency.tsx` |
| FAQ-Accordion | `Faq.tsx` |
| Standort / Öffnungszeiten | `LocationSection.tsx` |
| Sticky Mobile-CTA (Anrufen / Termin) | `StickyCta.tsx` |
| SEO, Open Graph, JSON-LD HairSalon | `src/app/layout.tsx` |

## Texte & Daten ändern

**Eine Datei:** `src/lib/content.ts` — Salonname, Telefon, Adresse,
Öffnungszeiten, Leistungen, Preise, Bewertungen, FAQ, SEO-Texte.
Layout-Code muss nicht angefasst werden.

Design-Tokens (Farben, Fonts): `src/app/globals.css` (`@theme`-Block).

## Videos & Bilder

Die Medien liegen in `public/assets/`. Eingebunden sind drei Video-Loops:

| Datei | Einsatzort |
|---|---|
| `spiegel.mp4` | Hero-Hintergrund + Galerie (Salon-Atmosphäre) |
| `schere.mp4` | Galerie (Präzision · Schnitt im Detail) |
| `waschbecken.mp4` | Galerie + Trust-Sektion (Pflege & Wäsche) |

Videos werden als stummer Autoplay-Loop gerendert (`<video autoplay muted loop playsInline>`).
Zum Austauschen einfach die Datei in `public/assets/` ersetzen oder den Pfad in
`Hero.tsx` / `Showcase.tsx` / `Trust.tsx` anpassen.

## Nächste Schritte für echte Kundenprojekte

1. `content.ts` mit echten Salondaten füllen (Name, Adresse, Preise, Öffnungszeiten)
2. Echte Salon-Videos/Fotos einsetzen (in `public/assets/`)
3. Formular-Backend anbinden (`Booking.tsx` → Route Handler + z. B. Resend/E-Mail)
4. Impressum/Datenschutz als echte Seiten anlegen (aktuell Demo-Hinweise)
5. Google-Maps-Embed + echtes Google-Business-Profil verknüpfen
6. Domain aufschalten, `business.url` in `content.ts` aktualisieren
