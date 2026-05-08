const base = import.meta.env.BASE_URL
const imgGestao =
  'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1200&q=80'
const imgPlan = `${base}imagens/planejamento.png`
const imgOrn = `${base}imagens/ornamentacao.png`

export function ServicesSection() {
  return (
    <section id="servicos" className="sc sc-warm">
      <div className="sc-inner">
        <p className="ds-label">Serviços</p>
        <h2 className="headline-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 'var(--sp-4)' }}>
          Soluções completas para gestão e execução de obras.
        </h2>
        <p className="sub-muted" style={{ maxWidth: 640, marginBottom: 'var(--sp-12)', color: 'var(--text-2)' }}>
          Atuamos de forma estratégica em todas as etapas do projeto, garantindo mais controle,
          eficiência e segurança operacional.
        </p>
        <div className="service-row anim-fade">
          <div className="service-img" style={{ backgroundImage: `url(${imgGestao})` }} role="presentation" />
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 'var(--sp-4)' }}>
              Gestão de obras
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-2)', marginBottom: 'var(--sp-6)' }}>
              Coordenação completa da execução, acompanhamento técnico e controle operacional para
              garantir maior previsibilidade e qualidade na entrega.
            </p>
            <a className="btn btn-primary" href="#contato">
              Solicitar avaliação
            </a>
          </div>
        </div>
        <div className="service-row rev anim-fade">
          <div className="service-img" style={{ backgroundImage: `url(${imgPlan})` }} role="presentation" />
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 'var(--sp-4)' }}>
              Planejamento &amp; controle
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-2)', marginBottom: 'var(--sp-6)' }}>
              Estruturação de cronogramas, organização de etapas, monitoramento de desempenho e
              acompanhamento contínuo da obra.
            </p>
            <a className="btn btn-primary" href="#contato">
              Falar com especialista
            </a>
          </div>
        </div>
        <div className="service-row anim-fade">
          <div className="service-img" style={{ backgroundImage: `url(${imgOrn})` }} role="presentation" />
          <div>
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 28, marginBottom: 'var(--sp-4)' }}>
              Ornamentação
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.65, color: 'var(--text-2)', marginBottom: 'var(--sp-6)' }}>
              Execução e desenvolvimento de soluções com foco estético, funcionalidade e integração com
              o projeto arquitetônico.
            </p>
            <a className="btn btn-primary" href="#portfolio">
              Conhecer serviço
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
