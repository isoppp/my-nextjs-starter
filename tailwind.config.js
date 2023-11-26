const plugin = require('tailwindcss/plugin')

// in use: extend: { margin: { ...addConfigByRem([100, 200]) } }
// const addConfigByRem = arr => {
//   return arr.reduce((acc, cur) => {
//     acc[cur] = `${cur * 0.25}rem`
//     return acc
//   }, {})
// }

const fallbackFonts = [
  'Inter',
  '"Helvetica Neue"',
  '"Hiragino Kaku Gothic ProN"',
  '"Hiragino Sans"',
  'Arial',
  'Meiryo',
  'sans-serif',
]

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: [...fallbackFonts],
    },
    extend: {
      colors: {
        primary: { base: '#12BBEB' },
        secondary: { base: '#EA8222' },
        tertiary: { base: '#A0DB24' },
        success: { base: '#59EC14' },
        warn: { base: '#EDCD27' },
        error: { base: '#EE5513' },
        text: '#333',
        gray: {
          bg: '#fafafa',
        },
      },
      minHeight: {
        '100dvh': '100dvh',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addBase, config }) {
      addBase({
        body: {
          fontFamily: config('theme.fontFamily.sans').join(', '),
          lineHeight: config('theme.lineHeight.base'),
          color: config('theme.colors.text'),
          '-webkit-font-smoothing': 'antialiased',
          '-moz-osx-font-smoothing': 'grayscale',
        },
      })
    }),
  ],
}
