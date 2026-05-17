"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import Gallery from "@/components/Gallery";

export default function RealisationsPage() {
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
              Réalisations
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="section-label mb-3"
          >
            — Notre travail
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="section-title"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6rem)", color: "#F5F4EF" }}
          >
            NOS <span className="gold-text">RÉALISATIONS</span>
          </motion.h1>
        </div>
      </div>

      <Gallery hideHeader />

      <Footer />
    </div>
  );
}
