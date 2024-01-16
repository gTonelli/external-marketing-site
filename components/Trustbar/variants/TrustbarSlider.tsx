'use client'

// core
import React from 'react'
// components
import { Image } from '@/components/Image'
import { ITrustbarDefaultProps } from './TrustbarDefault'
// libraries
import cx from 'classnames'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'
import 'swiper/css/pagination'

const TRUSTBAR = [
  `amazon-logo.png`,
  `superhuman-academy-logo.png`,
  `indigo-logo.png`,
  `success-logo.png`,
  `barnes-noble-logo.png`,
  `counseling-today-logo.png`,
  `marketwatch-logo.svg`,
  `yahoo-news-logo.png`,
]

export const TrustbarSlider = ({
  brandLogosList = TRUSTBAR,
  className,
  classNameImage,
}: ITrustbarDefaultProps) => {
  return (
    <Swiper
      loop
      autoplay={{
        delay: 3000,
        reverseDirection: true,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
        1536: {
          slidesPerView: 6,
          spaceBetween: 35,
        },
      }}
      className={cx('!py-5 !px-2 lg:!px-18', className)}
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={10}>
      {brandLogosList.map((logo, index) => (
        <SwiperSlide key={`trustbar_${index}`}>
          <Image
            alt={typeof logo === 'string' ? logo : logo.img}
            className={cx('max-w-[100px] mx-auto sm:max-w-[130px]', classNameImage)}
            src={`Logo_Brand/${typeof logo === 'string' ? logo : logo.img}`}
            width={130}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
