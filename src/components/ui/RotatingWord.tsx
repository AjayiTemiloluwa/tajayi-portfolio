'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'

/**
 * RotatingWord — crossfades a stack of phrases in the hero. Robin
 * Noguier-style energy with silk easing.
 */
const PHRASES = [
  'well-control AI that catches kicks before they escalate.',
  'satellite analytics that put gas flaring on the record.',
  'fracturing fluids optimized by random forests.',
  'financial models that price a sustainable transition.',
  'young coders into confident builders.',
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