import localFont from 'next/font/local'

export const effra = localFont({
  src: [
    { path: '../public/fonts/Effra-Regular.ttf', weight: '400' },
    { path: '../public/fonts/Effra-Bold.ttf', weight: '700' },
  ],
  variable: '--font-effra',
})

export const sourceSerifPro = localFont({
  src: [
    { path: '../public/fonts/SourceSerifPro-Regular.ttf', weight: '400' },
    { path: '../public/fonts/SourceSerifPro-Bold.ttf', weight: '700' },
  ],
  variable: '--font-source-serif-pro',
})
