// components
import { Page } from '@/components/Page'
import { AttachmentStylesTabs } from '@/components/AttachmentStylesTabs/AttachmentStylesTabs'
import { AttachmentQuiz } from '@/components/AttachmentQuiz/AttachmentQuiz'
import { BreakThroughSectionDesktop } from '@/components/BreakThroughSection/BreakThroughSectionDesktop'
import { BreakThroughSectionMobile } from '@/components/BreakThroughSection/BreakThroughSectionMobile'
import Image from 'next/image'
import { REGULAR_COPY } from '../config'
// libraries
import _ from 'lodash'

import 'swiper/css'
import 'swiper/css/pagination'

export default function AttachmentQuizPage() {
  const quizCopy = REGULAR_COPY

  return (
    <Page className="w-full text-center relative z-10" page_name="Main Funnel Quiz">
      {/* INTRO */}
      <section className="default-padding w-full flex-col flex-center bg-primary-light pt-11 pb-1 relative z-10">
        {/* TITLE + DESCRIPTION */}
        <div className="flex flex-col items-center lg:-mb-16 xl:-mb-24">
          <h4>The Personal Development School's</h4>

          <h1 className="mb-2 leading-10">Attachment Style Quiz</h1>

          <p className="font-bold mb-5 rounded-full bg-green w-max px-3 py-1">By Thais Gibson</p>

          <span className="font-bold mb-4 !tracking-10 lg:hidden">{quizCopy.subheader_mobile}</span>

          <span className="max-w-3xl font-bold mb-4 hidden !tracking-33 lg:block">
            {quizCopy.subheader_desktop}
          </span>
        </div>
      </section>

      <Image
        alt=""
        className="w-full hidden relative z-5 lg:block"
        src="/images/external-quiz-banner-bg.png"
        width={1920}
        height={243}
        tabIndex={-1}
      />
      <Image
        alt=""
        className="w-full relative z-5 lg:hidden"
        src="/images/external-quiz-banner-bg-mobile.png"
        tabIndex={-1}
        width={412}
        height={36}
      />

      {/* BREAKTHROUGH SECTION */}
      <section className="flex flex-col flex-center mt-4">
        <div className="flex flex-col items-center">
          <h3 className="max-w-2xl mb-4 lg:hidden">{quizCopy.breakthroughs_header_mobile}</h3>

          <h3 className="max-w-3xl hidden lg:block">{quizCopy.headline}</h3>
        </div>

        <BreakThroughSectionDesktop />

        <BreakThroughSectionMobile />

        <AttachmentQuiz quiz_traffic_source="paid" />
      </section>
      {/* ATTACHMENT STYLES */}
      <div className="relative -z-1 mt-4 lg:mt-16">
        <section className="w-full bg-blue-lightest mb-5 pb-80 lg:mb-8">
          {/* TITLE + DESCRIPTION */}
          <h2 className="pt-12 pb-6">What Are The Four Attachment Styles?</h2>

          <p className="default-padding py-0">{quizCopy.attachment_copy}</p>
        </section>

        <AttachmentStylesTabs className="-mt-80" type="quizpage" />
      </div>
    </Page>
  )
}
