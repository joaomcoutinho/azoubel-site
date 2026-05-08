import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getProjectBySlug } from '../data/projects'

export function ProjectPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return (
      <div className="page-hero-detail">
        <Link className="back-link" to="/#portfolio">
          <ArrowLeft size={16} /> Voltar ao portfólio
        </Link>
        <h1 className="headline-display">Projeto não encontrado</h1>
      </div>
    )
  }

  return (
    <article>
      <header
        className="page-hero-detail"
        style={{
          paddingTop: '7rem',
          backgroundImage: `linear-gradient(135deg, rgba(39,61,112,0.95), rgba(26,37,60,0.92)), url(${project.coverImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Link className="back-link" to="/#portfolio">
          <ArrowLeft size={16} /> Voltar ao portfólio
        </Link>
        <h1 className="headline-display" style={{ fontSize: 'clamp(1.85rem,3.5vw,2.75rem)', marginBottom: 'var(--sp-3)' }}>
          {project.name}
        </h1>
        <p className="sub-muted" style={{ fontSize: 16 }}>{project.location}</p>
      </header>
      <div className="sc sc-light" style={{ marginTop: 10 }}>
        <div className="sc-inner">
          <p className="ds-label">Projeto</p>
          <h2 className="headline-display" style={{ fontSize: 'clamp(1.5rem,2.5vw,2rem)', marginBottom: 'var(--sp-10)' }}>
            Cada projeto executado reflete nosso compromisso com qualidade, organização e resultado.
          </h2>

          <section className="detail-section">
            <h3>Visão geral da obra</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-2)', maxWidth: 800 }}>{project.overview}</p>
          </section>

          <section className="detail-section">
            <h3>Escopo executado</h3>
            <ul style={{ paddingLeft: 20, color: 'var(--text-2)', lineHeight: 1.7 }}>
              {project.scope.map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </section>

          <section className="detail-section">
            <h3>Desafios técnicos</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-2)', maxWidth: 800 }}>{project.challenges}</p>
          </section>

          <section className="detail-section">
            <h3>Soluções aplicadas</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-2)', maxWidth: 800 }}>{project.solutions}</p>
          </section>

          <section className="detail-section">
            <h3>Galeria completa</h3>
            <div className="gallery-grid">
              {project.gallery.map((src) => (
                <img key={src} src={src} alt="" loading="lazy" />
              ))}
            </div>
          </section>

          <section className="detail-section">
            <h3>Status da execução</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-2)', maxWidth: 800 }}>{project.executionStatus}</p>
          </section>

          <section className="detail-section">
            <h3>Informações técnicas</h3>
            <p style={{ fontSize: 15, lineHeight: 1.7, color: 'var(--text-2)', maxWidth: 800 }}>{project.technicalInfo}</p>
          </section>

          <Link className="btn btn-brand-blue" style={{ marginTop: 'var(--sp-8)' }} to="/#contato">
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </article>
  )
}
