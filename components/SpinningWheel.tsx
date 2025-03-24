'use client'
// core
import React, { useState } from 'react'
import dynamic from 'next/dynamic'
// components
import { Loader } from './Loader'
import { SignupForm } from './Forms/SignupForm'
// libraries
import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types'

const Wheel = dynamic(() => import('react-custom-roulette').then((mod) => mod.Wheel), {
  loading: () => <Loader />,
  ssr: false,
})

const spinWheelPrizes: WheelData[] = [
  { option: '7-day free trial', style: { backgroundColor: '#EDDBCD' } },
  { option: '14-day free trial', style: { backgroundColor: '#D1CDED' } },
  { option: '60% off first month', style: { backgroundColor: '#CDEDD1' } },
  { option: 'Free Trial + Free Course', style: { backgroundColor: '#EDECCD' } },
  { option: '50% off quarterly', style: { backgroundColor: '#E9CDED' } },
]

export const SpinningWheel = () => {
  const [mustSpin, setMustSpin] = useState(false)
  const [startIndex, _] = useState(Math.floor(Math.random() * spinWheelPrizes.length))
  const [prizeNumber, setPrizeNumber] = useState(0)

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * spinWheelPrizes.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
    }
  }

  return (
    <div className="absolute w-full grid grid-cols-1 gap-8 bg-white shadow-xl rounded-lg overflow-hidden -top-16 left-0 p-4 z-10 md:-top-20 lg:-top-32 lg:grid-cols-2 lg:p-6">
      <div>
        <Wheel
          perpendicularText
          textDistance={75}
          fontSize={18}
          radiusLineColor="white"
          radiusLineWidth={5}
          innerBorderColor="none"
          outerBorderWidth={0}
          innerBorderWidth={0}
          startingOptionIndex={startIndex}
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={spinWheelPrizes}
          onStopSpinning={() => {
            setMustSpin(false)
          }}
        />
      </div>

      <div className="text-left">
        <h2 className="mb-4">Spin to Win in Life!</h2>

        <p className="mb-8">
          <strong>Limited Time Only! Enter Your Details For a Chance to Spin the Wheel!</strong>
        </p>

        <SignupForm
          onSuccess={handleSpinClick}
          classNameFields="!flex-col !gap-y-4"
          submitButtonLabel="SPIN NOW!"
        />

        {/* <Button onClick={handleSpinClick} label="SPIN" /> */}
      </div>
    </div>
  )
}
