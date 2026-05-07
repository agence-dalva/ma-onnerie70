"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const S3 = "https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/32223";

const YOUTUBE_VIDEO_ID = "tR80jjRi4Fo";
const HERO_IMAGE = `${S3}/Crea2025/Ma%C3%A7onnerie%2070.jpg`;

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div ref={ref} className="relative h-screen min-h-[700px] overflow-hidden flex items-center">
      {/* Parallax background */}
      <motion.div className="absolute inset-0" style={{ y }}>
        {/* Image de secours */}
        <Image
          src={HERO_IMAGE}
          alt="Maçonnerie 70"
          fill
          priority
          className="object-cover"
          unoptimized
        />

        {/* YouTube iframe couvrant tout le fond — scale pour masquer les bandes noires */}
        <iframe
          src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&mute=1&loop=1&controls=0&playlist=${YOUTUBE_VIDEO_ID}&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1&playsinline=1&disablekb=1&fs=0&cc_load_policy=0`}
          title="Maçonnerie 70 — vidéo de fond"
          allow="autoplay; encrypted-media"
          style={{
            position: "absolute",
            width: "100vw",
            height: "56.25vw",
            minHeight: "100%",
            minWidth: "177.78vh",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(1.15)",
            border: 0,
            pointerEvents: "none",
          }}
        />

        {/* Overlays */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.88) 30%, rgba(10,10,10,0.35) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.8) 0%, transparent 50%)" }} />
      </motion.div>

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col justify-center"
        style={{ opacity }}
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 3.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12" style={{ background: "#B21F2D" }} />
          <span className="section-label">Champagney — Haute-Saône</span>
        </motion.div>

        {/* Main title */}
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 3.7, ease: [0.22, 1, 0.36, 1] }}
            className="section-title"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)", color: "#F5F4EF" }}
          >
            MAÇONNERIE 70
          </motion.h1>
        </div>
        <div className="overflow-hidden mb-4">
          <motion.h1
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 3.85, ease: [0.22, 1, 0.36, 1] }}
            className="section-title gold-text"
            style={{ fontSize: "clamp(3.5rem, 10vw, 9rem)" }}
          >
            PÈRE & FILS
          </motion.h1>
        </div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-lg text-base leading-relaxed mb-10"
          style={{ color: "#888", fontFamily: "var(--font-inter)" }}
        >
          Entreprise familiale depuis 2010. Construction, rénovation et terrassement
          dans un rayon de 100 kms autour de Champagney.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 4.25, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-wrap gap-4"
        >
          <GoldButton onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}>
            Devis gratuit
          </GoldButton>
          <OutlineButton onClick={scrollToServices}>
            Nos services
          </OutlineButton>
        </motion.div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 4.5 }}
          className="flex flex-wrap gap-8 mt-16 pt-8"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          {[
            { value: "15 ans", label: "d'expérience" },
            { value: "7", label: "artisans qualifiés" },
            { value: "100 kms", label: "de rayon d'action" },
            { value: "100%", label: "devis gratuits" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col">
              <span className="text-2xl font-bold" style={{ color: "#B21F2D", fontFamily: "var(--font-barlow)" }}>
                {s.value}
              </span>
              <span className="text-xs" style={{ color: "#555", fontFamily: "var(--font-inter)" }}>
                {s.label}
              </span>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToServices}
        className="absolute bottom-10 right-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4.6 }}
        style={{ color: "#555" }}
      >
        <span className="text-[10px] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-inter)", writingMode: "vertical-rl" }}>
          Défiler
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          style={{ width: 1, height: 48, background: "linear-gradient(to bottom, #B21F2D, transparent)" }}
        />
      </motion.button>
    </div>
  );
}

function GoldButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="group relative px-8 py-4 text-xs tracking-widest uppercase font-medium overflow-hidden"
      style={{ fontFamily: "var(--font-inter)", background: "#B21F2D", color: "#fff" }}
      onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#8B1521"; }}
      onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "#B21F2D"; }}
    >
      {children}
    </button>
  );
}

function OutlineButton({ children, onClick }: { children: React.ReactNode; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className="px-8 py-4 text-xs tracking-widest uppercase font-medium transition-all duration-300"
      style={{
        fontFamily: "var(--font-inter)",
        border: "1px solid rgba(255,255,255,0.15)",
        color: "#F5F4EF",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "#B21F2D";
        el.style.color = "#B21F2D";
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget as HTMLElement;
        el.style.borderColor = "rgba(255,255,255,0.15)";
        el.style.color = "#F5F4EF";
      }}
    >
      {children}
    </button>
  );
}
