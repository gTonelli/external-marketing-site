// core
import Image from 'next/image'
// components
import { Section } from '@/components/Section'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { IATHigherLevelBookingButton } from '@/components/IAT/IATHigherLevelBookingButton'
import { VideoStream } from '@/components/Video/variants/VideoStream'
import { List } from '@/components/List'
import { faCheckCircle, faInfoCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// config
import {
  MINI_COURSE_CONFIG,
  MINI_COURSE_IAT_CONFIG,
  TMiniCoursePageOffer,
  TMiniCoursePageSlugs,
  TMiniCourseIATSlugs,
} from './config'
// utils
import { externalRoutes } from '@/utils/constants'

interface IMiniCoursePageProps {
  offer: TMiniCoursePageOffer
  slug: TMiniCoursePageSlugs | TMiniCourseIATSlugs
  isIATOnly?: boolean
}

export const MiniCoursePage = ({ offer, slug, isIATOnly = false }: IMiniCoursePageProps) => {
  const common = isIATOnly ? MINI_COURSE_IAT_CONFIG['common'] : MINI_COURSE_CONFIG['common']

  const config = isIATOnly
    ? MINI_COURSE_IAT_CONFIG['versions'][slug as TMiniCourseIATSlugs]
    : MINI_COURSE_CONFIG['versions'][slug as TMiniCoursePageSlugs]

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

        <h1 className="text-primary mt-8 mb-4">{config.banner.h1}</h1>

        {config.banner.copy1.map((lineItem, idx) => (
          <p key={`course_banner_copy1_${idx}`} className="mb-4">
            {lineItem}
          </p>
        ))}

        <div className="w-full h-fit my-4">
          {isIATOnly ? (
            <VideoStream
              thumbnailSrc={config.banner.videoThumbnail}
              videoId={config.banner.videoSrc}
            />
          ) : offer === 'intro' ? (
            <VideoStream
              thumbnailSrc={(config.banner as any).videoVariantThumbnail}
              videoId={(config.banner as any).videoVariantSrc}
            />
          ) : (
            <VideoStream
              thumbnailSrc={config.banner.videoThumbnail}
              videoId={config.banner.videoSrc}
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
              alt={common.features.imageAlt}
              src={common.features.image}
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

            {isIATOnly && common.postCopy && <p className="my-4">{common.postCopy}</p>}

            <p>
              <strong>{config.offer.hook}</strong>
            </p>
          </div>
        </div>

        {isIATOnly ? (
          <IATHigherLevelBookingButton label={config.offer.ctaLabel} />
        ) : (
          <ButtonCheckout href={checkoutUrl} label={config.offer.ctaLabel} />
        )}

        {common.disclaimer && (
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
        )}
      </Section>
    </>
  )
}
