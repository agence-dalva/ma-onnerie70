"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
const preview = [
  { src: "/photos/nos-realisations-accueil-01.jpeg", alt: "Réalisation maçonnerie 1" },
  { src: "/photos/nos-realisations-accueil-02.png", alt: "Réalisation maçonnerie 2" },
  { src: "/photos/nos-realisations-accueil-03.JPG", alt: "Réalisation maçonnerie 3" },
];

export default function GalleryPreview() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="pt-20 md:pt-32 pb-10 md:pb-14" style={{ background: "#FAFAF8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-12 gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-label mb-3 md:mb-4"
            >
              — Notre travail
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="section-title"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)", color: "#1A1A1A" }}
            >
              NOS<br />
              <span className="gold-text">RÉALISATIONS</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:block"
          >
            <Link
              href="/realisations"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-xs tracking-widest uppercase font-medium transition-all duration-300"
              style={{ fontFamily: "var(--font-inter)", border: "1px solid #1A1A1A", color: "#1A1A1A" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#B21F2D";
                (e.currentTarget as HTMLElement).style.borderColor = "#B21F2D";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.borderColor = "#1A1A1A";
                (e.currentTarget as HTMLElement).style.color = "#1A1A1A";
              }}
            >
              Voir toutes nos réalisations
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </motion.div>
        </div>

        {/* Grid 3 photos même hauteur */}
        <div className="grid grid-cols-3 gap-3">
          {preview.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href="/realisations" className="block group relative overflow-hidden" style={{ background: "#F4F3EE" }}>
                <div className="relative overflow-hidden" style={{ paddingBottom: "75%" }}>
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    unoptimized
                  />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
