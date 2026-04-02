// core
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// components
import { Section } from '@/components/Section'
import { Page } from '@/components/Page'
import { CountdownTimer } from '@/components/CountDownTimer'
import { VideoStream } from '@/components/Video/variants/VideoStream'
import { FloatingNavigation } from '@/components/Masterclass/FloatingNavigation'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Button } from '@/components/Button/Button'
import { Faq } from '@/components/Faq/Faq'
import { Trustbar } from '@/components/Trustbar/Trustbar'
import { CourseLibrary } from '@/components/Masterclass/CourseLibrary'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { MasterclassPricing } from '@/components/Masterclass/MasterclassPricing'
import { List } from '@/components/List'
import {
  faCalendarAlt,
  faClock,
  faSparkles,
  faCircleArrowRight,
  faCheck,
} from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import { CONFIG } from './config'
import {
  MasterclassTitleSlugs,
  SEO_CONFIG,
  COMMON_CONFIG as commonConfig,
  TMasterclassTitle,
} from '../../config'
// styles
import '@/styles/default-styles.css'
import '../../style.css'
import { CarouselDefault } from '@/components/Carousel/variants/CarouselDefault'
import { TrustbarMasterclass } from '@/components/Trustbar/variants/TrustbarMasterclass'

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
    ...SEO_CONFIG[title].secondarySalesPage,
    metadataBase: new URL(
      `https://attachment.personaldevelopmentschool.com/masterclass/${title}/special`
    ),
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/',
      },
    },
  }
}

export default async function MasterclassSecondarySalesPage({ params }: IMasterclassPageParams) {
  const { title } = await params
  const config = CONFIG[title]

  return (
    <Page page_name={`Masterclass Secondary Sales Page - ${title}`}>
      <Section
        className="bg-gradient-to-br from-fuchsia-900 via-violet-950 to-fuchsia-900"
        classNameInner="!max-w-3xl mx-auto">
        <div className="!max-w-lg bg-white rounded-lg p-4 mb-8 mx-auto">
          <h2 className="!text-xl">{config.countdown.title}</h2>

          <p className="mb-0">{config.countdown.subtitle}</p>

          <CountdownTimer
            theme="transparent"
            className="!text-black !font-normal gap-4"
            classNameDate="!text-4xl !mb-0 lg:!text-5xl"
            classNameDateSeperator="!hidden"
            classNameLabel="!text-black !uppercase !text-xs"
          />
        </div>

        <div className="flex flex-col text-white gap-4">
          <h1>{config.hero.title}</h1>

          <p>{config.hero.copy}</p>

          <div className="w-full bg-white rounded-lg shadow-lg p-4 mb-4">
            <VideoStream videoId={config.hero.videoId} thumbnailSrc={config.hero.thumbnailSrc} />
          </div>

          <p className="text-sm mb-8">{config.hero.videoLabel}</p>
        </div>
      </Section>

      <Section className="!p-4" classNameInner="grid gap-4 lg:grid-cols-3 lg:gap-2">
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-bold mb-0">
            <span className="mr-2">
              <FontAwesomeIcon icon={faClock} className="text-primary" />
            </span>
            <span>14 hours</span>
          </p>
          <p className="text-sm mb-0">OF TRAINING</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl font-bold mb-0">
            <span className="mr-2">
              <FontAwesomeIcon icon={faCalendarAlt} className="text-primary" />
            </span>
            <span>
              {new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString('en-US', {
                month: 'long',
                day: 'numeric',
                year: 'numeric',
              })}
            </span>
          </p>
          <p className="text-sm mb-0">INSTANT ACCESS</p>
        </div>

        <div className="flex justify-center items-center">
          <Link href="#pricing">
            <Button className="masterclass-purple-cta" label="JOIN THE PROGRAM" />
          </Link>
        </div>
      </Section>

      <FloatingNavigation links={config.navigation} />

      <Section id="why-this-membership">
        <div className="min-h-fit gap-6 lg:grid lg:grid-cols-12">
          <div className="w-full order-1 lg:col-span-5 lg:order-2 lg:pl-6 lg:ml-auto">
            <div className="w-full min-h-fit flex flex-col items-center lg:max-w-96">
              {config.socialProof.map((item, index) => (
                <div
                  key={`social_proof_${index}`}
                  className="w-72 flex items-stretch bg-white border border-gray-200 shadow-xl rounded-lg p-6 mb-6">
                  <div
                    className={`w-14 h-14 flex justify-center items-center ${item.iconCircleBg} rounded-full p-4 mr-4`}>
                    <FontAwesomeIcon icon={item.icon} className={`${item.iconColor} text-2xl`} />
                  </div>

                  <div className="flex flex-col justify-center text-left">
                    <h3 className="text-2xl font-bold mb-0">{item.title}</h3>

                    <p className="mb-0">{item.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="text-left lg:col-span-7 order-2 lg:order-1">
            <p className="text-xl">
              <strong>{config.patterns.title}</strong>
            </p>

            {config.patterns.copy1.map((copy, index) => (
              <p key={`patterns_copy1_${index}`}>{copy}</p>
            ))}

            <ul className="list-disc list-inside mb-4">
              {config.patterns.listItems1.map((item, index) => (
                <li key={`patterns_listItems1_${index}`}>{item}</li>
              ))}
            </ul>

            {config.patterns.copy2.map((copy, index) => (
              <p key={`patterns_copy2_${index}`}>{copy}</p>
            ))}

            <ul className="list-disc list-inside mb-4">
              {config.patterns.listItems2.map((item, index) => (
                <li key={`patterns_listItems2_${index}`}>{item}</li>
              ))}
            </ul>

            {config.patterns.copy3.map((copy, index) => (
              <p key={`patterns_copy3_${index}`}>{copy}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <h2>{config.aboutMasterclass.title}</h2>

        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <Image
              src={config.aboutMasterclass.image}
              alt={config.aboutMasterclass.imageAlt}
              className="w-full h-auto"
              width={300}
              height={500}
              quality={100}
              sizes="100vw"
            />
          </div>

          <div className="text-left">
            {config.aboutMasterclass.copy1.map((copy, index) => (
              <p key={`about_masterclass_copy1_${index}`}>{copy}</p>
            ))}

            <ul className="list-disc list-inside mb-4">
              {config.aboutMasterclass.listItems1.map((item, index) => (
                <li key={`about_masterclass_listItems1_${index}`}>{item}</li>
              ))}
            </ul>

            {config.aboutMasterclass.copy2.map((copy, index) => (
              <p key={`about_masterclass_copy2_${index}`}>{copy}</p>
            ))}
          </div>
        </div>
      </Section>

      <Section id="the-curriculum">
        <h2>{config.curriculum.title}</h2>

        <p className="text-xl">
          <strong>{config.curriculum.subtitle}</strong>
        </p>

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="text-left">
            {config.curriculum.copy.map((copy, index) => (
              <p key={`curriculum_copy_${index}`}>{copy}</p>
            ))}
          </div>

          <div>
            <Image
              src={config.curriculum.image}
              alt={config.curriculum.imageAlt}
              className="w-full h-auto"
              width={270}
              height={350}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>

        <Faq
          includeHeading={false}
          className="!max-w-5xl mx-auto !my-0"
          classNameAnswer="!mb-0"
          classNameExpandable="md:hover:!bg-white"
          faq={config.curriculum.parts}
        />
      </Section>

      <Section>
        <h2 className="text-left">{config.schedule.title}</h2>

        <div className="block lg:hidden">
          <CarouselDefault>
            {config.schedule.items.map((item, index) => (
              <div key={`schedule_item_${index}`} className="h-full text-left">
                <h3 className="!text-xl mb-3">{item.title}</h3>

                <div className="border border-gray-300 rounded-xl overflow-hidden">
                  <div className="flex flex-col text-left px-4">
                    {item.lessons.map((lesson, lessonIndex) => (
                      <div
                        key={`schedule_lesson_${index}_${lessonIndex}`}
                        className={
                          lessonIndex < item.lessons.length - 1 ? 'border-b border-gray-300' : ''
                        }>
                        <p className="text-primary font-semibold mt-4 mb-0">{lesson.title}</p>

                        <p>{lesson.copy}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </CarouselDefault>
        </div>

        <div className="hidden flex-col gap-8 text-left lg:flex">
          {config.schedule.items.map((item, index) => (
            <div key={`schedule_item_${index}`}>
              <h3 className="!text-xl mb-3">{item.title}</h3>

              <div className="border border-gray-300 rounded-xl overflow-hidden shadow-sm">
                <div className="grid grid-cols-3">
                  {item.lessons.map((lesson, lessonIndex) => (
                    <div
                      key={`schedule_lesson_${index}_${lessonIndex}`}
                      className={
                        lessonIndex < item.lessons.length - 1 ? 'border-r border-gray-300' : ''
                      }>
                      <div className="bg-[#F0E0F7] px-4 py-3 text-center border-b border-gray-300">
                        <p className="text-primary font-semibold mb-0">{lesson.title}</p>
                      </div>

                      <div className="bg-white px-4 py-4">
                        <p className="text-sm mb-0">{lesson.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2>{config.bonuses.title}</h2>

        <div className="block lg:hidden">
          <CarouselDefault>
            {config.bonuses.items.map((item, index) => (
              <div
                key={`bonuses_item_${index}`}
                className="h-full flex flex-col gap-6 bg-white border border-gray-200 rounded-2xl p-6 mb-8">
                <div className="w-full flex items-center aspect-square">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    className="w-full h-auto"
                    width={240}
                    height={240}
                  />
                </div>

                <div className="text-left">
                  <p>{item.label}</p>

                  <h3>{item.title}</h3>

                  <p className="mb-0">{item.copy}</p>
                </div>
              </div>
            ))}
          </CarouselDefault>
        </div>

        <div className="hidden lg:block">
          {config.bonuses.items.map((item, index) => (
            <div
              key={`bonuses_item_${index}`}
              className="flex gap-6 bg-white border border-gray-200 shadow-xl rounded-2xl p-15 mb-8">
              <div className="flex-1 text-left">
                <p>{item.label}</p>

                <h3>{item.title}</h3>

                <p className="mb-0">{item.copy}</p>
              </div>

              <div className="w-60">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-auto"
                  width={240}
                  height={240}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="meet-thais-gibson">
        <h2>{config.thais.title}</h2>

        <div className="grid gap-6 lg:grid-cols-2 mb-8">
          <div className="order-1 lg:order-2">
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

          <div className="text-left order-2 lg:order-1">
            {config.thais.copy.map((copy, index) => (
              <p key={`thais_copy_${index}`}>{copy}</p>
            ))}
          </div>
        </div>

        <div className="!max-w-5xl text-left bg-white border border-gray-200 shadow-xl rounded-2xl mx-auto p-6">
          <h3>{config.credentials.title}</h3>

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

      <Section>
        <p className="text-left text-lg">
          <strong>As seen on</strong>
        </p>

        <TrustbarMasterclass className="!p-0" />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl overflow-hidden">
            <Image
              src={'/images/Masterclass/thais-interview-1.png'}
              alt="Interview with Thais Gibson"
              className="w-full h-auto"
              width={300}
              height={300}
              quality={100}
              sizes="100vw"
            />
          </div>

          <div className="rounded-2xl overflow-hidden">
            <Image
              src={'/images/Masterclass/thais-interview-2.png'}
              alt="Interview with Thais Gibson"
              className="w-full h-auto"
              width={300}
              height={300}
              quality={100}
              sizes="100vw"
            />
          </div>
        </div>
      </Section>

      <Section>
        <div className="block lg:hidden">
          <CarouselDefault>
            {commonConfig.studentStories.slice(0, 3).map((item, index) => (
              <div
                key={`testimonial_${index}`}
                className="h-full bg-white rounded-2xl border border-gray-200 p-6 text-left flex flex-col justify-between">
                <p className="text-lg mb-4">{item.quote}</p>

                <p className="font-bold text-sm mb-0">{item.author}</p>
              </div>
            ))}
          </CarouselDefault>
        </div>

        <div className="hidden lg:grid gap-6 lg:grid-cols-3">
          {commonConfig.studentStories.slice(0, 3).map((item, index) => (
            <div
              key={`testimonial_${index}`}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 text-left flex flex-col justify-between">
              <p className="text-lg mb-4">{item.quote}</p>

              <p className="font-bold text-sm mb-0">{item.author}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section classNameInner="!max-w-3xl mx-auto">
        <div className="rounded-2xl overflow-hidden mb-8">
          <Image
            src={config.healing.image}
            alt={config.healing.imageAlt}
            className="w-full h-auto"
            width={500}
            height={500}
            quality={100}
            sizes="100vw"
          />
        </div>

        <div className="bg-white shadow-xl rounded-2xl border border-gray-200 p-6 mb-8">
          <h2>{config.healing.title}</h2>

          {config.healing.copy.map((copy, index) => (
            <p key={`healing_copy_${index}`}>{copy}</p>
          ))}
        </div>

        <h2>{config.transformation.title}</h2>

        <div className="max-w-xl rounded-2xl overflow-hidden mb-8 mx-auto">
          <Image
            src={config.transformation.image}
            alt={config.transformation.imageAlt}
            className="w-full h-auto"
            width={500}
            height={500}
            quality={100}
            sizes="100vw"
          />
        </div>

        <div className="text-left">
          {config.transformation.copy.map((copy, index) => (
            <p key={`transformation_copy_${index}`}>{copy}</p>
          ))}
        </div>
      </Section>

      <Section id="about-membership">
        <h2>{config.features.title}</h2>

        <div className="grid grid-cols-1 gap-4 text-left xs:grid-cols-2 lg:grid-cols-4 lg:gap-6">
          {config.features.list.map((item, idx) => (
            <div
              key={`masterclass_membership_features_${idx}`}
              className="shadow-[0_5px_12px_0_rgba(89,94,103,0.07),0_10px_30px_0_rgba(89,94,103,0.085)] border border-gray-300 rounded-lg p-4 md:p-6">
              <p>
                <strong>{item.title}</strong>
              </p>

              <p className="!mb-0">{item.copy}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <CourseLibrary
          title={config.courseLibrary.title}
          subtitle={config.courseLibrary.subtitle}
          categories={config.courseLibrary.categories}
        />
      </Section>

      <Section className="bg-gradient-to-b from-blue-lightest-50 to-white">
        <h2>{config.growthJourney.title}</h2>

        <p className="mb-10">{config.growthJourney.subtitle}</p>

        <div className="hidden lg:block">
          <div className="grid grid-cols-4 gap-6 mb-6">
            {config.growthJourney.steps.map((step, index) => (
              <div key={`growth_text_${index}`} className="text-center">
                <p className="text-lg font-bold mb-2">{step.label}</p>

                <p>
                  <strong>{step.course}</strong> {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="relative grid grid-cols-4 gap-6 mb-6">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-black z-0" />

            {config.growthJourney.steps.map((_, index) => (
              <div key={`growth_arrow_${index}`} className="relative flex justify-center z-10">
                <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <span className="block w-6 h-6 rounded-full bg-[#f7fafd]" />
                </span>

                <FontAwesomeIcon
                  icon={faCircleArrowRight}
                  className="text-2xl text-black px-1 relative z-10"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-4 gap-6">
            {config.growthJourney.steps.map((step, index) => (
              <div key={`growth_thumb_${index}`} className="rounded-2xl overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  className="w-full h-auto"
                  width={300}
                  height={300}
                />
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-8 lg:hidden">
          {config.growthJourney.steps.map((step, index) => (
            <div key={`growth_mobile_${index}`} className="text-center">
              <p className="text-lg font-bold mb-2">{step.label}</p>

              <p className="text-sm mb-4">
                <strong>{step.course}</strong> {step.description}
              </p>

              <div className="max-w-96 rounded-2xl overflow-hidden mx-auto">
                <Image
                  src={step.image}
                  alt={step.imageAlt}
                  className="w-full h-auto"
                  width={300}
                  height={300}
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2>{config.transformationJourney.title}</h2>

        <div className="max-w-4xl mx-auto mb-10">
          {config.transformationJourney.intro.map((text, index) => (
            <p key={`tj_intro_${index}`}>{text}</p>
          ))}
        </div>

        <div className="max-w-5xl mx-auto flex flex-col gap-10 text-left">
          {config.transformationJourney.items.map((item, index) => (
            <div key={`tj_item_${index}`} className="flex gap-4">
              <div className="flex mt-1">
                <FontAwesomeIcon icon={item.icon} className="w-6 h-6 text-xl text-primary" />
              </div>

              <div>
                <p className="text-lg font-bold mb-0">{item.title}</p>
                {item.copy.map((text, idx) => (
                  <p key={`tj_item_copy_${index}_${idx}`}>{text}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2>{config.buildingRelationships.title}</h2>

        {config.buildingRelationships.copy.map((copy, index) => (
          <p key={`building_relationships_copy_${index}`}>{copy}</p>
        ))}

        <div className="max-w-xl rounded-2xl overflow-hidden mx-auto mb-8">
          <Image
            src={config.buildingRelationships.image}
            alt={config.buildingRelationships.imageAlt}
            className="w-full h-auto"
            width={600}
            height={400}
            quality={100}
            sizes="100vw"
          />
        </div>

        <div className="flex flex-col gap-8">
          {config.buildingRelationships.items.map((item, index) => {
            const textBlock = (
              <div key={`br_text_${index}`} className="flex flex-col justify-center text-left">
                <h3 className="text-2xl font-bold">{item.title}</h3>

                {item.copy.map((text, idx) => (
                  <p key={`br_copy_${index}_${idx}`}>{text}</p>
                ))}
              </div>
            )

            const imageBlock = (
              <div key={`br_img_${index}`} className="max-w-lg rounded-2xl overflow-hidden mx-auto">
                <Image
                  src={item.image}
                  alt={item.imageAlt}
                  className="w-full h-auto"
                  width={360}
                  height={240}
                />
              </div>
            )

            const isImageFirst = index % 2 !== 0

            return (
              <div
                key={`br_item_${index}`}
                className="grid gap-8 lg:grid-cols-2 lg:justify-center lg:items-center">
                <div className="lg:hidden">{imageBlock}</div>
                <div className="lg:hidden">{textBlock}</div>

                {isImageFirst ? (
                  <>
                    <div className="hidden lg:block">{imageBlock}</div>
                    <div className="hidden lg:block">{textBlock}</div>
                  </>
                ) : (
                  <>
                    <div className="hidden lg:block">{textBlock}</div>
                    <div className="hidden lg:block">{imageBlock}</div>
                  </>
                )}
              </div>
            )
          })}
        </div>
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto p-6">
          <div className="flex justify-center mb-8">
            {[1, 2, 3, 4, 5, 6].map((item, idx) => (
              <Image
                key={`headshot_${idx}`}
                className="!w-20 !h-20 bg-gray-500 border border-white rounded-full -m-2"
                alt="Headshot of a student"
                src={`/images/FlashSalePage/testimonial-headshot-${item}.jpg`}
                width={64}
                height={64}
              />
            ))}
          </div>

          <p className="max-w-xl text-xl font-bold mx-auto">
            <span className="font-ssp text-3xl text-primary">Over 60,000</span> student enrollments
            from more than 120 countries worldwide
          </p>
        </div>
      </Section>

      <Section
        id="what-students-say"
        className="max-w-full p-4 lg:!p-0"
        classNameInner="!max-w-full !m-0 !p-0">
        <h2 className="mb-4">Here’s What Members Say About Their Transformation</h2>

        <CarouselTestimonialThinkific
          initialSlide={1}
          classNameCard="!from-white-secondary !to-white-secondary"
        />
      </Section>

      <Section classNameInner="!max-w-4xl mx-auto">
        <h2>{config.whyJoin.title}</h2>

        {config.whyJoin.items.map((item, index) => (
          <div key={`why_join_item_${index}`} className="flex gap-4">
            <div>
              <p className="!text-3xl font-ssp text-primary mt-1">
                <strong>{index + 1}</strong>
              </p>
            </div>

            <div className="text-left">
              <h3>{item.title}</h3>

              <p>{item.copy}</p>
            </div>
          </div>
        ))}
      </Section>

      <Section>
        <p className="tracking-33">
          <strong>{config.media.label}</strong>
        </p>

        <h2>{config.media.title}</h2>

        {config.media.copy.map((copy, index) => (
          <p key={`media_copy_${index}`}>{copy}</p>
        ))}

        <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg p-4 mx-auto mb-8">
          <VideoStream videoId={config.media.videoId} thumbnailSrc={config.media.thumbnailSrc} />
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
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

              <a href={article.linkUrl} target="_blank" className="text-blue-darkest">
                {article.link}
              </a>
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
        id="pricing"
        className="bg-gradient-to-br from-fuchsia-900 via-violet-950 to-fuchsia-900"
        classNameInner="flex flex-col items-center gap-8 lg:flex-row">
        <div className="text-left text-white lg:flex-1">
          <h2>{config.pricing.title}</h2>

          <p>{config.pricing.copy}</p>

          <List
            icon={faCheck}
            classNameIcon="!text-white mt-1"
            classNameListItems="mb-4"
            listItems={config.pricing.items}
          />
        </div>

        <div className="w-fit">
          <MasterclassPricing />
        </div>
      </Section>

      <Section className="bg-gradient-to-b from-primary-light-50 to-white">
        <h2>{config.postPurchase.title}</h2>
        <div className="grid gap-4 lg:grid-cols-3">
          {config.postPurchase.items.map((item, index) => (
            <div key={`post_purchase_item_${index}`}>
              <Image
                src={item.image}
                alt={item.imageAlt}
                width={400}
                height={400}
                className="w-full h-auto mb-4"
              />

              <div className="flex text-left gap-8">
                <p className="!text-3xl font-ssp text-primary">
                  <strong>{index + 1}</strong>
                </p>
                <p>{item.copy}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="!py-0">
        <Faq faq={config.faqs} className="!mb-0" />
      </Section>

      <Section>
        <div className="block lg:hidden">
          <CarouselDefault>
            {commonConfig.studentStories.slice(3).map((item, index) => (
              <div
                key={`testimonial_${index}`}
                className="h-full bg-white rounded-2xl border border-gray-200 p-6 text-left flex flex-col justify-between">
                <p className="text-lg mb-4">{item.quote}</p>

                <p className="font-bold text-sm mb-0">{item.author}</p>
              </div>
            ))}
          </CarouselDefault>
        </div>

        <div className="hidden lg:grid gap-6 lg:grid-cols-3">
          {commonConfig.studentStories.slice(3).map((item, index) => (
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
        className="bg-gradient-to-br from-fuchsia-900 via-violet-950 to-fuchsia-900"
        classNameInner="flex flex-col items-center gap-8 lg:flex-row">
        <div className="text-left text-white lg:flex-1">
          <h2>{config.pricing.title}</h2>

          <p>{config.pricing.copy}</p>

          <List
            icon={faCheck}
            classNameIcon="!text-white mt-1"
            classNameListItems="mb-4"
            listItems={config.pricing.items}
          />
        </div>

        <div className="w-fit">
          <MasterclassPricing />
        </div>
      </Section>
    </Page>
  )
}
