'use client'

// core
import { useState } from 'react'
// components
import { Expandable } from '@/components/Expandable'
import { Section } from '@/components/Section'
import { List } from '@/components/List'
// config
import { config } from './config'
// libraries
import cx from 'classnames'
import { isMobile } from 'react-device-detect'
import { faChevronDown } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const FearfulAvoidantInAdulthood = () => {
  return (
    <Section className="bg-green-6" classNameInner="lg:max-w-screen-xl">
      <div className="max-w-3xl mx-auto">
        <h2>The Fearful Avoidant in Adulthood</h2>

        <p>
          Your Fearful Avoidant patterns show up in every part of your life. These patterns often
          take the form of defensive boundaries and unrealistic expectations designed to protect
          you.
        </p>

        <p>While they helped you feel safe as a child, they now keep you feeling stuck.</p>
      </div>

      <div className="lg:grid lg:grid-cols-2 lg:gap-x-4 lg:items-start">
        {config.faInAdulthoodArray.map((props, i) => (
          <ExpandableCard
            key={`expandable_card_${i}`}
            initiallyOpen={isMobile ? i < 1 : true}
            {...props}
          />
        ))}
      </div>
    </Section>
  )
}

interface IExpandableCardProps {
  initiallyOpen?: boolean
  icon: IconProp
  text: string
  bullets: string[]
}

const ExpandableCard = ({ initiallyOpen = false, icon, text, bullets }: IExpandableCardProps) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen)

  return (
    <Expandable
      className="bg-white rounded-20 default-padding text-left mb-4 lg:p-x-6 lg:py-4"
      openedClassName="bg-white rounded-20 default-padding text-left mb-4 lg:p-x-6 lg:py-4"
      onOpening={() => setIsOpen(true)}
      onClosing={() => setIsOpen(false)}
      open={isOpen}
      trigger={<Trigger flipped={isOpen} icon={icon} text={text} />}>
      <List
        className="pl-4 !list-disc list"
        classNameListItems="!list-disc !list-item"
        listItems={bullets}
      />
    </Expandable>
  )
}
interface ITriggerProps extends Omit<IExpandableCardProps, 'bullets'> {
  flipped: boolean
}
const Trigger = ({ icon, text, flipped = false }: ITriggerProps) => (
  <div className="grid grid-cols-[20px_1fr_20px] gap-4 items-center">
    <FontAwesomeIcon className="text-primary" icon={icon} />

    <h4 className="mb-0">{text}</h4>

    <FontAwesomeIcon
      className={cx(flipped ? 'rotate-180' : undefined, 'transition-transform')}
      icon={faChevronDown}
    />
  </div>
)
