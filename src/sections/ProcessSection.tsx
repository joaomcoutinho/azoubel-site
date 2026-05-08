import { processSteps } from '../data/process'

export function ProcessSection() {
  const base = import.meta.env.BASE_URL
  const bgByIndex = [
    `${base}imagens/processo/01-diagnostico.png`,
    `${base}imagens/processo/02-proposta.png`,
    `${base}imagens/processo/03-planejamento.png`,
    `${base}imagens/processo/04-execucao.png`,
    `${base}imagens/processo/05-relatorios.png`,
    `${base}imagens/processo/06-entrega.png`,
  ]

  return (
    <section id="processo" className="sc sc-dark process-section" style={{ marginTop: 10, backgroundColor: "⁠#293F73" }}>
      <div className="sc-inner">
        <p className="ds-label">Como trabalhamos</p>
        <h2 className="headline-display headline-process">Processo de trabalho</h2>
        <p className="sub-muted process-intro">
          Um método claro da <strong>primeira conversa à entrega</strong>: diagnóstico, proposta, planejamento,
          execução, relatórios e conclusão com o mesmo rigor técnico em cada etapa.
        </p>

        

        {/* Cards — default: number + title only; hover: expands to show body */}
        <div className="ptl-grid">
          {processSteps.map((s, idx) => (
            <article
              key={s.n}
              className="ptl-card ptl-card-withbg anim-fade"
              tabIndex={0}
              style={{ ['--ptl-bg' as unknown as string]: `url(${bgByIndex[idx]})` } as React.CSSProperties}
            >
              <span className="ptl-card-watermark" aria-hidden>{s.n}</span>
              <div className="ptl-card-arrow" aria-hidden>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              </div>
              <h3 className="ptl-card-title">{s.title}</h3>
              <div className="ptl-card-expand">
                <div className="ptl-card-sep" aria-hidden />
                <p className="ptl-card-body">{s.body}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="process-cta-wrap">
          <a className="btn btn-primary-solid" href="#contato">
            Solicite seu orçamento
          </a>
        </div>
      </div>
    </section>
  )
}
