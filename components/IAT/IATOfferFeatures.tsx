// core
import Image from 'next/image'
// components
import { Section } from '../Section'
import { ButtonScroll } from '../Button/variants/ButtonScroll'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// config
import { IAT_COPY as IAT } from '@/app/(default-layout)/iat/config'

export const IATOfferFeatures = () => {
  return (
    <Section
      className="bg-black-secondary text-white px-7 py-8 lg:py-14"
      classNameInner="!text-left">
      <div className="flex flex-col lg:space-x-14 lg:flex-row">
        <div className="max-w-[502px] mt-6">
          <h2 className="mb-10">
            What You’ll Get with The Integrated Attachment Theory™ Certification
          </h2>

          {IAT.what_you_get.copy.map((copy, i) => (
            <p key={`what_you_get_copy_${i}`} className="mb-4">
              {copy}
            </p>
          ))}

          <Image
            alt="IAT Certification Mockup 1"
            className="mt-6 lg:w-full lg:mt-11"
            src="/images/IATPage/iat-learn-mockup.png"
            width={351}
            height={266}
          />
        </div>

        <div className="max-w-[502px]">
          {IAT.what_you_get.benefits.map((benefit, index) => (
            <div key={`benefit-${index}`}>
              <div className="flex flex-row mt-10 lg:mt-6">
                <FontAwesomeIcon className="text-primary my-auto" icon={benefit.icon} size="lg" />

                <p className="font-bold tracking-33 ml-4 !mb-0">{benefit.title}</p>
              </div>

              <p className="font-normal mt-2">{benefit.copy}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 text-center lg:mt-28">
        <h2>Is This Certification For Me?</h2>

        <div className="flex flex-col mt-8 lg:mt-13 lg:flex-row lg:space-x-14">
          <div className="max-w-[502px] text-center lg:text-left">
            <Image
              alt="IAT Benefits Mockup Mobile"
              className="w-full lg:hidden"
              src="/images/IATPage/benefits-mockup.png"
              width={351}
              height={452}
            />

            <p className="font-bold text-left mt-10 tracking-33 lg:mt-0">IT'S FOR EVERYONE!</p>

            {IAT.what_you_get.secondaryCopy.map((copy, idx) => (
              <p key={`secondary_copy_${idx}`} className="text-left mt-2 mb-4">
                {copy}
              </p>
            ))}

            <ButtonScroll label="SIGN UP TODAY" target="#click-purchase-target" />
          </div>

          <div className="w-full max-w-[502px]">
            <Image
              alt="IAT Benefits Mockup Desktop"
              className="w-full hidden lg:block"
              src="/images/IATPage/benefits-mockup-desktop.png"
              width={434}
              height={386}
            />
          </div>
        </div>
      </div>
    </Section>
  )
}
