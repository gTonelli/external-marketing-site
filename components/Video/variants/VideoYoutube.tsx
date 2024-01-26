'use client'

// core
import React, { useCallback, useState } from 'react'
// components
import { Button } from '@/components/Button/Button'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
import { Dialog } from '@/components/Dialog/Dialog'
// libraries
import cx from 'classnames'
import YouTube, { YouTubeProps } from 'react-youtube'
// utils
import { useWindowWidth } from '@/utils/hooks'

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
}: IYouTubeProps) => {
  // ==================== State ====================
  const [isDialogShown, setIsDialogShown] = useState<boolean>(false)

  const onToggleDialog = useCallback(() => {
    setIsDialogShown(!isDialogShown)
  }, [isDialogShown, setIsDialogShown])

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
          onPlay={onPlay}
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
                <Image className="rounded-10" src={thumbnail} />
                <Image
                  className={cx(
                    'clickable absolute z-10',
                    playButtonSize === 'small' && 'w-8 h-8',
                    playButtonSize === 'medium' && 'w-10 h-10 lg:w-16 lg:h-16',
                    playButtonSize === 'large' && 'w-12 h-12 2xl:w-28 2xl:h-28',
                    // default - size adjusts based on the screen size
                    !playButtonSize && 'w-8 h-8 lg:w-16 lg:h-16 '
                  )}
                  src="play_icon.svg"
                />
              </div>
            )
        }
      })()}
    </>
  )
}
