'use client'

// core
import { useState } from 'react'
import Image from 'next/image'
// components
import { Button } from '../Button/Button'
import { ButtonCheckout } from '../Button/variants/ButtonCheckout'
import { List } from '../List'
import { Section } from '../Section'
// libraries
import { faCircleCheck, faCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

type TIATPrice = {
  price: string
  priceLabel?: string
  bottomText: string
  link: string
}

interface IIATPriceCard {
  benefits: string[]
  heading: string
  isLive?: boolean
  isCardExpanded?: boolean
  originalPrice?: string
  prices: TIATPrice[]
  salePrice: string
  subheading?: string
  onClose?: () => void
}

export const IATPriceCard = ({
  benefits,
  heading,
  isLive = false,
  isCardExpanded = false,
  originalPrice,
  prices,
  salePrice,
  subheading,
  onClose,
}: IIATPriceCard) => {
  // ================== State =============
  const [isExpanded, setIsExpanded] = useState(isCardExpanded)
  const [selectedCardIndex, setSelectedCardIndex] = useState(0)

  return (
    <>
      {!isExpanded ? (
        isLive ? (
          // LIVE, NOT EXPANDED
          <Section className="relative rounded-3xl border-2 border-green-check px-3 pt-4 pb-4 mb-8 lg:px-4 lg:pb-6 lg:pt-6">
            <div className="absolute -mt-20 left-1/2 -translate-x-1/2 ">
              <p className="w-[280px] text-center text-white font-bold bg-green-check rounded-10 py-4 tracking-0.325 md:px-4">
                RECOMMENDED
              </p>
            </div>

            <Image
              alt="Live Icon Red"
              className="mx-auto h-12"
              src="/images/IATPage/live-icon-red.png"
              width={120}
              height={43}
            />

            <h2 className="mt-4">{heading}</h2>

            {originalPrice && (
              <p className="font-bold line-through tracking-33 mt-1">{originalPrice}</p>
            )}

            {subheading && <p className="font-bold tracking-33 !mb-0 mt-5">{subheading}</p>}

            <div className="flex flex-center flex-row mt-1">
              <p className="font-ssp font-bold !text-green-check !text-[26px] !mb-0">
                50% OFF:&nbsp;
              </p>

              <h3 className="mt-1 mb-0">{` ${salePrice}`}</h3>
            </div>

            <List
              className="text-left mt-7"
              classNameIcon="!text-primary"
              classNameListItems="mt-4"
              icon={faCircleCheck}
              listItems={benefits}
            />

            <Button
              className="w-max mx-auto mt-12 lg:mt-14"
              label="SEE PRICES"
              onClick={() => setIsExpanded(true)}
            />
            <p className="italic mt-3">Book a call to get additional 5% OFF</p>
          </Section>
        ) : (
          // RECORDED, NOT EXPANDED
          <Section
            className="flex flex-col relative rounded-3xl shadow-2xl px-3 pt-4 pb-4 mb-8 lg:px-4 lg:pb-6 lg:pt-6"
            classNameInner="flex flex-col flex-grow">
            <Image
              alt="Recorded Icon Red"
              className="w-fit h-12 mx-auto"
              src="/images/IATPage/recorded-icon-red.png"
              width={120}
              height={43}
            />

            <h2 className="mt-4">{heading}</h2>

            {originalPrice && (
              <p className="font-bold line-through tracking-33 mt-1">{originalPrice}</p>
            )}

            <div className="flex flex-center flex-row mt-1">
              <p className="font-ssp font-bold !text-green-check !text-[26px] !mb-0">
                50% OFF:&nbsp;
              </p>

              <h3 className="mt-1 mb-0">{` ${salePrice}`}</h3>
            </div>

            {subheading && <p className="font-bold tracking-33 mt-5">{subheading}</p>}

            <List
              className="text-left mt-7"
              classNameIcon="!text-primary"
              classNameListItems="mt-4"
              icon={faCircleCheck}
              listItems={benefits}
            />

            <Button
              className="mt-16 w-max mx-auto lg:mt-14"
              label="SEE PRICES"
              onClick={() => setIsExpanded(true)}
            />

            <p className="italic mt-3">Book a call to get additional 5% OFF</p>
          </Section>
        )
      ) : (
        // EXPANDED
        <Section
          className={`relative rounded-3xl bg-white ${
            isLive ? 'border-2 border-green-check' : 'shadow-2xl'
          } px-2 pt-8 mb-8 !pb-0 lg:px-4`}
          classNameInner="!max-w-full !px-4 !m-0 mx-auto">
          {isLive && (
            <div className="absolute -top-12 left-1/2 -translate-x-1/2">
              <p className="w-[280px] text-center text-white font-bold bg-green-check rounded-10 py-4 tracking-0.325 md:px-4">
                RECOMMENDED
              </p>
            </div>
          )}

          {originalPrice && <p className="text-xl font-medium line-through">{originalPrice}</p>}

          <h2 className="text-black text-h1">{salePrice}</h2>

          <div className="grid grid-cols-2 items-center gap-2 border-grey border-t-2 py-2 mb-2 lg:gap-4">
            {prices.map((data, index) => (
              <div
                key={`price_${index}`}
                className={`p-2 rounded-10 col-span-2 border-2 border-primary cursor-pointer
                  lg:hover:bg-gray-light lg:p-3 ${
                    selectedCardIndex === index ? 'bg-primary text-white lg:!bg-primary' : ''
                  }`}
                onClick={() => setSelectedCardIndex(index)}>
                <div className="flex items-start mb-2">
                  {selectedCardIndex === index ? (
                    <FontAwesomeIcon className="pt-[5px] text-white" icon={faCircleCheck} />
                  ) : (
                    <FontAwesomeIcon className="pt-[5px] text-black" icon={faCircle} />
                  )}

                  <div className="flex items-end">
                    <p
                      className={`inline font-sspb !text-3xl text-black mx-2 ${
                        selectedCardIndex === index ? 'text-white' : 'text-black'
                      }`}>
                      {data.price}
                    </p>

                    <p className="inline font-medium">{data.priceLabel}</p>
                  </div>
                </div>

                <p className="text-left tracking-[0.2em] font-medium font-xl">{data.bottomText}</p>
              </div>
            ))}

            <Button
              className="!text-black w-full border-primary border-2 bg-white"
              label="BACK"
              onClick={() => {
                setIsExpanded(false)
                onClose?.()
              }}
            />

            <ButtonCheckout
              className="w-full"
              label="BUY NOW"
              href={prices[selectedCardIndex].link}
              mpProps={{
                plan_pricing: prices[selectedCardIndex].bottomText,
                plan_type: `${isLive ? 'live' : 'recorded'}`,
              }}
            />
          </div>
        </Section>
      )}
    </>
  )
}
