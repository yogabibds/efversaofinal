import type { Metadata } from 'next'
import Link from 'next/link'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: 'Instituto Edney Fernandes | Preservação Cultural e Educação Musical',
  description: 'Instituto Edney Fernandes, projeto de preservação cultural, educação musical e impacto social. Editais Lei Rouanet, PROAC, Funarte, Itaú Cultural.',
  alternates: { canonical: 'https://edneyfernandes.com/instituto' },
  openGraph: {
    title: 'Instituto Edney Fernandes | Preservação Cultural e Educação Musical',
    description: 'Instituto Edney Fernandes, projeto de preservação cultural, educação musical e impacto social. Editais Lei Rouanet, PROAC, Funarte, Itaú Cultural.',
    url: 'https://edneyfernandes.com/instituto',
    images: [{ url: '/assets/img/memorial/edney-hero.jpg', width: 1200, height: 630 }],
  },
}

const pillars = [
  { icon: '🎵', title: 'Educação musical', desc: 'Oficinas, cursos e projetos pedagógicos voltados ao samba, ao pagode e à composição popular brasileira, levados a comunidades e escolas.' },
  { icon: '📁', title: 'Preservação cultural', desc: 'Digitalização, catalogação e acesso ao acervo artístico de Edney Fernandes e ao do pagode paulista da sua geração.' },
  { icon: '🤝', title: 'Projetos sociais', desc: 'Música como ferramenta de transformação: iniciativas em bairros periféricos de São Paulo, especialmente na Zona Leste onde Edney cresceu.' },
  { icon: '📖', title: 'Memória & pesquisa', desc: 'Registro, publicação e difusão da história do samba e do pagode paulista, com Edney Fernandes como ponto de partida e referência.' },
]

const editais = ['Lei Rouanet', 'PROAC', 'Funarte', 'Itaú Cultural', 'Natura Musical', 'Petrobras Cultural', 'Ibermúsicas']

export default function Instituto() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="min-h-[80vh] flex items-center relative overflow-hidden bg-bg pt-[var(--header-h)]">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_40%,rgba(201,168,76,.1),transparent_55%)]" />
          <div className="container relative z-10 text-center py-20">
            <Reveal>
              <span className="inline-flex items-center gap-2 border border-gold/40 rounded-full px-4 py-1.5 text-[.76rem] tracking-widest uppercase text-gold mb-7">
                <span className="w-1.5 h-1.5 rounded-full bg-gold animate-[pulseGold_2s_infinite] inline-block" />
                Em formação
              </span>
              <h1 className="font-display text-[clamp(2.4rem,6vw,5.8rem)] leading-[.92] tracking-tight text-fg mb-5 block">
                Instituto<br />Edney Fernandes
              </h1>
              <p className="text-muted text-[clamp(1rem,2vw,1.35rem)] max-w-[52ch] mx-auto leading-relaxed mb-9">
                Um projeto dedicado à preservação cultural, à educação musical e ao impacto social, em nome de um legado que não se esgota.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <a href="https://institutoef.netlify.app/#apoio" target="_blank" rel="noopener" className="btn btn-primary">Ver site do Instituto</a>
                <Link href="/contato" className="btn btn-secondary">Quero apoiar</Link>
              </div>
            </Reveal>
          </div>
        </section>

        {/* What is it */}
        <section className="section">
          <div className="container max-w-3xl mx-auto text-center">
            <Reveal>
              <span className="eyebrow eyebrow-lg">O que é</span>
              <p className="text-muted leading-relaxed mt-4 text-[1.05rem]">
                O Instituto Edney Fernandes nasce da vontade de transformar um legado artístico em impacto cultural contínuo: projetos sociais, educação musical, preservação histórica e formação de novas gerações ligadas ao samba e à cultura popular brasileira.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Pillars */}
        <section className="section">
          <div className="container">
            <Reveal className="text-center mb-10"><span className="eyebrow eyebrow-lg">Pilares</span></Reveal>
            <div className="grid sm:grid-cols-2 gap-px border border-line">
              {pillars.map((p, i) => (
                <Reveal key={p.title} delay={i * 0.1} className="p-8 bg-white/[.02] hover:bg-white/[.04] transition-colors">
                  <div className="text-[2rem] mb-4">{p.icon}</div>
                  <h3 className="font-display text-[1.7rem] text-fg mb-3">{p.title}</h3>
                  <p className="text-muted text-sm leading-relaxed">{p.desc}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Editais */}
        <section className="section">
          <div className="container">
            <Reveal className="text-center mb-8">
              <span className="eyebrow eyebrow-lg">Editais e fomento</span>
              <p className="text-muted mt-3 max-w-[50ch] mx-auto">O Instituto está em processo de estruturação para concorrer a editais de fomento cultural.</p>
            </Reveal>
            <div className="flex flex-wrap gap-3 justify-center">
              {editais.map(e => (
                <div key={e} className="px-5 py-3 border border-line rounded-xl text-muted text-sm bg-white/[.018]">{e}</div>
              ))}
            </div>
          </div>
        </section>

        {/* Support CTA */}
        <section className="section py-20">
          <div className="container max-w-xl mx-auto">
            <Reveal>
              <div className="bg-fg rounded-[var(--radius)] p-10 text-center">
                <h3 className="font-display text-[2.2rem] text-bg mb-3">Apoie o Instituto</h3>
                <p className="text-bg/70 mb-7">Para parcerias, patrocínio cultural ou co-realização de projetos.</p>
                <Link href="/contato" className="btn bg-bg text-fg border-bg hover:bg-gold hover:border-gold hover:text-bg">
                  Fale com a curadoria
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
