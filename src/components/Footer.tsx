import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="bg-[#071B30] text-[color:var(--color-ivory)]">
      <div className="container-page py-16 grid md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <Logo tone="light" />
          <p className="mt-5 text-white/60 text-sm leading-relaxed max-w-sm">
            Clinical-grade compliance support for UK care providers. Written by
            a practising Clinical Lead Nurse, not a retired inspector.
          </p>
        </div>
        <div className="md:col-span-3">
          <div className="text-xs uppercase tracking-[0.22em] text-[#2DD4BF] font-semibold">
            Navigate
          </div>
          <ul className="mt-4 space-y-2.5 text-white/75 text-sm">
            <li><a href="#services" className="hover:text-[#2DD4BF]">Services</a></li>
            <li><a href="#about" className="hover:text-[#2DD4BF]">About</a></li>
            <li><a href="#process" className="hover:text-[#2DD4BF]">Process</a></li>
            <li><a href="#testimonials" className="hover:text-[#2DD4BF]">Testimonials</a></li>
            <li><a href="#faq" className="hover:text-[#2DD4BF]">FAQ</a></li>
            <li><a href="#contact" className="hover:text-[#2DD4BF]">Contact</a></li>
          </ul>
        </div>
        <div className="md:col-span-4">
          <div className="text-xs uppercase tracking-[0.22em] text-[#2DD4BF] font-semibold">
            Compliance
          </div>
          <ul className="mt-4 space-y-3 text-white/65 text-[13px] leading-relaxed">
            <li>
              <span className="text-white/85 font-medium block">
                NMC Registered
              </span>
              Founder registered with the Nursing and Midwifery Council. PIN
              verification available on request.
            </li>
            <li>
              <span className="text-white/85 font-medium block">
                ICO Registered
              </span>
              Client and clinical data processed in accordance with UK GDPR
              and Data Protection Act 2018.
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-page py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>
            © {new Date().getFullYear()} SKYNETLABS Clinic. All rights reserved.
            Registered in the United Kingdom.
          </div>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
