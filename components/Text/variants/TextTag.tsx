// core
import React from 'react'
// components
import { ITextDefaultProps } from './TextDefault'
// libraries
import cx from 'classnames'

export const TextTag = ({ className, content, style, onClick }: ITextDefaultProps) => (
  <span
    className={cx('block text-xs leading-snug tracking-normal text-blue-darkest', className)}
    style={style}
    onClick={onClick}>
    #{content}
  </span>
)
