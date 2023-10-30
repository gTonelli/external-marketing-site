'use client'
// components
import Image from 'next/image'

// libraries
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// config
import { BREAKTHROUGH_SEGMENTS } from './config'

export const BreakThroughSectionMobile = () => {
  return (
    <div className="max-w-[250px] -mt-12 md:max-w-[798px] lg:hidden">
      <Swiper
        loop
        autoplay={{ delay: 3000 }}
        modules={[Autoplay, Pagination]}
        pagination={{
          bulletActiveClass: '!opacity-100 !w-3 !h-3 !my-[2px]',
          bulletClass:
            'inline-block w-2 h-2 mx-1 my-1 bg-primary rounded-full opacity-50 cursor-pointer',
          clickable: true,
        }}>
        {BREAKTHROUGH_SEGMENTS.map((breakthrough, index) => (
          <SwiperSlide key={`breakthrough_${index}`}>
            <div className="py-10">
              <Image
                priority
                alt={breakthrough.alt}
                className="w-40 mx-auto"
                src={breakthrough.image}
                width={160}
                height={160}
              />

              <span className="uppercase tracking-widest text-center">{breakthrough.title}</span>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
