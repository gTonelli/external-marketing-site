'use client'

// core
import React from 'react'
// components
import { IDefaultWrapperProps } from '@/components'
// libraries
import cx from 'classnames'
import Collapsible, { CollapsibleProps } from 'react-collapsible'
// utils
// import {} from 'utils'

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
  return (
    <Collapsible className={cx('', className)} transitionTime={transitionTime} {...otherProps}>
      {children}
    </Collapsible>
  )
}
