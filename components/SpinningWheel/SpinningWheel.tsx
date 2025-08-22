'use client'
// core
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import Image from 'next/image'
// components
import { Loader } from '../Loader'
import { SignupForm } from '../Forms/SignupForm'
import { Button } from '../Button/Button'
import { Dialog } from '../Dialog/Dialog'
import { ButtonCheckout } from '../Button/variants/ButtonCheckout'
import { Toast } from '../Toast'
import { faCircleExclamation, faClose } from '@awesome.me/kit-545b942488/icons/classic/regular'
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
  const storageVar = 'gm-1834-spin-wheel'

  // ========= STATE =========
  const [loading, setLoading] = useState(true)
  const [mustSpin, setMustSpin] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState('')
  const [prizeNumber, setPrizeNumber] = useState(0)
  const [wheelHasSpun, setWheelHasSpun] = useState(false)
  const [showPrizePopup, setShowPrizePopup] = useState(false)
  const [showFormPopup, setShowFormPopup] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  useEffect(() => {
    const wheelResult = Storage.get(`${storageVar}-${pageVariant}`)
    if (wheelResult !== null) {
      setPrizeNumber(wheelResult)
      setShowPrizePopup(true)
      setWheelHasSpun(true)
    } else {
      const newPrizeNumber = (crypto.getRandomValues(new Uint8Array(1))[0] / 255) * 100
      for (let i = 0; i < spinWheelDistribution.length; i++) {
        if (newPrizeNumber <= spinWheelDistribution[i]) {
          setPrizeNumber(i)
          break
        }
      }
    }
    setLoading(false)
  }, [spinWheelDistribution, pageVariant])

  const onWheelClick = () => {
    if (pageVariant === 'email' && firstName && email) handleSpinClick()
    if (pageVariant === 'osm' && !wheelHasSpun) setShowFormPopup(true)
  }

  const handleSpinClick = () => {
    setSubmitting(true)
    setShowFormPopup(false)
    if (wheelHasSpun) return
    if (pageVariant === 'email' && firstName && email) {
      const insertId = MD5(Date.now() + JSON.stringify({ email })).toString()

      const requestBody = {
        userTags: [prizes[prizeNumber].userTag],
        firstName,
        email,
      }
      fetch(process.env.NEXT_PUBLIC_STRAPI_URL + '/api/activecampaign-user-tag', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status !== 200) throw res?.message || 'An unexpected error occured'
          else {
            Mixpanel.track.SignUp({ distinct_id: email, $insert_id: insertId })
            Storage.set(`${storageVar}-${pageVariant}`, prizeNumber)
            setMustSpin(true)
          }
        })
        .catch((error) => {
          setToastMessage(error)
          setShowToast(true)
          console.error(error)
        })
    } else {
      Storage.set(`${storageVar}-${pageVariant}`, prizeNumber)
      setMustSpin(true)
    }
  }

  if (loading) return <Loader />

  return (
    <div
      id="spin-wheel"
      className="w-full grid gap-4 bg-white shadow-xl rounded-lg overflow-hidden -mt-20 p-4 lg:grid-cols-2 lg:p-6 lg:-mt-28">
      <div role="button" onClick={onWheelClick}>
        <Wheel
          textDistance={54}
          fontSize={15}
          spinDuration={0.5}
          radiusLineColor="white"
          radiusLineWidth={2}
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
          className="w-full max-w-fit p-4 bg-white rounded-20  md:p-8 lg:p-10"
          isShown={showFormPopup}
          onToggle={() => setShowFormPopup(!showFormPopup)}>
          <div>
            <div className="w-full flex justify-end">
              <FontAwesomeIcon
                icon={faClose}
                size="1x"
                role="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowFormPopup(false)
                }}
              />
            </div>

            <h2 className="!text-2xl mb-4">Enter Your Details to Spin and Claim Your Prize</h2>

            <SpinWheelLeadForm
              prizeNumber={prizeNumber}
              setSubmitting={setSubmitting}
              onSuccess={handleSpinClick}
            />

            <p className="text-gray-500 text-sm mt-2">
              By redeeming this offer, you agree to receive promotions and content from the Personal
              Development School.
            </p>
          </div>
        </Dialog>

        <Dialog
          className="w-full max-w-5xl p-4 bg-white rounded-20 md:p-8 lg:p-6"
          isShown={showPrizePopup}
          onToggle={() => setShowPrizePopup(!showPrizePopup)}>
          <div className="overflow-auto">
            <Confetti particleCount={1000} spreadDeg={360} />

            <div className="w-full flex justify-end mb-8">
              <FontAwesomeIcon
                icon={faClose}
                size="1x"
                role="button"
                onClick={(e) => {
                  e.stopPropagation()
                  setShowPrizePopup(false)
                }}
              />
            </div>

            <div className="grid grid-cols-1 gap-4  lg:grid-cols-2">
              <div className="flex justify-center">
                <Image
                  className="w-60 md:w-96 lg:w-fit"
                  alt={prizes[prizeNumber].imgAlt}
                  src={prizes[prizeNumber].imgSrc}
                  width={350}
                  height={350}
                  sizes="100vw"
                  quality={100}
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
      ) : (
        <div className="flex flex-col text-left justify-center items-start">
          <h2>Spin to Win! Guaranteed Handpicked Prizes!</h2>

          {pageVariant === 'email' && firstName && email ? (
            <>
              <p className="mb-4">
                Hurry, don’t miss your chance to find lasting love! Tap &quot;SPIN THE WHEEL&quot;
                to <strong>INSTANTLY</strong> claim your <strong>guaranteed prize</strong>!
              </p>

              <Button
                disabled={submitting}
                label="SPIN THE WHEEL!"
                mpProps={{ wheelPrize: prizes[prizeNumber].mixpanelIdentifier }}
                onClick={handleSpinClick}
              />
            </>
          ) : (
            <>
              <p className="mb-4">
                Hurry, don’t miss your chance to find lasting love! Enter your first name & email,
                then tap &quot;SPIN THE WHEEL&quot; to <strong>INSTANTLY</strong> claim your{' '}
                <strong>guaranteed prize</strong>!
              </p>

              {submitting ? (
                <p className="text-lg text-green-check">
                  <strong>Spinning</strong>
                </p>
              ) : (
                <SpinWheelLeadForm
                  prizeNumber={prizeNumber}
                  setSubmitting={setSubmitting}
                  onSuccess={handleSpinClick}
                />
              )}
            </>
          )}

          {pageVariant === 'osm' && (
            <p className="text-gray-500 text-sm mt-2">
              By redeeming this offer, you agree to receive promotions and content from the Personal
              Development School.
            </p>
          )}
        </div>
      )}
    </div>
  )
}

interface ISpinWheelLeadFormProps {
  prizeNumber: number
  onSuccess: () => void
  setSubmitting?: (status: boolean) => void
}

const SpinWheelLeadForm = ({ prizeNumber, setSubmitting, onSuccess }: ISpinWheelLeadFormProps) => {
  return (
    <SignupForm
      classNameFields="!flex-col !gap-y-4"
      submitButtonLabel="SPIN THE WHEEL!"
      successMessage="Spinning..."
      userTags={[prizes[prizeNumber].userTag]}
      listIds={[40]}
      submitButtonMpProps={{ wheelPrize: prizes[prizeNumber].mixpanelIdentifier }}
      setSubmitting={setSubmitting}
      onSuccess={onSuccess}
    />
  )
}

interface ISpinWheelSuccessProps {
  prizeNumber: number
  pageVariant: 'email' | 'osm'
  ctaLocation: 'popup' | 'card'
}

const SpinWheelSuccess = ({ pageVariant, prizeNumber, ctaLocation }: ISpinWheelSuccessProps) => {
  return (
    <div className="text-left">
      <h2 className="text-3xl mb-4">{prizes[prizeNumber].title}</h2>

      <p className="mb-4">
        <strong>{prizes[prizeNumber].subheader}</strong>
      </p>

      <p className="mb-4">{prizes[prizeNumber].copy}</p>

      {prizes[prizeNumber].disclaimer && (
        <div className="flex bg-[#ECEFFF] rounded-lg p-2 mb-8">
          <div className="w-6">
            <FontAwesomeIcon icon={faCircleExclamation} className="text-blue-darkest mr-2" />
          </div>

          <div>
            <p>
              <em>
                <strong>Disclaimer: </strong> {prizes[prizeNumber].disclaimer}
              </em>
            </p>
          </div>
        </div>
      )}

      <ButtonCheckout
        label="CLAIM YOUR PRIZE!"
        href={prizes[prizeNumber].checkoutLink.concat(
          `-${pageVariant === 'osm' ? 'spin-wheel' : 'wheel'}`
        )}
        mpProps={{ wheelPrize: prizes[prizeNumber].mixpanelIdentifier, ctaLocation }}
      />
    </div>
  )
}
