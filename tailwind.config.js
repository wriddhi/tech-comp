/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': 'var(--font-inter)',
        'jost': 'var(--font-jost)',
        'chivo': 'var(--font-chivo-mono)',
        'bruno': 'var(--font-bruno-ace-sc)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
