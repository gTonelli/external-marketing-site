import localFont from 'next/font/local'

export const effra = localFont({
  src: [
    { path: './Effra-Regular.ttf', weight: '400' },
    { path: './Effra-Bold.ttf', weight: '700' },
  ],
  variable: '--font-effra',
})

export const sourceSerifPro = localFont({
  src: [
    { path: './SourceSerifPro-Regular.ttf', weight: '400' },
    { path: './SourceSerifPro-Bold.ttf', weight: '700' },
  ],
  variable: '--font-source-serif-pro',
})
