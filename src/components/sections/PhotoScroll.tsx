'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { ClipImage } from '@/components/anim/ClipImage'

/**
 * PhotoScroll — the Robin Noguier signature: a full-screen sticky stage
 * where vertical scroll drives a horizontal parade of photographs
 * (B&W + brown vignette), with a live plate counter. Mobile and
 * reduced-motion fall back to a native snap-scroll row.
 */

const PLATES = [
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

export function PhotoScroll() {
  const ref = useRef<HTMLElement | null>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const x = useTransform(scrollYProgress, [0, 1], ['1%', '-76%'])
  const counter = useTransform(scrollYProgress, (v) =>
    String(Math.min(PLATES.length, Math.max(1, Math.round(v * (PLATES.length - 1)) + 1))).padStart(2, '0')
  )

  // Momentum distortion — the parade leans into fast scrolling, then settles.
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smoothV = useSpring(velocity, { stiffness: 170, damping: 44, mass: 0.7 })
  const skew = useTransform(smoothV, [-2400, 2400], [-1.8, 1.8], { clamp: true })

  return (
    <>
      {/* desktop — sticky stage, vertical scroll drives the parade */}
      <section
        ref={ref}
        aria-label="Photo plates"
        style={{ height: `${PLATES.length * 34}vh` }}
        className={`relative ${reduced ? 'hidden' : 'hidden md:block'}`}
      >
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-8 pb-6">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-sepia">
              Plates — the faces behind the work
            </p>
            <p className="font-mono text-[11px] tabular-nums tracking-[0.26em] text-fg/50">
              <motion.span className="text-sepia">{counter}</motion.span>
              {' / '}
              {String(PLATES.length).padStart(2, '0')}
            </p>
          </div>

          <motion.div
            style={reduced ? { x } : { x, skewX: skew }}
            className="flex items-center gap-[4vw] pl-[8vw] pr-[8vw] will-change-transform"
          >
            {PLATES.map((photo, i) => (
              <div
                key={photo.src}
                className="photo-vign relative h-[58vh] w-[30vw] shrink-0 overflow-hidden rounded-xl"
              >
                <ClipImage
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  priority={i === 0}
                  sizes="30vw"
                  className="h-full w-full rounded-xl"
                />
                <span className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-full bg-black/45 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#f2ede3] backdrop-blur-sm">
                  {photo.tag} — {photo.place}
                </span>
              </div>
            ))}

            {/* end cap */}
            <a
              href="/life"
              data-cursor="MORE"
              className="glass-sepia flex h-[58vh] w-[24vw] shrink-0 flex-col items-start justify-between rounded-xl p-6 transition hover:-translate-y-1"
            >
              <span className="font-mono text-[10px] font-bold uppercase tracking-[0.26em] text-sepia">fin.</span>
              <div>
                <p className="font-display text-2xl font-bold leading-snug text-parchment">
                  The faces behind the work.
                </p>
                <p className="mt-3 inline-flex items-center gap-2 font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-sepia">
                  Full chapters
                  <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </p>
              </div>
            </a>
          </motion.div>
        </div>
      </section>

      {/* mobile + reduced motion — native snap-scroll row */}
      <section aria-label="Photo plates" className={`relative ${reduced ? 'block' : 'md:hidden'}`}>
        <div className="mx-auto w-full max-w-6xl px-5 pb-4 pt-14 sm:px-8">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.26em] text-sepia">
            Plates — the faces behind the work
          </p>
        </div>
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-10 pt-4 sm:px-8">
          {PLATES.map((photo) => (
            <figure
              key={photo.src}
              className="photo-vign relative h-[64vh] w-[78vw] shrink-0 snap-center overflow-hidden rounded-xl"
            >
              <ClipImage
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="78vw"
                className="h-full w-full rounded-xl"
              />
              <figcaption className="pointer-events-none absolute bottom-3 left-3 z-10 rounded-full bg-black/45 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.18em] text-[#f2ede3] backdrop-blur-sm">
                {photo.tag} — {photo.place}
              </figcaption>
            </figure>
          ))}
        </div>
      </section>
    </>
  )
}