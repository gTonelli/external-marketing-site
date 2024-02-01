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
  date?: Date | number | string
  theme?: string
}

interface ICountdownRendererProps {
  /**
   * default props passed by the react-countdown from date
   */
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
        date={date || dayjs().hour(24).minute(0).second(0).toDate()}
        ref={ref}
        renderer={({ days, hours, minutes, seconds }: ICountdownRendererProps) => {
          return (
            <div className="flex flex-wrap">
              <div
                className={cx(
                  'flex w-full items-center justify-center text-primary font-semibold pt-2 xxs:text-lg xs:text-xl xs:pt-4 lg:!text-3xl',
                  className
                )}>
                {days < 10 ? (
                  <>
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content="0"
                    />
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={days.toString().charAt(0)}
                    />
                  </>
                ) : (
                  <>
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={days.toString()[0]}
                    />
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={days.toString().charAt(1)}
                    />
                  </>
                )}
                <Text
                  className={`${theme === 'dark' ? 'text-white' : 'text-dark'} mx-1`}
                  content=":"
                />
                {hours < 10 ? (
                  <>
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content="0"
                    />
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={hours.toString().charAt(0)}
                    />
                  </>
                ) : (
                  <>
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={hours.toString()[0]}
                    />
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={hours.toString().charAt(1)}
                    />
                  </>
                )}
                <Text
                  className={`${theme == 'dark' ? 'text-white' : 'text-dark'} mx-1`}
                  content=":"
                />{' '}
                {minutes < 10 ? (
                  <>
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content="0"
                    />
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={minutes.toString().charAt(0)}
                    />
                  </>
                ) : (
                  <>
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={minutes.toString()[0]}
                    />
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={minutes.toString().charAt(1)}
                    />
                  </>
                )}
                <Text
                  className={`${theme == 'dark' ? 'text-white' : 'text-dark'} mx-1`}
                  content=":"
                />{' '}
                {seconds < 10 ? (
                  <>
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content="0"
                    />
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={seconds.toString().charAt(0)}
                    />
                  </>
                ) : (
                  <>
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={seconds.toString()[0]}
                    />
                    <Text
                      className="bg-white p-2 mx-1 rounded-md shadow-md xxs:text-lg xs:text-xl lg:!text-3xl"
                      content={seconds.toString().charAt(1)}
                    />
                  </>
                )}
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
