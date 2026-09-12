'use client'

import { useRef } from 'react'
import { motion, useInView, useReducedMotion } from 'motion/react'

export type MaskSegment = { text: string; gold?: boolean }

/**
 * MaskText — Robin Noguier-style masked reveal: every word rises out of
 * its own overflow mask when it scrolls into view. `gold: true` words get
 * the brass gradient. Stills instantly under prefers-reduced-motion.
 */
export function MaskText({
  segments,
  className = '',
  delay = 0,
  stagger = 0.055,
  once = true,
}: {
  segments: MaskSegment[]
  className?: string
  delay?: number
  stagger?: number
  once?: boolean
}) {
  const ref = useRef<HTMLSpanElement | null>(null)
  const inView = useInView(ref, { once, margin: '-12% 0px -12% 0px' })
  const reduced = useReducedMotion()

  const words: { w: string; gold: boolean; i: number }[] = []
  let i = 0
  for (const seg of segments) {
    for (const w of seg.text.split(' ')) {
      if (w === '') continue
      words.push({ w, gold: !!seg.gold, i: i++ })
    }
  }

  return (
    <span ref={ref} className={className} data-noreveal aria-label={words.map((x) => x.w).join(' ')}>
      {words.map(({ w, gold, i }) => (
        <span
          key={i}
          aria-hidden="true"
          className={`inline-block overflow-hidden align-bottom pb-[0.12em] -mb-[0.12em] ${i < words.length - 1 ? 'mr-[0.26em]' : ''}`}
        >
          <motion.span
            className={`inline-block will-change-transform ${gold ? 'text-gold-grad italic' : ''}`}
            initial={reduced ? { y: '0%' } : { y: '115%' }}
            animate={inView || reduced ? { y: '0%' } : { y: '115%' }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: delay + i * stagger }}
          >
            {w}
          </motion.span>
        </span>
      ))}
    </span>
  )
}