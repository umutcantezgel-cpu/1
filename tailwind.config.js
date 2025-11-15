/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      // ========================================
      // DESIGN TOKENS - Single Source of Truth
      // ========================================
      colors: {
        brand: {
          // Orange Palette (Primary)
          orange: {
            50: '#fff7ed',
            100: '#ffedd5',
            200: '#fed7aa',
            300: '#fdba74',
            400: '#fb923c',
            500: '#ff6b35', // Primary Brand Color
            600: '#f15a24',
            700: '#d94d1a',
            800: '#c44217',
            900: '#9a3412',
          },
          // Blue Palette (Secondary)
          blue: {
            50: '#eff6ff',
            100: '#dbeafe',
            200: '#bfdbfe',
            300: '#93c5fd',
            400: '#60a5fa',
            500: '#3b82f6',
            600: '#2563eb',
            700: '#1d4ed8',
            800: '#1e40af',
            900: '#1e3a8a', // Primary Dark
            950: '#0f172a',
          },
          // Purple Palette (Accent)
          purple: {
            500: '#8b5cf6',
            600: '#7c3aed',
            700: '#6d28d9',
            900: '#581c87',
          },
        },
      },

      // ========================================
      // SPACING SYSTEM (4px base grid)
      // ========================================
      spacing: {
        '18': '4.5rem',   // 72px
        '88': '22rem',    // 352px
        '100': '25rem',   // 400px
        '128': '32rem',   // 512px
      },

      // ========================================
      // TYPOGRAPHY SCALE mit optimierten Line Heights
      // ========================================
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem', letterSpacing: '0.05em' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem', letterSpacing: '-0.02em' }],
        '5xl': ['3rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        '8xl': ['6rem', { lineHeight: '1', letterSpacing: '-0.04em' }],
      },

      // ========================================
      // FONT FAMILIES
      // ========================================
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
      },

      // ========================================
      // BACKDROP BLUR (für Glassmorphism)
      // ========================================
      backdropBlur: {
        xs: '2px',
        '3xl': '64px',
      },

      // ========================================
      // ANIMATION SYSTEM
      // ========================================
      animation: {
        // Floating animations
        'float': 'float 6s ease-in-out infinite',
        'float-delayed': 'float 6s ease-in-out 1s infinite',

        // Glow effects
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',

        // Entrance animations
        'slide-up': 'slideUp 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-down': 'slideDown 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-left': 'slideLeft 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'slide-right': 'slideRight 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'scale-in': 'scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)',
        'fade-in': 'fadeIn 0.5s ease-out',

        // Shimmer effect
        'shimmer': 'shimmer 2.5s linear infinite',

        // Slow animations
        'spin-slow': 'spin 8s linear infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',

        // Bounce variations
        'bounce-slow': 'bounce 2s infinite',
      },

      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          'from': {
            boxShadow: '0 0 20px rgba(255, 107, 53, 0.5), 0 0 40px rgba(255, 107, 53, 0.3)'
          },
          'to': {
            boxShadow: '0 0 30px rgba(255, 107, 53, 0.8), 0 0 60px rgba(255, 107, 53, 0.5)'
          },
        },
        glowPulse: {
          '0%, 100%': {
            boxShadow: '0 0 20px rgba(255, 107, 53, 0.4)'
          },
          '50%': {
            boxShadow: '0 0 40px rgba(255, 107, 53, 0.8), 0 0 60px rgba(255, 107, 53, 0.4)'
          },
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

      // ========================================
      // BOX SHADOWS (inkl. Glassmorphism)
      // ========================================
      boxShadow: {
        // Glassmorphism Shadows
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.1)',
        'glass-lg': '0 8px 32px 0 rgba(31, 38, 135, 0.25), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)',
        'glass-xl': '0 12px 48px 0 rgba(31, 38, 135, 0.35), inset 0 2px 0 0 rgba(255, 255, 255, 0.2)',

        // Glow Shadows
        'glow-orange': '0 0 20px rgba(255, 107, 53, 0.5)',
        'glow-orange-lg': '0 0 30px rgba(255, 107, 53, 0.6), 0 0 60px rgba(255, 107, 53, 0.3)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.5)',

        // Elevated Shadows
        'elevated': '0 20px 60px -15px rgba(0, 0, 0, 0.3)',
        'elevated-lg': '0 25px 80px -20px rgba(0, 0, 0, 0.4)',
      },

      // ========================================
      // BORDER RADIUS
      // ========================================
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },

      // ========================================
      // Z-INDEX SYSTEM
      // ========================================
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },

      // ========================================
      // TRANSITIONS
      // ========================================
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),

    // ========================================
    // CUSTOM PLUGIN für wiederverwendbare Komponenten
    // ========================================
    function({ addComponents, theme }) {
      addComponents({
        // GLASSMORPHISM CARDS
        '.glass-card': {
          backgroundColor: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderWidth: '1px',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          boxShadow: theme('boxShadow.glass'),
        },
        '.glass-card-md': {
          backgroundColor: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          borderWidth: '1px',
          borderColor: 'rgba(255, 255, 255, 0.3)',
          boxShadow: theme('boxShadow.glass-lg'),
        },
        '.glass-card-lg': {
          backgroundColor: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(32px)',
          WebkitBackdropFilter: 'blur(32px)',
          borderWidth: '1px',
          borderColor: 'rgba(255, 255, 255, 0.4)',
          boxShadow: theme('boxShadow.glass-xl'),
        },

        // GRADIENT BACKGROUNDS
        '.bg-gradient-primary': {
          backgroundImage: 'linear-gradient(135deg, #ff6b35 0%, #f15a24 100%)',
        },
        '.bg-gradient-secondary': {
          backgroundImage: 'linear-gradient(135deg, #1e40af 0%, #1e3a8a 100%)',
        },
        '.bg-gradient-hero': {
          backgroundImage: 'linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(67, 56, 202, 0.9) 50%, rgba(139, 92, 246, 0.95) 100%)',
        },

        // TEXT GRADIENTS
        '.text-gradient-orange': {
          backgroundImage: 'linear-gradient(135deg, #ff6b35 0%, #f15a24 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        },
        '.text-gradient-blue': {
          backgroundImage: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: 'transparent',
        },

        // SHIMMER EFFECT
        '.shimmer': {
          backgroundImage: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 2.5s linear infinite',
        },

        // SCREEN READER ONLY
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

        // FOCUS VISIBLE STYLES (Accessibility)
        '.focus-ring': {
          '&:focus-visible': {
            outline: '2px solid',
            outlineColor: theme('colors.brand.orange.500'),
            outlineOffset: '2px',
            borderRadius: theme('borderRadius.lg'),
          },
        },
      })
    },
  ],
}
