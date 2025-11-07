// core
import Link from 'next/link'
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button/Button'
import { List } from '@/components/List'
import { BreakThroughSectionDesktop } from '@/components/BreakThroughSection/BreakThroughSectionDesktop'
import { BreakThroughSectionMobile } from '@/components/BreakThroughSection/BreakThroughSectionMobile'
import { faCheckCircle, faStars } from '@awesome.me/kit-545b942488/icons/classic/solid'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// config
import { SIX_DATING_STAGES_CONFIG as CONFIG } from './config'
// styles
import 'swiper/css'
import 'swiper/css/pagination'
import '@/styles/default-styles.css'

export const metadata: Metadata = {
  title: 'Take the Six Stages of Dating Quiz By Thais Gibson',
  description:
    'Take The Personal Development School’s Six Stages of Dating Quiz by Thais Gibson to uncover which relationship stage you’re in and how to move forward!',
  metadataBase: new URL('https://attachment.personaldevelopmentschool.com/six-dating-stages'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/',
    },
  },
  robots: 'index, follow, max-snippet:-1',
}

export default function SixDatingStagesPage() {
  return (
    <Page page_name="Dating Quiz Landing Page">
      <Section
        className="bg-gradient-to-b from-blue-lightest-50 to-white"
        classNameInner="flex flex-col items-center">
        <h1>
          <span className="block">{CONFIG.hero.line1}</span>

          <span className="block">{CONFIG.hero.line2}</span>
        </h1>

        <p className="tracking-33">{CONFIG.hero.subtitle}</p>

        <p className="mb-0">{CONFIG.hero.subtitle2}</p>

        <BreakThroughSectionDesktop isSixDatingStages />

        <BreakThroughSectionMobile isSixDatingStages />

        <Link className="mt-4" href="/six-dating-stages/quiz">
          <Button label={CONFIG.hero.ctaLabel} />
        </Link>

        <div className="w-fit flex text-left bg-pink-auxiliary rounded-10 mt-4 p-4">
          <span className="mr-2">
            <FontAwesomeIcon className="text-primary" icon={faStars} />
          </span>

          <span>{CONFIG.hero.label}</span>
        </div>
      </Section>

      <Section classNameInner="bg-blue-lightest-50 rounded-20 p-8 lg:px-32 lg:py-16">
        <h2>{CONFIG.aboutQuiz.title}</h2>

        <p>{CONFIG.aboutQuiz.copy1}</p>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex justify-end">
            <Image
              src="/images/DatingQuiz/illustration.svg"
              alt="An illustration representing how talking about your attachment style can help you understand yourself better and improve your relationships."
              width={400}
              height={400}
              quality={100}
              sizes="100vw"
            />
          </div>

          <div className="text-left">
            <p>{CONFIG.aboutQuiz.copy2}</p>

            <List
              listItems={CONFIG.aboutQuiz.list}
              icon={faCheckCircle}
              classNameIcon="!text-green-check mt-1"
              classNameListItems="mb-2"
              className="mb-4"
            />

            <Link href="/six-dating-stages/quiz">
              <Button label={CONFIG.aboutQuiz.ctaLabel} />
            </Link>
          </div>
        </div>
      </Section>

      <Section>
        <h2>{CONFIG.stages.title}</h2>

        <p>{CONFIG.stages.copy1}</p>

        <Image
          src="/images/AttachmentQuizResults/steps-paper-airplane.svg"
          alt="The number 1 through 5 in a line followed by a paper airplane."
          className="w-full mb-6 max-w-[942px] mx-auto"
          width={311}
          height={75}
          sizes="100vw"
          quality={100}
        />

        <div className="text-left mb-4 lg:grid lg:grid-cols-6 lg:gap-4">
          {CONFIG.stages.steps.map((step, index) => (
            <div
              key={`stages_step_${index}`}
              className="bg-white-secondary rounded-lg default-padding mb-4 lg:mb-0 lg:py-4">
              <div className="flex mb-4">
                <FontAwesomeIcon className="text-primary py-1 rounded" icon={step.icon} />

                <p className="text-primary ml-2 mb-0 font-bold">Stage {index + 1}</p>
              </div>

              <p className="mb-0">{step.text}</p>
            </div>
          ))}
        </div>

        <p>{CONFIG.stages.copy2}</p>

        <Link href="/six-dating-stages/quiz">
          <Button label={CONFIG.stages.ctaLabel} />
        </Link>
      </Section>
    </Page>
  )
}
