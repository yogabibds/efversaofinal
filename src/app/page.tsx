import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import Counter from '@/components/Counter'
import MailtoForm from '@/components/MailtoForm'

export const metadata: Metadata = {
  title: 'Edney Fernandes: Compositor, Cantor e Intérprete Brasileiro | Não é só memória. São obras vivas.',
  description: 'Edney Fernandes, compositor, cantor e vocalista de Ed & A Tripulação. Obras gravadas por Péricles, Thiaguinho, Exaltasamba e Chrigor. Mais de 21 milhões de streams. Catálogo gerido pela Laiá Music.',
  keywords: [
    'Edney Fernandes', 'compositor pagode', 'Ed A Tripulação', 'A Hora É Essa',
    'No Fundo dos Meus Olhos', 'Péricles', 'Thiaguinho', 'Exaltasamba', 'Chrigor',
    'pagode paulista', 'samba-rock', 'soul brasileiro', 'Laiá Music',
    'Anos 90 Explosão do Pagode', 'Zona Leste São Paulo', 'Warner Chappell',
    'Sony Music Publishing', 'ABRAMUS', 'ECAD', 'Gamação', 'Imaginasamba',
    'Karametade', 'Gesto de Carinho', 'obras pagode',
  ],
  alternates: { canonical: 'https://edneyfernandes.com' },
  openGraph: {
    title: 'Edney Fernandes: Não é só memória. São obras vivas.',
    description: 'Obras que atravessam gerações e continuam sendo descobertas. 21M+ streams.',
    url: 'https://edneyfernandes.com',
    images: [{ url: '/assets/img/memorial/edney-hero.jpg', width: 1200, height: 630 }],
    siteName: 'Edney Fernandes · Acervo Musical Oficial',
    locale: 'pt_BR', type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edney Fernandes: Não é só memória. São obras vivas.',
    description: '21M+ streams. Obras em Warner Chappell e Sony Music Publishing.',
    images: ['/assets/img/memorial/edney-hero.jpg'],
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Quem é Edney Fernandes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Edney Fernandes foi compositor, cantor, violonista e percussionista brasileiro, vocalista do grupo Ed & A Tripulação. Suas obras acumulam mais de 21 milhões de streams e foram gravadas por Péricles, Thiaguinho, Exaltasamba e Chrigor." } },
    { "@type": "Question", "name": "Onde ouvir as músicas de Edney Fernandes?",
      "acceptedAnswer": { "@type": "Answer", "text": "As composições estão disponíveis no Spotify, YouTube, Amazon Music e Apple Music. 'No Fundo dos Meus Olhos' (Péricles feat. Thiaguinho), 'Te Vejo na TV' e 'Deixa Rolar' (Exaltasamba) e 'É Só Saudade' (Chrigor) estão nas principais plataformas." } },
    { "@type": "Question", "name": "Como licenciar uma obra de Edney Fernandes?",
      "acceptedAnswer": { "@type": "Answer", "text": "O catálogo é gerido pela Laiá Music. Para licenciamento, entre em contato pelo e-mail contact@edneyfernandes.com. As obras estão em Warner Chappell, Sony Music Publishing e Peermusic, com gestão coletiva pela ABRAMUS." } },
    { "@type": "Question", "name": "O que é o Gesto de Carinho?",
      "acceptedAnswer": { "@type": "Answer", "text": "Gesto de Carinho é um projeto póstumo que preserva a memória, as composições e a inventividade de Edney Fernandes, para que sua música faça parte de histórias que ele não chegou a conhecer." } },
  ]
}

const artists = [
  { id: 'hpzDEIy5P0M', title: 'No Fundo dos Meus Olhos', artist: 'Péricles feat. Thiaguinho' },
  { id: 'ED8T13zi81Y', title: 'Te Vejo na TV', artist: 'Exaltasamba' },
  { id: 'CsFETlUCPi8', title: 'Deixa Rolar', artist: 'Exaltasamba' },
  { id: 'YEAiDCOk3os', title: 'É Só Saudade', artist: 'Chrigor' },
  { id: 'vvw74QZd4MA', title: 'Por Toda a Vida', artist: 'Gamação' },
  { id: '1MmWj1gfjTo', title: 'História de Amor', artist: 'Os Mulekes' },
  { id: '3PZq8C8XAjY', title: 'Meu Desejo', artist: 'Grupo Percepção' },
]

const videos = [
  { id: 'ZMlJcangTng', title: 'Programa Guto Moreno', sub: 'Participação televisiva' },
  { id: 'hpzDEIy5P0M', title: 'No Fundo dos Meus Olhos', sub: 'Péricles feat. Thiaguinho' },
  { id: 'ED8T13zi81Y', title: 'Te Vejo na TV', sub: 'Exaltasamba' },
  { id: 'YEAiDCOk3os', title: 'É Só Saudade', sub: 'Chrigor' },
]

// Editoras — faixa branca estática que entra deslizando ao scroll
const editoras = ['Warner Chappell', 'Sony Music Publishing', 'Peermusic']

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Header />
      <main>

        {/* HERO */}
        <section className="relative min-h-screen flex items-center pt-[var(--header-h)] overflow-hidden bg-black">
          <div className="absolute inset-0">
            <img src="/assets/img/memorial/edney-hero.jpg" alt="Edney Fernandes"
              className="w-full h-full object-cover object-center grayscale-[0.04]" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/72 via-black/30 to-black/65" />
            <div className="absolute inset-0 bg-gradient-to-t from-bg/95 via-transparent" />
          </div>
          <div className="container relative z-10">
            <Reveal>
              <h1 className="font-display text-[clamp(3.4rem,7.2vw,6.8rem)] leading-[.9] tracking-[-0.04em] text-fg mb-3">
                Edney<br />Fernandes
              </h1>
              <p className="text-[.76rem] font-black uppercase tracking-[.2em] text-gold mb-4">
                Acervo Musical Oficial
              </p>
              <p className="text-[clamp(1.3rem,2.6vw,2rem)] leading-[1.22] text-fg max-w-[28ch] mb-3">
                Obras que atravessam gerações e continuam sendo descobertas.
              </p>
              <p className="text-[1rem] text-fg/75 max-w-[40ch] mb-8 leading-relaxed">
                Da Zona Leste de São Paulo para o mundo.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/catalogo" className="btn btn-primary"><span>Explorar catálogo</span></Link>
                <Link href="/biografia" className="btn btn-secondary"><span>Ler história</span></Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* TAGLINE FILOSÓFICA */}
        <div className="interstitial bg-black border-b border-gold/20">
          <Reveal blur>
            <p className="text-gold">
              Não é só memória.<br />
              <span className="text-fg">São obras vivas.</span>
            </p>
          </Reveal>
        </div>

        {/* BIO TEASER */}
        <section className="section">
          <div className="container">
            <Reveal className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="eyebrow eyebrow-lg block mb-4">Biografia</span>
                <p className="font-display text-[clamp(1.8rem,3.5vw,2.8rem)] text-fg leading-[1.12] font-light italic mb-5">
                  "Edney Fernandes não pertencia a um gênero. O pagode o encontrou e o levou a uma geração."
                </p>
                <p className="text-muted leading-relaxed mb-6">
                  Reservado, disciplinado, consciente do valor do que criava. Suas composições falam de amor, desejo e cotidiano com a naturalidade de quem não precisa explicar. A música explica sozinha.
                </p>
                <p className="text-[.76rem] font-bold uppercase tracking-[.14em] text-gold mb-6">
                  Cantor · Compositor · Violonista · Percussionista
                </p>
                <Link href="/biografia" className="btn btn-secondary inline-flex"><span>Ver biografia completa →</span></Link>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-black/40">
                <img src="/assets/img/memorial/edney - roda de samba.jpg" alt="Edney Fernandes em roda de samba"
                  className="w-full h-full object-cover object-top" loading="lazy" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* METRICS */}
        <section className="border-t-2 border-gold/40 py-16 bg-[#0c0c0c]">
          <div className="w-[min(100%-48px,1200px)] mx-auto">
            <span className="block text-center text-[.72rem] font-black uppercase tracking-[.2em] text-muted mb-8">
              Obras que permanecem vivas
            </span>
            <div className="flex items-baseline gap-4 flex-wrap mb-2">
              <span className="text-[.65rem] font-black uppercase tracking-[.16em] text-gold shrink-0 max-w-[110px] leading-snug">
                Streams<br/>acumulados<br/>Spotify · YouTube<br/>Amazon Music
              </span>
              <Counter value={21000000} className="font-body font-black text-[clamp(4.5rem,15vw,11rem)] leading-[.88] tracking-[-0.05em] text-white flex-1" />
            </div>
            <p className="text-[.7rem] text-white/30 uppercase tracking-wide mb-8">Spotify · YouTube · Amazon Music</p>

            <div className="flex flex-wrap gap-10 border-t border-white/[.07] pt-8">
              {[
                { label: 'Playlists ativas', value: 205, sub: 'Spotify · Apple · Deezer', dec: false },
                { label: 'Alcance das playlists', value: 9.52, sub: 'milhões de ouvintes', dec: true },
                { label: 'Países', value: 20, prefix: '+', sub: 'onde as obras tocam', dec: false },
                { label: 'Obras registradas', value: 43, sub: 'ABRAMUS · ECAD', dec: false },
              ].map((m) => (
                <div key={m.label} className="flex-1 min-w-[140px]">
                  <span className="block text-[.65rem] font-black uppercase tracking-[.16em] text-gold mb-2">{m.label}</span>
                  <Counter value={m.value} prefix={m.prefix} decimals={m.dec ? 2 : 0}
                    className="font-body font-black text-[clamp(2.4rem,6vw,4.5rem)] leading-[.88] tracking-[-0.04em] text-white block" />
                  <span className="block text-[.62rem] text-white/30 uppercase tracking-wide mt-2">{m.sub}</span>
                </div>
              ))}
            </div>

            {/* FAIXA BRANCA — logos reais das editoras */}
            <Reveal>
              <div className="mt-10 -mx-6 overflow-hidden editoras-strip">
                <div className="bg-white py-7 px-10 flex items-center justify-center gap-0 flex-wrap">
                  <span className="font-body text-[.58rem] font-black uppercase tracking-[.22em] text-black/25 pr-8 border-r border-black/10 mr-2 shrink-0">
                    Editoras
                  </span>
                  {/* Warner Chappell */}
                  <div className="px-8 border-r border-black/10 flex items-center justify-center h-14">
                    <img src="/assets/img/editoras/warner-chappell.png" alt="Warner Chappell Music"
                      className="h-9 w-auto object-contain" style={{maxWidth:'140px'}} />
                  </div>
                  {/* Sony Music Publishing */}
                  <div className="px-8 border-r border-black/10 flex items-center justify-center h-14">
                    <img src="/assets/img/editoras/sony-music-publishing.png" alt="Sony Music Publishing"
                      className="h-10 w-auto object-contain" style={{maxWidth:'120px'}} />
                  </div>
                  {/* Peermusic */}
                  <div className="px-8 border-r border-black/10 flex items-center justify-center h-14">
                    <img src="/assets/img/editoras/peermusic.png" alt="Peermusic"
                      className="h-10 w-auto object-contain" style={{maxWidth:'120px'}} />
                  </div>
                  {/* ABRAMUS */}
                  <div className="px-8 flex items-center justify-center h-14 flex-col gap-1">
                    <img src="/assets/img/editoras/abramus.webp" alt="ABRAMUS"
                      className="h-9 w-auto object-contain" style={{maxWidth:'100px'}} />
                    <span className="font-body text-[.5rem] font-bold uppercase tracking-[.14em] text-black/30">
                      gestão coletiva
                    </span>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* INTERSTITIAL */}
        <div className="interstitial">
          <Reveal blur><p>Algumas obras<br /><span className="text-gold">não desaparecem.</span></p></Reveal>
        </div>

        {/* ARTISTAS QUE GRAVARAM OBRAS */}
        <section className="section">
          <div className="container">
            <Reveal className="mb-10">
              <span className="eyebrow eyebrow-lg">Composições em outras vozes</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-fg leading-tight mt-2">
                Artistas que gravaram<br /><span className="italic font-light">obras de Edney Fernandes</span>
              </h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px border border-line">
              {artists.map((a, i) => (
                <Reveal key={a.id} delay={i * 0.06}>
                  <a href={`https://www.youtube.com/watch?v=${a.id}`} target="_blank" rel="noopener"
                    className="flex items-center gap-3 p-4 bg-white/[.022] hover:bg-gold/[.06] transition-colors group">
                    <img src={`https://img.youtube.com/vi/${a.id}/default.jpg`} alt={a.title}
                      className="w-14 h-14 object-cover rounded shrink-0" loading="lazy" />
                    <div>
                      <strong className="block text-fg text-[.94rem] group-hover:text-gold transition-colors">{a.artist}</strong>
                      <span className="text-gold text-[.76rem]">{a.title}</span>
                    </div>
                  </a>
                </Reveal>
              ))}
              <Reveal className="flex items-center gap-3 p-4 bg-white/[.012]">
                <div className="w-14 h-14 rounded bg-gold/[.08] flex items-center justify-center text-gold font-black text-lg shrink-0">+</div>
                <div>
                  <strong className="block text-muted text-[.88rem]">Imaginasamba · Karametade</strong>
                  <span className="text-white/30 text-[.74rem]">Kipaquera · Grupo Mi Menor e outros</span>
                </div>
              </Reveal>
            </div>
            <div className="text-center mt-8">
              <Link href="/catalogo" className="btn btn-secondary"><span>Quero gravar uma obra</span></Link>
            </div>
          </div>
        </section>

        {/* VÍDEOS */}
        <section className="section bg-[#050505]">
          <div className="container">
            <Reveal className="mb-8">
              <span className="eyebrow eyebrow-lg">Vídeos</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.4rem)] text-fg leading-tight mt-2">
                Registros que<br /><span className="italic font-light">atravessaram o tempo</span>
              </h2>
            </Reveal>
            <div className="grid md:grid-cols-[1.4fr_1fr] gap-[2px]">
              <div>
                <iframe src="https://www.youtube.com/embed/6BlIPv5Lhow" title="Ed & A Tripulação: A Hora É Essa"
                  loading="lazy" allowFullScreen className="w-full aspect-video block border-0" />
                <div className="py-3">
                  <strong className="text-fg block">Ed & A Tripulação: A Hora É Essa</strong>
                  <span className="text-muted text-sm">Arquivo audiovisual · East West/Continental, 2000</span>
                </div>
              </div>
              <div className="flex flex-col gap-[2px]">
                {videos.map(v => (
                  <a key={v.id} href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener"
                    className="flex gap-3 p-3 bg-white/[.04] hover:bg-gold/[.07] transition-colors items-center">
                    <div className="relative shrink-0 w-24">
                      <img src={`https://img.youtube.com/vi/${v.id}/default.jpg`} alt={v.title}
                        className="w-full aspect-video object-cover" loading="lazy" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="bg-black/70 rounded-full w-7 h-7 flex items-center justify-center text-white text-[.7rem]">▶</span>
                      </div>
                    </div>
                    <div>
                      <strong className="text-fg text-[.86rem] block">{v.title}</strong>
                      <span className="text-muted text-[.74rem]">{v.sub}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* INTERSTITIAL 2 */}
        <div className="interstitial">
          <Reveal blur>
            <p>A música continua<br /><span className="text-gold">onde o tempo termina.</span></p>
          </Reveal>
        </div>

        {/* GESTO DE CARINHO */}
        <section className="py-24 border-t border-gold/20 border-b border-gold/20 bg-gradient-to-br from-bg to-[#111]">
          <div className="container">
            <Reveal className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <span className="eyebrow eyebrow-lg block mb-4">Álbum póstumo</span>
                <h2 className="font-display text-[clamp(2.2rem,4.5vw,4rem)] text-fg leading-none mb-5 font-normal">
                  Gesto de<br /><em>Carinho</em>
                </h2>
                <p className="text-muted leading-relaxed mb-7">
                  Gesto de Carinho nasce da convicção de que a criação continua a produzir sentido para além da vida de seu autor. O projeto preserva a memória, as composições e a inventividade de Edney Fernandes, para que sua música faça parte de histórias que ele não chegou a conhecer.
                </p>
                <MailtoForm
                  to="contact@edneyfernandes.com"
                  subject="Quero saber do lançamento de Gesto de Carinho"
                  submitLabel="Avise-me no lançamento"
                  fields={[{ name: 'email', label: 'E-mail', type: 'email', placeholder: 'Seu e-mail', required: true }]}
                />
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center rounded-2xl border border-gold/20 bg-gold/[.04] w-full max-w-[280px] min-h-[280px] p-10">
                  <p className="font-display text-[1.4rem] italic text-gold text-center leading-relaxed">
                    Gesto de Carinho<br />
                    <span className="text-[.9rem] text-muted not-italic">Edney Fernandes</span>
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CATALOG CTA */}
        <section className="section">
          <div className="container text-center max-w-2xl mx-auto">
            <Reveal>
              <span className="eyebrow eyebrow-lg">Catálogo</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-fg leading-tight mt-3 mb-4">
                Um repertório aberto ao futuro
              </h2>
              <p className="text-muted mb-3">
                Explore o repertório de Edney Fernandes e encontre a próxima canção para a sua voz.
              </p>
              <p className="text-muted/60 text-sm mb-8">
                Para regravações, sincronizações e outros usos, fale com a curadoria da Laiá Music.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/catalogo" className="btn btn-primary"><span>Ver catálogo completo</span></Link>
                <Link href="/catalogo#licenciamento" className="btn btn-secondary"><span>Quero gravar uma obra</span></Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* CONTACT */}
        <section className="section bg-fg">
          <div className="container text-center max-w-2xl mx-auto">
            <Reveal>
              <span className="block text-[.74rem] font-black uppercase tracking-[.18em] text-black/40 mb-4">Contato</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.2rem)] text-bg leading-tight mb-4">Converse sobre o legado</h2>
              <p className="text-bg/60 mb-8">Para imprensa, licenciamento, regravações e parcerias, fale com a curadoria da Laiá Music.</p>
              <MailtoForm
                to="contact@edneyfernandes.com"
                subject="Contato: Edney Fernandes"
                submitLabel="Enviar mensagem"
                fields={[
                  { name: 'nome', label: 'Nome', placeholder: 'Seu nome', required: true },
                  { name: 'email', label: 'E-mail', type: 'email', placeholder: 'seuemail@dominio.com', required: true },
                  { name: 'assunto', label: 'Assunto', type: 'select', options: ['Imprensa', 'Licenciamento', 'Regravação', 'Parceria', 'Outro'] },
                  { name: 'mensagem', label: 'Mensagem', type: 'textarea', placeholder: 'Como posso ajudar?' },
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
