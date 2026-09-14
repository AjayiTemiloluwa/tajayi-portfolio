'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Mail, Phone, Download, ArrowUp } from 'lucide-react'
import { profile } from '@/data/resume'
import { GithubIcon, LinkedinIcon } from '@/components/ui/BrandIcons'
import { GhostWord } from '@/components/anim/GhostWord'
import { MaskText } from '@/components/anim/MaskText'

/**
 * Contact — the Robin Noguier FOOTER REVEAL: this section is sticky at
 * the viewport bottom, layered BEHIND the opaque content above it, and
 * gets uncovered as you scroll the final screen. Giant "HELLO" ghost,
 * masked heading, cards rising in, footer bar pinned to the bottom.
 */

const ICONS = { mail: Mail, phone: Phone, linkedin: LinkedinIcon, github: GithubIcon, download: Download } as const

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
  { href: profile.linkedin, cursor: 'OPEN', icon: 'linkedin', label: 'LinkedIn', value: profile.linkedinLabel, external: true },
  { href: profile.github, cursor: 'STAR', icon: 'github', label: 'GitHub', value: 'github.com/AjayiTemiloluwa', external: true },
  { href: profile.phoneHref, cursor: 'CALL', icon: 'phone', label: 'Phone', value: profile.phoneDisplay },
  { href: profile.cvPath, cursor: 'DOWNLOAD', icon: 'download', label: 'Resume', value: 'Download the CV (PDF)', download: true },
]

export function Contact() {
  const year = new Date().getFullYear()
  const reduced = useReducedMotion()

  return (
    <footer id="contact" className="sticky bottom-0 z-0 flex min-h-[100svh] flex-col justify-between overflow-hidden hairline-top">
      <div className="hero-haze pointer-events-none absolute inset-x-0 bottom-0 h-[130%] rotate-180" aria-hidden="true" />
      <GhostWord word="HELLO" className="top-6 sm:top-10" range={80} />

      <div className="relative mx-auto w-full max-w-6xl px-5 pt-14 sm:px-8 sm:pt-20">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-sepia">
          Say hello
        </motion.p>

        <h2
          className="mt-4 max-w-4xl font-display font-bold leading-[1.02] tracking-tight text-parchment"
          style={{ fontSize: 'clamp(1.9rem, 4vw + 1rem, 4.5rem)' }}
        >
          <MaskText segments={[{ text: 'Let’s build something that ' }, { text: 'lasts.', sepia: true }]} stagger={0.07} />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-4 hidden max-w-2xl text-base leading-relaxed text-fg/65 sm:mt-6 sm:block sm:text-lg"
        >
          For opportunities, collaborations and questions, email is the fastest route.
        </motion.p>

        {/* links — compact rows on mobile so the whole footer fits one screen */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-2 sm:gap-4 lg:grid-cols-3">
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
                className={`group flex h-full flex-row items-center gap-3 rounded-xl p-4 transition-transform hover:-translate-y-0.5 sm:flex-col sm:items-stretch sm:justify-between sm:gap-6 sm:p-6 ${l.featured ? 'col-span-2 border-beam glass-sepia spotlight-card lg:col-span-1' : 'glass spotlight-card'}`}
              >
                <Icon className="h-5 w-5 shrink-0 text-sepia" />
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg/50">{l.label}</p>
                  <p className="mt-1 break-all text-sm font-medium text-parchment transition group-hover:text-sepia">{l.value}</p>
                </div>
              </motion.a>
            )
          })}
        </div>
      </div>

      {/* footer bar */}
      <div className="relative mt-10 hairline-top sm:mt-16">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-5 sm:flex-row sm:px-8 sm:py-8">
          <div className="flex items-center gap-3">
            <span className="hairline flex h-8 w-8 items-center justify-center rounded-lg font-display text-xs font-bold text-sepia">{profile.initials}</span>
            <span className="font-display font-bold text-parchment">{profile.name}</span>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="glass ml-1 inline-flex h-8 w-8 items-center justify-center rounded-lg text-fg/55 transition hover:border-sepia hover:text-sepia"
            >
              <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="glass inline-flex h-8 w-8 items-center justify-center rounded-lg text-fg/55 transition hover:border-sepia hover:text-sepia"
            >
              <LinkedinIcon className="h-3.5 w-3.5" aria-hidden="true" />
            </a>
          </div>
          <p className="font-mono text-[11px] text-fg/40">
            © {year} · {profile.location}
          </p>
          <a
            href="#top"
            data-cursor="TO TOP"
            className="glass inline-flex h-9 w-9 items-center justify-center rounded-full text-fg/60 transition hover:border-sepia hover:text-sepia"
            aria-label="Back to top"
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  )
}