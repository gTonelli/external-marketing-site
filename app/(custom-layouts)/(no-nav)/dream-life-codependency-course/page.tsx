// core
import { Metadata } from 'next'
// components
import { FreeTrialFreeCoursePromotionPage } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
// config
import { CONFIG } from './config'

export const metadata: Metadata = {
  title: 'Heal Codependency Patterns & Thrive In Love!',
  description:
    'Break free from codependency and reclaim your independence. Our course helps you set healthy boundaries, boost self-worth, and create healthy love.',
  robots: 'noindex',
}

export default function DreamLifeCodependencyCoursePage() {
  return (
    <FreeTrialFreeCoursePromotionPage
      config={CONFIG}
      pageName="Dreamlife Codependency Course Page"
    />
  )
}
