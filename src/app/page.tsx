"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion, useScroll, useTransform, AnimatePresence,
} from "framer-motion";
import { Variants } from "framer-motion";
import { ArrowUpRight, Menu, X, Plus, CheckCircle2 } from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   CONSTANTS & VARIANTS
═══════════════════════════════════════════════════════════ */
const GRAD = "linear-gradient(90deg,#63B7C9,#4BC5C7,#4DC2B1,#5CC697,#76C47C,#A4BE4B,#CCB10A,#E9A400)";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] } },
};
const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

/* ═══════════════════════════════════════════════════════════
   SHARED ATOMS
═══════════════════════════════════════════════════════════ */
const SpectrumBar = () => (
  <div className="h-[3px] w-full fixed top-0 left-0 right-0 z-[600]" style={{ background: GRAD }} />
);

const TrigartyLogo = () => (
  <div className="flex items-center gap-3 select-none">
    <svg className="w-[20px] h-[20px] shrink-0" viewBox="0 0 100 100" fill="none">
      <path d="M50 15L18 80H36L50 48L64 80H82L50 15Z" fill="url(#tl-g)" />
      <defs>
        <linearGradient id="tl-g" x1="18" y1="15" x2="82" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#63B7C9" />
          <stop offset="50%"  stopColor="#4DC2B1" />
          <stop offset="100%" stopColor="#E9A400" />
        </linearGradient>
      </defs>
    </svg>
    <div className="font-sans font-light tracking-[0.25em] text-[14px] uppercase flex items-center">
      <span className="text-trigarty-cyan">T</span>
      <span className="text-trigarty-aqua">R</span>
      <span className="text-trigarty-mint">I</span>
      <span className="text-trigarty-soft">G</span>
      <span className="text-trigarty-fresh font-medium">Λ</span>
      <span className="text-trigarty-olive">R</span>
      <span className="text-trigarty-mustard">T</span>
      <span className="text-trigarty-golden">Y</span>
    </div>
  </div>
);

const WaIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const Eyebrow = ({ children, light = false }: { children: React.ReactNode; light?: boolean }) => (
  <div className={`font-mono text-[10px] uppercase tracking-[0.22em] flex items-center gap-2.5 mb-5
                   ${light ? "text-white/30" : "text-muted"}`}>
    <span className="w-5 h-px" style={{ background: GRAD }} />
    {children}
  </div>
);

/* ═══════════════════════════════════════════════════════════
   NAVBAR
═══════════════════════════════════════════════════════════ */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const links = [
    { href: "#what",       label: "What We Do" },
    { href: "#how",        label: "How We Work" },
    { href: "#embeds",     label: "Portfolio" },
    { href: "#principles", label: "Principles" },
    { href: "#join",       label: "Join Team" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-[3px] left-0 right-0 z-[500] flex h-[60px] items-center
                    justify-between px-6 md:px-12 transition-all duration-300
                    ${scrolled ? "bg-background/95 backdrop-blur-xl border-b border-border" : "border-b border-transparent"}`}
      >
        <a href="#" className="hover:opacity-80 transition-opacity"><TrigartyLogo /></a>

        <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href}
              className="relative text-[12px] text-muted-foreground hover:text-foreground
                         transition-colors tracking-[0.02em] pb-[2px] group">
              {l.label}
              <span className="absolute bottom-0 left-0 right-0 h-px bg-trigarty-mint
                               scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2.5">
          <a href="https://wa.me/919133665157" target="_blank" rel="noreferrer"
            className="hidden md:flex items-center gap-1.5 text-[11px] text-muted border border-input/70
                       px-3 py-1.5 hover:border-[#25D366] hover:text-[#25D366] transition-colors">
            <WaIcon size={11} /> WhatsApp
          </a>
          <a href="#cta"
            className="hidden md:flex text-[11px] font-semibold text-background bg-foreground
                       px-4 py-1.5 tracking-[0.04em] hover:opacity-80 transition-opacity">
            Work with us
          </a>
          <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(true)}>
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.36, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[700] bg-foreground flex flex-col px-8 py-12"
          >
            <button className="absolute top-5 right-6 text-background/60 hover:text-background"
              onClick={() => setMobileOpen(false)}>
              <X className="h-6 w-6" />
            </button>
            <nav className="flex flex-col gap-7 mt-10">
              {links.map((l, i) => (
                <motion.a key={l.href} href={l.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="font-serif text-3xl text-background hover:text-trigarty-cyan transition-colors">
                  {l.label}
                </motion.a>
              ))}
            </nav>
            <div className="mt-auto flex flex-col gap-2">
              <a href="mailto:contact.trigarty@gmail.com" className="font-mono text-[11px] tracking-[0.1em] text-background/40">
                contact.trigarty@gmail.com
              </a>
              <a href="tel:+919133665157" className="font-mono text-[11px] tracking-[0.1em] text-background/40">
                +91 91336 65157
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

/* ═══════════════════════════════════════════════════════════
   HERO
═══════════════════════════════════════════════════════════ */
const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const pY      = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.65], [1, 0]);

  return (
    <section id="hero" ref={ref}
      className="relative min-h-screen flex items-center px-6 md:px-12 border-b border-border overflow-hidden">

      {/* Noise texture */}
      <div className="pointer-events-none absolute inset-0 z-0 opacity-[0.022]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

      {/* Giant watermark word */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end pr-4 md:pr-8 overflow-hidden z-0">
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          className="font-serif font-normal leading-none tracking-[-0.06em] select-none
                     text-[18vw] md:text-[16vw] lg:text-[14vw]"
          style={{
            background: "linear-gradient(135deg, rgba(75,197,199,0.07) 0%, rgba(233,164,0,0.04) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          operate.
        </motion.div>
      </div>

      {/* Ambient orbs */}
      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <motion.div
          animate={{ scale: [1, 1.18, 1], x: [0, 24, 0], y: [0, -16, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full opacity-[0.05] bg-trigarty-cyan blur-[130px]"
        />
        <motion.div
          animate={{ scale: [1, 1.15, 1], x: [0, -16, 0], y: [0, 24, 0] }}
          transition={{ duration: 24, repeat: Infinity, ease: "easeInOut", delay: 4 }}
          className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-[0.06] bg-trigarty-golden blur-[110px]"
        />
      </div>

      <motion.div style={{ y: pY, opacity: fadeOut }}
        className="container-max w-full flex flex-col pt-24 pb-16 relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-0 items-center min-h-[70vh]">

          {/* Left */}
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}
              className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted flex items-center gap-3 mb-8">
              <motion.span
                animate={{ opacity: [1, 0.15, 1] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="w-[6px] h-[6px] rounded-full bg-trigarty-mint shrink-0" />
              Venture Studio · Execution-Led
            </motion.div>

            <motion.h1 variants={stagger} initial="hidden" animate="visible"
              className="font-serif font-normal leading-[0.93] tracking-[-0.035em]
                         text-[clamp(3rem,8vw,6rem)] text-foreground">
              {["Operations", "built to"].map((line, i) => (
                <span key={i} className="block pb-[0.08em]">
                  <motion.span
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 } },
                    }}
                    className="block">{line}
                  </motion.span>
                </span>
              ))}
              <span className="block pb-[0.15em]">
                <motion.em
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.2 } },
                  }}
                  className="block italic text-primary">compound.
                </motion.em>
              </span>
            </motion.h1>


          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="lg:pl-12 lg:border-l border-border flex flex-col justify-center gap-6">

            <p className="text-[15px] text-muted leading-[1.85] font-light">
              Most companies don't fail from a lack of ideas. They fail because execution breaks
              as complexity grows. We go inside early-stage companies and fix that — taking direct
              operational ownership until the business runs at the speed it's capable of.
            </p>

            <div className="flex flex-col gap-2.5">
              <motion.a href="mailto:contact.trigarty@gmail.com"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-between bg-foreground text-background
                           font-sans text-[13px] font-semibold px-5 py-3.5 tracking-[0.02em]
                           hover:opacity-80 transition-opacity">
                Start a conversation <ArrowUpRight className="h-4 w-4" />
              </motion.a>
              <motion.a href="https://wa.me/919133665157" target="_blank" rel="noreferrer"
                whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 bg-[#25D366] text-white
                           font-sans text-[13px] font-semibold px-5 py-3.5 tracking-[0.02em]
                           hover:opacity-90 transition-opacity">
                <WaIcon size={14} /> Chat on WhatsApp
              </motion.a>
              <a href="#what"
                className="inline-flex items-center gap-1.5 text-[13px] text-muted
                           hover:text-foreground transition-colors py-1 group">
                See how we work{" "}
                <span className="text-primary group-hover:translate-x-1 transition-transform inline-block">→</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-5 pt-1 border-t border-border">
              <a href="mailto:contact.trigarty@gmail.com"
                className="font-mono text-[10px] tracking-[0.08em] text-muted/50 hover:text-foreground transition-colors">
                contact.trigarty@gmail.com
              </a>
              <a href="tel:+919133665157"
                className="font-mono text-[10px] tracking-[0.08em] text-muted/50 hover:text-foreground transition-colors">
                +91 91336 65157
              </a>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <motion.div
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-10 origin-top"
          style={{ background: GRAD }} />
        <span className="font-mono text-[9px] tracking-[0.14em] uppercase text-muted">Scroll</span>
      </motion.div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════
   TICKER
═══════════════════════════════════════════════════════════ */
const TickerSection = () => {
  const items = [
    { text: "Embedded Execution",       color: "text-trigarty-cyan" },
    { text: "Operational Ownership",    color: "text-trigarty-aqua" },
    { text: "Systems-Driven Scaling",   color: "text-trigarty-mint" },
    { text: "Founder Partnership",      color: "text-trigarty-soft" },
    { text: "Investor Readiness",       color: "text-trigarty-fresh" },
    { text: "Product Clarity",          color: "text-trigarty-olive" },
    { text: "Growth Execution",         color: "text-trigarty-mustard" },
    { text: "Hiring Systems",           color: "text-trigarty-golden" },
    { text: "Execution Velocity",       color: "text-trigarty-mint" },
    { text: "Brand Architecture",       color: "text-trigarty-cyan" },
  ];
  return (
    <div className="py-[13px] bg-foreground overflow-hidden group relative border-b border-white/5">
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right,#0F0F0E,transparent)" }} />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left,#0F0F0E,transparent)" }} />
      <div className="flex gap-14 w-max animate-[scroll_35s_linear_infinite] group-hover:[animation-play-state:paused]">
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i}
            className={`font-mono text-[10px] uppercase tracking-[0.18em] whitespace-nowrap
                        flex items-center gap-2.5 ${item.color}`}>
            <span className="w-[4px] h-[4px] rounded-full bg-current opacity-40 shrink-0" />
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════════════════════════
   SVC CARD — hover-stateful service card
═══════════════════════════════════════════════════════════ */
const SvcCard = ({
  card,
  i,
}: {
  card: { num: string; title: string; desc: string; color: string };
  i: number;
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.55, delay: i * 0.08 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`p-8 relative cursor-default border-b border-border
        ${ i % 3 !== 2 ? "lg:border-r" : "" }
        ${ i >= 3     ? "lg:border-b-0" : "" }`}
      style={{
        backgroundColor: hovered ? "#ffffff" : "var(--background)",
        transition: "background-color 0.25s ease",
      }}
    >
      {/* Left vertical accent — Framer Motion owns scaleY */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        style={{
          position: "absolute", top: 0, left: 0, bottom: 0, width: 2,
          background: GRAD, transformOrigin: "top",
        }}
      />

      <div className="font-mono text-[10px] text-muted/40 tracking-[0.12em] mb-5">
        {card.num}
      </div>

      <h3 className={`font-serif text-[21px] font-medium tracking-[-0.01em] leading-[1.2] mb-3 ${card.color}`}>
        {card.title}
      </h3>

      <p className="text-[13px] text-muted leading-[1.75] font-light mb-6">
        {card.desc}
      </p>

      {/* Bottom bar — Framer Motion owns scaleX */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        style={{
          height: 2, background: GRAD, transformOrigin: "left",
        }}
      />
    </motion.div>
  );
};

/* ═══════════════════════════════════════════════════════════
   WHAT WE DO  (6-card grid)
═══════════════════════════════════════════════════════════ */
const WhatWeDoSection = () => {
  const cards = [
    { num: "01", title: "Operations & Systems",   desc: "Building repeatable systems that remove founder dependency and create operational clarity across the business.",               color: "text-trigarty-cyan"   },
    { num: "02", title: "Brand & Business",        desc: "Shaping identity, positioning, and business structure for early-stage companies from the ground up.",                        color: "text-trigarty-aqua"   },
    { num: "03", title: "Investor Readiness",      desc: "Documentation, decks, data rooms, and narrative built to move capital conversations forward.",                              color: "text-trigarty-mint"   },
    { num: "04", title: "Product Execution",       desc: "Non-technical product ownership — roadmaps, sprint coordination, vendor management, and shipping velocity.",                color: "text-trigarty-soft"   },
    { num: "05", title: "Growth Execution",        desc: "Coordinating growth efforts across channels with accountability, structure, and measurable output.",                        color: "text-trigarty-olive"  },
    { num: "06", title: "Hiring & Team Structure", desc: "Helping founders build the right team at the right stage without chaos, misalignment, or costly mistakes.",                color: "text-trigarty-golden" },
  ];

  return (
    <section id="what" className="py-24 md:py-32 px-6 md:px-12 bg-background border-b border-border">
      <div className="container-max">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-end mb-14">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}><Eyebrow>What We Do</Eyebrow></motion.div>
            <motion.h2 variants={fadeUp}
              className="font-serif text-4xl md:text-[52px] font-normal leading-[1.05] tracking-[-0.025em]">
              Every function.<br />
              One embedded team.
            </motion.h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.22 }}
            className="text-[14px] text-muted leading-[1.8] font-light max-w-[380px] self-end">
            We step inside companies and take operational responsibility across the
            functions that matter most — so founders can focus on building.
          </motion.p>
        </div>

        {/* 3×2 card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-border overflow-hidden">
          {cards.map((card, i) => (
            <SvcCard key={i} card={card} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
};



/* ═══════════════════════════════════════════════════════════
   STATEMENT QUOTE
═══════════════════════════════════════════════════════════ */
const StatementSection = () => (
  <div className="relative py-24 md:py-32 px-6 overflow-hidden border-b border-border bg-foreground">
    {/* Radial glow */}
    <div className="pointer-events-none absolute inset-0"
      style={{ background: "radial-gradient(ellipse at 60% 50%, rgba(75,197,199,0.07) 0%, transparent 65%)" }} />

    {/* Giant decorative quote mark */}
    <div className="pointer-events-none absolute -top-8 left-6 md:left-12 font-serif text-[200px] md:text-[260px]
                   leading-none text-white/[0.03] select-none">
      "
    </div>

    <div className="container-max max-w-[860px] relative">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="font-serif text-[1.8rem] md:text-[2.8rem] leading-[1.28] tracking-[-0.02em]
                   text-white mb-7">
        "Most companies don't fail from a lack of ideas.<br className="hidden md:block" />
        They fail because{" "}
        <em className="italic text-trigarty-cyan">execution breaks</em>{" "}
        as complexity grows."
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
        transition={{ delay: 0.35 }}
        className="flex items-center gap-3">
        <span className="w-8 h-px" style={{ background: GRAD }} />
        <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-trigarty-cyan">
          The Trigarty Belief
        </span>
      </motion.div>
    </div>
  </div>
);

/* ═══════════════════════════════════════════════════════════
   PROBLEMS
═══════════════════════════════════════════════════════════ */
const ProblemsSection = () => {
  const pains = [
    {
      n: "01", accent: "#4BC5C7",
      title: "The founder is the de facto COO, CMO, and Head of Product simultaneously",
      desc: "Every hire waits for approval. Every campaign needs a sign-off. The team is capable. The structure makes them dependent. This is not a leadership problem — it is an architecture problem.",
    },
    {
      n: "02", accent: "#4DC2B1",
      title: "The team is busy but nothing ships on time",
      desc: "Sprints get planned and then quietly abandoned halfway through when something urgent arrives. The team works long hours and still misses deadlines. Urgency has replaced priority.",
    },
    {
      n: "03", accent: "#76C47C",
      title: "A role has been 'open' for four months and counting",
      desc: "The job description was written in a weekend. The founder interviewed two people between other commitments. The gap is being covered by someone already stretched — quietly degrading quality.",
    },
    {
      n: "04", accent: "#E9A400",
      title: "Growth is happening but operations are actively fighting it",
      desc: "Revenue is up. Headcount grew. And now everything that worked before is creating visible dysfunction. The company is winning externally and fracturing internally.",
    },
  ];

  return (
    <section id="problems" className="py-24 md:py-32 px-6 md:px-12 bg-background border-b border-border">
      <div className="container-max grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-14 lg:gap-20 items-start">

        <div className="lg:sticky top-[80px]">
          <Eyebrow>Where Growth Breaks</Eyebrow>
          <motion.h2 initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
            className="font-serif text-[2.2rem] md:text-[3rem] font-normal leading-[1.08] tracking-[-0.02em]">
            {["The specific", "ways companies"].map((line, i) => (
              <motion.span key={i} variants={{
                hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
                visible: { clipPath: "inset(0 0 0% 0)", opacity: 1, transition: { duration: 0.62, delay: i * 0.12 } },
              }} className="block">{line}</motion.span>
            ))}
            <motion.em variants={{
              hidden: { clipPath: "inset(0 0 100% 0)", opacity: 0 },
              visible: { clipPath: "inset(0 0 0% 0)", opacity: 1, transition: { duration: 0.62, delay: 0.24 } },
            }} className="block italic text-trigarty-cyan">stop moving.</motion.em>
          </motion.h2>

          <p className="text-[13px] text-muted leading-[1.8] font-light mt-5 mb-6">
            These aren't abstract challenges. They are the exact situations founders describe on the first call.
            The longer they sit, the more expensive they become.
          </p>
          <div className="font-serif text-[15px] italic text-foreground leading-[1.5] border-l-2 border-trigarty-cyan/40 pl-4">
            "We had the right people. We just had no system for them to operate inside."
          </div>
        </div>

        <div className="border-t border-border">
          {pains.map((pain, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="grid grid-cols-[40px_1fr] py-6 border-b border-border
                         hover:pl-3 hover:bg-card/50 transition-all duration-300 cursor-default group relative">
              <div className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0
                             group-hover:scale-y-100 transition-transform duration-300 origin-top"
                style={{ backgroundColor: pain.accent }} />
              <span className="font-mono text-[10px] text-muted tracking-[0.08em] pt-[2px]
                               group-hover:text-trigarty-cyan transition-colors">
                {pain.n}
              </span>
              <div>
                <div className="text-[14px] font-medium text-foreground mb-1.5 leading-[1.35]">{pain.title}</div>
                <p className="text-[13px] text-muted leading-[1.65]">{pain.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




/* ═══════════════════════════════════════════════════════════
   HOW WE WORK
═══════════════════════════════════════════════════════════ */
const HowWeWorkSection = () => {
  const steps = [
    {
      num: "01", phase: "Discovery",
      title: "We map how the company actually runs",
      desc: "Not the org chart — the real operating logic. Who makes decisions. How long it takes. Where work stalls between teams. We spend the first two weeks learning before we build anything.",
      tags: ["Decision-flow mapping", "Output gap analysis"],
      tagColor: "bg-trigarty-cyan/10 text-trigarty-cyan border-trigarty-cyan/20",
    },
    {
      num: "02", phase: "Architecture",
      title: "We design the operating system your stage requires",
      desc: "Not a generic framework — a precise design for where you are. The specific cadences, ownership structures, and decision frameworks your company needs right now, not six months ago.",
      tags: ["Stage-specific design", "Ownership definition"],
      tagColor: "bg-trigarty-mint/10 text-trigarty-mint border-trigarty-mint/20",
    },
    {
      num: "03", phase: "Execution",
      title: "We run it — not supervise it from the outside",
      desc: "Our operators embed as functional leads. We sit in your planning meetings. We run hiring interviews. We own sprint reviews and hold the same accountability to outcomes your internal team does.",
      tags: ["Embedded leadership", "Real-time tracking"],
      tagColor: "bg-trigarty-soft/10 text-trigarty-soft border-trigarty-soft/20",
    },
    {
      num: "04", phase: "Transfer",
      title: "We make ourselves unnecessary — deliberately",
      desc: "Every system we build is documented in enough detail that a new hire on their third day could operate it. We measure success by how fast we can exit — not by how long we can extend.",
      tags: ["System documentation", "Exit readiness testing"],
      tagColor: "bg-trigarty-golden/10 text-trigarty-golden border-trigarty-golden/20",
    },
  ];

  return (
    <section id="how" className="py-24 md:py-32 px-6 md:px-12 bg-card border-b border-border">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-end mb-14 pb-12 border-b border-border">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
            <motion.div variants={fadeUp}><Eyebrow>How We Work</Eyebrow></motion.div>
            <motion.h2 variants={fadeUp}
              className="font-serif text-4xl md:text-[52px] font-normal leading-[1.08] tracking-[-0.02em]">
              Inside the company,<br />
              <em className="italic text-primary">not above it.</em>
            </motion.h2>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            transition={{ delay: 0.22 }}>
            <p className="text-[14px] text-muted leading-[1.8] font-light mb-5">
              We don't produce reports from a distance and call it consulting. Our operators embed
              inside your team — holding the same accountability to weekly output that your internal
              people do. No advisory. No decks. Execution.
            </p>
            <div className="font-serif text-[17px] italic text-foreground leading-[1.5] border-l-2 border-trigarty-cyan/30 pl-4">
              "Is the company faster and more self-sufficient than when we arrived?"
            </div>
          </motion.div>
        </div>

        <div className="flex flex-col border-t border-border">
          {steps.map((step, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.08 }}
              className="grid grid-cols-1 md:grid-cols-[150px_1fr] py-10 border-b border-border
                         hover:bg-background/70 transition-colors px-4 -mx-4 group">
              <div className="mb-5 md:mb-0">
                <div className="font-serif text-5xl md:text-[58px] text-border leading-none
                               tracking-[-0.04em] group-hover:text-primary transition-colors duration-500">
                  {step.num}
                </div>
                <div className="font-mono text-[10px] tracking-[0.15em] uppercase text-muted/50 mt-2">
                  {step.phase}
                </div>
              </div>
              <div>
                <div className="font-serif text-[22px] font-normal text-foreground tracking-[-0.01em] mb-3 leading-[1.2]">
                  {step.title}
                </div>
                <p className="text-[13px] text-muted leading-[1.75] max-w-[500px] mb-4">{step.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((t, j) => (
                    <span key={j}
                      className={`font-mono text-[9px] tracking-[0.12em] uppercase
                                  px-2.5 py-1.5 border rounded-[2px] ${step.tagColor}`}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════
   PORTFOLIO
═══════════════════════════════════════════════════════════ */
const PortfolioSection = () => {
  const companies = [
    {
      num: "01",
      chip: "AI Ecosystem & Architecture",
      chipVariant: "teal" as const,
      name: "Aiden",
      slug: "aiden-ai-os-architecture",
      desc: "Redesigning and rebuilding the entire architecture of existing OS, devices, and tech to make them fully AI-native. Building a Jarvis-level AI assistant and AI brain for both general and commercial use — alongside a complete hardware-software ecosystem that operates fully offline and online as a hybrid system.",
      roles: ["Operations", "Investor Readiness", "Brand", "Strategy"],
      roleVariant: "teal" as const,
    },
    {
      num: "02",
      chip: "AR/VR & Spatial Computing",
      chipVariant: "teal" as const,
      name: "Project XR",
      slug: "project-xr-reality-layer",
      desc: "A cross-device platform that adds a persistent digital layer to the real world — accessible through mobile, AR glasses, and VR. Built on five layers: Discovery, Navigation, Memory Trails, Quest, and Social Canvas.",
      roles: ["Product Execution", "Brand", "Systems", "Strategy"],
      roleVariant: "teal" as const,
    },
    {
      num: "03",
      chip: "Operations & Event Scale",
      chipVariant: "gold" as const,
      name: "EWR",
      slug: "ewr-war-room-coordination",
      desc: "An event and program management platform built like a war room. A single command center for coordinating backend teams, contacts, and real-time execution across hackathons, conferences, and large-scale programs.",
      roles: ["Operations", "Product Execution", "Brand", "Strategy"],
      roleVariant: "gold" as const,
    },
  ];

  const chipStyles = {
    teal: "text-trigarty-cyan border-trigarty-cyan",
    gold: "text-trigarty-golden border-trigarty-golden",
  };
  const tagStyles = {
    teal: "bg-trigarty-cyan/10 text-trigarty-cyan",
    gold: "bg-trigarty-golden/10 text-trigarty-golden",
  };

  return (
    <section id="embeds" className="py-24 md:py-32 px-6 md:px-12 bg-background border-b border-border">
      <div className="container-max">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          className="mb-12">
          <motion.div variants={fadeUp}><Eyebrow>Portfolio</Eyebrow></motion.div>
          <motion.h2 variants={fadeUp}
            className="font-serif text-4xl md:text-[52px] font-normal leading-[1.05] tracking-[-0.025em] mb-4">
            Companies we<br />operate inside.
          </motion.h2>
          <motion.p variants={fadeUp}
            className="text-[14px] text-muted leading-[1.8] font-light max-w-[520px]">
            Three high-potential companies where Trigarty is currently embedded as an execution
            partner — actively building alongside the founding teams.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {companies.map((co, i) => (
            <motion.div key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              whileHover={{ boxShadow: "0 24px 60px rgba(0,0,0,0.08)" }}
              className="bg-card border border-border flex flex-col justify-between transition-shadow duration-300 group">

              <div className="p-7">
                <div className="flex items-start justify-between mb-6">
                  <span className={`font-mono text-[9px] tracking-[0.1em] uppercase
                                    px-2.5 py-[5px] border ${chipStyles[co.chipVariant]}`}>
                    {co.chip}
                  </span>
                  <span className="font-mono text-[11px] text-muted/40">{co.num}</span>
                </div>

                <h3 className="font-serif text-[2rem] font-normal text-foreground
                               tracking-[-0.02em] leading-[1.1] mb-4">
                  {co.name}
                </h3>
                <p className="text-[13px] text-muted leading-[1.78] font-light">{co.desc}</p>
              </div>

              <div className="px-7 pb-7">
                <div className="h-px bg-border mb-5" />
                <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-muted/60 mb-3">
                  Trigarty&#39;s role
                </div>
                <div className="flex flex-wrap gap-2 mb-5">
                  {co.roles.map((role, j) => (
                    <span key={j}
                      className={`text-[12px] font-medium px-3 py-1 ${tagStyles[co.roleVariant]}`}>
                      {role}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.1em] text-muted/60">
                    <motion.span animate={{ opacity: [1, 0.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: i * 0.6 }}
                      className="w-[5px] h-[5px] rounded-full bg-trigarty-mint shrink-0" />
                    Active · Building
                  </div>
                  <a href={`/log/${co.slug}`}
                    className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted/60
                               hover:text-foreground transition-colors flex items-center gap-1 group/link">
                    View Case
                    <ArrowUpRight className="h-3 w-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════
   PRINCIPLES
═══════════════════════════════════════════════════════════ */
const PrinciplesSection = () => {
  const principles = [
    { n: "01", title: "We don't get paid for decks. We get paid for outcomes.",          desc: "Our engagements are scoped around measurable business results — shipping velocity, hiring cycle time, founder hours reclaimed. If we can't point to change, we haven't earned it." },
    { n: "02", title: "Advice without accountability is just opinion.",                   desc: "If we identify the problem, we own the fix. Our operators are embedded — accountable to the same weekly output targets as your team. Not advising from the outside." },
    { n: "03", title: "A company that needs its operator to function hasn't been fixed.", desc: "Every system we build is designed to run without us. We measure our work by how quickly we can make ourselves unnecessary — not by how long we can extend the engagement." },
    { n: "04", title: "Complexity is usually a symptom, not a cause.",                   desc: "When a company feels chaotic, the instinct is to add more process. The right move is usually to remove unclear ownership. We simplify before we systematise." },
    { n: "05", title: "Speed is a design choice, not a personality trait.",               desc: "Slow companies rarely have slow people. They have slow systems — ambiguous ownership, undefined decision rights, and no clear accountability for output. We fix the system." },
    { n: "06", title: "We only take engagements we believe we can materially improve.",   desc: "We turn down work where the problem is the market or the product. We only take work where execution is the genuine constraint — and where our operators can meaningfully move the outcome." },
  ];

  return (
    <section id="principles" className="py-24 md:py-32 px-6 md:px-12 bg-card border-b border-border">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-12 lg:gap-20 items-start">

          {/* Left sticky */}
          <div className="lg:sticky top-[80px]">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
              <motion.div variants={fadeUp}><Eyebrow>Core Principles</Eyebrow></motion.div>
              <motion.h2 variants={fadeUp}
                className="font-serif text-4xl md:text-[48px] font-normal leading-[1.08] tracking-[-0.02em]">
                The beliefs that<br />shape how<br />
                <em className="italic text-trigarty-cyan">we operate.</em>
              </motion.h2>
              <motion.p variants={fadeUp}
                className="text-[14px] text-muted leading-[1.8] font-light mt-5">
                Six non-negotiables that govern every engagement, every operator decision,
                and every conversation with a client.
              </motion.p>
            </motion.div>
          </div>

          {/* Right list */}
          <div className="border-t border-border">
            {principles.map((p, i) => (
              <motion.div key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="py-7 border-b border-border group relative cursor-default
                           hover:bg-background transition-colors px-4 -mx-4 overflow-hidden">

                <div className="absolute bottom-0 left-0 right-0 h-[2px] scale-x-0 group-hover:scale-x-100
                               origin-left transition-transform duration-350"
                  style={{ background: GRAD }} />

                <div className="flex items-start gap-6">
                  <span className="font-mono text-[10px] text-muted/40 tracking-[0.1em] shrink-0 w-7 mt-[3px]">
                    {p.n}
                  </span>
                  <div>
                    <div className="font-serif text-[18px] font-normal text-foreground tracking-[-0.01em] mb-2 leading-[1.2]">
                      {p.title}
                    </div>
                    <p className="text-[13px] text-muted leading-[1.75]">{p.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ═══════════════════════════════════════════════════════════
   CTA  (full-bleed dark)
═══════════════════════════════════════════════════════════ */
const CTASection = () => (
  <section id="cta" className="bg-foreground text-background py-24 md:py-32 px-6 md:px-12 relative overflow-hidden">
    {/* Spectrum top */}
    <div className="absolute top-0 left-0 right-0 h-[3px]" style={{ background: GRAD }} />

    {/* Glow */}
    <motion.div
      animate={{ scale: [1, 1.18, 1], opacity: [0.06, 0.12, 0.06] }}
      transition={{ duration: 10, repeat: Infinity }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                 w-[800px] h-[400px] rounded-full bg-trigarty-cyan blur-[130px] pointer-events-none" />

    <div className="container-max grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center relative z-10">
      <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
        <Eyebrow light>Start Here</Eyebrow>
        <motion.h2 variants={fadeUp}
          className="font-serif text-4xl md:text-[52px] font-normal tracking-[-0.025em] leading-[1.04] text-white mb-5">
          Is execution the<br />thing holding<br />
          <em className="italic text-trigarty-cyan">your company back?</em>
        </motion.h2>
        <motion.p variants={fadeUp}
          className="text-[14px] text-white/40 leading-[1.85] font-light max-w-[380px]">
          We work with a small number of companies each quarter where execution is the genuine
          constraint. Not market, not product — the systems and people behind it.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.7 }}>

        <div className="flex flex-col gap-2.5 mb-8">
          <motion.a href="mailto:contact.trigarty@gmail.com"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center justify-between bg-white text-foreground
                       font-sans text-[13px] font-semibold px-5 py-3.5 tracking-[0.02em]
                       hover:opacity-90 transition-opacity">
            Send us an email <ArrowUpRight className="h-4 w-4" />
          </motion.a>
          <motion.a href="https://wa.me/919133665157" target="_blank" rel="noreferrer"
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#25D366] text-white
                       font-sans text-[13px] font-semibold px-5 py-3.5 tracking-[0.02em]
                       hover:opacity-90 transition-opacity">
            <WaIcon size={14} /> WhatsApp us directly
          </motion.a>
        </div>

        <div className="flex flex-wrap gap-5 mb-5">
          <a href="mailto:contact.trigarty@gmail.com"
            className="font-mono text-[10px] tracking-[0.08em] text-white/40 hover:text-white/80 transition-colors">
            contact.trigarty@gmail.com
          </a>
          <a href="tel:+919133665157"
            className="font-mono text-[10px] tracking-[0.08em] text-white/40 hover:text-white/80 transition-colors">
            +91 91336 65157
          </a>
        </div>

        <div className="grid grid-cols-2 gap-5 border-t border-white/10 pt-6">
          {[
            { num: "3", lbl: "Active Embeds" },
            { num: "6+", lbl: "Functions We Cover" },
            { num: "3", lbl: "Industries" },
            { num: "< 1 Day", lbl: "Response Time" },
          ].map((stat, i) => (
            <div key={i}>
              <div className="font-serif text-2xl text-trigarty-cyan leading-none mb-1">{stat.num}</div>
              <div className="font-mono text-[9px] tracking-[0.1em] uppercase text-white/30">{stat.lbl}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════
   JOIN THE TEAM  (teaser — links to /join subpage)
═══════════════════════════════════════════════════════════ */
const JoinTeamSection = () => (
  <section id="join" className="pt-14 pb-20 md:pt-20 md:pb-28 px-6 md:px-12 bg-background border-b border-border">
    <div className="container-max">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">

        {/* Left — label + headline */}
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <motion.div variants={fadeUp}><Eyebrow>Join the Team</Eyebrow></motion.div>
          <motion.h2 variants={fadeUp}
            className="font-serif text-4xl md:text-[52px] font-normal leading-[1.05] tracking-[-0.025em]">
            We hire on skill<br />
            <em className="italic" style={{
              background: GRAD,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>and talent.</em>
          </motion.h2>
        </motion.div>

        {/* Right — copy + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.22, duration: 0.6 }}
          className="flex flex-col gap-5">
          <p className="text-[14px] text-muted leading-[1.85] font-light">
            In most cases our roles are open to anyone who can demonstrate the skill and
            the thinking — regardless of background, title, or years of experience.
            We care about what you can do and how you approach problems.
          </p>
          <p className="text-[13px] text-muted/70 leading-[1.75] font-light">
            We have openings across both core business functions and specialized
            technical tracks — including embedded roles inside our active portfolio companies.
          </p>
          <div className="pt-1">
            <motion.a
              href="/join"
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2.5 bg-foreground text-background
                         font-sans text-[13px] font-semibold px-6 py-3.5 tracking-[0.02em]
                         hover:opacity-80 transition-opacity">
              See Open Roles <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

/* ═══════════════════════════════════════════════════════════
   FOOTER
═══════════════════════════════════════════════════════════ */
const Footer = () => (
  <footer className="bg-[#0a0a09] pt-16 pb-8 px-6 md:px-12 text-background">
    {/* Spectrum top */}
    <div className="h-[2px] mb-16 -mx-6 md:-mx-12" style={{ background: GRAD }} />

    <div className="container-max grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.2fr_1fr_1fr_1fr] gap-12 pb-12 border-b border-white/[0.07]">

      <div>
        <a href="#" className="mb-4 block w-fit"><TrigartyLogo /></a>
        <p className="text-[13px] text-white/30 leading-[1.7] max-w-[240px] mb-3">
          A Venture Studio that operates on building scalable companies, Brands and business through embedded execution, strategic systems, and long-term operational support.
        </p>

        <div className="mt-5 flex gap-3">
          <a href="https://wa.me/919133665157" target="_blank" rel="noreferrer"
            className="w-8 h-8 border border-white/10 flex items-center justify-center
                       text-white/30 hover:text-[#25D366] hover:border-[#25D366]/40 transition-colors">
            <WaIcon size={12} />
          </a>
        </div>
      </div>

      <div>
        <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/20 mb-4">Navigation</div>
        <div className="flex flex-col gap-2.5">
          {[
            { href: "#what",       label: "What We Do" },
            { href: "#services",   label: "Services" },
            { href: "#how",        label: "How We Work" },
            { href: "#embeds",     label: "Portfolio" },
            { href: "#principles", label: "Principles" },
          ].map((l) => (
            <a key={l.href} href={l.href}
              className="text-[13px] text-white/35 hover:text-white/75 transition-colors">{l.label}</a>
          ))}
        </div>
      </div>

      <div>
        <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/20 mb-4">Services</div>
        <div className="flex flex-col gap-2.5">
          {["Operations & Systems", "Brand & Business", "Investor Readiness", "Product Execution", "Growth Execution", "Hiring & Team Structure"].map((s, i) => (
            <span key={i} className="text-[12px] text-white/25">{s}</span>
          ))}
        </div>
      </div>

      <div>
        <div className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/20 mb-4">Connect</div>
        <div className="flex flex-col gap-2.5">
          <a href="mailto:contact.trigarty@gmail.com"
            className="text-[13px] text-white/35 hover:text-white/75 transition-colors">contact.trigarty@gmail.com</a>
          <a href="tel:+919133665157"
            className="text-[13px] text-white/35 hover:text-white/75 transition-colors">+91 91336 65157</a>
          <a href="https://wa.me/919133665157" target="_blank" rel="noreferrer"
            className="text-[13px] text-white/35 hover:text-[#25D366] transition-colors flex items-center gap-1.5">
            <WaIcon size={11} /> WhatsApp
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <a href="#" className="text-[13px] text-white/25 hover:text-white/60 transition-colors">LinkedIn</a>
            <a href="#" className="text-[13px] text-white/25 hover:text-white/60 transition-colors">Twitter / X</a>
          </div>
        </div>
      </div>
    </div>

    <div className="container-max flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 gap-4">
      <span className="font-mono text-[10px] tracking-[0.08em] text-white/20">
        © {new Date().getFullYear()} Trigarty. All rights reserved.
      </span>
      <div className="flex gap-6">
        <a href="#" className="font-mono text-[10px] tracking-[0.08em] text-white/20 hover:text-white/50 transition-colors">Privacy</a>
        <a href="#" className="font-mono text-[10px] tracking-[0.08em] text-white/20 hover:text-white/50 transition-colors">Terms</a>
      </div>
    </div>
  </footer>
);

/* ═══════════════════════════════════════════════════════════
   PAGE ROOT
═══════════════════════════════════════════════════════════ */
export default function Home() {
  return (
    <div className="relative w-full overflow-hidden bg-background">
      <SpectrumBar />
      <Navbar />
      <main className="relative z-10 flex flex-col">
        <HeroSection />
        <TickerSection />
        <WhatWeDoSection />
        <StatementSection />
        <ProblemsSection />
        <HowWeWorkSection />
        <PortfolioSection />
        <PrinciplesSection />
        <JoinTeamSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
