// core
import { Metadata } from 'next'
// components
import { FreeTrialFreeCoursePromotionPage } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
// config
import { CONFIG } from './config'
// style
import './style.css'

export const metadata: Metadata = {
  title: 'New Year, New You: Free Secure Relationship Course + Trial',
  description:
    'Make 2026 your year of secure love. Keep our $250 Secure Relationship course forever when you start your free 7-day trial.',
  robots: 'noindex',
}

export default function NewYearNewYouPage() {
  return <FreeTrialFreeCoursePromotionPage config={CONFIG} pageName="New Year New You Page" />
}
