/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts,scss}" // Escanea archivos Angular y SCSS
  ],
  theme: {
    extend: {
      // Puedes extender aquí tus colores, tipografías, etc.
      colors: {
        primary: '#4f46e5', // Ejemplo de color personalizado (azul Tailwind)
        secondary: '#9333ea', // Otro ejemplo (morado Tailwind)
      },
      fontFamily: {
        sans: ['Segoe UI', 'Helvetica', 'Arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
