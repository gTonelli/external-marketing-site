'use client'

// core
import React, { useCallback, useContext, useEffect, useState } from 'react'
// components
import { Button } from '@/components/Button/Button'
import { Text } from '@/components/Text/Text'
import Image from 'next/image'
import { Dialog } from '@/components/Dialog/Dialog'
// libraries
import cx from 'classnames'
import YouTube, { YouTubeProps } from 'react-youtube'
// modules
import { Storage, TStorageKeys } from '@/modules/Storage'
import Mixpanel from '@/modules/Mixpanel'
// utils
import { useWindowWidth } from '@/utils/hooks'
import { PageContext } from '@/utils/contexts'
import { TVariantVideoData } from '@/utils/types'

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
  /** Classname of thumbnail */
  classNameThumbnail?: string
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
  /* Event called when the video starts to play */
  onPlay?(): void
  /* Event called when the video is ready */
  onPlayerReady?(): void
  /** ID for recording whether the video has been played */
  type?: string
  /* Youtube video id */
  videoId: string
  /** Data for running split tested videos */
  variantVideoData?: TVariantVideoData
  /** flag if video needs to be played inline */
  playInline?: boolean
  /** flag if video needs to be autoplay inline */
  autoPlayInline?: boolean
}

export const VideoYoutube = ({
  thumbnailAlt,
  thumbnailWidth,
  thumbnailHeight,
  thumbnailQuality = 80,
  buttonLabel,
  buttonType,
  className,
  classNameYoutube,
  classNameIframe,
  classNameThumbnail,
  onPlay,
  videoId,
  variantVideoData,
  playButtonSize,
  autoPlayInline = false,
  playInline = false,
  maxHeight = 300,
  thumbnail = '/images/RoyalRumblePage/rr-video-thumbnail.png',
  type,
}: IYouTubeProps) => {
  // ==================== State ====================
  const [isDialogShown, setIsDialogShown] = useState(false)
  const [playVideoInline, setPlayVideoInline] = useState(false)
  const [watchedVideos, setWatchedVideos] = useState(new Set<string>())
  const [isVariant, setIsVariant] = useState(false)
  // ==================== Context ====================
  const page_name = useContext(PageContext)?.page_name

  useEffect(() => {
    if (!variantVideoData) return
    let showVariant: string | null | boolean = Storage.get(
      variantVideoData.key.toLowerCase() as TStorageKeys
    )
    if (showVariant === null) {
      showVariant = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.2
      Storage.set(variantVideoData.key.toLowerCase() as TStorageKeys, showVariant)
      Mixpanel.track.ExperimentStarted({
        'Experiment name': variantVideoData.key,
        'Variant name': showVariant ? 'Variant 1' : 'Control',
        page_name: page_name,
      })
    }
    setIsVariant(showVariant === 'true' || showVariant === true)
  }, [page_name, variantVideoData])

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
          videoId={isVariant && variantVideoData ? variantVideoData.videoId : videoId}
          onPlay={_onPlay}
          onReady={onPlayerReady}
        />
      </Dialog>

      {autoPlayInline || playVideoInline
        ? (() => {
            return (
              <YouTube
                className={cx('w-full', className)}
                iframeClassName={cx('w-full h-auto aspect-video', classNameIframe)}
                videoId={isVariant && variantVideoData ? variantVideoData.videoId : videoId}
                onPlay={_onPlay}
                onReady={onPlayerReady}
              />
            )
          })()
        : (() => {
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
                    onClick={() =>
                      playInline ? setPlayVideoInline(true) : setIsDialogShown(true)
                    }>
                    <Image
                      alt={thumbnailAlt || 'Youtube Video Thumbnail'}
                      className={cx('rounded-10', classNameThumbnail)}
                      src={thumbnail}
                      tabIndex={-1}
                      width={thumbnailWidth || 768}
                      height={thumbnailHeight || 453}
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
                    />
                  </div>
                )
            }
          })()}
    </>
  )
}
