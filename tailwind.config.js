/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
        slide: {
          from: {
            transform: 'translateX(0)',
          },
          to: {
            transform: 'translateX(-100%)',
          },
        },
        // Ici je peux ajouter d'autre keyframe pour animation
      },
      animation: {
        slide: 'slide 40s infinite linear', 
      },
    },
  },
  plugins: [],
}
