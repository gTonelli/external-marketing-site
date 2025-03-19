'use client'

import * as React from 'react'
import dynamic from 'next/dynamic'
const Wheel = dynamic(() => import('react-custom-roulette').then((mod) => mod.Wheel), {
  ssr: false,
})

const spinWheelPrizes = [
  { option: '7-day free trial' },
  { option: '14-day free trial' },
  { option: '7-day free trial with 60% off first month' },
]

export const SpinningWheel = () => {
  const [mustSpin, setMustSpin] = React.useState(false)
  const [prizeNumber, setPrizeNumber] = React.useState(0)

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * spinWheelPrizes.length)
      setPrizeNumber(newPrizeNumber)
      setMustSpin(true)
    }
  }
  return (
    <div className="absolute w-full grid grid-cols-2 gap-8 bg-white shadow-xl rounded-lg -top-32 left-0 p-6 z-10 lg:grid-cols-1">
      <div>
        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={spinWheelPrizes}
          onStopSpinning={() => {
            setMustSpin(false)
          }}
        />
      </div>

      <div>
        <button onClick={handleSpinClick}>SPIN</button>
      </div>
    </div>
  )
}
