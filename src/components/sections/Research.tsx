'use client'

import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, ArrowUpRight, Download, FlaskConical, GraduationCap, Globe } from 'lucide-react'
import { researchAreas, studies, gradPath } from '@/data/research'
import { GhostWord } from '@/components/anim/GhostWord'
import { MaskText } from '@/components/anim/MaskText'

/**
 * Research — the manuscript ledger: four focus areas, the four real
 * SPE/STSE studies as index rows, then the road to grad school with the
 * global-opportunity framing. Every claim traces to _extracted/.
 */

const ease = [0.22, 1, 0.36, 1] as const

export function Research() {
  const reduced = useReducedMotion()
  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 1 } : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-10% 0px' },
    transition: { duration: 0.7, ease, delay },
  })

  return (
    <section id="research" className="relative scroll-mt-20 overflow-hidden hairline-top bg-mist/40">
      <GhostWord word="LEDGER" className="top-2 sm:top-4" range={70} />

      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <motion.p {...rise(0)} className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-sepia">
          Research — in the pipeline
        </motion.p>

        <h2 className="mt-4 max-w-3xl font-display text-3xl font-bold leading-tight tracking-tight text-parchment sm:text-5xl">
          <MaskText
            segments={[
              { text: 'Machine learning for ' },
              { text: 'energy.', sepia: true },
            ]}
          />
        </h2>

        <motion.p {...rise(0.15)} className="mt-5 max-w-2xl text-sm leading-relaxed text-fg/60 sm:text-base">
          Four manuscripts in progress — well-control AI, flaring analytics, fluid design. Drafts attached.
        </motion.p>

        {/* focus areas */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {researchAreas.map((area, i) => (
            <motion.article
              key={area.id}
              {...rise(i * 0.08)}
              className="glass h-full rounded-xl p-6 transition hover:-translate-y-0.5"
            >
              <p className="font-mono text-sm font-bold tabular-nums text-sepia/70">{area.id}</p>
              <h3 className="mt-3 font-display text-xl font-bold text-parchment">{area.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-fg/60">{area.blurb}</p>
            </motion.article>
          ))}
        </div>

        {/* the ledger — real studies as index rows */}
        <motion.ol {...rise(0.1)} className="mt-14 space-y-4">
          {studies.map((study, i) => (
            <motion.li
              key={study.id}
              initial={reduced ? { opacity: 1 } : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.65, ease, delay: (i % 3) * 0.07 }}
            >
              <article
                className={`group relative overflow-hidden rounded-xl p-6 transition-all duration-300 sm:p-7 ${
                  i === 0 ? 'border-beam glass-sepia' : 'glass'
                }`}
              >
                <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                  <div className="flex min-w-0 items-start gap-5">
                    <span className="mt-1.5 font-mono text-sm font-bold tabular-nums text-sepia/70">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-display text-lg font-bold leading-snug text-parchment sm:text-xl">
                        {study.title}
                      </h3>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-fg/50">
                        {study.venue} · {study.kind}
                        <span className="ml-3 hidden rounded-full bg-sepia/15 px-2 py-0.5 text-[9px] font-bold text-sepia sm:inline">
                          {study.field}
                        </span>
                      </p>
                      <p className="mt-3 max-w-3xl text-sm leading-relaxed text-fg/60">{study.method}</p>
                      <a
                        href={study.file}
                        download
                        data-cursor="DOWNLOAD"
                        className="mt-4 inline-flex items-center gap-2 rounded-lg border border-sepia/30 px-3.5 py-2 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-sepia transition hover:border-sepia hover:bg-sepia/10"
                      >
                        <Download className="h-3.5 w-3.5" aria-hidden="true" />
                        Read the draft · {study.fileKind}
                      </a>
                    </div>
                  </div>
                  <div className="flex shrink-0 items-center gap-3">
                    <span className="font-mono text-sm text-fg/40">{study.year}</span>
                    <span className="glass inline-flex h-9 w-9 items-center justify-center rounded-full text-fg/50 transition group-hover:border-sepia group-hover:text-sepia">
                      <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                    </span>
                  </div>
                </div>
              </article>
            </motion.li>
          ))}
        </motion.ol>

        {/* the road to grad school — global framing */}
        <motion.div {...rise(0.1)} className="mt-14 grid gap-4 lg:grid-cols-2">
          <div className="glass rounded-xl p-6 sm:p-7">
            <span className="glass-sepia inline-flex h-11 w-11 items-center justify-center rounded-lg text-sepia">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-4 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-sepia">Now</p>
            <p className="mt-1 font-display text-lg font-bold text-parchment">{gradPath.current.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-fg/60">{gradPath.current.detail}</p>
            <p className="mt-5 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-sepia">Next</p>
            <p className="mt-1 font-display text-lg font-bold text-parchment">{gradPath.target.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-fg/60">{gradPath.target.detail}</p>
          </div>

          <div className="glass-sepia flex flex-col justify-between rounded-xl p-6 sm:p-7">
            <span className="glass inline-flex h-11 w-11 items-center justify-center rounded-lg text-sepia">
              <Globe className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="mt-5 max-w-md text-base leading-relaxed text-fg/75">{gradPath.statement}</p>
            <a
              href="/research"
              data-cursor="THE LEDGER"
              className="mt-6 inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-sepia transition hover:text-parchment"
            >
              The full ledger
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}