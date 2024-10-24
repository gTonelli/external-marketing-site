'use client'

// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
import { SpecialPromotionBody, MHAButton } from '@/components/SpecialPromotion'

export const FreeTrial14Day = () => {
  return (
    <Page className="w-full overflow-hidden" page_name="Valentine's Day">
      {/* HEADER TEXT */}
      <Section className="relative z-10 bg-blue-lightest lg:pb-0">
        <Text.Paragraph
          className="mb-3 rounded-lg font-bold bg-blue-dark text-white px-8 py-5 lg:py-6 lg:text-3xl"
          content="Special Offer - 14 Day Free Trial!"
          size={20}
        />

        <Text.Heading
          className="leading-6 text-primary font-bold mb-4 lg:leading-10 lg:max-w-[940px] lg:mx-auto lg:text-5xl lg:mb-8"
          content="Are You Ready To Transform Your Relationships And Find Lasting Love?"
          size={2}
        />

        <Text.Heading
          className="!text-lg font-medium mb-4 lg:max-w-3xl lg:mx-auto"
          content="Unlock free access to the courses that are giving our members the breakthroughs they've been looking for with a 14-day free trial to our All- Access Pass, right from the comfort of your home. Start building the best relationships of your life today."
          size={4}
        />

        <MHAButton label="START MY 14-DAY FREE TRIAL" />

        <Text.Paragraph
          className="mt-2 font-bold italic"
          content="*This offer is available for a limited time. Subscription renews at $67/month!*"
        />
      </Section>

      <Image
        alt="green wave vector"
        className="relative w-full mt-0 z-5 2xl:-mt-5"
        src="styled-wave-green.png"
      />

      <SpecialPromotionBody />
    </Page>
  )
}
