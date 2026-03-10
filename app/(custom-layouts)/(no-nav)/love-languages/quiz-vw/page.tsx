// core
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { LoveLanguagesQuiz } from '@/components/LoveLanguagesQuiz/LoveLanguagesQuiz'

export const metadata: Metadata = {
  title: 'Love Language Quiz Questions | Free Love Languages Quiz',
  description:
    'Answer a few simple questions to reveal your love language. This free love languages quiz by Thais Gibson shows how you feel most connected in relationships.',
  metadataBase: new URL('https://attachment.personaldevelopmentschool.com/love-languages/quiz'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  robots: 'noindex',
}

export default function LoveLanguagesWithVideoQuizPage() {
  return (
    <Page page_name="Love Languages With Video Quiz Page" className="flex flex-col flex-1">
      <Section className="flex items-center justify-center">
        <LoveLanguagesQuiz videoVariant showStartButton={false} />
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
