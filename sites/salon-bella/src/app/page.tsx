import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { BrandStrip } from "@/components/BrandStrip";
import { Services } from "@/components/Services";
import { Process } from "@/components/Process";
import { Trust } from "@/components/Trust";
import { Showcase } from "@/components/Showcase";
import { Reviews } from "@/components/Reviews";
import { Booking } from "@/components/Booking";
import { Emergency } from "@/components/Emergency";
import { Faq } from "@/components/Faq";
import { LocationSection } from "@/components/LocationSection";
import { Footer } from "@/components/Footer";
import { StickyCta } from "@/components/StickyCta";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandStrip />
        <Services />
        <Process />
        <Trust />
        <Showcase />
        <Reviews />
        <Booking />
        <Emergency />
        <Faq />
        <LocationSection />
      </main>
      <Footer />
      <StickyCta />
    </>
  );
}
