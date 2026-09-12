'use client'

import { motion, useReducedMotion } from 'motion/react'
import { skillGroups } from '@/data/community'
import { GhostWord } from '@/components/anim/GhostWord'
import { MaskText } from '@/components/anim/MaskText'

/**
 * Skills — "TOOLKIT" ghost, masked heading, chips springing in like
 * popcorn with a stagger, interests line easing up last.
 */
export function Skills() {
  const reduced = useReducedMotion()
  return (
    <section id="skills" className="relative scroll-mt-20 overflow-hidden hairline-top">
      <GhostWord word="TOOLKIT" className="top-0 sm:top-2" range={56} />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-gold">
          Skills &amp; Interests
        </motion.p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-parchment sm:text-5xl">
          <MaskText segments={[{ text: 'The toolkit behind the ' }, { text: 'results', gold: true }, { text: '.' }]} delay={0.08} />
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {skillGroups.map((g, i) => (
            <motion.div
              key={g.label}
              initial={reduced ? { opacity: 1 } : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 }}
              className="glass h-full rounded-xl p-6"
              data-fx
            >
              <p className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-gold">{g.label}</p>
              <motion.ul
                initial="hide"
                whileInView="show"
                viewport={{ once: true, margin: '-10% 0px' }}
                variants={reduced ? undefined : { hide: {}, show: { transition: { staggerChildren: 0.04, delayChildren: 0.15 } } }}
                className="mt-4 flex flex-wrap gap-2"
              >
                {g.skills.map((s) => (
                  <motion.li
                    key={s}
                    variants={reduced ? undefined : { hide: { opacity: 0, scale: 0.7, y: 12 }, show: { opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 340, damping: 21 } } }}
                    className="rounded-full border border-gold/20 bg-gold/5 px-3.5 py-1.5 text-sm text-parchment/85 transition hover:border-gold/50 hover:text-gold"
                  >
                    {s}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 font-mono text-xs leading-relaxed tracking-wide text-fg/45"
        >
          INTERESTS — <span className="text-fg/60">Process optimization · Predictive modeling · Database management · Dashboard design</span>
        </motion.p>
      </div>
    </section>
  )
}