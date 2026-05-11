import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { FloatingNav } from './components/FloatingNav'
import { Footer } from './components/Footer'
import { HomePage } from './pages/HomePage'
import { ProjectPage } from './pages/ProjectPage'
import { ProjectsPage } from './pages/ProjectsPage'

export default function App() {
  const { pathname } = useLocation()

  // Scroll to top on every route change (prevents landing mid-page on navigation)
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior })
  }, [pathname])

  // Re-run observer on every route change so freshly mounted elements
  // (e.g. when navigating back to home from a project page) get animated.
  useEffect(() => {
    // Small delay to ensure React has finished painting the new route's DOM
    const t = window.setTimeout(() => {
      const els = Array.from(
        document.querySelectorAll(
          '.anim-fade:not(.in), .anim-clip:not(.in), .anim-left:not(.in), .anim-right:not(.in), .anim-spacing:not(.in)',
        ),
      ) as HTMLElement[]
      if (!els.length) return

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (!e.isIntersecting) return
            ;(e.target as HTMLElement).classList.add('in')
            obs.unobserve(e.target)
          })
        },
        { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
      )

      els.forEach((el) => obs.observe(el))
      return () => obs.disconnect()
    }, 80)

    return () => window.clearTimeout(t)
  }, [pathname])

  return (
    <div className="page-wrap">
      <FloatingNav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projetos" element={<ProjectsPage />} />
        <Route path="/projetos/:slug" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </div>
  )
}
