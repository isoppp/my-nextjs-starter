const plugin = require('tailwindcss/plugin')

// in use: extend: { margin: { ...addConfigByRem([100, 200]) } }
// const addConfigByRem = arr => {
//   return arr.reduce((acc, cur) => {
//     acc[cur] = `${cur * 0.25}rem`
//     return acc
//   }, {})
// }

module.exports = {
  mode: 'jit',
  content: ['./public/**/*.html', './src/**/*.{ts,tsx}'],
  theme: {
    fontFamily: {
      // Japanese setting
      sans: ['"Helvetica Neue"', 'Arial', 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', 'Meiryo', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: '#10DE8F',
        text: '#222',
      },
      spacing: {
        full: '100%',
      },
      opacity: {
        85: '.85',
      },
      lineHeight: {
        base: '1.6',
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
    require('tailwind-css-variables')(
      {
        colors: 'color',
        screens: 'screen', // 'screen',
        fontFamily: 'font', // 'font',
        fontSize: false, // 'text',
        fontWeight: false, // 'font',
        lineHeight: false, // 'leading',
        letterSpacing: false, // 'tracking',
        backgroundSize: false, // 'bg',
        borderWidth: false, // 'border',
        borderRadius: false, // 'rounded',
        width: false, // 'w',
        height: false, // 'h',
        minWidth: false, // 'min-w',
        minHeight: false, // 'min-h',
        maxWidth: false, // 'max-w',
        maxHeight: false, // 'max-h',
        padding: false, // 'p',
        margin: false, // 'm',
        boxShadow: 'shadow', // 'shadows',
        zIndex: false, // 'z',
        opacity: false, // 'opacity',
      },
      {
        // options
      },
    ),
    require('@tailwindcss/custom-forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
