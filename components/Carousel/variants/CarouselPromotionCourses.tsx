'use client'

// core
import { useState } from 'react'
import Image from 'next/image'
// components
import { Section } from '../../Section'
import { MHAPageText } from '../../SpecialPromotion'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const courses = [
  `course-fa-to-sa.jpg`,
  `course-fa-advance.jpg`,
  `course-ap-to-sa.jpg`,
  `course-ap-advance.jpg`,
  `course-da-to-sa.jpg`,
  `course-da-advance.jpg`,
  `course-heal-from-breakup.jpg`,
  `course-emotional-mastery.jpg`,
]

export const CarouselPromotionCourses = () => {
  // ==================== State ====================
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <Section className="max-w-[100vw] 2xl:pt-24" classNameInner="max-w-screen-2xl">
      <h2 className="text-2xl">Explore Some of Our Life-Changing Courses.</h2>

      <MHAPageText
        className="max-w-4xl mx-auto"
        content="Take a sneak peek at some of the courses that have 
            helped thousands of students break their destructive habits, build their self-esteem, release resentments, and transform 
            their lives from the inside out."
      />

      <div className="relative w-full">
        <Swiper
          loop
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            576: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            896: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 32,
            },
            1536: {
              slidesPerView: 4,
              spaceBetween: 36,
            },
          }}
          className="w-full !overflow-hidden py-12 lg:px-8 lg:pb-20"
          wrapperClass="pb-12"
          modules={[Autoplay, Navigation, Pagination]}
          navigation={{ prevEl, nextEl }}
          pagination={{
            clickable: true,
            renderBullet: (_, className) =>
              '<div class="w-3 h-3 bg-primary rounded-full ' + className + '"/></div>',
          }}
          slidesPerView={1}
          spaceBetween={10}>
          {courses.map((obj, index) => (
            <SwiperSlide key={`trustbar_${index}`}>
              <Image
                alt="brand logo"
                className="w-full rounded-20"
                width={500}
                height={282}
                src={`/images/${obj}`}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* LEFT ARROW ICON */}
        <div
          ref={(node) => setPrevEl(node)}
          className="clickable-shadow hidden w-8 h-8 flex-center rounded-full bg-grey-20 absolute top-1/2 z-5
            lg:flex lg:-left-3 lg:top-[calc(50%-2rem)]
            3xl:-left-10 xl:w-10 xl:h-10">
          <FontAwesomeIcon className="text-primary" icon={faChevronLeft} size="lg" />
        </div>

        {/* RIGHT ARROW ICON */}
        <div
          ref={(node) => setNextEl(node)}
          className="clickable-shadow hidden w-8 h-8 flex-center rounded-full bg-grey-20 absolute top-1/2 z-5
            lg:flex lg:-right-3 lg:top-[calc(50%-2rem)]
            3xl:-right-10 xl:w-10 xl:h-10">
          <FontAwesomeIcon className="text-primary" icon={faChevronRight} size="lg" />
        </div>
      </div>
    </Section>
  )
}
