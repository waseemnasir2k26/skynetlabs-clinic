"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const QUOTES = [
  {
    q: "We engaged SKYNETLABS Clinic six weeks before our CQC inspection and the difference was night and day. She rewrote our care plans, cleaned up our MAR charts and briefed every shift leader personally. We moved from Requires Improvement to Good on the first re-inspection, and the feedback on documentation was genuinely glowing.",
    n: "Margaret Holloway",
    r: "Registered Manager",
    o: "Oakmead House Care Home, Sheffield",
  },
  {
    q: "I've worked with compliance consultants before and most hand you a 90-page report then disappear. This was different. Practical, clinically credible advice, delivered by someone who clearly knew what a handover looks like at 7am. Our safeguarding referral process is now something I'm genuinely proud of.",
    n: "David Okonkwo",
    r: "Operations Director",
    o: "Meridian Care Group, Birmingham",
  },
  {
    q: "As a nursing agency supplying complex-care packages, our documentation was our weakest link. The policy suite we received was tailored to our service, not a template. Our contracting NHS trust specifically commented on the quality of our clinical governance paperwork at our last review meeting.",
    n: "Fiona Carmichael",
    r: "Managing Director",
    o: "Thistle Nursing Solutions, Edinburgh",
  },
];

export default function Testimonials() {
  const [i, setI] = useState(0);
  const active = QUOTES[i];
  return (
    <section
      id="testimonials"
      className="relative py-24 md:py-32 bg-[color:var(--color-navy)] text-[color:var(--color-ivory)] overflow-hidden"
    >
      <div className="absolute -top-40 left-1/4 w-[30rem] h-[30rem] rounded-full bg-[#0F766E]/30 blur-[140px] pointer-events-none" />
      <div className="container-page relative">
        <div className="flex items-end justify-between flex-wrap gap-4">
          <div>
            <span className="text-xs uppercase tracking-[0.22em] text-[#2DD4BF] font-medium">
              What clients say
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
              Real outcomes, <br />
              <span className="text-[#2DD4BF]">from real care providers.</span>
            </h2>
          </div>
          <div className="flex gap-2">
            {QUOTES.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setI(idx)}
                aria-label={`Quote ${idx + 1}`}
                className={`h-1.5 rounded-full transition-all ${
                  idx === i ? "w-10 bg-[#2DD4BF]" : "w-5 bg-white/20"
                }`}
              />
            ))}
          </div>
        </div>

        <motion.blockquote
          key={i}
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-14 max-w-4xl"
        >
          <svg
            className="text-[#2DD4BF] mb-6"
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="currentColor"
          >
            <path d="M0 32V20C0 12 4 6 14 4l2 4c-5 1-8 4-8 10h6v14H0zm22 0V20c0-8 4-14 14-16l2 4c-5 1-8 4-8 10h6v14H22z" />
          </svg>
          <p className="font-display text-2xl md:text-3xl leading-[1.4] text-white/92">
            &ldquo;{active.q}&rdquo;
          </p>
          <footer className="mt-8 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0F766E] to-[#2DD4BF] flex items-center justify-center font-display font-semibold text-lg">
              {active.n
                .split(" ")
                .map((w) => w[0])
                .join("")}
            </div>
            <div>
              <div className="font-semibold">{active.n}</div>
              <div className="text-white/65 text-sm">
                {active.r} · {active.o}
              </div>
            </div>
          </footer>
        </motion.blockquote>

        <p className="mt-14 text-white/40 text-xs">
          Sample testimonials shown for demonstration. Replace with signed-off
          client quotes before launch.
        </p>
      </div>
    </section>
  );
}
