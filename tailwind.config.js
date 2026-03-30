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
          950: '#0B132B',
          900: '#0b1f4a',
          800: '#192542',
          700: '#0f172b',
          600: '#0d1629',
          500: '#0e172b',
        },
        indigo: {
          950: '#0B132B',
          900: '#0b1f4a',
          800: '#0f172b',
          700: '#131d5c',
          600: '#0d1629',
        },
        violet: {
          900: '#192542',
          800: '#0f182c',
          700: '#1a2578',
        },
        gold: {
          50: '#f5e9cf',
          100: '#e0cfa9',
          200: '#e8dcc0',
          300: '#dcc9a8',
          400: '#c9a96e',
          500: '#c9a96e',
          600: '#e0cfa9',
          700: '#e8dcc0',
          glow: '#f5e9cf',
          warm: '#e0cfa9',
          deep: '#C9A96E',
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
        'cosmic-gradient': 'radial-gradient(ellipse at center, #0f172b 0%, #0b1f4a 40%, #0B132B 100%)',
        'gold-glow': 'radial-gradient(ellipse at center, rgba(201,169,110,0.3) 0%, transparent 70%)',
        'hero-gradient': 'linear-gradient(135deg, #0B132B 0%, #192542 40%, #0f182c 70%, #0B132B 100%)',
        'warm-gradient': 'linear-gradient(135deg, #f5e9cf 0%, #e0cfa9 30%, #c9a96e 60%, #e8dcc0 100%)',
        'sunset-gradient': 'linear-gradient(180deg, #f5e9cf 0%, #c9a96e 40%, #e0cfa9 100%)',
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
