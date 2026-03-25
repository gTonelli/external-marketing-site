// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button/Button'
import { FloatingNavigation } from '@/components/Masterclass/FloatingNavigation'
import { CarouselCard } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { faCheck, faSparkles } from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import { SEO_CONFIG, TMasterclassTitle, MasterclassTitleSlugs } from '../config'
import { CONFIG } from './config'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// styles
import '@/styles/default-styles.css'
import '../style.css'
import dynamic from 'next/dynamic'

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
        classNameInner="relative !min-w-full min-h-screen min-h-fit !p-0 !m-0">
        <div>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute bottom-0 w-full h-full object-cover object-center max-w-none">
            <source src={config.hero.bgVideoSrc} type="video/mp4" />
          </video>

          <div className="masterclass-header-bg-overlay"></div>
        </div>

        <div className="relative section-inner-wrapper min-h-screen flex flex-col justify-end items-start gap-7 py-24 mx-auto md:py-48">
          <div className="w-full min-h-fit flex flex-col text-left text-white ml-0 md:w-4/5">
            <h3 className="!text-base !font-effra uppercase tracking-33">{config.hero.h3}</h3>

            <h1 className="!text-4xl lg:!text-6xl">{config.hero.h1}</h1>

            <h2 className="!text-lg !font-effra hidden md:block">{config.hero.h2}</h2>
          </div>

          <div className="flex flex-row gap-4">
            <Button className="masterclass-primary-cta" label="RESERVE MY SPOT NOW" />

            <Button className="masterclass-secondary-cta hidden md:block" label="WATCH TRAILER" />
          </div>
        </div>
      </Section>

      <FloatingNavigation links={config.floatingNavLinks} />

      <Section>
        <div className="min-h-fit gap-6 lg:grid lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="gap-6 pb-18 md:grid md:grid-cols-3">
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
              <h2 className="mb-8">What You&apos;ll Learn</h2>

              {config.whatYouLearn.learnings.map((item, index) => (
                <div key={`learning_item_${index}`} className="flex gap-4 mb-8">
                  <div>
                    <FontAwesomeIcon icon={faCheck} className="text-xl text-primary mt-1" />
                  </div>

                  <div>
                    <p className="text-xl mb-0">
                      <strong>{item.title}</strong>
                    </p>

                    <p className="text-lg">{item.description}</p>
                  </div>
                </div>
              ))}

              <h2 className="my-8">Student Stories</h2>

              {config.testimonials.map((review, idx) => (
                <CarouselCard
                  key={`carousel_card_${idx}`}
                  review={review}
                  classNameCard="!bg-none !bg-white !text-lg !shadow-xl border border-[#dfe1e5] mb-8"
                />
              ))}

              <h2 className="mt-16 mb-8">Meet Thais Gibson, PhD</h2>

              <div className="bg-slate-200 min-h-96 mb-8">Image</div>

              <div className="text-lg">
                {config.thais.copy.map((item, idx) => (
                  <p key={`thais_gibson_copy_${idx}`}>{item}</p>
                ))}

                {config.thais.credentials.map((item, idx) => (
                  <div key={`credentials_copy_${idx}`} className="flex gap-4">
                    <div>
                      <FontAwesomeIcon icon={faSparkles} className="text-lg text-primary mt-1" />
                    </div>

                    <div>
                      <p className="text-lg">{item}</p>
                    </div>
                  </div>
                ))}
              </div>

              <h2 className="my-8">Your Learning Journey</h2>

              {config.learningJourney.map((item, idx) => (
                <div key={`learning_journey_${idx}`} className="mb-12">
                  <div className="min-h-80 bg-slate-200 mb-4">Image</div>

                  <div className="flex gap-4">
                    <div>
                      <p className="text-5xl font-ssp text-primary mt-1">
                        <strong>{idx + 1}</strong>
                      </p>
                    </div>

                    <div className="text-lg">
                      <p>
                        <strong>{item.title}</strong>
                      </p>

                      <p>{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full col-span-5 ml-auto pl-6">
            <div className="sticky top-0 w-full max-w-96 min-h-fit z-20 pt-24">
              <MasterclassRegistrationForm masterclassTitle={title} />
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-white-secondary" classNameInner="gap-6 lg:grid lg:grid-cols-5">
        <div className="text-left lg:col-span-2">
          <h2>Frequently Asked Questions</h2>

          <p>
            Get your questions answered before the Discover, Embrace & Fulfill Your Personal Needs
            Masterclass begins.
          </p>
        </div>

        <div className="min-h-96 lg:col-span-3">FAQs will show here</div>
      </Section>

      <Section>
        <h2 className="mb-8">Join Your Free Masterclass Today to Rewire What’s Holding You Back</h2>

        <div className="w-full min-h-96 gap-6 items-stretch lg:grid lg:grid-cols-12">
          <div className="lg:col-span-8 h-full bg-slate-200">Image</div>

          <div className="lg:col-span-4">
            <div className="w-full max-w-96 min-h-fit z-20">
              <MasterclassRegistrationForm masterclassTitle={title} />
            </div>
          </div>
        </div>
      </Section>
    </Page>
  )
}
