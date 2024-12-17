/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#7DB0AD',
        secondary: '#5B8786',
        tertiary: '#938A7C',
        golden: '#E2DBD0',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
});
