/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    // Asegúrate de incluir la carpeta donde Jules puso los componentes
  ],
  theme: {
    extend: {
      colors: {
        // Aquí puedes definir los colores "tech" de tu diseño de Figma
        'tech-blue': '#00d4ff', 
        'dark-slate': '#121212',
      },
    },
  },
  plugins: [],
}