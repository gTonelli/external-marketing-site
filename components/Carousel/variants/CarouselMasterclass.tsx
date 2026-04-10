'use client'
// core
import Image from 'next/image'
// libraries
import cx from 'classnames'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
// configs
import { COMMON_CONFIG } from '@/app/(custom-layouts)/(no-nav)/masterclass/config'
// styles
import 'swiper/css'

const masterclassCourseSlides = [
  ...COMMON_CONFIG.courseLibrary.categories.flatMap((category) =>
    category.courses.map((course) => course)
  ),
]

interface ICarouselMasterclassProps {
  className?: string
  classNameSlides?: string
  classNameImage?: string
}

export const CarouselMasterclass = ({
  className,
  classNameSlides,
  classNameImage,
}: ICarouselMasterclassProps) => {
  return (
    <>
      <Swiper
        loop
        autoplay={{
          delay: 0,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 12,
          },
          1600: {
            slidesPerView: 6,
            spaceBetween: 12,
          },
          1920: {
            slidesPerView: 8,
            spaceBetween: 12,
          },
        }}
        speed={10000}
        centeredSlides={true}
        className={cx('!overflow-hidden !pb-3 !my-0', className)}
        wrapperClass="justify-evenly items-center !ease-linear"
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={12}>
        {masterclassCourseSlides.slice(0, masterclassCourseSlides.length / 2).map((img, index) => (
          <SwiperSlide key={`carousel_masterclass_top_${index}`} className={classNameSlides}>
            <Image
              alt={img.title}
              className={cx(
                'max-w-96 w-full h-auto rounded-2xl overflow-hidden object-cover',
                classNameImage
              )}
              src={img.thumbnail}
              width={500}
              height={282}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        loop
        autoplay={{
          delay: 0,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 12,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 12,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 12,
          },
          1200: {
            slidesPerView: 5,
            spaceBetween: 12,
          },
          1600: {
            slidesPerView: 6,
            spaceBetween: 12,
          },
          1920: {
            slidesPerView: 8,
            spaceBetween: 12,
          },
        }}
        speed={12000}
        centeredSlides={true}
        className={cx('!overflow-hidden !my-0 !pr-5', className)}
        wrapperClass="justify-evenly items-center !ease-linear"
        modules={[Autoplay]}
        slidesPerView={4}
        spaceBetween={12}>
        {masterclassCourseSlides.slice(masterclassCourseSlides.length / 2).map((img, index) => (
          <SwiperSlide key={`carousel_masterclass_bottom_${index}`} className={classNameSlides}>
            <Image
              alt={img.title}
              className={cx(
                'max-w-96 w-full h-auto rounded-2xl overflow-hidden object-cover',
                classNameImage
              )}
              src={img.thumbnail}
              width={500}
              height={282}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}
