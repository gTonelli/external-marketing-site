import { DowntimeBanner } from '@/components/DowntimeBanner'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Discover & Learn About Your Attachment Style',
  description:
    'Discover, learn, and take the first steps to having your dream life by uncovering your attachment style. Get all the essential information you need!',
  robots: 'noindex',
}

export default function NoHeaderFooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DowntimeBanner />

      {children}
    </>
  )
}
