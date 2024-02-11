// core
import { Metadata } from 'next'
// libraries
import _ from 'lodash'

import 'swiper/css'
import 'swiper/css/pagination'
import OrganicQuizPage from './QuizPage'

export const metadata: Metadata = {
  title: 'The Attachment Style Quiz',
  description: 'Take the leading Attachment Style Quiz by Thais Gibson for Free!',
  robots: 'all',
}

export default function AttachmentQuizPage() {
  return <OrganicQuizPage />
}
