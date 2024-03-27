'use client'

import { Page } from '@/components/Page'
import { Section } from '../../../../(no-nav)/quiz/(variants)/v2/config'
import { Button } from '@/components/Button/Button'
import Image from 'next/image'
import { useState } from 'react'
import { AttachmentQuizV2Navigation } from '@/components/AttachmentQuizV2/AttachmentQuizV2Navigation'
import dynamic from 'next/dynamic'
import { Loader } from '@/components/Loader'
import { AttachmentQuizV2 } from '@/components/AttachmentQuizV2/AttachmentQuizV2'

// const AttachmentQuizV2Questions = dynamic(
//   () =>
//     import('@/components/AttachmentQuizV2/AttachmentQuizV2Questions').then(
//       (mod) => mod.AttachmentQuizV2Questions
//     ),
//   {
//     loading: () => (
//       <Loader className="flex flex-col flex-1 items-center bg-gradient-to-r from-green-light to-primary-light/50" />
//     ),
//   }
// )

export default function AttachmentQuizV2QuestionsPage() {
  const [viewQuiz, setViewQuiz] = useState(false)

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
              alt="Two women sitting on a coach smiling at each other"
              className="absolute top-0 left-0 w-full h-full object-cover object-top z-5"
              src="/images/AttachmentQuiz/V2/quiz-bg.png"
              width={1200}
              height={802}
              sizes="100vw"
            />

            <Section
              className="flex flex-col flex-1 bg-gradient-to-r from-green-light to-primary-light/50 relative z-10"
              classNameInner="pt-8 lg:pt-24 !max-w-[792px]">
              <h1 className="mb-4">Attachment Style Quiz</h1>

              <p className="!mb-12">
                This 5-minute free quiz will delve into your attachment style, allowing us to craft
                a personalized roadmap to achieve your personal and relationship goals.
              </p>

              <Button label="BEGIN QUIZ" onClick={() => setViewQuiz(true)} />
            </Section>
          </>
        )}
      </Page>
    </>
  )
}
