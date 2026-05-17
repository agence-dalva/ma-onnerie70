"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/data";

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-20 md:py-32" style={{ background: "#FAFAF8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div ref={ref} className="flex flex-col md:flex-row md:items-end md:justify-between mb-12 md:mb-16 gap-4 md:gap-6">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="section-label mb-3 md:mb-4"
            >
              — Ce que nous faisons
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="section-title"
              style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)", color: "#1A1A1A" }}
            >
              NOS<br />
              <span className="gold-text">EXPERTISES</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xs text-sm leading-relaxed md:text-right"
            style={{ color: "#777", fontFamily: "var(--font-inter)" }}
          >
            De la fondation à l'aménagement extérieur, nous maîtrisons chaque étape de votre projet.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service, index }: { service: typeof services[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link
        href={`/services/${service.slug}`}
        className="group relative flex flex-col overflow-hidden h-full"
        style={{ background: "#FFFFFF", border: "1px solid #E8E6DF", boxShadow: "0 2px 12px rgba(0,0,0,0.04)", display: "flex" }}
      >
        {/* Image */}
        <div className="relative h-48 sm:h-52 overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            unoptimized
          />
          <div
            className="absolute inset-0"
            style={{ background: "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 60%, transparent 100%)" }}
          />
          <span
            className="absolute top-3 right-3 text-xs font-bold px-2 py-1"
            style={{
              color: "#B21F2D",
              fontFamily: "var(--font-barlow)",
              letterSpacing: "0.1em",
              background: "rgba(250,250,248,0.85)",
            }}
          >
            0{index + 1}
          </span>
        </div>

        {/* Content */}
        <div className="p-5 md:p-6 flex flex-col flex-1">
          <p className="section-label mb-1.5">{service.subtitle}</p>
          <h3
            className="text-xl font-bold uppercase mb-2"
            style={{ fontFamily: "var(--font-barlow)", color: "#1A1A1A", lineHeight: 1.1 }}
          >
            {service.title}
          </h3>
          <p className="text-sm leading-relaxed mb-4" style={{ color: "#777", fontFamily: "var(--font-inter)" }}>
            {service.description}
          </p>

          {/* Features */}
          <ul className="flex flex-col gap-1.5 pt-4 mt-auto" style={{ borderTop: "1px solid #F0EEE7" }}>
            {service.features.map((f) => (
              <li key={f} className="flex items-center gap-2 text-xs" style={{ color: "#999", fontFamily: "var(--font-inter)" }}>
                <span className="w-1 h-1 rounded-full flex-shrink-0" style={{ background: "#B21F2D" }} />
                {f}
              </li>
            ))}
          </ul>

          {/* CTA link */}
          <p
            className="mt-4 text-[10px] tracking-widest uppercase transition-colors duration-300"
            style={{ color: "#CCCCCC", fontFamily: "var(--font-inter)" }}
          >
            En savoir plus →
          </p>
        </div>

        {/* Bottom bordeaux line on hover */}
        <div
          className="absolute bottom-0 left-0 h-[2px] w-0 transition-all duration-500 group-hover:w-full"
          style={{ background: "linear-gradient(90deg, #B21F2D, #D4404E)" }}
        />
      </Link>
    </motion.div>
  );
}
