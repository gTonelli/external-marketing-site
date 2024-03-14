import { Metadata } from 'next'
import { IATPage } from '@/app/(default-layout)/iat/IATPage'

export const metadata: Metadata = {
  title: "Thais Gibson's Integrated Attachment Theory Coaching Certification",
  description: 'Become an Integrated Attachment Coach through PDS',
  robots: 'noindex',
}

export default function IATSalePage() {
  return <IATPage />
}
