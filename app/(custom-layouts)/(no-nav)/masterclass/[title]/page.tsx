// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button/Button'
// config
import { SEO_CONFIG, TMasterclassTitle, MasterclassTitleSlugs } from '../config'
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
            <source
              src="https://assets.mindvalley.com/api/v1/assets/3170a825-0d41-40d7-bbe8-a7e2403383ed.mp4"
              type="video/mp4"
            />
          </video>

          <div className="masterclass-header-bg-overlay"></div>
        </div>

        <div className="relative section-inner-wrapper min-h-screen flex flex-col justify-end items-start gap-7 py-24 mx-auto md:py-48">
          <div className="w-full min-h-fit flex flex-col text-left text-white ml-0 md:w-4/5">
            <div className="min-h-fit">
              <h3 className="!text-base !font-effra uppercase tracking-33">
                Tired of Repeating the Same Emotional Cycles?
              </h3>
            </div>

            <div className="min-h-fit">
              <h1 className="!text-5xl">
                Discover the Hidden Needs Shaping Your Relationships, Motivation, and Happiness to
                Find Lasting Fulfillment
              </h1>
            </div>

            <div className="min-h-fit">
              <h2 className="!text-lg !font-effra">
                Thousands have used the framework in this Discover, Embrace & Fulfill Your Personal
                Needs Masterclass to identify unmet emotional needs, break painful patterns, and
                build secure attachment from the inside out.
              </h2>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <Button className="masterclass-primary-cta" label="RESERVE MY SPOT NOW" />

            <Button className="masterclass-secondary-cta" label="WATCH TRAILER" />
          </div>
        </div>
      </Section>
    </Page>
  )
}
