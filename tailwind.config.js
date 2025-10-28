/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Logo-driven color palette
        'wc-primary-deep': '#0F3255',
        'wc-primary-teal': '#08A6A8',
        'wc-warm-gold': '#D8B66A',
        'wc-slate': '#4C545C',
        'wc-paper': '#F6F5F2',
        'wc-charcoal': '#111214',
        'wc-muted': '#8A8F93',
        'wc-white': '#FFFFFF',
        'wc-cta-hover': '#077E7F',
        
        // Legacy aliases for backwards compatibility
        'paper': '#F6F5F2',
        'deep-indigo': '#0F3255',
        'terracotta': '#08A6A8',
        'ochre': '#D8B66A',
        'muted-olive': '#4C545C',
        'charcoal': '#111214'
      },
       fontFamily: {
        sans: ['Epilogue'], // ✅ make Epilogue default
        epilogue: ['Epilogue'],
      },
      
      fontSize: {
        'xs': ['13px', '1.4'],
        'sm': ['14px', '1.5'],
        'base': ['16px', '1.6'],
        'lg': ['18px', '1.6'],
        'xl': ['20px', '1.5'],
        '2xl': ['24px', '1.4'],
        '3xl': ['30px', '1.3'],
        '4xl': ['36px', '1.2'],
        '5xl': ['48px', '1.1'],
        '6xl': ['60px', '1.0'],
        '7xl': ['72px', '1.0'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      animation: {
        'bounce-slow': 'bounce 2s infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        '120': '120ms',
        '180': '180ms',
        '300': '300ms',
        '380': '380ms',
        '560': '560ms',
        '700': '700ms',
        '900': '900ms',
      },
      transitionTimingFunction: {
        'ease-out-cubic': 'cubic-bezier(0.22, 0.9, 0.32, 1)',
      },
      boxShadow: {
        'soft': '0 2px 15px -3px rgba(0, 0, 0, 0.08), 0 10px 20px -2px rgba(0, 0, 0, 0.04)',
        'medium': '0 4px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'large': '0 10px 40px -10px rgba(0, 0, 0, 0.15), 0 2px 10px -2px rgba(0, 0, 0, 0.04)',
      },
      backdropBlur: {
        xs: '2px',
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};
