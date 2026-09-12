import { FlaskConical } from 'lucide-react'
import { researchAreas, studies } from '@/data/research'
import { PageShell } from '@/components/PageShell'
import { Reveal } from '@/components/ui/Reveal'

/**
 * /research — the inquiry ledger: four research areas as a grid, then the
 * two studies as full method → findings cards. All claims trace to the CV.
 */
export const metadata = {
  title: 'Research — Temiloluwa Samuel Ajayi',
  description:
    'Applied data science research: conflict impact analytics, education analytics and decision systems — method, findings and stack.',
}

export default function ResearchPage() {
  return (
    <PageShell
      ghost="INQUIRY"
      kicker="Research"
      title={[{ text: 'Questions worth ' }, { text: 'measuring.', gold: true }]}
      blurb="Freelance and academic studies in applied data science — each one an attempt to turn a fuzzy, human problem into something a number can speak about honestly."
    >
      <section className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <h2 className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-fg/50">Areas of inquiry</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {researchAreas.map((area, i) => (
            <Reveal key={area.id} delay={i * 70}>
              <article className="glass h-full rounded-xl p-6 transition hover:-translate-y-0.5" data-cursor="AREA">
                <p className="font-mono text-sm font-bold tabular-nums text-gold/70">{area.id}</p>
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
                <article className={`rounded-xl p-6 sm:p-8 ${i === 0 ? 'border-beam glass-gold' : 'glass'}`}>
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div className="flex min-w-0 items-start gap-4">
                      <span className="glass mt-1 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-gold">
                        <FlaskConical className="h-4.5 w-4.5" aria-hidden="true" />
                      </span>
                      <div className="min-w-0">
                        <h3 className="font-display text-xl font-bold leading-snug text-parchment sm:text-2xl">{study.title}</h3>
                        <p className="mt-1 font-mono text-[11px] uppercase tracking-[0.18em] text-fg/50">
                          {study.field} · {study.year}
                        </p>
                      </div>
                    </div>
                  </div>

                  <p className="mt-5 max-w-3xl border-l-2 border-gold/30 pl-4 text-sm leading-relaxed text-fg/65">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-gold">Method — </span>
                    {study.method}
                  </p>

                  <ul className="mt-5 space-y-2.5">
                    {study.findings.map((f) => (
                      <li key={f} className="flex items-start gap-3 text-sm leading-relaxed text-fg/70">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                        {f}
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {study.stack.map((s) => (
                      <li key={s} className="rounded-full border border-gold/20 px-2.5 py-1 font-mono text-[10px] text-gold/90">
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
