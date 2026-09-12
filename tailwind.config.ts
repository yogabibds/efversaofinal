import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        bg: '#080808',
        fg: '#f8f6f1',
        muted: '#c8c1b5',
        gold: '#C9A84C',
        'gold-dim': 'rgba(201,168,76,0.15)',
        line: 'rgba(255,255,255,0.1)',
      },
      fontFamily: {
        display: ['var(--font-cormorant)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      container: {
        center: true,
        padding: { DEFAULT: '1.25rem', lg: '2rem' },
        screens: { xl: '1240px' },
      },
      backgroundImage: {
        'noise': "url('/assets/img/noise.png')",
      },
      animation: {
        'slow-float': 'slowFloat 8s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'lines': 'moveLines 24s linear infinite',
      },
      keyframes: {
        slowFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '1' },
        },
        moveLines: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-220px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
