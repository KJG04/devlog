// eslint-disable-next-line @typescript-eslint/no-var-requires
const { nextui } = require('@nextui-org/theme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/components/(breadcrumbs|button|card|chip|image|link|navbar|scroll-shadow|snippet|spacer|tabs|popover|ripple|spinner).js',
  ],
  plugins: [nextui({ defaultTheme: 'dark' })],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        pretendard: ['var(--font-pretendard)'],
      },
    },
  },
}
