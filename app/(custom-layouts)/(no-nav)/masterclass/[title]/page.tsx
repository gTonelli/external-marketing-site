// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button/Button'
import { FloatingNavigation } from '@/components/Masterclass/FloatingNavigation'
import { faCheck } from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import { SEO_CONFIG, TMasterclassTitle, MasterclassTitleSlugs } from '../config'
import { CONFIG } from './config'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// styles
import '@/styles/default-styles.css'
import '../style.css'

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
        <div className="!overflow-visible min-h-fit gap-6 lg:grid lg:grid-cols-12">
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

            <div className="text-left min-h-screen">
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
            </div>
          </div>

          <div className="relative lg:col-span-5">
            <div className="sticky top-0 grid w-full min-h-fit z-20 pt-24">
              <div>FORM</div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="min-h-screen">
        <p>Student Stories</p>
      </Section>

      <Section className="min-h-screen">
        <p>Meet Thais Gibson</p>
      </Section>

      <Section className="min-h-screen">
        <p>Your Learning Journey</p>
      </Section>

      <Section className="min-h-screen">
        <p>FAQs</p>
      </Section>

      <Section className="min-h-screen">
        <p>Reserve My Spot</p>
      </Section>
    </Page>
  )
}
