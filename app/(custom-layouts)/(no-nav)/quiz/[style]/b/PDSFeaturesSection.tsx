'use client'

// core
import { useState } from 'react'
// components
import { Expandable } from '@/components/Expandable'
// libraries
import { fa1, fa2, fa3, faChevronUp } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { isMobile } from 'react-device-detect'
// utils
import { TStyle } from '@/utils/types'
// config
import { config } from './config'

interface IPDSFeaturesSectionProps {
  style: TStyle
  attachmentStyleLong: string
}

const cardColors = ['bg-pink-auxiliary', 'bg-[#FCF7F5]', 'bg-green-7']

const cardIcons = [fa1, fa2, fa3]

export const PDSFeaturesSection = ({ style, attachmentStyleLong }: IPDSFeaturesSectionProps) => {
  return (
    <div className="mb-10 lg:grid lg:grid-cols-3 lg:gap-4">
      {config.base.pdsFeatures(style, attachmentStyleLong).map((copy, idx) => (
        <PDSFeature
          key={`pds_feature_card_${idx}`}
          initallyOpen={idx === 0}
          icon={cardIcons[idx]}
          bgColor={cardColors[idx]}
          title={copy.title}
          text={copy.text}
        />
      ))}
    </div>
  )
}

interface IPDSFeatureProps {
  initallyOpen?: boolean
  icon: IconProp
  text: (string | JSX.Element)[]
  title: string
  bgColor: string
}

const PDSFeature = ({ bgColor, title, text, icon, initallyOpen = false }: IPDSFeatureProps) => {
  const [isOpen, setIsOpen] = useState(!isMobile || initallyOpen)

  return (
    <Expandable
      className={`w-full default-padding ${bgColor} rounded-xl mb-4 text-left lg:mb-0 lg:py-4`}
      openedClassName={`w-full default-padding ${bgColor} rounded-xl mb-4 text-left lg:mb-0 lg:py-4`}
      trigger={isMobile ? <PDSFeatureTigger isOpen={isOpen} icon={icon} text={title} /> : ''}
      open={isOpen}
      onOpening={() => setIsOpen(true)}
      onClosing={() => setIsOpen(false)}>
      <div className="flex">
        <FontAwesomeIcon
          className={`text-white bg-primary rounded py-1 px-2 mt-1 ${isMobile ? '!hidden' : ''}`}
          icon={icon}
          size="lg"
        />

        <div className={`ml-2 ${isMobile ? 'pt-4' : 'pt-0'}`}>
          <h3 className={isMobile ? 'hidden' : ''}>{title}</h3>

          {text.map((text, i) => (
            <p key={`feature_${title}_${i}`}>{text}</p>
          ))}
        </div>
      </div>
    </Expandable>
  )
}

interface IPDSFeatureTriggerProps {
  icon: IconProp
  text: string
  isOpen: boolean
}

const PDSFeatureTigger = ({ icon, text, isOpen }: IPDSFeatureTriggerProps) => (
  <div className="w-full grid grid-cols-[32px_1fr_20px] gap-2">
    <FontAwesomeIcon
      className="text-white bg-primary rounded py-1 px-2 mt-1"
      icon={icon}
      size="lg"
    />

    <h3 className="text-lg mb-0">{text}</h3>

    <FontAwesomeIcon
      className={`transition-transform text-primary ${isOpen ? 'rotate-180' : 'rotate-0'}`}
      icon={faChevronUp}
      size="lg"
    />
  </div>
)
