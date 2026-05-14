"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";

const MapZone = dynamic(() => import("./MapZone"), { ssr: false });

export default function ZoneIntervention() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-32 overflow-hidden" style={{ background: "#F4F3EE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* Text side */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="section-label mb-3 md:mb-4"
            >
              — Là où nous intervenons
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="section-title mb-5 md:mb-6"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", color: "#1A1A1A" }}
            >
              ZONE<br />
              <span className="gold-text">D'INTERVENTION</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-sm leading-relaxed mb-8 md:mb-10"
              style={{ color: "#666", fontFamily: "var(--font-inter)" }}
            >
              Basés à Champagney (70290), nous intervenons dans un rayon de{" "}
              <span style={{ color: "#B21F2D", fontWeight: 600 }}>100 kilomètres</span> sur
              5 départements : Haute-Saône, Doubs, Territoire de Belfort, Haut-Rhin et Vosges.
            </motion.p>

            {/* Radius visual */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-5 md:gap-6 p-5 md:p-6"
              style={{ border: "1px solid #E0DDD4", background: "#FFFFFF" }}
            >
              <div className="relative flex-shrink-0 w-14 h-14">
                {[1, 2, 3].map((n) => (
                  <div
                    key={n}
                    className="absolute rounded-full"
                    style={{
                      width: n * 18,
                      height: n * 18,
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      border: `1px solid rgba(178,31,45,${0.5 / n})`,
                    }}
                  />
                ))}
                <div
                  className="absolute top-1/2 left-1/2 w-7 h-7 rounded-full flex items-center justify-center"
                  style={{ transform: "translate(-50%, -50%)", background: "#B21F2D" }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </div>
              </div>
              <div>
                <p className="font-bold text-base md:text-lg" style={{ fontFamily: "var(--font-barlow)", color: "#1A1A1A" }}>
                  Rayon de 100 kms
                </p>
                <p className="text-xs mt-1" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                  Depuis Champagney — 5 départements couverts
                </p>
              </div>
            </motion.div>
          </div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden"
            style={{ height: 460, border: "1px solid #E0DDD4" }}
          >
            <MapZone />
            {/* Légende */}
            <div
              className="absolute bottom-4 left-4 z-[999] flex items-center gap-2 px-3 py-2"
              style={{ background: "rgba(20,20,20,0.88)", border: "1px solid rgba(255,255,255,0.1)", fontFamily: "var(--font-inter)" }}
            >
              <div style={{ width: 12, height: 12, borderRadius: "2px", background: "#B21F2D", opacity: 0.85 }} />
              <span className="text-xs" style={{ color: "rgba(255,255,255,0.75)" }}>Départements couverts</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
