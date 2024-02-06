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
  ({ autoStart, className, date, theme = 'dark' }, ref: React.LegacyRef<Countdown>) => {
    return (
      <CountdownPlugin
        autoStart={autoStart}
        date={date || dayjs().hour(24).minute(0).toISOString()}
        ref={ref}
        renderer={({ days, hours, minutes, seconds }: ICountdownRendererProps) => {
          const data = [
            days.toString().split('').reverse().join(''),
            hours.toString().split('').reverse().join(''),
            minutes.toString().split('').reverse().join(''),
            seconds.toString().split('').reverse().join(''),
          ]

          return (
            <div className="flex flex-wrap">
              <div
                className={cx(
                  'flex w-full items-center justify-center text-primary font-semibold pt-2 xxs:text-lg xs:text-xl xs:pt-4 lg:!text-3xl',
                  className
                )}>
                {data.map((number, index) => (
                  <>
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={number.charAt(1) || 0}
                    />
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={number.charAt(0)}
                    />

                    {index < data.length - 1 && (
                      <Text
                        className={`${theme === 'dark' ? 'text-white' : 'text-dark'} mx-1`}
                        content=":"
                      />
                    )}
                  </>
                ))}
              </div>
              <div
                className={`w-full max-w-[312px] mx-auto ${
                  theme == 'dark' ? 'text-white' : 'text-dark'
                } flex items-center justify-around text-center
                      xxs:max-w-[320px]`}>
                <Text className="w-[76px] mt-2" content="Days" />

                <Text className="w-[76px] mt-2" content="Hours" />

                <Text className="w-[76px] mt-2" content="Minutes" />

                <Text className="w-[76px] mt-2" content="Seconds" />
              </div>
            </div>
          )
        }}
      />
    )
  }
)
