import type { Metadata } from 'next'
import { LayoutWrapper } from '@/components/Layout/LayoutWrapper'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'The Attachment Style Quiz',
  description: 'Take the leading Attachment Style Quiz by Thais Gibson for Free!',
  robots: 'noindex',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <LayoutWrapper>{children}</LayoutWrapper>
}
