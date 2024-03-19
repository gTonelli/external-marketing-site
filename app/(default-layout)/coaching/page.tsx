import { Metadata } from 'next'
import { IATPage } from '@/app/(custom-layouts)/(no-nav)/iat/IATPage'

export const metadata: Metadata = {
  title: "Thais Gibson's Integrated Attachment Theory Coaching Certification",
  description: 'Become an Integrated Attachment Coach through PDS',
  robots: 'noindex',
}

export default function IATSalePage() {
  return <IATPage />
}
