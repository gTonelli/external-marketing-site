'use client'

// core
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'
// components
import { IDefaultProps } from '@/components'
import { Button } from '@/components/Button/Button'
import { Card } from '@/components/Card/Card'
// libraries
import cx from 'classnames'

//modules
import { Pages } from '@/modules/Mixpanel'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
import { Page } from '@/components/Page'
import { ERoutes } from '@/utils/constants'

interface IAttachmentStyleImageProps extends IDefaultProps {
  type: '1' | '2' | '3'
}

const AttachmentStyleImage = ({ className, type }: IAttachmentStyleImageProps) => {
  const getText = (): string => {
    switch (type) {
      case '1':
        return 'Your Attachment Style is formed during early childhood as a result of the interactions and experiences that you encounter.'
      case '2':
        return 'Your Attachment Style determines how you perceive your world, and how you communicate with others.'
      case '3':
        return 'Each Attachment Style has unique strengths and areas for improvement. Based on your Style, you will learn more about yourself and those around you!'
      default:
        return ''
    }
  }
  return (
    <div className={cx('attachment-style-image', className)}>
      <div className="mb-6">
        {type === '1' && <Image src="CorporatePage/corporate_people.svg" />}
        {type === '2' && <Image src="CorporatePage/corporate_chat.svg" />}
        {type === '3' && <Image src="CorporatePage/corporate_award.svg" />}
      </div>

      <Text.Paragraph className="text-center leading-6" content={getText()} />
    </div>
  )
}

export default function LandingPage() {
  const page_name = 'Corporate Quiz Landing Page' as Pages
  //============= Hooks =============
  const router = useRouter()

  useEffect(() => {
    document.title = 'The Attachment Style Quiz'
  })

  return (
    <Page page_name={page_name}>
      {/* INTRO */}
      <section className="section-intro">
        <Image
          className="w-full section-intro-bg bg-desktop"
          src="CorporatePage/corporate_bg_landing_top.png"
        />

        <Image
          className="w-full section-intro-bg bg-mobile"
          src="CorporatePage/corporate_bg_landing_top_mobile.png"
        />

        <div className="relative z-10 text-center">
          <Text.Heading className="mb-5 lg:mb-10" content="The Attachment Style Quiz" size={1} />

          <Text
            useMD
            className="text-center mb-9 
          lg:w-2/5 lg:mx-auto lg:mb-6"
            content={`How do you communicate, perceive and work with others? Your
          **Attachment Style** determines what behavioural traits you express in your
          workplace.`}
          />

          <Button
            className="mb-9 lg:mb-20 lg:mt-9"
            label="START QUIZ"
            onClick={() => router.push(ERoutes.CORPORATE_QUIZ_QUESTIONS)}
          />

          <div className="attachment-style-image-row">
            <AttachmentStyleImage type="1" />
            <AttachmentStyleImage type="2" />
            <AttachmentStyleImage type="3" />
          </div>
        </div>
      </section>

      {/* STEPS */}
      <section className="section-steps">
        <Text.Heading className="mb-8 lg:mb-12" content="Find Your Attachment Style Today!" />

        <div className="card-sm-row">
          {/* TAKE < 5 MIN */}
          <Card.Corporate size="sm" type="time" />

          <div>
            <Image
              className="hidden lg:block"
              src="CorporatePage/corporate_landing_arrow_clockwise.svg"
            />
          </div>

          {/* GET REPORT */}
          <Card.Corporate size="sm" type="report" />

          <div>
            <Image
              className="hidden lg:block"
              src="CorporatePage/corporate_landing_arrow_counter_clockwise.svg"
            />
          </div>

          {/* UNDERSTAND YOURSELF */}
          <Card.Corporate size="sm" type="relationship" />
        </div>

        <Text.Paragraph
          className="text-center mb-7 lg:w-1/2"
          content="Take this quiz to determine your attachment style. Knowing your attachment style is the first step to understanding how to improve your productivity, your relationship to others, and your relationship to  yourself."
        />

        <Button
          className="lg:mt-9"
          label="START QUIZ"
          onClick={() => router.push(ERoutes.CORPORATE_QUIZ_QUESTIONS)}
        />
      </section>

      {/* ATTACHMENT THEORY */}
      <section className="section-theory">
        <div className="relative z-10 text-center">
          <Text.Heading className="mb-4 leading-9" content="What is Attachment Theory?" />

          <Text.Paragraph
            className="text-center font-bold mb-4 !tracking-0.325 leading-5 lg:font-normal lg:tracking-max lg:mb-16 lg:w-1/2 lg:mx-auto"
            content="THERE ARE FOUR TYPES OF ATTACHMENT STYLES, ALL WITH DIFFERENT CHARACTERISTICS:"
          />

          <div className="card-md-col">
            <div className="card-md-row">
              <Card.Corporate className="card-md-mb" size="md" type="FA" />
              <Card.Corporate className="card-md-mt" size="md" type="AP" />
            </div>

            <div className="card-md-row">
              <Card.Corporate className="card-md-mb" size="md" type="DA" />
              <Card.Corporate className="card-md-mt" size="md" type="SA" />
            </div>
          </div>
        </div>

        {/* BOTTOM BACKGROUNDS */}
        <Image
          className="w-full bg-desktop bg-bottom"
          src="CorporatePage/corporate_bg_landing_bottom.png"
        />
        <Image
          className="w-full bg-mobile bg-bottom"
          src="CorporatePage/corporate_bg_landing_bottom_mobile.png"
        />
      </section>
    </Page>
  )
}
