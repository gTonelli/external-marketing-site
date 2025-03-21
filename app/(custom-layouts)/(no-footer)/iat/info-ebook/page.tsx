// core
import { Metadata } from 'next'
// components
import IATInfoPage from '../info/page'

export const metadata: Metadata = {
  title: 'Get the #1 FREE resource on IAT™ Relationship Coaching',
  description:
    'Download your free guide to the IAT™ Relationship Coaching Program – and join 1000’s of top coaches, therapists, and psychologists worldwide in this program! ',
  robots: 'noindex',
}

export default function IATInfoVariantPage() {
  return <IATInfoPage isVariant pageName="IAT Info Variant Page" />
}
