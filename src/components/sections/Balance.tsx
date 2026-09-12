'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Cpu, BarChart3, GraduationCap, Users } from 'lucide-react'
import { profile, balancePillars } from '@/data/resume'
import { education } from '@/data/experience'
import { GhostWord } from '@/components/anim/GhostWord'
import { MaskText } from '@/components/anim/MaskText'

/**
 * Balance — masked heading, drifting "BALANCE" ghost, narrative easing
 * in, education sliding from the right, pillars zoom-staggering up.
 */

const ICONS = { cpu: Cpu, chart: BarChart3, cap: GraduationCap, users: Users } as const

export function Balance() {
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
    <section id="balance" className="relative scroll-mt-20 overflow-hidden">
      <GhostWord word="BALANCE" className="top-0 sm:top-2" range={80} />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <motion.p {...fade(0)} className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-gold">
          About — the balance
        </motion.p>

        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-parchment sm:text-5xl">
          <MaskText segments={[{ text: 'One life, kept deliberately ' }, { text: 'balanced.', gold: true }]} delay={0.1} stagger={0.07} />
        </h2>

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <motion.div {...fade(0.15)} className="space-y-4 text-base leading-relaxed text-fg/65">
            <p>
              I&apos;m {profile.name} — a petroleum engineer by training, a data scientist and AI builder by obsession, and a
              financial engineer in the making at <span className="font-medium text-parchment">WorldQuant University</span>. My work
              sits where <span className="font-medium text-parchment">automation meets judgment</span>: compliance engines that never
              forget a deadline, pipelines that make reporting honest, and dashboards that decide.
            </p>
            <p>
              But a career is only half a life. I teach Python to learners across four continents, lead logistics and IT teams,
              volunteer with Gen-AI programs, and treat every streak — code or community — as compound interest on character.
              That&apos;s the balance: <span className="font-medium text-parchment">build, analyze, teach, lead</span>.
            </p>
          </motion.div>

          <div className="space-y-3">
            {education.map((e, i) => (
              <motion.div key={e.degree} {...slide(0.2 + i * 0.1)} className="glass rounded-xl p-5" data-fx>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-lg font-bold text-parchment">{e.degree}</h3>
                    <p className="mt-1 text-sm text-fg/60">{e.school} · {e.place}</p>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-gold">{e.current ? 'Current' : 'Done'}</span>
                </div>
                <p className="mt-3 font-mono text-[11px] text-fg/45">{e.period}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* pillars — zoom stagger */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {balancePillars.map((p, i) => {
            const Icon = ICONS[p.icon as keyof typeof ICONS]
            return (
              <motion.div
                key={p.title}
                initial={reduced ? { opacity: 1 } : { opacity: 0, y: 26, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-10% 0px' }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.09 }}
                className="spotlight-card glass tilt-card h-full rounded-xl p-6 transition-transform duration-300 hover:-translate-y-1"
                data-cursor={p.title.toUpperCase()}
              >
                <span className="glass-gold inline-flex h-11 w-11 items-center justify-center rounded-lg text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-parchment">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/60">{p.body}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}