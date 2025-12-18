// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { IATContent } from './IATContent'
// styles
import './style.css'

export const metadata: Metadata = {
  title: 'Integrated Attachment Theory™ Certification Program',
  description:
    'Enroll in the Integrated Attachment Theory™ Certification Program and learn directly from Thais Gibson, a renowned attachment theory expert. Sign up now!',
  robots: 'all',
  metadataBase: new URL('https://attachment.personaldevelopmentschool.com/iat'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
}

export default function IATSalePage() {
  return (
    <Page page_name="External IAT Page">
      <IATContent />
    </Page>
  )
}
