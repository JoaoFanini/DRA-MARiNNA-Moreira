import { navLinks, site, whatsappLink } from '../data/content'
import { scrollToTarget } from '../lib/smoothScroll'

export default function Header() {
  const go = (e, id) => {
    e.preventDefault()
    scrollToTarget(id)
  }
  return (
    <header className="top">
      <div className="container top__inner">
        <a href="#inicio" className="top__brand" onClick={(e) => go(e, 'inicio')}>
          {site.name}
        </a>
        <nav className="top__links" aria-label="Principal">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)}>
              {l.label}
            </a>
          ))}
        </nav>
        <a className="top__cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          Agendar
        </a>
      </div>
    </header>
  )
}
