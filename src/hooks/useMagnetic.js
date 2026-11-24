import { useEffect } from 'react'
import { gsap, prefersReducedMotion } from '../lib/gsap'

/* Leve atração do elemento em direção ao cursor (apenas ponteiro fino). */
export function useMagnetic(ref, { strength = 0.25 } = {}) {
  useEffect(() => {
    const el = ref.current
    if (!el || !strength || prefersReducedMotion()) return
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return

    // Anima uma variável CSS para não disputar o transform com o Motion.
    el.style.setProperty('--mx', 0)
    el.style.setProperty('--my', 0)
    const xTo = gsap.quickTo(el, '--mx', { duration: 0.6, ease: 'power3.out' })
    const yTo = gsap.quickTo(el, '--my', { duration: 0.6, ease: 'power3.out' })
    el.style.translate = 'calc(var(--mx, 0) * 1px) calc(var(--my, 0) * 1px)'

    const move = (e) => {
      const r = el.getBoundingClientRect()
      xTo((e.clientX - (r.left + r.width / 2)) * strength)
      yTo((e.clientY - (r.top + r.height / 2)) * strength)
    }
    const leave = () => {
      xTo(0)
      yTo(0)
    }
    el.addEventListener('pointermove', move)
    el.addEventListener('pointerleave', leave)
    return () => {
      el.removeEventListener('pointermove', move)
      el.removeEventListener('pointerleave', leave)
    }
  }, [ref, strength])
}
