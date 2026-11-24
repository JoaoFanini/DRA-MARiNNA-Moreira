import { useRef, useState } from 'react'
import { gsap, useGSAP, prefersReducedMotion } from '../lib/gsap'
import { site, whatsappLink } from '../data/content'
import Button from '../components/Button'
import { ArrowRight } from '../components/Icons'

// Foto da doutora: colocar o arquivo em public/dra-marinna.jpg (ou trocar o nome aqui)
const PHOTO = `${import.meta.env.BASE_URL}dra-marinna.jpg`
const LINES = ['Dra. Marinna', 'Moreira']
const CURTAIN = [...'DRA. M.M']

export default function Hero() {
  const root = useRef(null)
  const [hasPhoto, setHasPhoto] = useState(true)

  useGSAP(
    () => {
      if (prefersReducedMotion()) return
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
      tl.from('.curtain__letter', { yPercent: 110, duration: 1, stagger: 0.07 })
        .to('.curtain', { yPercent: -100, duration: 1.2, ease: 'expo.inOut' }, '+=0.4')
        .from('.hero__word > span', { yPercent: 110, duration: 1.2, stagger: 0.12 }, '-=0.7')
        .from('.hero__photo', { clipPath: 'inset(100% 0% 0% 0%)', duration: 1.6, ease: 'expo.inOut' }, '-=0.9')
        .from('.hero__photo img', { scale: 1.12, duration: 2.4, ease: 'power2.out' }, '<')
        .from('[data-hero]', { y: 30, opacity: 0, duration: 1, stagger: 0.1 }, '-=1.4')
        .from('.card', { x: 50, opacity: 0, duration: 1.2 }, '-=0.9')
    },
    { scope: root },
  )

  return (
    <section id="inicio" className="hero" ref={root}>
      <div className="curtain" aria-hidden="true">
        <div className="curtain__bg" style={{ backgroundImage: `url(${PHOTO})` }} />
        <div className="curtain__shade" />
        <div className="curtain__text">
          {CURTAIN.map((c, i) => (
            <span className={c === ' ' ? 'curtain__space' : 'curtain__mask'} key={i}>
              {c !== ' ' && <span className="curtain__letter">{c}</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="container hero__grid">
        <div>
          <p className="eyebrow" data-hero>{site.tagline}</p>
          <h1 className="hero__title display">
            {LINES.map((w) => (
              <span className="hero__word" key={w}>
                <span>{w}</span>
              </span>
            ))}
          </h1>
          <p className="lead hero__lead" data-hero>
            Um sorriso saudável, com atendimento que deixa você tranquilo. Consultas com calma, explicação clara de cada passo e agendamento simples.
          </p>
          <div className="hero__cta" data-hero>
            <Button href={whatsappLink()} variant="solid" size="lg" icon={<ArrowRight />}>
              Agendar pelo WhatsApp
            </Button>
            <Button href="#tratamentos" variant="ghost" size="lg">
              Ver tratamentos
            </Button>
          </div>
        </div>

        <div className="hero__visual">
          <div className="hero__photo">
            {hasPhoto ? (
              <img src={PHOTO} alt="Dra. Marinna Moreira" onError={() => setHasPhoto(false)} />
            ) : (
              <span className="ph-text">Foto da doutora<br />(a enviar)</span>
            )}
          </div>
          <aside className="card" aria-label="Informações da consulta">
            <h3 className="card__title">Informações da consulta</h3>
            <div className="card__row"><span>Endereço</span><b className="ph-text">a confirmar</b></div>
            <div className="card__row"><span>Dias e horários</span><b className="ph-text">a confirmar</b></div>
            <div className="card__row"><span>Primeira consulta</span><b className="ph-text">valor a confirmar</b></div>
            <div className="card__row"><span>Agendamento</span><b>WhatsApp</b></div>
          </aside>
        </div>
      </div>
    </section>
  )
}
