"use client";

import { motion } from "framer-motion";

type Service = {
  title: string;
  desc: string;
  bullets: string[];
  icon: React.ReactNode;
};

const Icon = {
  Clipboard: (
    <path d="M9 4h6a2 2 0 012 2v1h1a2 2 0 012 2v10a2 2 0 01-2 2H6a2 2 0 01-2-2V9a2 2 0 012-2h1V6a2 2 0 012-2zm0 3h6V6H9v1zm-2 6l2 2 4-4" />
  ),
  Shield: (
    <path d="M12 3l8 3v6c0 4.5-3.4 8.4-8 9-4.6-.6-8-4.5-8-9V6l8-3zm-1 13l5-5-1.4-1.4L11 13.2 9.4 11.6 8 13l3 3z" />
  ),
  FileText: (
    <path d="M7 3h7l5 5v11a2 2 0 01-2 2H7a2 2 0 01-2-2V5a2 2 0 012-2zm6 1.5V8h3.5L13 4.5zM8 12h9M8 16h9M8 20h6" />
  ),
  Alert: (
    <path d="M12 3L2 21h20L12 3zm0 6v5m0 3v.01" />
  ),
  Book: (
    <path d="M4 4h6a3 3 0 013 3v13a3 3 0 00-3-3H4V4zm16 0h-6a3 3 0 00-3 3v13a3 3 0 013-3h6V4z" />
  ),
  Search: (
    <path d="M10 3a7 7 0 105.7 11.3l4 4 1.4-1.4-4-4A7 7 0 0010 3zm0 2a5 5 0 110 10 5 5 0 010-10z" />
  ),
};

const SERVICES: Service[] = [
  {
    title: "CQC Compliance Support",
    desc: "Map your service against the five CQC Key Lines of Enquiry and flag gaps before an inspector does. Clear action list in plain English, not jargon.",
    bullets: [
      "Full KLOE gap analysis, RAG-rated",
      "Inspection-ready evidence folder structure",
      "30-day remedial action plan with owners",
    ],
    icon: Icon.Clipboard,
  },
  {
    title: "Safeguarding Audits",
    desc: "Independent review of safeguarding systems, referrals, and staff competency. I check what happens on the floor against what's written in policies.",
    bullets: [
      "Case file sampling and thematic review",
      "DoLS, MCA and Section 42 referral audit",
      "Written report with safeguarding lead recommendations",
    ],
    icon: Icon.Shield,
  },
  {
    title: "Person-Centred Care Planning",
    desc: "Care plans that reflect the resident, not a template. Rebuilt or refreshed care documentation that stands up to scrutiny and actually guides carers.",
    bullets: [
      "Full care plan rewrite for up to 20 residents",
      "Risk assessments aligned to current clinical need",
      "Staff briefing pack so changes stick",
    ],
    icon: Icon.FileText,
  },
  {
    title: "Incident & Serious Event Reports",
    desc: "Clear, defensible incident reporting that satisfies CQC, local authority and coroner requirements. Proper investigation, written up without exposing the service.",
    bullets: [
      "Root cause analysis using recognised frameworks",
      "Statutory notifications (CQC, LA, RIDDOR) drafted",
      "Lessons-learned summary for team meetings",
    ],
    icon: Icon.Alert,
  },
  {
    title: "Policy & Procedure Writing",
    desc: "Bespoke policies written for your service, your residents, and current regulations. No recycled templates bought from a dusty library.",
    bullets: [
      "Core policy suite (clinical, safeguarding, HR-adjacent)",
      "Version control and review schedule",
      "Staff acknowledgement tracker",
    ],
    icon: Icon.Book,
  },
  {
    title: "Documentation Review",
    desc: "A second pair of qualified eyes on MAR charts, daily notes, body maps and repositioning records. I tell you what's missing before the regulator does.",
    bullets: [
      "Sampled clinical record audit",
      "Medicines management compliance check",
      "One-page summary for your registered manager",
    ],
    icon: Icon.Search,
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative py-24 md:py-32 bg-[color:var(--color-ivory)]"
    >
      <div className="container-page">
        <div className="max-w-3xl">
          <span className="text-xs uppercase tracking-[0.22em] text-[color:var(--color-teal)] font-medium">
            What I do
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight text-[color:var(--color-navy)]">
            Six engagements that cover the paper trail{" "}
            <span className="text-[color:var(--color-teal)]">
              inspectors actually read.
            </span>
          </h2>
          <p className="mt-5 text-[color:var(--color-muted)] text-lg leading-relaxed">
            Each engagement is scoped, priced and scheduled around your
            inspection timeline. Pick one, or combine a few into a mini
            compliance sprint.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" }}
              className="group relative bg-white rounded-2xl p-7 border border-black/5 shadow-[0_1px_2px_rgba(10,37,64,0.04),0_12px_40px_-20px_rgba(10,37,64,0.18)] hover:shadow-[0_4px_10px_rgba(10,37,64,0.06),0_30px_60px_-24px_rgba(15,118,110,0.35)] transition-all duration-300 hover:-translate-y-1 overflow-hidden"
            >
              <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full bg-gradient-to-br from-[#0F766E]/10 to-transparent blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0F766E] to-[#14B8A6] flex items-center justify-center text-white shadow-lg shadow-[#0F766E]/25">
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {s.icon}
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-[color:var(--color-navy)]">
                  {s.title}
                </h3>
                <p className="mt-3 text-[color:var(--color-muted)] text-[0.95rem] leading-relaxed">
                  {s.desc}
                </p>
                <ul className="mt-5 space-y-2.5 border-t border-black/5 pt-5">
                  {s.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2.5 text-sm text-[color:var(--color-navy)]"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        className="flex-none mt-0.5 text-[color:var(--color-teal)]"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
