"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Script from "next/script";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { siteConfig, tiktokVideoIds } from "@/lib/data";

export default function VideosPage() {
  return (
    <div style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      <CustomCursor />
      <Navigation />

      {/* Hero */}
      <div
        className="relative flex items-end pb-16 md:pb-20"
        style={{
          height: 320,
          background: "linear-gradient(135deg, #1A1A1A 0%, #242424 100%)",
        }}
      >
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(178,31,45,0.08) 0%, transparent 70%)" }} />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-10 w-full">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-5"
          >
            <Link
              href="/"
              className="text-[10px] tracking-widest uppercase transition-colors duration-200"
              style={{ color: "#555", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B21F2D")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
            >
              Accueil
            </Link>
            <span style={{ color: "#333" }}>/</span>
            <span className="text-[10px] tracking-widest uppercase" style={{ color: "#B21F2D", fontFamily: "var(--font-inter)" }}>
              Vidéos
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-label mb-3"
          >
            — Suivez nos chantiers en direct
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="section-title"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#F5F4EF" }}
          >
            NOS <span className="gold-text">VIDÉOS</span>
          </motion.h1>
        </div>
      </div>

      {/* Grille complète */}
      <VideoGrid />

      {/* YouTube CTA */}
      <YouTubeCTA />

      <Footer />
      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </div>
  );
}

function VideoGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 md:py-20">
      {/* Compteur */}
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        className="flex items-center justify-between mb-10"
      >
        <div>
          <p className="section-label mb-2">— @maconnerie_70</p>
          <p className="text-sm" style={{ color: "#888", fontFamily: "var(--font-inter)" }}>
            {tiktokVideoIds.length} vidéos de chantier
          </p>
        </div>
        <a
          href={siteConfig.socials.tiktok}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-5 py-2.5 text-xs tracking-widest uppercase transition-all duration-300"
          style={{ border: "1px solid #E0DDD4", color: "#888", fontFamily: "var(--font-inter)" }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#B21F2D";
            (e.currentTarget as HTMLElement).style.color = "#B21F2D";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD4";
            (e.currentTarget as HTMLElement).style.color = "#888";
          }}
        >
          <TikTokIcon />
          Nous suivre
        </a>
      </motion.div>

      {/* Grille */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {tiktokVideoIds.map((videoId, i) => (
          <motion.div
            key={videoId}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: Math.min(i * 0.08, 1), ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
            style={{ border: "1px solid #E0DDD4", background: "#FFFFFF", minHeight: 480 }}
          >
            <blockquote
              className="tiktok-embed"
              cite={`https://www.tiktok.com/@maconnerie_70/video/${videoId}`}
              data-video-id={videoId}
              style={{ maxWidth: "100%", minWidth: "100%" }}
            >
              <section>
                <a
                  href="https://www.tiktok.com/@maconnerie_70?refer=embed"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "#B21F2D" }}
                >
                  @maconnerie_70
                </a>
              </section>
            </blockquote>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function YouTubeCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="py-12 md:py-16" style={{ background: "#F4F3EE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 md:p-8"
          style={{ border: "1px solid #E0DDD4", background: "#FFFFFF" }}
        >
          <div>
            <p className="section-label mb-2">Aussi sur YouTube</p>
            <p className="text-lg font-bold" style={{ fontFamily: "var(--font-barlow)", color: "#1A1A1A" }}>
              MAÇONNERIE 70
            </p>
            <p className="text-sm mt-1" style={{ color: "#888", fontFamily: "var(--font-inter)" }}>
              Retrouvez toutes nos réalisations en vidéo
            </p>
          </div>
          <a
            href={siteConfig.socials.youtube}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-7 py-3.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 flex-shrink-0"
            style={{ fontFamily: "var(--font-inter)", background: "#B21F2D", color: "#fff" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#8B1521")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#B21F2D")}
          >
            <YouTubeIcon />
            Voir la chaîne
          </a>
        </motion.div>
      </div>
    </div>
  );
}

function TikTokIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

function YouTubeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
