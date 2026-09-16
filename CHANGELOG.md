# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2026.09] - 2026-09-16

- Maintenance review of skynetlabs-clinic — a marketing site for "SKYNETLABS Clinic", a UK Clinical Lead Nurse consultancy (CQC compliance, safeguarding audits, care planning, policy writing).
- Status: Next.js 16 App Router / React 19 / TypeScript with Tailwind v4, a React Three Fiber + Drei cinematic 3D hero, Framer Motion animations and next/font (Fraunces + Inter). Source is a single landing page (`src/app/page.tsx`) composed from eleven components in `src/components/`. Last commit was 2026-04-21, the initial build.
- Reviewed September 2026: docs refreshed, package version bumped to 0.2.0, versioned as v2026.09. No application code, dependency or config changes in this release.
- Known gaps, listed in the README's own "Replace before launch" section and still outstanding: testimonials are sample quotes; contact details are placeholders (`hello@skynetlabs-clinic.test`, `+44 20 0000 0000`); NMC PIN verification flow, ICO registration number and the Privacy/Terms/Cookies routes are all missing.
- Other gaps visible in the repo: no CHANGELOG.md before this release; no LICENSE file (the README states "All rights reserved"); no test or lint CI; no live URL stated in the README.
