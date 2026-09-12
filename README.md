# Temiloluwa Samuel Ajayi — Digital Resume

A breathtaking single-page portfolio that tells one story: a **deliberately balanced life** —
intelligent automation, honest analytics, and people who grow.

## Design

Every design stone is adopted from the **Inchstone** design system:

| Element | Detail |
| --- | --- |
| Tokens | canonical six — ink, parchment, gold, ember, moss (+ dark as the canonical theme) |
| Type | Playfair Display (display), Inter (sans), JetBrains Mono (figures/labels) |
| Effects | CursorGlow (halo + core + contextual labels), spotlight cards, `text-lit`, scroll ripples, animated border beam, hairlines, glass surfaces |
| Motion | Lenis smooth scroll with the dionpieters-style **page dip**, per-letter hero rise, silk `cubic-bezier(0.22, 1, 0.36, 1)` easing |
| Mobile | TouchFx (halo, ripple, sparks) + native-feel scroll dip |
| A11y | `prefers-reduced-motion` stills every effect; decorative layers are `aria-hidden` |

Structure inspiration: [kolabdul](https://kolabdul.vercel.app/) · hero energy from
[robin-noguier](https://robin-noguier.com/) · work ledger from [dionpieters](https://www.dionpieters.dev/).

## Sections

1. **Hero** — availability, location, display-scale name, rotating "I build …" line, signature stats
2. **Marquee** — infinite craft ticker
3. **Balance** — the narrative + four pillars (Build · Analyze · Teach · Lead) + education
4. **Selected Work** — six projects with the featured one wearing the border beam
5. **Experience** — gold-dotted timeline, all five roles
6. **Community** — leadership cards + honor roll
7. **Skills** — grouped chips + interests
8. **Contact** — border-beam email card, phone, LinkedIn, CV download

## Run

```bash
npm install
npm run dev      # http://localhost:3001
npm run build    # production build
```

Data lives in `src/data/` — edit facts there, the sections follow.
