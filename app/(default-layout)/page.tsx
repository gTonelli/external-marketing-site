// core
import { Metadata } from 'next'
// components
import OrganicQuizPage from './OrganicQuizPage'

export const metadata: Metadata = {
  title: 'The Attachment Style Quiz',
  description: 'Take the leading Attachment Style Quiz by Thais Gibson for Free!',
  robots: 'all',
}

export default function AttachmentQuizPage() {
  return <OrganicQuizPage />
}
