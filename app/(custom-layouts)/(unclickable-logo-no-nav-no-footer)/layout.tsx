import { Header } from '@/components/Header'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Personal Development School Promotion Links',
  description:
    'Access our latest promotions, deals, and special announcements direct from our social media channels.',
  robots: 'noindex',
}

export default function NoHeaderFooterLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header clickableLogo={false} />

      {children}
    </>
  )
}
