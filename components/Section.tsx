// core
import React from 'react'
// components
import { IDefaultWrapperProps } from '@/components'
// libraries
import cx from 'classnames'
// utils
// import {} from 'utils'

interface ISectionProps extends IDefaultWrapperProps {
  /** CSS for the section's content wrapper - the grid (max 1024px) limiter */
  classNameInner?: string
}

export const Section = ({ children, className, classNameInner }: ISectionProps) => (
  <section className={cx('default-padding w-full', className)}>
    <div className={cx('section-inner-wrapper', classNameInner)}>{children}</div>
  </section>
)
