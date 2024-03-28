'use client'

// core
import React, { forwardRef, useContext, useState } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Icon } from '@/components/Icon'
import { Testimonial } from '@/components/Testimonial/Testimonial'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
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

const DEFAULT_TESTIMONIALS = [
  {
    author: {
      name: 'Melissa K.',
      picture: 'avatar_melissa.png',
    },
    content:
      '“I’ve researched relationships most of my life. However, I couldn’t find anything that explained my dynamic in them. I thought about therapy until I stumbled upon Thais’s YouTube channel. She explained EXACTLY what I was experiencing. She literally read my mind! I’m usually a bit of a skeptic but I was hooked! I finally figured out my problem and how to solve it!”',
    score: 5,
  },
  {
    author: {
      name: 'Tappy P.',
      picture: 'avatar_tappy.jpg',
    },
    content:
      '“PDS has had such an amazing impact on my relationships, my self-esteem and has given me valuable self-awareness. The community has so many brilliant, and like-minded individuals who I always look forward to talking to! The tools within PDS have provided me with the strength, and ability to heal, almost completely from my anxiety, and I feel so much more confident within myself.”',
    score: 5,
  },
  {
    author: {
      name: 'Athira D.',
      picture: 'avatar_athira.jpg',
    },
    content:
      '“PDS replaced therapy for me. I was a Fearful Avoidant, and I could not explain why I struggled in relationships. The constant need for connection and the fear of having one was very draining. I am so grateful to PDS that finally I realize that my worth is not related to anything I achieve but to the person that I am. Also learning about other attachment styles helped me to become more compassionate to people around me.”',
    score: 5,
  },
  {
    author: {
      name: 'Leona D.',
      picture: 'avatar_leona.jpg',
    },
    content:
      '"Joining PDS was the single best decision I made last year as it opened my eyes to the possibility that I could dramatically improve the quality of my relationships and that my past did not have to define my future. The PDS community is a truly supportive environment, my only regret is that I did not find all this out sooner as it has been truly life changing for me!"',
    score: 5,
  },
  {
    author: {
      name: 'Tamara G.',
      picture: 'avatar_tamara.jpg',
    },
    content:
      '“PDS is an incredible resource. The work is powerful. It’s helped me to heal some hard wounds and change my life to one that is more balanced, more joyful and based in a deep sense of self-love and understanding. You choose how to heal and you get to do it in an environment steeped in compassion, connection, integrity and personal accountability.”',
    score: 5,
  },
]

export const CarouselTestimonial = forwardRef(
  (
    {
      className,
      classNameCard,
      classNameHeader,
      classNameSlide,
      classNameSwiper,
      headingText = "Here's What Our Students Say:",
      subheadingText,
      showQuotations = true,
      testimonials = DEFAULT_TESTIMONIALS,
      testimonialType = 'primary',
    }: ICarouselTestimonialProps,
    ref: React.Ref<HTMLDivElement>
  ) => {
    // ==================== Context ====================
    const { windowWidth } = useContext(ViewportContext)

    // ==================== State ====================
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null)
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null)

    const isPrimary = testimonialType === 'primary'

    const noOfslides = isPrimary
      ? windowWidth <= EWindowWidth.md
        ? 1
        : windowWidth < EWindowWidth['xl']
        ? 2
        : 3
      : 1

    return (
      //   px-page-xxs md:px-page-xs lg:px-page-md 3xl:px-page
      <section
        ref={ref}
        className={cx(
          className,
          `w-full flex flex-col items-center mb-10 ${
            isPrimary ? 'lg:px-page-xs xl:px-page-md 2xl:px-page' : ''
          }`
        )}>
        {/* QUOTE HEADER */}
        <div
          className="w-full flex items-center justify-around mb-10 
            xl:max-w-3/4 
            3xl:max-w-1/2">
          {/* LEFT QUOTE */}
          {showQuotations ? (
            <div>
              <Image className="hidden lg:block" src="homepage_quote_left.png" />
            </div>
          ) : null}

          <div>
            {/* HEADING */}
            <Text.Heading
              className={cx('block text-center', classNameHeader)}
              content={headingText}
            />

            {subheadingText && <Text className="mt-4" content={subheadingText} />}
          </div>

          {/* RIGHT QUOTE */}
          {showQuotations ? (
            <Image className="hidden lg:block" src="homepage_quote_right.png" />
          ) : null}
        </div>

        {/* SLIDER */}
        <div
          className={`w-full flex items-start relative ${
            isPrimary ? 'max-w-[1184px]' : 'max-w-6xl'
          }`}>
          <Swiper
            loop
            className={cx('!pb-12', classNameSwiper)}
            modules={[Navigation, Pagination]}
            navigation={{ prevEl, nextEl }}
            pagination={{
              clickable: true,
              bulletActiveClass: '!opacity-100 !w-6 !h-6 !my-0',
              bulletClass:
                'inline-block w-4 h-4 mx-1 my-1 bg-primary rounded-full opacity-50 cursor-pointer',
            }}
            slidesPerGroup={noOfslides}
            slidesPerView={noOfslides}
            spaceBetween={16}>
            {testimonials.map((review, index) => (
              <SwiperSlide
                key={`review_${index}`}
                className={cx('flex justify-evenly self-start', classNameSlide)}>
                {isPrimary ? (
                  <Testimonial className={classNameCard} review={review} />
                ) : (
                  <Testimonial.Tertiary className={classNameCard} review={review} />
                )}
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
      </section>
    )
  }
)
