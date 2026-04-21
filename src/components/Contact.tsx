"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 bg-[color:var(--color-navy)] text-[color:var(--color-ivory)] overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none opacity-60">
        <div className="absolute -top-20 right-1/4 w-[28rem] h-[28rem] rounded-full bg-[#0F766E]/35 blur-[130px]" />
        <div className="absolute bottom-0 left-0 w-[22rem] h-[22rem] rounded-full bg-[#14B8A6]/25 blur-[120px]" />
      </div>
      <div className="container-page relative grid lg:grid-cols-12 gap-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-5"
        >
          <span className="text-xs uppercase tracking-[0.22em] text-[#2DD4BF] font-medium">
            Let&apos;s talk
          </span>
          <h2 className="mt-3 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            Book a discovery call.
          </h2>
          <p className="mt-5 text-white/75 text-lg leading-relaxed">
            Tell me about your service and what&apos;s on your mind. I&apos;ll
            reply within one working day with next steps and, if relevant, a
            suggested scope and fee.
          </p>

          <div className="mt-10 space-y-5">
            <a
              href="mailto:hello@skynetlabs-clinic.test"
              className="flex items-start gap-4 group"
            >
              <span className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#2DD4BF] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2">
                  <path d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7M3 7a2 2 0 012-2h14a2 2 0 012 2" />
                </svg>
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Email
                </div>
                <div className="font-display text-lg text-white group-hover:text-[#2DD4BF] transition-colors">
                  hello@skynetlabs-clinic.test
                </div>
              </div>
            </a>
            <a
              href="tel:+442000000000"
              className="flex items-start gap-4 group"
            >
              <span className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-[#2DD4BF] transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2">
                  <path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3 19.5 19.5 0 01-6-6 19.8 19.8 0 01-3.1-8.7A2 2 0 014.1 2h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1L8 9.6a16 16 0 006 6l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6a2 2 0 011.7 2z" />
                </svg>
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Phone
                </div>
                <div className="font-display text-lg text-white group-hover:text-[#2DD4BF] transition-colors">
                  +44 20 0000 0000
                </div>
              </div>
            </a>
            <div className="flex items-start gap-4">
              <span className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2">
                  <path d="M12 2a8 8 0 018 8c0 5.3-8 12-8 12s-8-6.7-8-12a8 8 0 018-8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <div className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Coverage
                </div>
                <div className="font-display text-lg text-white">
                  England · Scotland · Wales
                </div>
                <div className="text-white/55 text-sm mt-1">
                  Remote + on-site engagements
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          onSubmit={async (e) => {
            e.preventDefault();
            setLoading(true);
            await new Promise((r) => setTimeout(r, 700));
            setLoading(false);
            setSent(true);
          }}
          className="lg:col-span-7 rounded-2xl bg-white/[0.04] backdrop-blur-md border border-white/10 p-8 md:p-10"
        >
          {sent ? (
            <div className="py-16 text-center">
              <div className="w-14 h-14 mx-auto rounded-full bg-[#2DD4BF]/20 flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#2DD4BF" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold">
                Message received.
              </h3>
              <p className="mt-3 text-white/70">
                I&apos;ll reply within one working day. Thank you.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <Field label="Full name" name="name" required />
              <Field label="Organisation" name="org" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone" name="phone" type="tel" />
              <div className="md:col-span-2">
                <Select
                  label="What do you need help with?"
                  name="topic"
                  options={[
                    "CQC compliance support",
                    "Safeguarding audit",
                    "Care planning",
                    "Incident report / investigation",
                    "Policy writing",
                    "Documentation review",
                    "Something else",
                  ]}
                />
              </div>
              <div className="md:col-span-2">
                <Field
                  label="Tell me a bit about your service"
                  name="message"
                  textarea
                />
              </div>
              <div className="md:col-span-2 flex flex-wrap items-center justify-between gap-4 pt-2">
                <label className="flex items-start gap-3 text-sm text-white/70 max-w-sm">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 accent-[#2DD4BF]"
                  />
                  <span>
                    I agree to SKYNETLABS Clinic processing this enquiry in
                    line with the{" "}
                    <a href="#" className="underline text-[#2DD4BF]">
                      privacy notice
                    </a>
                    .
                  </span>
                </label>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary disabled:opacity-60"
                >
                  {loading ? "Sending…" : "Send enquiry"}
                  {!loading && (
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M5 12h14M13 6l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required = false,
  textarea = false,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  textarea?: boolean;
}) {
  const cls =
    "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/30 focus:outline-none focus:border-[#2DD4BF] focus:bg-white/10 transition-colors";
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-white/55 block mb-2">
        {label}
        {required && <span className="text-[#2DD4BF]"> *</span>}
      </span>
      {textarea ? (
        <textarea name={name} rows={4} className={cls} required={required} />
      ) : (
        <input
          name={name}
          type={type}
          className={cls}
          required={required}
        />
      )}
    </label>
  );
}

function Select({
  label,
  name,
  options,
}: {
  label: string;
  name: string;
  options: string[];
}) {
  return (
    <label className="block">
      <span className="text-xs uppercase tracking-[0.18em] text-white/55 block mb-2">
        {label}
      </span>
      <select
        name={name}
        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#2DD4BF] appearance-none"
      >
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#0A2540]">
            {o}
          </option>
        ))}
      </select>
    </label>
  );
}
