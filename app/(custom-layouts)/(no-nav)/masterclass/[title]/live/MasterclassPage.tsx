'use client'
// core
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
// components
import { Section } from '@/components/Section'
import { VideoStream } from '@/components/Video/variants/VideoStream'
import { MasterclassPricing } from '@/components/Masterclass/MasterclassPricing'
import { FloatingNavigation } from '@/components/Masterclass/FloatingNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { List } from '@/components/List'
import { faCheck, faCircleStar } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { Faq } from '@/components/Faq/Faq'
import { CarouselMasterclass } from '@/components/Carousel/variants/CarouselMasterclass'
import { CarouselDefault } from '@/components/Carousel/variants/CarouselDefault'
// config
import { CONFIG } from './config'
import { TMasterclassTitle, COMMON_CONFIG as commonConfig } from '../../config'
// modules
import { Storage } from '@/modules/Storage'
import Mixpanel from '@/modules/Mixpanel'
// utils
import { Regexes } from '@/utils/constants'
// styles
import '@/styles/default-styles.css'
import '../../style.css'

interface IMasterclassPageProps {
  title: TMasterclassTitle
  isLive?: boolean
}

export const MasterclassPage = ({ title, isLive = true }: IMasterclassPageProps) => {
  const config = CONFIG[title]
  const searchParams = useSearchParams()
  const userEmail = Storage.get('lastUserEmail') || searchParams.get('email')
  const [pageRevealed, setPageRevealed] = useState(Storage.get(`${title}-mcvp`) !== null)

  useEffect(() => {
    const email = searchParams.get('email')
    if (email && Regexes.email.test(email) && Storage.get('lastUserEmail') === null) {
      Mixpanel.setUser(email)
      Storage.set('lastUserEmail', email)
    }
  }, [searchParams])

  const onVideoStarted = () => {
    if (isLive) {
      const eventTracked = Storage.get(`${title}-mcvs`) !== null
      if (!eventTracked && userEmail) {
        Storage.set(`${title}-mcvs`, true)
        fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/activecampaign-user-tag`, {
          method: 'POST',
          credentials: 'include',
          keepalive: true,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: userEmail,
            userTag: `${title}-masterclass-video-watched`,
          }),
        })
      }
    }
  }

  const onVideoProgress = (progress: number) => {
    if (progress === 25) {
      const eventTracked = Storage.get(`${title}-mcvp`) !== null
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

        <VideoStream
          type={`${title} masterclass`}
          videoId={config.hero.videoId}
          thumbnailSrc={config.hero.thumbnailSrc}
          onVideoStarted={onVideoStarted}
          onVideoProgress={onVideoProgress}
        />
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
                <MasterclassPricing classNameFooter="!text-gray-800" masterclassTitle={title} />
              </div>
            </div>

            <div className="hidden relative w-full lg:block">
              <Image
                priority
                className="w-full h-auto"
                src={config.offer.imageDesktop}
                alt={config.offer.imageDesktopAlt}
                width={1440}
                height={460}
                quality={100}
                sizes="100vw"
              />

              <div className="absolute max-w-96 left-[60%] bottom-0 z-10">
                <MasterclassPricing classNameFooter="!text-gray-800" masterclassTitle={title} />
              </div>
            </div>
          </Section>

          <FloatingNavigation
            links={config.floatingNavLinks}
            ctaLabel="BECOME A MEMBER"
            ctaHref="#pricing"
          />

          <Section id="about-this-program" classNameInner="!text-left">
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

              <div className="w-full lg:col-span-5 lg:ml-auto lg:pl-6">
                <div className="w-full min-h-fit flex flex-col items-center lg:max-w-96">
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

          <Section id="what-you-will-learn" classNameInner="!text-left">
            <h2>{config.whatYouWillLearn.title}</h2>

            <List
              icon={faCheck}
              classNameIcon="text-primary mt-1"
              listItems={config.whatYouWillLearn.learnings}
            />
          </Section>

          <Section id="meet-thais-gibson" classNameInner="grid gap-4 lg:grid-cols-2">
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
              <h2>{commonConfig.thais.title}</h2>

              {commonConfig.thais.copy.map((copy, index) => (
                <p key={`thais_copy_${index}`}>{copy}</p>
              ))}

              <p className="text-xl">
                <strong>{commonConfig.thais.credentials.title}</strong>
              </p>

              {commonConfig.thais.credentials.list.map((item, idx) => (
                <div key={`thais_credentials_copy_${idx}`} className="flex gap-4">
                  <div>
                    <FontAwesomeIcon icon={faCircleStar} className="text-lg text-primary mt-1" />
                  </div>

                  <div>
                    <p className="text-lg">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </Section>

          <Section className="!mx-0 !px-0" classNameInner="!max-w-full !p-0 !m-0">
            <div className="flex justify-center p-4 lg:hidden">
              <Image
                src="/images/Masterclass/media-collab.png"
                alt="Thais Gibson collaborating with other experts"
                width={314}
                height={495}
                quality={100}
              />
            </div>

            <div className="hidden items-center justify-evenly p-4 lg:flex">
              <Image
                src="/images/Masterclass/media-1.png"
                alt="Thais Gibson on a podcast"
                width={230}
                height={230}
                quality={100}
              />

              <Image
                src="/images/Masterclass/media-2.png"
                alt="Thais Gibson on a podcast"
                width={230}
                height={295}
                quality={100}
              />

              <Image
                src="/images/Masterclass/media-3.png"
                alt="Thais Gibson with Mel Robbins"
                width={344}
                height={475}
                quality={100}
              />

              <Image
                src="/images/Masterclass/media-4.png"
                alt="Thais Gibson portrait"
                width={230}
                height={295}
                quality={100}
              />

              <Image
                src="/images/Masterclass/media-5.png"
                alt="Thais Gibson with Jay Shetty"
                width={230}
                height={230}
                quality={100}
              />
            </div>
          </Section>

          <Section id="student-stories" classNameInner="!text-left">
            <h2>{config.studentStories.title}</h2>

            <div className="block lg:hidden">
              <CarouselDefault>
                {commonConfig.studentStories.map((item, index) => (
                  <div
                    key={`testimonial_${index}`}
                    className="h-full bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center">
                    <div className="min-w-72 max-w-72 w-full mb-4">
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

            <div className="hidden lg:grid gap-6 lg:grid-cols-3">
              {commonConfig.studentStories.map((item, index) => (
                <div
                  key={`testimonial_${index}`}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col items-center">
                  <div className="min-w-72 max-w-72 w-full mb-4">
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
            id="membership"
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

            <div className="w-full lg:w-fit">
              <MasterclassPricing classNameFooter="!text-gray-800" masterclassTitle={title} />
            </div>
          </Section>

          <Section>
            <h2>{commonConfig.app.title}</h2>

            <p>{commonConfig.app.copy}</p>

            <div className="rounded-xl overflow-hidden mb-4">
              <Image
                src={commonConfig.app.image}
                alt={commonConfig.app.imageAlt}
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

          <Section className="!p-0" classNameInner="!max-w-full !p-0 !m-0">
            <div className="!max-w-5xl mx-auto mb-8">
              <h2>{commonConfig.courseCarousel.title}</h2>

              {commonConfig.courseCarousel.copy.map((copy, index) => (
                <p key={`course_carousel_copy_${index}`}>{copy}</p>
              ))}
            </div>

            <CarouselMasterclass />
          </Section>

          <Section>
            {config.features.map((item, index) => (
              <div key={`feature_${index}`} className="mb-12">
                <h2>{item.title}</h2>

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
            <h2>{commonConfig.media.title}</h2>

            <p>{commonConfig.media.copy}</p>

            <div className="w-full bg-white rounded-lg shadow-lg p-4 mb-8">
              <VideoStream
                type={`${title} masterclass media pr`}
                videoId={commonConfig.media.videoId}
                thumbnailSrc={commonConfig.media.videoThumbnail}
              />
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {commonConfig.media.articles.map((article, index) => (
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
            <h2>What Our Members Say About The Personal Development School</h2>

            <div className="block lg:hidden">
              <CarouselDefault>
                {commonConfig.studentStories.slice(3).map((item, index) => (
                  <div
                    key={`testimonial_${index}`}
                    className="h-full bg-white rounded-2xl border border-gray-200 p-6 flex flex-col items-center">
                    <div className="min-w-72 max-w-72 w-full mb-4">
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

            <div className="hidden lg:grid gap-6 lg:grid-cols-3">
              {commonConfig.studentStories.slice(3).map((item, index) => (
                <div
                  key={`testimonial_${index}`}
                  className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex flex-col items-center">
                  <div className="min-w-72 max-w-72 w-full mb-4">
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
              <MasterclassPricing classNameFooter="!text-gray-800" masterclassTitle={title} />
            </div>
          </Section>

          <Section className="bg-white-secondary" classNameInner="flex flex-col gap-8 lg:flex-row">
            <div className="text-left lg:flex-1">
              <h2>{config.faqs.title}</h2>

              <p>{config.faqs.copy}</p>
            </div>

            <div className="text-left lg:flex-2">
              <Faq faq={commonConfig.faqs} includeHeading={false} className="!my-0" />
            </div>
          </Section>
        </>
      )}

      <Section classNameInner="!text-left">
        <h2>{config.timestamps.title}</h2>

        {config.timestamps.items.map((item, index) => (
          <p key={`timestamp_${index}`}>
            <span>
              <FontAwesomeIcon icon={faCheck} className="text-primary mr-2" />
            </span>
            {item}
          </p>
        ))}
      </Section>

      <Section classNameInner="grid gap-4 lg:grid-cols-2">
        <div className="text-left">
          <h2>{commonConfig.thais.title}</h2>

          {commonConfig.thais.copy.map((copy, index) => (
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
