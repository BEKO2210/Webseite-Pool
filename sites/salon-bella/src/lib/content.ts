/**
 * ZENTRALE CONTENT-DATEI
 * Alle Texte, Kontaktdaten und Listen der Website werden hier gepflegt.
 * Für ein Kundenprojekt: nur diese Datei anpassen — Layout bleibt unberührt.
 */

export const business = {
  name: "Salon Bella",
  legalName: "Salon Bella Hair & Beauty (Demo)",
  claim: "Wo Stil auf Handwerk trifft.",
  phone: "+49 711 555 0120",
  phoneDisplay: "0711 555 0120",
  // Express-/WhatsApp-Linie für kurzfristige Termine
  expressPhone: "+49 171 555 0129",
  expressPhoneDisplay: "0171 555 0129",
  email: "hallo@salon-bella-demo.de",
  street: "Königstraße 28",
  zip: "70173",
  city: "Stuttgart",
  region: "BW",
  lat: 48.7784,
  lng: 9.1768,
  url: "https://webseite-pool.vercel.app",
  founded: 2012,
  masterSince: "Friseurmeister-Salon seit 2012",
} as const;

export const openingHours = [
  { days: "Dienstag – Freitag", time: "09:00 – 19:00 Uhr" },
  { days: "Samstag", time: "09:00 – 16:00 Uhr" },
  { days: "Sonntag & Montag", time: "Geschlossen" },
] as const;

/** Für JSON-LD (schema.org openingHoursSpecification) */
export const openingHoursSchema = [
  { dayOfWeek: ["Tuesday", "Wednesday", "Thursday", "Friday"], opens: "09:00", closes: "19:00" },
  { dayOfWeek: ["Saturday"], opens: "09:00", closes: "16:00" },
];

export const stats = [
  { value: "12+", label: "Jahre Erfahrung" },
  { value: "4,9", label: "Google-Bewertung" },
  { value: "20.000+", label: "Verwandlungen" },
  { value: "Gratis", label: "Typberatung" },
] as const;

export const services = [
  {
    id: "damenschnitt",
    icon: "Scissors",
    title: "Damenhaarschnitt",
    text: "Schnitt, Wäsche und Föhn-Styling — abgestimmt auf Haarstruktur, Gesichtsform und deinen Alltag.",
    price: "ab 49 €",
  },
  {
    id: "coloration",
    icon: "Palette",
    title: "Coloration & Strähnen",
    text: "Brillante, langanhaltende Farbe mit schonenden Premium-Produkten — vom Nachwuchsansatz bis zum Komplett-Color.",
    price: "ab 79 €",
  },
  {
    id: "balayage",
    icon: "Sparkles",
    title: "Balayage & Ombré",
    text: "Sonnengeküsste Verläufe, freihändig platziert. Natürlich schimmernd, pflegeleicht und nachwuchsfreundlich.",
    price: "ab 129 €",
  },
  {
    id: "pflege",
    icon: "Droplets",
    title: "Pflege & Keratin",
    text: "Tiefenwirksame Haarkuren, Olaplex-Treatment und Keratin-Glättung für Glanz, Geschmeidigkeit und Sprungkraft.",
    price: "ab 39 €",
  },
  {
    id: "braut",
    icon: "Crown",
    title: "Braut- & Event-Styling",
    text: "Dein großer Tag: Probetermin, Hochsteckfrisur und Make-up aus einer Hand — inklusive Generalprobe.",
    price: "ab 99 €",
  },
  {
    id: "hochsteck",
    icon: "Flower2",
    title: "Hochsteckfrisuren",
    text: "Elegant für Gala, Hochzeit oder Abi-Ball. Haltbar gestylt, damit der Look den ganzen Abend sitzt.",
    price: "ab 69 €",
  },
  {
    id: "extensions",
    icon: "Wand2",
    title: "Extensions & Volumen",
    text: "Mehr Länge und Fülle mit hochwertigem Echthaar (Great Lengths) — unsichtbar eingearbeitet, schonend zum Eigenhaar.",
    price: "nach Beratung",
  },
  {
    id: "beauty",
    icon: "Gem",
    title: "Make-up & Augenbrauen",
    text: "Augenbrauen in Form gebracht, Wimpern getönt und ein Make-up, das deine Züge betont — Tag wie Abend.",
    price: "ab 35 €",
  },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Termin buchen",
    text: "Online in 60 Sekunden oder per WhatsApp. Wir bestätigen werktags innerhalb weniger Stunden mit einem festen Termin.",
  },
  {
    step: "02",
    title: "Typberatung",
    text: "Vor jeder Behandlung analysieren wir Haar, Hautton und Gesichtsform und besprechen deine Wünsche — ehrlich und ohne Aufpreis.",
  },
  {
    step: "03",
    title: "Deine Verwandlung",
    text: "Lehn dich zurück bei Espresso oder einem Glas Prosecco, während unser Team mit ruhiger Hand arbeitet.",
  },
  {
    step: "04",
    title: "Finish & Pflege-Tipp",
    text: "Styling, Tipps für zuhause und die passende Produktempfehlung — damit dein Look auch morgen noch sitzt.",
  },
] as const;

export const trustPoints = [
  {
    icon: "Award",
    title: "Meisterbetrieb",
    text: "Geführt von Friseurmeisterinnen — jeder Schnitt sitzt, jede Farbe hält, jedes Detail stimmt.",
  },
  {
    icon: "Sparkles",
    title: "Premium-Produkte",
    text: "Wir arbeiten mit Olaplex, Kérastase & Wella — schonend zu Haar und Kopfhaut, für sichtbaren Glanz.",
  },
  {
    icon: "CalendarClock",
    title: "Flexible Termine",
    text: "Auch abends und samstags. Online buchbar, kurzfristige Slots ganz unkompliziert per WhatsApp.",
  },
  {
    icon: "Heart",
    title: "Wohlfühl-Garantie",
    text: "Nicht ganz zufrieden? Wir bessern innerhalb von 14 Tagen kostenlos nach — versprochen.",
  },
] as const;

export const reviews = [
  {
    name: "Lena S.",
    date: "vor 1 Woche",
    rating: 5,
    text: "Endlich die Balayage, die ich mir immer gewünscht habe! Vorher in Ruhe beraten, kein Drängen, und das Ergebnis ist genau mein natürlicher Look. Das Haar fühlt sich trotz Aufhellung top gepflegt an.",
    service: "Balayage",
  },
  {
    name: "Jasmin K.",
    date: "vor 3 Wochen",
    rating: 5,
    text: "Bester Schnitt seit Jahren. Es wurde wirklich auf meine Haarstruktur geachtet und mir gezeigt, wie ich den Look zuhause hinbekomme. Atmosphäre super entspannt, Espresso inklusive.",
    service: "Damenhaarschnitt",
  },
  {
    name: "Miriam T.",
    date: "vor 1 Monat",
    rating: 5,
    text: "Mein Braut-Styling war ein Traum. Vom Probetermin bis zum großen Tag alles perfekt organisiert, die Frisur hat bis spät in die Nacht gehalten. Ich habe mich rundum schön gefühlt.",
    service: "Braut-Styling",
  },
  {
    name: "Carla B.",
    date: "vor 1 Monat",
    rating: 5,
    text: "Komplette Farbveränderung und ich bin begeistert. Ehrliche Beratung, fairer Preis genau wie besprochen, und ein Ergebnis, für das ich ständig Komplimente bekomme. Klare Empfehlung!",
    service: "Coloration",
  },
] as const;

export const faqs = [
  {
    q: "Wie schnell bekomme ich einen Termin?",
    a: "Online-Anfragen bestätigen wir werktags innerhalb weniger Stunden mit einem konkreten Terminvorschlag. Für kurzfristige Wünsche schreib uns gern über die Express-Linie per WhatsApp — oft finden wir noch in derselben Woche einen freien Slot.",
  },
  {
    q: "Ist eine Beratung vor der Behandlung dabei?",
    a: "Ja, immer. Vor jedem Schnitt und jeder Farbe nehmen wir uns Zeit für eine Typberatung: Wir schauen uns Haarstruktur, Gesichtsform und deine Wünsche an und besprechen ehrlich, was umsetzbar ist. Diese Beratung ist kostenlos und unverbindlich.",
  },
  {
    q: "Welche Produkte verwendet ihr?",
    a: "Wir arbeiten ausschließlich mit professionellen Premium-Marken wie Olaplex, Kérastase, Wella Professionals und Schwarzkopf. Bei Aufhellungen und Balayage setzen wir auf Bond-Pflege, damit dein Haar auch nach der Behandlung gesund und glänzend bleibt.",
  },
  {
    q: "Was kostet eine Coloration oder Balayage?",
    a: "Der Preis hängt von Haarlänge, Haarfülle und Wunschergebnis ab. Du erhältst vor Beginn immer einen klaren Preisrahmen — es gibt keine versteckten Kosten. Die in der Leistungsübersicht genannten Preise sind Demo-Richtwerte ab dem jeweiligen Startpreis.",
  },
  {
    q: "Bietet ihr Braut- und Event-Styling an?",
    a: "Sehr gern. Für deinen großen Tag vereinbaren wir zunächst einen Probetermin, damit Frisur und Make-up perfekt sitzen. Auf Wunsch kommen wir auch zu dir oder in die Location. Frühzeitig anfragen lohnt sich — beliebte Samstage sind schnell ausgebucht.",
  },
  {
    q: "Kann ich auch ohne Termin vorbeikommen?",
    a: "Walk-ins nehmen wir an, wenn gerade ein Platz frei ist — sicher ist aber nur ein gebuchter Termin. Am entspanntesten fährst du mit einer kurzen Online-Anfrage oder einem Anruf vorab. Dann steht dein Stuhl bereit, sobald du kommst.",
  },
  {
    q: "Schneidet ihr auch Herren und Kinder?",
    a: "Ja, der ganze Salon ist für alle da: klassische und moderne Herrenschnitte inklusive Bart, dazu unkomplizierte Kinderschnitte. Sag bei der Buchung kurz Bescheid, dann planen wir die passende Zeit ein.",
  },
] as const;

export const seo = {
  title: "Friseur Stuttgart | Salon Bella — Hair & Beauty an der Königstraße",
  description:
    "Dein Friseur in Stuttgart: Damenhaarschnitt, Coloration, Balayage, Pflege, Braut-Styling & Beauty. Meistersalon mit kostenloser Typberatung und Premium-Produkten. Jetzt online Termin anfragen.",
  keywords: [
    "Friseur Stuttgart",
    "Friseursalon Stuttgart",
    "Balayage Stuttgart",
    "Coloration",
    "Damenhaarschnitt",
    "Braut-Styling",
    "Hochsteckfrisur",
    "Extensions",
    "Haarpflege Keratin",
    "Beauty Salon Königstraße",
  ],
} as const;
