'use client'

// config
import { ROYAL_RUMBLE } from '@/app/(custom-layouts)/(no-nav)/quiz/[style]/config'
// components
import Image from 'next/image'
// libraries
import ReactMarkdown from 'react-markdown'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export const CarouselTestimonialAlt = () => {
  return (
    <div className="mt-10 w-full flex relative max-w-[640px] sm:max-w-[850px]">
      <Swiper
        autoplay={{
          delay: 6000,
          reverseDirection: true,
        }}
        className="!overflow-hidden !py-6 !px-2 lg:!px-18"
        modules={[Autoplay, Pagination]}
        pagination={{
          bulletActiveClass: '!bg-black',
          bulletClass:
            'inline-block w-4 h-4 mx-1 bg-white border-2 rounded-full border-black cursor-pointer',
          clickable: true,
          horizontalClass: '!bottom-16',
        }}
        slidesPerView={1}
        spaceBetween={96}>
        {ROYAL_RUMBLE.TESTIMONIAL_SEGMENT.map((testimonial, index) => (
          <SwiperSlide
            key={`testimonial_${index}`}
            className="p-6 py-12 shadow-centered rounded-2xl md:px-8">
            <div className="mb-6">
              <Image
                alt="A vector image of a quotation mark"
                src="/images/homepage_quote_left.png"
                tabIndex={-1}
                width={67}
                height={54}
              />
            </div>

            <div className="pl-5 border-l-[12px] border-blue-lightest">
              <div className="flex items-center mb-6">
                <Image
                  alt={`An image of ${testimonial.name}`}
                  className="rounded-full overflow-hidden w-8 h-8"
                  src={`/images/${testimonial.avatar}`}
                  width={32}
                  height={32}
                />
                <span className="font-semibold ml-3">{testimonial.name}</span>
              </div>

              <ReactMarkdown className="text-left">{testimonial.testimonial}</ReactMarkdown>
            </div>

            <div className="rotate-180 mt-6">
              <Image
                alt="A vector image of a quotation mark"
                src="/images/homepage_quote_left.png"
                width={67}
                height={54}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
