'use client'

// core
import { useEffect, useState } from 'react'
// components
import { IDefaultWrapperProps } from '@/components'
// libraries
import cx from 'classnames'
import Collapsible, { CollapsibleProps } from 'react-collapsible'

interface IExpandableProps
  extends Omit<CollapsibleProps, 'id' | 'children'>,
    IDefaultWrapperProps {}

export const Expandable = ({
  className,
  children,
  id,
  transitionTime = 200,
  ...otherProps
}: IExpandableProps) => {
  // Effectively disable SSR
  const [shouldRender, setShouldRender] = useState(false)
  useEffect(() => {
    setShouldRender(true)
  }, [setShouldRender])

  if (!shouldRender) return null
  else {
    return (
      <Collapsible className={cx('', className)} transitionTime={transitionTime} {...otherProps}>
        {children}
      </Collapsible>
    )
  }
}
