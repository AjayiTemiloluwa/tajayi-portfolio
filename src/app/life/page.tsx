import Link from 'next/link'
import { ChefHat, Dumbbell, Gamepad2, Plug, AudioLines } from 'lucide-react'
import { chapters } from '@/data/chapters'
import { interests } from '@/data/interests'
import { PageShell } from '@/components/PageShell'
import { Reveal } from '@/components/ui/Reveal'
import { ClipImage } from '@/components/anim/ClipImage'

/** Gallery — optimized copies generated from PERSONAL PORTFOLIO FILES. */
const gallery = [
  { src: '/images/graduation-1.jpg', w: 1280, h: 1600, tag: 'Graduation', place: 'University of Ibadan', alt: 'Graduation at the University of Ibadan' },
  { src: '/images/engineering-1.jpg', w: 1280, h: 1600, tag: 'Engineering', place: 'SPE UI', alt: 'With the Society of Petroleum Engineers community' },
  { src: '/images/facilitation.jpg', w: 1066, h: 1600, tag: 'Facilitation', place: 'Teaching', alt: 'Facilitating a teaching session' },
  { src: '/images/graduation-2.jpg', w: 1280, h: 1600, tag: 'Graduation', place: 'Class of 2026', alt: 'Graduation day — class of 2026' },
  { src: '/images/community-1.jpg', w: 1600, h: 1066, tag: 'Community', place: 'Leadership', alt: 'With the community and leadership team' },
  { src: '/images/engineering-2.jpg', w: 1280, h: 1600, tag: 'Engineering', place: 'SPE UI', alt: 'Engineering community moment' },
  { src: '/images/studio.jpg', w: 1280, h: 1600, tag: 'Portrait', place: 'Studio', alt: 'Studio portrait' },
  { src: '/images/graduation-3.jpg', w: 1280, h: 1600, tag: 'Graduation', place: 'B.Sc Petroleum Engineering', alt: 'Graduation — B.Sc in Petroleum Engineering' },
  { src: '/images/field.jpg', w: 663, h: 847, tag: 'Moments', place: 'Lagos, NG', alt: 'A moment in Lagos' },
  { src: '/images/community-2.jpg', w: 1600, h: 1066, tag: 'Community', place: 'Teams', alt: 'Working with teams' },
]

/** The off-the-clock five — pulled from the curiosity shelf by title. */
const OFF_THE_CLOCK_ICONS = { 'chef-hat': ChefHat, dumbbell: Dumbbell, gamepad: Gamepad2, plug: Plug, audio: AudioLines } as const
const offTheClock = interests
  .filter((i) => i.icon in OFF_THE_CLOCK_ICONS)
  .map((i) => ({ ...i, Icon: OFF_THE_CLOCK_ICONS[i.icon as keyof typeof OFF_THE_CLOCK_ICONS] }))

/**
 * /life — the years that made me: 2021 → Now as alternating timeline
 * chapters, every highlight traceable to the CV.
 */
export const metadata = {
  title: 'Life — Temiloluwa Samuel Ajayi',
  description: 'The years that made me: 2021 to now — engineering school, data science, teaching across four continents, and the blend.',
}

export default function LifePage() {
  return (
    <PageShell
      ghost="CHAPTERS"
      kicker="Life"
      title={[{ text: 'The years that ' }, { text: 'made me.', sepia: true }]}
      blurb="Six chapters, 2021 → now. Petroleum engineering that became data, finance and teaching."
    >
      <section className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <ol className="relative space-y-10 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-sepia/25 sm:before:left-[9px]">
          {chapters.map((chapter, i) => (
            <Reveal key={chapter.year} delay={i * 60} as="li" className="relative pl-10 sm:pl-14">
              <span
                className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-sepia/50 bg-paper"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sepia" />
              </span>
              <p className="font-mono text-sm font-bold tabular-nums text-sepia">{chapter.year}</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-parchment sm:text-3xl">{chapter.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg/65 sm:text-base">{chapter.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {chapter.highlights.map((h) => (
                  <li key={h} className="rounded-full border border-sepia/20 px-2.5 py-1 font-mono text-[10px] text-sepia/90">
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* off the clock — the hours that refill the tank */}
      <section className="hairline-top">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-sepia">Off the clock</p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold text-parchment sm:text-3xl">The hours that refill the tank.</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg/60 sm:text-base">
            Work is only half the compound interest. The other half is cooking, training, gaming, wiring and mixing —
            each one a different control problem, all of them keeping the main one sharp.{' '}
            <Link href="/interests" className="text-sepia transition hover:text-parchment">
              The full curiosity shelf ↗
            </Link>
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {offTheClock.map((interest, i) => (
              <Reveal key={interest.title} delay={i * 60} className="h-full">
                <div className="glass hairline h-full rounded-xl p-5" data-fx>
                  <div className="flex items-center gap-3">
                    <span className="glass-sepia inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg text-sepia">
                      <interest.Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                    </span>
                    <h3 className="font-display text-lg font-bold text-parchment">{interest.title}</h3>
                  </div>
                  <p className="mt-3 text-sm leading-relaxed text-fg/60">{interest.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* gallery — the faces behind the years */}
      <section className="hairline-top bg-mist/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-sepia">Gallery</p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold text-parchment sm:text-3xl">The faces behind the years.</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg/60 sm:text-base">
            The résumé, in monochrome.
          </p>
          <div className="mt-10 gap-4 sm:columns-2 md:columns-3">
            {gallery.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 60} className="mb-4 break-inside-avoid">
                <figure className="glass hairline group overflow-hidden rounded-xl" data-fx>
                  <div className="photo-vign relative overflow-hidden">
                    <ClipImage
                      src={photo.src}
                      alt={photo.alt}
                      w={photo.w}
                      h={photo.h}
                      delay={(i % 3) * 0.08}
                      sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-2 px-3.5 py-2.5">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-sepia">{photo.tag}</span>
                    <span className="truncate font-mono text-[10px] uppercase tracking-[0.16em] text-fg/45">{photo.place}</span>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  )
}
