'use client'

import { useRef } from 'react'
import { motion, useReducedMotion, useScroll, useTransform } from 'motion/react'

/**
 * GhostWord — a giant outlined display word parked behind a section,
 * drifting horizontally as you scroll through (Robin Noguier energy).
 * Purely decorative; stroke color follows the theme sepia token.
 */
export function GhostWord({
  word,
  className = '',
  range = 60,
}: {
  word: string
  className?: string
  range?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduced = useReducedMotion()
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const x = useTransform(scrollYProgress, [0, 1], [range, -range])

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={`pointer-events-none absolute inset-x-0 select-none overflow-hidden ${className}`}
    >
      <motion.div
        className="whitespace-nowrap font-display font-bold leading-none text-transparent"
        style={
          reduced
            ? { WebkitTextStroke: '1px rgb(var(--sepia-rgb) / 0.1)' }
            : { x, WebkitTextStroke: '1.5px rgb(var(--sepia-rgb) / 0.14)' }
        }
      >
        <span className="text-[22vw] lg:text-[15vw]">{word}</span>
      </motion.div>
    </div>
  )
}