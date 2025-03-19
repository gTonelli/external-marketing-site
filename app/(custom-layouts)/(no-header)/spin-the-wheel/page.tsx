import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { SpinningWheel } from '@/components/SpinningWheel'
import Image from 'next/image'

export default function SpinTheWheelPage() {
  return (
    <Page page_name="Spin The Wheel">
      <Section
        className="bg-gradient-to-b from-blue-lightest-50 to-primary-light"
        classNameInner="flex flex-col items-center">
        <Image
          alt="PDS logo"
          src="/images/pds-logo-stacked-right-primary.png"
          width={200}
          height={73}
        />

        <h1 className="mt-8 mb-4">Spin &amp; Win. No Risks. Only Rewards.</h1>

        <p className="mb-16">
          Spin Now for a Guaranteed Offer on the All-Access Pass. Unlock expert guidance, deep
          healing, and a secure love life.
        </p>
      </Section>

      <Section className="!mt-0" classNameInner="relative">
        <SpinningWheel />
      </Section>
    </Page>
  )
}
