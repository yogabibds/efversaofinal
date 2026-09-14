import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import MailtoForm from '@/components/MailtoForm'

export const metadata: Metadata = {
  title: 'Contato · Edney Fernandes | Imprensa, Licenciamento e Parcerias',
  description: 'Contato com a curadoria Laiá Music do projeto Edney Fernandes. Imprensa, licenciamento musical, sincronização, regravações e parcerias institucionais.',
  alternates: { canonical: 'https://edneyfernandes.com/contato' },
  openGraph: {
    title: 'Contato · Edney Fernandes | Imprensa, Licenciamento e Parcerias',
    description: 'Contato com a curadoria Laiá Music do projeto Edney Fernandes. Imprensa, licenciamento musical, sincronização, regravações e parcerias institucionais.',
    url: 'https://edneyfernandes.com/contato',
    images: [{ url: '/assets/img/memorial/edney-hero.jpg', width: 1200, height: 630 }],
  },
}

const channels = [
  { icon: '📸', label: 'Redes sociais', title: 'Instagram', desc: 'Atualizações, lançamentos e memórias do legado.', href: 'https://www.instagram.com/edneyfernandesoficial', cta: '@edneyfernandesoficial' },
  { icon: '▶', label: 'Audiovisual', title: 'YouTube', desc: 'Registros audiovisuais, composições e acervo.', href: 'https://www.youtube.com/watch?v=6BlIPv5Lhow', cta: 'Ver canal' },
  { icon: '🎧', label: 'Streaming', title: 'Spotify', desc: 'Discografia de Ed & A Tripulação e curadorias.', href: 'https://open.spotify.com/playlist/0N4ki83JuTs7b5sSHozx8a', cta: 'Ouvir no Spotify' },
  { icon: '🏛', label: 'Projeto social', title: 'Instituto EF', desc: 'Preservação, educação musical e impacto cultural.', href: 'https://institutoef.netlify.app', cta: 'Ver projeto' },
]

export default function Contato() {
  return (
    <>
      <Header />
      <main className="pt-[var(--header-h)]">
        {/* Hero */}
        <section className="section pt-20 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_60%_40%,rgba(201,168,76,.07),transparent_50%)]" />
          <div className="container relative z-10">
            <Reveal>
              <span className="eyebrow eyebrow-lg block mb-4">Contato</span>
              <h1 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[.95] tracking-tight text-fg mb-5">
                Converse<br />sobre o legado
              </h1>
              <p className="text-muted max-w-[52ch] leading-relaxed">
                Para imprensa, parcerias, licenciamento, regravações e qualquer forma de contato institucional, a curadoria da Laiá Music responde.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Channels */}
        <section className="section">
          <div className="container">
            <Reveal className="mb-8"><span className="eyebrow eyebrow-lg">Canais</span></Reveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px border border-line">
              {channels.map((c, i) => (
                <Reveal key={c.title} delay={i * 0.08} className="p-6 bg-white/[.018] hover:bg-white/[.04] transition-colors">
                  <div className="w-11 h-11 rounded-xl bg-white/[.06] flex items-center justify-center text-[1.3rem] mb-4">{c.icon}</div>
                  <p className="text-gold text-[.74rem] uppercase tracking-[.14em] font-extrabold mb-1">{c.label}</p>
                  <h3 className="font-display text-[1.4rem] text-fg mb-2">{c.title}</h3>
                  <p className="text-muted text-[.86rem] leading-relaxed mb-4">{c.desc}</p>
                  <a href={c.href} target="_blank" rel="noopener" className="btn btn-secondary text-sm">{c.cta}</a>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Contact form */}
        <section className="section" id="formulario">
          <div className="container max-w-xl mx-auto text-center">
            <Reveal>
              <span className="eyebrow eyebrow-lg">Mensagem direta</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3rem)] text-fg leading-tight mt-3 mb-3">
                Fale com a curadoria
              </h2>
              <p className="text-muted text-sm mb-8">Laiá Music · ABRAMUS 4014 · Resposta em até 5 dias úteis.</p>
            </Reveal>
            <Reveal delay={.15} className="text-left bg-white/[.04] border border-white/10 rounded-2xl p-8">
              <MailtoForm
                to="contact@edneyfernandes.com"
                subject="Contato: Edney Fernandes"
                submitLabel="Enviar mensagem"
                fields={[
                  { name: 'nome', label: 'Nome', placeholder: 'Seu nome completo', required: true },
                  { name: 'email', label: 'E-mail', type: 'email', placeholder: 'seuemail@dominio.com', required: true },
                  { name: 'assunto', label: 'Assunto', type: 'select', required: true,
                    options: ['Imprensa / press kit', 'Licenciamento / sincronização', 'Regravação de obra', 'Parceria institucional', 'Apoio ao Instituto', 'Contribuição para o acervo', 'Outro'] },
                  { name: 'mensagem', label: 'Mensagem', type: 'textarea', placeholder: 'Descreva seu projeto, proposta ou pedido...', required: true },
                ]}
              />
            </Reveal>
          </div>
        </section>

        {/* Newsletter */}
        <section className="section py-20">
          <div className="container max-w-md mx-auto text-center">
            <Reveal>
              <div className="border border-gold/25 bg-gradient-to-b from-gold/[.12] to-gold/[.04] rounded-[var(--radius)] p-10">
                <h3 className="font-display text-[2.2rem] text-fg mb-3">Acompanhe o legado</h3>
                <p className="text-muted text-sm mb-6">Lançamentos, novidades do catálogo e memórias, no seu e-mail.</p>
                <MailtoForm
                  to="contact@edneyfernandes.com"
                  subject="Inscrição: novidades Edney Fernandes"
                  submitLabel="Inscrever"
                  fields={[{ name: 'email', label: 'Seu e-mail', type: 'email', placeholder: 'seuemail@dominio.com', required: true }]}
                />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
