// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { SpecialPromotionBody } from '@/components/SpecialPromotion'
import { MHAButton } from '@/components/MHAButton'

export const metadata: Metadata = {
  title: 'Find Calmness & Clarity with Our 14-Day Free Trial',
  description:
    'Your mental health matters. Make it a priority with our All-Access Pass, available for 14 days for FREE this Mental Health Awareness Month.',
  robots: 'noindex',
}

export default function MentalHealthAwareness() {
  return (
    <Page className="w-full overflow-hidden" page_name="mha-month">
      {/* HEADER TEXT */}
      <Section className="relative z-10 bg-blue-lightest lg:pb-0">
        <h1 className="leading-10 font-effra font-bold lg:leading-10 lg:max-w-[940px] lg:mx-auto lg:text-5xl lg:mb-8">
          Tame Your Anxiety, Build Your Self-Esteem, or Break Your Toxic Relationship Patterns
        </h1>

        <p className="!leading-6 !tracking-0.325 text-primary font-extrabold !text-xl my-4">
          RIGHT FROM YOUR HOME IN THE NEXT 2 WEEKS
        </p>

        <p className="!text-lg font-medium mb-4 lg:max-w-lg lg:mx-auto">
          Unlock free access to the courses that are giving our members the breakthroughs they've
          been looking for.
        </p>

        <MHAButton />
      </Section>

      <div className="relative w-full lg:h-[150px] mt-0 z-[5] 2xl:-mt-5">
        <Image
          fill
          unoptimized
          src="/images/styled-wave-green.png"
          alt="green wave vector"
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>

      <SpecialPromotionBody />
    </Page>
  )
}
