"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Search, Activity, Cpu, Layers, Terminal } from "lucide-react";
import Link from "next/link";

export default function LogPage() {
  const caseStudies = [
    {
      num: "01",
      slug: "aiden-ai-os-architecture",
      client: "AiDen",
      metric: "Sub-90ms",
      metricLabel: "On-Device Inference Latency",
      bottleneck: "Rebuilding the entire device and operating system architecture to run full-scale Stark-like Jarvis AI assistants natively. Sprints were bottlenecked by complex deep-tech local neural processing integration and resource constraints.",
      outcome: "We embedded an execution team to structure the deep-tech operating system milestones, aligned the device ecosystem hardware timeline, and established lightweight local-first sprint pipelines.",
      colors: { 
        text: "text-trigarty-cyan", 
        bg: "bg-trigarty-cyan/10", 
        border: "border-trigarty-cyan/20",
        glow: "rgba(99, 183, 201, 0.12)",
        glowAccent: "#63B7C9"
      },
      tag: "AI Eco System & Architecture",
      category: "systems",
      telemetry: {
        velocity: "+52% Boost",
        team: "2 Embedded Operators",
        health: "Optimal"
      }
    },
    {
      num: "02",
      slug: "project-xr-reality-layer",
      client: "Project XR",
      metric: "Sub-2mm",
      metricLabel: "Spatial Anchor Precision",
      bottleneck: "Structuring multi-device spatial tracking layers (Discovery, Navigation, Memory Trails, Quest, Social Canvas) across Mobile, AR glasses, and VR. Sourcing and coordination was fractured across three device platforms.",
      outcome: "We served as operational execution leads. We aligned the product cross-device launch pipeline, created standardized spatial mapping checkpoints, and established a unified team sprint dashboard.",
      colors: { 
        text: "text-trigarty-mint", 
        bg: "bg-trigarty-mint/10", 
        border: "border-trigarty-mint/20",
        glow: "rgba(77, 194, 177, 0.12)",
        glowAccent: "#4DC2B1"
      },
      tag: "AR/VR & Spatial Computing Systems",
      category: "spatial",
      telemetry: {
        velocity: "+40% Boost",
        team: "1 Embedded Operator",
        health: "Stable"
      }
    },
    {
      num: "03",
      slug: "ewr-war-room-coordination",
      client: "EWR",
      metric: "99.999%",
      metricLabel: "Event Network Reliability",
      bottleneck: "Building high-stakes event coordination software designed to serve as a back-of-house team war room. The complex real-time communication stack was delayed by synchronization pipeline blockers and undefined scope parameters.",
      outcome: "We embedded operational systems operators. We simplified product scopes, restructured coordination sprints, set up strict real-time telemetry testing phases, and established high-intensity delivery lanes.",
      colors: { 
        text: "text-trigarty-golden", 
        bg: "bg-trigarty-golden/10", 
        border: "border-trigarty-golden/20",
        glow: "rgba(233, 164, 0, 0.12)",
        glowAccent: "#E9A400"
      },
      tag: "Operations & Event Scale",
      category: "operations",
      telemetry: {
        velocity: "+65% Boost",
        team: "2 Embedded Operators",
        health: "High Performance"
      }
    }
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", label: "All Sectors" },
    { id: "systems", label: "Deep Tech & OS" },
    { id: "spatial", label: "Spatial Computing" },
    { id: "operations", label: "Operations & SaaS" }
  ];

  const filteredStudies = caseStudies.filter(study => {
    const matchesSearch = 
      study.client.toLowerCase().includes(searchTerm.toLowerCase()) ||
      study.tag.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || study.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 selection:text-primary">
      {/* Dynamic Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      <nav className="fixed top-0 left-0 right-0 z-50 flex h-[60px] items-center justify-between px-6 md:px-12 bg-background/80 backdrop-blur-xl border-b border-border">
        <Link href="/" className="flex items-center gap-2.5 select-none hover:opacity-85 transition-opacity">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15L18 80H36L50 48L64 80H82L50 15Z" fill="url(#trigarty-nav-gradient-1)" />
            <defs>
              <linearGradient id="trigarty-nav-gradient-1" x1="18" y1="15" x2="82" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#63B7C9" />
                <stop offset="25%" stopColor="#4BC5C7" />
                <stop offset="50%" stopColor="#4DC2B1" />
                <stop offset="75%" stopColor="#A4BE4B" />
                <stop offset="100%" stopColor="#E9A400" />
              </linearGradient>
            </defs>
          </svg>
          <div className="font-sans font-light tracking-[0.25em] text-[13px] flex items-center uppercase">
            <span className="text-trigarty-cyan">T</span>
            <span className="text-trigarty-aqua">R</span>
            <span className="text-trigarty-mint">I</span>
            <span className="text-trigarty-soft">G</span>
            <span className="text-trigarty-fresh font-medium">Λ</span>
            <span className="text-trigarty-olive">R</span>
            <span className="text-trigarty-mustard">T</span>
            <span className="text-trigarty-golden">Y</span>
          </div>
        </Link>
        <Link href="/engage" className="text-xs font-medium text-foreground border border-input px-4 py-1.5 rounded-[2px] tracking-[0.02em] hover:bg-foreground hover:text-background transition-colors">
          Talk With Us
        </Link>
      </nav>

      {/* Main Content */}
      <main className="pt-[140px] pb-[160px] px-6 md:px-12 relative z-10">
        <div className="container-max">
          {/* Header */}
          <div className="border-b border-border pb-12 mb-12 flex flex-col xl:flex-row xl:items-end justify-between gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/" className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors mb-8 group">
                <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
                Back to Overview
              </Link>
              
              <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-trigarty-cyan mb-5 flex items-center gap-2">
                <span className="w-4 h-px bg-trigarty-cyan block"></span>
                EXECUTION FEEDS
              </div>
              
              <h1 className="font-serif text-4xl sm:text-5xl md:text-[64px] font-normal leading-[1.05] tracking-[-0.03em]">
                EMBED TIMELINE &<br />
                <em className="italic text-trigarty-mint font-light">Execution Metrics.</em>
              </h1>
            </motion.div>

            {/* Controls panel: Tabs + Search */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full xl:w-auto"
            >
              {/* Premium Category Filter Tabs */}
              <div className="flex bg-card p-1 border border-border rounded-[4px] overflow-x-auto scrollbar-none">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`px-4 py-1.5 rounded-[2px] text-[11px] font-mono uppercase tracking-[0.08em] whitespace-nowrap transition-all focus:outline-none ${
                      selectedCategory === cat.id
                        ? "bg-foreground text-background font-medium"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>

              {/* Search input */}
              <div className="relative w-full sm:w-[260px] shrink-0">
                <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-3.5 w-3.5 text-muted/60" />
                <input
                  type="text"
                  placeholder="Search embed logs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full bg-card border border-border rounded-[2px] pl-10 pr-4 py-2.5 text-[13px] font-sans text-foreground placeholder:text-muted/50 focus:outline-none focus:border-trigarty-cyan transition-colors"
                />
              </div>
            </motion.div>
          </div>

          {/* List Layout with rich interactive details */}
          <div className="flex flex-col border-t border-border">
            <AnimatePresence mode="popLayout">
              {filteredStudies.map((study, idx) => (
                <motion.div 
                  key={study.slug}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="grid grid-cols-1 lg:grid-cols-[1.8fr_1fr] py-12 border-b border-border transition-all px-4 -mx-4 rounded-xl group relative overflow-hidden"
                  style={{
                    // Creates custom high-end drop shadow glow matching company theme on hover
                    contentVisibility: "auto",
                  }}
                >
                  {/* Subtle dynamic radial glow overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
                    style={{
                      background: `radial-gradient(ellipse 600px 300px at 10% 50%, ${study.colors.glow}, transparent 60%)`
                    }}
                  />

                  {/* Left indicator accent border */}
                  <div 
                    className="absolute left-0 top-0 bottom-0 w-[3px] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center"
                    style={{ backgroundColor: study.colors.glowAccent }}
                  />

                  {/* Narrative Col */}
                  <div className="lg:pr-14 mb-8 lg:mb-0">
                    <div className="flex items-center gap-3">
                      <span className={`font-mono text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 border rounded-[2px] ${study.colors.bg} ${study.colors.text} ${study.colors.border}`}>
                        {study.tag}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="font-mono text-[9px] tracking-[0.08em] uppercase text-muted">Active Stream</span>
                    </div>

                    <h3 className="font-serif text-[28px] font-normal text-foreground tracking-[-0.01em] mt-5 mb-4 group-hover:text-primary transition-colors">
                      {study.client}
                    </h3>
                    
                    <div className="mb-5">
                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted block mb-1">BOTTLENECK IDENTIFIED:</span>
                      <p className="text-[13.5px] text-muted leading-[1.7] font-light font-sans">{study.bottleneck}</p>
                    </div>

                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted block mb-1">OPERATOR DELIVERABLE:</span>
                      <p className="text-[13.5px] text-foreground leading-[1.7] font-light font-sans">{study.outcome}</p>
                    </div>

                    <div className="mt-6 pt-5 border-t border-border/60 flex items-center gap-8">
                      <div>
                        <div className={`font-serif text-2xl font-normal leading-none tracking-[-0.01em] ${study.colors.text}`}>
                          {study.metric}
                        </div>
                        <div className="font-mono text-[8px] uppercase tracking-[0.15em] text-muted mt-2">
                          {study.metricLabel}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Telemetry Operational Details & Navigation link */}
                  <div className="flex flex-col justify-between items-stretch lg:items-end">
                    {/* Live Operator Diagnostics Board */}
                    <div className="bg-card/50 border border-border p-4 rounded-[4px] mb-6 lg:mb-0 w-full max-w-[280px] self-start lg:self-auto">
                      <div className="flex items-center gap-2 border-b border-border pb-2 mb-3">
                        <Activity className={`h-3 w-3 ${study.colors.text} animate-pulse`} />
                        <span className="font-mono text-[9px] tracking-[0.1em] uppercase text-foreground">LIVE DIAGNOSTICS</span>
                      </div>
                      
                      <div className="space-y-2 font-mono text-[10px]">
                        <div className="flex justify-between">
                          <span className="text-muted">VELOCITY STAGE:</span>
                          <span className="text-foreground font-medium">{study.telemetry.velocity}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted">OPERATORS:</span>
                          <span className="text-foreground font-medium">{study.telemetry.team}</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted">LOAD RATING:</span>
                          <span className="text-foreground font-medium text-emerald-500">{study.telemetry.health}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-end">
                      <Link 
                        href={`/log/${study.slug}`} 
                        className="inline-flex items-center gap-1.5 text-[13px] text-muted group-hover:text-foreground font-medium transition-colors group/link py-1"
                      >
                        Launch Detailed Audit
                        <ArrowUpRight className="h-4 w-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>

            {filteredStudies.length === 0 && (
              <div className="text-center py-20 bg-card/10 border border-dashed border-border rounded-xl mt-6">
                <Terminal className="h-8 w-8 text-muted/40 mx-auto mb-4" />
                <p className="text-[14px] text-muted font-light">No active operational logs match the filter diagnostics.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
