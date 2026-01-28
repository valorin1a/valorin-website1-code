import type { Config } from "tailwindcss";

export default {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    black: '#000000',
                    white: '#FFFFFF',
                    gray: '#F5F5F5',
                    darkgray: '#333333',
                },
                accent: {
                    gold: '#D4AF37',
                    rosegold: '#E0BFB8',
                },
            },
        },
    },
    plugins: [],
} satisfies Config;
