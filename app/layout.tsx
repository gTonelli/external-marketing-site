import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'

import '@fortawesome/fontawesome-free/css/all.min.css'

export const metadata: Metadata = {
  title: 'The Attachment Style Quiz',
  description: 'Take the leading Attachment Style Quiz by Thais Gibson for Free!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qbi7dud.css" />
        {/* HYROS */}
        <script
          type="text/javascript"
          src="https://184284.t.hyros.com/v1/lst/universal-script?ph=b8a3426fb8e80314f3ba1bbeb78db76454a57084d1e165ba830f52cda229dd6b&tag=!clicked"></script>
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
