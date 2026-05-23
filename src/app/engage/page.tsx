"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import Link from "next/link";

export default function EngagePage() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    stage: "",
    teamSize: "",
    bottleneck: "",
    founderName: "",
    email: "",
    notes: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const stages = ["Seed / Pre-revenue", "Series A Growth", "Series B Scale", "Bootstrapped & Profitable"];
  const teamSizes = ["1–10 people", "11–40 people", "41–100 people", "100+ people"];
  const bottlenecks = [
    "Founder is de facto COO / bandwidth constraint",
    "Team is busy but product shipping is constantly delayed",
    "Critical roles (like VP/Head of) are stalled for 3+ months",
    "Growth has fractured our internal coordination systems"
  ];

  const handleSelect = (key: string, val: string) => {
    setFormData(prev => ({ ...prev, [key]: val }));
  };

  const handleNext = () => {
    if (step === 1 && (!formData.stage || !formData.teamSize)) return;
    if (step === 2 && !formData.bottleneck) return;
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.founderName || !formData.email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-foreground relative selection:bg-primary/20 selection:text-primary">
      {/* Editorial Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex h-[60px] items-center justify-between px-6 md:px-12 bg-background/80 backdrop-blur-xl border-b border-border">
        <Link href="/" className="flex items-center gap-2.5 select-none hover:opacity-85 transition-opacity">
          <svg className="w-5 h-5 shrink-0" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M50 15L18 80H36L50 48L64 80H82L50 15Z" fill="url(#trigarty-engage-gradient)" />
            <defs>
              <linearGradient id="trigarty-engage-gradient" x1="18" y1="15" x2="82" y2="80" gradientUnits="userSpaceOnUse">
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
        <span className="text-[10px] font-mono tracking-[0.1em] text-muted">ONBOARDING GATEWAY</span>
      </nav>

      {/* Main Content */}
      <main className="pt-[140px] pb-[160px] px-6 md:px-12 min-h-screen flex items-center justify-center">
        <div className="w-full max-w-[620px] bg-card border border-border p-8 sm:p-12 rounded-[4px] relative overflow-hidden">
          {/* Neon accent top-border bar */}
          <div className="absolute top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-trigarty-cyan via-trigarty-mint to-trigarty-golden" />

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Progress bar */}
              <div className="flex justify-between items-center pb-6 border-b border-border mb-6">
                <div className="font-mono text-[9px] uppercase tracking-[0.15em] text-muted">Diagnostic Stage {step} of 3</div>
                <div className="flex gap-2">
                  <div className={`h-1.5 w-10 rounded-full transition-all duration-300 ${step >= 1 ? "bg-trigarty-cyan" : "bg-border"}`} />
                  <div className={`h-1.5 w-10 rounded-full transition-all duration-300 ${step >= 2 ? "bg-trigarty-mint" : "bg-border"}`} />
                  <div className={`h-1.5 w-10 rounded-full transition-all duration-300 ${step >= 3 ? "bg-trigarty-golden" : "bg-border"}`} />
                </div>
              </div>

              <AnimatePresence mode="wait">
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="font-serif text-[26px] font-normal leading-tight mb-2">Let's scope your team structure.</h2>
                      <p className="text-[13px] text-muted font-light">Select your company's current stage and headcount.</p>
                    </div>

                    <div className="space-y-4">
                      <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted block">Company Stage:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {stages.map((stage, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSelect("stage", stage)}
                            className={`p-4 border rounded-[2px] text-left text-[13px] transition-colors focus:outline-none ${
                              formData.stage === stage 
                                ? "border-trigarty-cyan bg-trigarty-cyan/5 text-foreground font-medium" 
                                : "border-border hover:border-trigarty-cyan/50 text-muted"
                            }`}
                          >
                            {stage}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-4 pt-2">
                      <span className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted block">Current Headcount:</span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {teamSizes.map((size, idx) => (
                          <button
                            key={idx}
                            type="button"
                            onClick={() => handleSelect("teamSize", size)}
                            className={`p-4 border rounded-[2px] text-left text-[13px] transition-colors focus:outline-none ${
                              formData.teamSize === size 
                                ? "border-trigarty-cyan bg-trigarty-cyan/5 text-foreground font-medium" 
                                : "border-border hover:border-trigarty-cyan/50 text-muted"
                            }`}
                          >
                            {size}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="font-serif text-[26px] font-normal leading-tight mb-2">Identify the core constraint.</h2>
                      <p className="text-[13px] text-muted font-light">Where is operational friction actively degrading velocity?</p>
                    </div>

                    <div className="space-y-3">
                      {bottlenecks.map((bottleneck, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => handleSelect("bottleneck", bottleneck)}
                          className={`w-full p-4 border rounded-[2px] text-left text-[13px] transition-all focus:outline-none flex justify-between items-center ${
                            formData.bottleneck === bottleneck 
                              ? "border-trigarty-mint bg-trigarty-mint/5 text-foreground font-medium" 
                              : "border-border hover:border-trigarty-mint/50 text-muted"
                          }`}
                        >
                          <span className="max-w-[90%]">{bottleneck}</span>
                          {formData.bottleneck === bottleneck && <Check className="h-4 w-4 text-trigarty-mint shrink-0" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.4 }}
                    className="space-y-6"
                  >
                    <div>
                      <h2 className="font-serif text-[26px] font-normal leading-tight mb-2">Onboarding Diagnostics Portal</h2>
                      <p className="text-[13px] text-muted font-light">Provide your diagnostics contact coordinates to finalize onboarding routing.</p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted block mb-2">Your Name:</label>
                        <input
                          type="text"
                          required
                          value={formData.founderName}
                          onChange={(e) => setFormData(prev => ({ ...prev, founderName: e.target.value }))}
                          placeholder="e.g. Liam Chen"
                          className="w-full bg-background border border-border rounded-[2px] px-4 py-3 text-[13px] font-sans text-foreground focus:outline-none focus:border-trigarty-golden transition-colors"
                        />
                      </div>

                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted block mb-2">Work Email Address:</label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                          placeholder="e.g. liam@company.co"
                          className="w-full bg-background border border-border rounded-[2px] px-4 py-3 text-[13px] font-sans text-foreground focus:outline-none focus:border-trigarty-golden transition-colors"
                        />
                      </div>

                      <div>
                        <label className="font-mono text-[9px] uppercase tracking-[0.1em] text-muted block mb-2">Additional Context (Optional):</label>
                        <textarea
                          value={formData.notes}
                          onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
                          placeholder="Brief notes on timeline, current team makeup, etc."
                          rows={3}
                          className="w-full bg-background border border-border rounded-[2px] px-4 py-3 text-[13px] font-sans text-foreground focus:outline-none focus:border-trigarty-golden transition-colors resize-none"
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Action Buttons */}
              <div className="flex justify-between items-center pt-8 border-t border-border mt-8">
                {step > 1 ? (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-[0.1em] text-muted hover:text-foreground transition-colors py-2 focus:outline-none"
                  >
                    <ArrowLeft className="h-3.5 w-3.5" />
                    Back
                  </button>
                ) : (
                  <Link
                    href="/"
                    className="inline-flex items-center gap-1.5 text-[12px] font-mono uppercase tracking-[0.1em] text-muted hover:text-foreground transition-colors py-2"
                  >
                    Cancel
                  </Link>
                )}

                {step < 3 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={(step === 1 && (!formData.stage || !formData.teamSize)) || (step === 2 && !formData.bottleneck)}
                    className="inline-flex items-center gap-2 bg-foreground text-background font-sans text-[13px] font-medium px-6 py-3 rounded-[2px] tracking-[0.01em] hover:bg-trigarty-cyan hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none focus:outline-none"
                  >
                    Next Step
                    <ArrowRight className="h-4 w-4" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={!formData.founderName || !formData.email}
                    className="inline-flex items-center gap-2 bg-foreground text-background font-sans text-[13px] font-medium px-6 py-3 rounded-[2px] tracking-[0.01em] hover:bg-trigarty-mint hover:text-white transition-colors disabled:opacity-30 disabled:pointer-events-none focus:outline-none"
                  >
                    Submit Diagnostics
                    <Check className="h-4 w-4" />
                  </button>
                )}
              </div>
            </form>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-8 space-y-6"
            >
              <div className="h-16 w-16 bg-trigarty-mint/15 text-trigarty-mint rounded-full flex items-center justify-center mx-auto mb-4 border border-trigarty-mint/30">
                <Check className="h-8 w-8" />
              </div>

              <h2 className="font-serif text-[32px] font-normal leading-tight">Diagnostic details submitted.</h2>
              
              <div className="max-w-[420px] mx-auto text-[14px] text-muted font-light leading-[1.7] space-y-4">
                <p>
                  Thank you for submitting your onboarding details. Liam and our principal operators have been alerted.
                </p>
                <p className="font-mono text-[10px] tracking-[0.1em] text-trigarty-cyan uppercase">
                  Response window: Under 24 Business Hours
                </p>
                <p>
                  We are preparing a preliminary execution audit with custom diagnostics mapped directly to your stage.
                </p>
              </div>

              <div className="pt-6">
                <Link
                  href="/"
                  className="inline-flex items-center justify-center bg-foreground text-background font-sans text-[13px] font-medium px-6 py-3 rounded-[2px] tracking-[0.01em] hover:bg-trigarty-cyan hover:text-white transition-colors"
                >
                  Return to Overview
                </Link>
              </div>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}
