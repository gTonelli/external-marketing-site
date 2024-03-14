'use client'

// core
import { useEffect, useState } from 'react'
//components
import Image from 'next/image'
import { Text } from '@/components/Text/Text'
import { ScrollInAnimation } from '@/components/ScrollInAnimation'
import { QuizCard } from '@/components/QuizCard'
// config
import { ATTACHMENT_STYLES, CONFIG, QUIZ_PAGE } from './config'
// libraries
import cx from 'classnames'

// styles
import './styles.css'

export default function MembersQuizPage() {
  return (
    <>
      {/* INTRO */}
      <section
        className="w-full relative z-0 text-center px-page-xxs xs:px-page-xs mb-28
              lg:px-page-md lg:mb-15 
              xl:px-page xl:mb-32">
        <Image
          alt="A vector wave for a styled background"
          className="bg-mobile w-full left-0 right-0 top-0"
          src="/images/MembersQuiz/quiz-intro-mobile-bg.svg"
          width={425}
          height={223}
          sizes="100vw"
          tabIndex={-1}
        />
        <Image
          alt="A vector wave for a styled background"
          className="bg-desktop w-full left-0 right-0 top-0"
          src="/images/MembersQuiz/quiz-intro-bg.svg"
          width={1920}
          height={198}
          sizes="100vw"
          tabIndex={-1}
        />

        {/* <ScrollInAnimation animateIn="animFadeInDown" delay={100}> */}
        <Text.Heading
          className="mt-4 xxs:mt-8 xs:mt-12 lg:mt-6 mb-1"
          content={QUIZ_PAGE.section_1.header}
          size={2}
        />
        {/* </ScrollInAnimation> */}

        <ScrollInAnimation animateIn="animFadeInDown" delay={200}>
          <Text.Heading
            className="font-effra font-bold"
            content={QUIZ_PAGE.section_1.subHeader}
            size={4}
            spacing="tracking-0.325"
          />
        </ScrollInAnimation>
      </section>

      {/* QUIZES */}
      <section
        className="w-full flex flex-col items-center space-y-5 mb-10
              lg:flex-row lg:space-y-0 lg:space-x-6 lg:justify-center lg:px-page-md lg:mb-16
              xl:px-page">
        {CONFIG.map((quiz, index) => (
          <ScrollInAnimation key={`quizType_${index}`} animateIn="animFadeInUp" delay={index * 100}>
            <QuizCard {...quiz} />
          </ScrollInAnimation>
        ))}
      </section>

      {/* HOW TO USE QUIZZES */}
      <section
        className="flex flex-col px-page-xs items-center space-y-10
              lg:flex-row lg:justify-between lg:space-x-14 lg:space-y-0 lg:px-page-md
              xl:px-page">
        {/* LEFT */}
        <ScrollInAnimation className="w-2/3 lg:w-1/2" animateIn="animFadeInRight">
          <Image
            alt="A vector image of a woman with a comically large pencil cvhecking boxes."
            width={368}
            height={366}
            src="images/MembersQuiz/quiz.svg"
          />
        </ScrollInAnimation>

        {/* RIGHT */}
        <ScrollInAnimation className="w-full self-center" animateIn="animFadeInLeft">
          <Text.Heading
            className="text-center mb-4 lg:text-left"
            content={QUIZ_PAGE.section_3.header}
            size={2}
          />
          <Text.Paragraph content={QUIZ_PAGE.section_3.content} />
        </ScrollInAnimation>
      </section>

      {/* WHAT ARE ATTACHMENT STYLES */}
      <section
        className="relative w-full flex flex-col items-center justify-center text-center px-page-xxs pt-52 
              lg:px-page-md lg:pt-40
              xl:px-page xl:pt-64
              2xl:pt-96
              3xl:pt-140">
        {/* <QuizStylesMobileBg className="w-full bg-mobile absolute z-0 -top-40" />
              <QuizStylesBg className="w-full bg-desktop absolute z-0 -top-20" /> */}

        <Image
          alt="A styled background image"
          className="w-full bg-mobile absolute z-0 -top-40"
          src="svg/quiz-styles-mobile-bg.svg"
          width={425}
          height={943}
          sizes="100vw"
          tabIndex={-1}
        />
        <Image
          alt="A styled background image."
          className="w-full bg-desktop absolute z-0 -top-20"
          src="svg/quiz-styles-bg.svg"
          width={1920}
          height={1100}
          sizes="100vw"
          tabIndex={-1}
        />

        <ScrollInAnimation
          className="lg:w-1/2 relative z-1 mb-4 lg:mb-7"
          animateIn="animFadeInDown">
          <Text.Heading content={QUIZ_PAGE.section_4.header} size={2} />
        </ScrollInAnimation>

        <ScrollInAnimation
          className="lg:w-1/2 relative z-1 mb-5"
          animateIn="animFadeInDown"
          delay={200}>
          <Text.Paragraph content={QUIZ_PAGE.section_4.description} />
        </ScrollInAnimation>

        <AttachmentTabsSection />
      </section>

      {/* UNDERSTNAD ATTACHMENT STYLES */}
      <section className="px-page-xs mb-20 lg:px-page-md xl:px-page">
        <ScrollInAnimation
          className="w-full flex flex-col items-center text-center mb-5 lg:mb-10"
          animateIn="animFadeInDown">
          <Text.Heading className="lg:w-2/3" content={QUIZ_PAGE.section_5.header} size={2} />
        </ScrollInAnimation>

        {/* 1st PART */}
        <div className="flex flex-col mb-8 lg:flex-row lg:px-20">
          <ScrollInAnimation
            className="flex flex-col justify-center lg:w-1/2"
            animateIn="animFadeInRight">
            <Text.Paragraph content={QUIZ_PAGE.section_5.description} />
          </ScrollInAnimation>

          <ScrollInAnimation className="lg:w-1/2 flex-center" animateIn="animFadeInLeft">
            <Image
              alt="A vector image of a family of 3 with a man, woman and childhood standing in the living room."
              className="w-2/3"
              src="images/MembersQuiz/quiz-childhood.svg"
              width={230}
              height={195}
            />
          </ScrollInAnimation>
        </div>

        {/* 2nd PART */}
        <div className="flex flex-col lg:flex-row-reverse lg:px-20">
          <ScrollInAnimation
            className="flex flex-col justify-center lg:w-1/2"
            animateIn="animFadeInLeft">
            <Text.Paragraph className="mb-4" content={QUIZ_PAGE.section_5.listStart} />

            {QUIZ_PAGE.section_5.list.map((item, index) => (
              <div key={`as-benefit-${index}`} className="flex flex-row space-x-7 mb-4">
                <Image
                  alt="A green checkmark"
                  src="/icons/teal-checkmark.svg"
                  width={25}
                  height={25}
                />

                <Text.Paragraph content={item} />
              </div>
            ))}

            <Text.Paragraph content={QUIZ_PAGE.section_5.listEnd} />
          </ScrollInAnimation>

          <ScrollInAnimation className="lg:w-1/2 flex-center" animateIn="animFadeInRight">
            <Image
              alt="A vector image of a woman holding a pot of flowers with a man watering it and a styled heart floating in the air between them."
              className="w-2/3"
              src="svg/relationship.svg"
              width={230}
              height={194}
            />
          </ScrollInAnimation>
        </div>
      </section>
    </>
  )
}

const AttachmentTabsSection = () => {
  const [activeStyle, setActiveStyle] = useState<0 | 1 | 2 | 3 | null>(null)

  useEffect(() => {
    setTimeout(() => setActiveStyle(0), 1200)
  }, [])

  return (
    <div className="w-full flex-center flex-col mb-10 lg:mb-32">
      <div className="w-full flex items-center justify-center flex-wrap mb-10 gap-3 lg:mb-16">
        {ATTACHMENT_STYLES.map((style, index) => (
          <ScrollInAnimation
            key={`attachment_style_btn_${index}`}
            className="flex-center flex-col-2"
            animateIn="animFadeInUp"
            style={{ maxWidth: '320px' }}
            delay={index * 200}>
            <button
              key={`attachment_style_btn_${index}`}
              className={cx(
                'clickable flex-col-2 tracking-0.325 rounded-sm lg:rounded-20 px-5 break-words py-5 lg:px-12 shadow-lg text-xs lg:text-base',
                activeStyle === index ? 'bg-white text-black font-bold' : 'bg-primary text-white'
              )}
              onClick={() => setActiveStyle(index as any)}>
              {style.title.toUpperCase()}
            </button>
          </ScrollInAnimation>
        ))}
      </div>

      <div
        className="w-full flex-center mb-10 
                md:px-page-xs
                lg:px-0 lg:mb-0">
        {activeStyle !== null && (
          <ScrollInAnimation
            animateIn="animFadeInUp"
            delay={800}
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
          </ScrollInAnimation>
        )}
      </div>
    </div>
  )
}
