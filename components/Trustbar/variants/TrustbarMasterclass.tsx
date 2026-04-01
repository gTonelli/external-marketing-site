'use client'

// components
import { Image } from '@/components/Image'
import { ITrustbarDefaultProps } from './TrustbarDefault'
// libraries
import cx from 'classnames'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

const TRUSTBAR = [
  'mel-robbins-logo.png',
  'psychology-today-logo.png',
  'forbes-logo.png',
  'ceo-weekly-logo.png',
  'yahoo-logo.png',
  'cosmopolitan-logo.png',
]

interface ITrustbarMasterclassProps extends ITrustbarDefaultProps {
  classNameSlides?: string
}

export const TrustbarMasterclass = ({
  brandLogosList = TRUSTBAR,
  className,
  classNameSlides,
  classNameImage,
}: ITrustbarMasterclassProps) => {
  return (
    <Swiper
      loop
      autoplay={{
        delay: 3000,
      }}
      breakpoints={{
        320: {
          slidesPerView: 2,
          spaceBetween: 12,
        },
        480: {
          slidesPerView: 3,
          spaceBetween: 16,
        },
      }}
      className={cx('!overflow-hidden !py-5 !px-4 lg:!px-8', className)}
      wrapperClass="justify-evenly items-center"
      modules={[Autoplay]}
      slidesPerView={3}
      spaceBetween={16}>
      {brandLogosList.map((logo, index) => (
        <SwiperSlide key={`trustbar_masterclass_${index}`} className={classNameSlides}>
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
