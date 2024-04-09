'use client'
// core
import { useState } from 'react'
// components
import { AttachmentQuizV2SelfImprovementCard } from './AttachmentQuizV2SelfImprovementCard'
import { Icon } from '../Icon'
// libraries
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
// config
import { offerSectionSelfImprovementSlides } from './config'

// styles
import 'swiper/css'
import 'swiper/css/navigation'

export const AttachmentQuizV2SelfImprovementSlider = () => {
  // ==================== State ====================
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <>
      <Swiper
        className="!pr-20 lg:!hidden"
        spaceBetween={32}
        modules={[Navigation]}
        navigation={{ prevEl, nextEl }}
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

      <div className="flex justify-center gap-12 lg:hidden">
        {/* LEFT ARROW ICON */}
        <div ref={(node) => setPrevEl(node)} className="">
          <Icon className="text-primary" name="arrow-left-long" size="2x" />
        </div>

        {/* RIGHT ARROW ICON */}
        <div ref={(node) => setNextEl(node)} className="">
          <Icon className="text-primary" name="arrow-right-long" size="2x" />
        </div>
      </div>
    </>
  )
}
