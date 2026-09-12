'use client'

import { useEffect, useRef, type ElementType, type ReactNode } from 'react'

/**
 * Reveal — fades content up into view on scroll via IntersectionObserver.
 * `delay` staggers siblings (ms). Falls back to visible instantly when
 * prefers-reduced-motion is set (CSS handles the stillness).
 */
export function Reveal({
  children,
  delay = 0,
  className = '',
  as,
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: ElementType
}) {
  const ref = useRef<HTMLElement | null>(null)
  const Tag = (as ?? 'div') as ElementType

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            io.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <Tag
      ref={ref as never}
      className={`reveal ${className}`}
      style={{ ['--reveal-delay' as string]: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}