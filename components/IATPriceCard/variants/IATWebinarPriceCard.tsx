'use client'

// core
import Image from 'next/image'
import { useState } from 'react'
// components
import { Button } from '@/components/Button/Button'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faChevronLeft, faCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export type TIATCardDetails = {
  title: string
  originalPrice: { price: string; label?: string }[]
  currentPrice: string
  currentPriceLabel?: string
  discount?: string
  subheader?: string
  copy?: string
  perks: string[]
}

export type TIATPriceOption = {
  price: string
  label: string
  checkout: string
}

interface IIATWebinarPriceCardProps {
  isLive?: boolean
  pricingMenu: TIATPriceOption[]
  cardDetails: TIATCardDetails
}

export const IATWebinarPriceCard = ({
  cardDetails,
  pricingMenu,
  isLive = false,
}: IIATWebinarPriceCardProps) => {
  const [showPricing, setShowPricing] = useState(false)
  const [currentOption, setCurrentOption] = useState(0)

  if (showPricing) {
    return (
      <div className="flex flex-col bg-white text-left shadow-lg rounded-2xl p-6">
        <div className="h-11">
          {isLive ? (
            <Image
              src="/images/IATPage/live-icon-red.png"
              alt="IAT Live icon"
              width={120}
              height={43}
            />
          ) : (
            <Image
              className="h-full"
              src="/images/IATPage/recorded-icon-red.png"
              alt="IAT Recorded icon"
              width={180}
              height={43}
            />
          )}
        </div>

        <h2>{cardDetails.title}</h2>

        <div className="text-center border-t border-b border-black py-4">
          {cardDetails.originalPrice.map((entry, idx) => (
            <p key={idx} className="mb-2">
              <span className="line-through mr-2">{entry.price}</span>

              {entry.label && <span>{entry.label}</span>}
            </p>
          ))}

          <div className="flex justify-center items-center flex-wrap">
            <h3 className="text-green-check mr-2">{cardDetails.currentPrice}</h3>

            {cardDetails.currentPriceLabel && <p>{cardDetails.currentPriceLabel}</p>}
          </div>

          {cardDetails.discount && <p className="font-bold tracking-33">{cardDetails.discount}</p>}
        </div>

        <div className="py-6">
          {pricingMenu.map((option, idx) => {
            let isSelected = idx === currentOption
            return (
              <div
                key={`price_opt_${idx}`}
                className={cx(
                  'w-full grid grid-cols-12 gap-1 rounded-lg border border-primary p-4 mb-4 hover:cursor-pointer',
                  isSelected ? 'bg-primary text-white' : 'text-inherit'
                )}
                role="button"
                onClick={() => setCurrentOption(idx)}>
                <div className="col-span-1">
                  <FontAwesomeIcon
                    className="mt-2"
                    icon={isSelected ? faCheckCircle : faCircle}
                    type="light"
                  />
                </div>

                <div className="col-span-11">
                  <h3 className="mb-2">
                    {option.price} {idx !== 0 ? <span className="text-sm">/month</span> : ''}
                  </h3>

                  <p className="font-bold tracking-33">{option.label}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="flex-1 flex justify-between items-end justify-items-center">
          <p className="hover:cursor-pointer" role="button" onClick={() => setShowPricing(false)}>
            <FontAwesomeIcon icon={faChevronLeft} className="mr-2" />
            Go Back
          </p>

          <ButtonCheckout
            label="SIGN UP NOW"
            href={pricingMenu[currentOption].checkout}
            mpProps={{
              plan_pricing: pricingMenu[currentOption].label,
              plan_type: `${isLive ? 'live' : 'recorded'}`,
            }}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col text-left bg-white shadow-lg rounded-2xl p-6">
      <div className="h-11">
        {isLive ? (
          <Image
            src="/images/IATPage/live-icon-red.png"
            alt="IAT Live icon"
            width={120}
            height={44}
          />
        ) : (
          <Image
            className="h-full"
            src="/images/IATPage/recorded-icon-red.png"
            alt="IAT Recorded icon"
            width={180}
            height={44}
          />
        )}
      </div>

      <h2 className="mb-4">{cardDetails.title}</h2>

      {cardDetails.originalPrice.map((entry, idx) => (
        <p key={idx} className="mb-2">
          <span className="line-through mr-2">{entry.price}</span>

          {entry.label && <span> {entry.label} </span>}
        </p>
      ))}

      <div className="flex items-center flex-wrap mb-4">
        <h3 className="text-green-check mr-2">{cardDetails.currentPrice}</h3>

        {cardDetails.currentPriceLabel && <p>{cardDetails.currentPriceLabel}</p>}
      </div>

      {cardDetails.discount && <p className="font-bold tracking-33 mb-4">{cardDetails.discount}</p>}

      <div className="mb-4">
        <p className="mb-4">{cardDetails.copy}</p>

        {cardDetails.perks.map((copy, idx) => (
          <p className="font-bold mb-4" key={idx}>
            {copy}
          </p>
        ))}
      </div>

      <div className="flex flex-1 items-end">
        <Button label="SELECT MY PAYMENT PLAN" onClick={() => setShowPricing(true)} />
      </div>
    </div>
  )
}
