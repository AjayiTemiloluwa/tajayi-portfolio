import Image from 'next/image'
import { chapters } from '@/data/chapters'
import { PageShell } from '@/components/PageShell'
import { Reveal } from '@/components/ui/Reveal'

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
      title={[{ text: 'The years that ' }, { text: 'made me.', gold: true }]}
      blurb="Six chapters from 2021 to now — a petroleum engineering degree that slowly, deliberately became data science, finance and teaching without ever letting go of the other."
    >
      <section className="relative mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <ol className="relative space-y-10 before:absolute before:bottom-2 before:left-[7px] before:top-2 before:w-px before:bg-gold/25 sm:before:left-[9px]">
          {chapters.map((chapter, i) => (
            <Reveal key={chapter.year} delay={i * 60} as="li" className="relative pl-10 sm:pl-14">
              <span
                className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-gold/50 bg-paper"
                aria-hidden="true"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-gold" />
              </span>
              <p className="font-mono text-sm font-bold tabular-nums text-gold">{chapter.year}</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-parchment sm:text-3xl">{chapter.title}</h2>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg/65 sm:text-base">{chapter.body}</p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {chapter.highlights.map((h) => (
                  <li key={h} className="rounded-full border border-gold/20 px-2.5 py-1 font-mono text-[10px] text-gold/90">
                    {h}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* gallery — the faces behind the years */}
      <section className="hairline-top bg-mist/40">
        <div className="mx-auto w-full max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-gold">Gallery</p>
          <h2 className="mt-3 max-w-2xl font-display text-2xl font-bold text-parchment sm:text-3xl">The faces behind the years.</h2>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fg/60 sm:text-base">
            Graduation mornings, the engineering community, facilitation, and the people I&apos;ve built with — the résumé, in colour.
          </p>
          <div className="mt-10 gap-4 [column-fill:balance] sm:columns-2 md:columns-3">
            {gallery.map((photo, i) => (
              <Reveal key={photo.src} delay={i * 60} className="mb-4 break-inside-avoid">
                <figure className="glass hairline group overflow-hidden rounded-xl" data-fx>
                  <div className="overflow-hidden">
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      width={photo.w}
                      height={photo.h}
                      loading="lazy"
                      sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
                      className="h-auto w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <figcaption className="flex items-center justify-between gap-2 px-3.5 py-2.5">
                    <span className="font-mono text-[10px] font-bold uppercase tracking-[0.16em] text-gold">{photo.tag}</span>
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
