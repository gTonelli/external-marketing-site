'use client'

// core
import React, { FC, forwardRef } from 'react'
// components
import { Text } from './Text/Text'
// libraries
import cx from 'classnames'
import CountdownPlugin from 'react-countdown'
import Countdown from 'react-countdown'
import dayjs from 'dayjs'

type Props = {
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

export const CountdownTimer: FC<Props> = forwardRef(
  (
    { autoStart, className, classNameDate, classNameLabel, date, theme = 'dark' },
    ref: React.LegacyRef<Countdown>
  ) => {
    return (
      <CountdownPlugin
        autoStart={autoStart}
        date={date || dayjs().hour(24).minute(0).toISOString()}
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
                        <Text
                          className={cx(
                            'bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl',
                            classNameDate
                          )}
                          content={number.digits.charAt(1) || 0}
                        />

                        <Text
                          className={cx(
                            'bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl',
                            classNameDate
                          )}
                          content={number.digits.charAt(0)}
                        />
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
                      <Text
                        className={`${theme === 'dark' ? 'text-white' : 'text-black'} -mt-8 mx-1`}
                        content=":"
                      />
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
