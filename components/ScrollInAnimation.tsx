// core
import React from 'react'
// components
import { IDefaultWrapperProps } from '@/components'
// libraries
import cx from 'classnames'
import ScrollAnimation, { ScrollAnimationProps } from 'react-animate-on-scroll'

interface IScrollInAnimationProps
  extends IDefaultWrapperProps,
    Omit<ScrollAnimationProps, 'style' | 'children'> {}

export const ScrollInAnimation = ({
  animateOnce = true,
  animateIn,
  animateOut,
  className,
  children,
  duration,
  offset = 100,
  ...otherProps
}: IScrollInAnimationProps) => {
  return (
    <ScrollAnimation
      {...otherProps}
      offset={offset}
      animateOnce={animateOnce}
      animateIn={animateIn}
      animateOut={animateOut}
      className={cx('', className)}
      duration={duration}>
      {children}
    </ScrollAnimation>
  )
}
