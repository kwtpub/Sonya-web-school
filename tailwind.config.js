/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#FF6B35',
          50: '#FFF8F3',
          100: '#FFE2D1',
          200: '#FFB994',
          300: '#FF8A3D',
          500: '#FF6B35',
          600: '#FF3D00',
          700: '#B23E0F',
        },
        ink: {
          DEFAULT: '#101828',
          900: '#0A0F1F',
          700: '#1A1A2E',
          500: '#475467',
          300: '#94A3B8',
          100: '#F5F7FA',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      maxWidth: {
        container: '1280px',
      },
      boxShadow: {
        soft: '0 18px 40px -16px rgba(255, 107, 53, 0.35)',
        card: '0 12px 32px -12px rgba(16, 24, 40, 0.12)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-fast': 'float 5s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
};
