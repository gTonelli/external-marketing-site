// components
import { Page } from '@/components/Page'
import { TParams } from '../page'
import { Section } from '@/components/Section'
import { QuizResultsPage } from '../QuizResultsPage'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
// config
import { config as _config } from './config'
// utils
import { getAttachmentStyleText } from '@/utils/functions'
// styles
import './style.css'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import Image from 'next/image'
import { List } from '@/components/List'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSparkles } from '@awesome.me/kit-545b942488/icons/classic/solid'

export default function QuizResultsB({ params }: TParams) {
  const { style: attachmentStyleShort } = params
  const attachmentStyleLong = getAttachmentStyleText(attachmentStyleShort)
  if (attachmentStyleShort === 'sa') {
    return <QuizResultsPage style={attachmentStyleShort} />
  }
  let config = _config[attachmentStyleShort]

  return (
    <Page page_name={`ICP Results Page - ${attachmentStyleShort.toUpperCase()}`}>
      <Section
        className="bg-gradient-to-b from-pink-auxiliary via-white to-white mb-15"
        classNameInner="!max-w-[792px]">
        <h1 className="text-primary !text-5xl">{config.title}</h1>

        <h2>Your Attachment Style Is: {attachmentStyleLong}</h2>

        <p>Don't Miss This Important Step: Watch This Video to Learn More</p>

        <VideoThumbnail
          className="shadow-centered p-4 rounded-20 max-w-[792px] mx-auto mb-6"
          srcUrl={'https://storage.googleapis.com/pds_videos/RoyalRumbleAPshortvideo.mp4'}
          thumbnailAlt="Thais Gibson sitting at a desk smiling and filling in a workbook."
          thumbnailUrl={'AttachmentQuizResults/thais-writing.jpg'}
          type="default"
        />

        <ButtonCheckout label="READY TO CHANGE?" />
      </Section>

      <Section className="mb-15 lg:mb-20" classNameInner="lg:!max-w-[996px]">
        <h2>{config.hookTitle}</h2>

        <p className="font-bold">{config.hookSubtitle}</p>

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
            listItems={config.hookListItems}
            icon={faCircleCheck}
          />
        </div>

        <div className="flex rounded bg-pink-auxiliary text-primary text-left py-2 px-4 mb-4">
          <FontAwesomeIcon className="mr-2 pt-2 lg:pt-0" icon={faSparkles} />

          <span>{config.hookFooter}</span>
        </div>

        <ButtonCheckout label="READY TO CHANGE?" />
      </Section>

      <Section className="relative !pb-60 text-left mb-15 lg:!py-28 lg:!px-56 lg:mb-20 xl:!py-32 2xl:!py-40">
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

      <Section className="mb-15 lg:mb-20" classNameInner="lg:!max-w-[792px]">
        <Image
          alt="A purple speech bubble that has no text, with a hand extended pointed upwards."
          className="mx-auto lg:w-36 lg:h-auto"
          src="/images/AttachmentQuizResults/speech-bubble-hand.svg"
          width={120}
          height={80}
        />

        <h2>
          If You Keep Repeating the Same Relationship Dynamics, It's Not You. It's Your Attachment
          Style
        </h2>

        {config.repeatedPatternsBodyItems.map((text, i) => (
          <p key={`repeated_pattern_${i}`} className="text-left mb-0">
            {text}
          </p>
        ))}

        <p className="mt-4 text-xl font-bold">
          This isn't random. It's a pattern. It's an attachment style and everyone has one. And it
          can be changed.
        </p>
      </Section>
    </Page>
  )
}
