import { FlaskConical, GraduationCap, Globe, Download } from 'lucide-react'
import { researchAreas, studies, gradPath } from '@/data/research'
import { PageShell } from '@/components/PageShell'
import { Reveal } from '@/components/ui/Reveal'

/**
 * /research — the manuscript ledger: four research areas as a grid, the
 * four real SPE/STSE studies as full method → findings cards, then the
 * road to grad school. All claims trace to _extracted/.
 */
export const metadata = {
  title: 'Research — Temiloluwa Samuel Ajayi',
  description:
    'SPE manuscripts in the pipeline: ensemble ML well-kick detection, real-time anomaly detection, gas-flaring analytics and data-driven fracturing-fluid design — with the road to grad school.',
}

export default function ResearchPage() {
  return (
    <PageShell
      ghost="INQUIRY"
      kicker="Research"
      title={[{ text: 'Questions worth ' }, { text: 'measuring.', sepia: true }]}
      blurb="Four manuscripts in progress. Method, findings, drafts below."
    >
      <section className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-fg/50">Areas of inquiry</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {researchAreas.map((area, i) => (
            <Reveal key={area.id} delay={i * 70}>
              <article className="glass h-full rounded-xl p-6 transition hover:-translate-y-0.5">
                <p className="font-mono text-sm font-bold tabular-nums text-sepia/70">{area.id}</p>
                <h3 className="mt-3 font-display text-xl font-bold text-parchment">{area.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg/60">{area.blurb}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="hairline-top bg-mist/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-fg/50">Selected studies</h2>
          <div className="mt-6 space-y-6">
            {studies.map((study, i) => (
              <Reveal key={study.id} delay={i * 90}>
                <article className={`rounded-xl p-6 sm:p-8 ${i === 0 ? 'border-beam glass-sepia' : 'glass'}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-4">
                      <span className="glass mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sepia">
                        <FlaskConical className="h-[18px] w-[18px]" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-bold leading-snug text-parchment sm:text-2xl">{study.title}</h3>
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-fg/50">
                          {study.field} · {study.year}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl border-l-2 border-sepia/30 pl-4 text-sm leading-relaxed text-fg/65">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-sepia">Method — </span>
                    {study.method}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {study.findings.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-fg/70">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-sepia" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {study.stack.map((s) => (
                      <li key={s} className="rounded-full border border-sepia/20 px-2.5 py-1 font-mono text-[10px] text-sepia/90">
                        {s}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 flex flex-wrap items-center gap-3">
                    <a
                      href={study.file}
                      download
                      data-cursor="DOWNLOAD"
                      className="inline-flex items-center gap-2 rounded-lg bg-sepia px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-sepia-dim"
                    >
                      <Download className="h-3.5 w-3.5" aria-hidden="true" />
                      Download draft · {study.fileKind}
                    </a>
                    <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg/40">
                      Draft — not for citation.
                    </span>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* the road to grad school */}
      <section className="hairline-top">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-fg/50">
            The road to grad school
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-2">
            <Reveal>
              <div className="glass h-full rounded-xl p-6 sm:p-7">
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
            </Reveal>
            <Reveal delay={90}>
              <div className="glass-sepia flex h-full flex-col justify-between rounded-xl p-6 sm:p-7">
                <span className="glass inline-flex h-11 w-11 items-center justify-center rounded-lg text-sepia">
                  <Globe className="h-5 w-5" aria-hidden="true" />
                </span>
                <p className="mt-5 max-w-md text-base leading-relaxed text-fg/75 sm:text-lg">{gradPath.statement}</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </PageShell>
  )
}
