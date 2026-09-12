'use client'

import { useEffect, useRef } from 'react'

/**
 * CursorGlow — casts a soft pool of warm light that follows the pointer.
 * Adopted from Inchstone. Two layers: a wide ambient halo (slow, weighty
 * trail) and a small hot core (snappy follow). Screen-blended so it reads
 * as light cast onto the surface. Grows over interactive elements and
 * surfaces a short gold instruction label beneath it.
 */
const INTERACTIVE_SELECTOR =
  'a, button, [role="button"], input, select, textarea, summary, [data-cursor]'

function resolveHintLabel(el: HTMLElement | null): string {
  if (!el) return ''
  const explicit = el.closest('[data-cursor]')?.getAttribute('data-cursor')
  if (explicit) return explicit
  if (el.closest('a[href^="mailto:"]')) return 'SAY HELLO'
  if (el.closest('a[href^="tel:"]')) return 'CALL'
  if (el.closest('a[target="_blank"]')) return 'OPEN'
  if (el.closest('a[download]')) return 'DOWNLOAD'
  const text = el.textContent?.trim().slice(0, 22)
  return text && text.length <= 22 ? text.toUpperCase() : ''
}

export function CursorGlow() {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const haloRef = useRef<HTMLDivElement | null>(null)
  const coreRef = useRef<HTMLDivElement | null>(null)
  const labelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const root = rootRef.current
    const halo = haloRef.current
    const core = coreRef.current
    if (!root || !halo || !core) return

    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const HALO_EASE = 0.09
    const CORE_EASE = 0.26
    const REST_EPSILON = 0.15
    const PRESS_SCALE = 0.92

    let raf = 0
    let running = false
    let active = false
    let pressing = false
    let scale = 1
    let hovering = false
    let hoverScale = 1

    const target = { x: -2000, y: -2000 }
    const haloPos = { x: -2000, y: -2000 }
    const corePos = { x: -2000, y: -2000 }

    const tick = () => {
      haloPos.x += (target.x - haloPos.x) * HALO_EASE
      haloPos.y += (target.y - haloPos.y) * HALO_EASE
      corePos.x += (target.x - corePos.x) * CORE_EASE
      corePos.y += (target.y - corePos.y) * CORE_EASE

      scale += ((pressing ? PRESS_SCALE : 1) - scale) * 0.18
      hoverScale += ((hovering ? 1.55 : 1) - hoverScale) * 0.16

      halo.style.transform = `translate3d(${haloPos.x}px, ${haloPos.y}px, 0) translate(-50%, -50%) scale(${scale})`
      core.style.transform = `translate3d(${corePos.x}px, ${corePos.y}px, 0) translate(-50%, -50%) scale(${scale * hoverScale})`
      if (labelRef.current) {
        labelRef.current.style.transform = `translate3d(${corePos.x}px, ${corePos.y + 26}px, 0) translate(-50%, 0)`
      }

      const settled =
        Math.abs(target.x - haloPos.x) < REST_EPSILON &&
        Math.abs(target.y - haloPos.y) < REST_EPSILON &&
        Math.abs(target.x - corePos.x) < REST_EPSILON &&
        Math.abs(target.y - corePos.y) < REST_EPSILON &&
        Math.abs(scale - (pressing ? PRESS_SCALE : 1)) < 0.004

      if (settled && !pressing) {
        running = false
        return
      }
      raf = requestAnimationFrame(tick)
    }

    const wake = () => {
      if (!running) {
        running = true
        raf = requestAnimationFrame(tick)
      }
    }

    const show = () => {
      if (!active) {
        active = true
        root.classList.add('is-active')
      }
    }

    const hide = () => {
      active = false
      root.classList.remove('is-active')
    }

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX
      target.y = e.clientY
      if (haloPos.x < -1000) {
        haloPos.x = target.x
        haloPos.y = target.y
        corePos.x = target.x
        corePos.y = target.y
      }
      show()
      wake()
    }

    const onDown = () => {
      pressing = true
      wake()
    }
    const onUp = () => {
      pressing = false
      wake()
    }
    const onLeaveWindow = () => hide()

    const onOver = (e: PointerEvent) => {
      const target = e.target as HTMLElement | null
      const hit = target?.closest?.(INTERACTIVE_SELECTOR) as HTMLElement | null
      hovering = !!hit
      const label = resolveHintLabel(hit)
      if (labelRef.current) {
        labelRef.current.textContent = label
        labelRef.current.style.opacity = label ? '1' : '0'
      }
    }

    window.addEventListener('pointermove', onMove, { passive: true })
    window.addEventListener('pointerdown', onDown, { passive: true })
    window.addEventListener('pointerup', onUp, { passive: true })
    window.addEventListener('pointerover', onOver, { passive: true })
    document.documentElement.addEventListener('pointerleave', onLeaveWindow)
    window.addEventListener('blur', onLeaveWindow)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('pointermove', onMove)
      window.removeEventListener('pointerdown', onDown)
      window.removeEventListener('pointerup', onUp)
      window.removeEventListener('pointerover', onOver)
      document.documentElement.removeEventListener('pointerleave', onLeaveWindow)
      window.removeEventListener('blur', onLeaveWindow)
    }
  }, [])

  return (
    <div ref={rootRef} className="cursor-glow" aria-hidden="true">
      <div ref={haloRef} className="cursor-glow-halo" />
      <div ref={coreRef} className="cursor-glow-core" />
      <div ref={labelRef} className="cursor-glow-label" />
    </div>
  )
}