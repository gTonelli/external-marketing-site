// components
import Image from 'next/image'
import { AttachmentQuizV2ScoreCard } from '@/components/AttachmentQuizV2/AttachmentQuizV2ScoreCard'
import { AttachmentQuizV2ResultsOfferSections } from '@/components/AttachmentQuizV2/AttachmentQuizV2ResultsOfferSections'
import { AttachmentQuizV2ResultsHeading } from '@/components/AttachmentQuizV2/AttachmentQuizV2ResultsHeading'
import { Animation } from '@/components/Animation'
import { Section } from '@/app/(custom-layouts)/(quiz-v2)/quiz/v2/config'
import { AttachmentQuizV2Navigation } from './AttachmentQuizV2Navigation'

type TPageConfig = {
  heroCopy: string
  bodyCopy: string
  bodyCopy2: string | JSX.Element
  style: string
}

interface IAttachmentQuizV2ResultsPageProps {
  config: TPageConfig
  params: { scores: string[] }
}

export const AttachmentQuizV2ResultsPage = ({
  params,
  config,
}: IAttachmentQuizV2ResultsPageProps) => {
  return (
    <>
      <Section
        className="bg-gradient-to-r from-blue-lightest to-primary-light/20 lg:bg-gradient-to-b lg:to-primary-light"
        classNameInner="lg:grid lg:grid-cols-[1fr_384px] lg:gap-8 xl:gap-56">
        <div className="text-left">
          <Animation delay={0}>
            <AttachmentQuizV2ResultsHeading />
          </Animation>

          <Animation delay={0.15}>
            <strong className="block mb-4">
              Next comes your attachment style report in your email! It’s a roadmap that is based on
              your attachment style and the goals you want to focus on. Keep reading to learn more! 
            </strong>
          </Animation>

          <Animation delay={0.3}>
            <h4 className="mb-2">What is my style?</h4>

            <p>{config.heroCopy}</p>
          </Animation>

          <Animation delay={0.45}>
            <p>
              Your beliefs about love and connections are getting in the way of forming healthy,
              long-lasting, and loving relationships.
            </p>
          </Animation>

          <Animation delay={0.6}>
            <p>
              <i>
                Your results below show how you scored on all four attachment styles: Fearful,
                Anxious, Dismissive, and Secure.
              </i>
            </p>
          </Animation>
        </div>

        <Animation direction="fromRight" delay={0.15}>
          <AttachmentQuizV2ScoreCard style={config.style} scores={params.scores} />
        </Animation>
      </Section>

      <Section classNameInner="!text-left lg:grid lg:grid-cols-[1fr_588px] lg:gap-6">
        <Animation>
          <h3 className="mb-4 lg:hidden">
            It’s Time to Learn Your Attachment Style & How It Will Empower Your Future Relationships
          </h3>
        </Animation>

        <Animation
          className="max-w-lg w-full mb-4 lg:mb-0 lg:max-w-none lg:col-start-2 lg:row-start-1"
          direction="fromRight">
          <Image
            alt="A couple sitting on the couch smiling at each other. The man is holding a tablet."
            className="w-full"
            src="/images/AttachmentQuiz/V2/results_couple.png"
            width={512}
            height={524}
            quality={95}
          />
        </Animation>

        <Animation className="lg:col-start-1 lg:row-start-1">
          <h3 className="hidden mb-4 lg:block">
            It’s Time to Learn Your Attachment Style & How It Will Empower Your Future Relationships
          </h3>

          <p>{config.bodyCopy}</p>

          <strong>
            It’s the most significant indicator of whether a relationship can succeed or not. 
          </strong>

          <p>
            However, your insecure patterns and beliefs can become dysfunctional, causing issues for
            your self-belief and your relationships. Worse, you’ll keep repeating them over and
            over. 
          </p>

          <p>
            That’s why understanding your attachment style’s patterns, behaviors, and fears is
            essential to knowing why you act the way you do, where it comes from, and what triggers
            you. 
          </p>

          <strong>
            Most importantly, it will help you rewire these patterns and beliefs to change your
            attachment style, so you never struggle in relationships again. 
          </strong>

          <p>That’s where our courses come in. </p>

          <p>{config.bodyCopy2}</p>
        </Animation>
      </Section>
      <AttachmentQuizV2ResultsOfferSections />
    </>
  )
}
