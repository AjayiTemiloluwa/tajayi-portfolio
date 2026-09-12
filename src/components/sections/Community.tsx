'use client'

import { motion, useReducedMotion } from 'motion/react'
import { HeartHandshake, Award } from 'lucide-react'
import { leadership, honors } from '@/data/community'
import { GhostWord } from '@/components/anim/GhostWord'
import { MaskText } from '@/components/anim/MaskText'

/**
 * Community — "GIVE" ghost, masked heading, leadership cards zooming up
 * with stagger, and the honor roll ledger cascading in.
 */
export function Community() {
  const reduced = useReducedMotion()
  const zoom = (delay: number) => ({
    initial: reduced ? { opacity: 1 } : { opacity: 0, y: 26, scale: 0.93 },
    whileInView: { opacity: 1, y: 0, scale: 1 },
    viewport: { once: true, margin: '-10% 0px' },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  })

  return (
    <section id="community" className="relative scroll-mt-20 overflow-hidden hairline-top bg-mist/40">
      <GhostWord word="GIVE" className="top-0 sm:top-2" range={64} />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        {/* leadership */}
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-gold">
          Leadership &amp; Community
        </motion.p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-parchment sm:text-5xl">
          <MaskText segments={[{ text: 'People grow ' }, { text: 'because', gold: true }, { text: ' someone showed up.' }]} delay={0.08} />
        </h2>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {leadership.map((l, i) => (
            <motion.div key={l.org} {...zoom(i * 0.09)} className="spotlight-card glass tilt-card h-full rounded-xl p-6">
              <span className="glass-gold inline-flex h-11 w-11 items-center justify-center rounded-lg text-gold">
                <HeartHandshake className="h-5 w-5" aria-hidden="true" />
              </span>
              <h3 className="mt-4 font-display text-xl font-bold text-parchment">{l.role}</h3>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-fg/50">{l.org}</p>
              <p className="mt-3 text-sm leading-relaxed text-fg/60">{l.body}</p>
              <p className="mt-4 font-mono text-[11px] text-gold/80">{l.period}</p>
            </motion.div>
          ))}
        </div>

        {/* honors */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 flex items-center gap-3">
          <span className="glass-gold inline-flex h-9 w-9 items-center justify-center rounded-lg text-gold">
            <Award className="h-4 w-4" aria-hidden="true" />
          </span>
          <h3 className="font-display text-2xl font-bold text-parchment">Honor roll</h3>
        </motion.div>

        <motion.ul
          initial="hide"
          whileInView="show"
          viewport={{ once: true, margin: '-8% 0px' }}
          variants={{ hide: {}, show: { transition: { staggerChildren: 0.06 } } }}
          className="mt-6 grid gap-px overflow-hidden rounded-xl hairline bg-gold/10 sm:grid-cols-2"
        >
          {honors.map((h) => (
            <motion.li
              key={h.title}
              variants={reduced ? undefined : { hide: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
              className="glass flex h-full items-start justify-between gap-4 px-5 py-4"
              data-fx
            >
              <p className="text-sm leading-snug text-fg/75">{h.title}</p>
              <span className="shrink-0 rounded-full bg-gold/15 px-2.5 py-1 font-mono text-[10px] font-bold text-gold">{h.year}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}