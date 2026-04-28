// core
import { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button/Button'
import { FloatingNavigation } from '@/components/Masterclass/FloatingNavigation'
import { TrailerButton } from '@/components/Masterclass/TrailerButton'
import { CarouselDefault } from '@/components/Carousel/variants/CarouselDefault'
import { TrustbarMasterclass } from '@/components/Trustbar/variants/TrustbarMasterclass'
import { Faq } from '@/components/Faq/Faq'
import { faCheck, faCircleStar } from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import {
  SEO_CONFIG,
  COMMON_CONFIG as commonConfig,
  TMasterclassTitle,
  MasterclassTitleSlugs,
} from '../config'
import { CONFIG } from './config'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// styles
import '@/styles/default-styles.css'
import '../style.css'

const MasterclassRegistrationForm = dynamic(
  () => import('@/components/Forms/MasterclassRegistrationForm'),
  { ssr: false }
)

export const dynamicParams = false

interface IMasterclassPageParams {
  params: Promise<{
    title: TMasterclassTitle
  }>
}

export function generateStaticParams(): { title: TMasterclassTitle }[] {
  return MasterclassTitleSlugs
}

export async function generateMetadata({ params }: IMasterclassPageParams): Promise<Metadata> {
  const { title } = await params

  return {
    ...SEO_CONFIG[title].registrationPage,
    metadataBase: new URL(`https://attachment.personaldevelopmentschool.com/masterclass/${title}`),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/',
      },
    },
  }
}

export default async function MasterclassRegistrationPage({ params }: IMasterclassPageParams) {
  const { title } = await params
  const config = CONFIG[title]

  return (
    <Page page_name={`Masterclass Registration Page - ${title}`}>
      <Section
        className="relative min-h-fit !p-0"
        classNameInner="relative !min-w-full min-h-fit !p-0 !m-0 lg:min-h-screen">
        <div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="hidden absolute bottom-0 w-full h-full object-cover object-center max-w-none sm:block">
            <source src={config.hero.bgVideoSrc} type="video/mp4" />
          </video>

          <Image
            priority
            className="sm:hidden absolute bottom-0 w-full h-full object-cover object-top"
            src={config.hero.bgImageSrc}
            alt="hero image of masterclass"
            width={375}
            height={600}
            sizes="100vw"
            quality={100}
          />

          <div className="masterclass-header-bg-overlay"></div>
        </div>

        <div className="relative section-inner-wrapper min-h-fit flex flex-col justify-start items-start gap-7 py-24 mx-auto lg:min-h-screen lg:justify-end lg:py-48">
          <div className="w-full min-h-fit flex flex-col text-left text-white ml-0 p-4 lg:w-4/5">
            <h3 className="!text-base !font-effra uppercase tracking-33">{config.hero.h3}</h3>

            <h1 className="!text-4xl lg:!text-6xl">{config.hero.h1}</h1>

            <h2 className="!text-lg !font-effra">{config.hero.h2}</h2>
          </div>

          <div className="flex flex-row gap-4 px-4">
            <Link href="#reserve-my-spot">
              <Button className="masterclass-yellow-cta" label="RESERVE MY SPOT NOW" />
            </Link>

            <TrailerButton
              title={title}
              videoId={config.hero.trailerVideoId}
              thumbnailSrc={config.hero.trailerThumbnailSrc}
            />
          </div>
        </div>
      </Section>

      <FloatingNavigation links={config.floatingNavLinks} />

      <Section id="what-you-will-learn">
        <div className="min-h-fit gap-6 lg:grid lg:grid-cols-12">
          <div className="w-full order-1 lg:col-span-5 lg:order-2 lg:pl-6 lg:ml-auto">
            <div className="w-full min-h-fit z-20 pt-4 pb-8 lg:max-w-96 lg:sticky lg:top-0 lg:pt-24 ">
              <MasterclassRegistrationForm masterclassTitle={title} />
            </div>
          </div>

          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="grid gap-6 pb-18 md:grid-cols-3">
              {config.whatYouLearn.stats.map((stat, index) => (
                <div
                  key={`masterclass_stats_${index}`}
                  className={cx(
                    'flex items-center gap-2 rounded-2xl text-left p-6 md:flex-col md:items-start',
                    stat.backgroundColor
                  )}>
                  <div>
                    <FontAwesomeIcon
                      icon={stat.icon}
                      className="text-xl text-blue-tertiary opacity-80"
                      width={24}
                      height={24}
                    />
                  </div>

                  <p className="!text-3xl text-[#12268A] mb-0">
                    <strong>{stat.label}</strong>
                  </p>

                  <p className="!text-sm text-[#1832B4] mt-2 mb-0 md:mt-0">
                    <strong>{stat.text}</strong>
                  </p>
                </div>
              ))}
            </div>

            <div className="text-left">
              <h2 className="mb-8">{config.whatYouLearn.title}</h2>

              {config.whatYouLearn.learnings.map((item, index) => (
                <div key={`learning_item_${index}`} className="flex gap-4 mb-8">
                  <div>
                    <FontAwesomeIcon icon={faCheck} className="text-xl text-primary mt-1" />
                  </div>

                  <div>
                    <p className="text-xl mb-0">
                      <strong>{item.title}</strong>
                    </p>

                    {item.description.map((copy, idx) => (
                      <p key={`learning_item_description_${idx}`} className="text-lg">
                        {copy}
                      </p>
                    ))}
                  </div>
                </div>
              ))}

              <h2 className="my-8" id="student-stories">
                {config.studentStories.title}
              </h2>

              <div className="block lg:hidden">
                <CarouselDefault>
                  {commonConfig.studentStories.slice(0, 3).map((item, index) => (
                    <div
                      key={`testimonial_${index}`}
                      className="h-full bg-white rounded-2xl border border-gray-200 p-6 flex items-center flex-col">
                      <div className="min-w-72 max-w-72 w-full mb-6">
                        <Image
                          src={item.authorPicture}
                          alt={item.author}
                          width={288}
                          height={288}
                          className="w-72 h-72 rounded-2xl"
                        />
                      </div>

                      <div className="text-left">
                        <p className="text-lg mb-4">{item.quote}</p>

                        <p className="font-bold text-sm mb-0">{item.author}</p>
                      </div>
                    </div>
                  ))}
                </CarouselDefault>
              </div>

              <div className="hidden lg:block">
                {commonConfig.studentStories.slice(0, 3).map((item, index) => (
                  <div
                    key={`testimonial_${index}`}
                    className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 text-left flex mb-8">
                    <div className="min-w-64 max-w-64 w-full">
                      <Image
                        src={item.authorPicture}
                        alt={item.author}
                        width={256}
                        height={256}
                        className="w-60 h-64 object-center rounded-2xl"
                      />
                    </div>
                    <div className="text-left pl-4">
                      <p className="text-lg mb-4">{item.quote}</p>

                      <p className="font-bold text-sm mb-0">{item.author}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="mt-16 mb-8" id="meet-thais-gibson">
                {commonConfig.thais.title}
              </h2>

              <div className="mb-8">
                <Image
                  src={config.thais.imageSrc}
                  alt={config.thais.imageAlt}
                  className="w-full h-auto"
                  width={600}
                  height={300}
                  quality={100}
                  sizes="100vw"
                />
              </div>

              <div className="text-lg">
                {commonConfig.thais.copy.map((item, idx) => (
                  <p key={`thais_gibson_copy_${idx}`}>{item}</p>
                ))}

                <p className="text-xl">
                  <strong>{commonConfig.thais.credentials.title}</strong>
                </p>

                {commonConfig.thais.credentials.list.map((item, idx) => (
                  <div key={`credentials_copy_${idx}`} className="flex gap-4">
                    <div>
                      <FontAwesomeIcon icon={faCircleStar} className="text-lg text-primary mt-1" />
                    </div>

                    <div>
                      <p className="text-lg">{item}</p>
                    </div>
                  </div>
                ))}

                <p className="text-xl mt-8">
                  <strong>{commonConfig.asSeenOn.title}</strong>
                </p>

                <TrustbarMasterclass />
              </div>

              <h2 className="my-8" id="your-learning-journey">
                {config.learningJourney.title}
              </h2>

              {config.learningJourney.steps.map((item, idx) => (
                <div key={`learning_journey_${idx}`} className="mb-12">
                  <div className="mb-4">
                    <Image
                      src={item.imageSrc}
                      alt={item.imageAlt}
                      className="w-full h-auto"
                      width={600}
                      height={300}
                      quality={100}
                      sizes="100vw"
                    />
                  </div>

                  <div className="flex gap-4">
                    <div>
                      <p className="text-4xl font-ssp text-primary mt-1">
                        <strong>{idx + 1}</strong>
                      </p>
                    </div>

                    <div className="text-lg">
                      <p className="!text-2xl">
                        <strong>{item.title}</strong>
                      </p>

                      {item.description.map((copy, idx) => (
                        <p key={`learning_journey_description_${idx}`}>{copy}</p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2>{commonConfig.host.title}</h2>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="text-left">
            {commonConfig.host.copy.map((item, idx) => (
              <p key={`host_copy_${idx}`}>{item}</p>
            ))}
          </div>

          <div className="w-full flex justify-center">
            <Image
              src={commonConfig.host.imageSrc}
              alt={commonConfig.host.imageAlt}
              className="object-cover object-center rounded-2xl"
              width={600}
              height={300}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>
      </Section>

      <Section
        id="faq"
        className="bg-white-secondary"
        classNameInner="gap-6 lg:grid lg:grid-cols-5">
        <div className="text-left lg:col-span-2">
          <h2>{config.faqs.title}</h2>

          <p>{config.faqs.copy}</p>
        </div>

        <div className="min-h-96 lg:col-span-3">
          <Faq faq={commonConfig.faqs} includeHeading={false} className="!my-0" />
        </div>
      </Section>

      <Section id="reserve-my-spot">
        <h2 className="mb-8">{config.reserveMySpot.title}</h2>

        <div className="w-full min-h-96 gap-6 items-stretch lg:grid lg:grid-cols-12">
          <div className="lg:col-span-8 mb-8">
            <Image
              src={config.reserveMySpot.imageSrc}
              alt={config.reserveMySpot.imageAlt}
              className="w-full h-auto"
              width={600}
              height={300}
              quality={100}
              sizes="100vw"
            />
          </div>

          <div className="lg:col-span-4">
            <div className="w-full min-h-fit z-20">
              <MasterclassRegistrationForm masterclassTitle={title} />
            </div>
          </div>
        </div>
      </Section>
    </Page>
  )
}
