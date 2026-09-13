/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  // dark is the singular canonical theme — classic B&W with a sepia-brown accent
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // ── canonical tokens — wired to CSS vars so BOTH themes work ──
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)', // background surface
        parchment: 'rgb(var(--parchment-rgb) / <alpha-value>)', // primary text
        fg: 'rgb(var(--fg-rgb) / <alpha-value>)', // foreground (aliases parchment) — USE for muted text
        paper: 'rgb(var(--bg-rgb) / <alpha-value>)', // background w/ alpha (bg-paper/85 etc.)
        mist: 'rgb(var(--mist-solid-rgb) / <alpha-value>)', // soft section tint
        sepia: 'rgb(var(--sepia-rgb) / <alpha-value>)', // THE single accent — vignette brown
        'sepia-dim': 'rgb(var(--sepia-dim-rgb) / <alpha-value>)', // accent at rest / secondary
        ember: 'rgb(var(--ember-rgb) / <alpha-value>)', // warnings / destructive
        moss: 'rgb(var(--moss-rgb) / <alpha-value>)', // completed / achieved
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains-mono)', 'monospace'],
        display: ['var(--font-playfair)', 'serif'],
      },
      transitionTimingFunction: {
        silk: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
}
