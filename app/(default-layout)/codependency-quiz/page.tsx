'use client'

// components
import { Carousel } from '@/components/Carousel/Carousel'
import { Quiz } from '@/components/Quiz'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
// config
import {
  codependencyQuizValidationSchema,
  CODEPENDENCY_QUIZ_QUESTIONS,
  CODEPENDENCY_QUIZ_RESULTS,
  CODEPENDENCY_SLIDES,
} from './config'
import { Page } from '@/components/Page'

export default function CodependencyQuizPage() {
  return (
    <Page page_name="Codependency Quiz">
      <Section className="pb-0 bg-blue-lightest lg:-mb-8 xl:-mb-16 2xl:-mb-24 3xl:-mb-32">
        {/* TITLE + DESCRIPTION */}
        <div className="relative z-10 flex flex-col items-center lg:-mb-16 xl:-mb-24">
          <h4>The Personal Development School's</h4>

          <h1 className="mb-2 leading-10">Free Codependency Quiz</h1>

          <p className="font-bold mb-5 rounded-full bg-primary text-white w-max px-3 py-1">
            By Thais Gibson
          </p>

          <span className="font-bold mb-4 max-w-xl mx-auto">
            Stop feeling lonely in your relationships and instead create fulfilling connections
            where you feel seen, heard and important to the people in your life.
          </span>
        </div>
      </Section>

      <Image
        className="hidden w-full -mt-[1px] xs:-mt-1 bg-white lg:block"
        src="Quizzes/codependency-quiz-hero-bg-desktop.svg"
      />

      <Image
        className="w-full relative -mt-[1px] xs:-mt-1 lg:hidden"
        src="Quizzes/codependency-quiz-hero-bg.svg"
      />

      {/* SLIDER */}
      <Carousel.Quiz slides={CODEPENDENCY_SLIDES} theme="blue-lightest" />

      <Quiz
        outputs={CODEPENDENCY_QUIZ_RESULTS}
        questions={CODEPENDENCY_QUIZ_QUESTIONS}
        theme="blue-lightest"
        validationSchema={codependencyQuizValidationSchema}
        quizName="Codependency Quiz"
      />
    </Page>
  )
}
