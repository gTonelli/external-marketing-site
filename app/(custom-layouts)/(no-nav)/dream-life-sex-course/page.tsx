// core
import { Metadata } from 'next'
// components
import { PromotionPage } from '@/components/FreeTrialFreeCourse/PromotionPage'
// config
import { CONFIG } from './config'

export const metadata: Metadata = {
  title: 'Have the Best Sex Life Ever – Thanks to This Course!',
  description:
    'Sign up for our 7-day trial to get your FREE Attachment Style Sex Course for LIFE! Transform and have the best sex life with this guided program!',
  robots: 'noindex',
}

export default function DreamLifeSexCoursePage() {
  return <PromotionPage config={CONFIG} pageName="Dreamlife Sex Course Page" />
}
