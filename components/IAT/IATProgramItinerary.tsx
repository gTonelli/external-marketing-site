// core
import Image from 'next/image'
// components
import { Section } from '../Section'
import { ButtonScroll } from '../Button/variants/ButtonScroll'
import { IATCurriculumCard } from './IATCurriculumCard'
// config
import { IAT_COPY as IAT } from '@/app/(default-layout)/iat/config'

export const IATProgramItinerary = ({ isVariant = false }: { isVariant?: boolean }) => {
  return (
    <>
      <Image
        alt="Grey Curve Background on Mobile"
        className="w-full md:hidden"
        src="/images/IATPage/iat-curriculum-bg.png"
        width={375}
        height={14}
      />

      <Image
        alt="Grey Curve Background on Desktop"
        className="relative z-10 hidden w-full md:block"
        src="/images/IATPage/iat-curriculum-bg-desktop.jpg"
        width={1440}
        height={88}
        quality={100}
        sizes="100vw"
      />
      <Section className="relative z-5 bg-[#e3eded80] lg:bottom-12">
        <h2 className="mb-4 lg:mb-16">Program Itinerary</h2>

        {IAT.itinerary.map((week, index) => (
          <IATCurriculumCard
            key={`itinerary_${index}`}
            heading={week.heading}
            initialOpenState={index == 0 ? true : false}
            listItems={isVariant ? [...week.listItems, week.variantListItem] : week.listItems}
            textBottom={week.textBottom}
            textTop={week.textTop}
          />
        ))}

        <ButtonScroll label="SIGN UP TODAY" target="#click-purchase-target" />
      </Section>
    </>
  )
}
