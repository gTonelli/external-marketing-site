'use client'

import { Page } from '@/components/Page'
import { Section } from '../../../../(no-nav)/quiz/(variants)/v2/config'
import { Button } from '@/components/Button/Button'
import Image from 'next/image'

export default function AttachmentQuizV2Questions() {
  return (
    <Page className="relative flex flex-col flex-1" page_name="Attachment Style Quiz Questions">
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
          This 5-minute free quiz will delve into your attachment style, allowing us to craft a
          personalized roadmap to achieve your personal and relationship goals.
        </p>

        <Button label="BEGIN QUIZ" />
      </Section>
    </Page>
  )
}
