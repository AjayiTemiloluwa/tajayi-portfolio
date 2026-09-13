'use client'

import { useEffect } from 'react'
import type Lenis from 'lenis'

/**
 * SmoothScroll — Lenis-powered buttery scrolling, plus the dionpieters-style
 * "page dip": while you scroll, the content tips like a section of a cylinder
 * (perspective + rotateX driven by scroll velocity) and eases flat the moment
 * you stop. Adopted from Inchstone, adapted to window scrolling.
 */
const BEND_MAX_DEG = 5
const BEND_GAIN = 0.32
const BEND_EASE = 0.14
const BEND_SETTLE = 0.02
const TOUCH_BEND_MAX_DEG = 4

function applyBend(content: HTMLElement | null, bend: number, pivotY: number) {
  if (!content) return
  if (Math.abs(bend) < BEND_SETTLE) {
    if (content.style.transform) {
      content.style.transform = ''
      content.style.willChange = ''
    }
    return
  }
  const origin = `50% ${Math.round(pivotY)}px`
  if (content.style.transformOrigin !== origin) {
    content.style.transformOrigin = origin
  }
  content.style.willChange = 'transform'
  // Always concave (page dips INTO the screen); rotateX stays positive.
  content.style.transform = `perspective(1600px) rotateX(${Math.abs(bend).toFixed(3)}deg)`
}

export function SmoothScroll() {
  // -- Desktop: Lenis + dip ------------------------------------------------
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let cancelled = false
    let raf = 0
    let lenis: Lenis | null = null
    let bend = 0

    import('lenis')
      .then(({ default: LenisCtor }) => {
        if (cancelled) return
        lenis = new LenisCtor({ lerp: 0.1, wheelMultiplier: 1.05, syncTouch: false })
        document.documentElement.classList.add('lenis', 'lenis-smooth')
        const content = document.querySelector<HTMLElement>('[data-scroll-content]')
        content?.style.setProperty('transform-origin', '50% 0px')

        const loop = (time: number) => {
          lenis?.raf(time)
          const bendContent = document.querySelector<HTMLElement>('[data-scroll-content]')
          if (bendContent) {
            const v = typeof lenis?.velocity === 'number' ? lenis.velocity : 0
            const target = Math.max(-BEND_MAX_DEG, Math.min(BEND_MAX_DEG, v * BEND_GAIN))
            bend += (target - bend) * BEND_EASE
            applyBend(bendContent, bend, window.scrollY)
          }
          raf = requestAnimationFrame(loop)
        }
        raf = requestAnimationFrame(loop)
      })
      .catch(() => {})

    return () => {
      cancelled = true
      cancelAnimationFrame(raf)
      lenis?.destroy()
      document.documentElement.classList.remove('lenis', 'lenis-smooth')
      const content = document.querySelector<HTMLElement>('[data-scroll-content]')
      if (content) {
        content.style.transform = ''
        content.style.willChange = ''
      }
    }
  }, [])

  // -- Touch: native scroll drives a gentler dip (Lenis isn't running) ----
  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    let raf = 0
    let running = false
    let lastTop = window.scrollY
    let lastTime = performance.now()
    let velocity = 0
    let bend = 0

    const tick = () => {
      const content = document.querySelector<HTMLElement>('[data-scroll-content]')
      if (!content) {
        running = false
        return
      }
      velocity *= 0.9
      const target = Math.max(
        -TOUCH_BEND_MAX_DEG,
        Math.min(TOUCH_BEND_MAX_DEG, velocity * BEND_GAIN)
      )
      bend += (target - bend) * BEND_EASE

      if (Math.abs(bend) < BEND_SETTLE && Math.abs(velocity) < 0.05) {
        applyBend(content, 0, window.scrollY)
        bend = 0
        running = false
        return
      }
      applyBend(content, bend, window.scrollY)
      raf = requestAnimationFrame(tick)
    }

    const wake = () => {
      if (!running) {
        running = true
        raf = requestAnimationFrame(tick)
      }
    }

    const onScroll = () => {
      const now = performance.now()
      const dt = Math.max(16, now - lastTime)
      const delta = window.scrollY - lastTop
      lastTop = window.scrollY
      lastTime = now
      velocity = velocity * 0.75 + (delta / dt) * 16 * 0.25
      wake()
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      cancelAnimationFrame(raf)
      const content = document.querySelector<HTMLElement>('[data-scroll-content]')
      if (content) {
        content.style.transform = ''
        content.style.willChange = ''
      }
    }
  }, [])

  return null
}