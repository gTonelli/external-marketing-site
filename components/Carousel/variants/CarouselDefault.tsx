'use client'

// core
import React, { useContext } from 'react'
// components
import { IDefaultWrapperProps } from '@/components'
// libraries
import { Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import cx from 'classnames'
// utils
import { EWindowWidth } from '@/utils/constants'
import { ViewportContext } from '@/utils/contexts'

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
      className={cx('!overflow-hidden', className)}
      modules={[Pagination]}
      pagination={{
        clickable: true,
        renderBullet: (_, className) =>
          '<div class="w-4 h-4 bg-primary rounded-full ' + className + '"/></div>',
      }}
      slidesPerView={
        windowWidth <= EWindowWidth.md ? 1 : windowWidth <= EWindowWidth['2xl'] ? 2 : 3
      }
      spaceBetween={spaceBetween}>
      {children.map((child, index) => (
        <SwiperSlide key={`review_${index}`} className="flex justify-evenly">
          {child}
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
