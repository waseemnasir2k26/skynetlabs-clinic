"use client";

import dynamic from "next/dynamic";
import { motion } from "framer-motion";

const HeroCanvas = dynamic(() => import("./HeroCanvas"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 bg-gradient-to-br from-[#0A2540] via-[#0E2E52] to-[#0F766E]" />
  ),
});

const STATS = [
  { v: "10+", l: "Years frontline nursing" },
  { v: "NMC", l: "Registered nurse" },
  { v: "UK-wide", l: "Care homes supported" },
];

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] w-full overflow-hidden text-[color:var(--color-ivory)]"
    >
      <div className="absolute inset-0">
        <HeroCanvas />
      </div>
      <div className="absolute inset-0 hero-vignette pointer-events-none" />
      <div className="absolute inset-0 grain pointer-events-none" />

      <div className="container-page relative z-10 flex flex-col justify-center min-h-[100svh] pt-28 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md px-3.5 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-white/85">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2DD4BF]" />
            </span>
            UK Clinical Lead Nurse · NMC Registered
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.8, ease: "easeOut" }}
            className="mt-6 font-display text-[clamp(2.4rem,6vw,4.4rem)] leading-[1.02] font-semibold tracking-tight"
          >
            Your CQC inspection is&nbsp;coming.
            <br />
            <span className="bg-gradient-to-r from-[#2DD4BF] via-[#14B8A6] to-[#FAF7F2] bg-clip-text text-transparent">
              Let&apos;s make sure you pass&nbsp;it.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 max-w-2xl text-lg md:text-xl text-white/80 leading-relaxed"
          >
            Registered Clinical Lead Nurse offering hands-on compliance,
            safeguarding and care-planning support to UK care homes, nursing
            agencies and domiciliary providers. Practical help from someone who
            has run the units you&apos;re trying to keep inspection-ready.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a href="#contact" className="btn-primary">
              Book a Compliance Call
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                <path
                  d="M5 12h14M13 6l6 6-6 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a href="#process" className="btn-ghost">
              See How I Work
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 1 }}
            className="mt-14 grid grid-cols-3 max-w-xl gap-6 border-t border-white/15 pt-8"
          >
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="font-display text-2xl md:text-3xl font-semibold text-[#2DD4BF]">
                  {s.v}
                </div>
                <div className="text-xs md:text-sm text-white/70 mt-1 leading-snug">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60 text-xs tracking-[0.3em] uppercase">
          <span>Scroll</span>
          <span className="block h-10 w-px bg-gradient-to-b from-white/60 to-transparent" />
        </div>
      </div>
    </section>
  );
}
