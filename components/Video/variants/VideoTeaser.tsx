'use client'

//core
import { useState } from 'react'
// components
import { IDefaultProps } from '@/components'
import { VideoThumbnail } from './VideoThumbnail'
// config
import { TRIAL_HEADSPACE as TH } from '@/app/(custom-layouts)/(no-nav)/dream-life/config'
// libraries
import cx from 'classnames'

interface IVideoTeaserProps extends IDefaultProps {
  description?: string
}

export default function VideoTeaser({ className, description }: IVideoTeaserProps) {
  const [videoIndex, setVideoIndex] = useState(0)

  return (
    <section className="w-full pt-14 lg:pt-28">
      <div
        className={cx(
          'max-w-5xl bg-pale-pink text-center mx-auto px-4 py-16 lg:rounded-20 lg:px-36 lg:py-[68px]',
          className
        )}>
        <div className="-mt-[88px] lg:-mt-24">
          <div className="flex row justify-center space-x-1 lg:space-x-9">
            {TH.VIDEO_CATEGORIES.map((category, index) => (
              <div
                key={`category_${index}]`}
                className={`${
                  videoIndex === index
                    ? 'bg-black hover:bg-slate-800 border-black'
                    : 'bg-primary hover:bg-primary-light border-primary'
                } border-2 transition-all text-white rounded-10 cursor-pointer px-2 py-2 lg:w-[204px] lg:py-4`}
                onClick={() => setVideoIndex(index)}>
                <p className="font-bold !text-[14px] lg:text-base mb-0">{category.name}</p>
              </div>
            ))}
          </div>
        </div>

        <p className="max-w-xl mx-auto mt-10">
          {description ||
            'Learn to communicate more effectively, connect deeply, and repair any relationship in a matter of weeks.'}
        </p>

        <div>
          <VideoThumbnail
            playAuto
            playInline
            className="mt-5 lg:mx-auto lg:mt-10"
            classNameVideo="object-fit"
            playButtonSize="none"
            srcUrl={TH.VIDEO_CATEGORIES[videoIndex].url}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </div>
    </section>
  )
}
