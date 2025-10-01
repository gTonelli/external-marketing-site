'use client'

// core
import Image from 'next/image'
import { useCallback, useContext, useEffect, useRef, useState } from 'react'
// libraries
import { Stream, StreamPlayerApi } from '@cloudflare/stream-react'
import cx from 'classnames'
// modules
import Mixpanel from '@/modules/Mixpanel'
// utils
import { PageContext } from '@/utils/contexts'

interface IVideoStreamProps {
  /** cloudflare stream video ID */
  videoId: string
  /** S3 bucket thumbnail source path */
  thumbnailSrc: string
  /** CSS class name for wrapper */
  className?: string
  /** CSS class name for thumbnail image */
  classNameVideo?: string
  /** If provided, will let us separate events based on the video that has been played given that there are more than 1 videos */
  type?: string
}

export const VideoStream = ({
  className,
  classNameVideo,
  videoId,
  thumbnailSrc = '/images/pds-video-thumbnail.jpg',
  type = 'default',
}: IVideoStreamProps) => {
  // ==================== Context ====================
  const { page_name } = useContext(PageContext)

  // ==================== Refs ====================
  const videoRef = useRef<StreamPlayerApi>()
  const startedOnce = useRef(false)

  // ==================== State ====================
  const [currentThreshold, setCurrentThreshold] = useState(0)

  const onVideoProgress = useCallback(() => {
    const video = videoRef.current
    if (!video) return

    const currentTime = video.currentTime
    const duration = video.duration

    if (duration > 0) {
      const percentageWatched = (currentTime / duration) * 100
      const thresholds = [25, 50, 75, 100]

      const nextThreshold = thresholds.find((t) => percentageWatched >= t && t > currentThreshold)

      if (nextThreshold && nextThreshold !== currentThreshold) {
        Mixpanel.track.VideoProgress({
          progress: nextThreshold,
          page_name,
          video_type: `${type} - ${page_name}`,
        })
        setCurrentThreshold(nextThreshold)
      }
    }
  }, [currentThreshold, page_name, type])

  useEffect(() => {
    videoRef.current?.addEventListener('timeupdate', onVideoProgress)
  }, [currentThreshold, onVideoProgress])

  const onToggleVideo = useCallback(() => {
    if (!startedOnce.current) {
      Mixpanel.track.VideoStarted({
        page_name,
        video_type: `${type} - ${page_name}`,
      })
      startedOnce.current = true
    }
  }, [page_name, type])

  return (
    <div className={cx('aspect-video', className)}>
      <Stream
        controls
        responsive
        preload="auto"
        className={cx('w-full h-full', classNameVideo)}
        onPlay={onToggleVideo}
        poster={thumbnailSrc}
        streamRef={videoRef}
        src={videoId}
      />
    </div>
  )
}
