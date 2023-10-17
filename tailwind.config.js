// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require('@nextui-org/react');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            html: '#F4F4F5',
            navbar: 'hsl(240 100% 97.8% / 0.6)',
          },
        },
        dark: {
          colors: {
            html: '#18181B',
            navbar: 'hsl(240 5.9% 10% / 0.6)',
          },
        },
      },
    }),
  ],
  darkMode: 'class',
};
