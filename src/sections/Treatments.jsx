import { treatments } from '../data/content'

export default function Treatments() {
  return (
    <section id="tratamentos" className="section section--alt">
      <div className="container">
        <p className="eyebrow" data-reveal>Tratamentos</p>
        <h2 className="h2" data-reveal>O que a doutora oferece</h2>
        <p className="subtitle" data-reveal>Lista de exemplo. Os tratamentos e as descrições serão trocados pela lista real da doutora.</p>
        <div className="grid3">
          {treatments.map((t, i) => (
            <article className="tile" key={t.title} data-reveal>
              <span className="tile__n">{String(i + 1).padStart(2, '0')}</span>
              <h3 className="tile__title">{t.title}</h3>
              <p className="tile__text">{t.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
