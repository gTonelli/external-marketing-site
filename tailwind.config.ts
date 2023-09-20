import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'blog-hero': "url('/img/blog-hero-2.jpg')",
      },
      colors: {
        // primaries
        primary: '#8A50A0',
        'primary-light': '#D5B8D8',

        green: '#71C2C1',
        'green-light': '#E3EDED',

        'grey-primary': '#ECECEC',
        'grey-secondary': '#888A95',
      },
      gridTemplateColumns: {
        blog: '800px 300px',
      },
      screens: {
        // default: 320px
        xxs: '375px',
        xs: '425px',
        laptop: '1440px',
        '2xl': '1600px',
        '3xl': '1920px',
      },
      letterSpacing: {
        33: '5px',
        10: '2px',
      },
    },
  },
  plugins: [],
}
export default config
