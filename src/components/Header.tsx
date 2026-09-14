'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  { href: '/', label: 'Início' },
  { href: '/biografia', label: 'Biografia' },
  { href: '/musica', label: 'Obras' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/acervo', label: 'Acervo' },
  { href: '/instituto', label: 'Instituto' },
  { href: '/contato', label: 'Contato' },
]

const IgIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2zm0 2A3.8 3.8 0 0 0 4 7.8v8.4A3.8 3.8 0 0 0 7.8 20h8.4a3.8 3.8 0 0 0 3.8-3.8V7.8A3.8 3.8 0 0 0 16.2 4H7.8zm4.2 3.4A4.6 4.6 0 1 1 7.4 12 4.6 4.6 0 0 1 12 7.4zm0 2A2.6 2.6 0 1 0 14.6 12 2.6 2.6 0 0 0 12 9.4zm5-2.2a1.1 1.1 0 1 1-1.1 1.1A1.1 1.1 0 0 1 17 7.2z"/>
  </svg>
)

const YtIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M21.6 7.2a2.7 2.7 0 0 0-1.9-1.9C18 4.9 12 4.9 12 4.9s-6 0-7.7.4a2.7 2.7 0 0 0-1.9 1.9A28.2 28.2 0 0 0 2 12a28.2 28.2 0 0 0 .4 4.8 2.7 2.7 0 0 0 1.9 1.9c1.7.4 7.7.4 7.7.4s6 0 7.7-.4a2.7 2.7 0 0 0 1.9-1.9A28.2 28.2 0 0 0 22 12a28.2 28.2 0 0 0-.4-4.8zM10 15.2V8.8l5.7 3.2L10 15.2z"/>
  </svg>
)

const SpIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
    <path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm4.6 14.4a.8.8 0 0 1-1.1.3 9.3 9.3 0 0 0-6.8-.8.8.8 0 0 1-.4-1.5 10.9 10.9 0 0 1 8 .9.8.8 0 0 1 .3 1.1zm1.2-2.7a.9.9 0 0 1-1.2.3 11.4 11.4 0 0 0-8.2-1 .9.9 0 1 1-.5-1.8 13.2 13.2 0 0 1 9.6 1.2.9.9 0 0 1 .3 1.3zm.1-3a14 14 0 0 0-10.2-1.2 1 1 0 1 1-.6-1.9 16 16 0 0 1 11.7 1.4 1 1 0 1 1-.9 1.7z"/>
  </svg>
)

// Logo EF cursivo elegante — modelo 5
const EFLogo = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 100 100" fill="none">
    <text
      x="50" y="72"
      textAnchor="middle"
      fontFamily="Georgia, 'Times New Roman', serif"
      fontSize="72"
      fontStyle="italic"
      fontWeight="400"
      fill="#C9A84C"
      letterSpacing="-4"
    >ef</text>
  </svg>
)

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
  }, [menuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex flex-col
          border-b transition-all duration-500
          ${scrolled
            ? 'bg-bg/92 backdrop-blur-xl border-gold/15 shadow-[0_8px_40px_rgba(0,0,0,.45)]'
            : 'bg-bg/40 backdrop-blur-sm border-white/[.06]'
          }`}
      >
        {/* Faixa superior: lang | LOGO+EF centro | sociais + toggle */}
        <div className="flex items-center justify-between px-6 pt-3 pb-2 gap-4">

          {/* Esquerda: lang switcher */}
          <div className="hidden md:flex items-center gap-1 shrink-0 min-w-[110px]">
            {['PT','EN','ES'].map((l, i) => (
              <button key={l}
                className={`font-body text-[.6rem] font-black tracking-[.14em] border px-2 py-1 transition-all duration-200
                  ${i === 0
                    ? 'bg-gold text-bg border-gold'
                    : 'bg-transparent text-white/40 border-white/10 hover:border-gold/40 hover:text-gold/70'
                  }`}
              >{l}</button>
            ))}
          </div>

          {/* Centro: logo */}
          <Link href="/" className="flex flex-col items-center gap-0.5 flex-1 md:flex-none" aria-label="Edney Fernandes">
            <EFLogo size={44} />
            <span className="font-body text-[.52rem] font-black tracking-[.28em] uppercase text-fg leading-none">
              Edney Fernandes
            </span>
            <span className="font-body text-[.42rem] font-bold tracking-[.26em] uppercase text-gold/80 leading-none">
              Acervo Musical
            </span>
          </Link>

          {/* Direita: sociais + toggle */}
          <div className="flex items-center gap-3 shrink-0 min-w-[110px] justify-end">
            <div className="hidden md:flex items-center gap-3">
              {[
                { href: 'https://www.instagram.com/edneyfernandesoficial', Icon: IgIcon, label: 'Instagram' },
                { href: 'https://www.youtube.com/watch?v=6BlIPv5Lhow&list=PLqnsR5NrdI1OFceJLGu40cO1JRLEkfcy0', Icon: YtIcon, label: 'YouTube' },
                { href: 'https://open.spotify.com/playlist/0X6y4zHggBO23TigmeDhWr', Icon: SpIcon, label: 'Spotify' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}
                  className="text-white/45 hover:text-gold transition-colors duration-200">
                  <Icon />
                </a>
              ))}
            </div>
            <button
              className="md:hidden w-9 h-9 border border-line bg-transparent
                flex flex-col items-center justify-center gap-[5px] cursor-pointer"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            >
              <span className={`block w-[18px] h-[1.5px] bg-fg transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-[6.5px]' : ''}`} />
              <span className={`block w-[18px] h-[1.5px] bg-fg transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-[18px] h-[1.5px] bg-fg transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-[6.5px]' : ''}`} />
            </button>
          </div>
        </div>

        {/* Faixa inferior: nav centralizado */}
        <nav className="hidden md:flex items-center justify-center border-t border-white/[.05] px-6">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`relative font-body text-[.7rem] font-bold tracking-[.18em] uppercase
                px-5 py-2.5 transition-colors duration-200 hover:text-gold group
                ${pathname === href ? 'text-gold' : 'text-white/65'}`}
            >
              {label}
              <span className={`absolute bottom-0 left-5 right-5 h-px bg-gold transition-all duration-300
                ${pathname === href ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`}
                style={{ transformOrigin: pathname === href ? 'left' : 'left' }}
              />
            </Link>
          ))}
        </nav>
      </header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: .22 }}
            className="fixed top-[calc(var(--header-h)+8px)] left-4 right-4 z-40
              bg-[rgba(8,8,8,.97)] backdrop-blur-xl border border-line
              p-6 flex flex-col gap-1 shadow-2xl"
          >
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`font-display text-[1.8rem] font-light italic py-3 border-b border-white/[.06]
                  transition-colors last:border-0
                  ${pathname === href ? 'text-gold' : 'text-white/85 hover:text-gold'}`}
              >
                {label}
              </Link>
            ))}
            <div className="flex gap-5 mt-5 pt-4 border-t border-white/[.06]">
              {[
                { href: 'https://www.instagram.com/edneyfernandesoficial', Icon: IgIcon, label: 'Instagram' },
                { href: 'https://www.youtube.com/watch?v=6BlIPv5Lhow', Icon: YtIcon, label: 'YouTube' },
                { href: 'https://open.spotify.com/playlist/0X6y4zHggBO23TigmeDhWr', Icon: SpIcon, label: 'Spotify' },
              ].map(({ href, Icon, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener" aria-label={label}
                  className="text-white/40 hover:text-gold transition-colors w-10 h-10 border border-white/10 flex items-center justify-center hover:border-gold">
                  <Icon />
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
