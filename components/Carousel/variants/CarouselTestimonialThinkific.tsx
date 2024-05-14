'use client'

// core
import React, { forwardRef, useContext, useState } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Icon } from '@/components/Icon'
import { Testimonial } from '@/components/Testimonial/Testimonial'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
import { DEFAULT_TESTIMONIALS } from './CarouselTestimonial'
// libraries
import cx from 'classnames'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// utils
import { EWindowWidth } from '@/utils/constants'
import { TTestimonial } from '../../Testimonial/variants/TestimonialDefault'
import { ViewportContext } from '@/utils/contexts'
// styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

interface ICarouselTestimonialProps extends IDefaultProps {
  /** Classnames for carousel children (cards) */
  classNameCard?: string
  /** Classnames for carousel children (cards) */
  classNameHeader?: string
  /** Classnames for swiper slides */
  classNameSlide?: string
  /** Classnames for swiper wrapper */
  classNameSwiper?: string
  /**
   * Top heading text
   * @default "Here's What Our Students Say:"
   */
  headingText?: string
  /** Subheading text */
  subheadingText?: string
  /**
   * Show stylized quotations surrounding header text
   * @default true
   */
  showQuotations?: boolean
  /**
   * Testimonials to show
   */
  testimonials?: TTestimonial[]
  /** Testimonial slides type */
  testimonialType?: string
}

export const CarouselTestimonialThinkific = forwardRef(
  (
    {
      className,
      classNameCard,
      classNameSlide,
      classNameSwiper,
      testimonials = DEFAULT_TESTIMONIALS,
    }: ICarouselTestimonialProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    // ==================== Context ====================
    const { windowWidth } = useContext(ViewportContext)

    // ==================== State ====================
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

    const noOfslides = windowWidth <= EWindowWidth.md ? 1 : 'auto'
    const spaceBetween = windowWidth <= EWindowWidth.md ? 0 : 36
    const centeredSlides = windowWidth > EWindowWidth.md

    return (
      <section ref={ref} className={cx(`w-full relative overflow-hidden`, className)}>
        {/* SLIDER */}
        <Swiper
          loop
          className={cx('!pb-12', classNameSwiper)}
          wrapperClass="!items-stretch"
          modules={[Navigation, Pagination]}
          navigation={{
            prevEl,
            nextEl,
            disabledClass: 'opacity-25 !cursor-not-allowed',
          }}
          pagination={{
            clickable: true,
            bulletActiveClass: '!opacity-100',
            bulletClass:
              'inline-block w-4 h-4 mx-1 my-1 bg-primary rounded-full opacity-50 cursor-pointer lg:hover:opacity-100',
          }}
          autoplay={{
            delay: 6000,
            disableOnInteraction: true,
          }}
          centeredSlides={centeredSlides}
          slidesPerView={noOfslides}
          spaceBetween={spaceBetween}>
          {testimonials.map((review, index) => (
            <SwiperSlide
              key={`review_${index}`}
              className={cx('!w-full overflow-hidden md:!w-1/2', classNameSlide)}>
              <div
                className={cx(
                  'bg-gradient-to-tl from-blue-lightest-50 to-primary-light-50 rounded-3xl text-left p-9',
                  classNameCard
                )}>
                <div>
                  <Icon name="quote-left" size="3x" className="!text-primary mb-4" />
                </div>

                <p className="mb-4">{review.content}</p>

                <div className="w-fit flex items-center">
                  <Image
                    className="!w-12 !h-12 rounded-full mr-4"
                    src={review.author.picture}
                    alt={`An image of ${review.author.name}`}
                  />

                  <div>
                    <p>
                      <strong>{review.author.name}</strong>
                    </p>
                    {review.author.country && (
                      <p>
                        {review.author.state}, {review.author.country}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    )
  }
)
