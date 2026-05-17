"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { siteConfig, navLinks, services } from "@/lib/data";

function ServiceIcon({ id }: { id: string }) {
  const p = { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none" as const, stroke: "#B21F2D", strokeWidth: 1.5, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, className: "flex-shrink-0" };
  switch (id) {
    case "maisons": // Maison
      return <svg {...p}><path d="M3 12l9-9 9 9"/><path d="M5 10v9h5v-5h4v5h5v-9"/></svg>;
    case "renovation": // Marteau
      return <svg {...p}><path d="M4 20l8-8"/><path d="M14 4l6 6-4 4-6-6 4-4z"/><path d="M10 14l2-2"/></svg>;
    case "beton": // Camion toupie
      return <svg {...p}><rect x="2" y="11" width="6" height="7" rx="1"/><path d="M2 14h6"/><circle cx="5" cy="20" r="1.5"/><circle cx="17" cy="20" r="1.5"/><path d="M8 18h7"/><ellipse cx="15" cy="13" rx="5" ry="5"/><path d="M12 10l6 6M15 8v10"/><path d="M20 16l2 3"/></svg>;
    case "enduits": // Taloche
      return <svg {...p}><rect x="3" y="13" width="18" height="6" rx="0.5"/><rect x="8" y="7" width="8" height="6" rx="1"/></svg>;
    case "terrassement": // Pelleteuse
      return <svg {...p}><rect x="2" y="17" width="12" height="4" rx="2"/><rect x="3" y="12" width="8" height="6" rx="1"/><rect x="4" y="9" width="5" height="4" rx="0.5"/><path d="M11 14l4-5"/><path d="M15 9l4 3"/><path d="M19 12l-2 4h-4"/></svg>;
    default:
      return null;
  }
}

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("accueil");
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  const isHomepage = pathname === "/";

  useEffect(() => {
    if (!isHomepage) {
      setScrolled(true);
      return;
    }
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [isHomepage]);

  useEffect(() => {
    if (!isHomepage) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActiveSection(e.target.id);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll("section[id]").forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, [isHomepage]);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    if (isHomepage) {
      const id = href.replace("#", "");
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(`/${href}`);
    }
  };

  /* Style commun pour tous les items de nav desktop — assure l'alignement vertical */
  const navItemStyle = (active: boolean): React.CSSProperties => ({
    color: active ? "#B21F2D" : scrolled ? "#666" : "rgba(250,250,248,0.7)",
    fontFamily: "var(--font-inter)",
    fontSize: "0.75rem",
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    lineHeight: 1,
    display: "inline-flex",
    alignItems: "center",
    gap: "4px",
    position: "relative",
    transition: "color 0.2s ease",
  });

  const hoverOn = (e: React.MouseEvent<HTMLElement>) => {
    (e.currentTarget as HTMLElement).style.color = "#B21F2D";
  };
  const hoverOff = (e: React.MouseEvent<HTMLElement>, active: boolean) => {
    (e.currentTarget as HTMLElement).style.color = active ? "#B21F2D" : scrolled ? "#666" : "rgba(250,250,248,0.7)";
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-[9990] flex items-center justify-between px-4 sm:px-6 md:px-10"
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: isHomepage ? 3.4 : 0.2, ease: [0.22, 1, 0.36, 1] }}
        style={{
          height: scrolled ? 80 : 100,
          background: scrolled ? "rgba(250,250,248,0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(224,221,212,0.8)" : "none",
          transition: "height 0.4s ease, background 0.4s ease",
        }}
      >
        {/* Logo */}
        <button onClick={() => handleNav("#accueil")} className="flex items-center gap-3 flex-shrink-0">
          <div className="relative w-20 h-20 flex-shrink-0">
            <Image src={siteConfig.logo} alt="Logo Maçonnerie 70" fill className="object-contain" unoptimized />
          </div>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-sm font-bold tracking-wider" style={{ fontFamily: "var(--font-barlow)", color: scrolled ? "#1A1A1A" : "#FAFAF8" }}>
              MAÇONNERIE 70
            </span>
            <span className="text-[10px] tracking-widest" style={{ color: scrolled ? "#999" : "rgba(250,250,248,0.6)" }}>
              PÈRE & FILS
            </span>
          </div>
        </button>

        {/* Desktop links — tous avec inline-flex items-center pour un alignement parfait */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = isHomepage && activeSection === link.href.replace("#", "");
            const isServices = link.label === "Services";

            if (link.external) {
              return (
                <li key={link.href} className="flex items-center">
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover-underline"
                    style={{ ...navItemStyle(false), color: "#B21F2D", fontWeight: 600 }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#8B1521"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "#B21F2D"; }}
                  >
                    {link.label}
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ flexShrink: 0 }}>
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                    </svg>
                  </a>
                </li>
              );
            }

            if (isServices) {
              return (
                <li
                  key={link.href}
                  ref={servicesRef}
                  className="relative flex items-center"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className={isActive ? "" : "hover-underline"}
                    style={navItemStyle(isActive)}
                    onMouseEnter={(e) => hoverOn(e)}
                    onMouseLeave={(e) => hoverOff(e, isActive)}
                  >
                    {link.label}
                    <svg
                      width="10" height="10" viewBox="0 0 10 10" fill="none"
                      style={{
                        transition: "transform 0.3s ease",
                        transform: servicesOpen ? "rotate(180deg)" : "rotate(0deg)",
                        stroke: isActive ? "#B21F2D" : scrolled ? "#666" : "rgba(250,250,248,0.7)",
                        flexShrink: 0,
                      }}
                    >
                      <path d="M2 3.5L5 6.5L8 3.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {isActive && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-1 left-0 right-0 h-[1px]"
                        style={{ background: "#B21F2D" }}
                      />
                    )}
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 pt-4"
                        style={{ transform: "translateX(-50%)" }}
                      >
                        <div
                          className="py-2 min-w-[260px]"
                          style={{
                            background: "#FFFFFF",
                            border: "1px solid #E0DDD4",
                            boxShadow: "0 12px 40px rgba(0,0,0,0.1)",
                          }}
                        >
                          {services.map((s) => (
                            <Link
                              key={s.id}
                              href={`/services/${s.slug}`}
                              className="flex items-center gap-4 px-5 py-3 transition-all duration-200"
                              style={{ fontFamily: "var(--font-inter)" }}
                              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = "#F4F3EE"; }}
                              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                            >
                              <ServiceIcon id={s.id} />
                              <div>
                                <p className="text-xs font-medium" style={{ color: "#1A1A1A" }}>{s.title}</p>
                                <p className="text-[10px] tracking-wider uppercase" style={{ color: "#AAAAAA" }}>{s.subtitle}</p>
                              </div>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            }

            return (
              <li key={link.href} className="flex items-center">
                <button
                  onClick={() => handleNav(link.href)}
                  className={isActive ? "" : "hover-underline"}
                  style={navItemStyle(isActive)}
                  onMouseEnter={(e) => hoverOn(e)}
                  onMouseLeave={(e) => hoverOff(e, isActive)}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-1 left-0 right-0 h-[1px]"
                      style={{ background: "#B21F2D" }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${siteConfig.phone.replace(/\s/g, "")}`}
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-xs tracking-widest uppercase font-medium transition-all duration-300"
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

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span className="block h-[1.5px] transition-all duration-300" style={{ width: 24, background: scrolled ? "#1A1A1A" : "#FAFAF8", transform: menuOpen ? "translateY(5px) rotate(45deg)" : "none" }} />
            <span className="block h-[1.5px] transition-all duration-300" style={{ width: 16, background: "#B21F2D", opacity: menuOpen ? 0 : 1 }} />
            <span className="block h-[1.5px] transition-all duration-300" style={{ width: 24, background: scrolled ? "#1A1A1A" : "#FAFAF8", transform: menuOpen ? "translateY(-5px) rotate(-45deg)" : "none" }} />
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[9980] flex flex-col overflow-y-auto"
            style={{ background: "#FAFAF8" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20">
              <ul className="flex flex-col items-center gap-4 mb-10 w-full max-w-xs">
                {navLinks.map((link, i) => {
                  const isServices = link.label === "Services";
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      className="w-full text-center"
                    >
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setMenuOpen(false)}
                          className="inline-flex items-center justify-center gap-2 text-2xl sm:text-3xl font-bold uppercase tracking-tight"
                          style={{ fontFamily: "var(--font-barlow)", color: "#B21F2D" }}
                        >
                          {link.label}
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
                          </svg>
                        </a>
                      ) : isServices ? (
                        <div>
                          <button
                            onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            className="flex items-center justify-center gap-2 w-full text-4xl sm:text-5xl font-bold uppercase tracking-tight"
                            style={{ fontFamily: "var(--font-barlow)", color: "#1A1A1A" }}
                          >
                            {link.label}
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" style={{ transition: "transform 0.3s ease", transform: mobileServicesOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
                              <path d="M6 9L12 15L18 9" stroke="#B21F2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </button>
                          <AnimatePresence>
                            {mobileServicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                className="overflow-hidden mt-3"
                              >
                                <div className="flex flex-col gap-1 py-2 px-4" style={{ border: "1px solid #E0DDD4", background: "#FFFFFF" }}>
                                  {services.map((s) => (
                                    <Link
                                      key={s.id}
                                      href={`/services/${s.slug}`}
                                      onClick={() => setMenuOpen(false)}
                                      className="flex items-center gap-3 py-2.5 px-2 text-left"
                                    >
                                      <ServiceIcon id={s.id} />
                                      <span className="text-sm font-medium" style={{ color: "#1A1A1A", fontFamily: "var(--font-inter)" }}>{s.title}</span>
                                    </Link>
                                  ))}
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      ) : (
                        <button
                          onClick={() => handleNav(link.href)}
                          className="text-4xl sm:text-5xl font-bold uppercase tracking-tight"
                          style={{ fontFamily: "var(--font-barlow)", color: "#1A1A1A" }}
                        >
                          {link.label}
                        </button>
                      )}
                    </motion.li>
                  );
                })}
              </ul>
              <div className="flex flex-col items-center gap-3">
                <div className="w-8 h-[1px]" style={{ background: "#B21F2D" }} />
                <a href={`tel:${siteConfig.phone.replace(/\s/g, "")}`} className="text-2xl font-bold" style={{ color: "#B21F2D", fontFamily: "var(--font-barlow)" }}>
                  {siteConfig.phone}
                </a>
                <a href={`mailto:${siteConfig.email}`} className="text-sm" style={{ color: "#999" }}>
                  {siteConfig.email}
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
