"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function PrinciplesPage() {
  const sections = [
    {
      num: "I.",
      title: "Execution is the Only Real Moat",
      content: "In the early days of a company, strategy is cheap. Competitors can copy your product features, mock your marketing copy, and raise capital at identical valuations. What they cannot copy is your velocity. A company that ships twice as fast as its nearest competitor will gather twice as much feedback, iterate twice as quickly, and out-evolve the market before others can organize a board meeting. Execution is not a downstream concern — it is the core strategic advantage."
    },
    {
      num: "II.",
      title: "The Illusion of Advisory Progress",
      content: "Consultants deliver decks. Advisors deliver opinions. Both are useful for allocating blame, but neither will help you hire your next principal engineer or unblock a stalled product release. Startups do not fail because they lacked a 100-page operational roadmap; they fail because the daily loop of execution broke down. We believe in direct operational ownership. If a bottleneck exists, we don't present an analysis on it — we embed inside and remove it."
    },
    {
      num: "III.",
      title: "Speed is an Architectural Choice",
      content: "When a team is slow, founders often blame individual output or motivation. This is almost always incorrect. Teams are slow because their systems force them to be slow. Ambiguous ownership, bloated meeting structures, undefined decision frameworks, and approval bottlenecks degrade momentum. We simplify before we scale. We design lightweight, bulletproof accountability systems that restore personal ownership and clear the field for rapid delivery."
    },
    {
      num: "IV.",
      title: "Deliberate Self-Extraction",
      content: "An operator who makes themselves indispensable has failed. The ultimate goal of every embed is to build systems and train internal owners so stable that the company runs faster after we exit. We document every protocol, map every decision flow, and test the new structure rigorously. We exit deliberately, leaving behind a highly disciplined operational machine that requires zero external guidance to sustain its velocity."
    }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 selection:text-primary">
      {/* Editorial Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-[60px] items-center justify-between px-6 md:px-12 bg-background/80 backdrop-blur-xl border-b border-border">
        <Link href="/" className="flex items-center gap-2.5 select-none hover:opacity-85 transition-opacity">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15L18 80H36L50 48L64 80H82L50 15Z" fill="url(#trigarty-principles-gradient)" />
            <defs>
              <linearGradient id="trigarty-principles-gradient" x1="18" y1="15" x2="82" y2="80" gradientUnits="userSpaceOnUse">
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
      <main className="pt-[140px] pb-[160px] px-6 md:px-12">
        <div className="max-w-[740px] mx-auto">
          {/* Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 pb-12 border-b border-border"
          >
            <Link href="/" className="inline-flex items-center gap-2 text-[11px] font-mono uppercase tracking-[0.15em] text-muted hover:text-foreground transition-colors mb-8 group">
              <ArrowLeft className="h-3 w-3 group-hover:-translate-x-1 transition-transform" />
              Back to Overview
            </Link>
            
            <div className="font-mono text-[10px] uppercase tracking-[0.22em] text-trigarty-mint mb-5 flex items-center gap-2">
              <span className="w-4 h-px bg-trigarty-mint block"></span>
              METHODOLOGY ESSAY
            </div>
            
            <h1 className="font-serif text-4xl sm:text-5xl md:text-[64px] font-normal leading-[1.05] tracking-[-0.03em] mb-6">
              Execution is the moat.<br />
              <em className="italic text-trigarty-cyan font-light">Strategy is cheap.</em>
            </h1>
            
            <p className="text-[15px] font-mono uppercase tracking-[0.05em] text-muted leading-relaxed mt-8">
              Why fast companies win, how structure breeds velocity, and our approach to embedded operational leadership.
            </p>
          </motion.div>

          {/* Typography Body */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="prose prose-neutral max-w-none"
          >
            {sections.map((section, idx) => (
              <div key={idx} className="mb-14 relative grid grid-cols-1 md:grid-cols-[60px_1fr] gap-6 items-start">
                <span className="font-serif text-3xl italic text-trigarty-mint/70 block pt-1">{section.num}</span>
                <div>
                  <h3 className="font-serif text-2xl font-normal text-foreground tracking-[-0.01em] mb-4.5">{section.title}</h3>
                  <p className="text-[15px] text-muted leading-[1.8] font-light font-sans text-justify">
                    {section.content}
                  </p>
                </div>
              </div>
            ))}

            {/* Sidebar Callout */}
            <div className="bg-card p-8 rounded-[4px] border border-border my-12 relative overflow-hidden group">
              <div className="absolute top-0 left-0 bottom-0 w-[4px] bg-trigarty-cyan" />
              <div className="font-mono text-[9px] uppercase tracking-[0.18em] text-muted mb-3">OPERATOR'S CREED</div>
              <p className="font-serif text-[18px] italic text-foreground leading-[1.65] font-light">
                "We do not build software dashboards that summarize reports. We write the tracking pipelines, run the onboarding calls, design the sprint boards, and step out only when the company's internal team runs faster than we ever did."
              </p>
            </div>

            <p className="text-[15px] text-muted leading-[1.8] font-light font-sans mb-12">
              If your company has reached a stage where coordination overhead exceeds shipping velocity, or where critical functional operations (hiring, systems scaling, product iterations) are blocked by founder bandwidth — let's construct a cleaner system together.
            </p>

            <div className="pt-8 border-t border-border flex justify-between items-center">
              <div>
                <div className="font-mono text-[10px] text-muted uppercase tracking-[0.1em]">Author</div>
                <div className="text-[14px] font-medium text-foreground mt-1">Trigarty Core Operators</div>
              </div>
              <Link href="/engage" className="inline-flex items-center gap-2 bg-foreground text-background font-sans text-[13px] font-medium px-5 py-3 rounded-[2px] tracking-[0.01em] hover:bg-trigarty-cyan hover:text-white transition-colors">
                Initiate Onboarding Diagnostics
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
