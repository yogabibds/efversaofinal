import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Obras & Discografia · Edney Fernandes | Pagode Paulista Anos 90',
  description: 'Discografia completa de Edney Fernandes. Ed & A Tripulação: A Hora É Essa (2000). Composições gravadas por Péricles, Thiaguinho, Exaltasamba, Chrigor, Gamação. Mais de 20 milhões de streams.',
  alternates: { canonical: 'https://edneyfernandes.com/musica' },
  openGraph: {
    title: 'Obras & Discografia · Edney Fernandes | Pagode Paulista Anos 90',
    description: 'Discografia completa de Edney Fernandes. Ed & A Tripulação: A Hora É Essa (2000). Composições gravadas por Péricles, Thiaguinho, Exaltasamba, Chrigor, Gamação. Mais de 20 milhões de streams.',
    url: 'https://edneyfernandes.com/musica',
    images: [{ url: '/assets/img/memorial/edney-hero.jpg', width: 1200, height: 630 }],
  },
}

const tracklist = [
  { n: '01', title: 'Meu Desejo', composer: 'Edney Fernandes / Ronaldo Marques', composed: true },
  { n: '02', title: 'Errei', composer: '', composed: false },
  { n: '03', title: 'Te Vejo na TV', composer: 'Edney Fernandes / Ronaldo Marques', composed: true },
  { n: '04', title: 'Coração Partido', composer: '', composed: false },
  { n: '05', title: 'No Fundo dos Meus Olhos', composer: 'Edney Fernandes / Ronaldo Marques', composed: true },
  { n: '06', title: 'É o Amor', composer: '', composed: false },
  { n: '07', title: 'Deixa Rolar', composer: 'Edney Fernandes / Ronaldo Marques', composed: true },
  { n: '08', title: 'Saudade do Primeiro Amor', composer: '', composed: false },
  { n: '09', title: 'Momentos de Tristeza', composer: 'Edney Fernandes / Ronaldo Marques', composed: true },
  { n: '10', title: 'Toda Madrugada', composer: 'Edney Fernandes / Valtinho Jota', composed: true },
  { n: '11', title: 'História de Amor', composer: 'Edney Fernandes / Ronaldo Marques', composed: true },
  { n: '12', title: 'Será que É pra Ficar', composer: '', composed: false },
  { n: '13', title: 'Por Toda a Vida', composer: 'Edney Fernandes / Ronaldo Marques', composed: true },
  { n: '14', title: 'Samba é Samba', composer: '', composed: false },
]

const voices = [
  { id: 'hpzDEIy5P0M', title: 'No Fundo dos Meus Olhos', artist: 'Péricles feat. Thiaguinho' },
  { id: 'ED8T13zi81Y', title: 'Te Vejo na TV', artist: 'Exaltasamba' },
  { id: 'CsFETlUCPi8', title: 'Deixa Rolar', artist: 'Exaltasamba' },
  { id: 'YEAiDCOk3os', title: 'É Só Saudade', artist: 'Chrigor' },
  { id: 'vvw74QZd4MA', title: 'Por Toda a Vida', artist: 'Gamação' },
  { id: '1MmWj1gfjTo', title: 'História de Amor', artist: 'Os Mulekes' },
  { id: '3PZq8C8XAjY', title: 'Meu Desejo', artist: 'Grupo Percepção' },
]

const participacoes = [
  { tag: 'Projeto fonográfico · 2003', title: 'Terra Brasil: Pagode de Mesa 3', role: 'Percussionista · Produtor Assistente', desc: 'Projeto ao vivo reunindo diferentes intérpretes no formato de roda, consolidando uma estética importante do gênero.', href: 'https://youtu.be/D8xTQV4Zrcs', cta: 'Ver no YouTube', cover: 'terra-brasil-pagode-de-mesa-3.jpg' },
  { tag: 'Gamação · Vai Nessa, 2000', title: 'Vai Nessa', role: 'Coro · Compositor de "Por Toda a Vida"', desc: 'Edney assina o coro em praticamente todas as faixas do álbum, além da composição exclusiva de "Por Toda a Vida".', href: 'https://open.spotify.com/playlist/0X6y4zHggBO23TigmeDhWr', cta: 'Ouvir' },
  { tag: 'Dedé Paraízo · De Todos Os Paraísos, 2005', title: 'De Todos Os Paraísos', role: 'Coro (creditado como "Dinei")', desc: 'Participação em vocal de apoio em praticamente todo o álbum, registrada sob o nome artístico "Dinei".', href: '#', cta: 'Ficha técnica' },
]

const composerPartners = [
  { name: 'Thaís Nascimento', photo: 'edney e thais saccomani.jpg', role: 'Coautora de "Prá Que Se Machucar"', hasPhoto: true },
  { name: 'Valtinho Jota', photo: 'valtinho jota-thais Saccomani-edney fernandes.jpg', role: 'Coautor de "É Só Saudade", "Toda Madrugada" e "Te Quero Tanto"', hasPhoto: true },
  { name: 'Ronaldo Marques', photo: '', role: 'Coautor em 7 das 14 faixas de "A Hora É Essa"', hasPhoto: false },
  { name: 'Papacaça', photo: 'edney, papacaca e grupo.jpg', role: 'Parceria artística (crédito específico a confirmar)', hasPhoto: true },
]

const otherCollabs = [
  { name: 'Marcos & Vanessa Jackson', photo: 'marcos-vanessa-jackson.jpg', role: 'Encontros e parcerias artísticas' },
  { name: 'Marcelo Lombardo', photo: 'edney-com-marcelo-Lombardo.jpg', role: 'Cavaquinho/banjo, presente na maioria dos álbuns' },
]

export default function Musica() {
  return (
    <>
      <Header />
      <main className="pt-[var(--header-h)]">
        {/* Hero */}
        <section className="section border-b border-line pt-20 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_40%,rgba(201,168,76,.07),transparent_55%)]" />
          <div className="container relative z-10">
            <Reveal>
              <span className="eyebrow eyebrow-lg block mb-4">Discografia & Obras</span>
              <h1 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[.95] tracking-tight text-fg mb-5">
                A música<br />que ficou
              </h1>
              <p className="text-muted max-w-[52ch] leading-relaxed">
                A trajetória de Edney Fernandes contada através das obras que ele assinou, das vozes que dividiu em estúdio e dos artistas que levaram seu nome adiante.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Ed & A Tripulação: Discografia principal */}
        <section className="section">
          <div className="container">
            <Reveal className="mb-8">
              <span className="eyebrow eyebrow-lg">Discografia principal</span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-fg leading-tight mt-2">
                Ed & A Tripulação<br />
                <span className="italic font-light text-[0.7em] text-muted">A Hora É Essa (2000)</span>
              </h2>
              <p className="text-muted mt-4 max-w-[64ch] leading-relaxed">
                Produzido por Arnaldo Saccomani para East West/Continental (hoje Warner Music Brasil). Edney Fernandes canta e toca violão em todas as 14 faixas e assina a composição em 7 delas.
              </p>
              <div className="flex flex-wrap gap-3 mt-5 mb-2">
                <a href="https://open.spotify.com/playlist/0N4ki83JuTs7b5sSHozx8a" target="_blank" rel="noopener" className="btn btn-primary">Ouvir no Spotify</a>
                <a href="https://www.youtube.com/watch?v=6BlIPv5Lhow" target="_blank" rel="noopener" className="btn btn-secondary">YouTube</a>
                <a href="https://www.letras.mus.br/ed-e-a-tripulacao/" target="_blank" rel="noopener" className="btn btn-secondary">Letras</a>
              </div>
              <div className="mt-6 pt-5 border-t border-line">
                <p className="text-[.72rem] text-muted uppercase tracking-[.16em] font-bold mb-4">Ouça nas principais plataformas</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Spotify', href: 'https://open.spotify.com/playlist/0N4ki83JuTs7b5sSHozx8a' },
                    { name: 'Apple Music', href: 'https://music.apple.com/br/artist/ed-a-tripulação/288395' },
                    { name: 'Deezer', href: 'https://www.deezer.com/br/search/edney%20fernandes' },
                    { name: 'Amazon Music', href: 'https://music.amazon.com.br/search/edney+fernandes' },
                  ].map(p => (
                    <a key={p.name} href={p.href} target="_blank" rel="noopener"
                      className="px-4 py-2 border border-white/15 rounded-full text-sm text-muted hover:border-gold/50 hover:text-gold transition-colors"
                    >{p.name}</a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={.15} className="border border-line rounded-2xl overflow-hidden">
              {tracklist.map((t) => (
                <div key={t.n}
                  className={`flex items-center gap-4 px-5 py-3.5 border-b border-white/[.05] last:border-0
                    ${t.composed ? 'bg-gold/[.04]' : 'bg-white/[.012]'}`}
                >
                  <span className="text-white/30 text-[.8rem] font-mono w-6 text-right shrink-0">{t.n}</span>
                  <span className="flex-1 text-fg text-[.97rem] font-medium">{t.title}</span>
                  {t.composed && (
                    <span className="text-gold text-[.78rem] italic shrink-0 max-md:hidden">{t.composer}</span>
                  )}
                </div>
              ))}
              <p className="px-5 py-3 text-[.74rem] text-white/25">
                Faixas em dourado: composição de Edney Fernandes, em parceria com Ronaldo Marques ou Valtinho Jota (fontes: Discogs e registros ABRAMUS)
              </p>
            </Reveal>

            <Reveal delay={.2} className="mt-8 p-6 border border-line rounded-2xl bg-white/[.014] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-gold text-[.72rem] tracking-widest uppercase font-extrabold block mb-1">Álbum póstumo</span>
                <h3 className="font-display text-[1.5rem] text-fg">Gesto de Carinho</h3>
                <p className="text-muted text-sm mt-1">Trabalho solo iniciado por Edney, retomado pela família como parte do legado.</p>
              </div>
              <Link href="/contato" className="btn btn-secondary text-sm shrink-0">Saber mais</Link>
            </Reveal>
          </div>
        </section>

        {/* Participações */}
        <section className="section">
          <div className="container">
            <Reveal className="mb-8">
              <span className="eyebrow eyebrow-lg">Participações</span>
              <p className="text-muted mt-2 max-w-[60ch]">Álbuns de outros artistas onde Edney aparece creditado, em produção, coro ou composição.</p>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-px border border-line">
              {participacoes.map((p) => (
                <Reveal key={p.title} className="bg-white/[.018] flex flex-col">
                  {'cover' in p && p.cover && (
                    <div className="aspect-square overflow-hidden bg-black/40">
                      <img src={`/assets/img/memorial/${p.cover}`} alt={`Capa de ${p.title}`}
                        className="w-full h-full object-cover" loading="lazy" />
                    </div>
                  )}
                  <div className="p-7 flex flex-col flex-1">
                    <span className="text-gold text-[.7rem] tracking-widest uppercase font-extrabold block mb-2">{p.tag}</span>
                    <h3 className="font-display text-[1.5rem] text-fg mb-1.5">{p.title}</h3>
                    <p className="text-fg/80 text-[.82rem] mb-3">{p.role}</p>
                    <p className="text-muted text-[.84rem] leading-relaxed mb-4">{p.desc}</p>
                    <a href={p.href} target="_blank" rel="noopener" className="btn btn-secondary text-sm mt-auto">{p.cta}</a>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Parceiros de Composição: com fotos */}
        <section className="section">
          <div className="container">
            <Reveal className="mb-8">
              <span className="eyebrow eyebrow-lg">Parceiros de Composição</span>
              <p className="text-muted mt-2 max-w-[60ch]">As pessoas que dividiram autoria com Edney Fernandes: coautoria comprovada, não apenas participação em gravação.</p>
            </Reveal>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px border border-line">
              {composerPartners.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.08} className="bg-white/[.018]">
                  <div className="aspect-square relative overflow-hidden bg-black/40">
                    {c.hasPhoto ? (
                      <img src={`/assets/img/memorial/${c.photo}`} alt={`Edney Fernandes e ${c.name}`}
                        className="w-full h-full object-cover" loading="lazy" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-muted text-xs text-center p-4">
                        Foto ainda não disponível no acervo
                      </div>
                    )}
                  </div>
                  <div className="p-5">
                    <h3 className="font-display text-[1.3rem] text-fg mb-1">{c.name}</h3>
                    <p className="text-gold text-[.78rem] leading-snug">{c.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Status de registro */}
        <section className="section">
          <div className="container">
            <Reveal className="mb-8">
              <span className="eyebrow eyebrow-lg">Status de registro</span>
              <p className="text-muted mt-2 max-w-[56ch]">Situação de cada coautoria junto à ABRAMUS.</p>
            </Reveal>
            <div className="grid sm:grid-cols-3 gap-px border border-line">
              {[
                { title: 'Por Toda a Vida', partner: 'Autoria exclusiva', note: 'Gravada por Gamação, álbum Vai Nessa (2000)' },
                { title: 'É Só Saudade', partner: 'com Valtinho Jota', note: 'Registro confirmado na ABRAMUS · gravada por Chrigor' },
                { title: 'Toda Madrugada', partner: 'com Valtinho Jota', note: 'Faixa de A Hora É Essa (2000) · registro em andamento' },
                { title: 'Te Quero Tanto', partner: 'com Valtinho Jota', note: 'Registro em andamento na ABRAMUS' },
                { title: 'Prá Que Se Machucar', partner: 'com Thaís Sacomani', note: 'Publicada pela Warner Chappell' },
              ].map((c) => (
                <Reveal key={c.title} className="p-6 bg-white/[.018]">
                  <h3 className="font-display text-[1.3rem] text-fg mb-1.5">{c.title}</h3>
                  <p className="text-gold text-[.82rem] mb-1">{c.partner}</p>
                  <p className="text-muted text-[.82rem]">{c.note}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Interstitial */}
        <div className="interstitial">
          <Reveal blur><p>A música continua<br />onde o tempo termina.</p></Reveal>
        </div>

        {/* Composições em outras vozes */}
        <section className="section">
          <div className="container">
            <Reveal className="text-center mb-10">
              <span className="eyebrow eyebrow-lg">Composições em outras vozes</span>
              <p className="text-muted mt-3 max-w-[52ch] mx-auto">Obras de Edney gravadas por outros artistas, a prova de que uma canção não pertence só a quem a compôs.</p>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px border border-line">
              {voices.map((v, i) => (
                <Reveal key={v.id} delay={i * 0.07}>
                  <a href={`https://www.youtube.com/watch?v=${v.id}`} target="_blank" rel="noopener"
                    className="group block relative overflow-hidden aspect-square"
                  >
                    <img
                      src={`https://img.youtube.com/vi/${v.id}/hqdefault.jpg`}
                      alt={`${v.title}: ${v.artist}`} loading="lazy"
                      className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.05] group-hover:brightness-50"
                    />
                    <div className="absolute top-3 left-3 w-8 h-8 rounded-full bg-white/88 flex items-center justify-center text-bg text-[.72rem]">▶</div>
                    <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-fg font-bold leading-tight">{v.title}</p>
                      <p className="text-muted text-sm mt-1">{v.artist}</p>
                    </div>
                  </a>
                </Reveal>
              ))}
            </div>
            <p className="text-[.78rem] text-white/25 text-center mt-4">Fonte: Songstats · 20,8M streams acumulados em julho de 2026</p>
          </div>
        </section>

        {/* Outras Colaborações: categoria separada de compositores */}
        <section className="section">
          <div className="container">
            <Reveal className="mb-8">
              <span className="eyebrow eyebrow-lg">Outras Colaborações</span>
              <p className="text-muted mt-2 max-w-[60ch]">Músicos, amigos e parceiros de estúdio, categoria separada dos parceiros de composição.</p>
            </Reveal>
            <div className="grid sm:grid-cols-2 gap-px border border-line">
              {otherCollabs.map((c, i) => (
                <Reveal key={c.name} delay={i * 0.1} className="bg-white/[.018] flex flex-col sm:flex-row">
                  <div className="sm:w-[160px] aspect-square sm:aspect-auto shrink-0 overflow-hidden bg-black/40">
                    <img src={`/assets/img/memorial/${c.photo}`} alt={`Edney Fernandes e ${c.name}`}
                      className="w-full h-full object-cover" loading="lazy" />
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <h3 className="font-display text-[1.4rem] text-fg mb-1">{c.name}</h3>
                    <p className="text-muted text-[.85rem]">{c.role}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section py-20">
          <div className="container text-center">
            <Reveal>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link href="/catalogo" className="btn btn-primary">Ver catálogo completo</Link>
                <Link href="/acervo" className="btn btn-secondary">Acervo audiovisual</Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
