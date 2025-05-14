'use client'

// core
import { useContext, useState } from 'react'
import Image from 'next/image'
// components
import { Section } from '../Section'
// libraries
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// config
import { IAT_COPY as IAT } from '../../app/(default-layout)/iat/config'
// utils
import { ViewportContext } from '@/utils/contexts'
import { EWindowWidth } from '@/utils/constants'
// styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export const IATTestimonialSection = () => {
  // ==================== Context ====================
  const { windowWidth } = useContext(ViewportContext)

  // ==================== State ====================
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  const noOfslides = windowWidth <= EWindowWidth.md - 1 ? 1 : 'auto'
  const spaceBetween = windowWidth <= EWindowWidth.md - 1 ? 0 : 36
  const centeredSlides = windowWidth >= EWindowWidth.md

  return (
    <Section
      className="w-full relative overflow-hidden px-4 md:!px-0"
      classNameInner="!max-w-full w-full !m-0 !p-0">
      <Swiper
        loop
        className="!overflow-hidden !pb-16"
        autoplay={{
          delay: 6000,
        }}
        pagination={{
          clickable: true,
          bulletActiveClass: '!opacity-100',
          bulletClass:
            'inline-block w-4 h-4 mx-1 my-1 bg-primary rounded-full opacity-50 cursor-pointer lg:hover:opacity-100',
        }}
        initialSlide={1}
        modules={[Autoplay, Pagination]}
        centeredSlides={centeredSlides}
        slidesPerView={noOfslides}
        spaceBetween={spaceBetween}>
        {IAT.testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={`iat_testimonial_${index}`}
            className="!w-full !h-auto overflow-hidden md:!w-1/2">
            <div className="h-full bg-white-secondary rounded-3xl my-2 p-8">
              <Image
                alt="Quotation Icon"
                className="!w-16 h-auto rotate-180"
                src="/images/TrialHeadspace/quotation-left.png"
                width={64}
                height={48}
              />

              <p className="text-left mt-8">{testimonial.review}</p>

              <p className="text-left font-bold mt-4">{testimonial.author}</p>

              <p className="text-left">{testimonial.designation}</p>

              <p className="text-left italic mt-4">{testimonial.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Section>
  )
}
