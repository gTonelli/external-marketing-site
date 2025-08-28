// utils
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { SEGMENTED_RESULTS_PAGE_CONFIG } from './config'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'

// styles
import '@/styles/default-styles.css'
import { externalRoutes } from '@/utils/constants'
import Link from 'next/link'
import { Button } from '@/components/Button/Button'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@awesome.me/kit-545b942488/icons/classic/solid'

export type TParams = { params: { style: 'fa' } }

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }]
}

export default function SegmentedResultsPage({ params }: TParams) {
  const config = SEGMENTED_RESULTS_PAGE_CONFIG[params.style]

  return (
    <Page page_name={`Segmented Results Page - ${params.style}`}>
      <Section className="bg-gradient-to-b from-pink-auxiliary via-white to-white">
        <h1>{config.heroSection.heading}</h1>

        <p className="tracking-widest font-bold">{config.heroSection.subheading}</p>

        <div className="bg-white rounded-20 p-4 lg:grid lg:grid-cols-2 lg:gap-8 lg:p-8">
          <VideoThumbnail
            className="lg:rounded-20"
            srcUrl={config.heroSection.videoUrl}
            thumbnailUrl="AttachmentQuizResults/thais-writing.jpg"
          />

          <div className="text-left">
            <h2 className="text-center lg:text-left">{config.heroSection.videoHeading}</h2>

            {config.heroSection.body.map((text, i) => (
              <p key={`hero_body_text_${i}`}>{text}</p>
            ))}
          </div>
        </div>

        <CheckoutLink label="START YOUR PERSONALIZED HEALING JOURNEY" />
      </Section>

      <Section
        className="bg-green-7"
        classNameInner="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <Image
          alt="A couple smiling at each other on the couch and high-fiving"
          className="w-full h-auto rounded-20"
          width={343}
          height={267}
          quality={90}
          src="/images/SegmentedResultsPages/high-fiving-couple.jpg"
        />

        <div>
          <h2>{config.sectionTwo.heading}</h2>

          <p>
            {config.sectionTwo.body.map((text, i) => (
              <p key={`serction_two_text_${i}`}>{text}</p>
            ))}
          </p>
        </div>
      </Section>

      <Section>
        <h2>Does This Sound Like You?</h2>

        <div className="text-left mb-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-x-8">
          {config.sectionThree.listItems.map((text, i) => (
            <div key={`section_three_list_item_${i}`} className="grid grid-cols-[20px_1fr] gap-x-4">
              <FontAwesomeIcon
                size="xs"
                className="text-white rounded-full bg-success px-[6px] py-[5px] relative top-1"
                icon={faCheck}
              />

              <p>{text}</p>
            </div>
          ))}
        </div>

        <CheckoutLink label="START HEALING TODAY" />
      </Section>

      <Section className="!p-0">
        <Image
          className="w-full h-[300px] object-cover object-right"
          alt="A woman smiling on her tablet"
          width={375}
          height={300}
          src="/images/SegmentedResultsPages/woman-smiling-on-tablet.jpg"
          quality={100}
        />
      </Section>
    </Page>
  )
}

function CheckoutLink({ label }: { label: string }) {
  return (
    <Link href={externalRoutes.checkoutRegularSubscription}>
      <Button label={label} />
    </Link>
  )
}
