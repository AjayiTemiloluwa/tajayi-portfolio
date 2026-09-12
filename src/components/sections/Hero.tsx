'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowDown, ArrowRight, ChevronDown, Download, MapPin } from 'lucide-react'
import { profile, heroStats } from '@/data/resume'
import { RotatingWord } from '@/components/ui/RotatingWord'
import { CountUp } from '@/components/anim/CountUp'

/**
 * Hero — Noguier-style choreography: per-letter rise, masked entrances,
 * count-up stats, looping scroll cue, and the display block parallaxing
 * away on scroll-out.
 */

function Letters({ text, delay = 0, className = '' }: { text: string; delay?: number; className?: string }) {
  return (
    <span className={className} aria-label={text} role="text">
      {text.split('').map((ch, i) =>
        ch === ' ' ? (
          <span key={i} className="inline-block w-[0.28em]" aria-hidden="true" />
        ) : (
          <span key={i} aria-hidden="true" className="rise-in inline-block" style={{ animationDelay: `${delay + i * 55}ms` }}>
            {ch}
          </span>
        )
      )}
    </span>
  )
}

const enter = (delay: number) => ({
  initial: { opacity: 0, y: 18 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] as const, delay },
})

export function Hero() {
  const heroRef = useRef<HTMLElement | null>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] })
  const nameY = useTransform(scrollYProgress, [0, 1], [0, -90])
  const nameFade = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={heroRef} id="top" className="relative overflow-hidden">
      <div className="hero-haze pointer-events-none absolute inset-x-0 top-0 h-[120%]" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-28 sm:px-8 sm:pt-36">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_290px] lg:gap-16">
          <div>
            {/* eyebrow */}
            <motion.div {...enter(0.1)} className="flex flex-wrap items-center gap-x-5 gap-y-3">
              <span className="glass-gold inline-flex items-center gap-2 rounded-full px-3 py-1.5">
                <span className="relative flex h-2 w-2">
                  <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-moss" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-moss" />
                </span>
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.18em] text-parchment">
                  {profile.availability}
                </span>
              </span>
              <span className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-[0.22em] text-fg/50">
                <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                {profile.location}
              </span>
            </motion.div>

            {/* display name — parallax exit */}
            <motion.div style={reduced ? undefined : { y: nameY, opacity: nameFade }}>
              <motion.h1
                {...enter(0.25)}
                className="mt-8 font-display font-bold leading-[0.98] tracking-tight text-parchment"
                style={{ fontSize: 'clamp(2.75rem, 8.5vw + 1rem, 7.5rem)' }}
              >
                <Letters text={profile.firstName} delay={250} />
                <br />
                <span className="text-gold-grad">
                  <Letters text={`${profile.middleName} ${profile.lastName}`} delay={750} />
                </span>
              </motion.h1>
            </motion.div>

            {/* rotating statement */}
            <motion.p
              {...enter(0.85)}
              data-noreveal
              className="mt-8 max-w-2xl text-lg leading-relaxed text-fg/70 sm:text-xl"
            >
              <span className="font-medium text-parchment">AI &amp; Automation Analyst</span> who builds <RotatingWord />
            </motion.p>

            {/* CTAs */}
            <motion.div {...enter(1.0)} className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
              <a href="#work" data-cursor="VIEW WORK" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-gold px-8 font-semibold text-ink transition hover:bg-gold-dim">
                View selected work
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href={profile.cvPath} download data-cursor="DOWNLOAD" className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-gold/40 px-8 font-semibold text-parchment transition hover:border-gold hover:text-gold">
                <Download className="h-4 w-4" aria-hidden="true" />
                Download CV
              </a>
              <a href="#balance" className="inline-flex h-12 items-center justify-center gap-2 px-4 font-mono text-[11px] uppercase tracking-[0.22em] text-fg/50 transition hover:text-gold">
                The balanced life
                <ArrowDown className="h-3.5 w-3.5" aria-hidden="true" />
              </a>
            </motion.div>
          </div>

          {/* ID card — portrait (from PERSONAL PORTFOLIO FILES → public/images) */}
          <motion.div {...enter(0.9)} className="mx-auto w-full max-w-[280px] lg:mx-0 lg:max-w-none" data-cursor="HELLO">
            <div className="glass hairline rounded-2xl p-3" data-fx>
              <div className="flex items-center justify-between px-1 pb-3 pt-1">
                <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gold">ID_001</span>
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-fg/45">AJAYI, T.S.</span>
              </div>
              <div className="hairline overflow-hidden rounded-xl bg-gold/5">
                <Image
                  src="/images/portrait.png"
                  alt="Temiloluwa Samuel Ajayi — profile portrait"
                  width={599}
                  height={786}
                  priority
                  sizes="(min-width: 1024px) 290px, 70vw"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div className="flex items-center justify-between px-1 pb-1 pt-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg/45">{profile.location} · 2026</span>
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-gold">Verified</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* stats — count up */}
        <motion.dl
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 1.15 }}
          className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-xl hairline bg-gold/10 sm:grid-cols-4"
        >
          {heroStats.map((s) => {
            const m = /^(\d+)(.*)$/.exec(s.value)
            return (
              <div key={s.label} className="glass px-5 py-6" data-fx>
                <dd className="font-mono text-3xl font-bold tabular-nums text-gold">
                  <CountUp value={m ? Number(m[1]) : 0} suffix={m ? m[2] : s.value} />
                </dd>
                <dt className="mt-2 text-xs leading-snug text-fg/55">{s.label}</dt>
              </div>
            )
          })}
        </motion.dl>

        {/* scroll cue */}
        <div className="mt-12 flex justify-center">
          <motion.div
            animate={reduced ? {} : { y: [0, 9, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1.5 text-fg/40"
            aria-hidden="true"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown className="h-4 w-4 text-gold" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}