'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

/**
 * RotatingWord — crossfades the intersections the career is built on.
 * Vision, not inventory: the rotation sweeps the whole span of the
 * work, not a list of past artifacts.
 */
const PHRASES = [
  'artificial intelligence & energy.',
  'machine learning & sustainability.',
  'data & capital.',
  'remote sensing & accountability.',
  'engineering & education.',
]

export function RotatingWord() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % PHRASES.length)
    }, 3200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <span className="relative inline-grid overflow-hidden align-bottom">
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: '0.9em', opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: '-0.9em', opacity: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="text-sepia-grad whitespace-nowrap"
        >
          {PHRASES[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  )
}