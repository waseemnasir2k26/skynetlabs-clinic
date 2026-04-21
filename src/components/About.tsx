"use client";

import { motion } from "framer-motion";

const CREDS = [
  { label: "NMC Registered", sub: "Nursing & Midwifery Council" },
  { label: "ICO Registered", sub: "Data protection compliant" },
  { label: "DBS Enhanced", sub: "Care setting cleared" },
  { label: "UK-Wide", sub: "England · Scotland · Wales" },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 md:py-32 bg-[color:var(--color-navy)] text-[color:var(--color-ivory)] overflow-hidden"
    >
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute -left-40 top-20 w-[30rem] h-[30rem] rounded-full bg-[#0F766E] blur-[120px]" />
        <div className="absolute right-0 bottom-0 w-[28rem] h-[28rem] rounded-full bg-[#14B8A6] blur-[140px]" />
      </div>
      <div className="container-page relative grid lg:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="lg:col-span-5"
        >
          <span className="text-xs uppercase tracking-[0.22em] text-[#2DD4BF] font-medium">
            About the founder
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Floor-level experience, <br />
            <span className="text-[#2DD4BF]">not boardroom theory.</span>
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-3">
            {CREDS.map((c) => (
              <div
                key={c.label}
                className="rounded-xl border border-white/10 bg-white/[0.03] backdrop-blur-sm p-4"
              >
                <div className="text-[#2DD4BF] font-semibold text-sm">
                  {c.label}
                </div>
                <div className="text-white/65 text-xs mt-1">{c.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="lg:col-span-7 space-y-5 text-[17px] leading-[1.75] text-white/80"
        >
          <p>
            Hello, I&apos;m the founder of{" "}
            <span className="text-white font-medium">SKYNETLABS Clinic</span>.
            I&apos;m a UK Clinical Lead Nurse, registered with the Nursing and
            Midwifery Council (NMC PIN on request), with over a decade of
            hands-on experience across residential care, nursing homes and
            complex-needs units.
          </p>
          <p>
            I&apos;ve led teams through CQC inspections, written the policies I
            later had to defend, and sat across the table from safeguarding
            boards. That floor-level experience is what I bring to every
            consultancy engagement.
          </p>
          <p>
            Most compliance problems I see aren&apos;t caused by bad intent.
            They&apos;re caused by busy managers, thin documentation, and
            policies nobody reads. My job is to translate the regulations into
            something your team can actually follow on a Tuesday night shift.
          </p>
          <p>
            I work with care home operators, nursing agencies and domiciliary
            providers across England, Scotland and Wales. Engagements are
            confidential, practical, and structured around your inspection
            timeline.
          </p>
          <div className="pt-6 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-primary">
              Start a Conversation
            </a>
            <span className="text-white/50 text-sm">
              Confidential · No obligation
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
