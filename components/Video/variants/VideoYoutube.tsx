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

interface IYouTubeProps extends YouTubeProps {
  /** Button label */
  buttonLabel?: string
  /** Button type */
  buttonType?: string
  /** Classname of thumbnail */
  className?: string
  /** Classname of youtube component */
  classNameYoutube?: string
  /** Classname of youtube Iframe */
  classNameIframe?: string
  /** Maxium height for iframe */
  maxHeight?: number
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
  /* Event called when play button is clicked */
  onClick?(): void
  /* Event called when the video starts to play */
  onPlay?(): void
  /* Event called when the video is ready */
  onPlayerReady?(): void
  /** ID for recording whether the video has been played */
  type?: string
  /* Youtube video id */
  videoId: string
}

export const VideoYoutube = ({
  buttonLabel,
  buttonType,
  className,
  classNameYoutube,
  classNameIframe,
  onPlay,
  videoId,
  playButtonSize,
  maxHeight = 300,
  thumbnail = 'RoyalRumblePage/rr-video-thumbnail.png',
  type,
}: IYouTubeProps) => {
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

  const _onPlay = () => {
    onPlay?.()
    onVideoStarted()
  }

  //Auto play when click on thumbnail play
  const onPlayerReady: YouTubeProps['onReady'] = (event) => {
    event.target.playVideo()
  }

  return (
    <>
      {/* POP-OUT DIALOG */}
      <Dialog
        className={cx('w-min overflow-hidden max-w-4xl bg-white !p-3', className)}
        isShown={isDialogShown}
        onToggle={onToggleDialog}>
        <YouTube
          className={cx('w-full aspect-video', classNameYoutube)}
          iframeClassName={cx(classNameIframe)}
          opts={{
            height: Math.min(((useWindowWidth().windowWidth - 64) * 9) / 16, maxHeight - 32),
            width: Math.min(useWindowWidth().windowWidth - 64, (maxHeight * 16) / 9 - 64),
            playerVars: {
              origin: 'https://attachment.personaldevelopmentschool.com',
            },
          }}
          videoId={videoId}
          onPlay={_onPlay}
          onReady={onPlayerReady}
        />
      </Dialog>

      {/* Thumbnail */}
      {(() => {
        switch (buttonType) {
          case 'button':
            return (
              <Button
                className={cx('', className)}
                label={buttonLabel}
                onClick={() => setIsDialogShown(true)}
              />
            )
          case 'text':
            return (
              <Text.Paragraph
                className={cx('cursor-pointer', className)}
                content={buttonLabel}
                onClick={() => setIsDialogShown(true)}
              />
            )
          default:
            return (
              <div
                className={cx(
                  'cursor-pointer relative flex-center rounded-md overflow-hidden',
                  className
                )}
                onClick={() => setIsDialogShown(true)}>
                <Image
                  alt=""
                  className="rounded-10"
                  src={thumbnail}
                  tabIndex={-1}
                  width={425}
                  height={239}
                />
                <Image
                  alt=""
                  className={cx(
                    'clickable absolute z-10 w-8 h-8',
                    playButtonSize === 'small' && 'w-8 h-8',
                    playButtonSize === 'medium' && 'lg:w-16 lg:h-16',
                    playButtonSize === 'large' && '2xl:w-28 2xl:h-28',
                    // default - size adjusts based on the screen size
                    !playButtonSize && 'w-8 h-8 lg:w-16 lg:h-16 '
                  )}
                  src="/images/play_icon.svg"
                  tabIndex={-1}
                  width={64}
                  height={64}
                />
              </div>
            )
        }
      })()}
    </>
  )
}
