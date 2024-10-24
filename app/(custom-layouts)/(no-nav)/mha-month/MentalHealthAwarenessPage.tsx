'use client'

// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
import { SpecialPromotionBody, MHAButton } from '@/components/SpecialPromotion'

export default function MentalHealthAwareness() {
  return (
    <Page className="w-full overflow-hidden" page_name="mha-month">
      {/* HEADER TEXT */}
      <Section className="relative z-10 bg-blue-lightest lg:pb-0">
        <Text.Heading
          className="leading-6 font-effra font-bold lg:leading-10 lg:max-w-[940px] lg:mx-auto lg:text-5xl lg:mb-8"
          content="Tame Your Anxiety, Build Your Self-Esteem, or Break Your Toxic Relationship Patterns"
          size={1}
        />

        <Text.Paragraph
          className="!leading-6 !tracking-0.325 text-primary font-extrabold !text-xl my-4"
          content="RIGHT FROM YOUR HOME IN THE NEXT 2 WEEKS"
        />

        <Text.Paragraph
          className="!text-lg font-medium mb-4 lg:max-w-lg lg:mx-auto"
          content="Unlock free access to the courses that are giving our members the breakthroughs they've been looking for."
        />

        <MHAButton />
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
