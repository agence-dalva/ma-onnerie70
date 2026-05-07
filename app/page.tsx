"use client";

import { useState, useEffect } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import CustomCursor from "@/components/CustomCursor";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import TikTokSection from "@/components/TikTokSection";
import ZoneIntervention from "@/components/ZoneIntervention";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <CustomCursor />
      {loading && <LoadingScreen />}
      <main className={loading ? "opacity-0" : "opacity-100 transition-opacity duration-700"}>
        <Navigation />
        <section id="accueil">
          <Hero />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="apropos">
          <About />
        </section>
        <section id="realisations">
          <Gallery />
        </section>
        <section id="videos">
          <TikTokSection />
        </section>
        <ZoneIntervention />
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </main>
    </>
  );
}
