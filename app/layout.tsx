import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'

import Script from 'next/script'

export const metadata: Metadata = {
  title: 'The Attachment Style Quiz',
  description: 'Take the leading Attachment Style Quiz by Thais Gibson for Free!',
  robots: 'noindex',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qbi7dud.css" />
        {/* HYROS */}
        <Script
          type="text/javascript"
          src="https://184284.t.hyros.com/v1/lst/universal-script?ph=b8a3426fb8e80314f3ba1bbeb78db76454a57084d1e165ba830f52cda229dd6b&tag=!clicked"
          strategy="lazyOnload"
        />

        <Script type="text/javascript" id="google-tag-manager-script" strategy="lazyOnload">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-T49JFVN');`}
        </Script>
      </head>
      <body className="relative">
        <main className="relative bg-white overflow-x-hidden base-typography lg:overflow-x-visible">
          <Header />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  )
}
