# Webseite-Pool

Sammlung von Premium-Demo-Websites für den Vertrieb. Jede Website liegt als
eigenständiges Next.js-Projekt unter `sites/` und wird als **eigenes
Vercel-Projekt** deployed (Root Directory aufs jeweilige Site-Verzeichnis setzen).

## Struktur

```
sites/
  kfz-koenig/        ← Template Nr. 1: Kfz-Werkstatt Landingpage
  <nächste-site>/    ← einfach neuen Ordner anlegen (z. B. friseur-x, zahnarzt-y)
```

## Neue Website hinzufügen

1. Bestehende Site als Basis kopieren: `cp -r sites/kfz-koenig sites/neue-site`
2. In `sites/neue-site/src/lib/content.ts` Texte/Daten anpassen
3. Design-Tokens in `src/app/globals.css` (Farben/Fonts) ändern
4. Committen & pushen
5. Auf Vercel: **neues Projekt** anlegen → dieses Repo importieren →
   *Root Directory* = `sites/neue-site` → Deploy

Jede Site bleibt unabhängig: eigene Dependencies, eigene Domain, eigenes Deployment.

## Sites

| Site | Branche | Status |
|---|---|---|
| [`sites/kfz-koenig`](sites/kfz-koenig) | Kfz-Werkstatt / Meisterbetrieb | ✅ fertig |
