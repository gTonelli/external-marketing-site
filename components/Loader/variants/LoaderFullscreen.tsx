// core
import React from 'react'
// components
import { ILoaderDefaultProps, LoaderDefault } from './LoaderDefault'
// libraries
import cx from 'classnames'

interface ILoaderFullscreenProps extends Omit<ILoaderDefaultProps, 'isLoading'> {}

export const LoaderFullscreen = ({ className }: ILoaderFullscreenProps) => (
  <div className={cx('loader-wrapper min-h-screen', className)}>
    <LoaderDefault className="text-gray-500" />
  </div>
)
