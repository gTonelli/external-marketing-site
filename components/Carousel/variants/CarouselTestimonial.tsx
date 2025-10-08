'use client'

// core
import Image from 'next/image'
import { forwardRef, useContext, useState } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Testimonial } from '@/components/Testimonial/Testimonial'
import { Text } from '@/components/Text/Text'
import { faChevronLeft, faChevronRight } from '@awesome.me/kit-545b942488/icons/classic/solid'
// libraries
import cx from 'classnames'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
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
  /** Classnames for carousel children (cards) */
  classNameHeader?: string
  /** Classnames for carousel header wrapper */
  classNameHeaderWrapper?: string
  /** Classnames for carousel quotations */
  classNameQuotations?: string
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
   * Quotation sizes
   * @default "24px"
   */
  quotationSizes?: string
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

export const DEFAULT_TESTIMONIALS = [
  {
    author: {
      name: 'Melissa K.',
      picture: 'avatar_melissa.png',
      state: 'Colorado',
      country: 'USA',
    },
    content:
      '“I’ve researched relationships most of my life. However, I couldn’t find anything that explained my dynamic in them. I thought about therapy until I stumbled upon Thais’s YouTube channel. She explained EXACTLY what I was experiencing. She literally read my mind! I’m usually a bit of a skeptic but I was hooked! I finally figured out my problem and how to solve it!”',
    score: 5,
  },
  {
    author: {
      name: 'Tappy P.',
      picture: 'avatar_tappy.jpg',
      state: 'England',
      country: 'UK',
    },
    content:
      '“PDS has had such an amazing impact on my relationships, my self-esteem and has given me valuable self-awareness. The community has so many brilliant, and like-minded individuals who I always look forward to talking to! The tools within PDS have provided me with the strength, and ability to heal, almost completely from my anxiety, and I feel so much more confident within myself.”',
    score: 5,
  },
  {
    author: {
      name: 'Athira D.',
      picture: 'avatar_athira.jpg',
      state: 'San Francisco',
      country: 'USA',
    },
    content:
      '“PDS replaced therapy for me. I was a Fearful Avoidant, and I could not explain why I struggled in relationships. The constant need for connection and the fear of having one was very draining. I am so grateful to PDS that finally I realize that my worth is not related to anything I achieve but to the person that I am. Also learning about other attachment styles helped me to become more compassionate to people around me.”',
    score: 5,
  },
  {
    author: {
      name: 'Leona D.',
      picture: 'avatar_leona.jpg',
      state: 'Belfast',
      country: 'UK',
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
      classNameHeaderWrapper,
      classNameQuotations,
      classNameSlide,
      classNameSwiper,
      headingText = "Here's What Our Students Say:",
      quotationSizes,
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

    const noOfslides = isPrimary ? (windowWidth <= EWindowWidth.lg ? 1 : 3) : 1

    return (
      //   px-page-xxs md:px-page-xs lg:px-page-md 3xl:px-page
      <section
        ref={ref}
        className={cx(
          className,
          `w-full flex flex-col items-center my-8 ${
            isPrimary ? 'lg:px-page-xs xl:px-page-md 2xl:px-page' : ''
          }`
        )}>
        {/* QUOTE HEADER */}
        <div className={cx('w-full flex items-center justify-around mb-4', classNameHeaderWrapper)}>
          {/* LEFT QUOTE */}
          {showQuotations && (
            <Image
              className={cx('hidden lg:block', classNameQuotations)}
              src="/images/homepage_quote_left.png"
              alt="left quote"
              width={24}
              height={24}
              quality={100}
              sizes={quotationSizes}
            />
          )}

          <div className="default-padding text-center">
            {/* HEADING */}
            {headingText && (
              <Text.Heading
                className={cx('block text-center', classNameHeader)}
                content={headingText}
              />
            )}

            {subheadingText && <Text className="mt-4" content={subheadingText} />}
          </div>

          {/* RIGHT QUOTE */}
          {showQuotations && (
            <Image
              className={cx('hidden lg:block', classNameQuotations)}
              src="/images/homepage_quote_right.png"
              alt="right quote"
              width={24}
              height={24}
              quality={100}
              sizes={quotationSizes}
            />
          )}
        </div>

        {/* SLIDER */}
        <div
          className={`w-full items-start relative lg:flex ${
            isPrimary ? 'max-w-[1184px]' : 'max-w-6xl'
          }`}>
          <Swiper
            className={cx('!overflow-hidden !pb-12', classNameSwiper)}
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
                'inline-block w-3 h-3 mx-1 my-1 bg-primary rounded-full opacity-25 cursor-pointer lg:hover:opacity-100',
            }}
            slidesPerGroup={noOfslides}
            slidesPerView={noOfslides}
            spaceBetween={16}>
            {testimonials.map((review, index) => (
              <SwiperSlide key={`review_${index}`} className={cx('flex !h-auto', classNameSlide)}>
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
            className="hidden absolute w-10 h-10 z-5 flex-center rounded-full bg-grey/20 border border-transparent -bottom-10 left-1/3 cursor-pointer
            lg:top-1/2 lg:hover:border-primary lg:flex lg:-left-10">
            <FontAwesomeIcon className="text-primary" icon={faChevronLeft} size="lg" />
          </div>

          {/* RIGHT ARROW ICON */}
          <div
            ref={(node) => setNextEl(node)}
            className="hidden absolute w-10 h-10 z-5 flex-center rounded-full bg-grey/20 border border-transparent -bottom-10 right-1/3
            lg:top-1/2 lg:hover:border-primary lg:cursor-pointer lg:flex lg:-right-10">
            <FontAwesomeIcon className="text-primary" icon={faChevronRight} size="lg" />
          </div>
        </div>
      </section>
    )
  }
)
