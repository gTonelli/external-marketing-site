'use client'

// core
import { useState } from 'react'
// components
import { Section } from '../Section'
import Image from 'next/image'
// libraries
import { faArrowLeftLong, faArrowRightLong } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Autoplay, Navigation } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// config
import { IAT_COPY as IAT } from '../../app/(default-layout)/iat/config'

export const IATTestimonialSection = () => {
  // ==================== State ====================
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <Section
      className="relative max-w-7xl mx-auto py-8 px-0 xxs:px-0 xs:px-0"
      classNameInner="lg:max-w-7xl">
      <Swiper
        centeredSlides
        loop
        autoplay={{
          delay: 6000,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="!overflow-hidden !px-4 mb-4"
        wrapperClass="!pb-4"
        modules={[Autoplay, Navigation]}
        navigation={{ prevEl, nextEl }}
        slidesPerView={1}
        spaceBetween={16}>
        {IAT.testimonials.map((testimonial, index) => (
          <SwiperSlide key={`iat_testimonial_${index}`} className="!h-auto">
            {({ isActive }) => (
              <div
                className={`w-full h-full ${
                  !isActive && 'bg-gray-bg-primary opacity-50'
                } rounded-3xl shadow-lg transition-colors my-2 p-8`}>
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
            )}
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="absolute flex right-9 bottom-0">
        <div ref={(node) => setPrevEl(node)} className="mx-2">
          <FontAwesomeIcon icon={faArrowLeftLong} size="lg" />
        </div>

        <div ref={(node) => setNextEl(node)} className="mx-2">
          <FontAwesomeIcon icon={faArrowRightLong} size="lg" />
        </div>
      </div>
    </Section>
  )
}
