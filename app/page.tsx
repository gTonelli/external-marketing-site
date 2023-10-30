'use client'

// components
import { Page } from '@/components/Page'
import { Text } from '@/components/Text/Text'
import { AttachmentStylesTabs } from '@/components/AttachmentStylesTabs/AttachmentStylesTabs'
import { Image } from '@/components/Image'
import { AttachmentQuiz } from '@/components/AttachmentQuiz/AttachmentQuiz'
import { REGULAR_COPY } from './config'
import { BreakThroughSectionDesktop } from '@/components/BreakThroughSection/BreakThroughSectionDesktop'
import { BreakThroughSectionMobile } from '@/components/BreakThroughSection/BreakThroughSectionMobile'
// libraries
import _ from 'lodash'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

export default function Home() {
  const quizCopy = REGULAR_COPY

  return (
    <Page className="w-full text-center relative z-10" page_name="Attachment Style Quiz">
      {/* INTRO */}
      <section className="w-full flex-col flex-center bg-primary-light pt-11 relative z-10">
        {/* TITLE + DESCRIPTION */}
        <div className="lg:-mb-16 xl:-mb-24">
          <Text.Heading
            className="mb-5 lg:hidden"
            content="What's Your Attachment Style"
            size={1}
          />

          <Text.Heading className="mb-5 hidden lg:block" content={quizCopy.header} />

          {/* mobile */}
          <Text.Paragraph
            className="font-bold mb-4 lg:hidden"
            content={quizCopy.subheader_mobile}
            spacing="tracking-0.325"
          />

          {/* desktop */}
          <Text
            className="max-w-3xl font-bold mb-4 hidden lg:block"
            content={quizCopy.subheader_desktop}
            spacing="tracking-0.325"
          />
        </div>
      </section>
      <Image className="w-full hidden relative z-5 lg:block" src="external-quiz-banner-bg.png" />
      <Image className="w-full relative z-5 lg:hidden" src="external-quiz-banner-bg-mobile.png" />

      {/* BREAKTHROUGH SECTION */}
      <section className="flex flex-col flex-center">
        <div className="flex flex-col items-center">
          <Text.Heading
            useMD
            className="max-w-2xl mb-4 lg:hidden"
            content={quizCopy.breakthroughs_header_mobile}
            size={3}
          />

          <Text.Heading
            useMD
            className="max-w-3xl hidden lg:block"
            content={quizCopy.headline}
            size={3}
          />
        </div>

        <BreakThroughSectionDesktop />

        <BreakThroughSectionMobile />

        <AttachmentQuiz quizName="Attachment Style Quiz" quiz_traffic_source="organic" />
      </section>
      {/* ATTACHMENT STYLES */}
      <div className="relative -z-1 mt-16">
        <section className="w-full bg-blue-lightest mb-5 pb-80 lg:mb-8">
          {/* TITLE + DESCRIPTION */}
          <Text.Heading className="pt-12 pb-6" content="What Are The Four Attachment Styles?" />

          <Text.Paragraph useMD content={quizCopy.attachment_copy} />
        </section>
        <AttachmentStylesTabs className="-mt-80" type="quizpage" />
      </div>
    </Page>
  )
}
