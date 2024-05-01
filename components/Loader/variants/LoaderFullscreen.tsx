// core
import React from 'react'
// components
import { ILoaderDefaultProps, LoaderDefault } from './LoaderDefault'
// libraries
import cx from 'classnames'

interface ILoaderFullscreenProps extends Omit<ILoaderDefaultProps, 'isLoading'> {}

export const LoaderFullscreen = ({ className }: ILoaderFullscreenProps) => (
  <div
    className={cx(
      'loader-wrapper w-full min-h-screen flex justify-center items-center',
      className
    )}>
    <LoaderDefault className="text-gray-500" />
  </div>
)
