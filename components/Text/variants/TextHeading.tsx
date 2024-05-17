// core
import React from 'react'
// components
import { ITextDefaultProps } from './TextDefault'
// libraries
import cx from 'classnames'

type TTextHeadingSize = 1 | 2 | 3 | 4 | 5 | 5

interface ITextHeadingProps extends Omit<ITextDefaultProps, 'size'> {
  /**
   * Custom letter spacing
   * @default 'tracking-normal'
   */
  spacing?: 'tracking-normal' | 'tracking-0.325'
  /**
   * Size of the heading (h1, h2, h3 etc)
   * @default 2 // 32px
   */
  size?: TTextHeadingSize
}

export const TextHeading = ({
  className,
  content,
  font = 'font-sspb',
  spacing = 'tracking-normal', // 0
  size = 2,
  useMD,
}: ITextHeadingProps) => {
  switch (size) {
    case 1:
      return (
        <h1
          className={cx(
            'text-h1-mobile leading-9 lg:text-h1 lg:leading-50',
            font,
            spacing,
            className
          )}>
          {content}
        </h1>
      )

    default:
    case 2:
      return (
        <h2 className={cx('text-h2-mobile leading-9 lg:text-h2', font, spacing, className)}>
          {content}
        </h2>
      )

    case 3:
      return (
        <h3 className={cx('text-h3-mobile leading-8 lg:text-h3', font, spacing, className)}>
          {content}
        </h3>
      )

    case 4:
      return <h4 className={cx('text-lg leading-6', font, spacing, className)}>{content}</h4>

    case 5:
      return (
        <h5
          className={cx(
            'font-effra font-bold uppercase leading-6 !tracking-33',
            font,
            spacing,
            className
          )}>
          {content}
        </h5>
      )
  }
}
