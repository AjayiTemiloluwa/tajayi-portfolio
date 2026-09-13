'use client'

import { motion, useScroll, useSpring } from 'motion/react'

/**
 * ScrollProgress — a 2px sepia reading-progress bar pinned to the very top
 * of the viewport. Lives OUTSIDE the [data-scroll-content] wrapper so the
 * page-dip transform never moves it.
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.4 })
  return (
    <motion.div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[80] h-[2px] origin-left bg-sepia"
      style={{ scaleX }}
    />
  )
}