// components
import { IDefaultWrapperProps } from '@/components'
// libraries
import cx from 'classnames'

export interface ISectionProps extends IDefaultWrapperProps {
  /** CSS for the section's content wrapper */
  classNameInner?: string
  /** ID */
  id?: string
}

export const Section = ({ children, className, classNameInner, id }: ISectionProps) => (
  <section className={cx('default-padding w-full', className)} id={id}>
    <div className={cx('section-inner-wrapper', classNameInner)}>{children}</div>
  </section>
)
