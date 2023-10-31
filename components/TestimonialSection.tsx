'use client'

import { useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Icon } from './Icon'
import { Text } from './Text/Text'
import { Image } from './Image'
import { TRIAL_MASTERCLASS as TM } from '@/app/dream-life/config'

// styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const TestimonialSection = () => {
  // ==================== State ====================
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <div className="relative w-full flex" style={{ maxWidth: '100vw' }}>
      <Swiper
        autoplay={{
          delay: 6000,
          reverseDirection: true,
        }}
        className="!py-2 xxs:!py-3 xs:!py-6 !px-2 lg:!px-18"
        modules={[Autoplay, Navigation, Pagination]}
        navigation={{ prevEl, nextEl }}
        pagination={{
          bulletActiveClass: '!bg-black',
          bulletClass:
            'inline-block w-4 h-4 mx-1 bg-white border-2 rounded-full border-black cursor-pointer',
          clickable: true,
          horizontalClass: '!bottom-8',
        }}
        slidesPerView={1}
        spaceBetween={96}>
        {TM.COURSE_SECTION.testimonials.map((testimonial, index) => (
          <SwiperSlide
            key={`testimonial_${index}`}
            className="bg-pale-pink rounded-20 px-9 py-7 lg:shadow-centered lg:px-8">
            <div className="flex mb-6">
              <Image
                className="w-[80px] h-[80px] rounded-full mr-2"
                src={`${testimonial.author.picture}`}
              />
            </div>

            <div className="px-2">
              <Text useMD content={testimonial.content} />

              <div className="flex">
                <div className="flex-1">
                  <Text.Paragraph className="mt-10" content={testimonial.author.name} />

                  <Text.Paragraph className="mt-2" content={testimonial.author.location} />
                </div>

                <div className="flex flex-1 justify-end items-end">
                  <Image className="mr-2 rotate-180" src="TrialHeadspace/quotation-left.png" />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* LEFT ARROW ICON */}
      <div
        ref={(node) => setPrevEl(node)}
        className="clickable-shadow hidden w-10 h-10 flex-center rounded-full bg-grey-20 absolute top-1/2 lg:flex lg:-left-4 xl:-left-10 2xl:-left-8">
        <Icon className="text-primary" name="chevron-left" size="lg" />
      </div>

      {/* RIGHT ARROW ICON */}
      <div
        ref={(node) => setNextEl(node)}
        className="clickable-shadow hidden w-10 h-10 flex-center rounded-full bg-grey-20 absolute top-1/2 lg:flex lg:-right-4 xl:-right-10 2xl:-right-8">
        <Icon className="text-primary" name="chevron-right" size="lg" />
      </div>
    </div>
  )
}
