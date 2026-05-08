import { useState } from 'react'
import { Check, Mail, MapPin, Phone } from 'lucide-react'

export function ContactSection() {
  const [sent, setSent] = useState(false)

  function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contato" className="sc sc-light" style={{ marginBottom: 16 }}>
      <div className="sc-inner">
        <div className="contact-header">
          <p className="ds-label" style={{ justifyContent: 'center' }}>
            Contato
          </p>
          <h2 className="headline-display contact-title">
            Vamos transformar seu projeto em uma execução segura, organizada e eficiente.
          </h2>
          <p className="contact-sub">
            Fale com a Azoubel Engenharia e receba um atendimento técnico alinhado às necessidades da sua obra.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form-card" onSubmit={onSubmit}>
            <div className="contact-form-fields">
              <div className="ds-input-wrap">
                <label className="ds-input-label" htmlFor="nome">
                  Nome
                </label>
                <input id="nome" className="ds-input" name="nome" required placeholder="Seu nome" />
              </div>
              <div className="ds-input-wrap">
                <label className="ds-input-label" htmlFor="email">
                  E-mail
                </label>
                <input id="email" className="ds-input" name="email" type="email" required placeholder="email@empresa.com" />
              </div>
              <div className="ds-input-wrap">
                <label className="ds-input-label" htmlFor="tel">
                  Telefone
                </label>
                <input id="tel" className="ds-input" name="tel" placeholder="(00) 00000-0000" />
              </div>
              <div className="ds-input-wrap">
                <label className="ds-input-label" htmlFor="msg">
                  Mensagem
                </label>
                <textarea id="msg" className="ds-input" name="msg" rows={4} placeholder="Resumo da obra ou dúvida" />
              </div>
            </div>
            <button type="submit" className="btn btn-primary-solid contact-submit" disabled={sent}>
              {sent ? (
                <>
                  <Check size={18} /> Enviado
                </>
              ) : (
                'Solicitar orçamento'
              )}
            </button>
          </form>

          <aside className="contact-info-card" aria-label="Informações de contato">
            <div>
              <span className="contact-badge">Disponível agora</span>
              <h3 className="contact-card-title">
                Vamos criar algo <em>extraordinário</em>
              </h3>
              <p className="contact-card-desc">
                Da estratégia à entrega, conduzimos uma execução organizada que deixa tranquilidade, controle e resultado.
              </p>
            </div>

            <div className="contact-info-list">
              <div className="contact-info-row anim-fade">
                <div className="contact-icon-box" aria-hidden>
                  <Phone size={16} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="contact-row-label">Telefone</p>
                  <p className="contact-row-value">(81) 98823-1327</p>
                </div>
              </div>
              <div className="contact-info-row anim-fade">
                <div className="contact-icon-box" aria-hidden>
                  <Mail size={16} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="contact-row-label">E-mail</p>
                  <p className="contact-row-value">contato@azoubel.com.br</p>
                </div>
              </div>
              <div className="contact-info-row anim-fade">
                <div className="contact-icon-box" aria-hidden>
                  <MapPin size={16} strokeWidth={1.75} />
                </div>
                <div>
                  <p className="contact-row-label">Endereço</p>
                  <p className="contact-row-value">São Paulo, SP · Brasil</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
