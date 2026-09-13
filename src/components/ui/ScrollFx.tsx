'use client'

import { useEffect } from 'react'

/**
 * ScrollFx — global pointer-FX engine (delegated, no per-card JS).
 * Adopted from Inchstone:
 * - cursor spotlight -> radial sepia highlight following the pointer over
 *   every card/box (.spotlight-card, .card, .glass, .glass-sepia, [data-fx])
 * - .tilt-card       -> subtle 3D tilt toward the pointer
 * - text-lit         -> the text block nearest the cursor brightens
 * - scroll ripple    -> soft sepia ripples fan out at the cursor while scrolling
 * Respects prefers-reduced-motion by doing nothing at all.
 */
export function ScrollFx() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let raf = 0

    const CARD_SELECTOR = '.spotlight-card, .card, .glass-sepia, .glass, [data-fx]'
    const TEXT_SELECTOR =
      'h1,h2,h3,h4,h5,h6,p,li,blockquote,figcaption,dt,dd,.font-display,[data-touch-text]'
    let litText: HTMLElement | null = null

    const update = (e: PointerEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const target = e.target as HTMLElement | null
        if (!target) return

        const spot = target.closest?.(CARD_SELECTOR) as HTMLElement | null
        if (spot) {
          if (getComputedStyle(spot).position === 'static') {
            spot.style.position = 'relative'
          }
          const r = spot.getBoundingClientRect()
          spot.style.setProperty('--mx', `${e.clientX - r.left}px`)
          spot.style.setProperty('--my', `${e.clientY - r.top}px`)
        }

        const text = target.closest?.(TEXT_SELECTOR) as HTMLElement | null
        if (text !== litText) {
          litText?.classList.remove('text-lit')
          litText = text && !text.closest('[data-noreveal]') ? text : null
          litText?.classList.add('text-lit')
        }

        const tiltEl = target.closest?.('.tilt-card') as HTMLElement | null
        if (tiltEl) {
          const r = tiltEl.getBoundingClientRect()
          const px = (e.clientX - r.left) / r.width - 0.5
          const py = (e.clientY - r.top) / r.height - 0.5
          tiltEl.style.transform = `perspective(800px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg)`
        }
      })
    }

    const clearLitText = () => {
      litText?.classList.remove('text-lit')
      litText = null
    }

    const resetTilt = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null
      const tiltEl = target?.closest?.('.tilt-card') as HTMLElement | null
      if (tiltEl) {
        tiltEl.style.transition = 'transform 0.45s cubic-bezier(0.22, 1, 0.36, 1)'
        tiltEl.style.transform = 'perspective(800px)'
        window.setTimeout(() => {
          if (tiltEl) tiltEl.style.transition = ''
        }, 470)
      }
    }

    window.addEventListener('pointermove', update, { passive: true })
    window.addEventListener('pointerdown', update, { passive: true })
    document.addEventListener('pointerleave', resetTilt)
    document.addEventListener('pointerleave', clearLitText)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', update)
      window.removeEventListener('pointerdown', update)
      document.removeEventListener('pointerleave', resetTilt)
      document.removeEventListener('pointerleave', clearLitText)
      clearLitText()
    }
  }, [])

  return null
}