'use client'

// core
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
  /** Whether to autoplay the video */
  autoplay?: boolean
  /** Callback for video started */
  onVideoStarted?: () => void
  /** Callback for video progress */
  onVideoProgress?: (progress: number) => void
}

export const VideoStream = ({
  autoplay = false,
  onVideoStarted,
  onVideoProgress,
  className,
  classNameVideo,
  videoId,
  thumbnailSrc,
  type = 'default',
}: IVideoStreamProps) => {
  // ==================== Context ====================
  const { page_name } = useContext(PageContext)

  // ==================== Refs ====================
  const videoRef = useRef<StreamPlayerApi>()
  const startedOnce = useRef(false)

  // ==================== State ====================
  const [currentThreshold, setCurrentThreshold] = useState(0)

  const onTimeUpdate = useCallback(() => {
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
        onVideoProgress?.(nextThreshold)
      }
    }
  }, [currentThreshold, page_name, type, onVideoProgress])

  useEffect(() => {
    videoRef.current?.addEventListener('timeupdate', onTimeUpdate)
  }, [currentThreshold, onTimeUpdate])

  const onToggleVideo = useCallback(() => {
    if (!startedOnce.current) {
      Mixpanel.track.VideoStarted({
        page_name,
        video_type: `${type} - ${page_name}`,
      })
      startedOnce.current = true
      onVideoStarted?.()
    }
  }, [page_name, type, onVideoStarted])

  return (
    <div className={cx('aspect-video', className)}>
      <Stream
        autoplay={autoplay}
        controls
        responsive
        preload="auto"
        className={cx('w-full h-full bg-white', classNameVideo)}
        letterboxColor="transparent"
        onPlay={onToggleVideo}
        poster={thumbnailSrc}
        streamRef={videoRef}
        src={videoId}
      />
    </div>
  )
}
