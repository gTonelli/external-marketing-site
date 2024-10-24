'use client'

// core
import { useEffect, useState } from 'react'
//components
import Image from 'next/image'
import { Text } from '@/components/Text/Text'
import { QuizCard } from '@/components/QuizCard'
import { Section } from '@/components/Section'
import { Page } from '@/components/Page'
// config
import { ATTACHMENT_STYLES, CONFIG, QUIZ_PAGE } from './config'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/light'
// styles
import './styles.css'

export default function MembersQuizPage() {
  return (
    <Page page_name="Members Quiz">
      {/* INTRO */}

      <section className="w-full relative z-0 text-center bg-primary-light pt-4 lg:pt-8">
        <Text.Heading
          className="mt-4 xxs:mt-8 xs:mt-12 lg:mt-6 mb-1"
          content={QUIZ_PAGE.section_1.header}
          size={2}
        />

        <Text.Heading
          className="font-effra font-bold"
          content={QUIZ_PAGE.section_1.subHeader}
          size={4}
          spacing="tracking-0.325"
        />
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
        className="w-full relative z-5 mb-2 lg:hidden"
        src="/images/external-quiz-banner-bg-mobile.png"
        tabIndex={-1}
        width={412}
        height={36}
      />

      {/* QUIZES */}
      <section
        className="relative w-full flex flex-col items-center space-y-5 mb-10 z-10
              lg:flex-row lg:space-y-0 lg:space-x-6 lg:justify-center lg:mb-16 lg:-mt-16
              xl:-mt-28 2xl:-mt-36 3xl:-mt-44">
        {CONFIG.map((quiz, index) => (
          <div key={`quizType_${index}`}>
            <QuizCard {...quiz} />
          </div>
        ))}
      </section>

      {/* HOW TO USE QUIZZES */}
      <section
        className="flex flex-col px-page-xs items-center space-y-10
              lg:flex-row lg:justify-between lg:space-x-14 lg:space-y-0 lg:px-page-md
              xl:px-page">
        {/* LEFT */}
        <Image
          alt="A vector image of a woman with a comically large pencil checking boxes."
          width={368}
          height={366}
          src="/images/MembersQuiz/quiz.png"
        />

        {/* RIGHT */}
        <div className="w-full self-center">
          <Text.Heading
            className="text-center mb-4 lg:text-left"
            content={QUIZ_PAGE.section_3.header}
            size={2}
          />
          <Text.Paragraph content={QUIZ_PAGE.section_3.content} />
        </div>
      </section>

      {/* WHAT ARE ATTACHMENT STYLES */}
      <section
        className="relative z-5 w-full flex flex-col items-center justify-center text-center px-page-xxs pt-52 
              lg:px-page-md lg:pt-40
              xl:px-page xl:pt-64
              2xl:pt-96">
        <Image
          alt="A styled background image"
          className="w-full bg-mobile absolute z-5 -top-40"
          src="/images/MembersQuiz/quiz-styles-mobile-bg.svg"
          width={425}
          height={943}
          sizes="100vw"
          tabIndex={-1}
        />
        <Image
          alt="A styled background image."
          className="w-full bg-desktop absolute z-5 -top-20"
          src="/images/MembersQuiz/quiz-styles-bg.svg"
          width={1920}
          height={1100}
          sizes="100vw"
          tabIndex={-1}
        />

        <div className="lg:w-1/2 relative z-10 mb-4 lg:mb-7">
          <Text.Heading content={QUIZ_PAGE.section_4.header} size={2} />
        </div>

        <div className="lg:w-1/2 relative z-10 mb-5">
          <Text.Paragraph content={QUIZ_PAGE.section_4.description} />
        </div>

        <AttachmentTabsSection />
      </section>

      {/* UNDERSTNAD ATTACHMENT STYLES */}
      <Section className="relative z-10 mb-20" classNameInner="!max-w-screen-xl">
        <div className="w-full flex flex-col items-center text-center mb-5 lg:mb-10">
          <Text.Heading className="lg:w-2/3" content={QUIZ_PAGE.section_5.header} size={2} />
        </div>

        {/* 1st PART */}
        <div className="flex flex-col mb-8 text-left lg:flex-row lg:items-center lg:px-20">
          <div className="flex flex-col justify-center lg:w-1/2">
            <Text.Paragraph content={QUIZ_PAGE.section_5.description} />
          </div>

          <div className="lg:w-1/2 flex justify-center items-center">
            <Image
              alt="A vector image of a family of 3 with a man, woman and childhood standing in the living room."
              className="w-2/3"
              src="/images/MembersQuiz/quiz-childhood.png"
              width={230}
              height={195}
            />
          </div>
        </div>

        {/* 2nd PART */}
        <div className="flex flex-col lg:flex-row-reverse lg:px-20">
          <div className="flex flex-col justify-center text-left lg:w-1/2">
            <Text.Paragraph className="mb-4" content={QUIZ_PAGE.section_5.listStart} />

            {QUIZ_PAGE.section_5.list.map((item, index) => (
              <div key={`as-benefit-${index}`} className="flex flex-row space-x-7 mb-4">
                <FontAwesomeIcon className="text-green" icon={faCheckCircle} size="xl" />

                <Text.Paragraph content={item} />
              </div>
            ))}

            <Text.Paragraph content={QUIZ_PAGE.section_5.listEnd} />
          </div>

          <div className="lg:w-1/2 flex-center">
            <Image
              alt="A vector image of a woman holding a pot of flowers with a man watering it and a styled heart floating in the air between them."
              className="w-2/3"
              src="/images/MembersQuiz/relationship.svg"
              width={230}
              height={194}
            />
          </div>
        </div>
      </Section>
    </Page>
  )
}

const AttachmentTabsSection = () => {
  const [activeStyle, setActiveStyle] = useState<0 | 1 | 2 | 3 | null>(null)

  useEffect(() => {
    setTimeout(() => setActiveStyle(0), 1200)
  }, [])

  return (
    <div className="w-full flex-center flex-col mb-10 relative z-10 lg:mb-32">
      <div className="w-full flex items-center justify-center flex-wrap mb-10 gap-3 lg:mb-16">
        {ATTACHMENT_STYLES.map((style, index) => (
          <div
            key={`attachment_style_btn_${index}`}
            className="flex-center flex-col-2"
            style={{ maxWidth: '320px' }}>
            <button
              key={`attachment_style_btn_${index}`}
              className={cx(
                'clickable flex-col-2 tracking-0.325 rounded-sm lg:rounded-20 px-5 break-words py-5 lg:px-12 shadow-lg text-xs lg:text-base',
                activeStyle === index ? 'bg-white text-black font-bold' : 'bg-primary text-white'
              )}
              onClick={() => setActiveStyle(index as any)}>
              {style.title.toUpperCase()}
            </button>
          </div>
        ))}
      </div>

      <div
        className="w-full flex-center mb-10 
                md:px-page-xs
                lg:px-0 lg:mb-0">
        {activeStyle !== null && (
          <div
            className="w-full flex-col-reverse flex-center bg-white rounded-20 shadow-lg text-left py-8 px-11
                  md:space-x-5 
                  lg:flex-row lg:space-x-10 lg:py-10 lg:mx-36 lg:w-2/3">
            <Image
              alt="A vector image of a couple together."
              className="w-full lg:w-56"
              src={ATTACHMENT_STYLES[activeStyle as any].assetUrl}
              width={285}
              height={237}
            />

            <div className="flex flex-1 flex-col">
              <Text.Heading
                className="mb-3"
                content={ATTACHMENT_STYLES[activeStyle as any].title}
                size={3}
              />

              <Text.Paragraph content={ATTACHMENT_STYLES[activeStyle as any].content} />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
