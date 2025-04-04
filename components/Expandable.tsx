'use client'

// core
import { useEffect, useState } from 'react'
// components
import { IDefaultWrapperProps } from '@/components'
import { Loader } from './Loader'
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
  const [showCollapsible, setShowCollapsible] = useState(false)
  useEffect(() => {
    setShowCollapsible(true)
  }, [])

  if (!showCollapsible) return <Loader />
  else {
    return (
      <Collapsible className={cx('', className)} transitionTime={transitionTime} {...otherProps}>
        {children}
      </Collapsible>
    )
  }
}
