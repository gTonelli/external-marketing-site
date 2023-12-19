'use client'

//core
import { useState } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Text } from '@/components/Text/Text'
import { Video } from '../Video'
// config
import { TRIAL_HEADSPACE as TH } from '@/app/(default-layout)/dream-life/config'
// libraries
import cx from 'classnames'

export default function VideoTeaser({ className }: IDefaultProps) {
  const [videoIndex, setVideoIndex] = useState(0)

  return (
    <section className={cx('w-full pt-14 lg:pt-28', className)}>
      <div className="max-w-5xl bg-pale-pink text-center mx-auto px-4 py-16 lg:rounded-20 lg:px-36 lg:py-[68px]">
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
                <Text.Paragraph
                  className="font-bold !text-[12px] lg:text-base"
                  content={category.name}
                />
              </div>
            ))}
          </div>
        </div>

        <Text.Paragraph
          className="max-w-[430px] mx-auto mt-10"
          content="Learn to communicate more effectively, connect deeply, and repair any relationship in a matter of weeks."
        />

        <Video.Thumbnail
          playAuto
          playInline
          className="mt-5 lg:mx-auto lg:mt-10"
          classNameVideo="object-fit"
          playButtonSize="none"
          srcUrl={TH.VIDEO_CATEGORIES[videoIndex].url}
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </div>
    </section>
  )
}
