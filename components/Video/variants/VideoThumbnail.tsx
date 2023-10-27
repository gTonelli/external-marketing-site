'use client'

// core
import React from 'react'
// components
import { IVideoDefaultProps, VideoDefault } from './VideoDefault'

interface IVideoThumbnailProps extends IVideoDefaultProps {
  /**
   * If provided, clicking the component will NOT play the video, instead it will redirect the user to the specified URL
   * @default undefined
   */
  url?: string
}

export const VideoThumbnail = ({ url, ...defaultProps }: IVideoThumbnailProps) => {
  return url ? (
    <a className={defaultProps.className} href={url}>
      <VideoDefault playButtonSize="medium" {...defaultProps} />
    </a>
  ) : (
    <VideoDefault playButtonSize="medium" {...defaultProps} />
  )
}
