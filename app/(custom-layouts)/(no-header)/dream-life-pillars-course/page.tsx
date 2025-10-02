// core
import { Metadata } from 'next'
// components
import { PromotionPage } from '@/components/FreeTrialFreeCourse/PromotionPage'
// config
import { CONFIG } from './config'

export const metadata: Metadata = {
  title: 'Get a 7-Day Free Trial and the Pillars of a Secure Relationship course for LIFE!',
  description:
    'This is your chance to get a 7-day free trial to the All-Access Pass and own the 6 Key Pillars of a Secure Relationship course forever. Sign up now!',
  robots: 'noindex',
}

export default function DreamLifePillarsCoursePage() {
  return <PromotionPage config={CONFIG} pageName="Dreamlife Pillars Course Page" />
}
