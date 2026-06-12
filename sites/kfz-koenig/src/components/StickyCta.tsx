"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CalendarCheck2 } from "lucide-react";
import { business } from "@/lib/content";

/** Sticky Mobile-CTA: erscheint nach dem Hero, verschwindet im Termin-Bereich. */
export function StickyCta() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const past = window.scrollY > window.innerHeight * 0.7;
      const booking = document.getElementById("termin");
      let inBooking = false;
      if (booking) {
        const r = booking.getBoundingClientRect();
        inBooking = r.top < window.innerHeight * 0.5 && r.bottom > window.innerHeight * 0.5;
      }
      setVisible(past && !inBooking);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 90 }}
          animate={{ y: 0 }}
          exit={{ y: 90 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-50 border-t border-line bg-bg/90 p-3 backdrop-blur-lg lg:hidden"
          style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))" }}
        >
          <div className="mx-auto flex max-w-md gap-3">
            <a
              href={`tel:${business.phone}`}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-line bg-surface py-3.5 text-sm font-semibold text-paper"
            >
              <Phone className="h-4.5 w-4.5 text-ember" aria-hidden />
              Anrufen
            </a>
            <a
              href="#termin"
              className="glow-ember flex flex-[1.4] items-center justify-center gap-2 rounded-xl bg-ember py-3.5 text-sm font-semibold text-bg"
            >
              <CalendarCheck2 className="h-4.5 w-4.5" aria-hidden />
              Termin anfragen
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
