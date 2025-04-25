// components
import { Button } from '@/components/Button/Button'
// config
import { IAT_COPY as IAT } from '@/app/(default-layout)/iat/config'
import { ButtonScroll } from '../Button/variants/ButtonScroll'

interface IIATBannerProps {
  page: 'other' | 'ebook'
}

export const IATBanner = ({ page }: IIATBannerProps) => {
  if (page === 'ebook') {
    return (
      <>
        <p className="max-w-[676px] mt-8 mb-8 text-lg font-bold lg:mx-auto lg:mt-11">
          While we’re sending you your E-book, scroll down to learn more life-changing information
        </p>

        <h1 className="font-bold text-black uppercase !text-[48px] leading-[50px] mb-6">
          It’s Time to Transform Your Career, Life, and Secure Your Future
        </h1>

        <h3 className="font-effra font-bold text-black uppercase tracking-33 mb-6 text-[24px]">
          Become a Certified Relationship Coach in Just 12 Weeks and Create Your Own Thriving
          Practice
        </h3>

        <p className="max-w-[676px] font-bold mb-4 lg:mx-auto">
          Learn why hundreds of people are signing up for the IAT™ Relationship Coaching Program.
        </p>

        <p className="max-w-[676px] font-bold mb-4 lg:mx-auto">
          This 12-week revolutionary program teaches and empowers you to create a thriving practice,
          earn a higher income, expand your career opportunities, and deliver life-changing results
          for your community.
        </p>

        <p className="max-w-[676px] font-bold mb-4 lg:mx-auto">
          With the easiest tools, simplest strategies, and reliable resources, you’ll become a
          certified relationship coach – and change your finances, relationships, and future in the
          process!
        </p>

        <ButtonScroll
          className="trial-btn relative mt-11 md:top-6 md:mt-0 lg:mt-8"
          label="SIGN UP NOW"
          target="#click-purchase-target"
        />
      </>
    )
  }

  return (
    <>
      <h1 className="font-bold text-black !text-[48px] leading-[50px]">
        {IAT.hero_section.heading}
      </h1>

      <p className="font-bold text-black mt-3 tracking-0.325 text-[24px] mb-4">
        {IAT.hero_section.subheading}
      </p>

      {IAT.hero_section.copy.map((copy, i) => (
        <p key={`hero_Section_copy_${i}`} className="max-w-[676px] font-bold mb-4 lg:mx-auto ">
          {copy}
        </p>
      ))}

      <ButtonScroll
        className="trial-btn relative mt-6 md:top-6 md:mt-0 lg:mt-6"
        label="GET STARTED NOW"
        target="#click-purchase-target"
      />
    </>
  )
}
