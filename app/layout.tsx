import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import '@fortawesome/fontawesome-free/css/all.min.css'
import '@fortawesome/fontawesome-pro/css/all.min.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'The Attachment Style Quiz',
  description: 'Take the leading Attachment Style Quiz by Thais Gibson for Free!',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://use.typekit.net/qbi7dud.css" />
      </head>
      <body className="relative">
        <main className="relative bg-white overflow-x-hidden lg:overflow-x-visible">
          <Header />

          {children}

          <Footer />
        </main>
      </body>
    </html>
  )
}
