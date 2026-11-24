import { site, whatsappLink } from '../data/content'
import Button from '../components/Button'
import { ArrowRight } from '../components/Icons'

export default function Contact() {
  return (
    <section id="contato" className="section">
      <div className="container">
        <div className="visit" data-reveal>
          <h2 className="visit__title">Pronta para cuidar do seu sorriso?</h2>
          <p className="visit__text">Fale com a equipe e marque sua consulta com calma.</p>
          <Button href={whatsappLink()} variant="solid" size="lg" icon={<ArrowRight />}>
            Agendar pelo WhatsApp
          </Button>
          <div className="visit__info">
            <div><b>Endereço</b>a confirmar</div>
            <div><b>Horário</b>a confirmar</div>
            <div><b>Telefone</b>{site.phone.display}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
