// core
import { Metadata } from 'next'
// components
import { PromotionPage } from '@/components/FreeTrialFreeCourse/PromotionPage'
// config
import { CONFIG } from './config'

export const metadata: Metadata = {
  title: 'Heal Your Heart & Thrive in Relationships!',
  description:
    'Breakups hurt. This free course for life will help you move forward and thrive in relationships! And get a 7-Day All-Access Pass Free Trial!',
  robots: 'noindex',
}

export default function DreamLifeBreakupCoursePage() {
  return <PromotionPage config={CONFIG} pageName="Dreamlife Breakup Course Page" />
}
