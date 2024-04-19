'use client'

// core
import React, { useCallback, useContext, useState } from 'react'
// components
import { Button } from '@/components/Button/Button'
import { Text } from '@/components/Text/Text'
import Image from 'next/image'
import { Dialog } from '@/components/Dialog/Dialog'
// libraries
import cx from 'classnames'
import YouTube, { YouTubeProps } from 'react-youtube'
// utils
import { useWindowWidth } from '@/utils/hooks'
import Mixpanel from '@/modules/Mixpanel'
import { PageContext } from '@/utils/contexts'

interface IThinkificProps {
  className?: string
  /** Classname of youtube Iframe */
  classNameIframe?: string
  /**
   * The size of the play button
   * Different video players have different play btn sizes
   * @small `w-8 h-8`
   * @mediun `w-16 h-16`
   * @large `w-28 h-28
   */
  playButtonSize?: 'none' | 'small' | 'medium' | 'large'
  /**
   * Thumbnail for the youtube video
   */
  thumbnail?: string
  /** Alt text for thumbnail img */
  thumbnailAlt?: string
  /** Width in px of the thumbnail */
  thumbnailWidth?: number
  /** Height in px of the thumbnail */
  thumbnailHeight?: number
  /** Thubmnail quality
   * @default 80
   */
  thumbnailQuality?: number
  /* Event called when play button is clicked */
  onClick?(): void
  /** ID for recording whether the video has been played */
  type?: string
  /* Thinkific video URL */
  srcUrl: string
}

export const VideoThinkific = ({
  thumbnailAlt,
  thumbnailWidth,
  thumbnailHeight,
  thumbnailQuality = 80,
  className,
  classNameIframe,
  srcUrl,
  playButtonSize,
  thumbnail = '/images/RoyalRumblePage/rr-video-thumbnail.png',
  type,
}: IThinkificProps) => {
  // ==================== State ====================
  const [isDialogShown, setIsDialogShown] = useState<boolean>(false)
  const [watchedVideos, setWatchedVideos] = useState(new Set<string>())
  // ==================== Context ====================
  const page_name = useContext(PageContext)?.page_name

  const onVideoStarted = () => {
    if (!type) return
    if (!watchedVideos.has(type)) {
      Mixpanel.track.VideoStarted({
        video_type: `${type} - ${page_name}`,
        page_name: page_name,
      })
    }

    setWatchedVideos(new Set<string>([...watchedVideos, type]))
  }

  const onToggleDialog = useCallback(() => {
    setIsDialogShown(!isDialogShown)
  }, [isDialogShown, setIsDialogShown])

  return (
    <>
      {/* POP-OUT DIALOG */}
      <Dialog
        className={cx('w-full overflow-hidden max-w-4xl bg-white !p-3', className)}
        isShown={isDialogShown}
        onToggle={onToggleDialog}>
        <iframe
          allowFullScreen
          className={cx('!w-full !h-auto !aspect-video', classNameIframe)}
          src={srcUrl}></iframe>
      </Dialog>

      <div
        className={cx('cursor-pointer relative flex-center rounded-md overflow-hidden', className)}
        onClick={() => setIsDialogShown(true)}>
        <Image
          alt={thumbnailAlt || 'Thinkific Video Thumbnail'}
          className="w-full h-auto rounded-10"
          src={thumbnail}
          width={415 || thumbnailWidth}
          height={234 || thumbnailHeight}
          tabIndex={-1}
          quality={thumbnailQuality}
        />
        <Image
          alt="Play Video Button"
          className={cx(
            'clickable absolute z-10',
            playButtonSize === 'small' && 'w-8 h-8',
            playButtonSize === 'medium' && 'w-10 h-10 lg:w-16 lg:h-16',
            playButtonSize === 'large' && 'w-12 h-12 2xl:w-28 2xl:h-28',
            // default - size adjusts based on the screen size
            !playButtonSize && 'w-8 h-8 lg:w-16 lg:h-16 '
          )}
          src="/images/play_icon.svg"
          width={32}
          height={32}
          onClick={onVideoStarted}
        />
      </div>
    </>
  )
}
