'use client'

// core
import React from 'react'
// components
import { IVideoDefaultProps, VideoDefault } from './VideoDefault'
// libraries
import cx from 'classnames'

export const VideoLarge = ({ ...defaultProps }: IVideoDefaultProps) => {
  return (
    <VideoDefault
      {...defaultProps}
      className={cx('max-w-max bg-white rounded-2xl shadow-lg p-4 md:p-10', defaultProps.className)}
    />
  )
}
