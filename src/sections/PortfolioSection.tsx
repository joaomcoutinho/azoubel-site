import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import { BentoGridPanel } from '../components/BentoGrid'
import type { Entry } from '../components/BentoGrid'

// Quantos placeholders adicionar para completar visualmente um padrão [tall·pair·pair·tall]
const PLACEHOLDER_COUNT = 4

export function PortfolioSection() {
  const entries: Entry[] = [
    ...projects,
    ...Array<null>(PLACEHOLDER_COUNT).fill(null),
  ]

  return (
    <section id="portfolio" className="sc sc-dark bento-section">

      {/* ── Header ── */}
      <div className="bento-header">
        <div className="bento-header-left">
          <p className="ds-label bento-ds-label">Nossos trabalhos</p>
          <h2 className="bento-section-title">Portfólio</h2>
        </div>
        <Link to="/projetos" className="bento-view-all">
          Ver todos os projetos →
        </Link>
      </div>

      {/* ── Grid + footer ── */}
      <BentoGridPanel entries={entries} />

    </section>
  )
}
