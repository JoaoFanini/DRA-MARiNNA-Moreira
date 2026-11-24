import { useEffect } from 'react'
import { gsap, ScrollTrigger, useGSAP, prefersReducedMotion } from './lib/gsap'
import { initSmoothScroll } from './lib/smoothScroll'
import PreviewBadge from './components/PreviewBadge'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import About from './sections/About'
import Treatments from './sections/Treatments'
import Steps from './sections/Steps'
import Reviews from './sections/Reviews'
import Contact from './sections/Contact'

export default function App() {
  useEffect(() => {
    const destroy = initSmoothScroll()
    const refresh = () => ScrollTrigger.refresh()
    document.fonts?.ready.then(refresh)
    window.addEventListener('load', refresh)
    return () => {
      window.removeEventListener('load', refresh)
      destroy?.()
    }
  }, [])

  // revelação ao rolar: elementos com data-reveal sobem ao entrar na tela
  useGSAP(() => {
    if (prefersReducedMotion()) return
    gsap.utils.toArray('[data-reveal]').forEach((el) => {
      gsap.from(el, {
        y: 36,
        opacity: 0,
        duration: 1.1,
        ease: 'expo.out',
        scrollTrigger: { trigger: el, start: 'top 88%', once: true },
      })
    })
  })

  return (
    <>
      <a href="#sobre" className="skip-link">Pular para o conteúdo</a>
      <Header />
      <main>
        <Hero />
        <About />
        <Treatments />
        <Steps />
        <Reviews />
        <Contact />
      </main>
      <Footer />
      <PreviewBadge />
    </>
  )
}
