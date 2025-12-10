// core
import { Metadata } from 'next'
// components
import { FreeTrialFreeCoursePromotionPage } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
// config
import { CONFIG } from './config'
// style
import './style.css'

export const metadata: Metadata = {
  title: 'Boxing Week | Free Course For More Passion & Connection',
  description:
    'Discover how your attachment style impacts intimacy with this exclusive Boxing Week offer: Attachment Styles & Sex course free for life.',
  robots: 'noindex',
}

export default function BoxingWeekPage() {
  return <FreeTrialFreeCoursePromotionPage config={CONFIG} pageName="Boxing Week Page" />
}
