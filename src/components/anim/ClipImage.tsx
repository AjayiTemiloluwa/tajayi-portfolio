'use client'

import Image from 'next/image'
import { useRef } from 'react'
import { motion, useInView, useReducedMotion, useScroll, useTransform } from 'motion/react'

const SILK = [0.22, 1, 0.36, 1] as const

/**
 * ClipImage — the Noguier image treatment: the frame unclips (an inset
 * mask opening outward) while the photo settles from a slight zoom, then
 * parallax-drifts inside the frame as you scroll through. The B&W
 * archival filter comes from .photo-bw; pair with .photo-vign on the
 * frame for the brown vignette.
 */
export function ClipImage({
  src,
  alt,
  w,
  h,
  fill = false,
  sizes,
  className = '',
  imgClassName = '',
  priority = false,
  delay = 0,
}: {
  src: string
  alt: string
  w?: number
  h?: number
  fill?: boolean
  sizes?: string
  className?: string
  imgClassName?: string
  priority?: boolean
  delay?: number
}) {
  const ref = useRef<HTMLDivElement | null>(null)
  const reduced = useReducedMotion()
  const inView = useInView(ref, { once: true, margin: '-12% 0px' })
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], ['-7%', '7%'])

  const settled = reduced || inView

  return (
    <motion.div
      ref={ref}
      initial={reduced ? false : { clipPath: 'inset(16% 7% 16% 7% round 12px)' }}
      animate={settled ? { clipPath: 'inset(0% 0% 0% 0% round 12px)' } : undefined}
      transition={{ duration: 1.1, ease: SILK, delay }}
      className={`relative overflow-hidden ${className}`}
    >
      <motion.div
        style={reduced ? undefined : { y }}
        initial={reduced ? undefined : { scale: 1.3 }}
        animate={settled ? { scale: 1.16 } : undefined}
        transition={{ duration: 1.4, ease: SILK, delay }}
        className={fill ? 'absolute inset-0 h-full w-full' : 'h-full w-full'}
      >
        {fill ? (
          <Image
            src={src}
            alt={alt}
            fill
            sizes={sizes ?? '40vw'}
            priority={priority}
            className={`photo-bw object-cover ${imgClassName}`}
          />
        ) : (
          <Image
            src={src}
            alt={alt}
            width={w ?? 1200}
            height={h ?? 1500}
            sizes={sizes ?? '(min-width: 768px) 33vw, 100vw'}
            priority={priority}
            className={`photo-bw h-auto w-full object-cover ${imgClassName}`}
          />
        )}
      </motion.div>
    </motion.div>
  )
}