'use client'

// components
import { Icon } from '@/components/Icon'
// libraries
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
// styles
import 'swiper/css'
import { Animation } from '@/components/Animation'
import { isMobile } from 'react-device-detect'

export const CarouselTestimonialPlain = () => {
  return (
    <Swiper
      className="!p-4 !pr-12 !overflow-visible"
      wrapperClass="items-stretch"
      autoplay={{ delay: 6000 }}
      modules={[Autoplay]}
      slidesPerView={1}
      spaceBetween={16}
      breakpoints={{
        768: {
          slidesPerView: 2,
          slidesPerGroup: 2,
        },
        1200: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 32,
        },
      }}>
      {defaultSlides.map((slide, i) => (
        <SwiperSlide key={`testimonial_slide_${i}`} className="!flex flex-grow !h-auto">
          <Animation
            disabled={i > 3 || isMobile}
            delay={isMobile || i > 3 ? 0 : 0.15 * i}
            className="p-4 rounded-4xl shadow-center-light bg-white flex flex-1 flex-col flex-grow !h-auto lg:p-12"
            direction="fromBottom">
            <p>“{slide.text}”</p>

            <strong className="block mb-1 mt-auto">- {slide.name}</strong>

            <div className="">
              {Array(5)
                .fill(undefined)
                .map((_, j) => (
                  <Icon
                    key={`testimonial_${i}_star_${j}`}
                    className="text-yellow-tertiary mr-1"
                    name="star"
                  />
                ))}
            </div>
          </Animation>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}

const defaultSlides = [
  {
    name: 'Chelsea C.',
    text: `IAT has been an invaluable set of frameworks, concepts and processes that have given me the confidence to help 
            my clients in a POWERFUL way. I am forever grateful!`,
  },
  {
    name: 'Rebecca O.',
    text: `This equipped me to become financially independent doing something that is aligned with my need for personal 
            development. I am truly grateful.`,
  },
  {
    name: 'Patrycia M.',
    text: `This content was groundbreaking for me. It didn't only help me heal but also put me in touch with the passion 
            I have for coaching. I feel empowered and capable when I see a client. I really just have to follow the system and 
            it works!`,
  },
  {
    name: 'Jane M.',
    text: `I recently invested in your on demand IAT program and it has been such an answered prayer. I feel empowered in my 
            own healing journey and to help others like never before. It has been the greatest gift!`,
  },
  {
    name: 'Sanjana K.',
    text: `Doing the Integrated Attachment Theory training has been one of the best decisions I have made for my career...you 
        won't regret it at all!!`,
  },
  {
    name: 'Katie',
    text: `Thais is an inspiration because she genuinely cares and wants to set you up for success. She stands for everything she 
        teaches and naturally empowers you to believe that nothing is impossible and that anything can be achieved and overcome with 
        the right tools and practices.`,
  },
  {
    name: 'Poornima',
    text: `The best part about the IAT coaching program is it has created a skeletal structure which helps a person to come into their 
        own on one’s own terms. Thais also covers a lot of ideas in her business week which an IAT graduate can benefit from the program 
        and can create a sustainable livelihood.`,
  },
]
