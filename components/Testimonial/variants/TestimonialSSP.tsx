'use client'

// core
import Image from 'next/image'
// components
import { TRIAL_PAGE } from '@/app/(custom-layouts)/(no-nav)/7-day-trial/config'
// libraries
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
// styles
import 'swiper/css'
import 'swiper/css/pagination'

export const TestimonialSSP = () => {
    return (
    <div className="max-w-lg  mx-auto my-4 lg:max-w-screen-lg lg:px-10 md:-mt-60">
        <div className="w-full flex relative" style={{ maxWidth: '100vw' }}>
          <Swiper
            autoplay={{
              delay: 6000,
              reverseDirection: true,
            }}
            className="!overflow-hidden !py-2 xxs:!py-3 xs:!py-6 !px-2 lg:!px-18"
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
            {TRIAL_PAGE.testimonials.map((testimonial, index) => (
              <SwiperSlide
                key={`testimonial_${index}`}
                className="bg-white p-6 py-12 shadow-centered rounded-2xl lg:px-8">
                <div className="flex mb-6">
                  <Image
                    alt="quote"
                    className="mr-2"
                    src="/images/quote.svg"
                    width={16}
                    height={16}
                  />
                  <Image alt="quote" src="/images/quote.svg" width={16} height={16} />
                </div>

                <div className="pl-5 border-l-[12px] border-blue-lightest">
                  <div className="flex items-center mb-6">
                    <Image
                      alt="image of the testimonial author"
                      className="rounded-full overflow-hidden max-w-[40px]"
                      src={`/images/${testimonial.img}`}
                      width={40}
                      height={40}
                    />
                    <p className="font-semibold ml-3">{testimonial.author}</p>
                  </div>

                  <p>{testimonial.testimonial}</p>
                </div>

                <div className="flex mt-6">
                  <Image
                    alt="quote"
                    className="ml-auto mr-2 -scale-x-100"
                    src="/images/quote.svg"
                    width={16}
                    height={16}
                  />
                  <Image
                    alt="quote"
                    className="-scale-x-100"
                    src="/images/quote.svg"
                    width={16}
                    height={16}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    )
}