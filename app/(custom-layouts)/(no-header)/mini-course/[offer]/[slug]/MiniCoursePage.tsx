// core
import Image from 'next/image'
// components
import { Section } from '@/components/Section'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { VideoStream } from '@/components/Video/variants/VideoStream'
import { List } from '@/components/List'
import { faCheckCircle, faInfoCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// config
import { MINI_COURSE_CONFIG, TMiniCoursePageOffer, TMiniCoursePageSlugs } from './config'
// utils
import { externalRoutes } from '@/utils/constants'

interface IMiniCoursePageProps {
  offer: TMiniCoursePageOffer
  slug: TMiniCoursePageSlugs
}

export const MiniCoursePage = ({ offer, slug }: IMiniCoursePageProps) => {
  const common = MINI_COURSE_CONFIG['common']
  const config = MINI_COURSE_CONFIG['versions'][slug]
  const checkoutUrl = externalRoutes.checkout7DayTrial.concat(
    '-mec',
    offer === 'offer' ? '-o' : '-wo',
    `-${slug}`
  )

  return (
    <>
      <Section
        className="bg-gradient-to-b from-primary-light-25 to-transparent"
        classNameInner="!max-w-5xl flex flex-col items-center mx-auto">
        <Image
          alt="PDS logo"
          src="/images/pds-logo-stacked-right-primary.png"
          width={200}
          height={73}
        />

        <h1 className="mt-8 mb-4">{config.banner.h1}</h1>

        {config.banner.copy1.map((lineItem, idx) => (
          <p key={`course_banner_copy1_${idx}`} className="mb-4">
            {lineItem}
          </p>
        ))}

        <div className="w-full h-fit my-4">
          {offer === 'offer' ? (
            <VideoStream
              thumbnailSrc={config.banner.videoThumbnail}
              thumbnailAlt={config.banner.videoThumbnailAlt}
              videoId={config.banner.videoSrc}
            />
          ) : (
            <VideoStream
              thumbnailSrc={config.banner.videoVariantThumbnail}
              thumbnailAlt={config.banner.videoVariantThumbnailAlt}
              videoId={config.banner.videoVariantSrc}
            />
          )}
        </div>

        <div className="text-left">
          {config.banner.copy2.map((lineItem, idx) => (
            <p key={`course_banner_copy2_${idx}`} className="mb-4">
              {lineItem}
            </p>
          ))}
        </div>
      </Section>

      <Section classNameInner="!max-w-6xl bg-gradient-to-b from-blue-lightest-50 from-25% to-primary-light-25 to-100% rounded-xl p-6 mx-auto">
        <h2 className="mb-4">{config.offer.h2}</h2>

        {config.offer.copy.map((lineItem, idx) => (
          <p key={`course_offer_copy_${idx}`} className="mb-4">
            {lineItem}
          </p>
        ))}

        <div className="grid gap-4 my-8 lg:grid-cols-2">
          <div>
            <Image
              alt="Image of a lady and a couple with PDS feature floating as a callout on top of those images."
              src="/images/MiniCourse/pds-features.png"
              width={486}
              height={348}
              quality={100}
              sizes="100vw"
            />
          </div>

          <div className="text-left">
            <p className="mb-4">{common.features.copy}</p>

            <List
              classNameIcon="!text-primary mt-1"
              classNameListItems="mb-4"
              icon={faCheckCircle}
              listItems={common.features.list}
            />

            <p>
              <strong>{config.offer.hook}</strong>
            </p>
          </div>
        </div>

        <ButtonCheckout href={checkoutUrl} label={config.offer.ctaLabel} />

        <div className="text-left bg-white rounded-lg p-4 mt-8">
          <p>
            <span>
              <FontAwesomeIcon className="!text-primary mr-2" icon={faInfoCircle} />
            </span>

            <span>
              <em>{common.disclaimer}</em>
            </span>
          </p>
        </div>
      </Section>
    </>
  )
}
