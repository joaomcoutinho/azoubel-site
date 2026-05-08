import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
import { HeroSection } from '../sections/HeroSection'
import { ProcessSection } from '../sections/ProcessSection'
import { AboutSection } from '../sections/AboutSection'
import { ServicesSection } from '../sections/ServicesSection'
import { PortfolioSection } from '../sections/PortfolioSection'
import { WhySection } from '../sections/WhySection'
import { ContactSection } from '../sections/ContactSection'

export function HomePage() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (pathname !== '/') return
    const id = hash.replace('#', '')
    if (!id) return
    const t = window.setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 80)
    return () => window.clearTimeout(t)
  }, [pathname, hash])

  return (
    <>
      <HeroSection />
      <ProcessSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <WhySection />
      <ContactSection />
      <a
        className="fixed-cta-float fixed-cta-whatsapp"
        href="https://wa.me/5581988231327?text=Ol%C3%A1%21%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20com%20a%20Azoubel%20Engenharia."
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
        title="WhatsApp: (81) 98823-1327"
      >
        <MessageCircle size={22} strokeWidth={1.5} />
      </a>
    </>
  )
}
