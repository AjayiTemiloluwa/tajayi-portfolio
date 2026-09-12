'use client'

import { motion, useReducedMotion } from 'motion/react'
import { Briefcase, Sparkles } from 'lucide-react'
import { experience } from '@/data/experience'
import { GhostWord } from '@/components/anim/GhostWord'
import { MaskText } from '@/components/anim/MaskText'

/**
 * Experience — "PATH" ghost drifting behind, masked heading, timeline
 * rows gliding in from the right with staggered gold nodes.
 */
export function Experience() {
  const reduced = useReducedMotion()
  return (
    <section id="experience" className="relative scroll-mt-20 overflow-hidden hairline-top">
      <GhostWord word="PATH" className="top-0 sm:top-2" range={60} />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-gold">
          Experience
        </motion.p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-parchment sm:text-5xl">
          <MaskText segments={[{ text: 'Where the bias for ' }, { text: 'action', gold: true }, { text: ' was built.' }]} delay={0.08} />
        </h2>

        <ol className="relative mt-12 space-y-10">
          {/* the gold spine */}
          <span
            className="absolute bottom-2 left-[7px] top-2 w-px bg-gradient-to-b from-gold/50 via-gold/25 to-transparent sm:left-[9px]"
            aria-hidden="true"
          />
          {experience.map((role, i) => (
            <motion.li
              key={`${role.org}-${role.period}`}
              initial={reduced ? { opacity: 1 } : { opacity: 0, x: 44 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1], delay: (i % 2) * 0.06 }}
              className="relative pl-8 sm:pl-12"
            >
              {/* node */}
              <span className="absolute left-0 top-1.5 sm:top-2" aria-hidden="true">
                {role.current ? (
                  <span className="relative flex h-4 w-4 sm:h-5 sm:w-5">
                    <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-moss/70" />
                    <span className="relative inline-flex h-4 w-4 items-center justify-center rounded-full border border-gold bg-moss text-ink sm:h-5 sm:w-5">
                      <Briefcase className="h-2.5 w-2.5" />
                    </span>
                  </span>
                ) : (
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full border border-gold/60 bg-[var(--bg)] sm:h-5 sm:w-5">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold" />
                  </span>
                )}
              </span>

              <div className="glass rounded-xl p-6 spotlight-card sm:p-7">
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div>
                    <h3 className="font-display text-xl font-bold text-parchment sm:text-2xl">{role.title}</h3>
                    <p className="mt-1 text-sm text-fg/60">
                      <span className="font-medium text-gold">{role.org}</span> · {role.place}
                    </p>
                  </div>
                  <span className="inline-flex items-center gap-2 font-mono text-[11px] text-fg/45">
                    {role.current && <Sparkles className="h-3.5 w-3.5 text-moss" aria-hidden="true" />}
                    {role.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {role.bullets.map((b) => (
                    <li key={b.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-fg/65">
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-gold/70" aria-hidden="true" />
                      {b}
                    </li>
                  ))}
                </ul>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {role.tags.map((t) => (
                    <li key={t} className="rounded-full bg-[var(--mist)] px-2.5 py-1 font-mono text-[10px] text-fg/55">{t}</li>
                  ))}
                </ul>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}