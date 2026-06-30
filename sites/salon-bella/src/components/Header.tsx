"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Scissors } from "lucide-react";
import { business } from "@/lib/content";

const nav = [
  { href: "#leistungen", label: "Leistungen" },
  { href: "#ablauf", label: "Ablauf" },
  { href: "#galerie", label: "Galerie" },
  { href: "#bewertungen", label: "Bewertungen" },
  { href: "#faq", label: "FAQ" },
  { href: "#kontakt", label: "Kontakt" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line bg-bg/85 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="flex items-center gap-2.5" aria-label={`${business.name} — Startseite`}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-ember text-bg">
            <Scissors className="h-4.5 w-4.5" strokeWidth={2.5} aria-hidden />
          </span>
          <span className="font-display text-2xl font-semibold uppercase tracking-wide">
            Salon<span className="text-ember">.</span>Bella
          </span>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex" aria-label="Hauptnavigation">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-paper/70 transition-colors hover:text-paper"
            >
              {n.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={`tel:${business.phone}`}
            className="flex items-center gap-2 text-sm font-medium text-paper/70 transition-colors hover:text-paper"
          >
            <Phone className="h-4 w-4 text-ember" aria-hidden />
            {business.phoneDisplay}
          </a>
          <a
            href="#termin"
            className="glow-ember rounded-lg bg-ember px-4 py-2 text-sm font-semibold text-bg transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Termin anfragen
          </a>
        </div>

        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-line lg:hidden"
          onClick={() => setOpen(!open)}
          aria-expanded={open}
          aria-label={open ? "Menü schließen" : "Menü öffnen"}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-b border-line bg-bg/95 backdrop-blur-md lg:hidden"
            aria-label="Mobile Navigation"
          >
            <div className="space-y-1 px-4 pb-6 pt-2">
              {nav.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 text-base font-medium text-paper/80 hover:bg-surface"
                >
                  {n.label}
                </a>
              ))}
              <a
                href="#termin"
                onClick={() => setOpen(false)}
                className="mt-3 block rounded-lg bg-ember px-3 py-3 text-center text-base font-semibold text-bg"
              >
                Termin anfragen
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
