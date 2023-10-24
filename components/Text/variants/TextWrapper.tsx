// core
import React from 'react'
import { IDefaultWrapperProps } from '@/components'
// components
import { ITextDefaultProps } from './TextDefault'
// libraries
import cx from 'classnames'

interface ITextWrapper extends IDefaultWrapperProps, Omit<ITextDefaultProps, 'useMD' | 'onClick'> {}

export const TextWrapper = ({
  className,
  children,
  font = 'font-effra',
  size = 16,
  style,
}: ITextWrapper) => {
  const tw = () => {
    let fontSize = 'text-base' // 16px
    const lineHeight = 'leading-snug' // 22px
    const letterSpacing = 'tracking-normal' // 0

    switch (size) {
      case 14:
        fontSize = 'text-sm' // 14px
        // lineHeight - same as default
        // letterSpacing - same as default
        break
      case 16:
      default:
        break
    }

    return cx(font, fontSize, lineHeight, letterSpacing, className)
  }

  return (
    <p className={tw()} style={style}>
      {children}
    </p>
  )
}
