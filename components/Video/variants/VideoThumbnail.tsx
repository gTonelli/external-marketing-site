'use client'

// core
import React, { useContext } from 'react'
// components
import { IVideoDefaultProps, VideoDefault } from './VideoDefault'
// modules
import Mixpanel from '@/modules/Mixpanel'
// utils
import { PageContext } from '@/utils/contexts'
import { TVariantVideoData } from '@/utils/types'

interface IVideoThumbnailProps extends IVideoDefaultProps {
  /**
   * If provided, will let us separate events based on the video that has been played given that there are more than 1 videos
   * @default undefined
   */
  type?: string
  /**
   * If provided, clicking the component will NOT play the video, instead it will redirect the user to the specified URL
   * @default undefined
   */
  url?: string
  /** Data for running split test */
  variantVideoData?: TVariantVideoData
}

export const VideoThumbnail = ({
  type = 'default',
  url,
  variantVideoData,
  ...defaultProps
}: IVideoThumbnailProps) => {
  const { page_name } = useContext(PageContext)
  const mergedProps = { ...defaultProps, variantVideoData }

  const _onClick = () => {
    defaultProps.onClick?.()
    Mixpanel.track.VideoStarted({
      video_type: `${type} - ${page_name}`,
      page_name: page_name,
    })
  }

  return url ? (
    <a className={defaultProps.className} href={url}>
      <VideoDefault playButtonSize="medium" {...mergedProps} onClick={_onClick} />
    </a>
  ) : (
    <VideoDefault playButtonSize="medium" {...mergedProps} onClick={_onClick} />
  )
}
