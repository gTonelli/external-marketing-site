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
import { overrideTailwindClasses as two } from 'tailwind-override'
// utils
import { getOfferEndDate } from '@/utils/functions'

interface ICountdownTimerProps {
  autoStart?: boolean
  className?: string
  classNameDate?: string
  classNameLabel?: string
  classNameDateSeperator?: string
  date?: Date
  theme?: 'dark' | 'light' | 'transparent'
  includeDays?: boolean
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
      classNameDateSeperator,
      date,
      theme = 'dark',
      includeDays = true,
    }: ICountdownTimerProps,
    ref: React.LegacyRef<Countdown>
  ) => {
    // ==================== State ====================
    const [offerEndDate, setOfferEndDate] = useState<Date | undefined>()

    useEffect(() => {
      setOfferEndDate(getOfferEndDate(date || dayjs().hour(23).minute(60).toDate(), 1))
    }, [date])

    if (!offerEndDate) return <Loader className="!py-8 lg:py-10" classNameSpinner="text-white" />

    return (
      <CountdownPlugin
        autoStart={autoStart}
        date={offerEndDate || dayjs().hour(24).minute(0).toISOString()}
        ref={ref}
        renderer={({ days, hours, minutes, seconds }: ICountdownRendererProps) => {
          const data = [
            { digits: hours.toString().split('').reverse().join(''), label: 'Hours' },
            { digits: minutes.toString().split('').reverse().join(''), label: 'Minutes' },
            { digits: seconds.toString().split('').reverse().join(''), label: 'Seconds' },
          ]

          if (includeDays) {
            data.splice(0, 0, {
              digits: days.toString().split('').reverse().join(''),
              label: 'Days',
            })
          }

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
                            'rounded-md xxs:text-lg xs:text-xl lg:!text-3xl',
                            theme === 'transparent'
                              ? 'bg-transparent'
                              : 'p-2 mx-1 shadow-md bg-white',
                            classNameDate
                          )}>
                          {number.digits.charAt(1) || 0}
                        </p>

                        <p
                          className={cx(
                            'rounded-md xxs:text-lg xs:text-xl lg:!text-3xl',
                            theme === 'transparent'
                              ? 'bg-transparent'
                              : 'p-2 mx-1 shadow-md bg-white',
                            classNameDate
                          )}>
                          {number.digits.charAt(0)}
                        </p>
                      </div>

                      <div className={cx('mt-2', classNameLabel)}>
                        <p
                          className={`text-sm font-normal ${
                            theme === 'dark'
                              ? 'text-white'
                              : theme === 'transparent'
                              ? 'text-primary'
                              : 'text-black'
                          } lg:text-base`}>
                          {number.label}
                        </p>
                      </div>
                    </div>

                    {index < data.length - 1 && (
                      <p
                        className={cx(
                          `${
                            theme === 'dark'
                              ? 'text-white'
                              : theme === 'transparent'
                              ? 'text-primary'
                              : 'text-black'
                          } -mt-8 mx-1`,
                          classNameDateSeperator
                        )}>
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
