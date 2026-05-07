"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Script from "next/script";
import Link from "next/link";
import { siteConfig, tiktokVideoIds } from "@/lib/data";

const PREVIEW_COUNT = 3;

export default function TikTokSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const previewIds = tiktokVideoIds.slice(0, PREVIEW_COUNT);

  return (
    <section className="py-20 md:py-32 overflow-hidden" style={{ background: "#FAFAF8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4 md:gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-label mb-3 md:mb-4"
            >
              — Suivez nos chantiers en direct
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="section-title"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)", color: "#1A1A1A" }}
            >
              NOS<br />
              <span className="gold-text">VIDÉOS</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <a
              href={siteConfig.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-5 py-2.5 transition-all duration-300 text-xs tracking-widest uppercase"
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
              Suivre sur TikTok
            </a>
          </motion.div>
        </div>

        {/* 3 vidéos en aperçu */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {previewIds.map((videoId, i) => (
            <motion.div
              key={videoId}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
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

        {/* Bouton voir toutes les vidéos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-10 pt-10"
          style={{ borderTop: "1px solid #E0DDD4" }}
        >
          <p className="text-sm" style={{ color: "#888", fontFamily: "var(--font-inter)" }}>
            {tiktokVideoIds.length} vidéos disponibles sur notre chaîne TikTok
          </p>
          <Link
            href="/videos"
            className="flex items-center gap-3 px-7 py-3.5 text-xs tracking-widest uppercase font-medium transition-all duration-300"
            style={{ background: "#1A1A1A", color: "#F5F4EF", fontFamily: "var(--font-inter)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#B21F2D";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#1A1A1A";
            }}
          >
            <TikTokIcon />
            Voir toutes nos vidéos
          </Link>
        </motion.div>

        {/* YouTube CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 p-6 md:p-8"
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

      <Script src="https://www.tiktok.com/embed.js" strategy="lazyOnload" />
    </section>
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
