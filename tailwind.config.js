/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#F43F5E'
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                display: ['Poppins', 'Inter', 'sans-serif']
            },
            keyframes: {
                'flip': {
                    '0%': { transform: 'rotateY(0deg)' },
                    '100%': { transform: 'rotateY(180deg)' }
                }
            },
            animation: {
                'flip': 'flip 0.7s ease-in-out'
            }
        }
    }
};
