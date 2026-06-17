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
                    DEFAULT: '#7c3aed',
                    dark: '#6d28d9',
                    light: '#8b5cf6',
                },
                secondary: {
                    DEFAULT: '#ea580c',
                    dark: '#c2410c',
                    light: '#f97316',
                },
                accent: {
                    cyan: '#7c3aed',    // deep violet — primary
                    blue: '#ea580c',    // deep orange — secondary
                    purple: '#059669',  // deep emerald — tertiary
                },
                dark: {
                    bg: '#faf9ff',          // near-white with lavender tint
                    secondary: '#f0ebff',   // soft lavender
                    card: '#ffffff',        // pure white cards
                    border: '#e4d9ff',      // light violet border
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
                    '0%': { boxShadow: '0 0 5px rgba(124,58,237,0.3), 0 0 10px rgba(124,58,237,0.2)' },
                    '100%': { boxShadow: '0 0 15px rgba(124,58,237,0.5), 0 0 30px rgba(124,58,237,0.3)' },
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
                    '0%, 100%': { borderColor: 'rgba(124, 58, 237, 0.4)' },
                    '50%': { borderColor: 'rgba(234, 88, 12, 0.5)' },
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
