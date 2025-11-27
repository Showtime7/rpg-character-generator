/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                medieval: {
                    parchment: '#f4e4bc',
                    brown: '#2c1810',
                    gold: '#d4af37',
                    crimson: '#8a0303',
                }
            },
            fontFamily: {
                serif: ['"Cinzel"', 'serif'],
                sans: ['"Lato"', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
