'use client'

import Image from 'next/image'
import { motion, useReducedMotion } from 'motion/react'
import { Award, BadgeCheck, FileDown, ShieldCheck } from 'lucide-react'
import {
  allCertifications,
  credentialGroups,
  recognition,
  credentialsStrip,
} from '@/data/certifications'
import { GhostWord } from '@/components/anim/GhostWord'
import { MaskText } from '@/components/anim/MaskText'
import { profile } from '@/data/resume'

/**
 * Certifications — the credentials ledger. One clear line of digital
 * foundations up top, the featured professional certificate beside a
 * counts plate, then every credential grouped by track with verify /
 * download links, and the framed awards photographed as recognition.
 */
export function Certifications() {
  const reduced = useReducedMotion()
  const rise = (delay: number) => ({
    initial: reduced ? { opacity: 1 } : { opacity: 0, y: 22 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-8% 0px' },
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay },
  })
  const featured = allCertifications.find((c) => c.featured)
  const others = allCertifications.filter((c) => !c.featured)

  return (
    <section id="credentials" className="relative scroll-mt-20 overflow-hidden hairline-top">
      <GhostWord word="PROOF" className="top-0 sm:top-2" range={60} />
      <div className="relative mx-auto w-full max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
        <motion.p {...rise(0)} className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-sepia">
          Certifications &amp; Recognition
        </motion.p>
        <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-parchment sm:text-5xl">
          <MaskText segments={[{ text: 'Credentials that ' }, { text: 'back the work.', sepia: true }]} delay={0.08} />
        </h2>

        {/* the single line — digital foundations */}
        <motion.div {...rise(0.12)} className="mt-8 flex flex-wrap items-center gap-x-3 gap-y-2 rounded-xl hairline glass px-5 py-4" data-fx>
          <ShieldCheck className="h-4 w-4 shrink-0 text-sepia" aria-hidden="true" />
          <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg/70">
            {credentialsStrip.map((c, i) => (
              <span key={c}>
                {i > 0 && <span className="mx-2 text-sepia" aria-hidden="true">·</span>}
                <span className="text-parchment/85">{c}</span>
              </span>
            ))}
          </p>
        </motion.div>

        {/* featured certificate + counts */}
        <div className="mt-10 grid gap-4 lg:grid-cols-[1.2fr_1fr]">
          {featured && (
            <motion.div {...rise(0.1)} className="border-beam glass-sepia spotlight-card flex h-full flex-col justify-between gap-8 rounded-xl p-7" data-fx>
              <div>
                <span className="glass inline-flex items-center gap-2 rounded-full px-3 py-1.5 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-parchment/80">
                  <BadgeCheck className="h-3.5 w-3.5 text-sepia" aria-hidden="true" />
                  Flagship credential
                </span>
                <h3 className="mt-5 font-display text-2xl font-bold leading-snug text-parchment sm:text-3xl">{featured.title}</h3>
                <p className="mt-2 font-mono text-[11px] uppercase tracking-[0.18em] text-fg/50">
                  {featured.issuer} · {featured.date}
                </p>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-fg/60">
                  Eight hands-on courses — spreadsheets, SQL, Tableau and R, closed with a full case study. The toolkit behind every dashboard and model on this page.
                </p>
              </div>
              <div className="flex flex-wrap gap-3">
                {featured.verify && (
                  <a
                    href={featured.verify}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="VERIFY"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-sepia px-5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-sepia-dim"
                  >
                    Verify on Coursera
                  </a>
                )}
                {featured.file && (
                  <a
                    href={featured.file}
                    download
                    data-cursor="DOWNLOAD"
                    className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-sepia/40 px-5 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-parchment transition hover:border-sepia hover:text-sepia"
                  >
                    <FileDown className="h-4 w-4" aria-hidden="true" />
                    Certificate PDF
                  </a>
                )}
              </div>
            </motion.div>
          )}

          <motion.div {...rise(0.18)} className="glass grid h-full grid-cols-2 gap-px overflow-hidden rounded-xl hairline bg-sepia/10" data-fx>
            {[
              { v: `${allCertifications.length + recognition.length}`, l: 'credentials & awards' },
              { v: '7', l: 'issuers — Google to Harvard' },
              { v: '8', l: 'course certificates, one track' },
              { v: '2', l: 'framed service awards' },
            ].map((s) => (
              <div key={s.l} className="flex flex-col justify-center px-6 py-8">
                <p className="font-mono text-3xl font-bold tabular-nums text-sepia">{s.v}</p>
                <p className="mt-2 text-xs leading-snug text-fg/55">{s.l}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* the ledger — every credential, grouped by track */}
        <div className="mt-14">
          {credentialGroups.map((g, gi) => {
            const rows = others.filter((c) => c.group === g.label)
            if (!rows.length) return null
            return (
              <div key={g.label} className={gi > 0 ? 'mt-12' : ''}>
                <motion.div {...rise(0)} className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-sepia">{g.label}</h3>
                  <p className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg/40">{g.blurb}</p>
                </motion.div>
                <motion.ul
                  initial="hide"
                  whileInView="show"
                  viewport={{ once: true, margin: '-6% 0px' }}
                  variants={{ hide: {}, show: { transition: { staggerChildren: 0.05 } } }}
                  className="mt-4 grid gap-px overflow-hidden rounded-xl hairline bg-sepia/10"
                >
                  {rows.map((c) => (
                    <motion.li
                      key={c.id}
                      variants={reduced ? undefined : { hide: { opacity: 0, y: 14 }, show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } }}
                      className="glass flex flex-wrap items-center justify-between gap-x-6 gap-y-2 px-5 py-4"
                      data-fx
                    >
                      <div className="min-w-0">
                        <p className="text-sm font-medium leading-snug text-parchment/90">{c.title}</p>
                        <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-fg/45">{c.issuer}</p>
                      </div>
                      <div className="flex shrink-0 items-center gap-4">
                        <span className="font-mono text-[10px] uppercase tracking-[0.14em] text-fg/45">{c.date}</span>
                        {c.verify && (
                          <a href={c.verify} target="_blank" rel="noopener noreferrer" data-cursor="VERIFY" className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-sepia transition hover:text-parchment">
                            Verify ↗
                          </a>
                        )}
                        {c.file && (
                          <a href={c.file} download data-cursor="DOWNLOAD" className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-sepia transition hover:text-parchment">
                            PDF ↓
                          </a>
                        )}
                      </div>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            )
          })}
        </div>

        {/* recognition — the framed awards */}
        <motion.div {...rise(0)} className="mt-16 flex items-center gap-3">
          <span className="glass-sepia inline-flex h-9 w-9 items-center justify-center rounded-lg text-sepia">
            <Award className="h-4 w-4" aria-hidden="true" />
          </span>
          <h3 className="font-display text-2xl font-bold text-parchment">Framed &amp; recognized</h3>
        </motion.div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {recognition.map((r, i) => (
            <motion.figure key={r.id} {...rise(i * 0.08)} className="glass hairline group overflow-hidden rounded-xl" data-fx>
              <div className="photo-vign relative overflow-hidden">
                <Image
                  src={r.image}
                  alt={r.alt}
                  width={r.w}
                  height={r.h}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="photo-bw h-auto w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
              </div>
              <figcaption className="px-5 py-4">
                <div className="flex items-baseline justify-between gap-4">
                  <p className="text-sm font-medium text-parchment/90">{r.title}</p>
                  <span className="shrink-0 rounded-full bg-sepia/15 px-2.5 py-1 font-mono text-[10px] font-bold text-sepia">{r.date}</span>
                </div>
                <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.14em] text-fg/45">{r.issuer}</p>
                <p className="mt-2 text-sm leading-relaxed text-fg/60">{r.note}</p>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <motion.p {...rise(0)} className="mt-10 font-mono text-xs leading-relaxed tracking-wide text-fg/45">
          ORIGINALS ON FILE —{' '}
          <a href={profile.cvPath} download className="text-sepia transition hover:text-parchment">
            every credential above is real; download the CV or ask for any original PDF
          </a>
        </motion.p>
      </div>
    </section>
  )
}