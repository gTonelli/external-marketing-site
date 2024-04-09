'use client'
// components
import { IDefaultProps } from '@/components'
// libraries
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
// styles
import 'swiper/css'

interface ICarouselSocialProofProps extends IDefaultProps {
  slides: ISlide[]
}

export const CarouselSocialProof = ({ className, slides }: ICarouselSocialProofProps) => (
  <Swiper
    slidesPerGroupAuto
    autoplay={{
      delay: 3000,
    }}
    className={className}
    modules={[Autoplay]}
    slidesPerView={1}
    spaceBetween={16}
    breakpoints={{
      425: { slidesPerView: 2 },
      768: { slidesPerView: 3 },
      1024: { slidesPerView: 4 },
      1280: { slidesPerView: 5 },
    }}>
    {slides.map((slide, i) => (
      <SwiperSlide key={`slide_${i}`} className="text-center lg:text-left">
        <strong className="mb-4">{slide.topText}</strong>

        <h2 className="text-yellow">{slide.midText}</h2>

        <strong>{slide.botText}</strong>
      </SwiperSlide>
    ))}
  </Swiper>
)

interface ISlide {
  topText: string
  midText: string
  botText: string
}
