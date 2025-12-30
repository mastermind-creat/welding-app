/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                steel: {
                    900: "#0f1418",
                    800: "#141a20",
                    700: "#1b242c",
                    600: "#25323c",
                    500: "#2f3f4a",
                    400: "#55626e",
                    300: "#7b8892",
                    200: "#a2adb6",
                    100: "#c9d1d8",
                },
                flame: {
                    500: "#ff6a00",
                    400: "#ff8533",
                    300: "#ffa366",
                },
            },
            boxShadow: {
                glow: "0 0 28px rgba(255,106,0,0.35)",
            },
            fontFamily: {
                display: ["Poppins", "ui-sans-serif", "system-ui", "sans-serif"],
                body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
            },
            animation: {
                'bounce-slow': 'bounce 3s linear infinite',
            }
        },
    },
    plugins: [],
}
