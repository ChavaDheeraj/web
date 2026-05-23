"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import Link from "next/link";

/* ── Constants ─────────────────────────────────────── */
const GRAD = "linear-gradient(90deg,#63B7C9,#4BC5C7,#4DC2B1,#5CC697,#76C47C,#A4BE4B,#CCB10A,#E9A400)";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } },
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

/* ── Role data ─────────────────────────────────────── */
const TRACKS = [
  {
    id: "nontech",
    track: "Core Team",
    label: "Non-Tech",
    accent: "#4BC5C7",
    chip: "Business & Operations",
    desc: "The people who run the business side of Trigarty and our portfolio — strategy, growth, brand, finance, and everything in between.",
    roles: [
      { title: "Business Development",        desc: "Identify, qualify, and close strategic partnerships and new client relationships. You understand how to build pipeline with conviction." },
      { title: "Operations & Execution",      desc: "Own the internal operating rhythm — systems, workflows, and cross-functional coordination that keeps everything moving." },
      { title: "Community & Partnerships",    desc: "Build and manage communities and partner ecosystems across our portfolio. Relationships that compound." },
      { title: "Go-To-Market Engineering",    desc: "Design and execute GTM strategies — from positioning to launch sequencing. You think in campaigns and conversion loops." },
      { title: "Growth & Marketing",          desc: "Drive acquisition and retention across channels. You build repeatable growth systems, not one-off campaigns." },
      { title: "Content & Communications",    desc: "Shape how Trigarty and its portfolio companies communicate — editorial, brand voice, thought leadership, and external messaging." },
      { title: "Finance & Legal",             desc: "Handle the financial infrastructure and legal coordination that keeps engagements clean, compliant, and scalable." },
      { title: "People & Talent",             desc: "Build and manage hiring pipelines across Trigarty and portfolio companies. You know how to identify operators in the wild." },
      { title: "Data & Research",             desc: "Turn information into decisions. Market research, competitive intelligence, and data structuring for strategic use." },
    ],
  },
  {
    id: "tech",
    track: "Core Team",
    label: "Tech",
    accent: "#4DC2B1",
    chip: "Product & Engineering",
    desc: "Builders, designers, and engineers who work across Trigarty's internal tools and portfolio companies at the product and systems layer.",
    roles: [
      { title: "Product & Design",                   desc: "Non-technical and technical product ownership — roadmaps, UX, design systems, and shipping velocity across our portfolio." },
      { title: "Data & Research",                    desc: "Data engineering, analytics infrastructure, and research systems. You make data usable and decision-ready." },
      { title: "Frontend Development",               desc: "Build fast, polished, production-ready interfaces across web and mobile. Strong eye for craft and detail." },
      { title: "Backend & Systems Development",      desc: "Architect and build scalable backend infrastructure — APIs, services, databases, and system integrations." },
    ],
  },
  {
    id: "aiden",
    track: "Embedded — Aiden",
    label: "AI Ecosystem & Architecture",
    accent: "#63B7C9",
    chip: "Portfolio · Aiden",
    desc: "Aiden is rebuilding the entire architecture of existing OS, devices, and tech to be fully AI-native — building a Jarvis-level AI assistant that operates offline and online as a hybrid system.",
    roles: [
      { title: "AI & Machine Learning Engineer",                 desc: "Design and train models for on-device and hybrid inference. Deep understanding of LLM architecture, fine-tuning, and deployment pipelines." },
      { title: "On-Device AI / Edge Computing Engineer",         desc: "Optimize AI models to run efficiently on local hardware with minimal latency. Experience with quantization, ONNX, TFLite, or similar." },
      { title: "OS Architecture Engineer",                       desc: "Custom kernel and OS-level work on Linux-based systems. Deep knowledge of system internals, driver development, and hardware-software integration." },
    ],
  },
  {
    id: "xr",
    track: "Embedded — Project XR",
    label: "AR / VR & Spatial Computing",
    accent: "#5CC697",
    chip: "Portfolio · Project XR",
    desc: "Project XR is a cross-device platform that adds a persistent digital layer to the real world — accessible through mobile, AR glasses, and VR. Built on five layers: Discovery, Navigation, Memory Trails, Quest, and Social Canvas.",
    roles: [
      { title: "AR / VR & Spatial Computing Engineer",  desc: "Build multi-device spatial experiences across mobile, AR glasses, and VR headsets. Strong grasp of spatial anchoring, cross-device sync, and XR SDKs." },
      { title: "3D Environment Artist",                 desc: "Create the digital world layers — 3D assets, environment design, and visual systems that sit on top of the real world." },
      { title: "Shader / Graphics Engineer",            desc: "Write high-performance shaders and graphics pipelines for real-time spatial rendering. Experience with WebGPU, Metal, or Vulkan preferred." },
      { title: "Location & Geospatial Engineer",        desc: "Build and maintain location-aware systems — spatial anchoring, geofencing, map integrations, and location accuracy pipelines." },
    ],
  },
];

/* ── Role Card ─────────────────────────────────────── */
const RoleCard = ({
  role,
  i,
  accent,
  mailSubject,
}: {
  role: { title: string; desc: string };
  i: number;
  accent: string;
  mailSubject: string;
}) => {
  const [hovered, setHovered] = useState(false);

  const body = encodeURIComponent(
    `Hi Trigarty Team,\n\nI'm reaching out to apply for the ${role.title} role.\n\n[Tell us about yourself — your background, the skills you bring, and relevant work you've done.]\n\n[Why this role at Trigarty specifically?]\n\nAttached is my CV / resume.\n\nLooking forward to hearing from you.\n\n[Your Name]`
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-16px" }}
      transition={{ duration: 0.5, delay: i * 0.06 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative border-b border-border last:border-b-0 py-6 px-1 group"
      style={{ backgroundColor: hovered ? "rgba(0,0,0,0.018)" : "transparent", transition: "background-color 0.2s ease" }}
    >
      {/* Left accent */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: hovered ? 1 : 0 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        style={{
          position: "absolute", top: 0, left: -24, bottom: 0, width: 2,
          background: accent, transformOrigin: "top",
        }}
      />

      <div className="flex items-start justify-between gap-6">
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <span className="font-mono text-[9px] tracking-[0.1em] text-muted/40">{String(i + 1).padStart(2, "0")}</span>
            <h3 className="font-serif text-[18px] font-medium tracking-[-0.01em] leading-[1.2] text-foreground">
              {role.title}
            </h3>
          </div>
          <p className="text-[13px] text-muted leading-[1.75] font-light max-w-[560px] ml-8">
            {role.desc}
          </p>
        </div>
        <motion.a
          href={`mailto:team.trigarty@gmail.com?subject=${mailSubject}&body=${body}`}
          animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 6 }}
          transition={{ duration: 0.2 }}
          className="shrink-0 inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em]
                     uppercase border border-border px-3 py-2 hover:border-foreground
                     transition-colors text-muted hover:text-foreground"
          style={{ color: accent }}
          onClick={(e) => e.stopPropagation()}
        >
          Apply <ArrowUpRight className="h-3 w-3" />
        </motion.a>
      </div>
    </motion.div>
  );
};

/* ── Logo (matches main site exactly) ──────────────── */
const SiteLogo = () => (
  <div className="flex items-center gap-3 select-none">
    <svg className="w-5 h-5 shrink-0" viewBox="0 0 100 100" fill="none">
      <path d="M50 15L18 80H36L50 48L64 80H82L50 15Z" fill="url(#tl-g-join)" />
      <defs>
        <linearGradient id="tl-g-join" x1="18" y1="15" x2="82" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%"   stopColor="#63B7C9" />
          <stop offset="50%"  stopColor="#4DC2B1" />
          <stop offset="100%" stopColor="#E9A400" />
        </linearGradient>
      </defs>
    </svg>
    <div className="font-sans font-light tracking-[0.25em] text-[14px] uppercase flex items-center">
      <span style={{ color: "#63B7C9" }}>T</span>
      <span style={{ color: "#4BC5C7" }}>R</span>
      <span style={{ color: "#4DC2B1" }}>I</span>
      <span style={{ color: "#5CC697" }}>G</span>
      <span style={{ color: "#76C47C", fontWeight: 500 }}>Λ</span>
      <span style={{ color: "#A4BE4B" }}>R</span>
      <span style={{ color: "#CCB10A" }}>T</span>
      <span style={{ color: "#E9A400" }}>Y</span>
    </div>
  </div>
);

/* ── Page ───────────────────────────────────────────── */
export default function JoinPage() {

  return (
    <div className="min-h-screen bg-background text-foreground">

      {/* Spectrum */}
      <div className="h-[3px] fixed top-0 left-0 right-0 z-[600]" style={{ background: GRAD }} />

      {/* Nav — matches main site */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-xl border-b border-border
                      flex items-center justify-between px-6 md:px-12 h-[60px]">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <SiteLogo />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em]
                     uppercase text-muted hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-3 w-3" /> Back to site
        </Link>
      </nav>

      {/* Hero */}
      <section className="px-6 md:px-12 py-20 md:py-28 border-b border-border">
        <div className="max-w-[1100px] mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp}
              className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.18em]
                         uppercase text-muted mb-8">
              <span className="w-[20px] h-px" style={{ background: GRAD, display: "inline-block" }} />
              Join the Team
            </motion.div>

            <motion.h1 variants={fadeUp}
              className="font-serif text-4xl md:text-[64px] font-normal leading-[1.04]
                         tracking-[-0.03em] mb-8 max-w-[800px]">
              We hire on skill<br />
              <em className="italic" style={{
                background: GRAD, WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent", backgroundClip: "text"
              }}>and talent.</em>
            </motion.h1>

            <motion.div variants={fadeUp}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-[900px]">
              <p className="text-[15px] text-muted leading-[1.85] font-light">
                In most cases, our roles are open to anyone who can demonstrate the skill and
                the thinking — regardless of background, title, or years of experience.
                We care about what you can actually do.
              </p>
              <p className="text-[14px] text-muted/70 leading-[1.8] font-light">
                We have openings across core business and operations functions, technical product
                and engineering tracks, and specialized embedded roles inside our active portfolio
                companies. If you can assist in any capacity not listed — tell us.
              </p>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-4 mt-8">
              <a
                href="mailto:team.trigarty@gmail.com"
                className="inline-flex items-center gap-2 bg-foreground text-background
                           font-sans text-[13px] font-semibold px-6 py-3 tracking-[0.02em]
                           hover:opacity-80 transition-opacity"
              >
                Drop a general application <ArrowUpRight className="h-4 w-4" />
              </a>
              <span className="font-mono text-[10px] text-muted/50 tracking-[0.06em]">
                team.trigarty@gmail.com
              </span>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Role Tracks */}
      <section className="px-6 md:px-12 py-16 md:py-24">
        <div className="max-w-[1100px] mx-auto flex flex-col gap-20">
          {TRACKS.map((track, ti) => {
            const subject = encodeURIComponent(`Application – ${track.track} · ${track.label}`);
            return (
              <motion.div
                key={track.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.05 }}
              >
                {/* Track header */}
                <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-10 lg:gap-16
                                pb-8 mb-2 border-b-2 border-border"
                  style={{ borderBottomColor: track.accent + "33" }}>
                  <div>
                    <div className="inline-flex items-center gap-2 font-mono text-[9px] tracking-[0.14em]
                                    uppercase px-2.5 py-1 border mb-4"
                      style={{ color: track.accent, borderColor: track.accent + "44" }}>
                      {track.chip}
                    </div>
                    <div className="font-mono text-[9px] tracking-[0.14em] uppercase text-muted/40 mb-1">
                      {track.track}
                    </div>
                    <h2 className="font-serif text-[28px] md:text-[34px] font-normal leading-[1.08]
                                   tracking-[-0.02em] text-foreground">
                      {track.label}
                    </h2>
                  </div>
                  <div className="self-end">
                    <p className="text-[13px] text-muted leading-[1.8] font-light max-w-[500px]">
                      {track.desc}
                    </p>
                  </div>
                </div>

                {/* Roles list */}
                <div className="pl-0 lg:pl-[296px]">
                  {track.roles.map((role, ri) => (
                    <RoleCard
                      key={ri}
                      role={role}
                      i={ri}
                      accent={track.accent}
                      mailSubject={subject}
                    />
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="px-6 md:px-12 py-20 border-t border-border bg-card">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <div className="font-mono text-[9px] tracking-[0.18em] uppercase text-muted/50 mb-4">
              Don't see your role?
            </div>
            <h2 className="font-serif text-3xl md:text-[42px] font-normal leading-[1.1]
                           tracking-[-0.02em] mb-4">
              If you can help us build —<br />
              <em className="italic" style={{ background: GRAD, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>tell us how.</em>
            </h2>
            <p className="text-[13px] text-muted leading-[1.8] font-light max-w-[420px]">
              We're open to people who bring genuine skill in any function that helps early-stage
              companies grow — even if it's not listed above. Send us a note explaining what
              you do and how it fits.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <a
              href={`mailto:team.trigarty@gmail.com?subject=${encodeURIComponent("General Application – Trigarty")}&body=${encodeURIComponent("Hi Trigarty Team,\n\nI'd like to apply to join the team.\n\n[Your background and what you bring]\n\n[How you think you can help]\n\nAttached is my CV.\n\n[Your Name]")}`}
              className="inline-flex items-center justify-between border border-border px-6 py-4
                         hover:border-foreground hover:bg-background transition-all group"
            >
              <span className="font-sans text-[13px] font-medium">Send a general application</span>
              <ArrowUpRight className="h-4 w-4 text-muted group-hover:text-foreground transition-colors" />
            </a>
            <a
              href="https://wa.me/919133665157"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-between border border-[#25D366]/30
                         px-6 py-4 hover:border-[#25D366] hover:bg-[#25D366]/5 transition-all group"
            >
              <span className="font-sans text-[13px] font-medium text-[#25D366]">Chat on WhatsApp</span>
              <ArrowUpRight className="h-4 w-4 text-[#25D366]" />
            </a>
            <p className="font-mono text-[9px] tracking-[0.1em] text-muted/40 uppercase">
              team.trigarty@gmail.com · We read every application personally
            </p>
          </div>
        </div>
      </section>

      {/* Footer strip */}
      <footer className="px-6 md:px-12 py-6 border-t border-border flex items-center justify-between flex-wrap gap-4">
        <Link href="/" className="hover:opacity-80 transition-opacity">
          <SiteLogo />
        </Link>
        <p className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted/40">
          © 2025 Trigarty. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
