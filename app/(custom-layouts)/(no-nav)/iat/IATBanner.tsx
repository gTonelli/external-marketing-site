import { Text } from '@/components/Text/Text'
import { Button } from '@/components/Button/Button'
import { IAT_COPY as IAT } from './config'

interface IIATBannerProps {
  page: 'other' | 'ebook'
  onClickPurchase: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
}

export const IATBanner = ({ page, onClickPurchase }: IIATBannerProps) => {
  if (page === 'ebook') {
    return (
      <>
        <p className="max-w-[676px] mt-8 mb-8 text-lg font-bold lg:mx-auto lg:mt-11">
          While We’re Sending Our Ebook, Scroll Down to Learn More Life-Changing Information
        </p>

        <h1 className="font-effra font-bold text-black uppercase !text-[48px] leading-[50px]">
          TRANSFORM YOUR CAREER, FINANCES, & LIFE
        </h1>

        <h3 className="font-effra font-bold text-black uppercase tracking-33 mt-3 text-[24px]">
          By Being a Certified Relationship Coach
        </h3>

        <Text.Paragraph
          useMD
          className="max-w-[676px] mt-8 font-bold lg:mx-auto lg:mt-11"
          content={`Learn why hundreds of people are signing up for the IAT™ Relationship Coaching Program.\n\nThis 12-week revolutionary program teaches and empowers you to create a thriving practice, earn a higher income, expand your career opportunities, and deliver life-changing results for your community.\n\nWith the easiest tools, simplest strategies, and reliable resources, you’ll become a certified relationship coach – and change your finances, relationships, and future in the process! `}
        />

        <Button
          className="trial-btn relative mt-11 md:top-6 md:mt-0 lg:mt-8"
          label="SIGN UP NOW"
          onClick={onClickPurchase}
        />
      </>
    )
  }

  return (
    <>
      <Text.Heading
        className="font-effra font-bold text-black !text-[48px] leading-[50px]"
        content={IAT.hero_section.heading}
      />

      <Text.Heading
        className="font-effra font-bold text-black mt-3 text-[24px]"
        content={IAT.hero_section.subheading}
        spacing="tracking-0.325"
      />

      <Text.Paragraph
        useMD
        className="max-w-[676px] mt-8 font-bold lg:mx-auto lg:mt-11"
        content={IAT.hero_section.copy}
      />

      <Button
        className="trial-btn relative mt-11 md:top-6 md:mt-0 lg:mt-8"
        label="GET STARTED NOW"
        onClick={onClickPurchase}
      />
    </>
  )
}
