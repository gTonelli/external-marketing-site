'use client'

// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
import { SpecialPromotion, MHAButton } from '@/components/SpecialPromotion'

export default function BlackFridayPage() {
  return (
    <Page className="w-full overflow-hidden" page_name="Black Friday">
      {/* HEADER TEXT */}
      <Section className="relative z-10 bg-blue-lightest lg:pb-0">
        <Text.Paragraph
          className="mb-3 rounded-lg font-bold bg-blue-dark text-white px-8 py-5 lg:py-6 lg:text-3xl"
          content="Cyber Monday Deal!"
          size={20}
        />

        <Text.Heading
          className="leading-6 text-primary font-bold mb-4 lg:leading-10 lg:max-w-[940px] lg:mx-auto lg:text-5xl lg:mb-8"
          content="Are You Ready To Transform Your Relationships And Find Lasting Love?"
          size={2}
        />

        <Text.Heading
          className="!text-lg font-medium mb-4 lg:max-w-3xl lg:mx-auto"
          content="Unlock free access to the courses that are giving our members the breakthroughs they've been looking for with our cyber monday 14-day free trial, right from the comfort of your home."
          size={4}
        />

        <MHAButton />

        <Text.Paragraph className="mt-2 font-bold italic" content="*This offer ends soon!*" />
      </Section>

      <Image className="relative w-full mt-0 z-5 2xl:-mt-5" src="styled-wave-green.png" />

      <SpecialPromotion />
    </Page>
  )
}
