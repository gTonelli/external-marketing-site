'use client'

// core
import { forwardRef, useContext } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Image } from '@/components/Image'
import { DEFAULT_TESTIMONIALS } from './CarouselTestimonial'
// libraries
import cx from 'classnames'
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import { faQuoteLeft } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
  /** Classnames for swiper slides */
  classNameSlide?: string
  /** Classnames for swiper wrapper */
  classNameSwiper?: string
  /** index of slide where swiper starts (default 0) */
  initialSlide?: number
  /**
   * Testimonials to show
   */
  testimonials?: TTestimonial[]
}

export const CarouselTestimonialThinkific = forwardRef(
  (
    {
      className,
      classNameCard,
      classNameSlide,
      classNameSwiper,
      initialSlide = 0,
      testimonials = DEFAULT_TESTIMONIALS,
    }: ICarouselTestimonialProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    // ==================== Context ====================
    const { windowWidth } = useContext(ViewportContext)

    const noOfslides = windowWidth <= EWindowWidth.md - 1 ? 1 : 'auto'
    const spaceBetween = windowWidth <= EWindowWidth.md - 1 ? 0 : 36
    const centeredSlides = windowWidth >= EWindowWidth.md

    return (
      <section ref={ref} className={cx(`w-full relative overflow-hidden`, className)}>
        {/* SLIDER */}
        <Swiper
          loop
          className={cx('!overflow-hidden !pb-12', classNameSwiper)}
          initialSlide={initialSlide}
          modules={[Autoplay, Pagination]}
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
              className={cx('!w-full !h-auto overflow-hidden md:!w-1/2', classNameSlide)}>
              <div
                className={cx(
                  'h-full bg-gradient-to-tl from-blue-lightest-50 to-primary-light-50 rounded-3xl text-left p-9',
                  classNameCard
                )}>
                <div>
                  <FontAwesomeIcon icon={faQuoteLeft} size="3x" className="!text-primary mb-4" />
                </div>

                <p className="mb-4">{review.content}</p>

                <div className="w-fit flex items-center">
                  {review.author.picture && (
                    <Image
                      className="!w-12 !h-12 rounded-full mr-4"
                      src={review.author.picture}
                      alt={`An image of ${review.author.name}`}
                    />
                  )}

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
