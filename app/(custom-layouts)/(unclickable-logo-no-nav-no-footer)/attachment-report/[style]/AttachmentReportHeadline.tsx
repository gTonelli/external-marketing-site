'use client'

// core
import Link from 'next/link'
// components
import { Section } from '@/components/Section'
import { Button } from '@/components/Button/Button'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
// config
import { REPORT_COPY as COPY } from './config'
// modules
import { Storage } from '@/modules/Storage'
// utils
import { TStyle } from '@/utils/types'
import { getSplitTest } from '@/utils/functions'

interface IProps {
  style: TStyle
  isVariant: boolean
}

const storageVar = Storage.get('userFirstName') || ''
const userFirstName =
  storageVar === undefined || storageVar === null || storageVar === 'undefined' ? '' : storageVar

const formatFirstName = (delimeter: string) => {
  return userFirstName ? ' ' + userFirstName + delimeter : ''
}

const HEADER_CONFIG = {
  fa: {
    variantHeader: `You’re A Fearful Avoidant${formatFirstName(
      ''
    )}. Watch This Short Video to Discover How It Impacts Your Relationships!`,
    variantVideoCopy:
      'Thanks for watching the video! At The Personal Development School, we’ll give you the tools and strategies to become securely attached. The result? You’ll embrace the chance to create deeply connected and trustworthy relationships with someone special!',
    ctaLabel: "I'M READY TO HEAL MYSELF",
    nextSectionHeader: `${formatFirstName(
      ', '
    )}Keep Reading To Uncover Life-Changing, Relationship-Impacting Details About Your Fearful Avoidant Attachment Style!`,
  },
  ap: {
    variantHeader: `${formatFirstName(
      ', '
    )}Watch This Video To Get Insights Into Your Anxious Preoccupied Attachment Style!`,
    variantVideoCopy:
      'Thanks for watching the video! Now is your opportunity to learn our powerful tools and strategies for becoming securely attached! You’ll be ready to experience and embrace truly loving and committed relationships without any fears.',
    ctaLabel: 'START MY TRANSFORMATION',
    nextSectionHeader: `${formatFirstName(
      ', '
    )}Keep Reading To Uncover Life-Changing, Relationship-Impacting Details About Your Anxious Preoccupied Attachment Style!`,
  },
  da: {
    variantHeader: `${formatFirstName(
      ' – '
    )}You’re A Dismissive Avoidant! Click Play On This Short Video To Learn More About Yourself & Your Relationships!`,
    variantVideoCopy:
      'I hope you enjoyed the video! Now, it’s to create that unbreakable relationship while enjoying your personal freedom with our life-changing and results-proven tools and strategies. Keep reading to discover how you can become securely attached!',
    ctaLabel: 'OVERCOME YOUR FEARS NOW',
    nextSectionHeader: `${formatFirstName(
      ' – '
    )}Keep Reading To Uncover Life-Changing, Relationship-Impacting Details About Your Dismissive Avoidant Attachment Style!`,
  },
  sa: {
    variantHeader: `${formatFirstName(
      ' - '
    )}You’re Securely Attached! Watch The Video To Learn How To Improve Your Relationships!`,
    variantVideoCopy:
      'I hope you enjoyed the video! At The Personal Development School, we offer a tailored program that allows you to improve your communication and understand others and empowers you to create lasting love in a healthy and balanced relationship.',
    ctaLabel: "I'M READY FOR REAL RELATIONSHIP",
    nextSectionHeader: `${formatFirstName(
      ' – '
    )}Don't Miss Out On Life-Changing Information About Being Securely Attached!`,
  },
}

export const AttachmentReportHeader = ({ style, isVariant }: IProps) => {
  if (!isVariant) {
    return (
      <Section
        className="max-w-5xl mx-auto !pb-0"
        classNameInner="grid grid-cols-1 gap-4 pt-4 pb-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center lg:text-left">
          <p className="font-bold text-lg tracking-33 mb-2">YOUR ATTACHMENT STYLE IS</p>

          <h1 className="text-primary text-6xl">{COPY[style].banner.style}!</h1>
        </div>

        <div>
          <VideoThumbnail
            srcUrl={COPY[style].banner.video}
            thumbnailAlt="Thais explaining your attachment style"
          />
        </div>
      </Section>
    )
  }

  return (
    <Section className="max-w-5xl mx-auto !pb-0">
      <h1 className="text-primary mb-4">{HEADER_CONFIG[style].variantHeader}</h1>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-8">
        <div>
          <VideoThumbnail
            srcUrl={
              style === 'fa'
                ? 'https://storage.googleapis.com/pds_videos/FA_pdf_50_2.mp4'
                : COPY[style].banner.video
            }
            thumbnailAlt="Thais explaining your attachment style"
          />
        </div>

        <div className="text-left flex items-center">
          <p>{HEADER_CONFIG[style].variantVideoCopy}</p>
        </div>
      </div>

      <Link href={COPY[style].footer.ctaLink}>
        <Button label={`${HEADER_CONFIG[style].ctaLabel}`} />
      </Link>

      <h2 className="text-primary mt-16">{HEADER_CONFIG[style].nextSectionHeader}</h2>
    </Section>
  )
}
