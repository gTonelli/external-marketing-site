'use client'

// core
import React, { useContext, useEffect, useRef, useState } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Image } from '../Image'
import { Text } from '../Text/Text'
// libraries
import cx from 'classnames'
// utils
import { ViewportContext } from '@/utils/contexts'

// styles
import './AttachmentStylesTabs.css'

export const ATTACHMENT_STYLES = [
  {
    title: `Anxious \nPreoccupied`,
    content: `Relationships can often make you feel anxious, unsafe or insecure because you likely have a subconscious fear of abandonment. 
          
          As a result, you seek more closeness in your relationships, and can feel afraid if you sense a loved one is pulling away. `,
    assetUrl: 'attachment-style-ap.svg',
  },
  {
    title: `Fearful \nAvoidant`,
    content: `Relationships can feel chaotic, confusing and overwhelming because you swing between being avoidant and anxious.
          
          Depending on the relationship, you can shift between being "hot and cold," often feeling confused about your feelings.`,
    assetUrl: 'attachment-style-fa.svg',
  },
  {
    title: `Dismissive \nAvoidant`,
    content: `Intense emotions can feel overwhelming and can cause you to pull away from others. You may find yourself withdrawing from arguments or triggering situations.
          
          This need for independence can cause challenges in your relationships and inner conflict for you, because deep down, you want to connect with others.`,
    assetUrl: 'attachment-style-da.svg',
  },
  {
    title: `Secure \nAttached`,
    content: `You often feel comfortable and at ease in relationships. You’re also good at communicating your needs and feelings, and feel open to vulnerability in your relationships.
          
          However, sometimes you can experience difficulty when relating to those who aren’t as secure in relationships.`,
    assetUrl: 'attachment-style-sa.svg',
  },
]

interface IAttachmentTabsSectionProps extends IDefaultProps {
  /** Where the component is being used
   * @homepage - btns w/ blue-light bg
   * @quizpage - btns w/ primary bg
   */
  type?: 'homepage' | 'quizpage'
}

export const AttachmentStylesTabs = ({
  className,
  type = 'homepage',
}: IAttachmentTabsSectionProps) => {
  //   const [activeStyle, setActiveStyle] = useState<0 | 1 | 2 | 3 | null>(null)
  const [activeStyle, setActiveStyle] = useState<number>(0)
  const interval = useRef(null)
  const refCard = useRef<HTMLDivElement>(null)
  const { windowWidth } = useContext(ViewportContext)

  // Loop through the attachement style tabs every 7 seconds
  useEffect(() => {
    // @ts-ignore
    interval.current = setInterval(() => {
      setActiveStyle((current) => {
        return current === 3 ? 0 : current + 1
      })
    }, 7000)

    // clear on component unmount
    return () => {
      // @ts-ignore
      clearInterval(interval.current)
    }
  }, [])

  const onClickAttachmentStyleTab = (index: number) => () => {
    setActiveStyle(index as any)
    // @ts-ignore
    clearInterval(interval.current)
  }

  return (
    <section ref={refCard} className={cx('w-full flex-center flex-col mb-10 lg:mb-32', className)}>
      {/* TABS */}
      <div className="attachment-tabs-section w-auto grid grid-cols-2 lg:grid-cols-4">
        {ATTACHMENT_STYLES.map((style, index) => (
          <div
            key={`attachment_style_btn_${index}`}
            className="flex-center flex-col-2"
            style={{ maxWidth: '320px' }}>
            <button
              key={`attachment_style_btn_${index}`}
              className={cx(
                'clickable break-words flex-col-2 rounded-20 px-2 py-3 shadow-lg text-xs xs:px-4 lg:text-base lg:px-6',
                activeStyle === index ? 'bg-white' : 'bg-primary-old text-white'
              )}
              style={{ overflowWrap: 'break-word' }}
              onClick={onClickAttachmentStyleTab(index)}>
              <Text.Paragraph
                useMD
                className="uppercase tracking-wider xs:!tracking-0.325"
                content={style.title}
              />
            </button>
          </div>
        ))}
      </div>

      {/* CARD */}
      <div
        className="w-full flex-center px-page-xxs mb-10 
            md:px-page-xs
            lg:px-0 lg:mb-0">
        <div className="w-full flex-col-reverse lg:flex-row flex-center md:max-w-3/4 xl:max-w-1/2 flex md:space-x-5 lg:space-x-10 bg-white rounded-20 shadow-lg text-left px-5 lg:px-15 py-8 lg:py-10">
          <Image
            className="w-full mt-10 
                md:w-1/2 
                lg:w-56 lg:mt-0"
            src={ATTACHMENT_STYLES[activeStyle as any].assetUrl}
          />

          <div className="flex flex-1 flex-col">
            <Text.Heading
              className="mb-3"
              content={ATTACHMENT_STYLES[activeStyle as any].title}
              size={3}
            />

            <Text.Paragraph content={ATTACHMENT_STYLES[activeStyle as any].content} />
          </div>
        </div>
      </div>
    </section>
  )
}
