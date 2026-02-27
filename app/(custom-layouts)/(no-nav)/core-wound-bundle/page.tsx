// core
import { Metadata } from 'next'
// components
import { FreeTrialFreeCoursePromotionPage } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
// config
import { CONFIG } from './config'

export const metadata: Metadata = {
  title: 'Heal Core Wounds & Rewire Subconscious Beliefs',
  description:
    'Discover how core wounds like “I am not good enough,” “I am abandoned,” or “I am betrayed” shape your thoughts, emotions, and relationships. Learn practical tools to reprogram subconscious beliefs, regulate your nervous system, and build secure, healthy connections.',
  robots: 'noindex',
}

export default function CoreWoundBundlePage() {
  return <FreeTrialFreeCoursePromotionPage config={CONFIG} pageName="Core Wound Bundle Page" />
}
