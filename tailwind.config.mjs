/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Palette FODI Group
        primary: '#1E40AF',    // Noir (logo)
        secondary: '#FFFFFF',  // Blanc
        accent: '#DC2626',     // Rouge vif boutons/liens
        dark: '#1F2937',       // Gris foncé (textes)
        light: '#F3F4F6',      // Gris clair (arreire-plan)
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      screens: {
        'xs': '375px',    // Très petits téléphones
        'sm': '640px',    // Téléphones
        'md': '768px',    // Tablettes
        'lg': '1024px',   // Laptops
        'xl': '1280px',   // Desktops
        '2xl': '1536px',  // Grands écrans
      },
    },
  },
  plugins: [],
}