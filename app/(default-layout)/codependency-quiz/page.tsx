// components
import { Section } from '@/components/Section'
import { Page } from '@/components/Page'
import Image from 'next/image'
import { CarouselQuiz } from '@/components/Carousel/variants/CarouselQuiz'
// config
import { CODEPENDENCY_SLIDES } from './config'
import { Metadata } from 'next'
import { CodependencyQuiz } from './CodependencyQuiz'

export const metadata: Metadata = {
  title: 'The Codependency Quiz | By Thais Gibson',
  description: 'Take the leading Codependency Quiz by Thais Gibson for Free!',
  robots: 'all',
}

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
        alt="A vector wave for styling the page"
        className="hidden w-full -mt-[1px] xs:-mt-1 bg-white lg:block"
        src="/images/Quizzes/codependency-quiz-hero-bg-desktop.svg"
        width={1920}
        height={333}
      />

      <Image
        alt="A vector wave for styling the page"
        className="w-full relative -mt-[1px] xs:-mt-1 lg:hidden"
        src="/images/Quizzes/codependency-quiz-hero-bg.svg"
        width={375}
        height={72}
      />

      {/* SLIDER */}
      <CarouselQuiz slides={CODEPENDENCY_SLIDES} theme="blue-lightest" />

      <CodependencyQuiz />
    </Page>
  )
}
