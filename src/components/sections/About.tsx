'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Cpu, BarChart3, GraduationCap, Users } from 'lucide-react'
import { profile, pillars } from '@/data/resume'
import { education } from '@/data/experience'
import { GhostWord } from '@/components/anim/GhostWord'
import { MaskText } from '@/components/anim/MaskText'

/**
 * About — a deliberately even composition: centered header, two mirrored
 * halves on the same grid (story ↔ study), then four indexed pillars in
 * an even rhythm. The symmetry lives in the layout, never in the copy.
 */

const ICONS = { cpu: Cpu, chart: BarChart3, cap: GraduationCap, users: Users } as const

export function About() {
  const reduced = useReducedMotion()
  const fade = (delay: number) => ({
    initial: reduced ? { opacity: 1 } : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-10% 0px' },
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay },
  })
  const slide = (delay: number) => ({
    initial: reduced ? { opacity: 1 } : { opacity: 0, x: 42 },
    whileInView: { opacity: 1, x: 0 },
    viewport: { once: true, margin: '-10% 0px' },
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] as const, delay },
  })

  return (
    <section id="about" className="relative scroll-mt-20 overflow-hidden">
      <GhostWord word="ABOUT" className="top-0 sm:top-2" range={80} />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        {/* header — centered on the axis */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.p {...fade(0)} className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-sepia">
            About
          </motion.p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight tracking-tight text-parchment sm:text-5xl">
            <MaskText segments={[{ text: 'One builder, ' }, { text: 'four disciplines.', sepia: true }]} delay={0.1} stagger={0.07} />
          </h2>
        </div>

        {/* two mirrored halves — same grid, same weight */}
        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-2">
          <motion.div {...fade(0.15)} className="glass rounded-xl p-7" data-fx>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-sepia">The builder</p>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-fg/65">
              <p>
                I&apos;m {profile.name} — trained in petroleum engineering, now building AI and automation systems, and
                reading for an M.Sc in financial engineering at{' '}
                <span className="font-medium text-parchment">WorldQuant University</span>. The common thread: data applied
                to real operations — energy first, capital next.
              </p>
              <p>
                Along the way: freelance data science, an SLB internship, teaching Python on four continents, and leading
                student teams.
              </p>
            </div>
          </motion.div>

          <motion.div {...slide(0.2)} className="glass rounded-xl p-7" data-fx>
            <p className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-sepia">The study</p>
            <div className="mt-5 divide-y divide-sepia/10">
              {education.map((e) => (
                <div key={e.degree} className="first:pt-0 [&:not(:first-child)]:pt-5">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-lg font-bold text-parchment">{e.degree}</h3>
                      <p className="mt-1 text-sm text-fg/60">{e.school} · {e.place}</p>
                    </div>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-sepia">{e.current ? 'Current' : 'Done'}</span>
                  </div>
                  <p className="mt-2 font-mono text-[11px] text-fg/45">{e.period}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* four pillars — even rhythm, indexed 01–04 */}
        <div className="mt-4 grid items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p, i) => {
            const Icon = ICONS[p.icon as keyof typeof ICONS]
            return (
              <motion.div
                key={p.title}
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 26, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 }}
                className="spotlight-card glass tilt-card flex h-full flex-col rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <span className="glass-sepia inline-flex h-11 w-11 items-center justify-center rounded-lg text-sepia">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="font-mono text-[10px] font-bold tabular-nums tracking-[0.2em] text-fg/30">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-xl font-bold text-parchment">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/60">{p.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}