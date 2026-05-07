"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { siteConfig, navLinks } from "@/lib/data";

export default function Footer() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const handleNav = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socials = [
    { href: siteConfig.socials.facebook, label: "Facebook", icon: <FacebookIcon /> },
    { href: siteConfig.socials.instagram, label: "Instagram", icon: <InstagramIcon /> },
    { href: siteConfig.socials.youtube, label: "YouTube", icon: <YoutubeIcon /> },
    { href: siteConfig.socials.tiktok, label: "TikTok", icon: <TikTokIcon /> },
  ];

  return (
    <footer style={{ background: "#1A1A1A" }}>
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-14 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2 flex flex-col gap-5 md:gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              className="flex items-center gap-3"
            >
              <div className="relative w-24 h-24 flex-shrink-0">
                <Image src={siteConfig.logo} alt="Maçonnerie 70" fill className="object-contain" unoptimized />
              </div>
              <div>
                <p className="text-base font-bold" style={{ fontFamily: "var(--font-barlow)", color: "#F5F4EF" }}>
                  MAÇONNERIE 70
                </p>
                <p className="text-[10px] tracking-widest" style={{ color: "#777", fontFamily: "var(--font-inter)" }}>
                  PÈRE & FILS — S.A.S — CHAMPAGNEY
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="text-sm leading-relaxed max-w-xs"
              style={{ color: "#999", fontFamily: "var(--font-inter)" }}
            >
              Entreprise familiale de maçonnerie et terrassement depuis 2010.
              Basée à Champagney, nous intervenons sur 5 départements dans un rayon de 100 kms.
            </motion.p>

            {/* Social icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center gap-2 px-3 py-2 text-[10px] tracking-wider uppercase transition-all duration-300"
                  style={{ border: "1px solid #333", color: "#888", fontFamily: "var(--font-inter)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#B21F2D";
                    (e.currentTarget as HTMLElement).style.color = "#B21F2D";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.borderColor = "#333";
                    (e.currentTarget as HTMLElement).style.color = "#888";
                  }}
                >
                  {s.icon}
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-3"
          >
            <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "#B21F2D", fontFamily: "var(--font-inter)" }}>
              Navigation
            </p>
            {navLinks.map((link) =>
              link.external ? (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-left text-sm transition-colors duration-300 flex items-center gap-1"
                  style={{ color: "#B21F2D", fontFamily: "var(--font-inter)", fontWeight: 600 }}
                >
                  {link.label}
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                  </svg>
                </a>
              ) : (
                <button
                  key={link.href}
                  onClick={() => handleNav(link.href)}
                  className="text-left text-sm transition-colors duration-300"
                  style={{ color: "#888", fontFamily: "var(--font-inter)" }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B21F2D")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888")}
                >
                  {link.label}
                </button>
              )
            )}
          </motion.div>

          {/* Contact + Horaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="flex flex-col gap-3"
          >
            <p className="text-[10px] tracking-widest uppercase mb-1" style={{ color: "#B21F2D", fontFamily: "var(--font-inter)" }}>
              Contact
            </p>
            <a
              href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
              className="text-sm transition-colors duration-300"
              style={{ color: "#888", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B21F2D")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888")}
            >
              {siteConfig.phone}
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm transition-colors duration-300 break-all"
              style={{ color: "#888", fontFamily: "var(--font-inter)" }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#B21F2D")}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#888")}
            >
              {siteConfig.email}
            </a>
            <p className="text-sm" style={{ color: "#666", fontFamily: "var(--font-inter)" }}>
              {siteConfig.address}<br />
              {siteConfig.zip} {siteConfig.city}
            </p>

            {/* Horaires */}
            <div className="mt-2 pt-3" style={{ borderTop: "1px solid #2A2A2A" }}>
              <p className="text-[10px] tracking-widest uppercase mb-2" style={{ color: "#B21F2D", fontFamily: "var(--font-inter)" }}>
                Horaires
              </p>
              {siteConfig.hours.map((h) => (
                <div key={h.day} className="flex justify-between gap-4 mb-1">
                  <span className="text-xs" style={{ color: "#666", fontFamily: "var(--font-inter)" }}>{h.day}</span>
                  <span className="text-xs" style={{ color: h.time === "Fermé" ? "#555" : "#888", fontFamily: "var(--font-inter)" }}>{h.time}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-between gap-3 mt-14 pt-7"
          style={{ borderTop: "1px solid #2A2A2A" }}
        >
          <p className="text-xs text-center sm:text-left" style={{ color: "#666", fontFamily: "var(--font-inter)" }}>
            © {new Date().getFullYear()} Maçonnerie 70 Père & Fils — Tous droits réservés
          </p>
          <p className="text-xs" style={{ color: "#555", fontFamily: "var(--font-inter)" }}>
            Champagney (70290) — SIRET : 832 225 007 00026
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

function FacebookIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YoutubeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}

function TikTokIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.76a4.85 4.85 0 01-1.01-.07z" />
    </svg>
  );
}
