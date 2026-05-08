import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const base = import.meta.env.BASE_URL
const whyBg = [
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80',
  'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
  `${base}imagens/controle.png`,
  `${base}imagens/tradecenter.jpeg`,
  'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80',
]

const logoBg =
  'https://images.unsplash.com/photo-1634017837904-5c10cffd432a?w=2000&q=80'

const testimonials = [
  {
    quote:
      'A condução da obra foi extremamente organizada e transparente do início ao fim. A gente sabia exatamente o que estava acontecendo em cada etapa.',
    name: 'Marina F.',
    role: 'Proprietária',
    location: 'São Paulo, SP',
    avatar:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=256&q=80&auto=format&fit=crop',
  },
  {
    quote:
      'Equipe técnica muito preparada, com acompanhamento próximo e excelente comunicação. O planejamento trouxe previsibilidade e segurança pra decidir.',
    name: 'Rodrigo A.',
    role: 'Gestor de operações',
    location: 'Santo André, SP',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=256&q=80&auto=format&fit=crop',
  },
  {
    quote:
      'A Azoubel trouxe segurança e previsibilidade para toda a execução do projeto. O padrão de entrega e o cuidado com detalhes fizeram diferença.',
    name: 'Carla M.',
    role: 'Arquiteta parceira',
    location: 'São Paulo, SP',
    avatar:
      'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=256&q=80&auto=format&fit=crop',
  },
]

export function WhySection() {
  const items = useMemo(
    () => [
      {
        title: 'Expertise técnica',
        body: 'Equipe qualificada e preparada para conduzir obras com responsabilidade técnica e acompanhamento contínuo.',
        image: whyBg[0],
      },
      {
        title: 'Gestão transparente',
        body: 'Relatórios, acompanhamento e comunicação clara durante todas as etapas do projeto.',
        image: whyBg[1],
      },
      {
        title: 'Controle operacional',
        body: 'Processos organizados para garantir mais eficiência, previsibilidade e qualidade na execução.',
        image: whyBg[2],
      },
      {
        title: 'Localização estratégica',
        body: 'Atendimento próximo e suporte ágil para acompanhamento de obras e demandas operacionais.',
        image: whyBg[3],
      },
      {
        title: 'Compromisso com qualidade',
        body: 'Cada detalhe da execução é acompanhado com foco em excelência e durabilidade.',
        image: whyBg[4],
      },
    ],
    [],
  )

  const [activeIdx, setActiveIdx] = useState(0)
  const hoverTimerRef = useRef<number | null>(null)

  const setActiveWithIntent = (idx: number) => {
    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current)
  hoverTimerRef.current = window.setTimeout(() => setActiveIdx(idx), 160)
  }

  const clearIntent = () => {
    if (hoverTimerRef.current) window.clearTimeout(hoverTimerRef.current)
    hoverTimerRef.current = null
  }

  // Preload images for instant hover switching
  useEffect(() => {
    items.forEach((it) => {
      const img = new Image()
      img.decoding = 'async'
      img.src = it.image
    })
  }, [items])

  useEffect(() => clearIntent, [])

  return (
    <section id="porque" className="sc sc-dark">
      <div
        className="section-banner"
        style={{
          marginBottom: 'var(--sp-10)',
          backgroundImage: `url(${logoBg})`,
        }}
      >
        <p className="ds-label">Por que a Azoubel</p>
        <h2 className="headline-display" style={{ fontSize: 'clamp(1.85rem,3.5vw,2.75rem)', color: 'var(--text-inv)' }}>
          Confiança técnica para conduzir sua obra com mais segurança e previsibilidade.
        </h2>
      </div>
      <div className="sc-inner" style={{ paddingTop: 0 }}>
        <h3 style={{ ...sectionTitleMuted, marginBottom: 'var(--sp-6)', color: "white", fontWeight: "bold", fontSize: 20 }}>Diferenciais</h3>
        <div className="diff-explorer anim-fade" aria-label="Diferenciais Azoubel">
          <div className="diff-nav" role="tablist" aria-label="Diferenciais">
            {items.map((item, i) => {
              const isActive = i === activeIdx
              return (
                <button
                  key={item.title}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`diff-tab${isActive ? ' on' : ''}`}
                  onMouseEnter={() => setActiveWithIntent(i)}
                  onMouseLeave={clearIntent}
                  onFocus={() => setActiveIdx(i)}
                  onClick={() => setActiveIdx(i)}
                >
                  <span className="diff-tab-title">{item.title}</span>
                  <motion.span
                    className="diff-tab-desc"
                    aria-hidden={!isActive}
                    animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  >
                    {item.body}
                  </motion.span>
                </button>
              )
            })}
          </div>

          <div className="diff-visual" aria-hidden>
            <AnimatePresence initial={false} mode="wait">
              <motion.div
                key={items[activeIdx]?.image}
                className="diff-visual-img"
                style={{ backgroundImage: `url(${items[activeIdx]?.image})` }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
            <div className="diff-visual-overlay" />
          </div>

          <div className="diff-accordion" aria-label="Diferenciais (mobile)">
            {items.map((item, i) => (
              <details key={item.title} className="diff-acc-item" open={i === 0}>
                <summary className="diff-acc-summary">{item.title}</summary>
                <div className="diff-acc-body">
                  <div className="diff-acc-img" style={{ backgroundImage: `url(${item.image})` }} aria-hidden />
                  <p className="diff-acc-text">{item.body}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
        <h3 style={{ ...sectionTitleMuted, marginTop: 'var(--sp-16)', marginBottom: 'var(--sp-6)' }}>
          Depoimentos
        </h3>
        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <figure key={t.name} className="testimonial-card anim-fade" role="group" aria-label={`Depoimento de ${t.name}`}>
              <div className="tcard-top">
                <img className="tcard-avatar" src={t.avatar} alt="" loading="lazy" decoding="async" />
                <div className="tcard-id">
                  <div className="tcard-name">{t.name}</div>
                  <div className="tcard-meta">
                    {t.role} · {t.location}
                  </div>
                </div>
                <div className="tcard-stars" aria-hidden>
                  ★★★★★
                </div>
              </div>
              <blockquote className="tcard-quote">“{t.quote}”</blockquote>
              <figcaption className="tcard-caption">Cliente Azoubel</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

const sectionTitleMuted = {
  fontFamily: 'var(--font-body)',
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: 'rgba(250,249,246,0.38)',
}
