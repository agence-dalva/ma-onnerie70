"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setVisible(false), 500);
          return 100;
        }
        const increment = p < 60 ? 2 : p < 85 ? 1 : 0.5;
        return Math.min(p + increment, 100);
      });
    }, 30);
    return () => clearInterval(interval);
  }, []);

  const letters = "MAÇONNERIE 70".split("");

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[99990] flex flex-col items-center justify-center overflow-hidden"
          style={{ background: "#FAFAF8" }}
          exit={{ y: "-100%", transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Corner decorations */}
          <div className="absolute top-6 left-6 w-16 h-16 sm:top-10 sm:left-10 sm:w-20 sm:h-20" style={{ borderTop: "1.5px solid #B21F2D", borderLeft: "1.5px solid #B21F2D" }} />
          <div className="absolute top-6 right-6 w-16 h-16 sm:top-10 sm:right-10 sm:w-20 sm:h-20" style={{ borderTop: "1.5px solid #B21F2D", borderRight: "1.5px solid #B21F2D" }} />
          <div className="absolute bottom-6 left-6 w-16 h-16 sm:bottom-10 sm:left-10 sm:w-20 sm:h-20" style={{ borderBottom: "1.5px solid #B21F2D", borderLeft: "1.5px solid #B21F2D" }} />
          <div className="absolute bottom-6 right-6 w-16 h-16 sm:bottom-10 sm:right-10 sm:w-20 sm:h-20" style={{ borderBottom: "1.5px solid #B21F2D", borderRight: "1.5px solid #B21F2D" }} />

          {/* Center content */}
          <div className="flex flex-col items-center gap-8 sm:gap-10 px-6">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-32 h-32 sm:w-44 sm:h-44"
            >
              <Image src={siteConfig.logo} alt="Maçonnerie 70" fill className="object-contain" unoptimized />
            </motion.div>

            {/* Animated title letters */}
            <div className="flex flex-wrap justify-center overflow-hidden" style={{ gap: "2px" }}>
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  initial={{ y: "110%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: 0.45 + i * 0.045, ease: [0.22, 1, 0.36, 1] }}
                  className="inline-block"
                  style={{
                    fontFamily: "var(--font-barlow)",
                    fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    color: letter === " " ? "transparent" : "#1A1A1A",
                    width: letter === " " ? "clamp(0.6rem, 1.5vw, 1rem)" : "auto",
                    lineHeight: 1,
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>

            {/* Separator */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.9, delay: 1.1 }}
              className="w-16 sm:w-20"
              style={{ height: "1.5px", background: "linear-gradient(90deg, transparent, #B21F2D, transparent)" }}
            />

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="text-xs sm:text-sm tracking-[0.35em] uppercase text-center"
              style={{ color: "#AAAAAA", fontFamily: "var(--font-inter)" }}
            >
              Père &amp; Fils — Champagney
            </motion.p>
          </div>

          {/* Progress area — trowel above bar, percentage below bar (no overlap) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2"
            style={{ width: "clamp(240px, 50vw, 420px)" }}
          >
            {/* Trowel + bar */}
            <div className="relative w-full" style={{ paddingTop: 34 }}>
              {/* Trowel icon — suit le pourcentage, positionné au-dessus de la barre */}
              <div
                className="absolute"
                style={{
                  left: `calc(${progress}% - 26px)`,
                  top: 0,
                  transition: "left 0.12s linear",
                }}
              >
                <TrowelIcon />
              </div>

              {/* Track */}
              <div className="w-full" style={{ height: 2, background: "#E0DDD4" }}>
                {/* Fill */}
                <div
                  className="h-full"
                  style={{
                    background: "linear-gradient(90deg, #8B1521, #B21F2D, #D4404E)",
                    width: `${progress}%`,
                    transition: "width 0.12s linear",
                  }}
                />
              </div>
            </div>

            {/* Percentage — sous la barre, à droite */}
            <div className="flex justify-end mt-2">
              <span
                className="text-xs sm:text-sm tabular-nums font-medium"
                style={{ color: "#B21F2D", fontFamily: "var(--font-inter)" }}
              >
                {Math.round(progress)}%
              </span>
            </div>
          </motion.div>

          {/* Sweep line */}
          <motion.div
            className="absolute left-0 right-0 h-[1px] pointer-events-none"
            style={{ background: "linear-gradient(90deg, transparent, rgba(178,31,45,0.4), transparent)", top: "50%" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.2, delay: 0.1, times: [0, 0.3, 0.7, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function TrowelIcon() {
  return (
    <svg width="52" height="26" viewBox="0 0 52 26" fill="none">
      <path d="M50 13 L18 3 L12 13 L18 23 Z" fill="#B21F2D" />
      <path d="M50 13 L18 3 L22 13 Z" fill="rgba(255,255,255,0.18)" />
      <rect x="8" y="10.5" width="6" height="5" rx="1.5" fill="#8B1521" />
      <rect x="0" y="10" width="10" height="6" rx="3" fill="#7A5530" />
      <rect x="1" y="11.5" width="7" height="3" rx="1.5" fill="#8B6342" />
    </svg>
  );
}
