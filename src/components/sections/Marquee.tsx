'use client'

import { motion, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from 'motion/react'
import { marqueeItems } from '@/data/resume'

/**
 * Marquee — infinite craft ticker that SKEWS with scroll velocity
 * (Robin Noguier-style momentum distortion) and pauses on hover.
 */
export function Marquee() {
  const reduced = useReducedMotion()
  const { scrollY } = useScroll()
  const velocity = useVelocity(scrollY)
  const smooth = useSpring(velocity, { stiffness: 170, damping: 44, mass: 0.7 })
  const skew = useTransform(smooth, [-2400, 2400], [-2, 2], { clamp: true })

  const row = [...marqueeItems, ...marqueeItems]
  return (
    <div className="relative overflow-hidden hairline-top hairline-bottom bg-mist py-4" aria-hidden="true">
      <motion.div style={reduced ? undefined : { skewY: skew }} className="will-change-transform">
        <div className="marquee-track flex w-max items-center gap-8 pr-8">
          {row.map((item, i) => (
            <span key={i} className="flex items-center gap-8 whitespace-nowrap">
              <span className="font-mono text-[11px] uppercase tracking-[0.26em] text-fg/45">{item}</span>
              <span className="h-1 w-1 rounded-full bg-sepia/60" />
            </span>
          ))}
        </div>
      </motion.div>
      {/* edge fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[var(--bg)] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[var(--bg)] to-transparent" />
    </div>
  )
}