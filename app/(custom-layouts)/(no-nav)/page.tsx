// core
import { Metadata } from 'next'
// components
import OrganicQuizPage from './OrganicQuizPage'

export const metadata: Metadata = {
  title: 'Attachment Style Quiz | Take Free Our Attachment Style Test',
  description:
    'Take our free and fast attachment style quiz to discover yours. Get a free personalized report with everything you need to know about your attachment style.',
  robots: 'all',
}

export default function AttachmentQuizPage() {
  return <OrganicQuizPage />
}
