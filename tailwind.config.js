/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.5s ease-in-out',
        'slideUp': 'slideUp 0.6s ease-out',
        'slideDown': 'slideDown 0.6s ease-out',
        'scaleIn': 'scaleIn 0.5s ease-out',
        'scroll': 'scroll 30s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 10s ease-in-out infinite',
        'float-particle': 'float-particle 8s ease-in-out infinite',
        'float-orbit': 'float-orbit 4s ease-in-out infinite',
        'float-orbit-reverse': 'float-orbit-reverse 5s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'spin-reverse-slow': 'spin-reverse 25s linear infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'glow-strong': 'glow-strong 2s ease-in-out infinite alternate',
        'slide-in-left': 'slide-in-left 0.8s ease-out',
        'slide-in-right': 'slide-in-right 0.8s ease-out',
        'sparkle': 'sparkle 0.6s ease-out',
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
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.333%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '33%': { transform: 'translateY(-20px) translateX(10px)' },
          '66%': { transform: 'translateY(10px) translateX(-10px)' },
        },
        'float-particle': {
          '0%': { transform: 'translateY(0px) translateX(0px) scale(1)', opacity: '0.7' },
          '50%': { transform: 'translateY(-30px) translateX(15px) scale(1.2)', opacity: '1' },
          '100%': { transform: 'translateY(-60px) translateX(0px) scale(1)', opacity: '0.3' },
        },
        'float-orbit': {
          '0%': { transform: 'rotate(0deg) translateX(40px) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(40px) rotate(-360deg)' },
        },
        'float-orbit-reverse': {
          '0%': { transform: 'rotate(360deg) translateX(50px) rotate(-360deg)' },
          '100%': { transform: 'rotate(0deg) translateX(50px) rotate(0deg)' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'spin-reverse': {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0deg)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.5), 0 0 10px rgba(6, 182, 212, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.8), 0 0 30px rgba(6, 182, 212, 0.5)' },
        },
        'glow-strong': {
          '0%': { boxShadow: '0 0 10px rgba(168, 85, 247, 0.6), 0 0 20px rgba(168, 85, 247, 0.4)' },
          '100%': { boxShadow: '0 0 30px rgba(168, 85, 247, 1), 0 0 50px rgba(168, 85, 247, 0.6)' },
        },
        'slide-in-left': {
          '0%': { transform: 'translateX(-100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
