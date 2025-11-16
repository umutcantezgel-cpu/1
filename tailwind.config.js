/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        brand: {
          gold: {
            50: '#fffbea',
            100: '#fef0c3',
            200: '#fde08f',
            300: '#f9cd57',
            400: '#f7bd32',
            500: '#F4B920',
            600: '#d89c11',
            700: '#b1790c',
            800: '#8a5a0c',
            900: '#5f3c08',
          },
          navy: {
            50: '#f5f7fb',
            100: '#e6e8f1',
            200: '#c3c8d8',
            300: '#9ea5bc',
            400: '#68718e',
            500: '#414a67',
            600: '#2f354d',
            700: '#242a3f',
            800: '#1d2234',
            900: '#1a1f2e',
            950: '#0d101a',
          },
          brown: {
            50: '#f9f3ed',
            100: '#efdfd0',
            200: '#e0c1a1',
            300: '#d1a273',
            400: '#c2884f',
            500: '#9B6F47',
            600: '#82593a',
            700: '#68442d',
            800: '#4f3121',
            900: '#311f13',
          },
          cream: '#fffdf6',
          sand: '#f7f1e7',
        },
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '100': '25rem',
        '128': '32rem',
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.02em' }],
        'sm': ['0.875rem', { lineHeight: '1.3rem' }],
        'base': ['1rem', { lineHeight: '1.6rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.85rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'],
      },
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1s infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'slide-up': 'slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-left': 'slideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-right': 'slideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in': 'fadeIn 0.5s ease-out',
        'shimmer': 'shimmer 2.5s linear infinite',
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': { boxShadow: '0 0 20px rgba(244, 185, 32, 0.35), 0 0 40px rgba(244, 185, 32, 0.2)' },
          'to': { boxShadow: '0 0 32px rgba(244, 185, 32, 0.55), 0 0 60px rgba(244, 185, 32, 0.25)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(244, 185, 32, 0.35)' },
          '50%': { boxShadow: '0 0 40px rgba(244, 185, 32, 0.6), 0 0 60px rgba(244, 185, 32, 0.35)' },
        },
        slideUp: {
          'from': { transform: 'translateY(40px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          'from': { transform: 'translateY(-40px)', opacity: '0' },
          'to': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          'from': { transform: 'translateX(40px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          'from': { transform: 'translateX(-40px)', opacity: '0' },
          'to': { transform: 'translateX(0)', opacity: '1' },
        },
        scaleIn: {
          'from': { transform: 'scale(0.9)', opacity: '0' },
          'to': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          'from': { opacity: '0' },
          'to': { opacity: '1' },
        },
        shimmer: {
          'from': { backgroundPosition: '200% center' },
          'to': { backgroundPosition: '-200% center' },
        },
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(10, 12, 20, 0.2), inset 0 1px 0 0 rgba(255, 255, 255, 0.08)',
        'glass-lg': '0 12px 48px 0 rgba(10, 12, 20, 0.25), inset 0 2px 0 0 rgba(255, 255, 255, 0.1)',
        'glass-xl': '0 16px 60px 0 rgba(10, 12, 20, 0.3), inset 0 2px 0 0 rgba(255, 255, 255, 0.15)',
        'glow-gold': '0 0 22px rgba(244, 185, 32, 0.5)',
        'elevated': '0 24px 80px -20px rgba(15, 18, 30, 0.45)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    function({ addComponents, theme }) {
      addComponents({
        '.glass-card': {
          backgroundColor: 'rgba(26, 31, 46, 0.65)',
          backdropFilter: 'blur(18px)',
          WebkitBackdropFilter: 'blur(18px)',
          borderWidth: '1px',
          borderColor: 'rgba(255, 255, 255, 0.15)',
          boxShadow: theme('boxShadow.glass'),
        },
        '.glass-card-md': {
          backgroundColor: 'rgba(33, 42, 64, 0.75)',
          backdropFilter: 'blur(22px)',
          WebkitBackdropFilter: 'blur(22px)',
          borderWidth: '1px',
          borderColor: 'rgba(255, 255, 255, 0.18)',
          boxShadow: theme('boxShadow.glass-lg'),
        },
        '.glass-card-lg': {
          backgroundColor: 'rgba(33, 42, 64, 0.85)',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          borderWidth: '1px',
          borderColor: 'rgba(255, 255, 255, 0.25)',
          boxShadow: theme('boxShadow.glass-xl'),
        },
        '.bg-gradient-primary': {
          backgroundImage: 'linear-gradient(135deg, #F4B920 0%, #d89c11 100%)',
        },
        '.bg-gradient-secondary': {
          backgroundImage: 'linear-gradient(135deg, #1a1f2e 0%, #2f354d 100%)',
        },
        '.bg-gradient-hero': {
          backgroundImage: 'linear-gradient(135deg, rgba(10, 12, 20, 0.95) 0%, rgba(33, 42, 64, 0.92) 40%, rgba(155, 111, 71, 0.85) 100%)',
        },
        '.text-gradient-gold': {
          backgroundImage: 'linear-gradient(135deg, #fceab2 0%, #F4B920 40%, #d89c11 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        },
        '.shimmer': {
          backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2.5s linear infinite',
        },
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0, 0, 0, 0)',
          whiteSpace: 'nowrap',
          borderWidth: '0',
        },
        '.focus-ring': {
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: theme('colors.brand.gold.500'),
            outlineOffset: '2px',
            borderRadius: theme('borderRadius.lg'),
          },
        },
      })
    },
  ],
}
