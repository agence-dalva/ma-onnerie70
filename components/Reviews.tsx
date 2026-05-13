"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const GOOGLE_URL = "https://www.google.com/maps/place/Ma%C3%A7onnerie+70+p%C3%A8re+%26+fils/@47.7047044,6.708706,1033m/data=!3m1!1e3!4m8!3m7!1s0x647b451d6bbbd5b9:0x7d79f7299d130917!8m2!3d47.7047008!4d6.7112809!9m1!1b1!16s%2Fg%2F11lp8ptx4j";

const RATING = 4.6;
const TOTAL = 11;

const reviews = [
  {
    name: "Boris S.",
    date: "Avis Google",
    rating: 5,
    text: "Entreprise familiale très sérieuse et à l'écoute de notre projet, la construction de notre extension a été réalisée avec du personnel très compétent et professionnel. Les modifications en cours de construction ont pu être réalisées sans retarder le projet global. Un accompagnement tout au long de notre projet nous a permis d'être rassuré sur les directions à prendre. Je recommande fortement cette entreprise.",
  },
  {
    name: "Noël M.",
    date: "Avis Google",
    rating: 5,
    text: "Maçonnerie 70 est une entreprise familiale qui a réalisé un travail de qualité avec compétences et en utilisant des matériaux adaptés. Les maçons ont fourni un travail remarquable toujours avec le sourire et courtoisie. Le patron est toujours à l'écoute et n'hésite pas à venir sur le chantier. Je recommande cette entreprise car ils font du travail dans les règles de l'art.",
  },
  {
    name: "Jean-François B.",
    date: "Avis Google",
    rating: 5,
    text: "Très satisfait du travail exécuté, à l'écoute du travail demandé et de bons conseils. Entreprise familiale très sympathique que nous conseillons. Merci pour le bon travail exécuté.",
  },
  {
    name: "Justine M.",
    date: "Avis Google",
    rating: 5,
    text: "Entreprise fiable et professionnelle, les demandes sont effectuées dans les temps avec une qualité de travail remarquable. Je recommande vraiment pour tous vos projets.",
  },
];

function Stars({ count, size = 16 }: { count: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24">
          <path
            d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
            fill={i < count ? "#F5A623" : "rgba(255,255,255,0.15)"}
          />
        </svg>
      ))}
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
  );
}

export default function Reviews() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-20 md:py-28 overflow-hidden" style={{ background: "#1A1A1A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">

        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 gap-6">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="flex items-center gap-2 mb-3"
            >
              <GoogleIcon />
              <p className="section-label" style={{ color: "#B21F2D" }}>— Avis Google</p>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="section-title"
              style={{ fontSize: "clamp(2rem, 5vw, 4.5rem)", color: "#F5F4EF" }}
            >
              CE QUE DISENT<br />
              <span className="gold-text">NOS CLIENTS</span>
            </motion.h2>
          </div>

          {/* Score global */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-5 px-6 py-5 flex-shrink-0"
            style={{ border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.04)" }}
          >
            <div className="text-center">
              <p className="font-bold leading-none mb-1" style={{ fontSize: "3.5rem", fontFamily: "var(--font-barlow)", color: "#F5F4EF" }}>
                {RATING.toFixed(1)}
              </p>
              <Stars count={5} size={18} />
              <p className="text-xs mt-2" style={{ color: "#666", fontFamily: "var(--font-inter)" }}>
                {TOTAL} avis
              </p>
            </div>
            <div style={{ width: 1, height: 60, background: "rgba(255,255,255,0.08)" }} />
            <a
              href={GOOGLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col gap-1.5 transition-opacity duration-200 hover:opacity-70"
            >
              <GoogleIcon />
              <p className="text-xs tracking-widest uppercase" style={{ color: "#888", fontFamily: "var(--font-inter)" }}>
                Google Maps
              </p>
            </a>
          </motion.div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 mb-10">
          {reviews.map((review, i) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col gap-4 p-5"
              style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.03)" }}
            >
              {/* Header avis */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="w-9 h-9 flex items-center justify-center text-sm font-bold flex-shrink-0"
                    style={{
                      background: `hsl(${(i * 73 + 20) % 360},40%,45%)`,
                      color: "#fff",
                      fontFamily: "var(--font-barlow)",
                    }}
                  >
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-xs font-medium" style={{ color: "#F5F4EF", fontFamily: "var(--font-inter)" }}>
                      {review.name}
                    </p>
                    <p className="text-[10px]" style={{ color: "#555", fontFamily: "var(--font-inter)" }}>
                      {review.date}
                    </p>
                  </div>
                </div>
                <GoogleIcon />
              </div>

              <Stars count={review.rating} size={13} />

              <p className="text-xs leading-relaxed flex-1" style={{ color: "#888", fontFamily: "var(--font-inter)" }}>
                "{review.text}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="flex justify-center"
        >
          <a
            href={GOOGLE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 text-xs tracking-widest uppercase font-medium transition-all duration-300"
            style={{ border: "1px solid rgba(255,255,255,0.15)", color: "#F5F4EF", fontFamily: "var(--font-inter)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#B21F2D";
              (e.currentTarget as HTMLElement).style.color = "#B21F2D";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.15)";
              (e.currentTarget as HTMLElement).style.color = "#F5F4EF";
            }}
          >
            <GoogleIcon />
            Voir tous les avis Google
          </a>
        </motion.div>

      </div>
    </section>
  );
}
