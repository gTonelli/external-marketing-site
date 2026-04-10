'use client'
// core
import { useState } from 'react'
import Image from 'next/image'
// components
import { ButtonCheckout } from '../Button/variants/ButtonCheckout'
import { faShieldCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
// config
import { TMasterclassTitle } from '@/app/(custom-layouts)/(no-nav)/masterclass/config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import cx from 'classnames'
// utils
import { externalRoutes } from '@/utils/constants'

export const MasterclassPricing = ({
  classNameFooter,
  masterclassTitle,
}: {
  classNameFooter?: string
  masterclassTitle?: TMasterclassTitle
}) => {
  const [monthlyActive, setMonthlyActive] = useState(false)

  return (
    <div className="min-h-fit max-w-96 w-full sm:min-w-96">
      <div className="bg-white rounded-2xl shadow-[0px_0px_40px_0px_rgba(0,0,0,0.20)] p-4 mb-4 lg:p-6">
        <div className="flex justify-start items-center gap-4 mb-4">
          <div className="w-fit flex justify-center items-center gap-2 border border-gray-200 rounded-full p-2">
            <div
              role="button"
              onClick={() => setMonthlyActive(true)}
              className={`w-fit ${monthlyActive ? 'bg-primary text-white' : 'bg-white text-black'} rounded-full px-4 py-2`}>
              Monthly
            </div>

            <div
              role="button"
              onClick={() => setMonthlyActive(false)}
              className={`w-fit ${!monthlyActive ? 'bg-primary text-white' : 'bg-white text-black'} rounded-full px-4 py-2`}>
              Yearly
            </div>
          </div>

          {!monthlyActive && (
            <div className="bg-green-check text-xs text-white rounded-10 px-4 py-2">
              <strong>BEST VALUE</strong>
            </div>
          )}
        </div>

        <div className="text-left">
          <h3 className="!text-3xl text-gray-500">The All-Access Pass</h3>

          {monthlyActive ? (
            <>
              <h3 className="text-gray-500 line-through mb-0">$99</h3>

              <div className="flex">
                <h2 className="!text-6xl mb-0">$49</h2>
                <p className="pl-4">/per month</p>
              </div>

              <p className="text-gray-500 mb-10">Pay monthly. Cancel anytime.</p>

              <ButtonCheckout
                className="masterclass-yellow-cta w-full"
                label="BECOME A MEMBER"
                href={externalRoutes.checkoutMasterclassMonthly.concat(
                  masterclassTitle ? `-${masterclassTitle}` : ''
                )}
              />
            </>
          ) : (
            <>
              <h3 className="text-gray-500 line-through mb-0">$399</h3>

              <div className="flex">
                <h2 className="!text-6xl mb-0">$299</h2>
                <p className="pl-4">/per year</p>
              </div>

              <p className="text-gray-500">
                That’s just $24.90/month, billed annually. Cancel anytime.
              </p>

              <ButtonCheckout
                className="masterclass-yellow-cta w-full"
                label="BECOME A MEMBER"
                href={externalRoutes.checkoutMasterclassYearly.concat(
                  masterclassTitle ? `-${masterclassTitle}` : ''
                )}
              />
            </>
          )}

          <p className="text-center text-gray-500 mt-2 mb-0">
            <span>
              <FontAwesomeIcon icon={faShieldCheck} className="mr-2" />
            </span>

            <span>15-day money-back guarantee</span>
          </p>
        </div>
      </div>

      <div className={cx('text-white', classNameFooter)}>
        <div className="flex justify-center items-center mb-4">
          <Image
            src="/images/Masterclass/payment-options.png"
            alt="Payment Options"
            width={280}
            height={48}
          />
        </div>

        <p>
          <em>All orders are processed on a secure server</em>
        </p>
      </div>
    </div>
  )
}
