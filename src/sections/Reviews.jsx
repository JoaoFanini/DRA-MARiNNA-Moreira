export default function Reviews() {
  return (
    <section id="avaliacoes" className="section">
      <div className="container">
        <p className="eyebrow" data-reveal>Avaliações</p>
        <h2 className="h2" data-reveal>O que dizem os pacientes</h2>
        <p className="subtitle" data-reveal>Área reservada para as avaliações reais no Google. Nota e depoimentos entram aqui somente depois de conferidos na página do consultório.</p>
        <div className="reviews" data-reveal>
          <div className="score">
            <div className="score__big ph-text">—</div>
            <div className="score__stars" aria-hidden="true">★★★★★</div>
            <small>Nota no Google (a confirmar)</small>
          </div>
          <div className="review-slot">
            Depoimentos reais dos pacientes serão colocados aqui, com nome e data, copiados da página de avaliações do Google.
          </div>
        </div>
      </div>
    </section>
  )
}
