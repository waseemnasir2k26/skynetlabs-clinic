type LogoProps = {
  className?: string;
  tone?: "light" | "dark";
};

export function LogoMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <defs>
        <linearGradient id="sln-grad" x1="0" y1="0" x2="48" y2="48">
          <stop offset="0%" stopColor="#0F766E" />
          <stop offset="100%" stopColor="#2DD4BF" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="44" height="44" rx="12" fill="url(#sln-grad)" />
      <path
        d="M14 32 V18 C14 16 16 15 17.5 16.5 L30 29 C30 29 30 18 30 16"
        stroke="#FAF7F2"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M30 30 l4 -4"
        stroke="#FAF7F2"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

export default function Logo({ className = "", tone = "dark" }: LogoProps) {
  const navy = tone === "dark" ? "#0A2540" : "#FAF7F2";
  const teal = "#0F766E";
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9" />
      <div className="leading-none" style={{ fontFamily: "var(--font-fraunces)" }}>
        <div className="flex items-baseline gap-1.5">
          <span
            className="font-semibold tracking-tight text-[1.15rem]"
            style={{ color: navy }}
          >
            SKYNETLABS
          </span>
          <span
            className="text-[0.95rem] font-medium"
            style={{ color: tone === "dark" ? teal : "#2DD4BF" }}
          >
            Clinic
          </span>
        </div>
        <div
          className="text-[0.62rem] uppercase tracking-[0.22em] mt-0.5 font-sans font-medium"
          style={{
            color: tone === "dark" ? "#5C6878" : "rgba(250,247,242,0.7)",
          }}
        >
          Clinical Compliance
        </div>
      </div>
    </div>
  );
}
