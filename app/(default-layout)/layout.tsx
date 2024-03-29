// components
import { Header, PDSDefaultNavLinks } from '@/components/Header'
import { Footer } from '@/components/Footer'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Thais Gibson's Integrated Attachment Theory Coaching Certification",
  description: 'Become an Integrated Attachment Coach through PDS',
  robots: 'noindex',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header includeSideMenu navLinks={PDSDefaultNavLinks} />

      {children}

      <Footer includeLinks />
    </>
  )
}
