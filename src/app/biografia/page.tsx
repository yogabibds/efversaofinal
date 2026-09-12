import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Biografia · Edney Fernandes | Compositor e Cantor Brasileiro',
  description: 'A trajetória de Edney Fernandes: do coral da Zona Leste de São Paulo ao pagode paulista dos anos 90. Ed & A Tripulação, A Hora É Essa (2000), composições em Warner Chappell e Sony Music Publishing.',
  alternates: { canonical: 'https://edneyfernandes.com/biografia' },
  openGraph: {
    title: 'Biografia · Edney Fernandes | Compositor e Cantor Brasileiro',
    description: 'A trajetória de Edney Fernandes: do coral da Zona Leste de São Paulo ao pagode paulista dos anos 90. Ed & A Tripulação, A Hora É Essa (2000), composições em Warner Chappell e Sony Music Publishing.',
    url: 'https://edneyfernandes.com/biografia',
    images: [{ url: '/assets/img/memorial/edney-hero.jpg', width: 1200, height: 630 }],
  },
}

const chapters = [
  { decade: 'Infância', title: 'As primeiras notas', body: 'Ainda criança, Edney começou a cantar nos corais da igreja que frequentava com a mãe na Zona Leste de São Paulo. Ali descobriu a voz como instrumento, e também o pandeiro, o violão, a percussão. Suas referências nasceram dentro de casa e da rua: Jorge Ben Jor, Djavan, Marisa Monte, Gonzaguinha.' },
  { decade: 'Início profissional', title: 'Toque de Sedução e Canuto Brasil', body: 'A trajetória profissional começou em diferentes grupos do pagode paulista. O grupo Toque de Sedução e o Canuto Brasil foram etapas fundamentais de formação: rodas de samba, shows, estúdios e o universo de um pagode que ainda vivia seus anos dourados.' },
  { decade: 'Trabalho de estúdio', title: 'Uma presença em 265 fonogramas', body: 'Para além dos projetos com seu nome à frente, Edney construiu uma carreira sólida como intérprete, backing vocal e instrumentista de apoio em estúdio. O Relatório Analítico de Titular Conexo da ABRAMUS/ECAD registra sua presença em 265 fonogramas: a maioria como vocal de apoio, com participações também como vocalista principal e percussionista, incluindo registros junto a artistas como Dedé Paraízo e o grupo Privilégio.' },
  { decade: 'Anos 90–2000', title: 'Ed & A Tripulação', body: 'O projeto que consolidaria seu nome. Como vocalista central de Ed & A Tripulação, produzido por Arnaldo Sacomani, Edney gravou o álbum A Hora É Essa (2000, East West/Continental, hoje Warner Music Brasil). No disco, canta e toca violão em todas as faixas e assina a composição em 7 das 14 músicas, sempre em parceria com Ronaldo Marques.' },
  { decade: 'Composições', title: 'A obra que seguiu adiante', body: 'Obras como "No Fundo dos Meus Olhos", "Te Vejo na TV", "Deixa Rolar" e "É Só Saudade" foram gravadas por Péricles, Thiaguinho, Exaltasamba, Chrigor, Gamação, Os Mulekes e Grupo Percepção, levando seu nome a uma nova geração de ouvintes.' },
  { decade: 'Encontros', title: 'Parcerias e rede artística', body: 'Ao longo da trajetória, Edney trabalhou com artistas que ajudaram a definir o som do pagode paulista: Thaís Nascimento, Valtinho Jota, Marcelo Lombardo, Lua Lafaiette, Almirzinho, Beth Carvalho, Netinho de Paula, Billy SP, Dedé Paraíso, Jorge Canuto e outros.' },
  { decade: 'Projeto póstumo', title: 'Gesto de Carinho', body: 'Em 2004, aos 27 anos, sua trajetória foi interrompida. O catálogo, porém, seguiu crescendo. Gesto de Carinho, seu álbum póstumo iniciado em sua carreira solo, retorna agora como parte viva de seu legado artístico, preservado e continuado pela Laiá Music.' },
  { decade: 'Hoje', title: '43 obras, 20,8 milhões de streams', body: 'O catálogo oficial registrado em ABRAMUS, Warner Chappell, Sony Music Publishing, Peermusic e Abril Music/Deckdisc soma 43 obras. Hoje elas acumulam mais de 20,8 milhões de streams em mais de 20 países e seguem sendo descobertas por novas gerações.' },
]

const rootInfluences = [
  { name: 'Fundo de Quintal', desc: 'A renovação do samba de raiz que Edney admirava.' },
  { name: 'Jorge Aragão', desc: 'Melodia e poesia do samba tradicional.' },
  { name: 'Almir Guineto', desc: 'Pagode carioca em sua forma mais autêntica.' },
  { name: 'Cacique de Ramos', desc: 'O berço do pagode como movimento.' },
]

const influences = [
  { genre: 'Samba-rock / Soul', name: 'Jorge Ben Jor', desc: 'A junção de samba e guitarra elétrica, o groove que abraça sem esforço.' },
  { genre: 'MPB / Romântico', name: 'Djavan', desc: 'A sofisticação harmônica e a leveza melódica que atravessa gêneros.' },
  { genre: 'MPB / Samba', name: 'Marisa Monte', desc: 'A presença, a curadoria e a mistura de brasilidade com contemporaneidade.' },
  { genre: 'MPB / Popular', name: 'Gonzaguinha', desc: 'A emoção direta, as letras que tocam sem precisar explicar.' },
]

const soulDialogues = [
  { name: 'Tim Maia', desc: 'Soul brasileira' },
  { name: 'Cassiano', desc: 'Soul brasileira' },
  { name: 'Hyldon', desc: 'Soul brasileira' },
  { name: 'Banda Black Rio', desc: 'Soul instrumental' },
]

export default function Biografia() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden bg-black pt-[var(--header-h)]">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.22) 48%,rgba(0,0,0,.7)), url(/assets/img/memorial/edney-hero.jpg) center/cover no-repeat' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
          <div className="container relative z-10">
            <Reveal>
              <span className="eyebrow eyebrow-lg block mb-4">Biografia</span>
              <h1 className="font-display text-[clamp(3rem,7vw,6.2rem)] leading-[.92] tracking-tight text-fg mb-5">
                Edney<br />Fernandes
              </h1>
              <p className="text-fg/80 text-[clamp(1.1rem,2vw,1.45rem)] max-w-[38ch] leading-relaxed">
                Cantor, compositor, intérprete, backing vocal e instrumentista. Uma trajetória construída no coração do samba e do pagode paulista.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Timeline */}
        <section className="section">
          <div className="container">
            <Reveal className="text-center mb-14">
              <span className="eyebrow eyebrow-lg">Linha do tempo</span>
            </Reveal>
            <div className="max-w-3xl mx-auto relative">
              {/* Vertical line */}
              <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent opacity-60" />
              <div className="space-y-16">
                {chapters.map((c, i) => (
                  <Reveal key={c.decade} delay={i * 0.06}
                    className="pl-10 relative"
                  >
                    <div className="absolute left-[-5px] top-2.5 w-[11px] h-[11px] rounded-full bg-gold shadow-[0_0_16px_rgba(201,168,76,.5)]" />
                    <span className="text-gold text-[.72rem] tracking-[.2em] uppercase font-extrabold block mb-1.5">
                      {c.decade}
                    </span>
                    <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.8rem)] text-fg leading-tight mb-3 font-medium">
                      {c.title}
                    </h2>
                    <p className="text-muted leading-relaxed max-w-[68ch]">{c.body}</p>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Quote */}
        <div className="interstitial">
          <Reveal blur>
            <blockquote className="font-display text-[clamp(1.9rem,4vw,3.2rem)] font-light italic text-fg text-center max-w-[28ch] leading-[1.18]">
              <span className="text-gold text-[4rem] leading-none align-[-0.4em] mr-1">"</span>
              Há vozes que, mesmo depois da despedida, não se apagam.
            </blockquote>
          </Reveal>
        </div>

        {/* Influences */}
        <section className="section">
          <div className="container">
            <Reveal className="text-center mb-10">
              <span className="eyebrow eyebrow-lg">Referências estéticas</span>
              <p className="text-muted mt-3 max-w-[60ch] mx-auto">A obra de Edney Fernandes transita entre o pagode paulista dos anos 1990, o samba-rock e a soul music brasileira, reunindo elementos do samba tradicional, da música negra americana e da canção popular brasileira.</p>
            </Reveal>

            <Reveal delay={.05} className="mb-3 text-center">
              <span className="text-gold text-[.72rem] tracking-[.18em] uppercase font-extrabold">Raízes do samba e pagode</span>
            </Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-line mb-10">
              {rootInfluences.map((inf, i) => (
                <Reveal key={inf.name} delay={i * 0.08}
                  className="p-6 bg-white/[.014] hover:bg-white/[.035] transition-colors text-center"
                >
                  <h3 className="font-display text-[1.4rem] text-fg mb-1.5">{inf.name}</h3>
                  <p className="text-muted text-[.82rem] leading-relaxed">{inf.desc}</p>
                </Reveal>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px border border-line">
              {influences.map((inf, i) => (
                <Reveal key={inf.name} delay={i * 0.1}
                  className="p-7 bg-white/[.018] hover:bg-white/[.04] transition-colors"
                >
                  <span className="text-gold text-[.72rem] tracking-[.12em] uppercase font-extrabold block mb-2">{inf.genre}</span>
                  <h3 className="font-display text-[1.7rem] text-fg mb-2">{inf.name}</h3>
                  <p className="text-muted text-sm leading-relaxed">{inf.desc}</p>
                </Reveal>
              ))}
            </div>

            <Reveal delay={.3} className="mt-10 text-center">
              <span className="eyebrow eyebrow-lg" style={{ fontSize: '.8rem' }}>Diálogos com a Soul Music</span>
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                {soulDialogues.map(s => (
                  <span key={s.name}
                    className="px-5 py-2.5 border border-gold/25 rounded-full bg-gold/[.04] text-sm text-fg/90"
                  >
                    {s.name} <span className="text-muted text-xs">· {s.desc}</span>
                  </span>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="section py-20">
          <div className="container text-center">
            <Reveal>
              <span className="eyebrow eyebrow-lg">Continue explorando</span>
              <div className="flex flex-wrap gap-3 justify-center mt-7">
                <Link href="/musica" className="btn btn-primary">Ver discografia e obras</Link>
                <Link href="/catalogo" className="btn btn-secondary">Catálogo de composições</Link>
                <Link href="/acervo" className="btn btn-secondary">Acervo de fotos e vídeos</Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
