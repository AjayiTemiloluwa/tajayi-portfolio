'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Mail, Phone, Download, ArrowUp } from 'lucide-react'
import { profile } from '@/data/resume'
import { GhostWord } from '@/components/anim/GhostWord'
import { MaskText } from '@/components/anim/MaskText'

/**
 * Contact — the Robin Noguier FOOTER REVEAL: this section is sticky at
 * the viewport bottom, layered BEHIND the opaque content above it, and
 * gets uncovered as you scroll the final screen. Giant "HELLO" ghost,
 * masked heading, cards rising in, footer bar pinned to the bottom.
 */

function LinkedinIcon({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} aria-hidden="true">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4V8h4v2.5" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  )
}

const ICONS = { mail: Mail, phone: Phone, linkedin: LinkedinIcon, download: Download } as const

type ContactLink = {
  href: string
  cursor: string
  icon: keyof typeof ICONS
  label: string
  value: string
  featured?: boolean
  external?: boolean
  download?: boolean
}

const LINKS: ContactLink[] = [
  { href: `mailto:${profile.email}`, cursor: 'SAY HELLO', icon: 'mail', label: 'Email', value: profile.email, featured: true },
  { href: profile.phoneHref, cursor: 'CALL', icon: 'phone', label: 'Phone', value: profile.phoneDisplay },
  { href: profile.linkedin, cursor: 'OPEN', icon: 'linkedin', label: 'LinkedIn', value: profile.linkedinLabel, external: true },
  { href: profile.cvPath, cursor: 'DOWNLOAD', icon: 'download', label: 'Resume', value: 'Download the CV (PDF)', download: true },
]

export function Contact() {
  const year = new Date().getFullYear()
  const reduced = useReducedMotion()

  return (
    <footer id="contact" className="sticky bottom-0 z-0 -mt-[100svh] flex min-h-[100svh] flex-col justify-between overflow-hidden hairline-top">
      <div className="hero-haze pointer-events-none absolute inset-x-0 bottom-0 h-[130%] rotate-180" aria-hidden="true" />
      <GhostWord word="HELLO" className="top-6 sm:top-10" range={80} />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-24 sm:px-8 sm:pt-32">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-gold">
          Say hello
        </motion.p>

        <h2
          className="mt-4 max-w-4xl font-display font-bold leading-[1.02] tracking-tight text-parchment"
          style={{ fontSize: 'clamp(2.25rem, 6vw + 1rem, 5.25rem)' }}
        >
          <MaskText segments={[{ text: 'Let’s build something that ' }, { text: 'lasts.', gold: true }]} stagger={0.07} />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-fg/65 sm:text-lg"
        >
          Whether it&apos;s an automation system, an analytics problem, or a room that needs a teacher — my inbox is open, and I reply
          like the deadline depends on it.
        </motion.p>

        {/* links */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LINKS.map((l, i) => {
            const Icon = ICONS[l.icon as keyof typeof ICONS]
            return (
              <motion.a
                key={l.label}
                href={l.href}
                {...('external' in l && l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                {...('download' in l && l.download ? { download: true } : {})}
                data-cursor={l.cursor}
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 28, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-5% 0px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.25 + i * 0.08 }}
                className={`group flex h-full flex-col justify-between gap-6 rounded-xl p-6 transition-transform hover:-translate-y-0.5 ${l.featured ? 'border-beam glass-gold spotlight-card' : 'glass spotlight-card'}`}
              >
                <Icon className="h-5 w-5 text-gold" />
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg/50">{l.label}</p>
                  <p className="mt-1 break-all text-sm font-medium text-parchment transition group-hover:text-gold">{l.value}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>

      {/* footer bar */}
      <div className="relative mt-16 hairline-top">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <span className="hairline flex h-8 w-8 items-center justify-center rounded-lg font-display text-xs font-bold text-gold">{profile.initials}</span>
            <span className="font-display font-bold text-parchment">{profile.name}</span>
          </div>
          <p className="font-mono text-[11px] text-fg/40">
            © {year} · Built with quiet obsession in {profile.location}
          </p>
          <a
            href="#top"
            data-cursor="TO TOP"
            className="glass inline-flex h-9 w-9 items-center justify-center rounded-full text-fg/60 transition hover:border-gold hover:text-gold"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}