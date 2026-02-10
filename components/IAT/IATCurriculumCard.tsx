'use client'

// core
import { useState } from 'react'
// components
import { Expandable } from '../Expandable'
import { List } from '../List'
// libraries
import cx from 'classnames'
import { faChevronDown, faChevronsRight } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

interface IIATCurriculumCardProps {
  heading: string
  textTop?: string
  listItems: string[]
  textBottom?: string
  initialOpenState?: boolean
  className?: string
  classNameHeading?: string
  classNameTrigger?: string
}

export const IATCurriculumCard = ({
  heading,
  textTop = "In this week's module, you'll learn:",
  listItems,
  textBottom = "Plus, you'll get the recorded Q&A session.",
  initialOpenState = false,
  className,
  classNameHeading,
  classNameTrigger,
}: IIATCurriculumCardProps) => {
  // ============State ===============
  const [isOpen, setIsOpen] = useState(initialOpenState)

  return (
    <div
      className={cx(
        'text-left rounded-20 border-2 border-blue bg-white p-4 cursor-pointer pb-2 my-4 lg:my-8 lg:hover:bg-gray-50 lg:p-8 lg:pb-4',
        className
      )}
      onClick={() => setIsOpen(!isOpen)}
      role="button">
      <div
        className={cx(
          'w-full flex justify-between items-center pb-2 lg:pb-4',
          classNameTrigger,
          isOpen && '!pb-4'
        )}>
        <p className={cx('font-semibold uppercase mb-0', classNameHeading)}>{heading}</p>

        <FontAwesomeIcon
          className={`text-primary transition-all font-semibold text-xl ml-4 ${
            isOpen ? 'rotate-180' : ''
          }`}
          icon={faChevronDown}
        />
      </div>

      <Expandable open={isOpen} trigger="">
        <p className="border-t-2 border-blue pt-2 mb-2 lg:pt-4 lg:mb-4">{textTop}</p>

        <List
          className="my-2 lg:my-3"
          classNameIcon="!text-blue !pt-1"
          classNameListItems="my-2"
          icon={faChevronsRight}
          listItems={listItems}
        />
        <p className="my-2 lg:my-4">{textBottom}</p>
      </Expandable>
    </div>
  )
}
