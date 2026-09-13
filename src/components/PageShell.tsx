import Link from 'next/link'
import { ArrowLeft, ArrowUpRight } from 'lucide-react'
import { profile } from '@/data/resume'
import { MaskText } from '@/components/anim/MaskText'
import { GhostWord } from '@/components/anim/GhostWord'
import type { MaskSegment } from '@/components/anim/MaskText'

/**
 * PageShell — shared chrome for the sub-pages (/work, /research,
 * /interests, /life): the same sticky glass Nav as home, a ghost-word
 * header with masked title, and a slim footer bar. Content renders as
 * children between them.
 */
export function PageShell({
  ghost,
  kicker,
  title,
  blurb,
  children,
}: {
  ghost: string
  kicker: string
  title: MaskSegment[]
  blurb: string
  children: React.ReactNode
}) {
  const year = new Date().getFullYear()
  return (
    <div id="top" className="min-h-svh bg-paper">
      <header className="sticky top-0 z-40 hairline-bottom bg-paper/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label={`${profile.name} — home`}>
            <span className="hairline flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sepia/10 font-display text-sm font-bold text-sepia">
              {profile.initials}
            </span>
            <span className="hidden min-w-0 font-display text-base font-bold tracking-tight text-parchment sm:block">
              {profile.name}
            </span>
          </Link>
          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {[
              ['/work', 'Work'],
              ['/research', 'Research'],
              ['/interests', 'Interests'],
              ['/life', 'Life'],
            ].map(([href, label]) => (
              <Link
                key={href}
                href={href}
                className="font-mono text-[11px] uppercase tracking-[0.18em] text-fg/55 transition hover:text-sepia"
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="/#contact"
            data-cursor="SAY HELLO"
            className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg bg-sepia px-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-sepia-dim"
          >
            Contact
          </Link>
        </div>
      </header>

      <main className="relative">
        <section className="relative overflow-hidden hairline-bottom">
          <GhostWord word={ghost} className="top-2 sm:top-4" range={60} />
          <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-20 sm:px-8 sm:pb-20 sm:pt-28">
            <Link
              href="/"
              data-cursor="HOME"
              className="inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-fg/45 transition hover:text-sepia"
            >
              <ArrowLeft className="h-3.5 w-3.5" aria-hidden="true" /> Back home
            </Link>
            <p className="mt-8 font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-sepia">{kicker}</p>
            <h1 className="mt-4 max-w-4xl font-display text-3xl font-bold leading-[1.05] tracking-tight text-parchment sm:text-5xl">
              <MaskText segments={title} stagger={0.06} />
            </h1>
            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-fg/60 sm:text-base">{blurb}</p>
          </div>
        </section>

        {children}
      </main>

      <footer className="hairline-top">
        <div className="mx-auto flex w-full max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
          <div className="flex items-center gap-3">
            <span className="hairline flex h-8 w-8 items-center justify-center rounded-lg font-display text-xs font-bold text-sepia">
              {profile.initials}
            </span>
            <span className="font-display font-bold text-parchment">{profile.name}</span>
          </div>
          <p className="font-mono text-[11px] text-fg/40">© {year} · Built with quiet obsession in {profile.location}</p>
          <Link
            href="/#contact"
            data-cursor="SAY HELLO"
            className="glass inline-flex h-9 items-center gap-2 rounded-full px-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-fg/60 transition hover:border-sepia hover:text-sepia"
          >
            Say hello <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
          </Link>
        </div>
      </footer>
    </div>
  )
}
