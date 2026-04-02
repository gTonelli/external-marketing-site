// core
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button/Button'
import { List } from '@/components/List'
import { VideoStream } from '@/components/Video/variants/VideoStream'
import { CountdownTimer } from '@/components/CountDownTimer'
import { CarouselDefault } from '@/components/Carousel/variants/CarouselDefault'
import { MasterclassPricing } from '@/components/Masterclass/MasterclassPricing'
import { faCheck } from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import { CONFIG as config } from './config'
import { COMMON_CONFIG as commonConfig } from '../config'
// styles
import '@/styles/default-styles.css'
import '../style.css'

export const metadata: Metadata = {
  title: 'The Personal Development School Membership | Build Deeper, Healthier Relationships',
  description:
    'Join 60,000+ students improving communication, emotional health, and relationships with proven tools, live coaching, and guided courses by Thais Gibson.',
  robots: 'noindex',
}

export default function MasterclassMembershipPage() {
  return (
    <Page page_name="Masterclass Membership Page">
      <Section>
        <div className="max-w-fit shadow-[0_5px_12px_0_rgba(89,94,103,0.07),0_10px_30px_0_rgba(89,94,103,0.085)] border border-gray-300 rounded-lg px-4 py-4 mx-auto md:py-6">
          <p className="max-w-md !mb-0 md:text-xl">
            <strong>{config.countdown.title}</strong>
          </p>

          <p className="text-sm !mb-0 md:text-base">{config.countdown.subtitle}</p>

          <CountdownTimer
            theme="transparent"
            className="!text-black !font-normal gap-4"
            classNameDate="!text-4xl !mb-0 lg:!text-5xl"
            classNameDateSeperator="!hidden"
            classNameLabel="!text-black !uppercase !text-xs"
          />
        </div>
      </Section>

      <Section>
        <h1 className="text-4xl lg:!text-6xl">{config.hero.title}</h1>

        <p className="text-xl lg:text-3xl">{config.hero.subtitle}</p>

        <div className="max-w-3xl bg-white rounded-lg shadow-lg p-4 mb-4 mx-auto">
          <VideoStream videoId={config.hero.videoId} thumbnailSrc={config.hero.thumbnailSrc} />
        </div>

        <p className="text-sm text-gray-700 mb-8">{config.hero.videoLabel}</p>

        <Link href="#pricing">
          <Button className="masterclass-purple-cta" label={config.hero.ctaLabel} />
        </Link>
      </Section>

      <Section classNameInner="!max-w-4xl !text-left text-lg">
        {config.aboutMembership.map((item, idx) => (
          <p key={`about_masterclass_membership_${idx}`}>{item}</p>
        ))}
      </Section>

      <Section>
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
        <h2>{config.testimonials.title}</h2>

        <div className="block lg:hidden">
          <CarouselDefault>
            {commonConfig.studentStories.map((item, index) => (
              <div
                key={`testimonial_${index}`}
                className="h-full bg-white rounded-2xl border border-gray-200 p-6 text-left flex flex-col justify-between">
                <p className="text-lg mb-4">{item.quote}</p>

                <p className="font-bold text-sm mb-0">{item.author}</p>
              </div>
            ))}
          </CarouselDefault>
        </div>

        <div className="hidden lg:grid lg:grid-cols-3 lg:gap-6">
          {commonConfig.studentStories.map((item, index) => (
            <div
              key={`testimonial_${index}`}
              className="bg-white rounded-2xl shadow-xl border border-gray-200 p-6 text-left flex flex-col justify-between mb-8">
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

        <div className="w-full lg:w-fit">
          <MasterclassPricing />
        </div>
      </Section>
    </Page>
  )
}
