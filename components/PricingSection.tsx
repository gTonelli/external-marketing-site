'use client'

// core
import { useState } from 'react'
// components
import { IDefaultProps } from '.'
// libraries
import cx from 'classnames'
// utils
import { EExternalRoutes } from '@/utils/constants'
import Link from 'next/link'
import { Button } from './Button/Button'

export const PricingSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  return (
    <div className="max-w-lg">
      <div className="flex w-full justify-between rounded-full bg-white p-[1px] border-2 border-black mb-4">
        {defaultData.map((data, i) => (
          <button
            key={`pricing_section_button_${i}`}
            className={cx(
              'py-2 px-4 rounded-full text-xs xxs:tracking-10 xs:text-base sm:tracking-33',
              selectedIndex === i ? 'bg-black text-white' : 'text-black bg-white'
            )}
            onClick={() => setSelectedIndex(i)}>
            {data.pillText}
          </button>
        ))}
      </div>

      <div className="relative text-left overflow-hidden rounded-20 shadow-md p-4 bg-white">
        <h3 className="mb-2">All-Access Pass</h3>

        <p className="mb-6">Everything you need, all in one place</p>

        <div className="grid grid-cols-[27px_1fr] gap-x-4 items-center mb-2 lg:mb-6 lg:flex">
          <s className="text-danger">${defaultData[selectedIndex].initialPrice}</s>

          <h2 className="!text-5xl text-success">${defaultData[selectedIndex].finalPrice}</h2>

          <p className="col-span-2 lg:col-span-1 lg:self-end lg:mb-0">
            billed {defaultData[selectedIndex].billingFrequency}
          </p>
        </div>

        <Link href={defaultData[selectedIndex].link}>
          <Button className="w-full" label="SIGN UP NOW" />
        </Link>
      </div>
    </div>
  )
}

const defaultData = [
  {
    pillText: 'MONTHLY',
    percentageSavings: 30,
    initialPrice: 97,
    finalPrice: '67.00',
    billingFrequency: 'monthly',
    link: EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION,
  },
  {
    pillText: 'QUARTERLY',
    percentageSavings: 42,
    initialPrice: 297,
    finalPrice: '169.00',
    billingFrequency: 'quarterly',
    link: EExternalRoutes.THINKIFIC_CHECKOUT_QUARTERLY_PLAN,
  },
  {
    pillText: 'ANNUALLY',
    percentageSavings: 53,
    initialPrice: 1164,
    finalPrice: '549.00',
    billingFrequency: 'yearly',
    link: EExternalRoutes.THINKIFIC_CHECKOUT_ANNUAL_PLAN,
  },
]
