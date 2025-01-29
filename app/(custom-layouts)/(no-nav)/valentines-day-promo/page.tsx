// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import {
  ValentinesDayHero,
  ValentinesDayNegativePatterns,
  ValentinesDayPDSBenefits,
  ValentinesDayPDSFeatures,
} from '../valentines-day/page'
import { ThaisIntro } from '@/components/ThaisIntro'
import { PDS14dftTestimonialVideo } from '@/components/SpecialPromotion'

export const metadata: Metadata = {
  title: 'Valentine’s Day 14-Day Free Trial – Join Now!',
  description:
    'This Valentine’s Day, get a 14-day free trial to the All-Access Pass. Get everything you need to thrive from The Personal Development School this February!',
  robots: 'noindex',
}

export default function ValentinesDayPromoPage() {
  return (
    <Page page_name="Valentine's Day - Short" className="w-full overflow-hidden">
      <ValentinesDayHero />

      <ValentinesDayNegativePatterns background="white" />

      <Section className="text-white bg-black-secondary lg:pb-0 2xl:py-24 2xl:pb-0">
        <ValentinesDayPDSBenefits />
      </Section>

      <Image
        alt="black wave vector"
        className="w-full md:hidden"
        width={391}
        height={103}
        src="/images/BlackFridayPage/black-secondary-wave.jpg"
      />

      <Image
        alt="black wave vector"
        className="w-full hidden md:block"
        width={1440}
        height={218}
        src="/images/BlackFridayPage/black-secondary-wave-desktop.jpg"
      />

      <ThaisIntro />

      <ValentinesDayPDSFeatures />

      <PDS14dftTestimonialVideo />
    </Page>
  )
}
