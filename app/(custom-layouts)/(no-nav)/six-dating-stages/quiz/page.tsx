// core
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { DatingQuiz } from '@/components/DatingQuiz/DatingQuiz'

export const metadata: Metadata = {
  title: 'The Personal Development School’s Six Stages of Dating Quiz',
  description:
    'You’re on your way! Discover which relationship stage you’re in and how to move forward with this exclusive Six Stages of Dating Quiz by Thais Gibson.',
  metadataBase: new URL('https://attachment.personaldevelopmentschool.com/six-dating-stages/quiz'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  robots: 'index, follow, max-snippet:-1',
}

export default function DatingQuizPage() {
  return (
    <Page page_name="Dating Quiz Page" className="flex flex-col flex-1">
      <Section className="flex items-center justify-center">
        <DatingQuiz showStartButton={false} />
      </Section>

      <div className="flex flex-1">
        <Image
          className="w-full self-end"
          src="/images/DatingQuiz/quiz-page-wave.svg"
          alt="A styled vector wave"
          width={1440}
          height={260}
        />
      </div>
    </Page>
  )
}
