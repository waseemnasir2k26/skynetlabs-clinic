# SKYNETLABS Clinic

UK Clinical Lead Nurse consultancy — CQC compliance, safeguarding audits, care planning, policy writing.

## Status

Last reviewed: September 2026 · release v2026.09

## Stack

- Next.js 16 · App Router · React 19 · TypeScript
- Tailwind CSS v4 (@theme)
- React Three Fiber + Drei — cinematic 3D hero (DNA helix + particles + distorted orb)
- Framer Motion — scroll + state animations
- Fraunces (display) + Inter (body) via next/font

## Local dev

```bash
npm install
npm run dev
```

Opens at http://localhost:3000.

## Build

```bash
npm run build
npm start
```

## Deploy (Vercel)

```bash
vercel --prod
```

Or connect GitHub repo at [vercel.com/new](https://vercel.com/new).

## Brand tokens

- `--color-navy` `#0A2540`
- `--color-teal` `#0F766E`
- `--color-teal-glow` `#2DD4BF`
- `--color-ivory` `#FAF7F2`
- `--color-rose` `#E11D48`

## Structure

```
src/
  app/
    layout.tsx       # fonts + metadata
    page.tsx         # section composition
    globals.css      # theme tokens + utilities
  components/
    Navbar.tsx
    Hero.tsx         # 3D canvas wrapper
    HeroCanvas.tsx   # R3F scene (client-only)
    Services.tsx
    About.tsx
    Process.tsx
    Testimonials.tsx
    FAQ.tsx
    Contact.tsx
    Footer.tsx
    Logo.tsx
```

## Replace before launch

- Testimonials — currently sample quotes.
- Contact email/phone — placeholders (`hello@skynetlabs-clinic.test`, `+44 20 0000 0000`).
- NMC PIN verification flow.
- ICO registration number in footer.
- Privacy / Terms / Cookies routes.

## License

All rights reserved © 2026 SKYNETLABS Clinic.
