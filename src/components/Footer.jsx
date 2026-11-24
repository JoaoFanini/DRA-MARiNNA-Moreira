import { navLinks, site, whatsappLink } from '../data/content'

export default function Footer() {
  return (
    <footer id="rodape" className="foot">
      <div className="container foot__grid">
        <div>
          <p className="foot__name">{site.name}</p>
          <p className="foot__muted">{site.tagline}</p>
        </div>
        <div>
          <p className="foot__label">Endereço</p>
          <p>{site.address.street}</p>
          <p className="foot__muted">{site.address.district}</p>
        </div>
        <div>
          <p className="foot__label">Contato</p>
          <p><a href={site.phone.href}>{site.phone.display}</a></p>
          <p><a href={whatsappLink()} target="_blank" rel="noopener noreferrer">Falar no WhatsApp</a></p>
        </div>
        <div>
          <p className="foot__label">Navegue</p>
          <ul className="foot__links">
            {navLinks.map((l) => (
              <li key={l.id}><a href={`#${l.id}`}>{l.label}</a></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="container foot__bottom">
        <span>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</span>
        <span>Responsável técnico: CRO a confirmar</span>
      </div>
    </footer>
  )
}
