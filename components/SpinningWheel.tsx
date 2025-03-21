'use client'

import React, { useState } from 'react'
import dynamic from 'next/dynamic'
import { Loader } from './Loader'
import { WheelData } from 'react-custom-roulette/dist/components/Wheel/types'
import { Button } from './Button/Button'
import { SignupForm } from './Forms/SignupForm'
const Wheel = dynamic(() => import('react-custom-roulette').then((mod) => mod.Wheel), {
  loading: () => <Loader />,
  ssr: false,
})

const spinWheelPrizes: WheelData[] = [
  { option: '7-day free trial', style: { backgroundColor: '#EDDBCD' } },
  { option: '14-day free trial', style: { backgroundColor: '#D1CDED' } },
  { option: '60% off first month', style: { backgroundColor: '#CDEDD1' } },
  { option: '7DFT + Free Course', style: { backgroundColor: '#EDECCD' } },
  { option: '50% off quarterly', style: { backgroundColor: '#E9CDED' } },
]

export const SpinningWheel = () => {
  const [mustSpin, setMustSpin] = useState(false)
  const [prizeNumber, setPrizeNumber] = useState(0)

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * spinWheelPrizes.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
    }
  }

  return (
    <div className="absolute w-full grid grid-cols-1 gap-8 bg-white shadow-xl rounded-lg overflow-hidden -top-32 left-0 p-6 z-10 lg:grid-cols-2">
      <div>
        <Wheel
          perpendicularText
          fontSize={16}
          radiusLineColor="white"
          radiusLineWidth={5}
          innerBorderColor="none"
          outerBorderWidth={0}
          innerBorderWidth={0}
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={spinWheelPrizes}
          onStopSpinning={() => {
            setMustSpin(false)
          }}
        />
      </div>

      <div>
        <SignupForm classNameFields="w-full" />
        <Button onClick={handleSpinClick} label="SPIN" />
      </div>
    </div>
  )
}
