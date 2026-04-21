"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const FAQS = [
  {
    q: "Are you independent of CQC?",
    a: "Yes. I'm a private consultant, not affiliated with the Care Quality Commission. I interpret their framework on your behalf and help you prepare for inspection, but I have no regulatory authority.",
  },
  {
    q: "How much do your engagements cost?",
    a: "Fees depend on service size, scope and urgency. Typical engagements range from a one-day documentation review (fixed fee) to retained monthly clinical governance support. You receive a written scope and quote before any work begins.",
  },
  {
    q: "What's your turnaround time?",
    a: "A standard compliance audit and written report takes 10-14 working days from site visit. Urgent pre-inspection support can usually be arranged within 48-72 hours depending on availability.",
  },
  {
    q: "Is everything you see confidential?",
    a: "Yes. All engagements are governed by a signed confidentiality agreement. I'm also bound by the NMC Code on confidentiality, and your service's data is processed in line with UK GDPR.",
  },
  {
    q: "Do you work remotely or only on-site?",
    a: "Both. Policy writing, documentation review and report drafting work well remotely. Safeguarding audits, care planning rewrites and pre-inspection walk-throughs are almost always better on-site. We agree the right mix in the discovery call.",
  },
  {
    q: "Do I have to sign a long contract?",
    a: "No. Most clients start with a single engagement. Retainer arrangements are available for services that want ongoing clinical governance oversight, but they're optional and rolling-monthly.",
  },
];

function Item({ q, a, open, toggle }: { q: string; a: string; open: boolean; toggle: () => void }) {
  return (
    <div className="border-b border-black/10">
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between py-6 text-left group"
      >
        <span className="font-display text-lg md:text-xl font-semibold text-[color:var(--color-navy)] pr-6 group-hover:text-[color:var(--color-teal)] transition-colors">
          {q}
        </span>
        <span
          className={`flex-none w-8 h-8 rounded-full border border-[color:var(--color-navy)]/20 flex items-center justify-center transition-transform ${
            open ? "rotate-45 bg-[color:var(--color-teal)] border-[color:var(--color-teal)] text-white" : "text-[color:var(--color-navy)]"
          }`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <path d="M12 5v14M5 12h14" />
          </svg>
        </span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-6 pr-10 text-[color:var(--color-muted)] text-[0.98rem] leading-relaxed">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  return (
    <section id="faq" className="relative py-24 md:py-32 bg-[color:var(--color-ivory)]">
      <div className="container-page grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <span className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-teal)] font-medium">
            Questions
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight text-[color:var(--color-navy)]">
            Before we talk.
          </h2>
          <p className="mt-5 text-[color:var(--color-muted)] text-lg leading-relaxed">
            If your question isn&apos;t here, send it through the contact form.
            I reply within one working day.
          </p>
        </div>
        <div className="lg:col-span-8">
          {FAQS.map((f, i) => (
            <Item
              key={f.q}
              q={f.q}
              a={f.a}
              open={openIdx === i}
              toggle={() => setOpenIdx(openIdx === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
