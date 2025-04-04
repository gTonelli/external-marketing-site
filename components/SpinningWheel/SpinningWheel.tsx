'use client'
// core
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
// components
import { Loader } from '../Loader'
import { List } from '../List'
import { SignupForm } from '../Forms/SignupForm'
import { Button } from '../Button/Button'
import { Dialog } from '../Dialog/Dialog'
import { ButtonCheckout } from '../Button/variants/ButtonCheckout'
import { Toast } from '../Toast'
import { faCircleExclamation, faClose } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faCircleSmall } from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import {
  TSpinWheelVariant,
  getSpinWheelPrizes,
  getSpinWheelPrizeDistribution,
  prizes,
} from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { MD5 } from 'crypto-js'
import Confetti from 'react-confetti-boom'
// modules
import { Storage } from '@/modules/Storage'
import Mixpanel from '@/modules/Mixpanel'

interface ISpinWheelProps {
  pageVariant: TSpinWheelVariant
  firstName?: string
  email?: string
}

const Wheel = dynamic(() => import('react-custom-roulette').then((mod) => mod.Wheel), {
  loading: () => <Loader />,
  ssr: false,
})

export const SpinningWheel = ({ pageVariant, firstName, email }: ISpinWheelProps) => {
  const spinWheelPrizes = getSpinWheelPrizes(pageVariant)
  const spinWheelDistribution = getSpinWheelPrizeDistribution(pageVariant)

  // ========= STATE =========
  const [loading, setLoading] = useState(true)
  const [mustSpin, setMustSpin] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [wheelHasSpun, setWheelHasSpun] = useState(false)
  const [showPrizePopup, setShowPrizePopup] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const wheelResult = Storage.get(`gm-1549-spin-wheel-${pageVariant}`)
    if (wheelResult !== null) {
      setPrizeNumber(wheelResult)
      setShowPrizePopup(true)
      setWheelHasSpun(true)
    } else {
      const newPrizeNumber = Math.floor((crypto.getRandomValues(new Uint8Array(1))[0] / 255) * 100)
      for (let i = 0; i < spinWheelDistribution.length; i++) {
        if (newPrizeNumber <= spinWheelDistribution[i]) {
          setPrizeNumber(i)
          break
        }
      }
    }
    setLoading(false)
  }, [spinWheelDistribution, pageVariant])

  const handleSpinClick = () => {
    setSubmitting(true)
    if (wheelHasSpun) return

    if (pageVariant === 'email' && firstName && email) {
      const insertId = MD5(Date.now() + JSON.stringify({ email })).toString()

      const requestBody = {
        tags: [prizes[pageVariant][prizeNumber].userTag],
        firstName,
        email,
        listIds: [40],
        insertId,
      }

      fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then((res) => res.json())
        .then((res) => {
          if (!res.success) throw res?.message || 'An unexpected error occured'
          else {
            Mixpanel.track.SignUp({ distinct_id: email, $insert_id: insertId })
            Storage.set(`gm-1549-spin-wheel-${pageVariant}`, prizeNumber)
            setMustSpin(true)
          }
        })
        .catch((error) => {
          setToastMessage(error)
          setShowToast(true)
          console.error(error)
        })
    } else {
      Storage.set(`gm-1549-spin-wheel-${pageVariant}`, prizeNumber)
      setMustSpin(true)
    }
  }

  if (loading) return <Loader />

  return (
    <div
      id="spin-wheel"
      className="absolute w-full grid grid-cols-1 gap-8 bg-white shadow-xl rounded-lg overflow-hidden -top-16 left-0 p-4 z-10 md:-top-20 lg:-top-32 lg:grid-cols-2 lg:p-6">
      <div>
        <Wheel
          textDistance={52}
          fontSize={17}
          spinDuration={0.5}
          radiusLineColor="white"
          radiusLineWidth={3}
          innerBorderColor="none"
          outerBorderWidth={0}
          innerBorderWidth={0}
          startingOptionIndex={
            wheelHasSpun ? prizeNumber : Math.floor(Math.random() * spinWheelPrizes.length)
          }
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={spinWheelPrizes}
          onStopSpinning={() => {
            setMustSpin(false)
            setShowPrizePopup(true)
            setWheelHasSpun(true)
          }}
        />

        <Toast
          type="error"
          showToast={showToast}
          setShowToast={setShowToast}
          message={toastMessage}
        />

        <Dialog
          className="w-full max-w-5xl p-4 bg-white rounded-20 md:p-8 lg:p-12"
          isShown={showPrizePopup}
          onToggle={() => setShowPrizePopup(!showPrizePopup)}>
          <div className="overflow-auto">
            <Confetti particleCount={1000} spreadDeg={360} />

            <div className="w-full flex justify-end mb-8">
              <FontAwesomeIcon
                icon={faClose}
                size="2x"
                role="button"
                onClick={() => setShowPrizePopup(false)}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 py-4 lg:py-10 lg:grid-cols-2">
              <div className="flex justify-center">
                <Image
                  className="w-60 md:w-96 lg:w-full"
                  alt="Congratulations image with gifts and balloons"
                  src="/images/congratulations.png"
                  width={370}
                  height={350}
                />
              </div>

              <SpinWheelSuccess
                pageVariant={pageVariant}
                prizeNumber={prizeNumber}
                ctaLocation="popup"
              />
            </div>
          </div>
        </Dialog>
      </div>

      {wheelHasSpun ? (
        <SpinWheelSuccess pageVariant={pageVariant} prizeNumber={prizeNumber} ctaLocation="card" />
      ) : pageVariant === 'email' && firstName && email ? (
        <div className="flex flex-col justify-center items-center">
          <h2 className="mb-4">
            Feeling Lucky? Spin Now for Your Chance to Win Your Exclusive Offer on the All-Access
            Pass!
          </h2>

          <p className="mb-4">
            <strong>
              Hurry! We’ve Never Offered an Opportunity Like This Before! This Offer is Only Valid
              for a Very Limited Time!
            </strong>
          </p>

          <Button
            disabled={submitting}
            label="SPIN NOW!"
            mpProps={{ wheelPrize: prizes[pageVariant][prizeNumber].option }}
            onClick={handleSpinClick}
          />
        </div>
      ) : (
        <div className="text-left">
          <h2 className="mb-4">Spin Now for Your Chance to Win the All-Access Pass!</h2>

          <p className="mb-8">
            <strong>
              Hurry! Enter Your Details For a Chance to Spin the Wheel! We’ve Never Offered an
              Opportunity Like This Before! This Offer is Only Valid for a Very Limited Time!
            </strong>
          </p>

          <SignupForm
            classNameFields="!flex-col !gap-y-4"
            submitButtonLabel="SPIN NOW!"
            successMessage="Spinning..."
            userTags={[prizes[pageVariant][prizeNumber].userTag]}
            listIds={[40]}
            submitButtonMpProps={{ wheelPrize: prizes[pageVariant][prizeNumber].option }}
            onSuccess={handleSpinClick}
          />
        </div>
      )}
    </div>
  )
}

interface ISpinWheelSuccessProps {
  pageVariant: TSpinWheelVariant
  prizeNumber: number
  ctaLocation: 'popup' | 'card'
}

const SpinWheelSuccess = ({ pageVariant, prizeNumber, ctaLocation }: ISpinWheelSuccessProps) => {
  return (
    <div className="text-left">
      <h2 className="text-3xl mb-4">{prizes[pageVariant][prizeNumber].title}</h2>

      <p className="mb-4">
        <strong>{prizes[pageVariant][prizeNumber].subheader}</strong>
      </p>

      <List
        className="mb-4"
        icon={faCircleSmall}
        listItems={prizes[pageVariant][prizeNumber].features}
      />

      <div className="flex bg-[#ECEFFF] rounded-lg p-2 mb-8">
        <div className="w-6">
          <FontAwesomeIcon icon={faCircleExclamation} className="text-[#142BD5] mr-2" />
        </div>

        <div>
          <p>
            <em>
              <strong>Disclaimer: </strong> {prizes[pageVariant][prizeNumber].disclaimer}
            </em>
          </p>
        </div>
      </div>

      <ButtonCheckout
        label="CLAIM YOUR PRIZE!"
        href={prizes[pageVariant][prizeNumber].checkoutLink}
        mpProps={{ wheelPrize: prizes[pageVariant][prizeNumber].option, ctaLocation }}
      />
    </div>
  )
}
