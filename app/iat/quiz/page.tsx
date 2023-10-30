'use client'

/* eslint-disable @typescript-eslint/no-use-before-define */
// core
import React, { useCallback, useEffect, useState } from 'react'
// components
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
import { Button } from '@/components/Button/Button'
import { AttachmentStylesTabs } from '@/components/AttachmentStylesTabs/AttachmentStylesTabs'
import { IResultProps } from '@/components/AttachmentQuiz/AttachmentQuiz'
import { ProgressBar } from '@/components/ProgressBar'
import { BreakThroughSectionDesktop } from '@/components/BreakThroughSection/BreakThroughSectionDesktop'
import { BreakThroughSectionMobile } from '@/components/BreakThroughSection/BreakThroughSectionMobile'
// libraries
import { Helmet } from 'react-helmet'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
// utils
import { EXTERNALQUIZQUESTIONS } from '@/components/AttachmentQuiz/config'

import 'swiper/css'
import 'swiper/css/pagination'
import { Page } from '@/components/Page'

export default function IATQuizPage() {
  const page_name = 'IAT Quiz' as Pages
  // ================= Hooks =======================

  // ================= State =======================
  const [viewQuiz, setViewQuiz] = useState(true)

  // ================== Events =====================
  useEffect(() => {
    document.title = 'The Attachment Style Quiz'
  })

  const onStartQuiz = useCallback(() => {
    Mixpanel.track.QuizStarted({
      quiz_name: page_name,
    })
    setViewQuiz((prev) => !prev)
  }, [])

  return (
    <Page page_name="IAT Attachment Quiz">
      {/* Prevent indexing of the page since there is no lead gen or funnel */}
      <Helmet>
        <meta content="noindex" name="robots" />
      </Helmet>
      <div className="w-full text-center relative z-10">
        {/* INTRO */}
        <section className="w-full flex flex-col bg-primary-light pt-11">
          {/* TITLE + DESCRIPTION */}
          <div className="lg:relative lg:z-10 lg:-mb-16 xl:-mb-24">
            <Text.Heading
              className="mb-5 lg:hidden"
              content="What's Your Attachment Style"
              size={1}
            />

            <Text.Heading className="mb-5 hidden lg:block" content="The Attachment Style Quiz" />

            <Text
              className="font-bold mb-4 lg:hidden"
              content="TAKE OUR FREE QUIZ NOW TO FIND OUT!"
              spacing="tracking-0.325"
            />

            <Text
              className="font-bold mb-4 hidden lg:block"
              content="TAKE OUR FREE QUIZ TO FIND OUT YOUR ATTACHMENT STYLE!"
              spacing="tracking-0.325"
            />
          </div>
        </section>
        <Image className="w-full hidden lg:block" src="external-quiz-banner-bg.png" />
        <Image className="w-full lg:hidden" src="external-quiz-banner-bg-mobile.png" />

        {/* BREAKTHROUGH SECTION */}
        <section className="flex-col flex-center py-7">
          <Text.Heading
            className="mb-5 lg:hidden"
            content="Improve Your Relationships Today!"
            size={3}
          />

          <Text.Heading
            className="mb-5 hidden lg:block"
            content="Create Breakthroughs In Your Relationships Today!"
            size={3}
          />

          <BreakThroughSectionDesktop />

          <BreakThroughSectionMobile />

          {viewQuiz ? (
            <div>
              <Text.Paragraph
                className="text-left mt-[30px] mx-10 lg:mx-0 sm:text-center lg:mt-11"
                content={`Take this quiz to determine your attachment style. Knowing your attachment style is the first step to creating more meaningful
                        connections, feeling valued and developing more harmony in all of your relationships!`}
              />

              <Button
                className="mt-7 bg-primary-old px-20 py-4 lg:mt-16"
                label="START QUIZ"
                onClick={onStartQuiz}
              />
            </div>
          ) : (
            <QuizSection />
          )}
        </section>

        {/* ATTACHMENT STYLES */}
        <div className="relative -z-1">
          <section className="w-full bg-blue-lightest mb-5 pb-80 pt-8 lg:mb-8">
            {/* TITLE + DESCRIPTION */}
            <Text.Heading className="mb-5" content="What Are The 4 Attachment Styles?" />

            <Text.Paragraph
              content={`Attachment Theory is the single largest predictor of success in your relationships, whether they are
                        romantic, familial or platonic.
            
                        There are four types of Attachment Styles, all with different characteristics:`}
            />
          </section>

          <AttachmentStylesTabs className="-mt-80" type="quizpage" />
        </div>
      </div>
    </Page>
  )
}

const ResultSection = ({ ap, da, fa, sa }: IResultProps) => {
  // =============== State =============
  const [style, setStyle] = useState<string | undefined>(undefined)

  useEffect(() => {
    const max = Math.max(fa, ap, da, sa)

    setStyle(
      max === fa
        ? 'Fearful Avoidant'
        : max === ap
        ? 'Anxious Preoccupied'
        : max === da
        ? 'Dismissive Avoidant'
        : 'Secure'
    )
  }, [ap, da, fa, sa])

  const calcPercentage = () => {
    const totalTrueAnswers = ap + da + fa + sa
    //  Formula for each style:
    //  number of questions answered true for that style (the ammount of points) divided by number of all questions answered true
    const apPercentage = totalTrueAnswers === 0 ? 0 : ((ap / totalTrueAnswers) * 100).toFixed(0)

    const daPercentage = totalTrueAnswers === 0 ? 0 : ((da / totalTrueAnswers) * 100).toFixed(0)

    const faPercentage = totalTrueAnswers === 0 ? 0 : ((fa / totalTrueAnswers) * 100).toFixed(0)

    const saPercentage = totalTrueAnswers === 0 ? 0 : ((sa / totalTrueAnswers) * 100).toFixed(0)

    return {
      'Fearful Avoidant': faPercentage,
      'Anxious Preoccupied': apPercentage,
      'Dismissive Avoidant': daPercentage,
      'Securely Attached': saPercentage,
    }
  }

  return (
    <>
      {style ? (
        <Text.Heading
          content={`You have a${
            style === 'Anxious Preoccupied' ? 'n' : ''
          } ${style} Attachment Style`}
          size={4}
        />
      ) : null}
      {Object.entries(calcPercentage()).map((style, index) => (
        <div key={`progress_${index}_${style[0]}`}>
          <div className="mt-6">
            <div className="w-3/4 font-bold text-left mx-auto lg:w-1/2">
              {style[0]} {style[1]}%
            </div>

            {/* PROGRESSBAR */}
            <div className="w-3/4 mx-auto lg:w-1/2">
              <div className="progressbar">
                <div
                  className="progressbar-fill anim-progress-fil bg-primary-old"
                  style={{ maxWidth: `${style[1]}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

const QuizSection = () => {
  // ======================== State ====================
  const [currentIndex, setCurrentIndex] = useState(0)
  const [apPoints, setApPoints] = useState(0)
  const [daPoints, setDaPoints] = useState(0)
  const [faPoints, setFaPoints] = useState(0)
  const [saPoints, setSaPoints] = useState(0)

  const questions = EXTERNALQUIZQUESTIONS.slice(1, 29)

  const onQuestionAnswer = useCallback(
    (answer: string) => () => {
      // Answered `true`
      if (answer === 'true') {
        // Shallow copy due to state being asynchronous and last question value wasnt updated in time
        let _ap = apPoints
        let _fa = faPoints
        let _da = daPoints
        let _sa = saPoints
        // Save the score based on association and move to the next one
        if (currentIndex >= 0) {
          const question = questions[currentIndex]

          if (question.association === 'fa') {
            _fa += 1
            setFaPoints(_fa)
          } else if (question.association === 'ap') {
            _ap += 1
            setApPoints(_ap)
          } else if (question.association === 'sec') {
            _sa += 1
            setSaPoints(_sa)
          } else if (question.association === 'da') {
            _da += 1
            setDaPoints(_da)
          }
        }
      }
      // Check if the question was last - go to the ResultsPage
      if (currentIndex === questions.length - 1) {
        Mixpanel.track.QuizFinished({
          quiz_name: 'IAT Quiz',
        })
      }
      setCurrentIndex(currentIndex + 1)
    },
    [currentIndex, faPoints, apPoints, saPoints, daPoints, questions]
  )

  const options = ['true', 'false']

  return (
    <section className="lg:mt-16 w-full lg:w-3/4">
      {/* QUIZ SECTION */}
      {currentIndex !== questions.length ? (
        <div>
          {/* PROGRESS BAR */}
          <ProgressBar
            showPercentage
            className="w-3/4 p-1 mb-8 mx-auto lg:w-2/3 lg:mb-10"
            color="primary"
            percentage={Number(((100 / questions.length || 1) * currentIndex).toFixed(0))}
          />

          <div key={`question_${currentIndex}`}>
            <Text
              className="font-bold text-2xl lg:text-2xl lg:min-h-24"
              content={`${currentIndex + 1}) ${questions[currentIndex].question}`}
            />

            <div className="flex flex-col flex-center space-y-4 mt-6 mx-auto lg:w-3/4">
              {options!.map((obj, index) => (
                <Button
                  key={`option_${index}`}
                  className="rounded bg-primary-old uppercase w-max lg:w-full lg:py-4"
                  label={obj}
                  onClick={onQuestionAnswer(obj)}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <ResultSection ap={apPoints} da={daPoints} fa={faPoints} sa={saPoints} />
      )}
    </section>
  )
}
