// core
import { Metadata } from 'next'
// components
import { FreeTrialFreeCoursePromotionPage } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
// config
import { CONFIG } from './config'

export const metadata: Metadata = {
  title: 'Regulate Emotions Fast with Somatic Healing',
  description:
    'Learn body-based tools to regulate emotions and calm your nervous system. Get free-for-life access to the Somatic Attachment Healing Course, plus a 7-Day Trial.',
  robots: 'noindex',
}

export default function SomaticAttachmentHealingPage() {
  return (
    <FreeTrialFreeCoursePromotionPage config={CONFIG} pageName="Dreamlife Somatic Course Page" />
  )
}
