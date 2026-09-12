import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Reveal from '@/components/Reveal'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Acervo · Edney Fernandes | Fotos, Vídeos e Registros',
  description: 'Acervo fotográfico, audiovisual e de imprensa de Edney Fernandes. Registros raros do pagode paulista dos anos 90. Fotos com Marcelo Lombardo, Valtinho Jota, Thaís Saccomani e outros.',
  alternates: { canonical: 'https://edneyfernandes.com/acervo' },
  openGraph: {
    title: 'Acervo · Edney Fernandes | Fotos, Vídeos e Registros',
    description: 'Acervo fotográfico, audiovisual e de imprensa de Edney Fernandes. Registros raros do pagode paulista dos anos 90. Fotos com Marcelo Lombardo, Valtinho Jota, Thaís Saccomani e outros.',
    url: 'https://edneyfernandes.com/acervo',
    images: [{ url: '/assets/img/memorial/edney-hero.jpg', width: 1200, height: 630 }],
  },
}

const photos = [
  { src: '/assets/img/memorial/edney-hero.jpg', alt: 'Edney Fernandes' },
  { src: '/assets/img/memorial/edney - roda de samba.jpg', alt: 'Edney em roda de samba' },
  { src: '/assets/img/memorial/edney-cd ed e a tripulacao.jpg', alt: 'Ed & A Tripulação' },
  { src: '/assets/img/memorial/edney-com-marcelo-Lombardo.jpg', alt: 'Com Marcelo Lombardo' },
  { src: '/assets/img/memorial/valtinho jota-thais Saccomani-edney fernandes.jpg', alt: 'Valtinho Jota, Thaís Saccomani e Edney' },
  { src: '/assets/img/memorial/edney e thais saccomani.jpg', alt: 'Edney e Thaís Saccomani' },
  { src: '/assets/img/memorial/valtinho jota-thais-saccomani-marcelo-lombardo-Mel.jpg', alt: 'Encontros e Caminhos' },
  { src: '/assets/img/memorial/edney, papacaca e grupo.jpg', alt: 'Edney com o grupo' },
  { src: '/assets/img/memorial/grupo-com-jorge-canuto.jpg', alt: 'Com Jorge Canuto' },
  { src: '/assets/img/memorial/marcos-vanessa-jackson.jpg', alt: 'Com Marcos e Vanessa Jackson' },
  { src: '/assets/img/memorial/Netinho-de-Paula-Edney-f-Claudinho-Luiz- e Valtinho - jota.jpg', alt: 'Com Netinho de Paula e Valtinho Jota' },
  { src: '/assets/img/memorial/edney-2pessoas.jpg', alt: 'Encontro' },
  { src: '/assets/img/memorial/edney-back vocal - luiz menino e outros.jpg', alt: 'Edney, Luiz Menino e outros' },
  { src: '/assets/img/memorial/edney-gabriela-exmulher-familia.jpg', alt: 'Família' },
  { src: '/assets/img/memorial/edney beijando gabriela no rosto .jpg', alt: 'Edney e Gabriela' },
  { src: '/assets/img/memorial/gabriela beijando edney no rosto.jpg', alt: 'Gabriela e Edney' },
]

export default function Acervo() {
  return (
    <>
      <Header />
      <main className="pt-[var(--header-h)]">
        {/* Hero */}
        <section className="section pt-20 pb-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_30%,rgba(201,168,76,.06),transparent_50%)]" />
          <div className="container relative z-10">
            <Reveal>
              <span className="eyebrow eyebrow-lg block mb-4">Acervo</span>
              <h1 className="font-display text-[clamp(2.6rem,5.5vw,5rem)] leading-[.95] tracking-tight text-fg mb-5">
                Memória<br />é presença
              </h1>
              <p className="text-muted max-w-[52ch] leading-relaxed">
                Fotografias, vídeos e registros de imprensa que preservam a trajetória de Edney Fernandes, fragmentos íntimos de uma vida dedicada à música.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Photos */}
        <section className="section">
          <div className="container">
            <Reveal className="text-center mb-10">
              <span className="eyebrow eyebrow-lg">Fotografia</span>
              <p className="text-muted mt-3">Registros pessoais, profissionais e de palco.</p>
            </Reveal>
          </div>
          {/* Horizontal scroll strip */}
          <div className="flex overflow-x-auto gap-[2px] pb-4 px-[max(20px,calc((100%-1240px)/2))]"
            style={{ scrollSnapType: 'x mandatory', WebkitOverflowScrolling: 'touch' }}
          >
            {photos.map((p, i) => (
              <Reveal key={p.src} delay={i * 0.04}
                className="flex-none w-[clamp(220px,26vw,340px)] aspect-[4/5] overflow-hidden relative group cursor-zoom-in bg-[#111]"
                style={{ scrollSnapAlign: 'start' }}
              >
                <img
                  src={p.src} alt={p.alt} loading="lazy"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-[1.04] group-hover:brightness-50"
                />
                {p.alt && (
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent
                    opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                    <p className="text-fg text-sm leading-snug">{p.alt}</p>
                  </div>
                )}
              </Reveal>
            ))}
          </div>
        </section>

        {/* Videos */}
        <section className="section">
          <div className="container">
            <Reveal className="text-center mb-10">
              <span className="eyebrow eyebrow-lg">Registros audiovisuais</span>
              <p className="text-muted mt-3">Imagens raras de uma trajetória que marcou quem viu e viveu o pagode nos anos 90.</p>
            </Reveal>
            <div className="grid md:grid-cols-2 gap-[2px] border border-line">
              {[
                { id: '6BlIPv5Lhow', title: 'Ed & A Tripulação: A Hora É Essa', sub: 'Arquivo audiovisual' },
                { id: 'ZMlJcangTng', title: 'Programa Guto Moreno', sub: 'Participação televisiva' },
              ].map(v => (
                <Reveal key={v.id} className="bg-[#050505]">
                  <iframe
                    src={`https://www.youtube.com/embed/${v.id}`}
                    title={v.title} loading="lazy" allowFullScreen
                    className="w-full aspect-video block"
                  />
                  <div className="p-4 border-t border-line">
                    <strong className="text-fg block text-[.97rem]">{v.title}</strong>
                    <span className="text-muted text-sm">{v.sub}</span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* Press */}
        <section className="section">
          <div className="container text-center">
            <Reveal className="mb-8">
              <span className="eyebrow eyebrow-lg">Imprensa</span>
            </Reveal>
            <Reveal delay={.1} className="max-w-2xl mx-auto border border-line rounded-xl overflow-hidden">
              <img
                src="/assets/img/memorial/jornal-estudio-43.png"
                alt="Registro de imprensa: Estúdio 43"
                className="w-full grayscale"
              />
              <p className="p-4 text-muted text-sm text-center bg-white/[.02]">Participação no Estúdio 43, registro de imprensa</p>
            </Reveal>
          </div>
        </section>

        {/* CTA */}
        <section className="section py-20 text-center">
          <div className="container">
            <Reveal>
              <span className="eyebrow eyebrow-lg">Contribua com o acervo</span>
              <p className="text-muted max-w-[48ch] mx-auto mt-3 mb-7">Tem fotos, vídeos ou documentos sobre Edney Fernandes? Seu material pode fazer parte deste memorial.</p>
              <Link href="/contato" className="btn btn-primary">Entrar em contato</Link>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
