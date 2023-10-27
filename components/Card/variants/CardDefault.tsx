// core
import React, { forwardRef } from 'react'
// components
import { IDefaultWrapperProps } from '@/components'
import { Loader } from '@/components/Loader/Loader'
// libraries
import cx from 'classnames'
import { overrideTailwindClasses as two } from 'tailwind-override'

export interface ICardDefaultProps extends IDefaultWrapperProps {
  /**
   * Whether the `Card` content is loading
   */
  isLoading?: boolean
  /** Event called when component is clicked */
  onClick?(): void
}

/**
 * Wrappper component for rendering card-like containers with shadow, round corners & NO padding
 */
export const CardDefault = forwardRef(
  (
    { children, className, isLoading, style, onClick }: ICardDefaultProps,
    ref: React.Ref<HTMLDivElement>
  ) => (
    <Loader.Wrapper className="min-h-20" isLoading={isLoading}>
      {/* relative */}
      <div ref={ref} className={two(cx('card', className))} style={style} onClick={onClick}>
        {children}
      </div>
    </Loader.Wrapper>
  )
)
