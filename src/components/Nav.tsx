import Link from 'next/link'
import { profile } from '@/data/resume'
import { GithubIcon } from '@/components/ui/BrandIcons'

/**
 * Nav — sticky glass bar with hairline bottom. Logo is the TA monogram;
 * links are mono route links; the availability pill sits right (hidden on
 * small screens, replaced by a direct email link).
 */
export function Nav() {
  return (
    <header className="sticky top-0 z-40 hairline-bottom bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="flex min-w-0 items-center gap-3" aria-label={`${profile.name} — home`}>
          <span className="hairline flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-sepia/10 font-display text-sm font-bold text-sepia">
            {profile.initials}
          </span>
          <span className="hidden min-w-0 font-display text-base font-bold tracking-tight text-parchment sm:block">
            {profile.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {[
            ['/work', 'Work'],
            ['/research', 'Research'],
            ['/#credentials', 'Credentials'],
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

        <div className="flex shrink-0 items-center gap-2">
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            data-cursor="GITHUB"
            className="glass hidden h-9 w-9 items-center justify-center rounded-lg text-fg/60 transition hover:border-sepia hover:text-sepia sm:inline-flex"
          >
            <GithubIcon className="h-4 w-4" aria-hidden="true" />
          </a>
          <span className="hidden items-center gap-2 rounded-full bg-moss/15 px-3 py-1.5 lg:inline-flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="ping-soft absolute inline-flex h-full w-full rounded-full bg-moss" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-moss" />
            </span>
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-parchment/80">
              {profile.availability}
            </span>
          </span>
          <a
            href="#contact"
            data-cursor="SAY HELLO"
            className="inline-flex h-9 items-center justify-center rounded-lg bg-sepia px-4 font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-ink transition hover:bg-sepia-dim"
          >
            Contact
          </a>
        </div>
      </div>
    </header>
  )
}
