import { steps } from '../data/content'

export default function Steps() {
  return (
    <section id="como-agendar" className="section section--dark">
      <div className="container">
        <p className="eyebrow eyebrow--light" data-reveal>Como agendar</p>
        <h2 className="h2 h2--light" data-reveal>Três passos, sem complicação</h2>
        <div className="grid3 steps">
          {steps.map((s, i) => (
            <div className="step" key={s.title} data-reveal>
              <span className="step__n">{i + 1}</span>
              <h3 className="step__title">{s.title}</h3>
              <p className="step__text">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
