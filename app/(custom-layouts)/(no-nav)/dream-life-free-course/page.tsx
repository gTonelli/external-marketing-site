// core
import { Metadata } from 'next'
// components
import { FreeTrialFreeCoursePromotionPage } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
// config
import { CONFIG } from './config'

export const metadata: Metadata = {
  title: 'Get Your Dream Life with a Free Trial & Course for Life!',
  description:
    'It’s time for you to discover your needs in life. Sign up for our 7-Day Free Trial to our All-Access Pass and get our Needs Course for Free for LIFE!',
  robots: 'noindex',
}

export default function DreamLifeFreeCoursePage() {
  return <FreeTrialFreeCoursePromotionPage config={CONFIG} pageName="Dreamlife Free Course Page" />
}
