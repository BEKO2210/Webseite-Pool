/**
 * ZENTRALE CONTENT-DATEI
 * Alle Texte, Kontaktdaten und Listen der Website werden hier gepflegt.
 * Für ein Kundenprojekt: nur diese Datei anpassen — Layout bleibt unberührt.
 */

export const business = {
  name: "KÖNIG Werkstatt",
  legalName: "Autohaus König Werkstattservice GmbH (Demo)",
  claim: "Meisterqualität für Ihr Fahrzeug.",
  phone: "+49 231 555 120-0",
  phoneDisplay: "0231 555 120-0",
  emergencyPhone: "+49 171 555 120-9",
  emergencyPhoneDisplay: "0171 555 120-9",
  email: "service@koenig-werkstatt.de",
  street: "Industriestraße 24",
  zip: "71691",
  city: "Freiberg",
  region: "BW",
  lat: 51.5283,
  lng: 7.5995,
  url: "https://koenig-werkstatt-demo.de",
  founded: 1998,
  masterSince: "Kfz-Meisterbetrieb seit 1998",
} as const;

export const openingHours = [
  { days: "Montag – Freitag", time: "07:30 – 18:00 Uhr" },
  { days: "Samstag", time: "09:00 – 13:00 Uhr" },
  { days: "Sonntag", time: "Geschlossen" },
] as const;

/** Für JSON-LD (schema.org openingHoursSpecification) */
export const openingHoursSchema = [
  { dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"], opens: "07:30", closes: "18:00" },
  { dayOfWeek: ["Saturday"], opens: "09:00", closes: "13:00" },
];

export const stats = [
  { value: "25+", label: "Jahre Erfahrung" },
  { value: "4,9", label: "Google-Bewertung" },
  { value: "12.000+", label: "Reparaturen" },
  { value: "24h", label: "Termin-Rückmeldung" },
] as const;

export const services = [
  {
    id: "inspektion",
    icon: "ClipboardCheck",
    title: "Inspektion & Wartung",
    text: "Wartung nach Herstellervorgaben mit digitalem Serviceheft-Eintrag — Garantie bleibt erhalten.",
    price: "ab 149 €",
  },
  {
    id: "oelwechsel",
    icon: "Droplets",
    title: "Ölwechsel",
    text: "Markenöle nach Freigabe Ihres Herstellers, inklusive Filter und fachgerechter Altöl-Entsorgung.",
    price: "ab 89 €",
  },
  {
    id: "bremsen",
    icon: "Disc3",
    title: "Bremsenservice",
    text: "Beläge, Scheiben, Bremsflüssigkeit — geprüft und dokumentiert. Sicherheit ohne Kompromisse.",
    price: "ab 119 €",
  },
  {
    id: "reifen",
    icon: "CircleDot",
    title: "Reifenwechsel & Einlagerung",
    text: "Wechsel, Wuchten, RDKS-Service und Einlagerung — saisonfertig in unter 45 Minuten.",
    price: "ab 39 €",
  },
  {
    id: "diagnose",
    icon: "ScanLine",
    title: "Fehlerdiagnose",
    text: "Moderne Diagnosetechnik für alle gängigen Marken. Klare Befunde statt Rätselraten.",
    price: "ab 59 €",
  },
  {
    id: "klima",
    icon: "Snowflake",
    title: "Klimaservice",
    text: "Prüfung, Desinfektion und Befüllung (R134a / R1234yf) — volle Kühlleistung, saubere Luft.",
    price: "ab 79 €",
  },
  {
    id: "tuev",
    icon: "BadgeCheck",
    title: "TÜV / AU-Vorbereitung",
    text: "Vorab-Check, Mängelbeseitigung und HU-Begleitung — Sie fahren ohne Umwege durch die Prüfung.",
    price: "ab 49 €",
  },
  {
    id: "unfall",
    icon: "Wrench",
    title: "Unfallinstandsetzung",
    text: "Karosserie- und Lackarbeiten inklusive Gutachten-Abwicklung mit Ihrer Versicherung.",
    price: "nach Gutachten",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Termin anfragen",
    text: "Online in 60 Sekunden oder telefonisch. Wir melden uns innerhalb von 24 Stunden mit einem festen Termin.",
  },
  {
    step: "02",
    title: "Diagnose & Festpreis-Angebot",
    text: "Wir prüfen Ihr Fahrzeug und erstellen ein klares Angebot. Keine versteckten Posten.",
  },
  {
    step: "03",
    title: "Ihre Freigabe — dann erst Reparatur",
    text: "Repariert wird ausschließlich, was Sie freigegeben haben. Bei Zusatzbefunden rufen wir an, bevor wir arbeiten.",
  },
  {
    step: "04",
    title: "Abholung & Dokumentation",
    text: "Übergabe mit Rechnung, ausgebauten Altteilen auf Wunsch und digitalem Servicenachweis.",
  },
] as const;

export const trustPoints = [
  {
    icon: "Award",
    title: "Meisterbetrieb",
    text: "Eingetragener Kfz-Meisterbetrieb — jede Reparatur wird von Meisterhand geprüft.",
  },
  {
    icon: "FileCheck2",
    title: "Transparente Freigabe",
    text: "Kein Eingriff ohne Ihre Zustimmung. Sie erhalten vorab Befund und Preis.",
  },
  {
    icon: "CalendarClock",
    title: "Schnelle Termine",
    text: "Rückmeldung innerhalb von 24 Stunden, Werkstatttermin meist innerhalb weniger Tage.",
  },
  {
    icon: "Car",
    title: "Ersatzwagen optional",
    text: "Bleiben Sie mobil: Ersatzfahrzeug auf Anfrage, Hol- und Bringservice im Stadtgebiet.",
  },
] as const;

export const reviews = [
  {
    name: "Sabine M.",
    date: "vor 2 Wochen",
    rating: 5,
    text: "Bremsen komplett gemacht. Vorher klarer Kostenvoranschlag, am Ende exakt der Preis. Dazu wurde mir am Fahrzeug gezeigt, was getauscht wurde. So stelle ich mir eine Werkstatt vor.",
    service: "Bremsenservice",
  },
  {
    name: "Daniel R.",
    date: "vor 1 Monat",
    rating: 5,
    text: "Motorkontrollleuchte an, kurzfristig Termin bekommen. Fehler war nach der Diagnose schnell gefunden und verständlich erklärt — ohne Fachchinesisch. Sehr fair abgerechnet.",
    service: "Fehlerdiagnose",
  },
  {
    name: "Aylin K.",
    date: "vor 1 Monat",
    rating: 5,
    text: "Reifenwechsel mit Einlagerung. Online angefragt, am nächsten Tag Termin, nach 40 Minuten fertig. Freundliches Team, saubere Werkstatt, alles digital dokumentiert.",
    service: "Reifenwechsel",
  },
  {
    name: "Thomas B.",
    date: "vor 2 Monaten",
    rating: 5,
    text: "Inspektion fürs Leasingfahrzeug nach Herstellervorgaben. Eintrag ins digitale Serviceheft hat reibungslos geklappt. Ersatzwagen stand bereit. Absolut empfehlenswert.",
    service: "Inspektion",
  },
] as const;

export const faqs = [
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "Auf Online-Anfragen antworten wir innerhalb von 24 Stunden (werktags) mit einem konkreten Terminvorschlag. Bei dringenden Fällen — etwa Bremsen oder Warnleuchten — rufen Sie am besten direkt an: oft können wir noch am selben Tag einen Diagnose-Slot anbieten.",
  },
  {
    q: "Verliere ich meine Herstellergarantie in einer freien Werkstatt?",
    a: "Nein. Wir warten Ihr Fahrzeug nach Herstellervorgaben mit freigegebenen Originalteilen bzw. Teilen in Erstausrüsterqualität und dokumentieren alles im digitalen Serviceheft. Ihre Garantie- und Kulanzansprüche bleiben vollständig erhalten.",
  },
  {
    q: "Was kostet eine Reparatur? Gibt es versteckte Kosten?",
    a: "Vor jeder Reparatur erhalten Sie einen Befund mit Festpreis-Angebot. Erst nach Ihrer Freigabe beginnen wir mit der Arbeit. Stellen wir während der Reparatur etwas Zusätzliches fest, rufen wir Sie an — es wird nichts berechnet, was Sie nicht freigegeben haben.",
  },
  {
    q: "Bekomme ich einen Ersatzwagen?",
    a: "Ja, auf Anfrage stellen wir Ihnen für die Dauer der Reparatur ein Ersatzfahrzeug bereit (begrenzte Anzahl, bitte bei der Terminanfrage angeben). Alternativ bieten wir im Stadtgebiet einen Hol- und Bringservice an.",
  },
  {
    q: "Führen Sie auch TÜV / HU durch?",
    a: "Die Hauptuntersuchung wird bei uns im Haus durch einen Prüfingenieur einer amtlichen Prüforganisation durchgeführt. Vorher checken wir Ihr Fahrzeug durch und beheben Mängel — so vermeiden Sie Nachprüfungen und doppelte Wege.",
  },
  {
    q: "Welche Marken reparieren Sie?",
    a: "Wir arbeiten markenübergreifend — von VW, Audi, BMW und Mercedes über Ford, Opel und Skoda bis zu asiatischen Herstellern. Unsere Diagnosetechnik und Datenbanken decken alle gängigen Marken ab. Bei Exoten fragen Sie kurz an.",
  },
  {
    q: "Was passiert mit meinen alten Teilen?",
    a: "Ausgetauschte Teile legen wir Ihnen auf Wunsch zur Abholung ins Fahrzeug oder zeigen sie Ihnen bei der Übergabe. Entsorgung erfolgt selbstverständlich fachgerecht und umweltkonform.",
  },
] as const;

export const seo = {
  title: "Kfz-Werkstatt Freiberg | KÖNIG Werkstatt — Meisterbetrieb für Autoreparatur",
  description:
    "Ihre Kfz-Werkstatt in Dortmund: Inspektion, Bremsenservice, Reifenwechsel, Fehlerdiagnose, Klimaservice & TÜV-Vorbereitung. Meisterbetrieb mit transparenter Freigabe vor jeder Reparatur. Jetzt online Termin anfragen.",
  keywords: [
    "Kfz-Werkstatt Freiberg",
    "Autoreparatur Freiberg",
    "Inspektion",
    "Bremsenservice",
    "Reifenwechsel",
    "Fehlerdiagnose",
    "Klimaservice",
    "TÜV Vorbereitung",
    "Meisterbetrieb",
    "Autowerkstatt",
  ],
} as const;
