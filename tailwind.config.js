/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#EAF4FF',
          100: '#D5E9FF',
          200: '#ABD3FF',
          300: '#7AB8FF',
          400: '#4795FF',
          500: '#2174F3',
          600: '#1565C0', // Primary Blue
          700: '#0F509E',
          800: '#104382',
          900: '#0B3B82', // Deep Medical Blue
          950: '#082554',
        },
        secondary: {
          50: '#E8F8F7', // Soft Teal
          100: '#C8EEEC',
          200: '#99E0DE',
          300: '#60CBC9',
          400: '#34AEAD',
          500: '#1E9291',
          600: '#0F8B8D', // Teal
          700: '#116466',
          800: '#125052',
          900: '#134244',
          950: '#082729',
        },
        accent: {
          500: '#F97316', // Warm Orange
        },
        background: {
          main: '#F8FAFC',
          section: '#FFFFFF',
          soft: '#F0F7FF',
        }
      },
      fontFamily: {
        sans: [
          'Inter',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'sans-serif'
        ],
      },
      keyframes: {
        'float-medical': {
          '0%, 100%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(1deg)' },
        },
        'scroll': {
          '0%': { transform: 'translateX(calc(-50% - 1rem))' },
          '100%': { transform: 'translateX(0)' },
        }
      },
      animation: {
        'float-medical': 'float-medical 5s ease-in-out infinite',
        'scroll': 'scroll 30s linear infinite',
      }
    },
  },
  plugins: [],
};
