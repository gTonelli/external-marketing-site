import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import Script from 'next/script'
import { GoogleTagManager } from '@next/third-parties/google'
import { effra, sourceSerifPro } from '@/fonts'

export const metadata: Metadata = {
  title: 'The Attachment Style Quiz',
  description: 'Take the leading Attachment Style Quiz by Thais Gibson for Free!',
  robots: 'noindex',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${effra.variable} ${sourceSerifPro.variable}`}>
      <head>
        {/* HYROS */}
        <Script
          defer
          type="text/javascript"
          src="https://184284.t.hyros.com/v1/lst/universal-script?ph=b8a3426fb8e80314f3ba1bbeb78db76454a57084d1e165ba830f52cda229dd6b&tag=!clicked"
          strategy="lazyOnload"
        />

        <Script defer id="hotjar-script" type="text/javascript" strategy="lazyOnload">
          {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:1654590,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
        </Script>
      </head>
      <body className="relative">
        <main className="relative bg-white overflow-x-hidden base-typography lg:overflow-x-visible">
          <Header />

          {children}

          <Footer />
        </main>
      </body>

      <GoogleTagManager gtmId="GTM-T49JFVN" />
    </html>
  )
}
