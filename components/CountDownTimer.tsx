'use client'

// core
import React, { forwardRef, useEffect, useState } from 'react'
// components
import { Loader } from './Loader'
// libraries
import cx from 'classnames'
import CountdownPlugin from 'react-countdown'
import Countdown from 'react-countdown'
import dayjs from 'dayjs'
// utils
import { getOfferEndDate } from '@/utils/functions'

interface ICountdownTimerProps {
  autoStart?: boolean
  className?: string
  classNameDate?: string
  classNameLabel?: string
  date?: Date
  theme?: string
}

interface ICountdownRendererProps {
  seconds: number
  minutes: number
  days: number
  hours: number
}

export const CountdownTimer = forwardRef(
  (
    {
      autoStart,
      className,
      classNameDate,
      classNameLabel,
      date,
      theme = 'dark',
    }: ICountdownTimerProps,
    ref: React.LegacyRef<Countdown>
  ) => {
    // ==================== State ====================
    const [offerEndDate, setOfferEndDate] = useState<Date | undefined>()

    useEffect(() => {
      setOfferEndDate(getOfferEndDate(date!, 1))
    }, [date])

    if (!offerEndDate) return <Loader className="!py-8 lg:py-10" classNameSpinner="text-white" />

    return (
      <CountdownPlugin
        autoStart={autoStart}
        date={offerEndDate || dayjs().hour(24).minute(0).toISOString()}
        ref={ref}
        renderer={({ days, hours, minutes, seconds }: ICountdownRendererProps) => {
          const data = [
            { digits: days.toString().split('').reverse().join(''), label: 'Days' },
            { digits: hours.toString().split('').reverse().join(''), label: 'Hours' },
            { digits: minutes.toString().split('').reverse().join(''), label: 'Minutes' },
            { digits: seconds.toString().split('').reverse().join(''), label: 'Seconds' },
          ]

          return (
            <div className="flex flex-wrap">
              <div
                className={cx(
                  'flex w-full items-center justify-center text-primary font-semibold pt-2 xxs:text-lg xs:text-xl xs:pt-4 lg:!text-3xl',
                  className
                )}>
                {data.map((number, index) => (
                  <div key={`timer-${index}`} className="flex items-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="flex">
                        <p
                          className={cx(
                            'bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl',
                            classNameDate
                          )}>
                          {number.digits.charAt(1) || 0}
                        </p>

                        <p
                          className={cx(
                            'bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl',
                            classNameDate
                          )}>
                          {number.digits.charAt(0)}
                        </p>
                      </div>

                      <div className={cx('mt-2', classNameLabel)}>
                        <p
                          className={`text-sm font-normal ${
                            theme === 'dark' ? 'text-white' : 'text-black'
                          } lg:text-base`}>
                          {number.label}
                        </p>
                      </div>
                    </div>

                    {index < data.length - 1 && (
                      <p className={`${theme === 'dark' ? 'text-white' : 'text-black'} -mt-8 mx-1`}>
                        :
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )
        }}
      />
    )
  }
)
