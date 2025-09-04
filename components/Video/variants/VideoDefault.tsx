'use client'

// core
import { forwardRef, useCallback, useContext, useEffect, useRef, useState } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Dialog } from '@/components/Dialog/Dialog'
import { Image } from '@/components/Image'
// libraries
import cx from 'classnames'
import { overrideTailwindClasses as two } from 'tailwind-override'
import { Regexes } from '@/utils/constants'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { Storage, TStorageKeys } from '@/modules/Storage'
// utils
import { TVariantVideoData } from '@/utils/types'
import { PageContext } from '@/utils/contexts'

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
  /**
   * If provided, will let us separate events based on the video that has been played given that there are more than 1 videos
   * @default undefined
   */
  type?: string
  /** Data for running split test */
  variantVideoData?: TVariantVideoData
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
  thumbnailUrl = 'RoyalRumblePage/rr-video-thumbnail.png',
  type,
  variantVideoData,
  onClick,
  onPlay,
}: IVideoDefaultProps) => {
  // ==================== Context ====================
  const page_name = useContext(PageContext)?.page_name

  // ==================== Refs ====================
  const videoEl = useRef<HTMLVideoElement>(null)

  // ==================== State ====================
  const [isDialogShown, setIsDialogShown] = useState<boolean>(false)
  const [isPlaying, setIsPlaying] = useState<boolean>(false)
  const [isVariant, setIsVariant] = useState(false)
  const [playAutoTriggered, setPlayAutoTriggered] = useState<boolean>(false)
  const [isYoung, initialized] = useIsYoung('gm-1079-age-funnel-split')

  const onToggleDialog = useCallback(() => {
    if (playInline) return

    setIsDialogShown(!isDialogShown)
  }, [isDialogShown, playInline])

  const toggleVideo = useCallback(() => {
    onToggleDialog()
    setIsPlaying((prev) => !prev)
  }, [onToggleDialog])

  useEffect(() => {
    if (playAuto && !playAutoTriggered) {
      toggleVideo()
      setPlayAutoTriggered(true)
    }
  }, [playAuto, playAutoTriggered, toggleVideo])

  useEffect(() => {
    if (!initialized) return

    if (!playAuto) {
      isPlaying ? videoEl.current?.play() : videoEl.current?.pause()
    }

    if (!variantVideoData || isYoung) return
    let showVariant: string | null | boolean = Storage.get(
      variantVideoData.key.toLowerCase() as TStorageKeys
    )
    if (showVariant === null) {
      const splitRatio = variantVideoData.splitRatio ?? 0.2
      showVariant = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < splitRatio
      Storage.set(variantVideoData.key.toLowerCase() as TStorageKeys, showVariant)
      Mixpanel.track.ExperimentStarted({
        'Experiment name': variantVideoData.key,
        'Variant name': showVariant ? 'Variant 1' : 'Control',
        page_name: page_name,
      })
    }
    setIsVariant(showVariant === 'true' || showVariant === true)
  }, [isPlaying, initialized, isYoung, page_name, variantVideoData])

  return (
    <>
      {/* POP-OUT DIALOG */}
      {!playInline && (
        <Dialog
          className="overflow-hidden lg:max-w-[75%]"
          isShown={isDialogShown}
          onToggle={onToggleDialog}>
          <VideoPlayer
            autoPlay
            trackable
            ref={videoEl}
            controls
            src={isVariant && variantVideoData ? variantVideoData.videoId : srcUrl}
            onPlay={onPlay}
            type={type}
          />
        </Dialog>
      )}

      <div
        className={two(cx('relative flex-center bg-white rounded-md overflow-hidden', className))}
        style={style}
        onClick={onClick}>
        {/* THUMBNAIL */}
        {thumbnailUrl && !playInline && <Image alt={thumbnailAlt} src={thumbnailUrl} />}

        {/* VIDEO */}

        {playInline &&
          srcUrl &&
          (playAuto ? (
            <VideoPlayer
              ref={videoEl}
              autoPlay
              muted
              loop
              playsInline
              classNameVideo={classNameVideo}
              controls={!hideVideoControlsOnPlay}
              src={isVariant && variantVideoData ? variantVideoData.videoId : srcUrl}
              onPlay={onPlay}
              trackable={false}
              type={type}
            />
          ) : (
            <VideoPlayer
              trackable
              ref={videoEl}
              controls={!hideVideoControlsOnPlay}
              src={srcUrl}
              type={type}
            />
          ))}

        {/* PLAY BUTTON */}
        {(playButtonSize !== 'none' || srcUrl) && (!isPlaying || !playInline) && (
          <div className="cursor-pointer absolute z-10" onClick={toggleVideo}>
            <Image
              alt="Video Play Button"
              className={cx(
                'cursor-pointer w-8 h-8',
                playButtonSize === 'small' && 'w-8 h-8',
                playButtonSize === 'medium' && '!w-16 !h-16',
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
  trackable: boolean
  type?: string
}

export const VideoPlayer = forwardRef<HTMLVideoElement, IVideoPlayer>(
  ({ src = '', classNameVideo = '', trackable = true, type = 'default', ...otherProps }, ref) => {
    // ==================== Context ====================
    const page_name = useContext(PageContext)?.page_name
    const videoRef = useRef<HTMLVideoElement>(null)
    // ==================== State ====================
    const [currentThreshold, setCurrentThreshold] = useState<number>(0)

    useEffect(() => {
      const video = videoRef.current
      const onTimeUpdate = () => {
        if (video && trackable) {
          const currentTime = video.currentTime
          const duration = video.duration

          if (duration > 0) {
            const precentageWatched = (currentTime / duration) * 100

            const thresholds = [25, 50, 75, 100]
            const nextThreshold = thresholds.find((threshold) => {
              return precentageWatched >= threshold && threshold > currentThreshold
            })

            if (nextThreshold && nextThreshold !== currentThreshold) {
              Mixpanel.track.VideoProgress({
                progress: nextThreshold,
                page_name: page_name,
                video_type: `${type} - ${page_name}`,
              })

              setCurrentThreshold(nextThreshold)
            }
          }
        }
      }

      if (video && trackable) {
        video.addEventListener('timeupdate', onTimeUpdate)

        return () => {
          video.removeEventListener('timeupdate', onTimeUpdate)
        }
      }
    }, [currentThreshold, page_name, trackable, type])

    // Checks whether the src is an actual URL or a local asset
    const isSrcLink = new RegExp(Regexes.url).test(src)
    return (
      <video
        ref={videoRef || ref}
        className={classNameVideo}
        {...otherProps}
        controlsList="nodownload"
        src={isSrcLink ? src : `../../../public/${src || ''}`}
        // type="video/mp4"
      />
    )
  }
)

// ensure that isYoung is properly populated before the rest of the logic executes
const useIsYoung = (key: TStorageKeys) => {
  const [isYoung, setIsYoung] = useState(false)
  const [initialized, setInitialized] = useState(false)

  useEffect(() => {
    const value = Storage.get(key) !== null
    setIsYoung(value)
    setInitialized(true)
  }, [key])

  return [isYoung, initialized]
}
