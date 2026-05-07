"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";
import { services, siteConfig } from "@/lib/data";
import { getServiceDetail } from "@/lib/serviceDetails";

type Service = typeof services[0];

export default function ServicePageContent({ service }: { service: Service }) {
  const detail = getServiceDetail(service.slug);
  const heroImage = detail?.heroImage || service.image;

  const otherServices = services.filter((s) => s.id !== service.id).slice(0, 3);

  return (
    <div style={{ background: "#FAFAF8", minHeight: "100vh" }}>
      <CustomCursor />
      <Navigation />

      {/* ─── Hero ─── */}
      <div className="relative h-[65vh] min-h-[480px] overflow-hidden">
        <Image src={heroImage} alt={service.title} fill priority className="object-cover" unoptimized />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to right, rgba(10,10,10,0.92) 35%, rgba(10,10,10,0.45) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(10,10,10,0.75) 0%, transparent 55%)" }} />

        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col justify-end pb-14 md:pb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex items-center gap-2 mb-6"
          >
            <Link href="/" className="text-[10px] tracking-widest uppercase transition-colors duration-200" style={{ color: "#555", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B21F2D")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
            >Accueil</Link>
            <span style={{ color: "#333" }}>/</span>
            <Link href="/#services" className="text-[10px] tracking-widest uppercase transition-colors duration-200" style={{ color: "#555", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B21F2D")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#555")}
            >Nos services</Link>
            <span style={{ color: "#333" }}>/</span>
            <span className="text-[10px] tracking-widest uppercase" style={{ color: "#B21F2D", fontFamily: "var(--font-inter)" }}>
              {service.title}
            </span>
          </motion.div>

          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="section-label mb-3">
            — {service.subtitle}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="section-title"
            style={{ fontSize: "clamp(2.5rem, 7vw, 6.5rem)", color: "#F5F4EF" }}
          >
            {service.title}
          </motion.h1>
        </div>
      </div>

      {/* ─── Intro ─── */}
      <IntroSection service={service} detail={detail} />

      {/* ─── Sections détaillées ─── */}
      {detail?.sections.map((section, i) => (
        <DetailSection key={section.title} section={section} index={i} />
      ))}

      {/* ─── Galerie ─── */}
      {detail && detail.gallery.length > 0 && (
        <GallerySection images={detail.gallery} />
      )}

      {/* ─── Autres services ─── */}
      <OtherServices services={otherServices} />

      {/* ─── CTA Banner ─── */}
      <div className="py-16 md:py-20" style={{ background: "#1A1A1A" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <p className="section-label mb-3">— Devis gratuit</p>
            <h2 className="section-title" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", color: "#F5F4EF" }}>
              PARLONS DE VOTRE <span className="gold-text">PROJET</span>
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 flex-shrink-0">
            <Link
              href="/#contact"
              className="px-7 py-3.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 text-center"
              style={{ background: "#B21F2D", color: "#fff", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#8B1521")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#B21F2D")}
            >
              Nous contacter
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="px-7 py-3.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 text-center"
              style={{ border: "1px solid rgba(178,31,45,0.4)", color: "#B21F2D", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "#B21F2D";
                (e.currentTarget as HTMLElement).style.background = "rgba(178,31,45,0.1)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(178,31,45,0.4)";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }}
            >
              {siteConfig.phone}
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function IntroSection({ service, detail }: { service: typeof services[0]; detail: ReturnType<typeof getServiceDetail> }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const description = detail?.pageDescription || service.description;

  return (
    <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-20 md:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="lg:col-span-3 flex flex-col gap-6"
        >
          <div>
            <p className="section-label mb-4">— Notre expertise</p>
            <p className="text-base leading-loose" style={{ color: "#555", fontFamily: "var(--font-inter)" }}>
              {description}
            </p>
            <p className="text-sm leading-loose mt-4" style={{ color: "#777", fontFamily: "var(--font-inter)" }}>
              Basés à Champagney en Haute-Saône, nous intervenons dans un rayon de 100 kms,
              couvrant les départements 70, 25, 90, 68 et 88. Chaque chantier est réalisé
              avec rigueur, dans le respect des délais et des normes en vigueur.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 text-xs tracking-widest uppercase font-medium transition-all duration-300"
              style={{ background: "#B21F2D", color: "#fff", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#8B1521")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#B21F2D")}
            >
              Demander un devis gratuit
            </Link>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-3 px-7 py-3.5 text-xs tracking-widest uppercase font-medium transition-all duration-300"
              style={{ border: "1px solid #B21F2D", color: "#B21F2D", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.background = "#B21F2D";
                (e.currentTarget as HTMLElement).style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.background = "transparent";
                (e.currentTarget as HTMLElement).style.color = "#B21F2D";
              }}
            >
              {siteConfig.phone}
            </a>
          </div>
        </motion.div>

        {/* Prestations */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="lg:col-span-2"
        >
          <p className="section-label mb-4">— Ce que nous réalisons</p>
          <ul className="flex flex-col gap-3">
            {service.features.map((f, i) => (
              <motion.li
                key={f}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08 }}
                className="flex items-center gap-4 p-4"
                style={{ border: "1px solid #E0DDD4", background: "#FFFFFF" }}
              >
                <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: "#B21F2D" }} />
                <span className="text-sm" style={{ color: "#444", fontFamily: "var(--font-inter)" }}>{f}</span>
              </motion.li>
            ))}
          </ul>
          <div className="grid grid-cols-2 gap-px mt-6" style={{ background: "#E0DDD4" }}>
            {[{ value: "15 ans", label: "d'expérience" }, { value: "100 kms", label: "de rayon" }].map((s) => (
              <div key={s.label} className="flex flex-col items-center justify-center py-6 px-4 text-center" style={{ background: "#FAFAF8" }}>
                <span className="text-2xl font-bold gold-text" style={{ fontFamily: "var(--font-barlow)" }}>{s.value}</span>
                <span className="text-[10px] tracking-widest uppercase mt-1" style={{ color: "#AAA", fontFamily: "var(--font-inter)" }}>{s.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function DetailSection({ section, index }: { section: import("@/lib/serviceDetails").ServiceSection; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const imageOnLeft = index % 2 === 0;
  const bg = index % 2 === 0 ? "#F4F3EE" : "#FAFAF8";

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, x: imageOnLeft ? 30 : -30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col gap-5"
    >
      <div>
        <p className="section-label mb-3">— {String(index + 1).padStart(2, "0")}</p>
        <h2 className="section-title mb-4" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#1A1A1A" }}>
          {section.title}
        </h2>
        <p className="text-sm leading-loose" style={{ color: "#666", fontFamily: "var(--font-inter)" }}>
          {section.text}
        </p>
      </div>
      {section.items && (
        <ul className="flex flex-col gap-2.5">
          {section.items.map((item, j) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, x: 15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.2 + j * 0.07 }}
              className="flex items-start gap-3 text-sm"
              style={{ color: "#555", fontFamily: "var(--font-inter)" }}
            >
              <div className="w-1.5 h-1.5 flex-shrink-0 mt-1.5" style={{ background: "#B21F2D" }} />
              {item}
            </motion.li>
          ))}
        </ul>
      )}
    </motion.div>
  );

  const imageBlock = section.image ? (
    <motion.div
      initial={{ opacity: 0, x: imageOnLeft ? -30 : 30 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden"
      style={{ height: 360, border: "1px solid #E0DDD4" }}
    >
      <Image src={section.image} alt={section.imageAlt || section.title} fill className="object-cover" unoptimized />
    </motion.div>
  ) : null;

  return (
    <div ref={ref} className="py-16 md:py-20" style={{ background: bg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {imageBlock ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {imageOnLeft ? <>{imageBlock}{textBlock}</> : <>{textBlock}{imageBlock}</>}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <p className="section-label mb-3">— {String(index + 1).padStart(2, "0")}</p>
            <h2 className="section-title mb-6" style={{ fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#1A1A1A" }}>
              {section.title}
            </h2>
            <p className="text-sm leading-loose mb-6" style={{ color: "#666", fontFamily: "var(--font-inter)" }}>
              {section.text}
            </p>
            {section.items && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {section.items.map((item, j) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.1 + j * 0.07 }}
                    className="flex items-center gap-3 p-4"
                    style={{ border: "1px solid #E0DDD4", background: "#FFFFFF" }}
                  >
                    <div className="w-1.5 h-1.5 flex-shrink-0" style={{ background: "#B21F2D" }} />
                    <span className="text-sm" style={{ color: "#555", fontFamily: "var(--font-inter)" }}>{item}</span>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </div>
  );
}

function GallerySection({ images }: { images: Array<{ src: string; alt: string }> }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="py-16 md:py-20" style={{ background: "#1A1A1A" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-label mb-3">
          — Nos réalisations
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title mb-10"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", color: "#F5F4EF" }}
        >
          PHOTOS DE <span className="gold-text">CHANTIER</span>
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3">
          {images.map((img, i) => (
            <motion.div
              key={img.src}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="relative overflow-hidden group"
              style={{ height: i % 5 === 0 ? 280 : 200, border: "1px solid #2A2A2A" }}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                unoptimized
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "rgba(178,31,45,0.15)" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

function OtherServices({ services: otherServices }: { services: typeof services }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="py-16 md:py-20" style={{ background: "#FAFAF8" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <motion.p initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="section-label mb-3">
          — Découvrez aussi
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.1 }}
          className="section-title mb-10"
          style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)", color: "#1A1A1A" }}
        >
          NOS AUTRES <span className="gold-text">SERVICES</span>
        </motion.h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {otherServices.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={`/services/${s.slug}`}
                className="group flex flex-col overflow-hidden transition-all duration-300"
                style={{ border: "1px solid #E0DDD4", background: "#FFFFFF" }}
              >
                <div className="relative h-44 overflow-hidden">
                  <Image
                    src={s.image}
                    alt={s.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 60%)" }} />
                </div>
                <div className="p-5">
                  <p className="section-label mb-1">{s.subtitle}</p>
                  <h3 className="text-lg font-bold uppercase" style={{ fontFamily: "var(--font-barlow)", color: "#1A1A1A", lineHeight: 1.1 }}>
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs tracking-widest uppercase" style={{ color: "#AAAAAA", fontFamily: "var(--font-inter)" }}>
                    En savoir plus →
                  </p>
                </div>
                <div className="h-[2px] w-0 transition-all duration-500 group-hover:w-full" style={{ background: "linear-gradient(90deg, #B21F2D, #D4404E)" }} />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
