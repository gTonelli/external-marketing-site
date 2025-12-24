// core
import { Metadata } from 'next'
// components
import { FreeTrialFreeCoursePromotionPage } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
// config
import { CONFIG } from './config'

export const metadata: Metadata = {
  title: 'Heal Family Dynamics and Set Boundaries This Holiday',
  description:
    'Boxing Day only. Heal family dynamics, set boundaries without guilt, and navigate difficult conversations with clarity.',
  robots: 'noindex',
}

export default function FamilyDynamicsHealingPage() {
  return (
    <FreeTrialFreeCoursePromotionPage config={CONFIG} pageName="Dreamlife Family Dynamics Page" />
  )
}
