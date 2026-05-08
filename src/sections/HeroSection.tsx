import { ChevronDown } from 'lucide-react'

export function HeroSection() {
  const scrollToSection = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      // Update URL hash without triggering native jump
      if (history.replaceState) {
        history.replaceState(null, '', `#${id}`)
      }
    }
  }

  return (
    <section id="hero" className="hero-section">
      <div className="hero-vignette" aria-hidden />
      <div className="hero-grain" aria-hidden />
      <div className="hero-gradient-overlays" aria-hidden />

      <div className="hero-inner">
        <div className="hero-copy">
          <div className="hero-badge anim-fade d0">
            <span className="hero-badge-dot" aria-hidden />
            Gestão, planejamento e execução de obras
          </div>
          <h1 className="hero-h1 anim-spacing d1">
            Sua obra conduzida com <em>precisão</em>, transparência e excelência técnica.
          </h1>
          <p className="hero-sub sub-muted anim-fade d2">
            Da análise inicial à entrega final, a Azoubel Engenharia transforma projetos em execuções
            organizadas, acompanhadas em tempo real e conduzidas por uma equipe tecnicamente qualificada.
          </p>
          <div className="hero-actions anim-fade d3">
            <a className="btn btn-primary-solid" href="#contato" onClick={scrollToSection('contato')}>
              Solicitar orçamento
            </a>
            <a className="btn btn-ghost-dark" href="#processo" onClick={scrollToSection('processo')}>
              Ver processo
            </a>
          </div>
        </div>

        <div className="hero-footer-bar">
          <div className="hero-stats hero-stats-glass hero-stats-row anim-fade d4">
            <div className="hero-stat">
              <strong>+50</strong>
              <span>projetos executados</span>
            </div>
            <div className="hero-stat-divider" aria-hidden />
            <div className="hero-stat">
              <strong>+300k</strong>
              <span>m² gerenciados</span>
            </div>
            <div className="hero-stat-divider" aria-hidden />
            <div className="hero-stat">
              <strong>+R$650.000.000</strong>
              <span>em orçamentos de obras entregues</span>
            </div>
          </div>
        </div>

        <a className="hero-scroll-affordance" href="#processo" onClick={scrollToSection('processo')}>
          <span>Nosso processo</span>
          <ChevronDown size={18} strokeWidth={1.75} aria-hidden />
        </a>
      </div>
    </section>
  )
}
