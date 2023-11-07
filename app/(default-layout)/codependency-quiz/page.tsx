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

export default function CodependencyQuizPage() {
  return (
    <main className="w-full">
      <Section className="pb-0 bg-blue-lightest lg:-mb-8 xl:-mb-16 2xl:-mb-24 3xl:-mb-32">
        <Text.Heading className="relative z-10" content="Take Our Free Codependency Quiz" />

        <Text.Heading
          className="relative z-10 max-w-screen-md mx-auto mt-4 lg:mt-8"
          content="Stop feeling lonely in your relationships and instead create fulfilling connections where you feel seen, heard and important to the people in your life."
          size={4}
        />
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
      />
    </main>
  )
}
