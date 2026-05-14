"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type Item = { num: string; title: string; desc: string; Icon: React.FC };

function FamilyIcon() {
  return (
    <svg width="68" height="68" viewBox="0 0 42 42" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="21" cy="11" r="5" />
      <path d="M10 36c0-6.1 4.9-11 11-11s11 4.9 11 11" />
      <circle cx="8" cy="17" r="3.5" />
      <path d="M2 33c0-4 2.8-7.5 6-8.5" />
      <circle cx="34" cy="17" r="3.5" />
      <path d="M40 33c0-4-2.8-7.5-6-8.5" />
    </svg>
  );
}

function MedalIcon() {
  return (
    <svg width="68" height="68" viewBox="0 0 42 42" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="21" cy="27" r="10" />
      <path d="M21 22l1.8 3.6 4 .6-2.9 2.8.7 4-3.6-1.9-3.6 1.9.7-4-2.9-2.8 4-.6z" />
      <path d="M15 6h12l-3 10H18z" />
    </svg>
  );
}

function HandshakeIcon() {
  return (
    <svg width="68" height="68" viewBox="0 0 42 42" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 14l8 8 5-2 6 6 5-1 5 5 7-7" />
      <path d="M3 14l6-6 7 5h4l5-5 6 6" />
      <path d="M17 20l5 5" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg width="68" height="68" viewBox="0 0 42 42" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="5" width="24" height="32" rx="2" />
      <path d="M15 13h12" />
      <path d="M15 19h12" />
      <path d="M15 25h7" />
      <path d="M27 29l4-4-4-4" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="68" height="68" viewBox="0 0 42 42" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="21" cy="21" r="16" />
      <circle cx="21" cy="21" r="9" />
      <circle cx="21" cy="21" r="2.5" fill="currentColor" stroke="none" />
      <path d="M21 5v4M21 33v4M5 21h4M33 21h4" />
    </svg>
  );
}

const items: Item[] = [
  {
    num: "01",
    title: "Entreprise familiale",
    desc: "Une équipe soudée, transmettant sa passion du métier de génération en génération.",
    Icon: FamilyIcon,
  },
  {
    num: "02",
    title: "Rapport qualité / prix",
    desc: "Des prestations haut de gamme à des tarifs justes, transparents et sans mauvaise surprise.",
    Icon: MedalIcon,
  },
  {
    num: "03",
    title: "Accompagnement A à Z",
    desc: "Nous vous guidons à chaque étape, de la conception jusqu'à la livraison du chantier.",
    Icon: HandshakeIcon,
  },
  {
    num: "04",
    title: "Devis gratuit et sur-mesure",
    desc: "Une étude personnalisée et gratuite pour chaque projet, sans engagement.",
    Icon: QuoteIcon,
  },
  {
    num: "05",
    title: "Résultat adapté à vos besoins",
    desc: "Chaque réalisation est unique, pensée et exécutée selon vos exigences.",
    Icon: TargetIcon,
  },
];

export default function Commitments() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ background: "#1A1A1A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <div ref={ref} className="text-center mb-14 md:mb-18">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="section-label mb-3 md:mb-4"
            style={{ color: "#B21F2D" }}
          >
            — Pourquoi nous choisir
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="section-title"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)", color: "#FFFFFF" }}
          >
            NOS <span className="gold-text">ENGAGEMENTS</span>
          </motion.h2>
        </div>

        {/* Grid */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-px"
          style={{ background: "#2E2B28" }}
        >
          {items.map((item, i) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={item.num}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col items-center text-center px-6 py-10 md:py-12 group"
                style={{ background: "#1A1A1A" }}
              >
                <div
                  className="mb-7 transition-transform duration-500 group-hover:scale-110"
                  style={{ color: "#B21F2D" }}
                >
                  <Icon />
                </div>
                <div
                  className="w-8 mb-5"
                  style={{ height: "1px", background: "linear-gradient(90deg, transparent, #B21F2D, transparent)" }}
                />
                <h2
                  className="text-sm font-bold uppercase mb-3 leading-snug"
                  style={{ fontFamily: "var(--font-barlow)", color: "#FFFFFF", letterSpacing: "0.08em" }}
                >
                  {item.title}
                </h2>
                <p className="text-xs leading-relaxed" style={{ color: "#777", fontFamily: "var(--font-inter)" }}>
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
