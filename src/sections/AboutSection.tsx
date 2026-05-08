import teamImgSrc from '../imagens/sobre_empresa.png'
const teamImg = teamImgSrc
const bgObra = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=2000&q=80'

const values = [
  { icon: '⬡', label: 'Comprometimento técnico' },
  { icon: '⬡', label: 'Transparência em cada etapa' },
  { icon: '⬡', label: 'Organização operacional' },
  { icon: '⬡', label: 'Responsabilidade com prazos' },
  { icon: '⬡', label: 'Excelência na execução' },
]

export function AboutSection() {
  return (
    <>
      <section id="sobre" className="sc sc-light" style={{ marginTop: 12 }}>
        <div className="sc-inner">
          <p className="ds-label">Sobre a empresa</p>
          <h2 className="headline-display" style={{ fontSize: 'clamp(2rem,4vw,3rem)', marginBottom: 'var(--sp-10)' }}>
            Engenharia conduzida com responsabilidade, método e comprometimento.
          </h2>

          {/* Company description + photo */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 'var(--sp-8)', marginBottom: 'var(--sp-16)' }}>
            <div
              style={{
                borderRadius: 'var(--r-xl)',
                overflow: 'hidden',
                aspectRatio: '4/3',
                backgroundImage: `url(${teamImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                boxShadow: 'var(--shadow-md)',
              }}
              role="img"
              aria-label="Equipe Azoubel"
            />
            <div>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: 'var(--sp-4)' }}>
                A Azoubel Engenharia atua no gerenciamento e execução de obras com foco em organização,
                controle técnico e eficiência operacional.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-2)', marginBottom: 'var(--sp-4)' }}>
                Mais do que executar projetos, buscamos entregar tranquilidade ao cliente através de
                processos bem estruturados, acompanhamento próximo e decisões técnicas assertivas em
                cada etapa da obra.
              </p>
              <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-2)' }}>
                Nossa atuação combina planejamento estratégico, supervisão contínua e compromisso com
                qualidade, prazo e transparência.
              </p>
            </div>
          </div>

          {/* MVV — Missão, Visão, Valores */}
          <div className="mvv-section">
            <p className="ds-label" style={{ color: 'var(--text-3)' }}>Nossos pilares</p>
            <h3 className="mvv-heading">Missão, Visão &amp; Valores</h3>

            <div className="mvv-grid">
              {/* Missão */}
              <article className="mvv-card mvv-card--valores flex-1">
                <div className="mvv-card-label">
                  <span className="mvv-card-num">01</span>
                  <span className="mvv-card-tag">Missão</span>
                </div>
               
                <h4 className="mvv-card-title">Executar e gerenciar obras com excelência técnica, organização e confiança.</h4>
                <p className="mvv-card-body">
                  Cada projeto é tratado com o mesmo nível de comprometimento, do diagnóstico inicial à entrega final, garantindo resultados que superam as expectativas do cliente.
                </p>
              </article>

              {/* Visão */}
              <article className="mvv-card mvv-card--valores flex-1">
                <div className="mvv-card-label">
                  <span className="mvv-card-num">02</span>
                  <span className="mvv-card-tag">Visão</span>
                </div>
                
                <h4 className="mvv-card-title">Ser referência em gestão e execução de projetos pela qualidade da entrega.</h4>
                <p className="mvv-card-body">
                  Almejamos ser a escolha natural de construtoras, incorporadoras e clientes que buscam um parceiro técnico confiável, previsível e comprometido com resultados.
                </p>
              </article>

              {/* Valores */}
              <article className="mvv-card mvv-card--valores flex-1">
                <div className="mvv-card-label">
                  <span className="mvv-card-num">03</span>
                  <span className="mvv-card-tag">Valores</span>
                </div>
                <h4 className="mvv-card-title" >Os princípios que guiam cada decisão e cada obra.</h4>
                <ul className="mvv-values-list" role="list">
                  {values.map((v) => (
                    <li key={v.label} className="mvv-value-item">
                      <span className="mvv-value-check" aria-hidden>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      {v.label}
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section
        className="sc sc-dark section-banner"
        style={{ marginTop: 10, backgroundImage: `url(${bgObra})` }}
      >
        <p className="ds-label" style={{ color: 'rgba(250,249,246,0.45)' }}>
          Institucional
        </p>
        <h2 className="headline-display" style={{ fontSize: 'clamp(1.75rem,3vw,2.5rem)', color: 'var(--text-inv)', maxWidth: 720 }}>
          Da fundação ao acabamento, conduzimos cada marco com método e registro técnico.
        </h2>
      </section>
    </>
  )
}
