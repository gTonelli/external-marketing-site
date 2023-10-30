import { Metadata } from 'next'
import LearningLovePage from './LearningLovePage'

export const metadata: Metadata = {
  title: 'The Attachment Style Quiz',
  description: 'Take the leading Attachment Style Quiz by Thais Gibson for Free!',
  robots: 'all',
}

export default function Page() {
  return <LearningLovePage />
}
