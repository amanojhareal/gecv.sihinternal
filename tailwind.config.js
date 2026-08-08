/** @type {import('tailwindcss').Config} */
export default {
  content: [   
     "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#1a3a8f", dark: "#142f57" },
        accent: { DEFAULT: "#ff6a00", light: "#ff8c3d" },
        ink: { DEFAULT: "#0F172A", muted: "#64748B" },
      },
      fontFamily: { sans: ["Inter", "sans-serif"] },
      boxShadow: { premium: "0 8px 30px -12px rgba(15,23,42,0.18)" },
    }},
  plugins: [],
}

