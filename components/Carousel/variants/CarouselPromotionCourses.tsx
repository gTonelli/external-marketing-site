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

interface ICarouselPromotionCoursesProps {
  title?: string
  copy?: string
}

export const CarouselPromotionCourses = ({ title, copy }: ICarouselPromotionCoursesProps) => {
  // ==================== State ====================
  const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
  const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

  return (
    <Section className="max-w-[100vw] 2xl:pt-24" classNameInner="max-w-screen-2xl">
      <h2>{title || 'Get Instant Access To All 65+ Courses At The Personal Development School'}</h2>

      <MHAPageText
        className="max-w-4xl mx-auto"
        content={
          copy ||
          'Take our best-selling and most powerful courses that have helped thousands of students break their destructive habits, build their self-esteem, become securely attached, and transform their lives from the inside out.'
        }
      />

      <div className="relative w-full">
        <Swiper
          autoplay
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
            bulletActiveClass: '!opacity-100',
            bulletClass:
              'inline-block w-3 h-3 mx-1 my-1 bg-primary rounded-full opacity-25 cursor-pointer lg:hover:opacity-100',
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
          className="clickable-shadow hidden w-8 h-8 flex-center rounded-full cursor-pointer bg-grey-20 absolute !top-1/4 z-5
            lg:flex  lg:-left-12 xl:w-10 xl:h-10">
          <FontAwesomeIcon className="text-primary" icon={faChevronLeft} size="lg" />
        </div>

        {/* RIGHT ARROW ICON */}
        <div
          ref={(node) => setNextEl(node)}
          className="clickable-shadow hidden w-8 h-8 flex-center rounded-full cursor-pointer bg-grey-20 absolute !top-1/4 z-5
            lg:flex  lg:-right-12 xl:w-10 xl:h-10">
          <FontAwesomeIcon className="text-primary" icon={faChevronRight} size="lg" />
        </div>
      </div>
    </Section>
  )
}
