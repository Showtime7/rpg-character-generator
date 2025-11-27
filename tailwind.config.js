/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                fantasy: {
                    bg: '#050510',
                    primary: '#3b82f6',
                    accent: '#e2e8f0',
                    text: '#f8fafc',
                    dark: '#0f172a',
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
