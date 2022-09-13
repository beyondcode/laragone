/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            //
            colors: {
                gray: colors.stone,
            },
            fontFamily: {
                nanum: ['Nanum Pen Script', ...defaultTheme.fontFamily.sans],
            },
            fontSize: {
                '4xs': '0.625rem',
                '3xs': '0.6875rem',
                '2xs': '0.625rem',
                xs: '0.75rem',
                sm: '0.875rem',
                base: '1rem',
                lg: '1.125rem',
                xl: '1.25rem',
                '2xl': '1.5rem',
                '3xl': '1.875rem',
                '4xl': '2.25rem',
                '5xl': '3rem',
                '6xl': '3.75rem',
                '7xl': '4.5rem',
                '8xl': '6rem',
                '9xl': '8rem',
            },
            lineHeight: {
                0: 0,
            },
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1280px',
                xxl: '1536px',
            },
        },
    },
    plugins: [
        function ({ addUtilities }) {
            addUtilities({
                '.inset-y': { bottom: '50%', transform: 'translateY(50%)' },
                '.inset-x': { right: '50%', transform: 'translateX(50%)' },
                '.text-shadow': { textShadow: '0 1px 0 rgb(0,0,0,.2)' },
            })
        },
    ],
}
