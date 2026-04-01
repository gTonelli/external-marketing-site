'use client'
// core
import Image from 'next/image'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
// components
import { Section } from '@/components/Section'
import { VideoStream } from '@/components/Video/variants/VideoStream'
import { MasterclassPricing } from '@/components/Masterclass/MasterclassPricing'
import { FloatingNavigation } from '@/components/Masterclass/FloatingNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { List } from '@/components/List'
import { faCheck, faSparkles } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { Faq } from '@/components/Faq/Faq'
import { CarouselDefault } from '@/components/Carousel/variants/CarouselDefault'
// config
import { CONFIG } from './config'
import { TMasterclassTitle, COMMON_CONFIG as commonConfig } from '../../config'
// utils
import { Storage } from '@/modules/Storage'
// styles
import '@/styles/default-styles.css'
import '../../style.css'
import { useState } from 'react'

interface IMasterclassPageProps {
  title: TMasterclassTitle
  isLive?: boolean
}

export const MasterclassPage = ({ title, isLive = true }: IMasterclassPageProps) => {
  const config = CONFIG[title]
  const searchParams = useSearchParams()
  const userEmail = Storage.get('lastUserEmail') || searchParams.get('email')
  const [pageRevealed, setPageRevealed] = useState(Storage.get(`${title}-mcvp`) || false)

  const onVideoStarted = () => {
    if (isLive) {
      const eventTracked = Storage.get(`${title}-mcvs`)
      if (!eventTracked && userEmail) {
        Storage.set(`${title}-mcvs`, true)
        fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/activecampaign-user-tag`, {
          method: 'POST',
          body: JSON.stringify({
            email: userEmail,
            userTag: `${title}-masterclass-video-watched`,
          }),
        })
      }
    }
  }

  const onVideoProgress = (progress: number) => {
    if (progress === 25 && !pageRevealed) {
      const eventTracked = Storage.get(`${title}-mcvp`)
      if (!eventTracked) {
        Storage.set(`${title}-mcvp`, true)
        setPageRevealed(true)
      }
    }
  }

  return (
    <>
      <Section>
        <h1>{config.hero.title}</h1>

        <div className="w-full bg-white rounded-lg shadow-lg p-4 mb-4">
          <VideoStream
            videoId={config.hero.videoId}
            thumbnailSrc={config.hero.thumbnailSrc}
            onVideoStarted={onVideoStarted}
            onVideoProgress={onVideoProgress}
          />
        </div>
      </Section>

      {pageRevealed && (
        <>
          <Section className="bg-[#FEF4F4] !py-0" classNameInner="!text-left py-4">
            <p className="text-lg">
              <strong>{config.pageWarning.title}</strong>
            </p>

            <p>{config.pageWarning.copy}</p>
          </Section>

          <Section className="!p-0" classNameInner="!max-w-full !p-0 !m-0">
            <div className="max-w-5xl text-left px-4 py-8 lg:pb-24 mx-auto">
              <p className="tracking-33">
                <strong>{config.offer.label}</strong>
              </p>

              <h2>{config.offer.title}</h2>

              <p>{config.offer.copy}</p>
            </div>

            <div className="block relative w-full lg:hidden">
              <Image
                className="w-full h-auto"
                src={config.offer.imageMobile}
                alt={config.offer.imageMobileAlt}
                width={1000}
                height={460}
                quality={100}
                sizes="100vw"
              />

              <div className="w-full flex justify-center items-center -mt-24 z-10">
                <MasterclassPricing classNameFooter="!text-gray-800" />
              </div>
            </div>

            <div className="hidden relative w-full lg:block">
              <Image
                className="w-full h-auto"
                src={config.offer.imageDesktop}
                alt={config.offer.imageDesktopAlt}
                width={1440}
                height={460}
                quality={100}
                sizes="100vw"
              />

              <div className="absolute max-w-96 left-[60%] bottom-0 z-10">
                <MasterclassPricing classNameFooter="!text-gray-800" />
              </div>
            </div>
          </Section>

          <FloatingNavigation
            links={config.floatingNavLinks}
            ctaLabel="BECOME A MEMBER"
            ctaHref="#pricing"
          />

          <Section classNameInner="!text-left">
            <h2>{config.aboutThisProgram.title}</h2>

            <div className="rounded-xl overflow-hidden mb-4">
              <Image
                src={config.aboutThisProgram.image}
                alt={config.aboutThisProgram.imageAlt}
                className="w-full h-auto"
                width={1000}
                height={460}
                quality={100}
                sizes="100vw"
              />
            </div>

            <div className="min-h-fit gap-6 lg:grid lg:grid-cols-12">
              <div className="text-left lg:col-span-7">
                {config.aboutThisProgram.copy.map((copy, index) => (
                  <p key={`about_this_program_copy_${index}`}>{copy}</p>
                ))}
              </div>

              <div className="w-full col-span-5 ml-auto lg:pl-6">
                <div className="w-full max-w-96 min-h-fit">
                  {config.socialProof.map((item, index) => (
                    <div
                      key={`social_proof_${index}`}
                      className="w-72 flex items-stretch bg-white border border-gray-200 shadow-xl rounded-lg p-6 mb-6">
                      <div
                        className={`w-14 h-14 flex justify-center items-center ${item.iconCircleBg} rounded-full p-4 mr-4`}>
                        <FontAwesomeIcon
                          icon={item.icon}
                          className={`${item.iconColor} text-2xl`}
                        />
                      </div>

                      <div className="flex flex-col justify-center text-left">
                        <h3 className="text-2xl font-bold mb-0">{item.title}</h3>

                        <p className="mb-0">{item.subtitle}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Section>

          <Section classNameInner="!text-left">
            <h2>{config.whatYouWillLearn.title}</h2>

            <List
              icon={faCheck}
              classNameIcon="text-primary mt-1"
              listItems={config.whatYouWillLearn.learnings}
            />
          </Section>

          <Section classNameInner="grid gap-4 lg:grid-cols-2">
            <div>
              <Image
                src={config.thais.image}
                alt={config.thais.imageAlt}
                className="w-full h-auto"
                width={480}
                height={520}
                quality={100}
                sizes="100vw"
              />
            </div>

            <div className="text-left">
              <h2>{config.thais.title}</h2>

              {config.thais.copy.map((copy, index) => (
                <p key={`thais_copy_${index}`}>{copy}</p>
              ))}

              <p className="text-xl">
                <strong>{config.credentials.title}</strong>
              </p>

              {config.credentials.list.map((item, idx) => (
                <div key={`thais_credentials_copy_${idx}`} className="flex gap-4">
                  <div>
                    <FontAwesomeIcon icon={faSparkles} className="text-lg text-primary mt-1" />
                  </div>

                  <div>
                    <p className="text-lg">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section classNameInner="!text-left">
            <h2>{config.studentStories.title}</h2>

            <div className="block lg:hidden">
              <CarouselDefault
                children={commonConfig.studentStories.map((item, index) => (
                  <div
                    key={`testimonial_${index}`}
                    className="h-full bg-white rounded-2xl shadow-xl border border-gray-200 p-6 text-left flex flex-col justify-between">
                    <p className="text-lg mb-4">{item.quote}</p>

                    <p className="font-bold text-sm mb-0">{item.author}</p>
                  </div>
                ))}
              />
            </div>

            <div className="hidden lg:grid gap-6 lg:grid-cols-3">
              {commonConfig.studentStories.map((item, index) => (
                <div
                  key={`testimonial_${index}`}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-left flex flex-col justify-between">
                  <p className="text-lg mb-4">{item.quote}</p>

                  <p className="font-bold text-sm mb-0">{item.author}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section classNameInner="flex flex-col gap-6 bg-blue-lightest rounded-20 p-6 mx-auto lg:flex-row">
            <div className="w-full lg:max-w-48">
              <Image
                src={config.noRiskMembership.image}
                alt={config.noRiskMembership.imageAlt}
                width={200}
                height={200}
              />
            </div>

            <div className="text-left">
              <h2>{config.noRiskMembership.title}</h2>

              {config.noRiskMembership.copy.map((copy, index) => (
                <p key={`no_risk_membership_copy_${index}`}>{copy}</p>
              ))}
            </div>
          </Section>

          <Section
            className="bg-gradient-to-br from-slate-500 via-cyan-900 to-slate-500"
            classNameInner="flex flex-col items-center bg-white shadow-xl rounded-20 gap-8 p-6 lg:flex-row lg:p-16">
            <div className="text-left lg:flex-1">
              <h2>{config.pricing.title}</h2>

              <List
                icon={faCheck}
                classNameIcon="text-primary mt-1"
                classNameListItems="mb-4"
                listItems={config.pricing.items}
              />
            </div>

            <div className="w-fit">
              <MasterclassPricing classNameFooter="!text-gray-800" />
            </div>
          </Section>

          <Section>
            <h2>{config.app.title}</h2>

            <p>{config.app.copy}</p>

            <div className="rounded-xl overflow-hidden mb-4">
              <Image
                src={config.app.image}
                alt={config.app.imageAlt}
                className="w-full h-auto"
                width={1000}
                height={460}
                quality={100}
                sizes="100vw"
              />
            </div>
          </Section>

          <Section>
            <h2>{config.insidePDS.title}</h2>

            {config.insidePDS.copy.map((copy, index) => (
              <p key={`inside_pds_copy_${index}`}>{copy}</p>
            ))}

            <div className="max-w-2xl mx-auto rounded-xl overflow-hidden mb-4">
              <Image
                src={config.insidePDS.image}
                alt={config.insidePDS.imageAlt}
                className="w-full h-auto"
                width={1000}
                height={460}
                quality={100}
                sizes="100vw"
              />
            </div>
          </Section>

          <Section>
            {config.features.map((item, index) => (
              <div key={`feature_${index}`} className="mb-8">
                <h3>{item.title}</h3>

                {item.copy.map((copy, idx) => (
                  <p key={`feature_copy_${idx}`}>{copy}</p>
                ))}

                <div className="grid grid-cols-2 lg:hidden">
                  {item.images.slice(0, 2).map((image, idx) => (
                    <div key={`feature_image_${idx}`}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={320}
                        height={720}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>

                <div className="hidden lg:grid lg:gap-4 lg:grid-cols-3">
                  {item.images.map((image, idx) => (
                    <div key={`feature_image_${idx}`}>
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={320}
                        height={720}
                        className="w-full h-auto"
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </Section>

          <Section className="bg-blue-lightest-50" classNameInner="!max-w-4xl !text-left mx-auto">
            <h2>{config.media.title}</h2>

            <p>{config.media.copy}</p>

            <div className="w-full bg-white rounded-lg shadow-lg p-4 mb-8">
              <VideoStream
                videoId={config.media.videoId}
                thumbnailSrc={config.media.videoThumbnail}
              />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {config.media.articles.map((article, index) => (
                <div
                  key={`media_article_${index}`}
                  className="bg-white text-left rounded-lg shadow-lg p-4">
                  <Image
                    src={article.logo}
                    alt={article.logoAlt}
                    width={64}
                    height={64}
                    className="w-fit h-12 mb-4"
                  />

                  <p className="text-xl">
                    <strong>{article.title}</strong>
                  </p>

                  <p>{article.copy}</p>

                  <Link href={article.linkUrl} target="_blank" className="text-blue-darkest">
                    {article.link}
                  </Link>
                </div>
              ))}
            </div>
          </Section>

          <Section classNameInner="!text-left">
            <h2>What our members say about The Personal Development School</h2>

            <div className="grid gap-6 lg:grid-cols-3">
              {commonConfig.studentStories.map((item, index) => (
                <div
                  key={`testimonial_${index}`}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-left flex flex-col justify-between">
                  <p className="text-lg mb-4">{item.quote}</p>

                  <p className="font-bold text-sm mb-0">{item.author}</p>
                </div>
              ))}
            </div>
          </Section>

          <Section
            id="pricing"
            className="bg-gradient-to-br from-slate-500 via-cyan-900 to-slate-500"
            classNameInner="flex flex-col items-center bg-white shadow-xl rounded-20 gap-8 p-6 lg:flex-row lg:p-16">
            <div className="text-left lg:flex-1">
              <h2>{config.membership.title}</h2>

              {config.membership.copy.map((copy, index) => (
                <p key={`membership_copy_${index}`}>{copy}</p>
              ))}

              <List
                icon={faCheck}
                classNameIcon="text-primary mt-1"
                listItems={config.membership.perks}
              />
            </div>

            <div className="w-fit">
              <MasterclassPricing classNameFooter="!text-gray-800" />
            </div>
          </Section>

          <Section className="bg-white-secondary" classNameInner="flex flex-col gap-8 lg:flex-row">
            <div className="text-left lg:flex-1">
              <h2>Frequently Asked Questions</h2>

              <p>
                Get your questions answered before the Discover, Embrace & Fulfill Your Personal
                Needs Masterclass begins.
              </p>
            </div>

            <div className="text-left lg:flex-2">
              <Faq faq={config.faqs} includeHeading={false} className="!my-0" />
            </div>
          </Section>
        </>
      )}

      <Section classNameInner="grid gap-4 lg:grid-cols-2">
        <div className="text-left">
          <h2>{config.thais.title}</h2>

          {config.thais.copy.map((copy, index) => (
            <p key={`thais_copy_${index}`}>{copy}</p>
          ))}
        </div>

        <div>
          <div>
            <Image
              src={config.thais.image}
              alt={config.thais.imageAlt}
              className="w-full h-auto"
              width={480}
              height={520}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
