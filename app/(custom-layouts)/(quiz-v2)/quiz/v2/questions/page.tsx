'use client'

import { Page } from '@/components/Page'
import { Section } from '../../../../(no-nav)/quiz/(variants)/v2/config'
import { Button } from '@/components/Button/Button'
import Image from 'next/image'
import { useState } from 'react'
import { AttachmentQuizV2Navigation } from '@/components/AttachmentQuizV2/AttachmentQuizV2Navigation'
import dynamic from 'next/dynamic'
import { Loader } from '@/components/Loader'
import Mixpanel from '@/modules/Mixpanel'

const AttachmentQuizV2 = dynamic(
  () =>
    import('@/components/AttachmentQuizV2/AttachmentQuizV2').then((mod) => mod.AttachmentQuizV2),
  {
    loading: () => (
      <>
        <AttachmentQuizV2Navigation />

        <Loader className="flex flex-col flex-1 items-center bg-gradient-to-r from-green-light to-primary-light/50" />
      </>
    ),
  }
)

export default function AttachmentQuizV2QuestionsPage() {
  // ============ State ============
  const [viewQuiz, setViewQuiz] = useState(false)

  const onBeginQuiz = () => {
    Mixpanel.track.QuizStarted({ quiz_name: 'Main Funnel Quiz' })
    setViewQuiz(true)
  }

  return (
    <>
      <Page
        className="relative flex flex-col flex-1 min-h-[100vh] overflow-hidden"
        page_name="Attachment Style Quiz Questions">
        {!viewQuiz && <AttachmentQuizV2Navigation />}

        {viewQuiz ? (
          <AttachmentQuizV2 setViewQuiz={setViewQuiz} />
        ) : (
          <>
            <Image
              alt="A couple sitting on the coach on their phones and smiling"
              className="absolute top-0 left-0 w-full h-full object-cover z-5 object-bottom"
              src="/images/AttachmentQuiz/V2/quiz-background.png"
              width={375}
              height={578}
              sizes="100vw"
            />

            <Image
              alt="A couple sitting on the coach on their phones and smiling"
              className="hidden absolute top-0 left-0 w-full h-full object-cover z-5 object-top lg:block"
              src="/images/AttachmentQuiz/V2/quiz-background-desktop.png"
              width={1200}
              height={802}
              sizes="100vw"
            />

            <Section
              className="flex flex-col flex-1 bg-gradient-to-r from-green-light to-primary-light/75 relative z-10 lg:to-primary-light/50"
              classNameInner="pt-8 lg:pt-24 !max-w-[792px]">
              <h1 className="mb-4">Attachment Style Quiz</h1>

              <p className="!mb-12">
                This 5-minute free quiz will delve into your attachment style, allowing us to craft
                a personalized roadmap to achieve your personal and relationship goals.
              </p>

              <Button label="BEGIN QUIZ" onClick={() => onBeginQuiz()} />
            </Section>
          </>
        )}
      </Page>
    </>
  )
}
