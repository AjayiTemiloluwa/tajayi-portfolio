'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'
import { ArrowRight, Award, ChevronDown, Download } from 'lucide-react'
import { profile, focusAxes } from '@/data/resume'
import { RotatingWord } from '@/components/ui/RotatingWord'
import { Float, FluidText } from '@/components/effects/fluid'

/**
 * Hero — Noguier-style choreography over the B&W identity: the full
 * name levitates and ripples away from the cursor (the Inchstone
 * greeting treatment), masked entrances, looping scroll cue, and the
 * archival portrait plate — grayscale, brown vignette, film grain.
 */

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
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_310px] lg:gap-16">
          <div>
            {/* display name — levitates and ripples away from the cursor, parallax exit */}
            <motion.div style={reduced ? undefined : { y: nameY, opacity: nameFade }}>
              <motion.h1
                {...enter(0.25)}
                className="font-display font-bold leading-[0.98] tracking-tight text-parchment"
                style={{ fontSize: 'clamp(2.75rem, 8.5vw + 1rem, 7.5rem)' }}
              >
                <Float delay={0.6} duration={9} amp={5}>
                  <FluidText text={`${profile.firstName} ${profile.middleName} ${profile.lastName}`} />
                </Float>
              </motion.h1>

              {/* the lens — AI × Energy × Sustainability × Finance */}
              <motion.p {...enter(0.7)} className="mt-5 font-mono text-xs uppercase tracking-[0.3em] text-fg/55 sm:text-sm">
                {focusAxes.map((axis, i) => (
                  <span key={axis}>
                    {i > 0 && <span className="mx-2 text-sepia" aria-hidden="true">×</span>}
                    <span>{axis}</span>
                  </span>
                ))}
              </motion.p>

              <motion.p {...enter(0.85)} className="mt-6 max-w-xl text-base leading-relaxed text-fg/65 sm:text-lg">
                I build <RotatingWord />
              </motion.p>

              <motion.div {...enter(1)} className="mt-9 flex flex-wrap items-center gap-4">
                <a
                  href="/research"
                  data-cursor="THE LEDGER"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-sepia px-8 font-semibold text-ink transition hover:bg-sepia-dim"
                >
                  View research
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
                <a
                  href={profile.cvPath}
                  download
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-sepia/40 px-8 font-semibold text-parchment transition hover:border-sepia hover:text-sepia"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  Download CV
                </a>
              </motion.div>

              {/* the single line — digital foundations */}
              <motion.p
                {...enter(1.1)}
                className="mt-7 flex flex-wrap items-center gap-x-2 gap-y-1 font-mono text-[10px] uppercase tracking-[0.18em] text-fg/45"
              >
                <Award className="h-3.5 w-3.5 shrink-0 text-sepia" aria-hidden="true" />
                <span>Google-certified data analyst</span>
                <span className="text-sepia" aria-hidden="true">·</span>
                <span>Aspire Leaders ’24</span>
                <span className="text-sepia" aria-hidden="true">·</span>
                <span>SPE service awardee</span>
                <span className="text-sepia" aria-hidden="true">·</span>
                <a href="/#credentials" className="text-sepia/80 transition hover:text-sepia">
                  All credentials ↗
                </a>
              </motion.p>
            </motion.div>
          </div>

          {/* archival plate — portrait, grayscale + brown vignette + grain */}
          <motion.div {...enter(0.9)} className="mx-auto w-full max-w-[300px] lg:mx-0 lg:max-w-none" data-cursor="HELLO">
            <figure className="photo-plate hairline relative overflow-hidden rounded-2xl p-2 glass" data-fx>
              <div className="photo-vign relative overflow-hidden rounded-xl">
                <Image
                  src="/images/portrait.png"
                  alt="Temiloluwa Samuel Ajayi — archival portrait"
                  width={599}
                  height={786}
                  priority
                  sizes="(min-width: 1024px) 310px, 70vw"
                  className="photo-bw h-auto w-full object-cover"
                />
              </div>
              <figcaption className="flex items-center justify-between gap-2 px-1 pb-1 pt-3">
                <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-fg/45">
                  {profile.location} · 2026
                </span>
                <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-sepia">
                  Plate 01
                </span>
              </figcaption>
            </figure>
          </motion.div>
        </div>


        {/* scroll cue */}
        <div className="mt-16 flex justify-center">
          <motion.div
            animate={reduced ? {} : { y: [0, 9, 0] }}
            transition={{ duration: 1.7, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1.5 text-fg/40"
            aria-hidden="true"
          >
            <span className="font-mono text-[9px] uppercase tracking-[0.3em]">Scroll</span>
            <ChevronDown className="h-4 w-4 text-sepia" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}