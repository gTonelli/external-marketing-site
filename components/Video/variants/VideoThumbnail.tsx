'use client'

// core
import React, { useContext } from 'react'
// components
import { IVideoDefaultProps, VideoDefault } from './VideoDefault'
// modules
import Mixpanel from '@/modules/Mixpanel'
// utils
import { PageContext } from '@/utils/contexts'

interface IVideoThumbnailProps extends IVideoDefaultProps {
  /**
   * If provided, clicking the component will NOT play the video, instead it will redirect the user to the specified URL
   * @default undefined
   */
  url?: string
}

export const VideoThumbnail = ({ url, ...defaultProps }: IVideoThumbnailProps) => {
  const { page_name } = useContext(PageContext)

  const _onClick = () => {
    defaultProps.onClick?.()
    Mixpanel.track.VideoStarted({
      video_type: `default - ${page_name}}`,
      page_name: page_name,
    })
  }

  return url ? (
    <a className={defaultProps.className} href={url}>
      <VideoDefault playButtonSize="medium" {...defaultProps} onClick={_onClick} />
    </a>
  ) : (
    <VideoDefault playButtonSize="medium" {...defaultProps} onClick={_onClick} />
  )
}
