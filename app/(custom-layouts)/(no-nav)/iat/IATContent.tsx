// core
import Image from 'next/image'
// components
import { Section } from '@/components/Section'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { List } from '@/components/List'
import { IATTestimonialSection } from '@/components/IAT/IATTestimonialSection'
import { IATHigherLevelBookingButton } from '@/components/IAT/IATHigherLevelBookingButton'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { IATPriceCardSection } from '@/components/IAT/IATPriceCardSection'
import { IATCertificationCoaches } from '@/components/IAT/IATCertificationCoaches'
import { IATFAQ } from '@/components/IAT/IATFAQ'
import { IATFormats } from '@/components/IAT/IATFormats'
import { IATOfferFeatures } from '@/components/IAT/IATOfferFeatures'
import { IATProgramItinerary } from '@/components/IAT/IATProgramItinerary'
import { IATTestimonialVideo } from '@/components/IAT/IATTestimonialVideo'
import { IATTrustbar } from '@/components/IAT/IATTrustbar'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// config
import { IAT_CONFIG as CONFIG } from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
import { InlineHigherLevelWidget } from '@/components/InlineHigherLevelWidget'

interface IIATContentProps {
  isVariant?: boolean
}

export function IATContent({ isVariant = false }: IIATContentProps) {
  return (
    <>
      <Section
        className="bg-gradient-to-b from-[#d7e7ea] to-white"
        classNameInner="!max-w-4xl mx-auto py-8">
        <h1 className="mb-8">{CONFIG.banner.title}</h1>

        <div className="max-w-3xl mx-auto mb-8">
          <p className="tracking-33">
            <strong>{CONFIG.banner.subtitle}</strong>
          </p>

          <p>{CONFIG.banner.copy1}</p>

          <p>{CONFIG.banner.copy2}</p>

          <p>
            <strong>{CONFIG.banner.copy3}</strong>
          </p>
        </div>

        <ButtonScroll target="#click-purchase-target" label="BECOME A COACH" />
      </Section>

      <Section>
        <div className="w-fit bg-white rounded-2xl shadow-xl p-4 mx-auto -mt-8 mb-16">
          <VideoThumbnail
            className="w-fit"
            srcUrl="https://storage.googleapis.com/pds_videos/Integrated_Attachment_Theory_2023.mp4"
            thumbnailUrl="/AttachmentQuizResults/video-thumbnail.jpg"
            thumbnailAlt={`A video by Thais Gibson about the Integrated Attachment Theory`}
            type="iat-intro"
          />
        </div>

        <h2>{CONFIG.intro.title}</h2>

        <div className="grid gap-8 text-left mb-8 lg:grid-cols-2">
          <div>
            <p>{CONFIG.intro.copy1}</p>

            <p>{CONFIG.intro.copy2}</p>
          </div>

          <div>
            <p>{CONFIG.intro.copy3}</p>

            <p>{CONFIG.intro.copy4}</p>
          </div>
        </div>

        <IATHigherLevelBookingButton label="BOOK A DISCOVERY CALL" />
      </Section>

      {isVariant && (
        <>
          <Section>
            <div className="flex flex-col gap-8 text-left mb-8 lg:flex-row">
              <div className="w-full lg:w-1/3">
                <Image
                  alt="Coaching Shortcoming Image"
                  className="w-full h-auto"
                  src={CONFIG.variant.coachingShortcomingSection.image}
                  width={256}
                  height={256}
                  quality={100}
                />
              </div>

              <div className="w-full lg:w-2/3">
                <h2>{CONFIG.variant.coachingShortcomingSection.h2}</h2>

                {CONFIG.variant.coachingShortcomingSection.copy.map((paragraph, index) => (
                  <p key={`coaching_shortcoming_${index}`}>{paragraph}</p>
                ))}
              </div>
            </div>
          </Section>

          <Section>
            <div className="flex flex-col gap-8 text-left mb-8 lg:flex-row">
              <div className="w-full lg:w-3/4">
                <h2>{CONFIG.variant.iatExplanationSection.h2}</h2>

                {CONFIG.variant.iatExplanationSection.copy.map((paragraph, index) => (
                  <p key={`iat_explanation_${index}`}>{paragraph}</p>
                ))}
              </div>

              <div className="w-full lg:w-1/4">
                <Image
                  alt="IAT Explanation Image"
                  className="w-full h-auto"
                  src={CONFIG.variant.iatExplanationSection.image}
                  width={256}
                  height={256}
                  quality={100}
                />
              </div>
            </div>
          </Section>

          <Section>
            <h2>{CONFIG.variant.iatWorkingStepsSection.h2}</h2>

            <p>
              <strong>{CONFIG.variant.iatWorkingStepsSection.copy}</strong>
            </p>

            <div className="grid gap-8 text-left my-8 lg:grid-cols-3">
              {CONFIG.variant.iatWorkingStepsSection.steps.map((step, index) => (
                <div
                  key={`iat_working_step_${index}`}
                  className={cx('rounded-2xl p-4', step.bgColor)}>
                  <p className="font-bold tracking-33 mb-4">
                    STEP
                    <span className="ml-2 inline-block">
                      <FontAwesomeIcon className="text-xl mt-1" icon={step.icon} />
                    </span>
                  </p>

                  <p>
                    <strong>{step.subtitle}</strong>
                  </p>

                  {step.copy.map((item, idx) => (
                    <p key={`iat_working_step_copy_${idx}`}>{item}</p>
                  ))}

                  {step.list && <List className="!list-decimal" listItems={step.list} />}

                  {step.additionalCopy &&
                    step.additionalCopy.map((item, idx) => (
                      <p key={`iat_working_step_additional_${idx}`} className="mt-4">
                        {item}
                      </p>
                    ))}
                </div>
              ))}
            </div>

            <IATHigherLevelBookingButton label="BOOK A DISCOVERY CALL" />
          </Section>
        </>
      )}

      <Section className="bg-pink-auxiliary">
        <h2>{CONFIG.learn.title}</h2>

        <p>{CONFIG.learn.copy1}</p>

        <p>{CONFIG.learn.copy2}</p>

        <div className="max-w-4xl grid gap-8 text-left mx-auto mt-8 lg:grid-cols-2">
          <div className="mx-auto">
            <Image
              alt="A Girl Using a Laptop Mockup"
              className="lg:w-108"
              src="/images/IATPage/initial-weeks-mockup.png"
              width={351}
              height={526}
              quality={100}
            />
          </div>

          <div>
            <p>
              <strong>{CONFIG.learn.listTitle}</strong>
            </p>

            <List
              classNameIcon="text-primary"
              icon={faCheckCircle}
              listItems={CONFIG.learn.learningOutcomes}
            />

            <IATHigherLevelBookingButton label="BOOK A DISCOVERY CALL" />
          </div>
        </div>
      </Section>

      <IATTrustbar />

      <Section>
        <h2>{CONFIG.formats.title}</h2>

        <p className="tracking-33">
          <strong>{CONFIG.formats.subtitle}</strong>
        </p>

        <p>{CONFIG.formats.copy}</p>

        <hr className="my-8 border-t-2 border-gray-300" />

        <IATFormats />

        <ButtonScroll target="#click-purchase-target" label="GET STARTED NOW" />
      </Section>

      <Section>
        <div className="grid gap-8 text-left mb-8 lg:grid-cols-2">
          <div>
            <h2>{CONFIG.certification.title}</h2>

            <List
              classNameIcon="text-primary"
              icon={faCheckCircle}
              listItems={CONFIG.certification.forYouBullets}
            />

            <p>
              <strong>{CONFIG.certification.copy}</strong>
            </p>

            <ButtonScroll target="#click-purchase-target" label="ENROLL TODAY" />
          </div>

          <div>
            <Image
              alt="A Girl With A Notepad Mockup"
              className="w-full hidden lg:block lg:w-[466px]"
              src="/images/IATPage/certification-mockup.png"
              width={378}
              height={453}
            />
          </div>
        </div>

        <IATCertificationCoaches />
      </Section>

      <IATTestimonialSection />

      <IATOfferFeatures />

      <div id="click-purchase-target" className="text-center mt-16 mb-12 scroll-m-16 lg:mb-18">
        <IATPriceCardSection />

        <p className="text-2xl mt-4 mb-8 mx-6">Schedule a Free Call to Learn More</p>

        <IATHigherLevelBookingButton />
      </div>

      <IATProgramItinerary />

      <Section classNameInner="grid gap-8 lg:grid-cols-2">
        <div>
          <Image
            alt="IAT Certificate Framed on a Wall"
            className="w-full lg:w-[473px] lg:h-[400px]"
            src="/images/IATPage/iat-certfication.png"
            width={351}
            height={297}
            quality={100}
          />
        </div>

        <div className="text-left">
          <h2>{CONFIG.certificationTimeline.title}</h2>

          <p className="mb-8">{CONFIG.certificationTimeline.copy}</p>

          <ButtonScroll target="#click-purchase-target" label="GET STARTED NOW" />
        </div>
      </Section>

      <Section classNameInner="grid gap-8 lg:grid-cols-2">
        <div className="text-left">
          <h2>{CONFIG.thais.title}</h2>

          {CONFIG.thais.copy.map((paragraph, index) => (
            <p key={`thais_section_${index}`}>{paragraph}</p>
          ))}
        </div>

        <div>
          <Image
            alt="Thais Gibson's Portrait"
            className="w-full lg:w-[500px]"
            src="/images/IATPage/thais-portrait.png"
            width={351}
            height={381}
          />
        </div>
      </Section>

      <Section className="bg-pink-auxiliary" classNameInner="py-9 lg:pt-1 lg:pb-4">
        <h2>{CONFIG.impact.title}</h2>

        <div className="grid gap-8 text-left lg:grid-cols-2">
          <div>
            <Image
              alt="A Man Indulged in Deep Thinking"
              className="w-full"
              src="/images/IATPage/iat-impact.png"
              width={351}
              height={228}
            />
          </div>

          <div className="text-center lg:text-left">
            <p className="mt-4">
              <strong>{CONFIG.impact.listTitle}</strong>
            </p>

            <ul className="font-effra text-left mt-4 ml-4 mb-8 list-decimal">
              {CONFIG.impact.bullets.map((copy, index) => (
                <li key={`imapct_${index}`}>
                  <p>{copy}</p>
                </li>
              ))}
            </ul>

            <p>{CONFIG.impact.copy}</p>

            <ButtonScroll label="ENROLL TODAY" target="#click-purchase-target" />
          </div>
        </div>
      </Section>

      <IATTestimonialVideo />

      <IATFAQ />
    </>
  )
}
