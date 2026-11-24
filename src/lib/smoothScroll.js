import Lenis from 'lenis'
import { gsap, ScrollTrigger, prefersReducedMotion } from './gsap'

/*
 * Lenis dirigido pelo ticker do GSAP: um único requestAnimationFrame
 * para scroll + animações, e o ScrollTrigger atualizado a cada frame do Lenis.
 */
let lenis = null

export function initSmoothScroll() {
  if (lenis || prefersReducedMotion()) return null

  lenis = new Lenis({
    lerp: 0.1, // resposta rápida, sem sensação de atraso
    wheelMultiplier: 1,
    smoothWheel: true,
    syncTouch: false, // no touch mantém a rolagem nativa (mais natural no mobile)
  })

  lenis.on('scroll', ScrollTrigger.update)
  const raf = (time) => lenis?.raf(time * 1000)
  gsap.ticker.add(raf)
  gsap.ticker.lagSmoothing(0)

  return () => {
    gsap.ticker.remove(raf)
    lenis?.destroy()
    lenis = null
  }
}

export const getLenis = () => lenis

export function stopScroll() {
  lenis ? lenis.stop() : (document.documentElement.style.overflow = 'hidden')
}

export function startScroll() {
  lenis ? lenis.start() : (document.documentElement.style.overflow = '')
}

/** Rola até uma seção (#id, id ou elemento) respeitando a navbar fixa. */
export function scrollToTarget(target, { offset = 0, immediate = false } = {}) {
  const el =
    typeof target === 'string'
      ? document.getElementById(target.replace(/^#/, ''))
      : target
  if (!el && target !== 0) return

  if (lenis) {
    lenis.scrollTo(target === 0 ? 0 : el, {
      offset,
      immediate,
      duration: 1.4,
      easing: (t) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
    })
  } else {
    const top = target === 0 ? 0 : el.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }
}
