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

export const PDSFeaturesSection = ({ attachmentStyleLong }: { attachmentStyleLong: string }) => {
  return (
    <div className="mb-10 lg:grid lg:grid-cols-3 lg:gap-4">
      <PDSFeature
        initallyOpen
        bgColor="bg-pink-auxiliary"
        icon={fa1}
        title="Courses: Your Tools to Change"
        text={[
          'You’ll get immediate access to 70+ on-demand courses, all built using our proprietary, evidence-based method. These courses are designed to help you gently rewire subconscious patterns, shift your attachment style, and regulate your emotions in real time.',
          'It’s not just theory—it’s neuroscience-backed support that creates real, lasting change.',
          <em key={`pds_feature_em`}>
            Start with our {attachmentStyleLong} to Securely Attached program.
          </em>,
        ]}
      />

      <PDSFeature
        bgColor="bg-[#FCF7F5]"
        icon={fa2}
        title="Community: Your Safe, Judgment-Free Space"
        text={[
          "Inside our private, supportive community, you’ll find people who understand exactly what you're working through. It’s a place where it’s safe to be vulnerable and where real connections can start to grow.",
          <>
            Here, <strong>you won’t be alone or misunderstood</strong>. Our members have walked a
            path similar to yours. Because everyone in our community ‘gets it,’ you’ll find the
            courage to open up and explore new ways of relating without losing yourself in the
            process.
          </>,
        ]}
      />

      <PDSFeature
        bgColor="bg-green-7"
        icon={fa3}
        title="Live Webinars: Practice With Support"
        text={[
          'Join weekly live sessions with our founder, Thais Gibson, attachment expert, and PhD, for direct coaching, the opportunity to ask questions, get clarity, and integrate your learning into daily life.',
          'This is where new habits start to take root—through real-time support and gentle accountability.',
        ]}
      />
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
