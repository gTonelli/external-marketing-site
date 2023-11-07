'use client'

// components
import { Carousel } from '@/components/Carousel/Carousel'
import { Quiz } from '@/components/Quiz'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
// config
import {
  lIMERENCE_QUIZ_QUESTIONS,
  LIMERENCE_QUIZ_RESULTS,
  LIMERENCE_SLIDES,
  limerenceQuizValidationSchema,
} from './config'

export default function LimerenceQuizPage() {
  return (
    <main className="w-full">
      <Section className="pb-0 bg-orange-secondary lg:-mb-8 xl:-mb-16 2xl:-mb-24 3xl:-mb-32">
        <Text.Heading className="relative z-10 mb-0" content="Are You Experiencing Limerence?" />

        <Text.Heading
          className="relative z-10 max-w-screen-md mx-auto mt-4 lg:mt-8"
          content="Find out now so that you can maximize your likelihood of making the right relationship work and improving your confidence!"
          size={4}
        />
      </Section>

      <Image
        className="hidden w-full -mt-[1px] xs:-mt-1 bg-white lg:block"
        src="Quizzes/limerence-quiz-hero-bg-desktop.svg"
      />

      <Image
        className="w-full relative -mt-[1px] xs:-mt-1 lg:hidden"
        src="Quizzes/limerence-quiz-hero-bg.svg"
      />

      {/* SLIDER */}
      <Carousel.Quiz slides={LIMERENCE_SLIDES} theme="orange-secondary" />

      <Quiz
        outputs={LIMERENCE_QUIZ_RESULTS}
        questions={lIMERENCE_QUIZ_QUESTIONS}
        theme="orange-secondary"
        validationSchema={limerenceQuizValidationSchema}
      />
    </main>
  )
}
