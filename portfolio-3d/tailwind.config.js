/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0ea5e9',
                    dark: '#0284c7',
                    light: '#38bdf8',
                },
                secondary: {
                    DEFAULT: '#8b5cf6',
                    dark: '#7c3aed',
                    light: '#a78bfa',
                },
                accent: {
                    cyan: '#06b6d4',
                    blue: '#3b82f6',
                    purple: '#a855f7',
                },
                dark: {
                    bg: '#0a0e1a',
                    secondary: '#111827',
                    card: '#1a1f35',
                    border: '#334155',
                },
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'glow': 'glow 2s ease-in-out infinite alternate',
                'slide-up': 'slideUp 0.5s ease-out',
                'fade-in': 'fadeIn 0.6s ease-out',
                'gradient-shift': 'gradient-shift 3s ease infinite',
                'border-flow': 'border-flow 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                glow: {
                    '0%': { boxShadow: '0 0 5px #0ea5e9, 0 0 10px #0ea5e9' },
                    '100%': { boxShadow: '0 0 10px #0ea5e9, 0 0 20px #0ea5e9, 0 0 30px #0ea5e9' },
                },
                slideUp: {
                    '0%': { transform: 'translateY(100px)', opacity: '0' },
                    '100%': { transform: 'translateY(0)', opacity: '1' },
                },
                fadeIn: {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' },
                },
                'gradient-shift': {
                    '0%, 100%': { backgroundPosition: '0% 50%' },
                    '50%': { backgroundPosition: '100% 50%' },
                },
                'border-flow': {
                    '0%, 100%': { borderColor: 'rgba(6, 182, 212, 0.3)' },
                    '50%': { borderColor: 'rgba(59, 130, 246, 0.5)' },
                },
            },
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            backdropBlur: {
                xs: '2px',
            },
        },
    },
    plugins: [],
}
