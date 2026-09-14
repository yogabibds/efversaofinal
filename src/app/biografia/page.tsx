import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Biografia · Edney Fernandes | Compositor e Cantor Brasileiro',
  description: 'A trajetória de Edney Fernandes: de São Miguel Paulista ao pagode paulista dos anos 90. Ed & A Tripulação, A Hora É Essa (2000), 21M+ streams.',
  alternates: { canonical: 'https://edneyfernandes.com/biografia' },
  openGraph: {
    title: 'Biografia · Edney Fernandes',
    description: 'Cantor, compositor, violonista e percussionista. Uma trajetória construída no coração do samba paulista.',
    url: 'https://edneyfernandes.com/biografia',
    images: [{ url: '/assets/img/memorial/edney-hero.jpg', width: 1200, height: 630 }],
  },
}

const chapters = [
  {
    decade: 'Infância',
    title: 'As primeiras notas',
    body: 'Nascido em São Miguel Paulista, Zona Leste de São Paulo, Edney começou a cantar aos 16 anos no coral de uma igreja evangélica. Passou por boates e chegou aos estúdios. Suas referências nasceram dentro de casa e da rua: Jorge Ben Jor, Djavan, Marisa Monte, Gonzaguinha.',
  },
  {
    decade: 'Início profissional',
    title: 'Toque de Sedução, Grupo Sereno e Canuto Brasil',
    body: 'A trajetória profissional começou em diferentes grupos do pagode paulista. Nos estúdios, trabalhou como assistente de produção com Maestro Jobam, Lua Lafaiette e Ronaldo Marques — uma escola que moldou seu ouvido e sua forma de entender o som.',
  },
  {
    decade: 'Trabalho de estúdio',
    title: 'Uma presença em 265 fonogramas',
    body: 'Para além dos projetos com seu nome à frente, Edney construiu uma carreira sólida como intérprete, backing vocal e instrumentista de apoio em estúdio, incluindo registros junto a artistas como Dedé Paraízo e o grupo Privilégio. Participou também como percussionista e produtor assistente no Terra Brasil — Pagode de Mesa 3.',
  },
  {
    decade: 'Anos 90–2000',
    title: 'Ed & A Tripulação — A Hora É Essa',
    body: 'Com o irmão Edmar, estruturou Ed & A Tripulação. Uma demo autoral de sete músicas chegou à Continental e virou disco. O álbum A Hora É Essa (2000, East West/Continental, hoje Warner Music Brasil), produzido por Arnaldo Saccomani e com arranjos do Maestro Jobam, consolidou sua identidade artística. Edney canta, toca violão e assina composições em todo o álbum. O nome do grupo nasceu da ideia de que as pessoas perguntassem "Ed e o quê?" — criando uma oportunidade de explicar e ser lembrado.',
  },
  {
    decade: 'A imprensa',
    title: '"Levantando Vôo" — Coisa de Pele',
    body: 'A Revista CAVACO dedicou uma matéria ao grupo com o título "Levantando Vôo". Nela, Edney revela que o nome original do projeto seria Coisa de Pele — uma homenagem a Jorge Aragão —, mas que a gravadora sugeriu algo que chamasse mais atenção. A faixa "Noites de Verão" foi apontada pela imprensa como a que melhor traduzia a identidade real do grupo.',
  },
  {
    decade: 'Composições',
    title: 'A obra que seguiu adiante',
    body: 'Obras como "No Fundo dos Meus Olhos", "Te Vejo na TV", "Deixa Rolar", "É Só Saudade" e "Por Toda a Vida" foram gravadas por Péricles, Thiaguinho, Exaltasamba, Chrigor, Gamação, Os Mulekes, Grupo Percepção e outros, levando seu nome a novas gerações de ouvintes.',
  },
  {
    decade: 'Projeto póstumo',
    title: 'Gesto de Carinho',
    body: 'Em 2004, aos 27 anos, sua trajetória foi interrompida. O catálogo, porém, seguiu crescendo. Gesto de Carinho, seu álbum póstumo iniciado em carreira solo, retorna agora como parte viva de seu legado artístico, preservado e continuado pela Laiá Music.',
  },
  {
    decade: 'Hoje',
    title: '43 obras, 21 milhões de streams',
    body: 'O catálogo oficial registrado em ABRAMUS soma 43 obras, com distribuição editorial em Warner Chappell, Sony Music Publishing e Peermusic. Hoje acumulam mais de 21 milhões de streams em mais de 20 países e seguem sendo descobertas por novas gerações.',
  },
]

const rootInfluences = [
  { name: 'Fundo de Quintal', desc: 'A renovação do samba de raiz que Edney admirava.', img: '/assets/img/influencias/fundo-de-quintal.jpg' },
  { name: 'Jorge Aragão', desc: 'Melodia e poesia do samba tradicional.', img: '/assets/img/influencias/jorge-aragao.jpg' },
  { name: 'Almir Guineto', desc: 'Pagode carioca em sua forma mais autêntica.', img: '/assets/img/influencias/almir-guineto.jpg' },
  { name: 'Cacique de Ramos', desc: 'O berço do pagode como movimento.', img: '/assets/img/influencias/cacique-de-ramos.jpg' },
]

const soulDialogues = [
  { name: 'Tim Maia', desc: 'Soul brasileira', img: '/assets/img/influencias/tim-maia.jpg' },
  { name: 'Cassiano', desc: 'Soul brasileira', img: '/assets/img/influencias/cassiano.jpg' },
  { name: 'Hyldon', desc: 'Soul brasileira', img: '/assets/img/influencias/hyldon.jpg' },
  { name: 'Banda Black Rio', desc: 'Soul instrumental', img: '/assets/img/influencias/banda-black-rio.jpg' },
]

export default function Biografia() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden bg-black pt-[var(--header-h)]">
          <div className="absolute inset-0" style={{ background: 'linear-gradient(90deg,rgba(0,0,0,.75),rgba(0,0,0,.25) 48%,rgba(0,0,0,.7)), url(/assets/img/memorial/edney-hero.jpg) center/cover no-repeat' }} />
          <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
          <div className="container relative z-10">
            <Reveal>
              <span className="eyebrow eyebrow-lg block mb-4">Biografia</span>
              <h1 className="font-display text-[clamp(3rem,7vw,6.2rem)] leading-[.92] tracking-tight text-fg mb-5">
                Edney<br />Fernandes
              </h1>
              <p className="text-fg/75 text-[clamp(1rem,2vw,1.35rem)] max-w-[42ch] leading-relaxed">
                Cantor, compositor, violonista e percussionista de São Miguel Paulista. Uma trajetória construída no coração do samba e do pagode paulista.
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
              <div className="absolute left-0 top-2 bottom-0 w-px bg-gradient-to-b from-gold via-gold/30 to-transparent opacity-60" />
              <div className="space-y-16">
                {chapters.map((c, i) => (
                  <Reveal key={c.decade} delay={i * 0.06} className="pl-10 relative">
                    <div className="absolute left-[-5px] top-2.5 w-[11px] h-[11px] rounded-full bg-gold shadow-[0_0_16px_rgba(201,168,76,.5)]" />
                    <span className="text-gold text-[.72rem] tracking-[.2em] uppercase font-extrabold block mb-1.5">{c.decade}</span>
                    <h2 className="font-display text-[clamp(1.7rem,3.5vw,2.8rem)] text-fg leading-tight mb-3 font-medium">{c.title}</h2>
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
              A música continua onde o tempo termina.
            </blockquote>
          </Reveal>
        </div>

        {/* Referências estéticas */}
        <section className="section">
          <div className="container">
            <Reveal className="text-center mb-10">
              <span className="eyebrow eyebrow-lg">Referências estéticas</span>
              <p className="text-muted mt-3 max-w-[60ch] mx-auto leading-relaxed">
                A obra de Edney Fernandes transita entre o pagode paulista dos anos 1990, o samba-rock e a soul music brasileira, reunindo elementos do samba tradicional, da música negra americana e da canção popular brasileira.
              </p>
            </Reveal>

            {/* Raízes — grid estilo Spotify */}
            <Reveal delay={.05} className="mb-6">
              <span className="text-gold text-[.72rem] tracking-[.18em] uppercase font-extrabold block text-center mb-6">Raízes do samba e pagode</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {rootInfluences.map((inf, i) => (
                  <Reveal key={inf.name} delay={i * 0.08}>
                    <div className="group cursor-pointer">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-gold/20 to-white/5 mb-3 relative">
                        <img src={inf.img} alt={inf.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="font-body font-bold text-fg text-[.92rem] mb-0.5">{inf.name}</h3>
                      <p className="text-muted text-[.78rem] leading-snug">{inf.desc}</p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </Reveal>

            {/* Soul — grid estilo Spotify */}
            <Reveal delay={.1} className="mt-10">
              <span className="text-gold text-[.72rem] tracking-[.18em] uppercase font-extrabold block text-center mb-6">Diálogos com a Soul Music</span>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {soulDialogues.map((s, i) => (
                  <Reveal key={s.name} delay={i * 0.08}>
                    <div className="group cursor-pointer">
                      <div className="aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-white/10 to-white/[.03] mb-3 relative">
                        <img src={s.img} alt={s.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="font-body font-bold text-fg text-[.92rem] mb-0.5">{s.name}</h3>
                      <p className="text-muted text-[.78rem]">{s.desc}</p>
                    </div>
                  </Reveal>
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
                <Link href="/musica" className="btn btn-primary"><span>Ver discografia e obras</span></Link>
                <Link href="/catalogo" className="btn btn-secondary"><span>Catálogo de composições</span></Link>
                <Link href="/acervo" className="btn btn-secondary"><span>Acervo de fotos e vídeos</span></Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
