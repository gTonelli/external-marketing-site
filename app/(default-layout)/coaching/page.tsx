import { Metadata } from 'next'
import { IATPage } from '@/components/IAT/IATPage'

export const metadata: Metadata = {
  title: 'Become a Relationship Coach in 12 Weeks!',
  description:
    'Start the IAT™ Certification Program — the revolutionary relationship coaching certification — to become a successful relationship coach in 12 weeks!',
  robots: 'noindex',
}

export default function IATSalePage() {
  return <IATPage showLeadGenForm page_name="External IAT Coaching Page" />
}
