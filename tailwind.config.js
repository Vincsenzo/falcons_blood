/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'falcon-red': '#8B0000',
                'falcon-gold': '#D4AF37',
                'falcon-dark': '#1a1a1a',
                'falcon-grey': '#2d2d2d',
            },
            fontFamily: {
                'serif': ['Cinzel', 'serif'],
                'sans': ['Inter', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
