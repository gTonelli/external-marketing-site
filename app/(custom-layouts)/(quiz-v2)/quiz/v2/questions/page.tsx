'use client'

// core
import { useEffect } from 'react'
// components
import { Page } from '@/components/Page'
import { AttachmentQuizV2 } from '@/components/AttachmentQuizV2/AttachmentQuizV2'
// modules
import Mixpanel from '@/modules/Mixpanel'
// styles
import './styles.css'

export default function AttachmentQuizV2QuestionsPage() {
  useEffect(() => {
    Mixpanel.track.QuizStarted({ quiz_name: 'Main Funnel Quiz' })
  }, [])

  return (
    <Page
      className="relative flex flex-col flex-1 min-h-[100vh] overflow-hidden"
      page_name="Attachment Style Quiz Questions">
      <AttachmentQuizV2 />
    </Page>
  )
}
