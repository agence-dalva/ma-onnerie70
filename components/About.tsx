"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { stats } from "@/lib/data";

const S3 = "https://local-fr-public.s3.eu-west-3.amazonaws.com/prod/webtool/userfiles/32223";

function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = 16;
    const increment = value / (2000 / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [inView, value]);

  return <span>{count.toLocaleString("fr-FR")}{suffix}</span>;
}

export default function About() {
  const ref = useRef(null);
  const statsRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const statsInView = useInView(statsRef, { once: true, margin: "-60px" });

  const commitments = [
    "Qualité et respect des délais",
    "Conformité aux normes de sécurité",
    "Matériaux durables et adaptés",
    "Devis gratuit et personnalisé",
    "Recyclage des déchets de chantier",
    "Accompagnement de A à Z",
  ];

  return (
    <section className="py-20 md:py-32 overflow-hidden" style={{ background: "#F4F3EE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Stats row */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-px mb-20 md:mb-28"
          style={{ background: "#E0DDD4" }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={statsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col items-center justify-center py-8 md:py-10 px-4 md:px-6 text-center"
              style={{ background: "#F4F3EE" }}
            >
              <div
                className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 gold-text"
                style={{ fontFamily: "var(--font-barlow)" }}
              >
                <Counter value={stat.value} suffix={stat.suffix} inView={statsInView} />
              </div>
              <p className="text-[10px] sm:text-xs tracking-widest uppercase" style={{ color: "#AAAAAA", fontFamily: "var(--font-inter)" }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Main content */}
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Images */}
          <div className="relative hidden sm:block h-[420px] md:h-[520px]">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-0"
            >
              <Image
                src="/photos/entreprise-familiale.JPG"
                alt="Entreprise familiale Maçonnerie 70"
                fill
                className="object-cover"
              />
            </motion.div>
            {/* Badge fondation */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute bottom-10 left-4 z-10 p-4 md:p-5"
              style={{ background: "#B21F2D" }}
            >
              <p className="text-xl font-bold leading-none" style={{ fontFamily: "var(--font-barlow)", color: "#fff" }}>
                Depuis 2010
              </p>
            </motion.div>
          </div>

          {/* Text */}
          <div className="flex flex-col gap-7 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <p className="section-label mb-3 md:mb-4">— Notre histoire</p>
              <h2
                className="section-title mb-5 md:mb-6"
                style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", color: "#1A1A1A" }}
              >
                UNE ENTREPRISE<br />
                <span className="gold-text">FAMILIALE</span>
              </h2>
              <p className="text-sm leading-loose" style={{ color: "#666", fontFamily: "var(--font-inter)" }}>
                Maçonnerie 70 Père & Fils est une S.A.S fondée en 2010 à Champagney en Haute-Saône.
                Entreprise familiale construite sur la passion du métier, nous intervenons dans les
                départements 70, 25, 68 et 88, dans un rayon de 100 kms autour de notre siège.
              </p>
              <p className="text-sm leading-loose mt-4" style={{ color: "#666", fontFamily: "var(--font-inter)" }}>
                Avec 7 artisans répartis en 2 équipes, notre entrepôt de 5 000 m² et un parc
                matériel moderne, nous disposons de tous les moyens pour mener à bien vos projets.
              </p>
            </motion.div>

            {/* Commitments */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-xs uppercase tracking-widest mb-3 md:mb-4" style={{ color: "#B21F2D", fontFamily: "var(--font-inter)" }}>
                Nos engagements
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 md:gap-3">
                {commitments.map((c, i) => (
                  <motion.li
                    key={c}
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 + i * 0.06 }}
                    className="flex items-center gap-3 text-sm"
                    style={{ color: "#666", fontFamily: "var(--font-inter)" }}
                  >
                    <div className="w-1.5 h-1.5 flex-shrink-0 rounded-sm" style={{ background: "#B21F2D" }} />
                    {c}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
}
