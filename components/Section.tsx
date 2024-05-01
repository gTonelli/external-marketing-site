// core
import React from 'react'
// components
import { IDefaultWrapperProps } from '@/components'
// libraries
import cx from 'classnames'

export interface ISectionProps extends IDefaultWrapperProps {
  /** CSS for the section's content wrapper */
  classNameInner?: string
}

export const Section = ({ children, className, classNameInner }: ISectionProps) => (
  <section className={cx('default-padding w-full', className)}>
    <div className={cx('section-inner-wrapper', classNameInner)}>{children}</div>
  </section>
)
