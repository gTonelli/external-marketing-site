// core
import { Metadata } from 'next'
// components
import { IATPage } from '@/components/IAT/IATPage'

export const metadata: Metadata = {
  title: 'While You Wait for Your IAT™ eBook…',
  description:
    'While we’re sending your e-book to your email, here’s more life-changing information about the IAT™ Certification Program and why you should sign up!',
  robots: 'noindex',
}

export default function IATSalePage() {
  return <IATPage page_name="External IAT Ebook Page" pageUrl="ebook" />
}
