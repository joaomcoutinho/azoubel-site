import { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'
import type { ProjectCategory, ProjectStatus } from '../types/project'

const banner =
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2000&q=80'

export type PortfolioFilter =
  | 'todos'
  | ProjectCategory
  | 'concluido'
  | 'andamento'

const filterLabels: { key: PortfolioFilter; label: string }[] = [
  { key: 'todos', label: 'Todos os projetos' },
  { key: 'gestao', label: 'Gestão de obras' },
  { key: 'planejamento', label: 'planejamento' },
  { key: 'ornamentacao', label: 'Ornamentação' },
  { key: 'concluido', label: 'Projetos concluídos' },
  { key: 'andamento', label: 'Projetos em andamento' },
]

function categoryLabel(c: ProjectCategory): string {
  if (c === 'gestao') return 'Gestão de obras'
  if (c === 'planejamento') return 'planejamento'
  return 'Ornamentação'
}

function matches(p: { categories: ProjectCategory[]; status: ProjectStatus }, f: PortfolioFilter) {
  if (f === 'todos') return true
  if (f === 'concluido' || f === 'andamento') return p.status === f
  return p.categories.includes(f)
}

export function PortfolioSection() {
  const [filter, setFilter] = useState<PortfolioFilter>('todos')

  const filtered = useMemo(() => projects.filter((p) => matches(p, filter)), [filter])

  // Re-observe project cards every time the filtered list changes so the
  // fade-in animation fires correctly after filter switches or back-navigation.
  useEffect(() => {
    const t = window.setTimeout(() => {
      const cards = Array.from(
        document.querySelectorAll('#portfolio .project-card.anim-fade:not(.in)'),
      ) as HTMLElement[]
      if (!cards.length) return

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return
            ;(e.target as HTMLElement).classList.add('in')
            obs.unobserve(e.target)
          })
        },
        { threshold: 0.05 },
      )
      cards.forEach((c) => obs.observe(c))
      return () => obs.disconnect()
    }, 50)
    return () => window.clearTimeout(t)
  }, [filtered])

  return (
    <section id="portfolio" className="sc sc-light">
      <div
        className="section-banner"
        style={{
          marginBottom: 'var(--sp-10)',
          backgroundImage: `url(${banner})`,
        }}
      >
        <p className="ds-label" style={{ color: 'rgba(250,249,246,0.45)' }}>
          Portfólio
        </p>
        <h2 className="headline-display" style={{ fontSize: 'clamp(1.85rem,3.5vw,2.75rem)', color: 'var(--text-inv)' }}>
          Projetos executados com atenção técnica e excelência operacional.
        </h2>
        <p className="sub-muted" style={{ maxWidth: 640, marginTop: 'var(--sp-4)', color: 'rgba(250,249,246,0.75)' }}>
          Conheça algumas das obras conduzidas pela Azoubel Engenharia e veja na prática nosso padrão de
          execução, organização e entrega.
        </p>
      </div>
      <div className="sc-inner" style={{ paddingTop: 0 }}>
        <div className="filter-row" role="group" aria-label="Filtrar projetos">
          {filterLabels.map(({ key, label }) => (
            <button
              key={key}
              type="button"
              className={`filter-chip${filter === key ? ' on' : ''}`}
              onClick={() => setFilter(key)}
            >
              {label}
            </button>
          ))}
        </div>
        <div className="project-grid">
          {filtered.map((p) => (
            <Link key={p.slug} className="project-card anim-fade" to={`/projetos/${p.slug}`}>
              <div className="project-card-bg" style={{ backgroundImage: `url(${p.coverImage})` }} />
              <div className="project-card-inner">
                <div className="project-card-meta">
                  {p.categories.map((c) => (
                    <span key={c} className="tag">
                      {categoryLabel(c)}
                    </span>
                  ))}
                  <span className={`tag${p.status === 'andamento' ? ' status-on' : ''}`}>
                    {p.status === 'concluido' ? 'Concluído' : 'Em andamento'}
                  </span>
                </div>
                <h3>{p.name}</h3>
                <p className="loc">{p.location}</p>
                <span className="btn btn-ghost-dark" style={{ display: 'inline-flex', width: 'fit-content' }}>
                  Ver detalhes do projeto
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
