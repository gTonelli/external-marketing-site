import Image from 'next/image'
import { Section } from '../Section'
import { ButtonCheckout } from '../Button/variants/ButtonCheckout'

export const PricingSectionAlt = () => {
  return (
    <Section classNameInner="grid gap-4 lg:grid-cols-2 lg:gap-6 lg:!max-w-[996px]">
      <Image
        src="/images/SegmentedResultsPages/features-mockup.png"
        alt="4 devices, a laptop, mac, and 2 tablets showing PDS features like a course player, webinars and Q&A sessions"
        className="w-full"
        width={466}
        height={270}
      />

      <div className="relative text-left py-10 px-6 rounded-20 shadow-centered-card-2 overflow-hidden">
        <p className="absolute top-7 -right-24 w-max font-bold bg-green-9 text-white px-24 rotate-45">
          SAVE 30%
        </p>

        <h3 className="mb-0">Exclusive Offer & Value</h3>

        <p>Total Value: $3,497+</p>

        <div className="lg:flex lg:items-center">
          <p>
            <strong>Today’s Price</strong>
          </p>

          <div className="flex items-center text-primary">
            <p className="font-bold text-[40px] leading-[40px] mr-2 lg:mx-4">$67.00</p>

            <p> / per month</p>
          </div>
        </div>

        <p className="max-w-[400px]">
          <strong>A 30% discount off the regular price for the All-Access Pass for LIFE.</strong>
        </p>

        <ButtonCheckout label="JOIN THE ALL-ACCESS TODAY" />
      </div>
    </Section>
  )
}
