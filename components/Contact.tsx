"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { siteConfig } from "@/lib/data";

type FormState = "idle" | "loading" | "success" | "error";

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [formState, setFormState] = useState<FormState>("idle");
  const [formLoadedAt] = useState(() => Date.now());
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [honeypot, setHoneypot] = useState("");
  const [errors, setErrors] = useState<{ email?: string; message?: string }>({});

  const formatPhone = (value: string) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    return digits.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    const formatted = name === "phone" ? formatPhone(value) : value;
    setFormData({ ...formData, [name]: formatted });

    if (name === "email") {
      setErrors((prev) => ({ ...prev, email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) ? undefined : "Adresse email invalide" }));
    }
    if (name === "message") {
      setErrors((prev) => ({ ...prev, message: value.length >= 50 ? undefined : `${value.length}/50 caractères minimum` }));
    }
  };

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email);
    const messageValid = formData.message.length >= 50;
    setErrors({
      email: emailValid ? undefined : "Adresse email invalide",
      message: messageValid ? undefined : `${formData.message.length}/50 caractères minimum`,
    });
    if (!emailValid || !messageValid) return;
    setFormState("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          _hp: honeypot,
          _t: formLoadedAt,
        }),
      });
      if (res.ok) {
        setFormState("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
    setTimeout(() => setFormState("idle"), 5000);
  };

  const inputBase = {
    background: "#FFFFFF",
    border: "1px solid #E0DDD4",
    color: "#1A1A1A",
    fontFamily: "var(--font-inter)",
    fontSize: 13,
    outline: "none",
    transition: "border-color 0.25s ease",
    width: "100%",
  };

  const labelBase = {
    fontFamily: "var(--font-inter)",
    fontSize: 10,
    letterSpacing: "0.15em",
    textTransform: "uppercase" as const,
    color: "#AAAAAA",
    display: "block",
    marginBottom: 6,
  };

  const contactCards = [
    {
      icon: PhoneIcon,
      label: "Téléphone",
      value: siteConfig.phone,
      href: `tel:${siteConfig.phone.replace(/\s/g, "")}`,
    },
    {
      icon: PinIcon,
      label: "Adresse",
      value: siteConfig.address,
      href: siteConfig.socials.maps,
      sub: `${siteConfig.zip} ${siteConfig.city}`,
      subHref: siteConfig.socials.maps,
    },
  ];

  return (
    <section className="py-20 md:py-32" style={{ background: "#F4F3EE" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        {/* Header */}
        <div ref={ref} className="mb-12 md:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="section-label mb-3 md:mb-4"
          >
            — Parlons de votre projet
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="section-title"
            style={{ fontSize: "clamp(2.2rem, 6vw, 5.5rem)", color: "#1A1A1A" }}
          >
            CONTACTEZ<br />
            <span className="gold-text">NOUS</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-12">
          {/* Info side */}
          <div className="lg:col-span-2 flex flex-col gap-3 md:gap-4">
            {contactCards.map((card, i) => (
              <motion.div
                key={card.label}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                className="flex items-start gap-4 p-4 md:p-5"
                style={{ border: "1px solid #E0DDD4", background: "#FFFFFF" }}
              >
                <div
                  className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                  style={{ background: "#F4F3EE", border: "1px solid #E0DDD4" }}
                >
                  <card.icon color="#B21F2D" size={16} />
                </div>
                <div className="flex flex-col gap-1 min-w-0">
                  <p className="text-xs tracking-widest uppercase" style={{ color: "#AAAAAA", fontFamily: "var(--font-inter)" }}>
                    {card.label}
                  </p>
                  <a
                    href={card.href}
                    target={card.href.startsWith("http") ? "_blank" : undefined}
                    rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-sm font-medium hover-underline truncate"
                    style={{ color: "#1A1A1A", fontFamily: "var(--font-inter)" }}
                  >
                    {card.value}
                  </a>
                  {card.sub && (
                    <a
                      href={card.subHref}
                      target={card.subHref?.startsWith("http") ? "_blank" : undefined}
                      rel={card.subHref?.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-xs hover-underline truncate"
                      style={{ color: "#AAAAAA", fontFamily: "var(--font-inter)" }}
                    >
                      {card.sub}
                    </a>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Horaires */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-start gap-4 p-4 md:p-5"
              style={{ border: "1px solid #E0DDD4", background: "#FFFFFF" }}
            >
              <div
                className="flex-shrink-0 w-10 h-10 flex items-center justify-center"
                style={{ background: "#F4F3EE", border: "1px solid #E0DDD4" }}
              >
                <ClockIcon color="#B21F2D" size={16} />
              </div>
              <div className="flex flex-col gap-1.5">
                <p className="text-xs tracking-widest uppercase" style={{ color: "#AAAAAA", fontFamily: "var(--font-inter)" }}>
                  Horaires d'accueil
                </p>
                {siteConfig.hours.map((h) => (
                  <div key={h.day} className="flex items-center justify-between gap-4">
                    <span className="text-xs" style={{ color: "#888", fontFamily: "var(--font-inter)" }}>{h.day}</span>
                    <span className="text-xs font-medium text-right ml-auto" style={{ color: h.time === "Fermé" ? "#AAAAAA" : "#1A1A1A", fontFamily: "var(--font-inter)" }}>{h.time}</span>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3 flex flex-col gap-4 md:gap-5"
          >
            {/* Row 1 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={labelBase}>Nom & Prénom *</label>
                <input
                  type="text" name="name" value={formData.name} onChange={handleChange} required
                  placeholder="Jean Dupont"
                  className="px-4 py-3"
                  style={inputBase}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#B21F2D")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E0DDD4")}
                />
              </div>
              <div>
                <label style={labelBase}>Email *</label>
                <input
                  type="email" name="email" value={formData.email} onChange={handleChange} required
                  placeholder="jean@example.com"
                  className="px-4 py-3"
                  style={{ ...inputBase, borderColor: errors.email ? "#c0392b" : "#E0DDD4" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = errors.email ? "#c0392b" : "#B21F2D")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = errors.email ? "#c0392b" : "#E0DDD4")}
                />
                {errors.email && <p className="mt-1 text-xs" style={{ color: "#c0392b", fontFamily: "var(--font-inter)" }}>{errors.email}</p>}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label style={labelBase}>Téléphone</label>
                <input
                  type="tel" name="phone" value={formData.phone} onChange={handleChange}
                  placeholder="06 00 00 00 00"
                  className="px-4 py-3"
                  style={inputBase}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#B21F2D")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E0DDD4")}
                />
              </div>
              <div>
                <label style={labelBase}>Service *</label>
                <select
                  name="subject" value={formData.subject} onChange={handleChange} required
                  className="px-4 py-3 pr-10"
                  style={{
                    ...inputBase,
                    cursor: "pointer",
                    appearance: "none",
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath d='M2 4l4 4 4-4' stroke='%23AAAAAA' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round' fill='none'/%3E%3C/svg%3E")`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "calc(100% - 14px) center",
                  }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#B21F2D")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#E0DDD4")}
                >
                  <option value="">Choisir un service...</option>
                  <option value="maisons">Maisons Individuelles</option>
                  <option value="renovation">Rénovation & Extensions</option>
                  <option value="beton">Béton Armé</option>
                  <option value="enduits">Enduits Extérieurs</option>
                  <option value="terrassement">Terrassement & VRD</option>
                  <option value="autre">Autre demande</option>
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label style={labelBase}>Votre message *</label>
              <textarea
                name="message" value={formData.message} onChange={handleChange} required rows={5}
                placeholder="Décrivez votre projet : localisation, type de travaux, superficie..."
                className="px-4 py-3 resize-none"
                style={{ ...inputBase, borderColor: errors.message ? "#c0392b" : "#E0DDD4" }}
                onFocus={(e) => (e.currentTarget.style.borderColor = errors.message ? "#c0392b" : "#B21F2D")}
                onBlur={(e) => (e.currentTarget.style.borderColor = errors.message ? "#c0392b" : "#E0DDD4")}
              />
              {errors.message && <p className="mt-1 text-xs" style={{ color: "#c0392b", fontFamily: "var(--font-inter)" }}>{errors.message}</p>}
            </div>

            {/* Honeypot — caché des humains, visible des bots */}
            <div style={{ position: "absolute", left: "-9999px", top: "-9999px", height: 0, overflow: "hidden" }} aria-hidden="true">
              <label htmlFor="_hp">Ne pas remplir</label>
              <input
                id="_hp"
                type="text"
                name="_hp"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            {/* Submit row */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-1">
              <p className="text-xs" style={{ color: "#BBBBBB", fontFamily: "var(--font-inter)" }}>
                * Champs obligatoires — Réponse sous 24h
              </p>
              <button
                type="submit"
                disabled={formState === "loading" || !!errors.email || !!errors.message || !formData.email || formData.message.length < 50}
                className="flex items-center gap-3 px-7 py-3.5 text-xs tracking-widest uppercase font-medium transition-all duration-300 flex-shrink-0 w-full sm:w-auto justify-center"
                style={{
                  fontFamily: "var(--font-inter)",
                  background: (formState === "loading" || !!errors.email || !!errors.message || !formData.email || formData.message.length < 50) ? "#B21F2D55" : "#B21F2D",
                  color: "#fff",
                  cursor: (formState === "loading" || !!errors.email || !!errors.message || !formData.email || formData.message.length < 50) ? "not-allowed" : "pointer",
                }}
                onMouseEnter={(e) => { if (!(e.currentTarget as HTMLButtonElement).disabled) (e.currentTarget as HTMLElement).style.background = "#8B1521"; }}
                onMouseLeave={(e) => { if (!(e.currentTarget as HTMLButtonElement).disabled) (e.currentTarget as HTMLElement).style.background = "#B21F2D"; }}
              >
                {formState === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
            </div>

            {/* Status */}
            {formState === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 text-sm"
                style={{ background: "rgba(178,31,45,0.06)", border: "1px solid rgba(178,31,45,0.25)", color: "#8B1521", fontFamily: "var(--font-inter)" }}
              >
                ✓ Message envoyé ! Nous vous répondrons dans les 24h.
              </motion.div>
            )}
            {formState === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 text-sm"
                style={{ background: "rgba(220,50,50,0.06)", border: "1px solid rgba(220,50,50,0.25)", color: "#c0392b", fontFamily: "var(--font-inter)" }}
              >
                ✕ Une erreur s'est produite. Appelez-nous : {siteConfig.phone}
              </motion.div>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function PhoneIcon({ color, size }: { color?: string; size?: number }) {
  return (
    <svg width={size || 16} height={size || 16} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="1.5">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
    </svg>
  );
}

function MailIcon({ color, size }: { color?: string; size?: number }) {
  return (
    <svg width={size || 16} height={size || 16} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="1.5">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  );
}

function PinIcon({ color, size }: { color?: string; size?: number }) {
  return (
    <svg width={size || 16} height={size || 16} viewBox="0 0 24 24" fill={color || "currentColor"}>
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

function ClockIcon({ color, size }: { color?: string; size?: number }) {
  return (
    <svg width={size || 16} height={size || 16} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="1.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
