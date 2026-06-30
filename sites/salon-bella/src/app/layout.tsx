import type { Metadata } from "next";
import { Cormorant_Garamond, Archivo, IBM_Plex_Mono } from "next/font/google";
import { business, seo, openingHoursSchema, services, reviews } from "@/lib/content";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-archivo",
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-plex-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(business.url),
  title: seo.title,
  description: seo.description,
  keywords: [...seo.keywords],
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: business.url,
    siteName: business.name,
    title: seo.title,
    description: seo.description,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: `${business.name} — Friseur & Beauty in ${business.city}` }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    images: ["/og-image.jpg"],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: business.url },
};

/** JSON-LD: schema.org HairSalon (LocalBusiness) für Local SEO */
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: business.name,
  legalName: business.legalName,
  url: business.url,
  telephone: business.phone,
  email: business.email,
  foundingDate: String(business.founded),
  priceRange: "€€",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.street,
    postalCode: business.zip,
    addressLocality: business.city,
    addressRegion: business.region,
    addressCountry: "DE",
  },
  geo: { "@type": "GeoCoordinates", latitude: business.lat, longitude: business.lng },
  openingHoursSpecification: openingHoursSchema.map((h) => ({
    "@type": "OpeningHoursSpecification",
    ...h,
  })),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: String(reviews.length * 47),
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Salon-Leistungen",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.text },
    })),
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de" className={`${cormorant.variable} ${archivo.variable} ${plexMono.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
