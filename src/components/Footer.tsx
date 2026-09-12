import Link from 'next/link'

const links = [
  { href: '/biografia', label: 'Biografia' },
  { href: '/musica', label: 'Obras' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/acervo', label: 'Acervo' },
  { href: '/instituto', label: 'Instituto' },
  { href: '/contato', label: 'Contato' },
]

const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8zm4.2 3.4A4.6 4.6 0 1 1 7.4 12 4.6 4.6 0 0 1 12 7.4zm0 2A2.6 2.6 0 1 0 14.6 12 2.6 2.6 0 0 0 12 9.4zm5-2.2a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17 7.2z"/>
  </svg>
)
const YtIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.9 12 4.9 12 4.9s-6 0-7.7.4a2.7 2.7 0 0 0-1.9 1.9A28.2 28.2 0 0 0 2 12a28.2 28.2 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.4 7.7.4 7.7.4s6 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9A28.2 28.2 0 0 0 22 12a28.2 28.2 0 0 0-.4-4.8zM10 15.2V8.8l5.7 3.2L10 15.2z"/>
  </svg>
)
const SpIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.6 14.4a.8.8 0 0 1-1.1.3 9.3 9.3 0 0 0-6.8-.8.8.8 0 0 1-.4-1.5 10.9 10.9 0 0 1 8 .9.8.8 0 0 1 .3 1.1zm1.2-2.7a.9.9 0 0 1-1.2.3 11.4 11.4 0 0 0-8.2-1 .9.9 0 1 1-.5-1.8 13.2 13.2 0 0 1 9.6 1.2.9.9 0 0 1 .3 1.3zm.1-3a14 14 0 0 0-10.2-1.2 1 1 0 1 1-.6-1.9 16 16 0 0 1 11.7 1.4 1 1 0 1 1-.9 1.7z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="py-14 px-6 text-center border-t border-line bg-bg">
      {/* Logo EF */}
      <div className="flex flex-col items-center mb-8">
        <svg width="52" height="52" viewBox="0 0 100 100" fill="none">
          <text x="50" y="72" textAnchor="middle"
            fontFamily="Georgia, 'Times New Roman', serif"
            fontSize="72" fontStyle="italic" fontWeight="400"
            fill="#C9A84C" letterSpacing="-4">ef</text>
        </svg>
        <span className="font-body text-[.58rem] font-black tracking-[.26em] uppercase text-fg/60 mt-1">
          Acervo Musical Oficial
        </span>
      </div>

      <p className="font-display text-[1.4rem] text-fg/70 italic mb-8">A música continua.</p>

      <nav className="flex flex-wrap justify-center gap-0 mb-8">
        {links.map(({ href, label }, i) => (
          <Link key={href} href={href}
            className="font-body text-[.64rem] font-bold tracking-[.16em] uppercase
              text-muted hover:text-gold transition-colors px-4 py-1 relative
              after:content-['·'] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2
              after:text-white/10 last:after:hidden">
            {label}
          </Link>
        ))}
      </nav>

      {/* Sociais */}
      <div className="flex justify-center gap-3 mb-10">
        {[
          { href: 'https://www.instagram.com/edneyfernandesoficial', Icon: IgIcon, label: 'Instagram' },
          { href: 'https://www.youtube.com/watch?v=6BlIPv5Lhow&list=PLqnsR5NrdI1OFceJLGu40cO1JRLEkfcy0', Icon: YtIcon, label: 'YouTube' },
          { href: 'https://open.spotify.com/playlist/0X6y4zHggBO23TigmeDhWr', Icon: SpIcon, label: 'Spotify' },
        ].map(({ href, Icon, label }) => (
          <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}
            className="w-9 h-9 border border-white/10 flex items-center justify-center
              text-white/35 hover:text-gold hover:border-gold transition-all duration-200">
            <Icon />
          </a>
        ))}
      </div>

      <div className="border-t border-line pt-8 space-y-1">
        <p className="font-body text-[.64rem] tracking-[.1em] uppercase text-muted/50">
          Edney Fernandes · Todos os direitos reservados
        </p>
        <p className="font-body text-[.56rem] tracking-[.08em] uppercase text-muted/30">
          Curadoria do acervo: Laiá Music · ABRAMUS 4014
        </p>
      </div>
    </footer>
  )
}
