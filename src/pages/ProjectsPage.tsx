import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { projects } from '../data/projects'
import { BentoGridPanel } from '../components/BentoGrid'
import type { Entry } from '../components/BentoGrid'

// Preenchimento com placeholders para completar dois padrões [tall·pair·pair·tall]
// (1ª unidade: 2 reais + 4 vazios | 2ª unidade: 6 vazios)
const PLACEHOLDER_COUNT = 10

export function ProjectsPage() {
  const realCount = projects.length

  const entries: Entry[] = [
    ...projects,
    ...Array<null>(PLACEHOLDER_COUNT).fill(null),
  ]

  return (
    <article>

      {/* ── Hero ── */}
      <header className="projects-page-hero">
        <Link to="/#portfolio" className="back-link">
          <ArrowLeft size={15} strokeWidth={1.75} />
          Voltar ao site
        </Link>

        <div className="projects-page-hero-body">
          <p className="ds-label projects-page-label">Nossos trabalhos</p>
          <h1 className="projects-page-title">
            Todos os projetos
          </h1>
          <p className="projects-page-desc">
            Conheça as obras conduzidas pela Azoubel Engenharia — cada entrega
            reflete nosso padrão de execução, organização e resultado.
          </p>
          <span className="projects-page-count">
            {realCount} {realCount === 1 ? 'projeto concluído' : 'projetos concluídos'}
          </span>
        </div>
      </header>

      {/* ── Grid ── */}
      <section className="sc sc-dark bento-section projects-bento-section">
        <BentoGridPanel entries={entries} />
      </section>

    </article>
  )
}
