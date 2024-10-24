// components
import { Section } from '@/components/Section'
import { Image } from '@/components/Image'
import { SpecialPromotionBody, MHAButton } from '@/components/SpecialPromotion'

interface PromotionPageProps {
  page: 'Black Friday' | 'Cyber Monday'
}

/* Black Friday or Cyber Monday Promotion */
export default function PromotionPage({ page }: PromotionPageProps) {
  return (
    <>
      {/* HEADER TEXT */}
      <Section className="relative z-10 bg-blue-lightest lg:pb-0">
        <p className="text-xl rounded-lg font-bold bg-blue-dark text-white mb-3 px-8 py-5 lg:py-6 lg:text-3xl">
          {`Claim Your ${page} Offer!`}
        </p>

        <p className="leading-6 text-primary font-bold mb-4 lg:leading-10 lg:max-w-[940px] lg:mx-auto lg:text-5xl lg:mb-8">
          Are You Ready To Transform Your Relationships And Find Lasting Love?
        </p>

        <h4 className="!text-lg font-medium mb-4 lg:max-w-3xl lg:mx-auto">
          Unlock unlimited access to life-changing courses and programs that will give you the
          breakthroughs to transform your life and relationships! Sign up for our {page + ' '}
          14-Day Free Trial and experience change from the comfort of your home with this momentous
          opportunity.
        </h4>

        <MHAButton label="START YOUR 14-DAY FREE TRIAL!" />

        <p className="mt-2 font-bold italic">*This offer ends soon!*</p>
      </Section>

      <Image
        alt="green wave vector"
        className="relative w-full mt-0 z-5 2xl:-mt-5"
        src="styled-wave-green.png"
      />

      <SpecialPromotionBody />
    </>
  )
}
