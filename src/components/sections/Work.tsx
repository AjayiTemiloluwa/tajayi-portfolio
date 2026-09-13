'use client'

import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useMotionValue, useReducedMotion, useSpring } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { work, type WorkItem } from '@/data/work'
import { GhostWord } from '@/components/anim/GhostWord'
import { MaskText } from '@/components/anim/MaskText'

/**
 * Work — the Noguier work index: giant ghost word drifting with scroll,
 * masked heading, rows sliding in, and a floating preview card that
 * chases the cursor across rows (desktop only).
 */

function Row({ item, index, active, setActive }: { item: WorkItem; index: number; active: number | null; setActive: (i: number | null) => void }) {
  const reduced = useReducedMotion()
  const featured = item.featured
  return (
    <motion.article
      initial={reduced ? { opacity: 1 } : { opacity: 0, x: -28 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-8% 0px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: (index % 3) * 0.08 }}
      onMouseEnter={() => setActive(index)}
      className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 hover:-translate-y-0.5 sm:p-7 ${featured ? 'border-beam glass-sepia' : 'glass'} ${active === index ? 'sepia-outline' : ''}`}
      data-cursor="VIEW"
    >
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
        <div className="flex min-w-0 items-start gap-5">
          <span className="mt-1.5 font-mono text-sm font-bold tabular-nums text-sepia/70">
            {String(index + 1).padStart(2, '0')}
          </span>
          <div className="min-w-0">
            <h3 className="font-display text-xl font-bold leading-snug text-parchment sm:text-2xl">{item.title}</h3>
            <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-fg/50">
              {item.org}
              {featured && <span className="ml-3 rounded-full bg-sepia/15 px-2 py-0.5 text-[9px] font-bold text-sepia">Featured</span>}
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg/60">{item.summary}</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {item.stack.map((s) => (
                <li key={s} className="rounded-full border border-sepia/20 px-2.5 py-1 font-mono text-[10px] text-sepia/90">{s}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex shrink-0 items-center gap-3">
          <span className="font-mono text-sm text-fg/40">{item.year}</span>
          <span className="glass inline-flex h-9 w-9 items-center justify-center rounded-full text-fg/50 transition group-hover:border-sepia group-hover:text-sepia">
            <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export function Work() {
  const sectionRef = useRef<HTMLElement | null>(null)
  const reduced = useReducedMotion()
  const [active, setActive] = useState<number | null>(null)
  const [canHover, setCanHover] = useState(false)
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const px = useSpring(mx, { stiffness: 170, damping: 22, mass: 0.6 })
  const py = useSpring(my, { stiffness: 170, damping: 22, mass: 0.6 })

  useEffect(() => {
    setCanHover(window.matchMedia('(hover: hover) and (pointer: fine)').matches)
  }, [])

  const onMove = (e: React.MouseEvent) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return
    mx.set(e.clientX - rect.left + 30)
    my.set(e.clientY - rect.top - 150)
  }

  return (
    <section id="work" ref={sectionRef} onMouseMove={onMove} onMouseLeave={() => setActive(null)} className="relative scroll-mt-20 overflow-hidden hairline-top bg-mist/40">
      <GhostWord word="WORK" className="top-2 sm:top-4" range={70} />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <motion.p initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-sepia">
              Selected work
            </motion.p>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-parchment sm:text-5xl">
              <MaskText segments={[{ text: 'Things I’ve built that ' }, { text: 'decide.', sepia: true }]} />
            </h2>
          </div>
          <motion.p initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.25 }} className="max-w-sm text-sm leading-relaxed text-fg/55">
            Systems shipped at Sankore, SLB and in between — measured by what they saved, surfaced or settled.
          </motion.p>
        </div>

        <div className="mt-10 space-y-4">
          {work.map((item, i) => (
            <Row key={item.title} item={item} index={i} active={active} setActive={setActive} />
          ))}
        </div>
      </div>

      {/* cursor-chasing preview card (desktop) */}
      <AnimatePresence>
        {canHover && active !== null && (
          <motion.div
            key="preview"
            initial={reduced ? { opacity: 1 } : { opacity: 0, scale: 0.85, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.9, rotate: 2 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            style={{ x: px, y: py }}
            className="pointer-events-none absolute left-0 top-0 z-30 hidden w-72 lg:block"
          >
            <div className="border-beam glass-sepia rounded-xl p-5 shadow-2xl shadow-black/40">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-sepia">
                {String(active + 1).padStart(2, '0')} / {String(work.length).padStart(2, '0')} — {work[active].year}
              </p>
              <p className="mt-2 font-display text-lg font-bold leading-snug text-parchment">{work[active].title}</p>
              <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-fg/50">{work[active].org}</p>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {work[active].stack.slice(0, 4).map((s) => (
                  <li key={s} className="rounded-full bg-sepia/10 px-2 py-0.5 font-mono text-[9px] text-sepia/90">{s}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}