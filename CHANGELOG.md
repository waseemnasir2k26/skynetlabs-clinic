# Changelog

All notable changes to this project are documented in this file.
The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

## [2026.10] - 2026-10-12

- skynetlabs-clinic is a public Next.js 16 / React 19 / TypeScript marketing site for 'SKYNETLABS Clinic', a UK Clinical Lead Nurse consultancy, with a React Three Fiber 3D hero, Tailwind v4 and Framer Motion on a single landing page.
- State: unchanged since the initial build in April 2026.
- Re-reviewed October 2026: README, file tree and commit history re-read; documentation and version metadata only, no code changes. The only external README link is vercel.com/new (HTTP 200).
- Known gaps (from the README's own 'Replace before launch' list): sample testimonials, placeholder contact details, no NMC PIN verification flow, no ICO number, no Privacy/Terms/Cookies routes. No LICENSE (README says all rights reserved); no tests or CI.

## [2026.09] - 2026-09-16

- Maintenance review of skynetlabs-clinic — a marketing site for "SKYNETLABS Clinic", a UK Clinical Lead Nurse consultancy (CQC compliance, safeguarding audits, care planning, policy writing).
- Status: Next.js 16 App Router / React 19 / TypeScript with Tailwind v4, a React Three Fiber + Drei cinematic 3D hero, Framer Motion animations and next/font (Fraunces + Inter). Source is a single landing page (`src/app/page.tsx`) composed from eleven components in `src/components/`. Last commit was 2026-04-21, the initial build.
- Reviewed September 2026: docs refreshed, package version bumped to 0.2.0, versioned as v2026.09. No application code, dependency or config changes in this release.
- Known gaps, listed in the README's own "Replace before launch" section and still outstanding: testimonials are sample quotes; contact details are placeholders (`hello@skynetlabs-clinic.test`, `+44 20 0000 0000`); NMC PIN verification flow, ICO registration number and the Privacy/Terms/Cookies routes are all missing.
- Other gaps visible in the repo: no CHANGELOG.md before this release; no LICENSE file (the README states "All rights reserved"); no test or lint CI; no live URL stated in the README.
