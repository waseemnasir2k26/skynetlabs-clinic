import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "CQC Compliance & Safeguarding Consultancy | SKYNETLABS Clinic",
  description:
    "UK Clinical Lead Nurse offering CQC compliance, safeguarding audits, care planning and policy writing for care homes, nursing agencies and providers.",
  openGraph: {
    title: "SKYNETLABS Clinic — CQC-ready care, signed off by a practising nurse",
    description:
      "Practical, clinically led compliance support for UK care providers. CQC audits, safeguarding reviews, care planning and policy writing.",
    type: "website",
    locale: "en_GB",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en-GB"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[color:var(--color-ivory)] text-[color:var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}
