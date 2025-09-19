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
  /** local thumbnail source path */
  thumbnailSrc: string
  /** alt text for thumbnail */
  thumbnailAlt: string
  /** CSS class name for wrapper */
  className?: string
  /** CSS class name for thumbnail image */
  classNameThumbnail?: string
  /** If provided, will let us separate events based on the video that has been played given that there are more than 1 videos */
  type?: string
}

export const VideoStream = ({
  className,
  classNameThumbnail,
  videoId,
  thumbnailSrc = '/images/pds-video-thumbnail.jpg',
  thumbnailAlt = 'The Personal Development School Video Thumbnail',
  type = 'default',
}: IVideoStreamProps) => {
  // ==================== Context ====================
  const { page_name } = useContext(PageContext)

  // ==================== Refs ====================
  const videoRef = useRef<StreamPlayerApi>()
  const startedOnce = useRef(false)

  // ==================== State ====================
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentThreshold, setCurrentThreshold] = useState(0)

  useEffect(() => {
    if (!isPlaying) return

    let raf: number

    const attachListeners = () => {
      if (!videoRef.current) {
        raf = requestAnimationFrame(attachListeners)
        return
      }

      videoRef.current.addEventListener('timeupdate', onVideoProgress)
      videoRef.current
        .play()
        .catch((err) => console.error('Video playback failed with message ', err))
    }
    attachListeners()

    return () => {
      cancelAnimationFrame(raf)

      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', onVideoProgress)
      }
    }
  }, [isPlaying, currentThreshold, page_name, type])

  const onVideoProgress = () => {
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
  }

  const onToggleVideo = useCallback(() => {
    if (!startedOnce.current) {
      Mixpanel.track.VideoStarted({
        page_name,
        video_type: `${type} - ${page_name}`,
      })
      startedOnce.current = true
    }
    setIsPlaying(!isPlaying)
  }, [startedOnce, isPlaying])

  return (
    <div className={cx('aspect-video', className)}>
      {!isPlaying ? (
        <div className="relative w-full h-full cursor-pointer">
          <Image
            className={cx('w-full h-full object-cover', classNameThumbnail)}
            loading="lazy"
            alt={thumbnailAlt}
            src={thumbnailSrc}
            width={600}
            height={400}
          />

          <div
            className="cursor-pointer absolute inset-0 flex items-center justify-center z-10"
            onClick={onToggleVideo}>
            <Image
              alt="Video Play Button"
              className="cursor-pointer w-8 h-8 lg:w-16 lg:h-16"
              src="/images/play_icon.svg"
              width={24}
              height={24}
            />
          </div>
        </div>
      ) : (
        <Stream controls className="w-full h-full" streamRef={videoRef} src={videoId} />
      )}
    </div>
  )
}
