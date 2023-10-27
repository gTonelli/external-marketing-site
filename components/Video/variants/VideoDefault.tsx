// 'use client'

// // core
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react'
// // components
import { IDefaultProps } from '@/components'
import { Dialog } from '@/components/Dialog/Dialog'
import { Image } from '@/components/Image'
// // libraries
import cx from 'classnames'
import { overrideTailwindClasses as two } from 'tailwind-override'
import { Regexes } from '@/utils/constants'

export interface IVideoDefaultProps extends IDefaultProps {
  /**
   * Classname for html video player
   */
  classNameVideo?: string
  /**
   * Whether to hide the video controls when it starts playing
   * @default false
   */
  hideVideoControlsOnPlay?: boolean
  /**
   * Whether to autoplay the video
   * @default false
   */
  playAuto?: boolean
  /**
   * The size of the play button
   * Different video players have different play btn sizes
   * @small `w-8 h-8`
   * @mediun `w-16 h-16`
   * @large `w-28 h-28
   */
  playButtonSize?: 'none' | 'small' | 'medium' | 'large'
  /**
   * Whether the video should play withing the container or pop-out through `<Dialog />`
   * @default undefined
   */
  playInline?: boolean
  /**
   * URL of the source of the video
   * @default undefined
   */
  srcUrl?: string
  /**
   * alt of the thumbnail asset
   * @default undefined
   */
  thumbnailAlt?: string
  /**
   * URL of the thumbnail asset
   * @default undefined
   */
  thumbnailUrl?: string
  /* Event called when play button is clicked */
  onClick?(): void
  /* Event called when the video starts to play */
  onPlay?(): void
}

export const VideoDefault = ({
  playAuto = false,
  className,
  classNameVideo,
  hideVideoControlsOnPlay = false,
  playButtonSize,
  playInline,
  srcUrl,
  style,
  thumbnailAlt,
  thumbnailUrl,
  onClick,
  onPlay,
}: IVideoDefaultProps) => {
  // ==================== Refs ====================
  const videoEl = useRef<HTMLVideoElement>(null)

  // ==================== State ====================
  const [isDialogShown, setIsDialogShown] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)

  useEffect(() => {
    playAuto && toggleVideo()
  }, [])

  useEffect(() => {
    isPlaying ? videoEl.current?.play() : videoEl.current?.pause()
  }, [isPlaying])

  const onToggleDialog = useCallback(() => {
    if (playInline) return

    setIsDialogShown(!isDialogShown)
  }, [isDialogShown, setIsDialogShown])

  const toggleVideo = useCallback(() => {
    onToggleDialog()
    setIsPlaying(!isPlaying)
  }, [isPlaying, onToggleDialog])

  return (
    <>
      {/* POP-OUT DIALOG */}
      {!playInline && (
        <Dialog
          className="overflow-hidden lg:max-w-[75%]"
          isShown={isDialogShown}
          onToggle={onToggleDialog}>
          <VideoPlayer ref={videoEl} controls src={srcUrl} onPlay={onPlay} />
        </Dialog>
      )}

      <div
        className={two(cx('relative flex-center bg-white rounded-md overflow-hidden', className))}
        style={style}
        onClick={onClick}>
        {/* THUMBNAIL */}
        {thumbnailUrl && <Image alt={thumbnailAlt} src={thumbnailUrl} />}

        {/* VIDEO */}

        {playInline &&
          srcUrl &&
          (playAuto ? (
            <VideoPlayer
              ref={videoEl}
              autoPlay
              loop
              muted
              playsInline
              classNameVideo={classNameVideo}
              controls={!hideVideoControlsOnPlay}
              src={srcUrl}
              onPlay={onPlay}
            />
          ) : (
            <VideoPlayer ref={videoEl} controls={!hideVideoControlsOnPlay} src={srcUrl} />
          ))}

        {/* PLAY BUTTON */}
        {(playButtonSize !== 'none' || srcUrl) && (!isPlaying || !playInline) && (
          <div className="cursor-pointer absolute z-10" onClick={toggleVideo}>
            <Image
              className={cx(
                'cursor-pointer w-8 h-8',
                playButtonSize === 'small' && 'w-8 h-8',
                playButtonSize === 'medium' && 'lg:w-16 lg:h-16',
                playButtonSize === 'large' && '2xl:!w-28 2xl:!h-28',
                // default - size adjusts based on the screen size
                !playButtonSize && 'w-8 h-8 lg:w-16 lg:h-16 2xl:w-28 2xl:h-28'
              )}
              src="play_icon.svg"
            />
          </div>
        )}
      </div>
    </>
  )
}

interface IVideoPlayer extends Omit<React.VideoHTMLAttributes<HTMLVideoElement>, 'src'> {
  src?: string
  classNameVideo?: string
}

export const VideoPlayer = forwardRef(
  (
    { src = '', classNameVideo = '', ...otherProps }: IVideoPlayer,
    ref: React.Ref<HTMLVideoElement>
  ) => {
    // Checks whether the src is an actual URL or a local asset
    const isSrcLink = new RegExp(Regexes.url).test(src)
    return (
      <video
        ref={ref}
        className={classNameVideo}
        {...otherProps}
        controlsList="nodownload"
        src={isSrcLink ? src : `../../../public/${src || ''}`}
        // type="video/mp4"
      />
    )
  }
)
