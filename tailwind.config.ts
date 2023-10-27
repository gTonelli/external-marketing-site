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
        'blog-hero': "url('/images/blog-hero-2.jpg')",
      },
      borderRadius: {
        '4xl': '2rem',
        10: '0.625rem', // 10px
        20: '1.25rem', // 20px
      },
      colors: {
        // primaries
        primary: '#8A50A0',
        'primary-old': '#a67cb7',
        'primary-light': '#D5B8D8',
        'primary-light-50': '#D5B8D880',
        'primary-light-25': '#D5B8D840',
        'primary-light-2': '#ECDEED',
        'primary-light-3': '#B88AC4',
        'primary-light-4': '#E4DFE5',

        black: '#252334',
        'black-secondary': '#21202D',
        'blue-tertiary': '#008BDC',
        'black-transparent': 'rgba(0, 0, 0, 0.6)',

        blue: '#85bbca',
        'blue-light': '#c3d7db',
        'blue-lightest': '#e3eded',
        'blue-lightest-50': '#e3eded80',
        'blue-dashboard': '#F7F7FE',
        'blue-darkest': '#142BD5',

        green: '#71C2C1',
        'green-light': '#E3EDED',

        // secondaries
        'black-light': '#2C3E42',
        grey: '#888a95',
        'grey-2': '#B4B4B4',
        'grey-3': '#EEECED',
        'grey-4': '#ECEAEB',
        'grey-5': '#7D7B84',
        'grey-6': '#9D9D9D',
        'gray-light': '#F5F4FB',
        'gray-lightest': '#F5F5F5',
        'gray-dark': '#BFBFBF',
        'gray-bg-primary': '#D9D9D9',
        'grey-20': 'rgba(136, 138, 149, 0.2)', // same as above but  with 20% opacity
        'grey-10': 'rgba(136, 138, 149, 0.1)', // same as above but  with 10% opacity
        'grey-primary': '#ECECEC',
        'grey-secondary': '#888A95',

        'grey-darker': '#CACCD6',

        brown: '#82737d',
        beige: '#e4d9d3',
        'beige-30': 'rgba(228, 217, 211, 0.3)',
        yellow: '#F8BF53',
        'yellow-secondary': '#FFC123',
        'yellow-tertiary': '#FFCD32',
        'yellow-tertiary-light': '#FFDE89',

        // bordel
        'teal-light-35': 'rgba(227, 237, 237, 0.35)',
        footer: '#252334',
        'blue-dark': '#4794A1',

        // Mostly for the quiz
        pink: '#D35592',
        'pink-secondary': '#E49FC2',
        'pink-tertiary': '#EDEAF3',
        'pink-light': '#F4E9F0',
        'pink-dark': '#D35592',
        'pale-pink': '#e4d9d3b3',

        'purple-dark': '#523DAD',
        'purple-dark-secondary': '#522EAB',
        'purple-medium': '#9747FF',
        'purple-light': '#7557FA80',

        teal: '#71C2C1',
        'teal-secondary': '#98C3CA',
        'teal-tertiary': '#DAEAEF',
        'teal-light': '#E3EDED',
        'teal-dark': '#4794A1',

        orange: '#D35E4A',
        'orange-secondary': '#E7A69D',
        'orange-light': '#FBEFED',
        'orange-dark': '#D35E4A',

        'green-check': '#41BD22',

        tertiary: '#D23333',

        'blue-secondary': '#84C0C0',
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
        0.325: '0.325rem',
      },
      cursor: {
        auto: 'auto !important',
        default: 'default !important',
        help: 'help !important',
        move: 'move !important',
        'not-allowed': 'not-allowed !important',
        pointer: 'pointer !important',
        text: 'text !important',
        wait: 'wait !important',
      },
      fontFamily: {
        effra: 'effra, sans-serif',
        sspb: 'SourceSerifProBold, serif',
      },
      fontSize: {
        h1: '2.5rem', // 40px
        h2: '2rem', // 32px
        h3: '1.625rem', // 26px

        'h1-mobile': '2rem', // 32px
        'h2-mobile': '2rem', // 32px
        'h3-mobile': '1.625rem', // 26px

        xxxs: '.5rem', // 8px
        xxs: '.625rem', // 10px
        xxs2: '.7rem',
        '5.5xl': '3.5rem', // 56px
      },
      lineHeight: {
        // base: '1.375rem', // 22px ---- same as leading-snug

        50: '3.125rem', // 50px
        58: '3.625rem', // 58px
      },
      boxShadow: {
        gray: '0.5px 0.5px 10px #888a95',
        'blue-btn': '0 8px 24px -7px rgba(72, 172, 248, 1)',
        'red-btn': '0 8px 24px -7px rgba(255, 0, 0, 0.6)',
        'green-btn': '0 8px 24px -7px rgba(28, 230, 13, 0.7)',
        'white-shadow': '0 5px 15px -5px rgba(255, 255, 255, 0.25)',
        'white-card':
          '0 5px 25px -5px rgb(255 255 255 / 50%), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        sidepanel: '0 0px 30px 13px rgba(0, 0, 0, 0.35)',
        centered: '0 3px 14px 5px rgba(0, 0, 0, 0.2)',
        'center-light': '0 2px 12px 2px rgba(0, 0, 0, 0.1)',
      },
      fill: (theme) => ({
        success: '#22c55e',
        danger: '#ef4444',
      }),
      flex: {
        // #DELETE these
        'col-1': '1 !important',
        'col-2': '2 !important',
      },
      width: {
        76: '19rem', // 304px
        100: '25rem', // 400px
        103: '25.75rem', // 412px
        106: '26.5rem', // 424px
        108: '27rem', // 432px
      },
      height: {
        13: '3.375rem',
        15: '3.75rem',
        100: '25rem',
      },
      minHeight: () => ({
        '70px': '4.375rem',
        10: '2.5rem',
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      }),
      minWidth: () => ({
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        76: '19rem',
        80: '20rem',
        96: '24rem',
      }),
      maxHeight: () => ({
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
      }),
      maxWidth: () => ({
        20: '5rem',
        24: '6rem',
        28: '7rem',
        32: '8rem',
        36: '9rem',
        40: '10rem',
        44: '11rem',
        48: '12rem',
        52: '13rem',
        56: '14rem',
        60: '15rem',
        64: '16rem',
        72: '18rem',
        80: '20rem',
        96: '24rem',
        106: '26.5rem', // 424px
        '1/4': '25%',
        '1/2': '50%',
        '2/3': '66%',
        '3/4': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      }),
      overflow: {
        visible: 'visible !important',
      },
      padding: {
        'page-xxs': '1.625rem', // 26px
        'page-xs': '2.5rem', // 40px
        'page-md': '6.25rem', // 100px
        page: '13.75rem', // 220px
        7.5: '1.8rem',
        13: '3.25rem', // 52px
        15: '3.75rem',
        17: '4.25rem',
        18: '4.5rem',
        19: '4.75rem',
        22: '5.5rem',
        76: '19rem',
      },
      margin: {
        'page-xxs': '1.625rem', // 26px
        'page-xs': '2.5rem', // 40px
        'page-md': '6.25rem', // 100px
        page: '13.75rem', // 220px

        13: '3.25rem', // 52px
        15: '3.75rem',
        19: '4.75rem',
      },
      transitionProperty: {
        width: 'width',
      },
      scale: {
        101: '1.01',
        102: '1.02',
      },
      inset: {
        17: '4.25rem', // 68px
        20: '5rem', // 80px
        68: '272px', // 17rem
      },
      zIndex: {
        '-1': '-1',
        5: '5',
        15: '15',
        25: '25',
        35: '35',
        45: '45',
        55: '55',
        60: '60',
        65: '65',
      },
      gridRowEnd: {
        8: '8',
        11: '11',
        16: '16',
      },
      gridRow: {
        'span-16': 'span 16 / span 16',
      },
      gridRowStart: {
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      gridTemplateRows: {
        16: 'repeat(16, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}
export default config
