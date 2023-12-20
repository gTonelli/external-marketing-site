'use client'

// core
import React from 'react'
// components
import { TQuizTheme } from '@/components/Quiz'
// libraries
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'

// styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface ICarouselQuizProps {
  slides: ICarouselQuizSlide[]
  theme: TQuizTheme
}

export interface ICarouselQuizSlide {
  text: string
  img: string
}

export const CarouselQuiz = ({ slides, theme = 'primary' }: ICarouselQuizProps) => {
  return (
    <Swiper
      loop
      autoplay={{ delay: 4000 }}
      breakpoints={{
        1024: {
          slidesPerView: 3,
          pagination: false,
          autoplay: false,
          allowTouchMove: false,
          loop: false,
          spaceBetween: 8,
        },
      }}
      className="max-w-screen-lg mx-auto"
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
        bulletActiveClass: `bg-${theme} scale-125 opacity-100`,
      }}>
      {slides.map((slide, index) => (
        <SwiperSlide key={`breakthrough_${index}`}>
          <div className="pb-10 text-center">
            <div className="mx-auto">
              <Image className="w-40 mx-auto" src={slide.img} />
            </div>

            <Text className="uppercase px-8" content={slide.text} spacing="tracking-widest" />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
