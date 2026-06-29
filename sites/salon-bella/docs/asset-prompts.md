# Asset-Prompts — KÖNIG Werkstatt (Higgsfield-kompatibel)

Alle Prompts sind für **Higgsfield** optimiert (konkret, sensorisch, < 200 Tokens,
Kamera + Licht + Stil). Empfohlene Modelle:

| Asset-Typ | Modell | CLI `job_set_type` |
|---|---|---|
| Cinematic Stills (Werkstatt-Szenen) | Soul Location / GPT Image 2 | `soul_location` / `gpt_image_2` |
| Video-Loops | Seedance 2.0 | `seedance_2_0` |
| Günstigere Loops ohne Schnitte | Kling 3.0 | `kling3_0` |

Workflow pro Video-Loop: erst Still generieren (16:9), dann als `--start-image`
in Seedance 2.0 geben — Prompt beschreibt **nur die Bewegung**.

Beispiel-CLI:

```bash
higgsfield generate create gpt_image_2 --prompt "<PROMPT>" --aspect_ratio 16:9 --resolution 2k --wait
higgsfield generate create seedance_2_0 --prompt "<MOTION-PROMPT>" --start-image ./hero-still.png --duration 8 --aspect_ratio 16:9 --wait
```

Hinweis: Keine realen Markenlogos/Embleme prompten (Trademark-Filter) —
"generic premium sedan" statt Herstellername.

---

## 1. Hero Video Loop — `hero-loop.mp4`

**Einsatz:** Hero-Hintergrund (16:9), Social-Teaser (9:16)
**Modell:** GPT Image 2 (Still) → Seedance 2.0 (Loop, 8–12 s)

**Still-Prompt (16:9):**
> Dark premium car workshop at night, glossy black sedan on a hydraulic lift under a single dramatic cone of warm amber light from above, polished concrete floor with subtle reflections, deep shadows, faint blue rim light from a diagnostic screen in the background, cinematic photography, 35mm lens, low angle, moody, photorealistic

**Motion-Prompt (Loop):**
> Slow cinematic dolly-in toward the car on the lift, dust particles drifting through the amber light cone, subtle light flicker, reflections shimmering on the glossy paint, seamless loop, no people moving through frame

**9:16-Variante (Social):** gleiche Prompts mit `--aspect_ratio 9:16`, Komposition: "vertical composition, car centered, light cone filling upper third".

---

## 2. Mechaniker bei Diagnose — `diagnose-clip.mp4` / `diagnose.jpg`

**Einsatz:** Trust-Section (4:5 Card), FAQ-Teaser (16:9)
**Modell:** Soul Cinema oder GPT Image 2 (Still) → Seedance 2.0

**Still-Prompt:**
> Focused mechanic in dark workwear holding a diagnostic tablet beside an open car hood, cool blue glow from the OBD scanner screen illuminating his face, warm workshop lights blurred in background, shallow depth of field, 50mm lens, cinematic color grade teal and amber, photorealistic, professional automotive workshop

**Motion-Prompt:**
> Mechanic scrolls on the diagnostic tablet, screen glow flickers softly on his face, slow push-in, background bokeh lights breathe gently, seamless loop

---

## 3. Reifenwechsel Close-up — `reifen-loop.mp4`

**Einsatz:** Showcase-Grid (3:4 Card), Instagram Reel (9:16)
**Modell:** GPT Image 2 → Seedance 2.0

**Still-Prompt:**
> Extreme close-up of a mechanic's gloved hands tightening lug nuts on an alloy wheel with a torque wrench, tire tread texture in sharp focus, warm spotlight from above, dark workshop background, fine dust particles in the light, macro photography style, 85mm lens, high contrast, photorealistic

**Motion-Prompt:**
> The torque wrench turns one firm click, hand repositions, subtle camera orbit right, dust drifting in spotlight, seamless loop

---

## 4. Bremsenservice — `bremse-detail.jpg` (+ Vorher/Nachher-Paar)

**Einsatz:** Vorher/Nachher-Slider (16:9), Service-Card
**Modell:** GPT Image 2 (zwei Stills, identische Komposition)

**Vorher-Prompt:**
> Close-up of a worn rusty brake disc and old brake pads on a car hub, dull corroded metal surface, dim neutral workshop lighting, slightly desaturated, documentary style, 60mm lens, photorealistic

**Nachher-Prompt:**
> Close-up of a brand new shiny brake disc with fresh brake pads installed on the same car hub, clean machined metal catching warm amber workshop light, crisp reflections, same camera angle and framing as before, 60mm lens, photorealistic

*Tipp:* Nachher-Bild via Image-to-Image aus dem Vorher-Bild erzeugen
(`--image ./vorher.png`, Prompt beschreibt nur die Änderung) — identische Komposition garantiert.

---

## 5. Werkstatt bei Nacht — `werkstatt-nacht.jpg`

**Einsatz:** Showcase-Grid Hauptbild (16:9), OG-Image `og-image.jpg` (1200×630)
**Modell:** Soul Location

**Prompt:**
> Wide shot of a modern car workshop at night seen through large open garage doors, warm amber light spilling onto wet asphalt outside, two cars on lifts inside, blue diagnostic screens glowing, light fog, reflections on the ground, cinematic establishing shot, anamorphic lens flare, moody atmosphere, photorealistic, uninhabited scene

---

## 6. Kundenübergabe — `uebergabe.jpg`

**Einsatz:** Showcase-Grid (3:4), Google-Business-Profil
**Modell:** Soul 2.0 / GPT Image 2

**Prompt:**
> Service advisor handing car keys to a smiling customer in front of a clean dark workshop reception, warm golden hour light through glass doors, both in natural relaxed poses, shallow depth of field, 35mm documentary style, authentic and trustworthy mood, photorealistic

---

## 7. Smartphone Terminbuchung — `booking-phone.jpg`

**Einsatz:** Social Ads (9:16 + 1:1), Booking-Section Illustration
**Modell:** GPT Image 2

**Prompt (9:16):**
> Hand holding a smartphone showing a dark premium booking interface with an orange button, blurred car workshop with amber lights in the background, evening mood, screen glow on fingers, vertical composition, 9:16, photorealistic, advertising photography style

---

## Asset-Zuordnung (wo ersetzt was?)

| Datei | Komponente | Format |
|---|---|---|
| `hero-loop.mp4` | `Hero.tsx` (Hintergrund-`<video>`) | 16:9, ≤ 4 MB, muted/loop |
| `diagnose-clip.mp4` | `Trust.tsx` → `MediaPlaceholder scene="diagnose"` | 4:5 |
| `reifen-loop.mp4` | `Showcase.tsx` → `scene="reifen"` | 3:4 |
| `vorher/nachher-bremse.jpg` | `BeforeAfter.tsx` | 16:9 Paar |
| `werkstatt-nacht.jpg` | `Showcase.tsx` → `scene="nacht"` | 16:9 |
| `uebergabe.jpg` | `Showcase.tsx` → `scene="uebergabe"` | 3:4 |
| `og-image.jpg` | `layout.tsx` (Open Graph) | 1200×630 |
| `booking-phone.jpg` | Social Media / Ads | 9:16, 1:1 |
