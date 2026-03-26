import { Header } from '@/components/Header/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'The Attachment Style Quiz',
  description: 'Take the leading Attachment Style Quiz by Thais Gibson for Free!',
  robots: 'noindex',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />

      <div className="flex min-h-0 flex-1 flex-col">{children}</div>

      <Footer />
    </>
  )
}
