/**
 * BentoGrid — componente compartilhado entre PortfolioSection e ProjectsPage.
 * Exporta: Entry, BentoGridPanel
 */
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Project, ProjectCategory } from '../types/project'

/* ─── tipos ─────────────────────────────────────────────────── */

export type Entry = Project | null

/* ─── helpers ───────────────────────────────────────────────── */

export function categoryLabel(c: ProjectCategory): string {
  if (c === 'gestao') return 'Gestão'
  if (c === 'execucao') return 'Execução'
  if (c === 'planejamento') return 'Planejamento'
  return 'Ornamentação'
}

/* ─── buildColumns ──────────────────────────────────────────── */

type TallCol = { type: 'tall'; entry: Entry }
type PairCol = { type: 'pair'; top: Entry; bottom: Entry }
type BentoCol = TallCol | PairCol

/**
 * Distribui uma lista plana de entries em colunas bento seguindo o
 * padrão repetido: tall · pair · pair · tall
 */
export function buildColumns(entries: Entry[]): BentoCol[] {
  const pattern: Array<'tall' | 'pair'> = ['tall', 'pair', 'pair', 'tall']
  const cols: BentoCol[] = []
  let pi = 0
  let ci = 0

  while (pi < entries.length) {
    const t = pattern[ci % pattern.length]
    if (t === 'tall') {
      cols.push({ type: 'tall', entry: entries[pi] })
      pi += 1
    } else {
      cols.push({
        type: 'pair',
        top: entries[pi] ?? null,
        bottom: entries[pi + 1] ?? null,
      })
      pi += 2
    }
    ci++
  }
  return cols
}

/* ─── PlaceholderCard ───────────────────────────────────────── */

function PlaceholderCard() {
  return (
    <div className="bento-card bento-card--placeholder">
      <div className="bento-placeholder-img">
        <span>Imagem do projeto aqui</span>
      </div>
      <span className="bento-badge">Em breve</span>
      <div className="bento-static-bar">
        <span>Projeto em breve</span>
      </div>
      <div className="bento-overlay">
        <div className="bento-overlay-meta">Em breve</div>
        <p className="bento-overlay-title">Projeto em breve</p>
        <p className="bento-overlay-desc">Informações do projeto aqui</p>
      </div>
    </div>
  )
}

/* ─── BentoCard (projeto real) ──────────────────────────────── */

interface BentoCardProps {
  project: Project
  draggingRef: { current: boolean }
}

function BentoCard({ project, draggingRef }: BentoCardProps) {
  const label = categoryLabel(project.categories[0])

  const handleClick = (e: React.MouseEvent) => {
    if (draggingRef.current) e.preventDefault()
  }

  return (
    <Link
      to={`/projetos/${project.slug}`}
      className="bento-card"
      style={{ backgroundImage: `url(${project.coverImage})` }}
      onClick={handleClick}
      draggable={false}
    >
      <div className="bento-veil" />
      <span className="bento-badge">{label}</span>
      <div className="bento-static-bar">
        <span>{project.name}</span>
      </div>
      <div className="bento-overlay">
        <div className="bento-overlay-meta">
          {label}&nbsp;·&nbsp;{project.location}
        </div>
        <p className="bento-overlay-title">{project.name}</p>
        <p className="bento-overlay-desc">{project.overview}</p>
        <span className="bento-overlay-cta">Ver projeto →</span>
      </div>
    </Link>
  )
}

/* ─── dispatcher ────────────────────────────────────────────── */

function EntryCard({
  entry,
  draggingRef,
}: {
  entry: Entry
  draggingRef: { current: boolean }
}) {
  if (!entry) return <PlaceholderCard />
  return <BentoCard project={entry} draggingRef={draggingRef} />
}

/* ─── BentoGridPanel ────────────────────────────────────────── */

interface BentoGridPanelProps {
  /** Projetos reais + nulls para slots placeholder */
  entries: Entry[]
}

/**
 * Renderiza o grid horizontal com drag-to-scroll e botões de navegação.
 * Não inclui header (label / título / link "ver todos") — o consumidor
 * é responsável por renderizá-lo antes, se necessário.
 */
export function BentoGridPanel({ entries }: BentoGridPanelProps) {
  const gridRef = useRef<HTMLDivElement>(null)
  const draggingRef = useRef(false)
  const [progress, setProgress] = useState(0)

  const columns = buildColumns(entries)

  // Rastreia o progresso de scroll horizontal para a barra de progresso (mobile)
  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const update = () => {
      const max = grid.scrollWidth - grid.clientWidth
      setProgress(max > 0 ? grid.scrollLeft / max : 0)
    }
    update()
    grid.addEventListener('scroll', update, { passive: true })
    return () => grid.removeEventListener('scroll', update)
  }, [])

  const scroll = (dir: 1 | -1) => {
    gridRef.current?.scrollBy({ left: dir * 360, behavior: 'smooth' })
  }

  const onMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.button !== 0) return
    const grid = gridRef.current
    if (!grid) return

    draggingRef.current = false
    const startX = e.clientX
    const scrollLeft = grid.scrollLeft

    const onMove = (ev: MouseEvent) => {
      const dx = ev.clientX - startX
      if (Math.abs(dx) > 4) draggingRef.current = true
      grid.scrollLeft = scrollLeft - dx
    }

    const onUp = () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseup', onUp)
      document.body.style.userSelect = ''
      setTimeout(() => { draggingRef.current = false }, 60)
    }

    document.body.style.userSelect = 'none'
    document.addEventListener('mousemove', onMove)
    document.addEventListener('mouseup', onUp)
  }

  return (
    <>
      <div
        ref={gridRef}
        className="bento-grid"
        onMouseDown={onMouseDown}
        role="region"
        aria-label="Galeria de projetos"
      >
        {columns.map((col, i) => {
          if (col.type === 'tall') {
            return (
              <div key={`tall-${i}`} className="bento-col-tall">
                <EntryCard entry={col.entry} draggingRef={draggingRef} />
              </div>
            )
          }
          return (
            <div key={`pair-${i}`} className="bento-col-pair">
              <EntryCard entry={col.top} draggingRef={draggingRef} />
              <EntryCard entry={col.bottom} draggingRef={draggingRef} />
            </div>
          )
        })}
      </div>

      {/* Barra de progresso — visível apenas no mobile via CSS */}
      <div className="bento-progress-track" aria-hidden>
        <div
          className="bento-progress-fill"
          style={{ width: `${Math.round(progress * 100)}%` }}
        />
      </div>

      <div className="bento-footer">
        <span className="bento-hint" aria-hidden>
          Arraste ou use as setas para navegar
        </span>
        <button
          type="button"
          className="bento-arrow"
          onClick={() => scroll(-1)}
          aria-label="Rolar para a esquerda"
        >
          <ChevronLeft size={16} strokeWidth={1.75} />
        </button>
        <button
          type="button"
          className="bento-arrow"
          onClick={() => scroll(1)}
          aria-label="Rolar para a direita"
        >
          <ChevronRight size={16} strokeWidth={1.75} />
        </button>
      </div>
    </>
  )
}
