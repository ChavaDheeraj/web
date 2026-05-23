"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Activity, Terminal, Settings2, BarChart3, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const unwrappedParams = React.use(params);
  const slug = unwrappedParams.slug;

  const data: Record<string, any> = {
    "aiden-ai-os-architecture": {
      client: "AiDen",
      tag: "AI Eco System & Architecture",
      metric: "Sub-90ms",
      metricLabel: "On-Device Inference Latency",
      bottleneck: "Rebuilding the entire device and operating system architecture to run full-scale Stark-like Jarvis AI assistants natively. Sprints were bottlenecked by complex deep-tech local neural processing integration and resource constraints.",
      outcome: "We embedded an execution team to structure the deep-tech operating system milestones, aligned the device ecosystem hardware timeline, and established lightweight local-first sprint pipelines to secure development momentum.",
      colors: { 
        text: "text-trigarty-cyan", 
        bg: "bg-trigarty-cyan/10", 
        border: "border-trigarty-cyan/20",
        glowAccent: "#63B7C9",
        gradient: "from-trigarty-cyan to-trigarty-aqua"
      },
      chartData: [
        { label: "W1 Audit", before: 20, after: 35 },
        { label: "W2 Pipeline", before: 24, after: 52 },
        { label: "W4 Sprints", before: 22, after: 78 },
        { label: "Month 2", before: 18, after: 94 }
      ],
      chartLabel: "Engineering Velocity (%)",
      timeline: [
        { week: "Week 1–2", title: "Ecosystem Audit", desc: "Reviewed neural processing parameters, mapped device hardware integrations, and cleared developer bottlenecks." },
        { week: "Week 3–4", title: "Milestone Planning", desc: "Constructed the Stark-like Jarvis OS release roadmap, establishing clean local-first sprint pipelines." },
        { week: "Month 2–3", title: "Embedded Acceleration", desc: "Directly managed deep-tech dev team updates, delivering key local offline assistant modules." },
        { week: "Month 4+", title: "Ownership Transition", desc: "Completed operational manuals for local architecture scaling and fully handed off execution. Clean exit." }
      ],
      points: [
        "Slashed device iteration pipeline bottlenecks by 50%",
        "Established sub-90ms local inference pipeline tracks",
        "Built the complete engineering coordination plan for Stark-Jarvis scale assistants"
      ],
      terminalLogs: [
        "[SYS_BOOT] Offline Neural Engine v2.04 initialized on local device hardware.",
        "[NEURAL_CORE] Llama-3-Embedded model weights mapped into localized RAM.",
        "[PIPELINE] Active sprint velocity sync: 94% (+52% increase vs pre-embed).",
        "[STATUS] 0 bottlenecks detected. Local context routing channels cleared."
      ]
    },
    "project-xr-reality-layer": {
      client: "Project XR",
      tag: "AR/VR & Spatial Computing Systems",
      metric: "Sub-2mm",
      metricLabel: "Spatial Anchor Precision",
      bottleneck: "Structuring multi-device spatial tracking layers (Discovery, Navigation, Memory Trails, Quest, Social Canvas) across Mobile, AR glasses, and VR. Sourcing and coordination was fractured across three device platforms.",
      outcome: "We served as operational execution leads. We aligned the product cross-device launch pipeline, created standardized spatial mapping checkpoints, and established a unified team sprint dashboard.",
      colors: { 
        text: "text-trigarty-mint", 
        bg: "bg-trigarty-mint/10", 
        border: "border-trigarty-mint/20",
        glowAccent: "#4DC2B1",
        gradient: "from-trigarty-mint to-trigarty-soft"
      },
      chartData: [
        { label: "W1 Baseline", before: 14.5, after: 12.2 },
        { label: "W3 Dashboard", before: 13.8, after: 7.4 },
        { label: "Month 2", before: 14.1, after: 3.1 },
        { label: "Month 3 Exit", before: 14.8, after: 1.2 }
      ],
      chartLabel: "Spatial Alignment Error (cm)",
      timeline: [
        { week: "Week 1", title: "Platform Diagnosis", desc: "Audited the Discovery, Navigation, and Quest codebases, mapping coordination friction points across AR/VR pods." },
        { week: "Week 2–3", title: "Unified Flow Setup", desc: "Established unified location-aware testing frameworks and integrated multi-platform launch dashboards." },
        { week: "Month 2", title: "Embedded Execution", desc: "Operator aligned mobile-to-wearable milestone pipelines, driving quest layer gamification loops." },
        { week: "Month 3+", title: "Exit Handover", desc: "Transferred complete location-anchoring documentation manuals to Project XR's internal team lead." }
      ],
      points: [
        "Coordinated mobile, AR, and VR development lines into a single sync cadence",
        "Built standard verification loops for location-anchoring algorithms",
        "Delivered Sub-2mm spatial anchoring accuracy across platforms"
      ],
      terminalLogs: [
        "[SPATIAL_SYNC] Device coordinate anchor mapping initialized: Mobile / AR / VR.",
        "[ALIGNMENT] Spatial drift rate dropped to 1.2mm (optimal range benchmark).",
        "[CHECKPOINTS] 5 Location-aware reality canvas layers active and synced.",
        "[STATUS] Multi-device sprint pipeline optimized. Handover logs completed."
      ]
    },
    "ewr-war-room-coordination": {
      client: "EWR",
      tag: "Operations & Event Scale",
      metric: "99.999%",
      metricLabel: "Event Network Reliability",
      bottleneck: "Building high-stakes event coordination software designed to serve as a back-of-house team war room. The complex real-time communication stack was delayed by synchronization pipeline blockers and undefined scope parameters.",
      outcome: "We embedded operational systems operators. We simplified product scopes, restructured coordination sprints, set up strict real-time telemetry testing phases, and established high-intensity delivery lanes.",
      colors: { 
        text: "text-trigarty-golden", 
        bg: "bg-trigarty-golden/10", 
        border: "border-trigarty-golden/20",
        glowAccent: "#E9A400",
        gradient: "from-trigarty-golden to-trigarty-mustard"
      },
      chartData: [
        { label: "W1 Delay", before: 8.2, after: 6.4 },
        { label: "W3 Scope", before: 7.9, after: 2.8 },
        { label: "Month 2", before: 8.4, after: 1.1 },
        { label: "Month 3 Exit", before: 8.1, after: 0.4 }
      ],
      chartLabel: "Sync Dispatch Latency (seconds)",
      timeline: [
        { week: "Week 1–2", title: "Friction Audit", desc: "Reviewed event dispatch mechanics, telemetry structures, and mapped latency hotspots." },
        { week: "Week 3–4", title: "Sprint Re-Architecting", desc: "Cleaned real-time sprint lines, focusing strictly on coordinator dispatch features." },
        { week: "Month 2–3", title: "Operational Embed", desc: "Managed direct feature sprints, ensuring EWR war room stability under high simulated load." },
        { week: "Month 4+", title: "Exit Alignment", desc: "Provided comprehensive telemetries documentation, exiting cleanly with stable coordinates." }
      ],
      points: [
        "Structured high-stakes event coordinator telemetry sprint lines",
        "Engineered real-time socket mesh for 99.999% dispatch reliability",
        "Wiped out development blocks by refining EWR product scope boundaries"
      ],
      terminalLogs: [
        "[WAR_ROOM] Telemetry server dispatched inside simulated event workload.",
        "[SOCKET_STREAM] Operational back-of-house connection established cleanly.",
        "[LATENCY] Real-time sync dispatch stable under high-simulated load.",
        "[STATUS] High-intensity delivery lanes verified. Core features finalized."
      ]
    }
  };

  const study = data[slug] || data["aiden-ai-os-architecture"];
  
  // Interactive Tabs State
  const [activeTab, setActiveTab] = useState("overview");
  
  // Interactive Milestone Timeline State
  const [selectedMilestone, setSelectedMilestone] = useState(0);

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 selection:text-primary">
      {/* Dynamic Grid Background Accent */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] pointer-events-none" />

      {/* Nav — matches main site */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-[63px] items-center justify-between px-6 md:px-12 bg-background/95 backdrop-blur-xl border-b border-border">
        <div className="h-[3px] absolute top-0 left-0 right-0" style={{ background: "linear-gradient(90deg,#63B7C9,#4BC5C7,#4DC2B1,#5CC697,#76C47C,#A4BE4B,#CCB10A,#E9A400)" }} />
        <Link href="/" className="flex items-center gap-3 select-none hover:opacity-80 transition-opacity">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15L18 80H36L50 48L64 80H82L50 15Z" fill="url(#tl-g-detail)" />
            <defs>
              <linearGradient id="tl-g-detail" x1="18" y1="15" x2="82" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%"   stopColor="#63B7C9" />
                <stop offset="50%"  stopColor="#4DC2B1" />
                <stop offset="100%" stopColor="#E9A400" />
              </linearGradient>
            </defs>
          </svg>
          <div className="font-sans font-light tracking-[0.25em] text-[14px] uppercase flex items-center">
            <span className="text-[#63B7C9]">T</span>
            <span className="text-[#4BC5C7]">R</span>
            <span className="text-[#4DC2B1]">I</span>
            <span className="text-[#5CC697]">G</span>
            <span className="text-[#76C47C] font-medium">Λ</span>
            <span className="text-[#A4BE4B]">R</span>
            <span className="text-[#CCB10A]">T</span>
            <span className="text-[#E9A400]">Y</span>
          </div>
        </Link>
        <Link href="/" className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-[0.08em] uppercase text-muted hover:text-foreground transition-colors">
          <ArrowLeft className="h-3 w-3" /> Back to site
        </Link>
      </nav>

      {/* Main Content */}
      <main className="pt-[140px] pb-[160px] px-6 md:px-12 relative z-10">
        <div className="max-w-[900px] mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="border-b border-border pb-10 mb-10"
          >
            <Link href="/log" className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors mb-8 group">
              <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
              Back to Embed Logs
            </Link>
            
            <div className={`font-mono text-[10px] uppercase tracking-[0.22em] ${study.colors.text} mb-5 flex items-center gap-2`}>
              <span className="w-4 h-px block" style={{ backgroundColor: study.colors.glowAccent }}></span>
              DETAILED EXECUTION REPORT
            </div>
            
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <span className={`font-mono text-[9px] tracking-[0.15em] uppercase px-2.5 py-1 border rounded-[2px] ${study.colors.bg} ${study.colors.text} ${study.colors.border}`}>
                  {study.tag}
                </span>
                <h1 className="font-serif text-5xl sm:text-6xl md:text-[72px] font-normal leading-[1.08] tracking-[-0.03em] mt-5">
                  {study.client}
                </h1>
              </div>

              <div className="flex flex-col items-start md:items-end gap-1 shrink-0 pb-1">
                <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">KEY DELIVERED METRIC</span>
                <div className={`font-serif text-3.5xl md:text-4xl font-normal leading-none ${study.colors.text}`}>
                  {study.metric}
                </div>
                <span className="font-mono text-[10px] uppercase tracking-[0.05em] text-foreground/80 mt-1">
                  {study.metricLabel}
                </span>
              </div>
            </div>

            {/* Premium Dashboard Menu Tabs */}
            <div className="flex bg-card p-1 border border-border rounded-[4px] mt-12 w-full overflow-x-auto scrollbar-none">
              <button
                onClick={() => setActiveTab("overview")}
                className={`flex-1 px-4 py-3 rounded-[2px] text-[11.5px] font-mono uppercase tracking-[0.1em] whitespace-nowrap transition-all focus:outline-none flex items-center justify-center gap-2 ${
                  activeTab === "overview"
                    ? "bg-foreground text-background font-medium"
                    : "text-muted hover:text-foreground hover:bg-muted/10"
                }`}
              >
                <Settings2 className="h-3.5 w-3.5" />
                Operational Overview
              </button>
              <button
                onClick={() => setActiveTab("milestones")}
                className={`flex-1 px-4 py-3 rounded-[2px] text-[11.5px] font-mono uppercase tracking-[0.1em] whitespace-nowrap transition-all focus:outline-none flex items-center justify-center gap-2 ${
                  activeTab === "milestones"
                    ? "bg-foreground text-background font-medium"
                    : "text-muted hover:text-foreground hover:bg-muted/10"
                }`}
              >
                <Activity className="h-3.5 w-3.5" />
                Interactive Lifecycle ({study.timeline.length})
              </button>
              <button
                onClick={() => setActiveTab("analytics")}
                className={`flex-1 px-4 py-3 rounded-[2px] text-[11.5px] font-mono uppercase tracking-[0.1em] whitespace-nowrap transition-all focus:outline-none flex items-center justify-center gap-2 ${
                  activeTab === "analytics"
                    ? "bg-foreground text-background font-medium"
                    : "text-muted hover:text-foreground hover:bg-muted/10"
                }`}
              >
                <BarChart3 className="h-3.5 w-3.5" />
                Telemetry Analytics
              </button>
            </div>
          </motion.div>

          {/* Interactive Report Content Area */}
          <div className="min-h-[400px]">
            <AnimatePresence mode="wait">
              {activeTab === "overview" && (
                <motion.div
                  key="overview-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-12"
                >
                  {/* Two Column Friction / Solution layout */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-card border border-border p-8 rounded-[4px] relative">
                      <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted block mb-3">01 / Friction Bottleneck</span>
                      <h3 className="font-serif text-[22px] font-normal mb-4">What was holding {study.client} back?</h3>
                      <p className="text-[13.5px] text-muted leading-[1.75] font-light font-sans">{study.bottleneck}</p>
                    </div>

                    <div className="bg-card border border-border p-8 rounded-[4px] relative">
                      <span className={`font-mono text-[9px] uppercase tracking-[0.12em] ${study.colors.text} block mb-3`}>02 / Embedded Acceleration</span>
                      <h3 className="font-serif text-[22px] font-normal mb-4">How we deployed execution lanes:</h3>
                      <p className="text-[13.5px] text-muted leading-[1.75] font-light font-sans">{study.outcome}</p>
                    </div>
                  </div>

                  {/* Core Deliverables Checkpoints */}
                  <div className="bg-card/30 border border-border p-8 rounded-[4px]">
                    <h3 className="font-serif text-[24px] font-normal mb-6">Execution Deliverables Checkpoints</h3>
                    <div className="space-y-4">
                      {study.points.map((point: string, idx: number) => (
                        <div key={idx} className="flex items-start gap-4">
                          <CheckCircle2 className={`h-5 w-5 shrink-0 mt-0.5 ${study.colors.text}`} />
                          <span className="text-[14px] text-foreground leading-[1.65] font-light font-sans">{point}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "milestones" && (
                <motion.div
                  key="milestones-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8"
                >
                  {/* Left Column Interactive Timeline Selection */}
                  <div className="space-y-3">
                    <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted block mb-4">Operational Sprints:</span>
                    {study.timeline.map((item: any, idx: number) => {
                      const isActive = selectedMilestone === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => setSelectedMilestone(idx)}
                          className={`w-full p-4 border rounded-[4px] text-left transition-all focus:outline-none relative overflow-hidden flex items-center justify-between ${
                            isActive 
                              ? "bg-card text-foreground" 
                              : "border-border hover:border-border/80 bg-card/20 text-muted"
                          }`}
                          style={isActive ? { borderColor: study.colors.glowAccent } : {}}
                        >
                          {isActive && (
                            <div className={`absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b ${study.colors.gradient}`} />
                          )}
                          <div>
                            <span className="font-mono text-[9px] uppercase tracking-[0.12em] block text-muted mb-1">{item.week}</span>
                            <span className="text-[14px] font-medium leading-none">{item.title}</span>
                          </div>
                          <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${isActive ? study.colors.text : "text-muted/40"}`} />
                        </button>
                      );
                    })}
                  </div>

                  {/* Right Column Milestone Focus Board */}
                  <div className="bg-card border border-border p-8 rounded-[4px] flex flex-col justify-between relative overflow-hidden">
                    <div className={`absolute top-0 right-0 p-4 font-mono text-[11px] font-bold ${study.colors.text} bg-card/85`}>
                      STAGE 0{selectedMilestone + 1}
                    </div>
                    
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted block mb-2">Milestone Deep Dive</span>
                      <h3 className="font-serif text-[28px] font-normal leading-tight mb-4">
                        {study.timeline[selectedMilestone].title}
                      </h3>
                      <div className="font-mono text-[10px] text-muted uppercase tracking-[0.08em] mb-4">
                        Timeline: {study.timeline[selectedMilestone].week}
                      </div>
                      <p className="text-[14px] text-muted leading-[1.8] font-light font-sans">
                        {study.timeline[selectedMilestone].desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-6 border-t border-border flex justify-between items-center text-[11px] font-mono">
                      <span className="text-muted">STATUS:</span>
                      <span className="font-bold tracking-[0.08em] flex items-center gap-1.5" style={{ color: study.colors.glowAccent }}>
                        <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: study.colors.glowAccent }} />
                        COMPLETED & AUDITED
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === "analytics" && (
                <motion.div
                  key="analytics-tab"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8"
                >
                  {/* analytical charts and live console */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* SVG Analytics Chart */}
                    <div className="bg-card border border-border p-6 rounded-[4px]">
                      <div className="flex items-center justify-between mb-6">
                        <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-muted">{study.chartLabel}</span>
                        <span 
                          className="font-mono text-[9px] uppercase font-bold px-2 py-0.5 rounded-[2px]"
                          style={{ color: study.colors.glowAccent, backgroundColor: `${study.colors.glowAccent}15` }}
                        >
                          PRE vs POST EMBED
                        </span>
                      </div>

                      {/* Pure SVG responsive chart */}
                      <div className="relative h-[220px] w-full flex items-end justify-between px-2 pt-6">
                        {study.chartData.map((item: any, i: number) => {
                          // Scaling factor
                          const maxVal = Math.max(...study.chartData.map((d: any) => Math.max(d.before, d.after)));
                          const beforeHeight = `${(item.before / maxVal) * 160}px`;
                          const afterHeight = `${(item.after / maxVal) * 160}px`;

                          return (
                            <div key={i} className="flex flex-col items-center gap-3 flex-1">
                              <div className="flex items-end gap-2.5 h-[160px]">
                                {/* Before Bar */}
                                <div className="group/bar relative flex flex-col items-center">
                                  <div 
                                    className="w-4 bg-muted/20 hover:bg-muted/40 transition-colors rounded-t-[1px]" 
                                    style={{ height: beforeHeight }}
                                  />
                                  <span className="absolute -top-6 font-mono text-[9px] text-muted opacity-0 group-hover/bar:opacity-100 transition-opacity">
                                    {item.before}
                                  </span>
                                </div>
                                {/* After Bar */}
                                <div className="group/bar2 relative flex flex-col items-center">
                                  <div 
                                    className={`w-4 bg-gradient-to-t ${study.colors.gradient} transition-colors rounded-t-[1px]`}
                                    style={{ height: afterHeight }}
                                  />
                                  <span className="absolute -top-6 font-mono text-[9px] opacity-0 group-hover/bar2:opacity-100 transition-opacity" style={{ color: study.colors.glowAccent }}>
                                    {item.after}
                                  </span>
                                </div>
                              </div>
                              <span className="font-mono text-[8px] uppercase tracking-[0.08em] text-muted/80">{item.label}</span>
                            </div>
                          );
                        })}
                      </div>

                      {/* Legend */}
                      <div className="flex gap-4 justify-center items-center mt-6 pt-4 border-t border-border text-[9px] font-mono text-muted">
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 bg-muted/20 rounded-[1px]" />
                          <span>Pre-Embed Friction</span>
                        </div>
                        <div className="flex items-center gap-1.5">
                          <div className="w-2.5 h-2.5 rounded-[1px]" style={{ backgroundColor: study.colors.glowAccent }} />
                          <span>Post-Trigarty Embed</span>
                        </div>
                      </div>
                    </div>

                    {/* Developer Terminal Console Sim */}
                    <div className="bg-card border border-border rounded-[4px] flex flex-col justify-between overflow-hidden">
                      <div className="bg-muted/40 px-4 py-3 border-b border-border flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Terminal className="h-3.5 w-3.5 text-muted" />
                          <span className="font-mono text-[10px] uppercase tracking-[0.1em] text-muted">SYSTEM TELEMETRY ENGINE</span>
                        </div>
                        <div className="flex gap-1.5">
                          <div className="w-2 h-2 rounded-full bg-red-500/50" />
                          <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                          <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                        </div>
                      </div>

                      <div className="p-5 font-mono text-[10.5px] leading-[1.6] space-y-3.5 bg-black/5 flex-1 min-h-[180px]">
                        {study.terminalLogs.map((log: string, idx: number) => (
                          <div key={idx} className="text-muted/95 flex items-start gap-2.5">
                            <span className="select-none" style={{ color: study.colors.glowAccent }}>&gt;</span>
                            <p>{log}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="border-t border-border px-6 md:px-12 py-6 flex items-center justify-between flex-wrap gap-4">
        <Link href="/" className="flex items-center gap-3 select-none hover:opacity-80 transition-opacity">
          <svg className="w-4 h-4 shrink-0" viewBox="0 0 100 100" fill="none">
            <path d="M50 15L18 80H36L50 48L64 80H82L50 15Z" fill="url(#tl-g-footer)" />
            <defs>
              <linearGradient id="tl-g-footer" x1="18" y1="15" x2="82" y2="80" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#63B7C9" />
                <stop offset="100%" stopColor="#E9A400" />
              </linearGradient>
            </defs>
          </svg>
          <div className="font-sans font-light tracking-[0.25em] text-[13px] uppercase flex items-center">
            <span className="text-[#63B7C9]">T</span><span className="text-[#4BC5C7]">R</span>
            <span className="text-[#4DC2B1]">I</span><span className="text-[#5CC697]">G</span>
            <span className="text-[#76C47C] font-medium">Λ</span><span className="text-[#A4BE4B]">R</span>
            <span className="text-[#CCB10A]">T</span><span className="text-[#E9A400]">Y</span>
          </div>
        </Link>
        <p className="font-mono text-[9px] tracking-[0.1em] uppercase text-muted/40">
          © 2025 Trigarty. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
