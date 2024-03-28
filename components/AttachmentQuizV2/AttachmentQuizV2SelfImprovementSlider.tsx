'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { offerSectionSelfImprovementSlides } from './config'
import { AttachmentQuizV2SelfImprovementCard } from './AttachmentQuizV2SelfImprovementCard'

// styles
import 'swiper/css'
import { Section } from '@/app/(custom-layouts)/(no-nav)/quiz/(variants)/v2/config'

export const AttachmentQuizV2SelfImprovementSlider = () => {
  return (
    <>
      <Swiper
        className="!pr-20 lg:!hidden"
        spaceBetween={32}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          992: {
            slidesPerView: 3,
            slidesPerGroup: 3,
          },
        }}>
        {offerSectionSelfImprovementSlides.map((slide, i) => (
          <SwiperSlide key={`slef_imp_slide_${i}`}>
            <AttachmentQuizV2SelfImprovementCard {...slide} number={i + 1} />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="hidden lg:grid lg:grid-cols-5 lg:gap-8">
        {offerSectionSelfImprovementSlides.map((slide, i) => (
          <div key={`slef_imp_card_${i}`} className="w-full">
            <AttachmentQuizV2SelfImprovementCard includeDelay {...slide} number={i + 1} />
          </div>
        ))}
      </div>
    </>
  )
}
