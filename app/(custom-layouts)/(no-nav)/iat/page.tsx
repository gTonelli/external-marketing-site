import { Metadata } from 'next'
import { IATPage } from './IATPage'

export const metadata: Metadata = {
  title: "Thais Gibson's Integrated Attachment Theory Coaching Certification",
  description: 'Become an Integrated Attachment Coach through PDS',
  robots: 'all',
}

export default function IATSalePage() {
  return <IATPage page_name="External IAT Page" />
}
