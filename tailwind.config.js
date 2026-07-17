/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        void: '#0B0F14',
        panel: '#121821',
        panel2: '#161E29',
        line: '#233042',
        signal: '#4CC9F0',
        violet: '#9D7BFF',
        mint: '#59D9A6',
        ink: '#E7EDF3',
        muted: '#8895A7',
        // light mode
        paper: '#F5F7FA',
        paperPanel: '#FFFFFF',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse at top, rgba(76,201,240,0.12), transparent 60%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(0,0,0,0.35)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        pulseline: {
          '0%': { strokeDashoffset: '1000' },
          '100%': { strokeDashoffset: '0' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease forwards',
      },
    },
  },
  plugins: [],
}
