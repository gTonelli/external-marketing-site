'use client'

// core
import Image from 'next/image'
// components
import { Section } from '@/components/Section'
import { SpecialPromotionBody } from '@/components/SpecialPromotion'
import { MHAButton } from './MHAButton'
import { getSplitTest } from '@/utils/functions'
import { useEffect, useState } from 'react'
import { Loader } from './Loader'

interface PromotionPageProps {
  page: 'Black Friday' | 'Cyber Monday'
}

/* Black Friday or Cyber Monday Promotion */
export default function PromotionPage({ page }: PromotionPageProps) {
  const [loading, setLoading] = useState(false)
  const [isVariant, setIsVariant] = useState(false)

  useEffect(() => {
    const testKey = page === 'Black Friday' ? 'bf' : 'cm'
    const isTestVariant = Boolean(
      getSplitTest({
        key: `gm-1205-${testKey}-split`,
        experimentName: `GM-1205-${testKey.toUpperCase()}-Split`,
        props: { page_name: page },
      })
    )
    setIsVariant(isTestVariant)
  }, [page])

  if (loading) {
    return <Loader />
  }

  return (
    <>
      {/* HEADER TEXT */}
      <Section className="relative z-10 bg-blue-lightest lg:pb-0">
        <h1 className="!text-xl font-effra rounded-lg font-bold bg-blue-dark text-white mb-3 px-8 py-2 lg:py-4 lg:!text-3xl">
          {`Claim Your ${page} Offer!`}
        </h1>

        <h2 className="leading-6 text-primary font-bold mb-4 lg:leading-10 lg:max-w-[940px] lg:mx-auto lg:!text-4xl lg:mb-8">
          {isVariant
            ? page === 'Black Friday'
              ? 'This Is The Key That Will Transform You And Your Relationships Forever. Are You Ready To Unlock The Secret to Lasting Love?'
              : 'Are You Ready To Unlock The Secret To Having The Best Relationships Of Your Life With Yourself & Others?'
            : 'Are You Ready To Transform Your Relationships And Find Lasting Love?'}
        </h2>

        <h4 className="!text-lg font-medium mb-4 lg:max-w-3xl lg:mx-auto">
          {isVariant
            ? page === 'Black Friday'
              ? 'Get a 14-day FREE trial to our All-Access Pass! Our comprehensive membership provides you with a personalized roadmap (through courses, programs, webinars, and more) to positively transform your life and relationships for good through methods that actually work! Use our revolutionary Integrated Attachment Theory™ to uncover your attachment style, why it impacts your relationships and you, and rewire your subconscious patterns to drive personal transformations. It’s the groundbreaking approach that is disrupting the relationship industry because of how fast it works and how simple it is for everyone!'
              : "Get a FREE 14-day trial to the All-Access Pass, our all-inclusive membership to The Personal Development School! You'll get everything you need to uncover why you are the way you are, what your attachment style means, and how to understand yourself and your relationships better than before! Our membership includes the exact courses and programs to use our groundbreaking, proprietary process – Integrated Attachment Theory™ – to rewire your subconscious patterns so you can finally transform your life and relationships!"
            : `Unlock unlimited access to life-changing courses and programs that will give you the breakthroughs to transform your life and relationships! Sign up for our ${
                page + ' '
              } 14-Day Free Trial and experience change from the comfort of your home with this momentous opportunity.`}
        </h4>

        <MHAButton label="START YOUR 14-DAY FREE TRIAL!" />

        <p className="mt-2 font-bold italic">
          {isVariant
            ? page === 'Black Friday'
              ? '*This offer ends on Friday, November 29th, 2024 at 11:59ET!'
              : '*This offer ends on Monday, December 2nd, 2024 at 11:59ET! '
            : '*This offer ends soon!*'}
        </p>
      </Section>

      <Image
        alt="green wave vector"
        className="relative w-full mt-0 z-5 2xl:-mt-5"
        width={1700}
        height={89}
        src="/images/styled-wave-green.png"
      />

      <SpecialPromotionBody />
    </>
  )
}
