/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
      "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          'primary-green': 'rgb(68, 189, 50)',
          'secondary-green': 'rgb(39, 174, 96)',
          'accent-green': 'rgb(85, 239, 196)',
          'dark-green': 'rgb(0, 148, 50)',
          'wood-brown': 'rgb(131, 101, 57)',
          'stone-gray': 'rgb(189, 195, 199)',
          'dark-blue': 'rgb(41, 50, 65)',
          'deep-blue': 'rgb(26, 32, 44)',
        },
      },
    },
    plugins: [],
  }