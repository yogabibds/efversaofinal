import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import MailtoForm from '@/components/MailtoForm'
import PartnerLogo from '@/components/PartnerLogo'
import Counter from '@/components/Counter'

export const metadata: Metadata = {
  title: 'Catálogo · Edney Fernandes | Licenciamento e Regravação',
  description: 'Catálogo de obras de Edney Fernandes abertas a licenciamento, sincronização e regravação. Composições em Warner Chappell, Sony Music Publishing, Peermusic e Abril Music. 20,8M streams.',
  alternates: { canonical: 'https://edneyfernandes.com/catalogo' },
  openGraph: {
    title: 'Catálogo · Edney Fernandes | Licenciamento e Regravação',
    description: 'Catálogo de obras de Edney Fernandes abertas a licenciamento, sincronização e regravação. Composições em Warner Chappell, Sony Music Publishing, Peermusic e Abril Music. 20,8M streams.',
    url: 'https://edneyfernandes.com/catalogo',
    images: [{ url: '/assets/img/memorial/edney-hero.jpg', width: 1200, height: 630 }],
  },
}

const works = [
  { title: 'No Fundo dos Meus Olhos', pub: 'Warner Chappell', note: 'Péricles, Thiaguinho, Exaltasamba' },
  { title: 'Te Vejo na TV', pub: 'Warner Chappell', note: 'Exaltasamba' },
  { title: 'Deixa Rolar', pub: 'Warner Chappell', note: 'Exaltasamba' },
  { title: 'É Só Saudade', pub: 'Sony Music Publishing', note: 'Edney Fernandes / Valtinho J · gravada por Chrigor' },
  { title: 'Prá Que Se Machucar', pub: 'Warner Chappell', note: 'Edney Fernandes / Thaís Sacomani' },
  { title: 'Eu Choro', pub: 'Peermusic do Brasil', note: 'Edney Fernandes / Ronaldo Marques (J.R.) · gravada por Karametade' },
  { title: 'Por Toda a Vida', pub: 'Peermusic', note: 'Gamação' },
  { title: 'História de Amor', pub: 'Warner Chappell', note: 'Os Mulekes' },
  { title: 'Meu Desejo', pub: 'Warner Chappell', note: 'Grupo Percepção' },
  { title: 'Momentos de Tristeza', pub: 'Warner Chappell', note: 'Versão em espanhol em elaboração' },
  { title: 'Tudo Que Eu Fiz', pub: 'Inédito', note: 'Projeto Despedida' },
  { title: 'Despedida', pub: 'Inédito', note: 'Projeto Despedida' },
  { title: '+ 33 obras', pub: '', note: 'Entre em contato para catálogo completo', highlight: true },
]

export default function Catalogo() {
  return (
    <>
      <Header />
      <main className="pt-[var(--header-h)]">
        {/* Hero */}
        <section className="section pt-20 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,rgba(201,168,76,.08),transparent_50%)]" />
          <div className="container relative z-10">
            <Reveal>
              <span className="eyebrow eyebrow-lg block mb-4">Catálogo de Obras</span>
              <h1 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[.95] tracking-tight text-fg mb-5">
                43 obras<br />abertas ao futuro
              </h1>
              <p className="text-muted max-w-[54ch] leading-relaxed">
                Um repertório vivo, com identidade própria, presença histórica e potencial para circular novamente na voz de novos artistas.
              </p>
            </Reveal>

            {/* Numbers */}
            <Reveal delay={.2} className="grid grid-cols-2 md:grid-cols-4 gap-px border border-line mt-10">
              {[
                { value: 43, decimals: 0, suffix: '', l: 'obras registradas' },
                { value: 20.8, decimals: 1, suffix: 'M', l: 'streams acumulados' },
                { value: 205, decimals: 0, suffix: '', l: 'playlists ativas' },
                { value: 4, decimals: 0, suffix: '', l: 'editoras parceiras' },
              ].map(m => (
                <div key={m.l} className="p-6 text-center bg-white/[.018]">
                  <Counter value={m.value} decimals={m.decimals} suffix={m.suffix}
                    className="font-display text-[clamp(2rem,4vw,3.5rem)] text-fg block leading-none tracking-tight" />
                  <span className="text-muted text-xs uppercase tracking-wider mt-2 block">{m.l}</span>
                </div>
              ))}
            </Reveal>
            <p className="text-[.74rem] text-white/25 mt-2">Fonte: Songstats · dados sincronizados em julho de 2026</p>
          </div>
        </section>

        {/* Publishers */}
        <section className="section">
          <div className="container">
            <Reveal className="mb-8">
              <span className="eyebrow eyebrow-lg">Editoras e entidades</span>
            </Reveal>
            <div className="grid grid-cols-2 gap-px border border-line">
              {[
                { name: 'Sony Music Publishing', role: 'Editora musical', logoFile: 'sony-music-publishing.png' },
                { name: 'Warner Chappell', role: 'Editora musical', logoFile: 'warner-chappell.png' },
                { name: 'ABRAMUS', role: 'Gestão coletiva · IPI 431245690', logoFile: 'abramus.webp' },
                { name: 'Peermusic', role: 'Editora musical', logoFile: 'peermusic.png' },
              ].map(p => (
                <PartnerLogo key={p.name} name={p.name} role={p.role} logoFile={p.logoFile} />
              ))}
            </div>
          </div>
        </section>

        {/* Works */}
        <section className="section">
          <div className="container">
            <Reveal className="mb-8">
              <span className="eyebrow eyebrow-lg">Obras em destaque</span>
              <p className="text-muted mt-2 max-w-[52ch]">Composições com presença confirmada em plataformas digitais e repertório ativo.</p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px border border-line">
              {works.map(w => (
                <Reveal key={w.title}
                  className={`p-5 ${w.highlight ? 'bg-gold/[.06] border border-gold/20' : 'bg-white/[.018]'}`}
                >
                  <p className={`font-semibold text-[1rem] mb-1 ${w.highlight ? 'text-gold' : 'text-fg'}`}>{w.title}</p>
                  {w.pub && <p className="text-gold text-[.78rem] mb-1">{w.pub}</p>}
                  <p className="text-muted text-[.82rem]">{w.note}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Rights note */}
        <div className="interstitial">
          <Reveal blur><p>Composição<br />e fonograma<br />são distintos.</p></Reveal>
        </div>
        <section className="py-16">
          <div className="container max-w-3xl">
            <div className="border-l-2 border-gold pl-6">
              <p className="text-muted leading-relaxed">
                <strong className="text-fg">Nota sobre direitos:</strong> Gabriela Sousa (Laiá Music, ABRAMUS 4014) detém os direitos patrimoniais de composição como herdeira de Edney Fernandes, válidos por 70 anos após o falecimento. Os direitos fonográficos das gravações originais de Ed & A Tripulação pertencem à Warner Music Brasil. Consulte nossa curadoria para entender as possibilidades de uso de cada obra.
              </p>
            </div>
          </div>
        </section>

        {/* Licensing form */}
        <section className="section" id="licenciamento">
          <div className="container max-w-2xl mx-auto text-center">
            <Reveal>
              <span className="eyebrow eyebrow-lg">Grave uma obra</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-fg leading-tight mt-3 mb-3">Ficha de interesse</h2>
              <p className="text-muted mb-8">Para licenciamento, sincronização, regravação ou qualquer uso comercial, nossa curadoria responde em até 5 dias úteis.</p>
            </Reveal>
            <Reveal delay={.15} className="text-left bg-white/[.04] border border-white/10 rounded-2xl p-8">
              <MailtoForm
                to="contact@edneyfernandes.com"
                subject="Ficha de licenciamento: Catálogo Edney Fernandes"
                submitLabel="Enviar ficha"
                fields={[
                  { name: 'nome', label: 'Nome / empresa', placeholder: 'Seu nome ou empresa', required: true },
                  { name: 'email', label: 'E-mail', type: 'email', placeholder: 'seuemail@dominio.com', required: true },
                  { name: 'obra', label: 'Obra de interesse', placeholder: 'Ex: No Fundo dos Meus Olhos' },
                  { name: 'tipo', label: 'Tipo de uso', type: 'select', required: true,
                    options: ['Regravação / nova versão', 'Sincronização: filme ou série', 'Sincronização: publicidade', 'Sincronização: jogo / app', 'Uso editorial', 'Performance ao vivo', 'Outro'] },
                  { name: 'contexto', label: 'Contexto / detalhes', type: 'textarea', placeholder: 'Gravadora, plataforma, prazo, orçamento, etc.' },
                ]}
              />
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
