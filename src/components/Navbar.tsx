"use client";

import { useEffect, useState } from "react";
import Logo from "./Logo";

const NAV = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[rgba(250,247,242,0.85)] backdrop-blur-lg border-b border-black/5"
          : "bg-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center">
          <Logo tone={scrolled ? "dark" : "light"} />
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-[color:var(--color-navy)] hover:text-[color:var(--color-teal)]"
                  : "text-white/85 hover:text-white"
              }`}
            >
              {n.label}
            </a>
          ))}
          <a href="#contact" className="btn-primary !py-2.5 !px-5 !text-sm">
            Book a Call
          </a>
        </nav>
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2"
          aria-label="Menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke={scrolled ? "#0A2540" : "#FAF7F2"}
            fill="none"
            strokeWidth="2"
          >
            {open ? (
              <path d="M6 6 L18 18 M6 18 L18 6" strokeLinecap="round" />
            ) : (
              <path d="M4 7 H20 M4 12 H20 M4 17 H20" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-[color:var(--color-ivory)] border-t border-black/5 px-5 py-4 flex flex-col gap-3">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="py-2 text-[color:var(--color-navy)] font-medium"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-primary justify-center"
          >
            Book a Call
          </a>
        </div>
      )}
    </header>
  );
}
