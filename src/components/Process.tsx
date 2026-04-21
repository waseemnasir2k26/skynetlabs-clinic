"use client";

import { motion } from "framer-motion";

const STEPS = [
  {
    n: "01",
    t: "Discover",
    d: "A confidential 45-minute call to understand your service, current rating, immediate pressures and what a successful engagement looks like for you.",
  },
  {
    n: "02",
    t: "Audit",
    d: "On-site or remote review of your documentation, systems and clinical records, benchmarked against current CQC expectations and good practice.",
  },
  {
    n: "03",
    t: "Document",
    d: "A written report, prioritised action plan, and any rewritten policies, care plans or templates agreed in scope — delivered, not just promised.",
  },
  {
    n: "04",
    t: "Support",
    d: "Ongoing clinical supervision, staff briefings, or inspection-day support so the changes embed rather than gathering dust on a shelf.",
  },
];

export default function Process() {
  return (
    <section
      id="process"
      className="relative py-24 md:py-32 bg-[color:var(--color-ivory)]"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-teal)] font-medium">
            How I work
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight text-[color:var(--color-navy)]">
            Four steps from&nbsp;
            <span className="text-[color:var(--color-teal)]">
              audit to inspection-ready.
            </span>
          </h2>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {STEPS.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative p-7 rounded-2xl bg-white border border-black/5 overflow-hidden"
            >
              <div className="absolute top-4 right-4 font-display text-[3.5rem] leading-none font-semibold text-[color:var(--color-teal)]/10">
                {s.n}
              </div>
              <div className="relative">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#0F766E] to-[#14B8A6] flex items-center justify-center text-white font-display font-semibold text-sm">
                  {i + 1}
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-[color:var(--color-navy)]">
                  {s.t}
                </h3>
                <p className="mt-3 text-[color:var(--color-muted)] text-[0.95rem] leading-relaxed">
                  {s.d}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
