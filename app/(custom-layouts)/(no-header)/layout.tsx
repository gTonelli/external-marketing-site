// core
import type { Metadata } from 'next'
// components
import { Footer } from '@/components/Footer'
import { DowntimeBanner } from '@/components/DowntimeBanner'

export const metadata: Metadata = {
  title: 'The Attachment Style Quiz',
  description: 'Take the leading Attachment Style Quiz by Thais Gibson for Free!',
  robots: 'noindex',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}

      <Footer showDisclaimer includeSocialLinks={false} />
    </>
  )
}
