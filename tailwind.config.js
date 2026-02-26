/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          950: '#050818',
          900: '#080c2a',
          800: '#0d1340',
          700: '#131d5c',
          600: '#1a2578',
          500: '#2233a0',
        },
        indigo: {
          950: '#0a0a2e',
          900: '#0f0f4a',
          800: '#151566',
          700: '#1c1c82',
          600: '#2323a0',
        },
        violet: {
          900: '#1a0a3a',
          800: '#2d1a5a',
          700: '#432a7a',
        },
        gold: {
          50: '#fffbf0',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          glow: '#f5c842',
          warm: '#e8a937',
          deep: '#c47c1a',
        },
        peach: {
          100: '#ffecd2',
          200: '#ffcba4',
          300: '#ffb07e',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Cormorant Garamond', 'serif'],
      },
      backgroundImage: {
        'cosmic-gradient': 'radial-gradient(ellipse at center, #1a1040 0%, #080c2a 40%, #050818 100%)',
        'gold-glow': 'radial-gradient(ellipse at center, rgba(245,200,66,0.3) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(135deg, #050818 0%, #0d1340 40%, #1a0a3a 70%, #050818 100%)',
        'warm-gradient': 'linear-gradient(135deg, #ffecd2 0%, #ffb07e 30%, #e8a937 60%, #c47c1a 100%)',
        'sunset-gradient': 'linear-gradient(180deg, #ff9a5c 0%, #f5c842 40%, #e8a937 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'twinkle': 'twinkle 3s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'slide-up': 'slide-up 0.8s ease-out forwards',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        twinkle: {
          '0%, 100%': { opacity: '0.2', transform: 'scale(1)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        'glow-pulse': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(245,200,66,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(245,200,66,0.6), 0 0 80px rgba(245,200,66,0.2)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'slide-up': {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      boxShadow: {
        'gold': '0 0 20px rgba(245,200,66,0.4)',
        'gold-lg': '0 0 40px rgba(245,200,66,0.5), 0 0 80px rgba(245,200,66,0.2)',
        'cosmic': '0 4px 30px rgba(8,12,42,0.8)',
        'glass': '0 8px 32px 0 rgba(8,12,42,0.37)',
      },
    },
  },
  plugins: [],
}
