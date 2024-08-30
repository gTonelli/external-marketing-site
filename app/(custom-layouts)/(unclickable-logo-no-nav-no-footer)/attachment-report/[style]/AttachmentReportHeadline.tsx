'use client'

// components
import { Link } from '@/components/Link'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { REPORT_COPY as COPY } from './config'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { Storage, TStorageKeys } from '@/modules/Storage'
// utils
import { TStyle } from '@/utils/types'
import { useContext, useEffect, useState } from 'react'
import { PageContext } from '@/utils/contexts'
import { Loader } from '@/components/Loader'

interface IProps {
  style: TStyle
}

const userFirstName = Storage.get('userFirstName') || ''

const formatFirstName = (delimeter: string) => {
  return userFirstName ? ' ' + userFirstName + delimeter : ''
}

const HEADER_CONFIG = {
  fa: {
    variantHeader: `${formatFirstName(
      ', '
    )} You’re A Fearful Avoidant. Unlock Your Personal & Relationship Insights To Create A Healthy, Secure & Reliable Love Life!`,
    variantSubheader: `${formatFirstName(
      ', '
    )} Click play on the video! You don’t want to miss this life-changing information about your attachment style, relationships, and love life!`,
    variantVideoCopy:
      'Thanks for watching the video! At The Personal Development School, we’ll give you the tools and strategies to become securely attached. The result? You’ll embrace the chance to create deeply connected and trustworthy relationships with someone special!',
    ctaLabel: "I'M READY TO HEAL MYSELF",
    nextSectionHeader: `${formatFirstName(', ')}More Important Fearful Avoidant Information Below!`,
  },
  ap: {
    variantHeader: `${formatFirstName(
      ', '
    )}Unlock Life-Changing Insights Into Your Anxious Preoccupied Attachment Style To Turn Your Dream Relationships Into Reality! `,
    variantSubheader: `${formatFirstName(
      ' – '
    )}Join thousands of people worldwide who’ve transformed their lives and relationships with our revolutionary approach! Watch this video to learn more! `,
    variantVideoCopy:
      'Thanks for watching the video! Now is your opportunity to learn our powerful tools and strategies for becoming securely attached! You’ll be ready to experience and embrace truly loving and committed relationships without any fears.',
    ctaLabel: 'START MY TRANSFORMATION',
    nextSectionHeader: `${formatFirstName(
      ', '
    )}Keep Reading to Learn About Being Anxious Preoccupied!`,
  },
  da: {
    variantHeader: `${formatFirstName(
      ' – '
    )}You’re A Dismissive Avoidant! Discover Your Attachment Style & How To Create Unbreakable Bonds and Personal Freedom!`,
    variantSubheader: `Watch this video ${userFirstName} to uncover your dismissive avoidant attachment style and how you can change it to find an easy and meaningful relationship!`,
    variantVideoCopy:
      'I hope you enjoyed the video! Now, it’s to create that unbreakable relationship while enjoying your personal freedom with our life-changing and results-proven tools and strategies. Keep reading to discover how you can become securely attached!',
    ctaLabel: 'OVERCOME YOUR FEARS NOW',
    nextSectionHeader: `${formatFirstName(
      ' – '
    )}This Is Must-Have Dismissive Avoidant Information!`,
  },
  sa: {
    variantHeader: `Congratulations${formatFirstName(
      '!'
    )} You’re Securely Attached! Start Experiencing Unbreakable & Healthy Relationships!`,
    variantSubheader: `Do you want a balanced, healthy relationship${formatFirstName(
      '?'
    )} Watch the video and scroll down to learn how you can do it with your Secure Attachment Style!`,
    variantVideoCopy:
      'I hope you enjoyed the video! At The Personal Development School, we offer a tailored program that allows you to improve your communication and understand others and empowers you to create lasting love in a healthy and balanced relationship.',
    ctaLabel: "I'M READY FOR REAL RELATIONSHIP",
    nextSectionHeader: `${formatFirstName(' – ')}Here’s Your Securely Attached Style Below!`,
  },
}

export const AttachmentReportHeader = ({ style }: IProps) => {
  const [isVariant, setIsVariant] = useState(false)
  const [loading, setLoading] = useState(true)
  const { page_name } = useContext(PageContext)

  useEffect(() => {
    let key = `gm-1164-headline-split-${style}` as TStorageKeys
    let isVariant = Storage.get(key) === 'yes'
    if (Storage.get(key) === null) {
      isVariant = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.2
      Storage.set(key, isVariant ? 'yes' : 'no')
      Mixpanel.track.ExperimentStarted({
        'Experiment name': 'GM-1164-pdf-headline-split',
        'Variant name': isVariant ? 'Variant 1' : 'Control',
        page_name,
      })
    }
    setIsVariant(isVariant)
    setLoading(false)
  }, [style, page_name])

  if (loading) return <Loader />

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
      <h1 className="text-primary mb-8">{HEADER_CONFIG[style].variantHeader}</h1>

      <p className="max-w-3xl font-bold uppercase mx-auto mb-8">
        {HEADER_CONFIG[style].variantSubheader}
      </p>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 mb-16">
        <div>
          <VideoThumbnail
            srcUrl={COPY[style].banner.video}
            thumbnailAlt="Thais explaining your attachment style"
          />
        </div>

        <div className="text-left flex items-center">
          <p>{HEADER_CONFIG[style].variantVideoCopy}</p>
        </div>
      </div>

      <Link
        className="border-2 rounded-full tracking-10 px-4 py-2 transition-colors active:shadow-md !no-underline lg:hover:text-white lg:hover:shadow-md bg-primary border-primary text-white active:bg-opacity-50 lg:hover:bg-opacity-50 cursor-pointer"
        label={`${HEADER_CONFIG[style].ctaLabel}`}
        url={COPY[style].footer.ctaLink}
      />

      <h2 className="text-primary mt-24">{HEADER_CONFIG[style].nextSectionHeader}</h2>
    </Section>
  )
}
