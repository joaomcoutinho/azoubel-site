import { Link } from 'react-router-dom'
import { Instagram, Linkedin } from 'lucide-react'
import { logoAzoubel } from '../branding'

export function Footer() {
  return (
    <footer className="ds-footer">
      <div className="footer-top">
        <div>
          <Link to="/" className="footer-logo-link" aria-label="Azoubel Engenharia — Início">
            <img src={logoAzoubel} alt="" className="footer-logo-img" decoding="async" />
          </Link>
          <p style={{ marginTop: 'var(--sp-2)', maxWidth: 320 }}>
            Gestão, planejamento e execução de obras com precisão e transparência.
          </p>
        </div>
        <div className="footer-socials" aria-label="Redes sociais">
          <a className="footer-social" href="#" aria-label="Instagram">
            <Instagram size={18} />
          </a>
          <a className="footer-social" href="#" aria-label="LinkedIn">
            <Linkedin size={18} />
          </a>
        </div>
      </div>
      <div className="footer-links">
        <div className="footer-col">
          <a href="#hero">Início</a>
          <a href="#sobre">Sobre a empresa</a>
          <a href="#servicos">Serviços</a>
          <a href="#portfolio">Portfólio</a>
        </div>
        <div className="footer-col">
          <a href="#porque">Por que a Azoubel</a>
          <a href="#contato">Contato</a>
        </div>
        <div className="footer-col">
          <a href="#">Política de privacidade</a>
          <a href="#">Termos de uso</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Azoubel Engenharia. Todos os direitos reservados.</p>
        <p>Engenharia · Gestão de obras · São Paulo</p>
      </div>
    </footer>
  )
}
