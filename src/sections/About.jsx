import { site } from '../data/content'

export default function About() {
  return (
    <section id="sobre" className="section">
      <div className="container about">
        <div className="ph" data-reveal>Foto da Dra. Marinna e do consultório<br />(a enviar pela doutora)</div>
        <div data-reveal>
          <p className="eyebrow">Sobre a doutora</p>
          <h2 className="h2">{site.name}</h2>
          <p className="about__p">
            Espaço para a apresentação da doutora: formação, tempo de atuação e o que ela busca oferecer a cada paciente. Este texto deve ser escrito a partir das informações que ela mesma enviar.
          </p>
          <p className="about__p">
            Pensado para quem adia a consulta por medo: a ideia é que cada pessoa saiba o que vai acontecer antes de sentar na cadeira.
          </p>
          <div className="creds">
            <div className="cred"><strong>CRO</strong><span className="ph-text">número a confirmar</span></div>
            <div className="cred"><strong>Formação</strong><span className="ph-text">a confirmar</span></div>
          </div>
        </div>
      </div>
    </section>
  )
}
