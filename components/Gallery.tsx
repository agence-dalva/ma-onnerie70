"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { gallery } from "@/lib/data";

const categories = [
  { id: "all", label: "Tout" },
  { id: "construction", label: "Construction" },
  { id: "renovation", label: "Rénovation" },
  { id: "terrassement", label: "Terrassement" },
  { id: "enduits", label: "Enduits" },
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeFilter === "all" ? gallery : gallery.filter((g) => g.category === activeFilter);

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(() => setLightboxIndex((i) => (i !== null ? (i - 1 + filtered.length) % filtered.length : null)), [filtered.length]);
  const nextImage = useCallback(() => setLightboxIndex((i) => (i !== null ? (i + 1) % filtered.length : null)), [filtered.length]);

  // Fermer le lightbox quand le filtre change
  useEffect(() => { setLightboxIndex(null); }, [activeFilter]);

  // Navigation clavier
  useEffect(() => {
    if (lightboxIndex === null) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevImage();
      else if (e.key === "ArrowRight") nextImage();
      else if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [lightboxIndex, prevImage, nextImage, closeLightbox]);

  const currentImage = lightboxIndex !== null ? filtered[lightboxIndex] : null;

  return (
    <section className="py-20 md:py-32" style={{ background: "#FAFAF8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-12 gap-4 md:gap-6">
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
        </div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap gap-2 md:gap-3 mb-8 md:mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className="px-4 py-1.5 md:px-5 md:py-2 text-xs tracking-widest uppercase transition-all duration-300"
              style={{
                fontFamily: "var(--font-inter)",
                background: activeFilter === cat.id ? "#B21F2D" : "transparent",
                color: activeFilter === cat.id ? "#fff" : "#888",
                border: `1px solid ${activeFilter === cat.id ? "#B21F2D" : "#E0DDD4"}`,
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Masonry grid */}
        <motion.div layout className="columns-1 sm:columns-2 md:columns-3 gap-3 space-y-3">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <GalleryItem key={item.src} item={item} index={i} onClick={() => openLightbox(i)} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Carrousel lightbox */}
      <AnimatePresence>
        {currentImage && lightboxIndex !== null && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            style={{ background: "rgba(10,10,10,0.95)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Image container */}
            <motion.div
              className="relative w-full max-w-5xl px-4 sm:px-16"
              initial={{ scale: 0.93, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.93, opacity: 0 }}
              transition={{ ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={lightboxIndex}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -30 }}
                  transition={{ duration: 0.25 }}
                  className="relative"
                  style={{ aspectRatio: "16/10" }}
                >
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    fill
                    className="object-contain"
                    unoptimized
                  />
                </motion.div>
              </AnimatePresence>

              {/* Caption + counter */}
              <div className="flex items-center justify-between mt-4 px-1">
                <p className="text-xs tracking-widest uppercase" style={{ color: "#888", fontFamily: "var(--font-inter)" }}>
                  {currentImage.alt}
                </p>
                <p className="text-xs tabular-nums" style={{ color: "#555", fontFamily: "var(--font-inter)" }}>
                  {lightboxIndex + 1} / {filtered.length}
                </p>
              </div>
            </motion.div>

            {/* Bouton fermer */}
            <button
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center text-sm transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#aaa" }}
              onClick={closeLightbox}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#B21F2D";
                (e.currentTarget as HTMLElement).style.borderColor = "#B21F2D";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#aaa";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
              }}
            >
              ✕
            </button>

            {/* Bouton précédent */}
            <button
              className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#aaa" }}
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#fff";
                (e.currentTarget as HTMLElement).style.borderColor = "#B21F2D";
                (e.currentTarget as HTMLElement).style.background = "rgba(178,31,45,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#aaa";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            {/* Bouton suivant */}
            <button
              className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center transition-all duration-200"
              style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#aaa" }}
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#fff";
                (e.currentTarget as HTMLElement).style.borderColor = "#B21F2D";
                (e.currentTarget as HTMLElement).style.background = "rgba(178,31,45,0.2)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.color = "#aaa";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            {/* Indicateurs dots (jusqu'à 12 images) */}
            {filtered.length <= 12 && (
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5">
                {filtered.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setLightboxIndex(i); }}
                    className="transition-all duration-200 rounded-full"
                    style={{
                      width: i === lightboxIndex ? 20 : 6,
                      height: 6,
                      background: i === lightboxIndex ? "#B21F2D" : "rgba(255,255,255,0.3)",
                    }}
                  />
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

function GalleryItem({ item, index, onClick }: { item: (typeof gallery)[0]; index: number; onClick: () => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.06 }}
      className="group relative overflow-hidden cursor-pointer break-inside-avoid mb-3"
      onClick={onClick}
      style={{ background: "#F4F3EE" }}
    >
      <div
        className="relative overflow-hidden"
        style={{ paddingBottom: item.span === "tall" ? "140%" : item.span === "wide" ? "60%" : "80%" }}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          unoptimized
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-end p-4"
          style={{ background: "linear-gradient(to top, rgba(26,26,26,0.75) 0%, transparent 60%)" }}
        >
          <p className="text-xs tracking-wider uppercase" style={{ color: "#D4404E", fontFamily: "var(--font-inter)" }}>
            {item.alt}
          </p>
        </div>
        <div
          className="absolute top-2.5 right-2.5 w-8 h-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
          style={{ background: "rgba(250,250,248,0.9)", border: "1px solid rgba(178,31,45,0.4)" }}
        >
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#B21F2D" strokeWidth="2">
            <path d="M15 3h6m0 0v6m0-6l-7 7M9 21H3m0 0v-6m0 6l7-7" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}
