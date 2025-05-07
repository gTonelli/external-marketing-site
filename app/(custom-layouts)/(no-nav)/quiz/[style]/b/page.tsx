// core
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { TParams } from '../page'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { List } from '@/components/List'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { PDSResultsOfferSection } from './PDSResultsOfferSection'
// config
import { config } from './config'
// libraries
import { faCircleCheck, faCircleQuestion } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fa1, fa2, fa3, faSparkles } from '@awesome.me/kit-545b942488/icons/classic/solid'
// utils
import { getAttachmentStyleText } from '@/utils/functions'
// styles
import './style.css'

export async function generateMetadata({ params }: TParams) {
  switch (params.style) {
    case 'fa':
      return {
        title: 'Fearful Avoidant Attachment Style Report | PDS',
        description:
          'Discover your Fearful Avoidant attachment style with this detailed report. Learn how it impacts your relationships and get tools to heal and become secure.',
      }

    case 'da':
      return {
        title: 'Dismissive Avoidant Attachment Style Report | PDS',
        description:
          'Uncover the patterns behind the Dismissive Avoidant attachment style. This report offers practical tools for emotional growth and deeper connection.',
      }

    case 'ap':
      return {
        title: 'Anxious Preoccupied Attachment Style Report | PDS',
        description:
          'Explore the Anxious Preoccupied attachment style in this actionable report. Learn how to self-regulate, build secure bonds, and thrive in relationships.',
      }
  }
}

export default function QuizResultsB({ params }: TParams) {
  const { style: attachmentStyleShort } = params
  const attachmentStyleLong = getAttachmentStyleText(attachmentStyleShort)
  const attachmentStyleConfig = config[attachmentStyleShort]

  return (
    <Page page_name={`ICP Results Page - ${attachmentStyleShort.toUpperCase()}`}>
      <Section
        className="bg-gradient-to-b from-pink-auxiliary via-white to-white mb-6 lg:pb-4"
        classNameInner="!max-w-[792px]">
        <h1 className="text-primary !text-5xl">{attachmentStyleConfig.title}</h1>

        <h2>Your Attachment Style Is: {attachmentStyleLong}</h2>

        <p>Don't Miss This Important Step: Watch This Video to Learn More</p>

        <VideoThumbnail
          className="shadow-centered p-4 rounded-20 max-w-[792px] mx-auto mb-6"
          srcUrl={attachmentStyleConfig.videoSrc}
          thumbnailAlt="Thais Gibson sitting at a desk smiling and filling in a workbook."
          thumbnailUrl={'AttachmentQuizResults/thais-writing.jpg'}
          type="default"
        />

        <ButtonScroll label="READY TO CHANGE?" target="#pds-offer" />
      </Section>

      <Section className="mb-6 lg:py-4 lg:mb-20" classNameInner="lg:!max-w-[996px]">
        <h2>{attachmentStyleConfig.hookTitle}</h2>

        <p className="font-bold">{attachmentStyleConfig.hookSubtitle}</p>

        <div className="mb-4 lg:grid lg:grid-cols-2 lg:gap-6">
          <Image
            alt="An Inukshuk balanced by a heart in the center."
            className="w-full mb-6 lg:mb-0"
            src="/images/AttachmentQuizResults/inukshuk-heart.svg"
            width={341}
            height={200}
          />

          <List
            className="text-left"
            classNameIcon="text-primary mt-[2px]"
            listItems={attachmentStyleConfig.hookListItems}
            icon={faCircleCheck}
          />
        </div>

        <div className="flex rounded bg-pink-auxiliary text-primary text-left py-2 px-4 mb-4">
          <FontAwesomeIcon className="mr-2 pt-2 lg:pt-0" icon={faSparkles} />

          <span>{attachmentStyleConfig.hookFooter}</span>
        </div>

        <ButtonScroll label="READY TO CHANGE?" target="#pds-offer" />
      </Section>

      <Section className="relative !pb-60 text-left mb-6 lg:!py-28 lg:!px-56 xl:!py-32 2xl:!py-40">
        <h2 className="text-white text-left relative z-10 mb-0">
          If that feels familiar, you’re not broken.
        </h2>

        <h2 className="text-white text-left relative z-10 mb-0">
          You’re not too much. And this isn’t your fault.
        </h2>

        <Image
          alt="A pink flower growing out of asphalt."
          className="absolute w-full h-full object-cover top-0 left-0 lg:hidden"
          src="/images/AttachmentQuizResults/flower-asphalt-mobile.png"
          height={400}
          width={375}
          sizes="100vw"
          quality={100}
        />

        <Image
          alt="A pink flower growing out of asphalt."
          className="hidden absolute w-full h-full object-cover top-0 left-0 lg:block"
          src="/images/AttachmentQuizResults/flower-asphalt-desktop.png"
          height={300}
          width={1440}
          sizes="100vw"
          quality={100}
        />
      </Section>

      <Section className="lg:pt-4" classNameInner="lg:!max-w-[792px]">
        <Image
          alt="A purple speech bubble that has no text, with a hand extended pointed upwards."
          className="mx-auto lg:w-36 lg:h-auto"
          src="/images/AttachmentQuizResults/speech-bubble-hand.svg"
          width={120}
          height={80}
        />

        <h2>
          If You Keep Repeating the Same Relationship Dynamics, It's Not You. It's Your Attachment
          Style.
        </h2>

        {attachmentStyleConfig.repeatedPatternsBodyItems.map((text, i) => (
          <p key={`repeated_pattern_${i}`} className="text-left mb-0">
            {text}
          </p>
        ))}

        <p className="mt-4 text-xl font-bold">
          This isn't random. It's a pattern. It's an attachment style and everyone has one. And it
          can be changed.
        </p>
      </Section>

      <Section className="bg-white-secondary !py-10 mb-4" classNameInner="lg:!max-w-[996px]">
        <h2>That pattern has a name: {attachmentStyleLong}</h2>

        <div className="text-left mb-4 lg:grid lg:grid-cols-[384px_588px] lg:gap-6 lg:items-center">
          <Image
            alt="A vector image of a woman sitting on a ledge with a heart above her shoulder."
            className="w-full"
            src="/images/AttachmentQuizResults/woman-sitting-heart.svg"
            width={282}
            height={254}
          />

          <div>
            <p>
              These patterns start forming early in life—based on how emotionally safe you felt with
              the people closest to you. Usually that means your parents, but they can also be
              shaped by other important relationships: teachers, caregivers, even close friends or
              first loves. Attachment styles help explain why you react the way you do to closeness,
              distance, and emotional connection. In fact, they are the driving force in how you
              show up in all your relationships of your life.{' '}
            </p>

            <p>
              <strong>Your attachment style can show:</strong>
            </p>

            <List
              listItems={attachmentStyleConfig.patternListItems}
              classNameIcon="text-primary"
              icon={faCircleCheck}
            />
          </div>
        </div>

        <h3 className="mb-6">
          There are different types of attachment—but at their core, they fall into two main
          categories: secure and insecure.
        </h3>

        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="default-padding bg-primary-light rounded-2xl text-left mb-4 lg:py-4">
            <FontAwesomeIcon className="text-primary text-h1 mb-4" icon={faCircleCheck} />

            {attachmentStyleConfig.secureCard.map((text, i) => (
              <p
                key={`style_secure_card_text_${i}`}
                className={i === attachmentStyleConfig.secureCard.length - 1 ? 'mb-0' : ''}>
                {text}
              </p>
            ))}
          </div>

          <div className="default-padding bg-blue-light rounded-2xl text-left mb-4 lg:py-4">
            <FontAwesomeIcon className="text-blue-2 text-h1 mb-4" icon={faCircleQuestion} />

            {attachmentStyleConfig.insecureCard.map((text, i) => (
              <p
                key={`style_secure_card_text_${i}`}
                className={i === attachmentStyleConfig.insecureCard.length - 1 ? 'mb-0' : ''}>
                {text}
              </p>
            ))}
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-[588px_384px] lg:gap-6">
          <div className="text-left">
            <p>{attachmentStyleConfig.patternsDescriptionOne}</p>

            <div className="text-center lg:grid lg:grid-cols-[366px_193px] lg:mb-4">
              <p className="text-primary border-2 border-b-0 border-primary text-xl mb-0 lg:border-b-2 lg:border-r-0">
                But you didn’t choose these patterns.
              </p>

              <p className="border-2 border-primary bg-primary color-white text-xl text-white lg:mb-0">
                You learned them.
              </p>
            </div>

            {attachmentStyleConfig.patternsDescriptionTwo.map((text, i) => (
              <p key={`pattern_description_${i}`}>{text}</p>
            ))}
          </div>

          <Image
            alt="A vector image of two women sitting next to each other holding hands."
            className="w-full"
            src="/images/AttachmentQuizResults/two-women-sitting.svg"
            width={300}
            height={258}
          />
        </div>
      </Section>

      <Section className="mb-4 lg:pb-4">
        <Image
          alt="A vector image of a megaphone"
          className="mx-auto mb-4"
          src="/images/AttachmentQuizResults/megaphone.svg"
          width={80}
          height={80}
        />

        <p className="text-xl">But here’s the most important part:</p>

        <div className="default-padding bg-black rounded-xl mb-6 lg:py-6 lg:px-10">
          <p className="text-white text-h2 font-ssp font-bold">
            These patterns aren’t permanent. Because they were learned, they can be changed. And
            once you understand them, you can finally feel securely attached.
          </p>

          <p className="text-white text-h2 font-ssp font-bold">
            <em>So how can you do that?</em>
          </p>
        </div>

        <ButtonScroll label="LEARN MORE" target="#pds-offer" />
      </Section>

      <Section classNameInner="!text-left lg:!max-w-screen-xl">
        <h2 className="lg:text-center">
          Understanding Yourself Is Just the First Step—Why Patterns Feel So Hard to Break
        </h2>

        <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center">
          <Image
            alt="An elderly woman sitting on a couch with her arms behind her back, looking upwards and smiling."
            className="mb-6 w-full"
            src="/images/AttachmentQuizResults/elderly-woman-couch.png"
            width={343}
            height={211}
          />

          <div>
            <p>
              Recognizing your attachment style is powerful. It helps you understand why you react
              the way you do in relationships—and where those reactions come from.{' '}
            </p>

            <p>
              But insight alone isn’t enough to change a pattern that’s been running in the
              background for years. That’s because{' '}
              <strong>your relationship struggles aren’t just conscious decisions.</strong> They’re
              deeply wired into your subconscious mind.
            </p>

            <p className="mb-0">And your subconscious isn’t thinking—it’s protecting.</p>

            <ul className="mb-4 pl-4 !list-disc">
              {attachmentStyleConfig.subsconsciousListItems.map((item, i) => (
                <li key={`subconscious_li_${i}`}>{item}</li>
              ))}
            </ul>

            <p>
              So, even though you might understand your patterns, you can still find yourself drawn
              to relationships that reinforce them instead of healing them.
            </p>

            <div className="flex p-4 rounded-lg bg-pink-auxiliary text-primary">
              <FontAwesomeIcon icon={faSparkles} />

              <p className="mb-0 ml-2">That’s why real change requires more than awareness.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-green-light" classNameInner="lg:!max-w-screen-xl">
        <h2>The Three Essential Elements for Real, Lasting Change</h2>

        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mb-6">
          <div className="default-padding flex bg-white rounded-2xl shadow-centered-card mb-4 text-left lg:py-4 xl:py-8 xl:px-8">
            <FontAwesomeIcon
              className="mr-2 mt-[2px] text-white bg-black p-1 px-[6px] rounded-sm"
              icon={fa1}
              size="xs"
            />

            <div>
              <p>
                <strong>The Tools to Support Change</strong>
              </p>

              <p>
                <strong>
                  While your patterns may be subconscious, there are conscious actions that can
                  interrupt and reshape them.
                </strong>
              </p>

              <p>
                These tools give you a way to respond differently and actively shift your patterns
                to healthier ones.
              </p>
            </div>
          </div>

          <div className="default-padding flex bg-white rounded-2xl shadow-centered-card mb-4 text-left lg:py-4 xl:py-8 xl:px-8">
            <FontAwesomeIcon
              className="mr-2 mt-[2px] text-white bg-black p-1 px-[6px] rounded-sm"
              icon={fa2}
              size="xs"
            />

            <div>
              <p>
                <strong>A Safe, Judgment-Free Environment</strong>
              </p>

              <p>
                <strong>
                  Real change begins when you feel supported, understood, and accepted.
                </strong>
              </p>

              <p>
                That’s when your guard softens, your body exhales, and healing becomes possible.
              </p>
            </div>
          </div>

          <div className="default-padding flex bg-white rounded-2xl shadow-centered-card mb-4 text-left lg:py-4 xl:py-8 xl:px-8">
            <FontAwesomeIcon
              className="mr-2 mt-[2px] text-white bg-black p-1 px-[6px] rounded-sm"
              icon={fa3}
              size="xs"
            />

            <div>
              <p>
                <strong>Practice in Real Time</strong>
              </p>

              <p>
                <strong>
                  Change doesn't happen through learning alone. It takes repeated, consistent
                  practice.
                </strong>
              </p>

              <p>
                Once you begin using new tools in real situations, your nervous system slowly learns
                that it’s safe to do things differently. With time, new patterns start to feel more
                familiar—and eventually, more natural than the old ones.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xl font-ssp">
          <em>
            <strong>
              So if those are the ingredients for real change, the next question is simple: where do
              you actually find them?
            </strong>
          </em>
        </p>
      </Section>

      <PDSResultsOfferSection />
    </Page>
  )
}
