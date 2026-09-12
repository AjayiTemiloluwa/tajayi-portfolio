'use client'

import { useEffect } from 'react'

/**
 * ScrollRipples — soft gold ripples fan out at the pointer while the user
 * scrolls (wheel on desktop, touch drag on mobile). Adopted from Inchstone.
 * Respects prefers-reduced-motion.
 */
export function ScrollRipples() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const fxLayer = document.createElement('div')
    fxLayer.className = 'scrollfx-layer'
    fxLayer.setAttribute('aria-hidden', 'true')
    document.body.appendChild(fxLayer)

    let lastRipple = 0
    let scrollRippleRaf = 0
    const spawnScrollRipple = (cx: number, cy: number) => {
      const vw = window.innerWidth
      const vh = window.innerHeight
      const count = vw < 768 ? 1 : 2
      for (let i = 0; i < count; i++) {
        const r = document.createElement('div')
        r.className = 'scroll-ripple'
        const jx = (Math.random() - 0.5) * 96
        const jy = (Math.random() - 0.5) * 72
        r.style.left = `${Math.min(vw - 10, Math.max(10, cx + jx))}px`
        r.style.top = `${Math.min(vh - 10, Math.max(10, cy + jy))}px`
        const size = 26 + Math.random() * 24
        r.style.width = `${size}px`
        r.style.height = `${size}px`
        fxLayer.appendChild(r)
        r.addEventListener('animationend', () => r.remove())
      }
    }
    const scheduleScrollRipple = (cx: number, cy: number) => {
      const now = Date.now()
      if (now - lastRipple < 180) return
      lastRipple = now
      if (scrollRippleRaf) return
      scrollRippleRaf = requestAnimationFrame(() => {
        scrollRippleRaf = 0
        spawnScrollRipple(cx, cy)
      })
    }
    const onWheel = (e: WheelEvent) => {
      scheduleScrollRipple(e.clientX, e.clientY)
    }
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0]
      if (t) scheduleScrollRipple(t.clientX, t.clientY)
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchmove', onTouchMove, { passive: true })

    return () => {
      cancelAnimationFrame(scrollRippleRaf)
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchmove', onTouchMove)
      fxLayer.remove()
    }
  }, [])

  return null
}