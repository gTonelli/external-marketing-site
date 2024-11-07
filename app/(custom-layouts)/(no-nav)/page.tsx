// core
import { Metadata } from 'next'
// components
import OrganicQuizPage from './OrganicQuizPage'

export const metadata: Metadata = {
  title: 'Your Attachment Style Quiz | Get Fast Results + Report',
  description:
    'Take our free and fast attachment style quiz to discover yours. Get a free personalized report with everything you need to know about your attachment style.',
  robots: 'all',
}

export default function AttachmentQuizPage() {
  return <OrganicQuizPage />
}
