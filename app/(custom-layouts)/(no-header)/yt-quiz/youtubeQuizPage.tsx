'use client'
// core
import { useState, useRef, useCallback } from 'react'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { AttachmentStylesTabs } from '@/components/AttachmentStylesTabs/AttachmentStylesTabs'
import { AttachmentQuiz } from '@/components/AttachmentQuiz/AttachmentQuiz'
import { BreakThroughSectionDesktop } from '@/components/BreakThroughSection/BreakThroughSectionDesktop'
import { BreakThroughSectionMobile } from '@/components/BreakThroughSection/BreakThroughSectionMobile'
import { Button } from '@/components/Button/Button'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
// config
import { REGULAR_COPY } from '@/app/(custom-layouts)/(no-nav)/config'
// libraries
import 'swiper/css'
import 'swiper/css/pagination'
// modules
import Mixpanel from '@/modules/Mixpanel'
import TripleWhale from '@/modules/TripleWhale'

export default function YoutubeQuizPage() {
  const quizCopy = REGULAR_COPY

  // ================= State =======================
  const [viewQuiz, setViewQuiz] = useState(false)

  // ================= Refs =======================
  const quizSectionRef = useRef<HTMLDivElement>(null)

  // ================== Events =====================
  const onStartQuiz = useCallback(() => {
    if (!viewQuiz) {
      Mixpanel.track.QuizStarted({
        quiz_name: 'Youtube Funnel Quiz',
      })

      TripleWhale.track.QuizStarted({
        quiz_name: 'Youtube Funnel Quiz',
      })
      setViewQuiz((prev) => !prev)
    }
    quizSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [viewQuiz])

  return (
    <Page className="w-full text-center relative z-10" page_name="Youtube Funnel Quiz">
      {/* INTRO */}
      <section className="default-padding w-full flex-col flex-center bg-primary-light pt-11 pb-1 relative z-10">
        {/* TITLE + DESCRIPTION */}
        <div className="flex flex-col items-center lg:-mb-16 xl:-mb-24">
          <p className="text-lg font-bold">The Personal Development School</p>

          <h1 className="mb-2 leading-10">What is Your Attachment Style?</h1>

          <p className="font-bold mb-5 rounded-full bg-green w-max px-3 py-1">By Thais Gibson</p>

          <span className="font-bold mb-4 !tracking-10 lg:hidden">
            Take this Free 5-minute Quiz & Get a Free Personalized Report With Instant Results!
          </span>

          <span className="max-w-3xl font-bold mb-4 hidden !tracking-33 lg:block">
            {quizCopy.subheaderYT}
          </span>
        </div>
      </section>

      <Image
        alt="PDS quiz banner background image desktop"
        className="w-full hidden relative z-5 lg:block"
        src="/images/external-quiz-banner-bg.png"
        width={1920}
        height={243}
        tabIndex={-1}
        sizes="100vw"
      />
      <Image
        alt="PDS quiz banner background image mobile"
        className="w-full relative z-5 lg:hidden"
        src="/images/external-quiz-banner-bg-mobile.png"
        tabIndex={-1}
        width={412}
        height={36}
      />

      {/* BREAKTHROUGH SECTION */}
      <section className="flex flex-col flex-center mt-4">
        <div className="flex flex-col items-center">
          <h3 className="max-w-3xl">{quizCopy.headlineYT}</h3>
        </div>

        <BreakThroughSectionDesktop />

        <BreakThroughSectionMobile />

        <div ref={quizSectionRef} className="w-full">
          {viewQuiz && (
            <div className="w-full flex justify-center mx-auto py-16">
              <AttachmentQuiz
                className="!max-w-5xl"
                quizName="Youtube Funnel Quiz"
                quiz_traffic_source="paidYouTube"
                showStartButton={false}
              />
            </div>
          )}
        </div>

        {!viewQuiz && <Button className="my-4" label="START QUIZ" onClick={onStartQuiz} />}
      </section>

      <section className="max-w-5xl mx-auto my-10">
        <h2 className="mb-4">What Our Students Are Saying</h2>

        <p>
          The Personal Development School has helped thousands of people make inspiring life
          transformations
        </p>
      </section>

      <CarouselTestimonialThinkific initialSlide={2} />

      {/* ATTACHMENT STYLES */}
      <div className="relative -z-1 mt-4 lg:mt-16">
        <section className="w-full bg-blue-lightest mb-5 pb-80 lg:mb-8">
          {/* TITLE + DESCRIPTION */}
          <h2 className="pt-12 pb-6">What Are The Four Attachment Styles?</h2>

          <p className="default-padding py-0">{quizCopy.attachment_copy}</p>
        </section>

        <AttachmentStylesTabs className="-mt-80 lg:mb-10" type="quizpage" />
      </div>

      <Button className="ml-4 mb-8" label="START THE QUIZ" onClick={onStartQuiz} />
    </Page>
  )
}
