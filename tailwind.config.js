/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        boogaloo: ['Boogaloo', 'cursive'],
        fredoka: ['Fredoka One', 'cursive'],
        nunito: ['Nunito', 'sans-serif'],
        baloo: ['Baloo 2', 'cursive'],
      },
      colors: {
        kidYellow: '#FFD93D',
        kidOrange: '#FF6B35',
        kidPink: '#FF4EA1',
        kidPurple: '#7C3AED',
        kidBlue: '#3B82F6',
        kidGreen: '#22C55E',
        kidRed: '#EF4444',
        kidTeal: '#06B6D4',
      },
      animation: {
        'bounce-slow': 'bounce 3s infinite',
        'spin-slow': 'spin 8s linear infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'float2': 'float2 4s ease-in-out infinite',
        'pulse-scale': 'pulseScale 2s ease-in-out infinite',
        'slide-in-left': 'slideInLeft 0.6s ease-out',
        'slide-in-right': 'slideInRight 0.6s ease-out',
        'fade-in-up': 'fadeInUp 0.7s ease-out',
        'marquee': 'marquee 20s linear infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-5deg)' },
          '50%': { transform: 'rotate(5deg)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        float2: {
          '0%, 100%': { transform: 'translateY(0px) rotate(5deg)' },
          '50%': { transform: 'translateY(-15px) rotate(-5deg)' },
        },
        pulseScale: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.08)' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideInRight: {
          '0%': { transform: 'translateX(100px)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        fadeInUp: {
          '0%': { transform: 'translateY(40px)', opacity: 0 },
          '100%': { transform: 'translateY(0)', opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
