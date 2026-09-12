import type { Metadata } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Edney Fernandes: Compositor, Cantor e Intérprete Brasileiro',
    template: '%s · Edney Fernandes'
  },
  description: 'Acervo artístico oficial de Edney Fernandes, compositor, cantor, percussionista e intérprete do pagode paulista, samba-rock e soul brasileiro. Mais de 20 milhões de streams. Obras registradas em Warner Chappell, Sony Music Publishing, ABRAMUS e ECAD.',
  keywords: [
    'Edney Fernandes', 'compositor pagode', 'pagode paulista', 'samba paulista',
    'samba-rock', 'soul brasileiro', 'Ed e A Tripulação', 'A Hora É Essa',
    'No Fundo dos Meus Olhos', 'Péricles', 'Thiaguinho', 'Exaltasamba',
    'legado musical', 'acervo musical', 'patrimônio cultural', 'Laiá Music',
    'Warner Chappell', 'Sony Music Publishing', 'ABRAMUS', 'ECAD',
    'compositor brasileiro', 'pagode anos 90', 'samba contemporâneo'
  ],
  metadataBase: new URL('https://edneyfernandes.com'),
  alternates: {
    canonical: 'https://edneyfernandes.com',
  },
  openGraph: {
    siteName: 'Edney Fernandes · Acervo Musical Oficial',
    locale: 'pt_BR',
    type: 'website',
    title: 'Edney Fernandes: Compositor, Cantor e Intérprete Brasileiro',
    description: 'Acervo artístico oficial de Edney Fernandes, mais de 20 milhões de streams, obras em Warner Chappell, Sony Music Publishing e ABRAMUS.',
    images: [
      {
        url: '/assets/img/memorial/edney-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Edney Fernandes: Compositor e Cantor Brasileiro',
      }
    ],
    url: 'https://edneyfernandes.com',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Edney Fernandes: Compositor, Cantor e Intérprete Brasileiro',
    description: 'Acervo artístico oficial de Edney Fernandes, pagode paulista, samba-rock e soul brasileiro.',
    images: ['/assets/img/memorial/edney-hero.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://open.spotify.com" />
        <meta name="theme-color" content="#080808" />
      </head>
      <body>
        <div className="noise" aria-hidden="true" />
        {children}
      </body>
    </html>
  )
}
