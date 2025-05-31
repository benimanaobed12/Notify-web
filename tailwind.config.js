/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e6eeff',
          100: '#b3cfff',
          200: '#80b0ff',
          300: '#4d91ff',
          400: '#1a72ff', 
          500: '#2561d9', // primary blue // primary blue
          600: '#0b4199',
          700: '#083177',
          800: '#052055',
          900: '#021033',
        },
        secondary: {
          50: '#fff2ec',
          100: '#ffd9c6',
          200: '#ffc1a0',
          300: '#ffa87a',
          400: '#ff8f54',
          500: '#FF6B35', // secondary orange
          600: '#cc562a',
          700: '#994020',
          800: '#662b15',
          900: '#33150a',
        },
        accent: {
          50: '#edf9ed',
          100: '#ceeece',
          200: '#aee3ae',
          300: '#8ed88e',
          400: '#6ecd6e',
          500: '#4CB944', // accent green
          600: '#3d9436',
          700: '#2e7029',
          800: '#1e4b1b',
          900: '#0f250e',
        },
        success: {
          500: '#22c55e',
        },
        warning: {
          500: '#f59e0b',
        },
        error: {
          500: '#ef4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        '1': '0.25rem', // 4px
        '2': '0.5rem',  // 8px
        '3': '0.75rem', // 12px
        '4': '1rem',    // 16px
        '5': '1.25rem', // 20px
        '6': '1.5rem',  // 24px
        '8': '2rem',    // 32px
        '10': '2.5rem', // 40px
        '12': '3rem',   // 48px
        '16': '4rem',   // 64px
        '20': '5rem',   // 80px
        '24': '6rem',   // 96px
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}