'use client'

// core
import { useContext } from 'react'
// components
import { IDefaultWrapperProps } from '@/components'
// libraries
import { Autoplay, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import cx from 'classnames'
// utils
import { EWindowWidth } from '@/utils/constants'
import { ViewportContext } from '@/utils/contexts'
// styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

export interface ICarouselDefaultProps extends IDefaultWrapperProps {
  /** Slides to render. Should be an array of components. */
  children: React.ReactNode[]
  /**
   * Space between slides in px
   * @default 16
   */
  spaceBetween?: number
}

/**
 * Default Carousel
 *
 * @warning
 * This is a bare bones component only meant to access the variant:
 * CarouselTestimonial
 */
export const CarouselDefault = ({
  children,
  className,
  spaceBetween = 16,
}: ICarouselDefaultProps) => {
  // ==================== Context ====================
  const { windowWidth } = useContext(ViewportContext)

  return (
    <Swiper
      loop
      className={cx('!overflow-hidden !pb-12', className)}
      modules={[Autoplay, Pagination]}
      pagination={{
        clickable: true,
        bulletActiveClass: '!opacity-100',
        bulletClass:
          'inline-block w-2 h-2 mx-1 my-1 bg-primary rounded-full opacity-50 cursor-pointer lg:hover:opacity-100',
      }}
      autoplay={{
        delay: 6000,
        disableOnInteraction: true,
      }}
      slidesPerView={1}
      spaceBetween={spaceBetween}>
      {children.map((child, index) => (
        <SwiperSlide
          key={`review_${index}`}
          className="!w-full !h-auto overflow-hidden flex justify-evenly">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
