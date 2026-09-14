# Temiloluwa Samuel Ajayi — Digital Resume

A breathtaking single-page portfolio that tells one story: a **fully lived life** —
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

1. **Hero** — availability, location, display-scale name, rotating "I build …" line, foundations strip
2. **Marquee** — infinite craft ticker
3. **About** — the story + four indexed pillars (Build · Model · Teach · Lead) + education
4. **Research** — SPE manuscripts with downloadable theses/drafts + grad-school roadmap
5. **PhotoScroll** — archival film reel between the work and the words
6. **Selected Work** — the work ledger, six projects with the featured one wearing the border beam
7. **Experience** — gold-dotted timeline, all five roles
8. **Certifications** — verified credentials grouped by track (verify / PDF), framed awards, foundations strip
9. **Community** — leadership cards + honor roll
10. **Skills** — grouped chips + interests
11. **Contact** — border-beam email card, phone, LinkedIn, CV download

## Run

```bash
npm install
npm run dev      # http://localhost:3001
npm run build    # production build
```

Data lives in `src/data/` — edit facts there, the sections follow.
