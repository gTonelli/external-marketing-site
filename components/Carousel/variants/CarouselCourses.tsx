'use client'

import React, { useCallback, useContext } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Button } from '@/components/Button/Button'
import { Card } from '@/components/Card/Card'
import { Icon } from '@/components/Icon'
import { PageContext, ViewportContext } from '@/utils/contexts'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
// libraries
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { SECONDARY_SALES_PAGE as SSP } from '@/app/(custom-layouts)/(no-nav)/learn/config'
import cx from 'classnames'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
// utils
import { EExternalRoutes, ERoutes, EWindowWidth } from '@/utils/constants'
// styles
// styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface ICourse {
  title: string
  thumbnail: string
  ratings: string
}

interface ICarouselCoursesProps extends IDefaultProps {
  /**
   * Checkout Link
   * @default THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION
   */
  checkoutLink?: ERoutes | EExternalRoutes
  /** Classname for the styled arrow*/
  classNameArrow?: string
  /** Classnames for the subheading */
  classNameSubheading?: string
  /** Courses to render as slides */
  courses?: ICourse[]
  /**
   * Header Text
   * @default 'Courses In Your Program'
   */
  headerTextMobile?: string
  /**
   * Header Text
   * @default 'Preview the Course in Your Program'
   */
  headerTextDesktop?: string
  /**
   * Subheading text
   * @default 'We have simple courses to support you in any area of life you want to work on, especially catered to learning your relationship attachment patterns and how to navigate and understand the attachment styles of others. These courses are perfect for you if you are tired of feeling disconnected, sick of uncertainty in your love life and are ready for lasting and thriving relationships.''
   */
  subheadingText?: string
}

export const CarouselCourses = ({
  checkoutLink = EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION,
  className,
  classNameArrow,
  classNameSubheading,
  courses = SSP.COURSES,
  headerTextMobile = 'Courses In Your Program',
  headerTextDesktop = 'Preview the Course in Your Program',
  subheadingText,
}: ICarouselCoursesProps) => {
  //======================== Hooks ============================
  const { windowWidth } = useContext(ViewportContext)
  const { page_name } = useContext(PageContext)

  //============================ Events ========================================
  const onGoToCheckout = useCallback(
    (event: React.MouseEvent<Element, MouseEvent>) => {
      Mixpanel.track.ButtonClicked({
        button_label: (event.target as HTMLButtonElement).innerText,
        page_name,
      })

      window.location.assign(checkoutLink)
    },
    [checkoutLink, page_name]
  )

  return (
    <section className={cx('relative w-full z-5', className)}>
      <div
        className={cx(
          'hidden absolute left-40 -top-24 h-[155px] w-[155px] bg-white rounded-20 rotate-45 lg:block',
          classNameArrow
        )}>
        {' '}
      </div>
      <div
        className="default-padding w-full text-center bg-black
                lg:pt-16 lg:pb-14 lg:px-0 lg:mx-0">
        <Text.Heading
          className="text-white text-2xl"
          content={
            windowWidth < EWindowWidth.lg
              ? headerTextMobile || headerTextDesktop
              : headerTextDesktop || headerTextMobile
          }
        />

        <Text.Paragraph
          className={cx('max-w-3xl text-white mx-auto mt-6 lg:mt-10', classNameSubheading)}
          content={subheadingText}
        />

        <div className="max-w-screen-2xl mx-auto mt-8 lg:mt-24">
          <Swiper
            loop
            navigation
            autoplay={{
              delay: 3000,
              reverseDirection: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              576: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              896: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            className="!py-6 !px-2 lg:!px-18"
            modules={[Autoplay, Navigation]}
            slidesPerView={1}
            spaceBetween={10}>
            {courses.map((obj, index) => (
              <SwiperSlide key={`trustbar_${index}`}>
                <Card className="max-w-xs rounded-[30px] border-0 mx-auto pb-8 bg-white">
                  <Image className="rounded-t-[30px]" src={`${obj.thumbnail}`} />
                  {/* RATINGS */}
                  <div className="flex-center space-x-1 py-6">
                    {Array(5)
                      .fill(1)
                      .map((_, ii: number) => (
                        <Icon
                          key={`star_'${ii}`}
                          className="text-primary"
                          name="star"
                          type="solid"
                        />
                      ))}

                    <Text.Paragraph content={`(${obj.ratings})`} />
                  </div>
                  <Text.Heading className="!text-xl h-24 px-2 md:px-8" content={obj.title} />

                  <Button
                    className="bg-primary mt-4"
                    label="GET STARTED"
                    onClick={onGoToCheckout}
                  />
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  )
}
