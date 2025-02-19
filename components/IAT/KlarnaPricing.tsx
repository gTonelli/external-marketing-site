'use client'

// core
import { useState, useEffect } from 'react'
// components
import { Loader } from '../Loader'
import { Section } from '../Section'
import Image from 'next/image'
import { List } from '../List'
import { IAT_COPY as config } from '@/app/(default-layout)/iat/config'
import { Button } from '../Button/Button'
import { IATPriceCardSection } from './IATPage'
import Link from 'next/link'
import {
  faCircleCheck,
  faCircle,
  faCreditCard,
} from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faCircle as faCircleSolid } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// libraries
import cx from 'classnames'
// utils
import { EExternalRoutes } from '@/utils/constants'
import { getUserCountry } from '@/utils/functions'

export const KlarnaPricing = () => {
  const [countryCode, setCountryCode] = useState<string | undefined>()
  const [isVariant, setIsVariant] = useState<boolean | undefined>()

  useEffect(() => {
    const abortController = new AbortController()
    getUserCountry().then((countryCode) => {
      if (abortController.signal.aborted) return
      console.log('countryCode', countryCode)
      if (countryCode === 'US') {
        setIsVariant(true)
      } else {
        setIsVariant(false)
      }
      setCountryCode(countryCode)
    })

    return () => {
      abortController.abort()
    }
  }, [])

  if (!countryCode || isVariant === undefined) return <Loader className="!py-96" />

  console.log('countryCode', countryCode)
  if (countryCode !== 'US') {
    return <IATPriceCardSection />
  }

  return (
    <Section classNameInner="max-w-md mt-12 lg:max-w-5xl lg:mt-0">
      <div className="lg:grid-cols-2 lg:grid lg:gap-8">
        <LivePriceCard />

        <OnDemandPriceCard />
      </div>
    </Section>
  )
}

const LivePriceCard = () => {
  const [showOverview, setShowOverview] = useState(true)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('klarna')

  const klarnaIsSelected = selectedPaymentMethod === 'klarna'

  return (
    <Section className="relative rounded-3xl border-2 border-green-check px-3 pt-4 pb-4 lg:px-4 lg:pb-6 lg:pt-6">
      <div className="absolute -mt-24 left-1/2 -translate-x-1/2 ">
        <p className="w-[280px] text-center text-white font-bold bg-green-check rounded-10 py-4 tracking-0.325 md:px-4">
          RECOMMENDED
        </p>
      </div>

      <Image
        alt="Live Icon Red"
        className="mx-auto mb-5"
        src="/images/IATPage/live-icon-red.png"
        height={43}
        width={120}
      />

      <h2>Live Training</h2>

      <p className="font-bold line-through mt-1 tracking-0.325">$7,000.00</p>

      <div className="flex flex-center flex-row mt-1 mb-4">
        <h3 className="font-ssp font-bold !text-green-check !text-[26px]">50% OFF:&nbsp;</h3>

        <h3 className="mt-1 mb-0">$3,499.00</h3>
      </div>

      <div className="bg-grey-8 py-2 px-4 rounded mb-7">
        <p className="font-bold tracking-0.325">PAYMENT PLANS FROM AS LOW AS $158 PER MONTH</p>
      </div>

      <div className="w-full h-[2px] bg-grey mb-4" />

      {showOverview && (
        <List
          className="text-left mt-3 mb-12"
          classNameIcon="!text-green-check"
          classNameListItems="mt-4"
          icon={faCircleCheck}
          listItems={config.price.live_mode}
        />
      )}

      {!showOverview && (
        <>
          <div
            className={cx(
              'cursor-pointer rounded-10 border-2 p-3 border-purple-dark mb-4',
              klarnaIsSelected ? 'bg-purple-dark text-white' : 'bg-white'
            )}
            onClick={() => setSelectedPaymentMethod('klarna')}>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="mr-2"
                icon={klarnaIsSelected ? faCircleSolid : faCircle}
              />

              <h2>
                <span className="hidden lg:inline">Buy Now, </span>Pay Later
              </h2>

              <Image
                alt="The Klarna branding Icon - the word Klarna on a pink background"
                className="ml-auto"
                src="/images/IATPage/klarna-icon.png"
                width={48}
                height={24}
              />
            </div>

            <p className={cx('text-left', !klarnaIsSelected ? 'text-grey' : 'mb-4')}>
              Payment plans offered by Klarna
            </p>

            {selectedPaymentMethod === 'klarna' ? (
              <>
                <div className="bg-white p-2 rounded mb-2">
                  <List
                    className="text-black pl-2 text-left"
                    classNameListItems="mb-1"
                    classNameIcon="text-[6px] !text-black !pt-2"
                    icon={faCircleSolid}
                    listItems={[
                      'Flexible payment plans as low as $158 per month.',
                      'Payments start in 30 days.',
                      'Credit check required.',
                    ]}
                  />
                </div>
              </>
            ) : null}
          </div>

          <div
            className={cx(
              'cursor-pointer rounded-10 border-2 p-3 border-purple-dark mb-4',
              !klarnaIsSelected ? 'bg-purple-dark text-white' : 'bg-white'
            )}
            onClick={() => setSelectedPaymentMethod('card')}>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="mr-2"
                icon={!klarnaIsSelected ? faCircleSolid : faCircle}
              />

              <h2>Pay Now</h2>

              <FontAwesomeIcon className="ml-auto" icon={faCreditCard} size="2x" />
            </div>

            <p className={cx('text-left', klarnaIsSelected ? 'text-grey' : 'mb-4')}>
              Pay with credit, debit or PayPal
            </p>

            {!klarnaIsSelected ? (
              <>
                <div className="text-black bg-white p-2 rounded flex items-center">
                  <FontAwesomeIcon className="mr-2" icon={faCircleSolid} />

                  <p className="font-bold mr-2">$3,499</p>

                  <p>One Time Payment</p>
                </div>
              </>
            ) : null}
          </div>
        </>
      )}

      <div className="lg:flex">
        <Button
          className={cx(
            'w-max mx-auto mb-4 lg:mb-0 lg:ml-0 lg:w-auto lg:flex-grow lg:mr-2',
            showOverview
              ? 'bg-gradient-to-t from-purple-dark to-purple-medium via-purple-dark'
              : 'bg-white text-black hover:!text-black'
          )}
          label={showOverview ? 'VIEW PAYMENT PLANS' : 'VIEW FEATURES'}
          onClick={() => setShowOverview(!showOverview)}
        />

        {!showOverview && (
          <Link
            className="hover:no-underline lg:w-auto lg:flex-grow lg:flex"
            href={`${EExternalRoutes.THINKIFIC_CHECKOUT_IAT_SPRING_2025_UPFRONT}&klarna=true&pm=${selectedPaymentMethod}`}>
            <Button
              className='className="w-max mx-auto bg-gradient-to-t from-purple-dark to-purple-medium via-purple-dark lg:w-auto lg:flex-grow'
              label="CHECKOUT"
            />
          </Link>
        )}
      </div>

      {showOverview && <p className="italic mt-3">Book a call to get additional 5% OFF</p>}
    </Section>
  )
}

const OnDemandPriceCard = () => {
  const [showOverview, setShowOverview] = useState(true)
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('klarna')

  const klarnaIsSelected = selectedPaymentMethod === 'klarna'

  return (
    <Section
      className="flex flex-col relative rounded-3xl shadow-2xl px-3 pt-4 pb-4 lg:px-4 lg:pb-6 lg:pt-6"
      classNameInner="flex flex-col flex-grow">
      <Image
        alt="Live Icon Red"
        className="mx-auto mb-5"
        src="/images/IATPage/on-demand-icon.svg"
        height={43}
        width={120}
      />

      <h2>On Demand</h2>

      <p className="font-bold line-through mt-1 tracking-0.325">$4,000.00</p>

      <div className="flex flex-center flex-row mt-1 mb-4">
        <h3 className="font-ssp font-bold !text-green-check !text-[26px]">50% OFF:&nbsp;</h3>

        <h3 className="mt-1 mb-0">$1,999.00</h3>
      </div>

      <div className="bg-grey-8 py-2 px-4 rounded mb-7">
        <p className="font-bold tracking-0.325">PAYMENT PLANS FROM AS LOW AS $90 PER MONTH</p>
      </div>

      <div className="w-full h-[2px] bg-grey mb-4" />

      {showOverview && (
        <List
          className="text-left mt-3 mb-12"
          classNameIcon="!text-green-check"
          classNameListItems="mt-4"
          icon={faCircleCheck}
          listItems={config.price.recorded_mode}
        />
      )}

      {!showOverview && (
        <>
          <div
            className={cx(
              'cursor-pointer rounded-10 border-2 p-3 border-purple-dark mb-4',
              klarnaIsSelected ? 'bg-purple-dark text-white' : 'bg-white'
            )}
            onClick={() => setSelectedPaymentMethod('klarna')}>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="mr-2"
                icon={klarnaIsSelected ? faCircleSolid : faCircle}
              />

              <h2>
                <span className="hidden lg:inline">Buy Now, </span>Pay Later
              </h2>

              <Image
                alt="The Klarna branding Icon - the word Klarna on a pink background"
                className="ml-auto"
                src="/images/IATPage/klarna-icon.png"
                width={48}
                height={24}
              />
            </div>

            <p className={cx('text-left', !klarnaIsSelected ? 'text-grey' : 'mb-4')}>
              Payment plans offered by Klarna
            </p>

            {klarnaIsSelected ? (
              <>
                <div className="bg-white p-2 rounded mb-2">
                  <List
                    className="text-black pl-2 text-left"
                    classNameListItems="mb-1"
                    classNameIcon="text-[6px] !text-black !pt-2"
                    icon={faCircleSolid}
                    listItems={[
                      'Flexible payment plans as low as $90 per month.',
                      'Payments start in 30 days.',
                      'Credit check required.',
                    ]}
                  />
                </div>
              </>
            ) : null}
          </div>

          <div
            className={cx(
              'cursor-pointer rounded-10 border-2 p-3 border-purple-dark mb-4',
              !klarnaIsSelected ? 'bg-purple-dark text-white' : 'bg-white'
            )}
            onClick={() => setSelectedPaymentMethod('card')}>
            <div className="flex items-center">
              <FontAwesomeIcon
                className="mr-2"
                icon={!klarnaIsSelected ? faCircleSolid : faCircle}
              />

              <h2>Pay Now</h2>

              <FontAwesomeIcon className="ml-auto" icon={faCreditCard} size="2x" />
            </div>

            <p className={cx('text-left', klarnaIsSelected ? 'text-grey' : 'mb-4')}>
              Pay with credit, debit or PayPal
            </p>

            {!klarnaIsSelected ? (
              <>
                <div className="text-black bg-white p-2 rounded flex items-center">
                  <FontAwesomeIcon className="mr-2" icon={faCircleSolid} />

                  <p className="font-bold mr-2">$1,999</p>

                  <p>One Time Payment</p>
                </div>
              </>
            ) : null}
          </div>
        </>
      )}

      <div className="lg:flex">
        <Button
          className={cx(
            'w-max mx-auto mb-4 lg:mb-0 lg:ml-0 lg:w-auto lg:flex-grow lg:mr-2',
            showOverview
              ? 'bg-gradient-to-t from-purple-dark to-purple-medium via-purple-dark'
              : 'bg-white text-black hover:!text-black'
          )}
          label={showOverview ? 'VIEW PAYMENT PLANS' : 'VIEW FEATURES'}
          onClick={() => setShowOverview(!showOverview)}
        />

        {!showOverview && (
          <Link
            className="hover:no-underline lg:w-auto lg:flex-grow lg:flex"
            href={`${EExternalRoutes.THINKIFIC_CHECKOUT_IAT_RECORDED_UPFRONT}&klarna=true&pm=${selectedPaymentMethod}`}>
            <Button
              className='className="w-max mx-auto bg-gradient-to-t from-purple-dark to-purple-medium via-purple-dark lg:w-auto lg:flex-grow'
              label="CHECKOUT"
            />
          </Link>
        )}
      </div>

      {showOverview && <p className="italic mt-3">Book a call to get additional 5% OFF</p>}
    </Section>
  )
}
