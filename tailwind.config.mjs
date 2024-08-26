/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--background) / <alpha-value>)',
        foreground: 'rgb(var(--foreground) / <alpha-value>)',
        dimmed: 'rgb(var(--dimmed) / <alpha-value>)',
        card: 'rgb(var(--border) / <alpha-value>)'
      }
    }
  },
  plugins: [require('tailwindcss-bg-patterns')]
};
