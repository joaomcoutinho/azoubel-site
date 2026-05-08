import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { logoAzoubel } from '../branding'

const sections = [
  ['hero', 'Início'],
  ['processo', 'Processo'],
  ['sobre', 'Sobre'],
  ['servicos', 'Serviços'],
  ['portfolio', 'Portfólio'],
  ['porque', 'Por quê'],
  ['contato', 'Contato'],
] as const

export function FloatingNav() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)
  const dropRef = useRef<HTMLDivElement>(null)

  const scrollTo = (id: string) => {
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const goSection = (id: string) => {
    if (pathname !== '/') {
      navigate({ pathname: '/', hash: id })
    } else {
      scrollTo(id)
    }
  }

  // Clicking the logo: if already on home, scroll to top; otherwise navigate home
  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    setMenuOpen(false)
  }

  // Close dropdown when clicking outside both nav and dropdown
  useEffect(() => {
    if (!menuOpen) return
    const handler = (e: MouseEvent | TouchEvent) => {
      const target = e.target as Node
      const inNav = navRef.current?.contains(target)
      const inDrop = dropRef.current?.contains(target)
      if (!inNav && !inDrop) setMenuOpen(false)
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [menuOpen])

  // Close on Escape key
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') setMenuOpen(false) }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [])

  // Close menu when route changes
  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <nav ref={navRef} className="pnav" aria-label="Principal">
        <NavLink
          className="pnav-brand pnav-brand-logo"
          to="/"
          end
          aria-label="Azoubel Engenharia — Início"
          onClick={handleLogoClick}
        >
          <img src={logoAzoubel} alt="" className="pnav-logo-img" decoding="async" />
        </NavLink>
        <span className="pnav-sep" aria-hidden />
        <div className="pnav-links">
          {sections.map(([id, label]) => (
            <button key={id} type="button" onClick={() => goSection(id)}>
              {label}
            </button>
          ))}
        </div>
        <button type="button" className="pnav-cta" onClick={() => goSection('contato')}>
          Orçamento
        </button>
        {/* Hamburger — mobile only */}
        <button
          type="button"
          className="pnav-hamburger"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" aria-hidden>
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" aria-hidden>
              <line x1="3" y1="7" x2="21" y2="7" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="17" x2="21" y2="17" />
            </svg>
          )}
        </button>
      </nav>

      {/* Mobile dropdown — rendered as sibling so it's outside the nav box */}
      {menuOpen && (
        <div ref={dropRef} className="pnav-mobile-dropdown" role="menu">
          {sections.map(([id, label]) => (
            <button
              key={id}
              type="button"
              role="menuitem"
              className="pnav-mobile-item"
              onClick={() => { goSection(id); setMenuOpen(false) }}
            >
              {label}
            </button>
          ))}
          <div className="pnav-mobile-sep" aria-hidden />
          <button
            type="button"
            role="menuitem"
            className="pnav-mobile-item pnav-mobile-item--cta"
            onClick={() => { goSection('contato'); setMenuOpen(false) }}
          >
            Solicitar orçamento
          </button>
        </div>
      )}
    </>
  )
}
