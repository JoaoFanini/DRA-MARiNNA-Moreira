import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger, useGSAP)

gsap.defaults({ ease: 'power3.out', duration: 1 })
ScrollTrigger.config({ ignoreMobileResize: true })

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

/* Breakpoints compartilhados por todas as animações (gsap.matchMedia) */
export const MQ = {
  desktop: '(min-width: 901px) and (prefers-reduced-motion: no-preference)',
  mobile: '(max-width: 900px) and (prefers-reduced-motion: no-preference)',
  motion: '(prefers-reduced-motion: no-preference)',
  reduce: '(prefers-reduced-motion: reduce)',
  finePointer: '(hover: hover) and (pointer: fine)',
}

export { gsap, ScrollTrigger, useGSAP }

// depuração no console durante o desenvolvimento
if (import.meta.env.DEV && typeof window !== 'undefined') (window.__ST = ScrollTrigger), (window.__gsap = gsap)
