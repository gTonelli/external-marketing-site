'use client'

// core
import { useState } from 'react'
// components
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'
import { Text } from '@/components/Text/Text'
import { Expandable } from '@/components/Expandable'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@awesome.me/kit-545b942488/icons/classic/solid'

export interface IFAQs {
  question: string
  answer: string | string[]
}

export interface IFAQsProps extends IDefaultProps {
  /** Classnames for the answer text */
  classNameAnswer?: string
  /**
   * Classname for the expandable component
   */
  classNameExpandable?: string
  /**
   * Classname for title color
   */
  classNameHeading?: string
  /**
   * Classname for the question
   */
  classNameQuestion?: string
  /**
   * Classname for Plus/Minus Icon
   */
  classNameIcon?: string
  /** Heading text */
  heading?: string
  /**
   * Display the heading?
   * @default true
   */
  includeHeading?: boolean
  /**
   * Faq(questions and answers) to show
   */
  faq?: IFAQs[]
  /**
   * Reverse the icon and text?
   */
  reverseIcons?: boolean
  /** Subheading text */
  subheading?: string
  /**
   * Use Markdown?
   * @default true
   */
  useMD?: boolean
}

const DEFAULT_FAQs = [
  {
    question: 'Can I cancel anytime?',
    answer: `Absolutely. If you feel that the Personal Development School is not for you, you can cancel your membership at any time – no questions asked.  
      We have a very high success rate of students becoming more securely attached and fulfilled in all areas after becoming members of the school, and I’m confident that if you become a member – you will too. But if for whatever reason it no longer feels like the right fit or time for you, you can cancel.
        `,
  },
  {
    question: 'I’m on the fence about becoming a member. Do you offer a money-back guarantee?',
    answer: `Yes, to help you make the best decision for you, we offer a no-questions asked 7-day money back guarantee after your trial – meaning there is absolutely no risk if you become a paying member after your trial, and then later decide that the school is not for you.`,
  },
  {
    question: 'I’m considering other courses or therapy – why should I trust you?',
    answer: `It’s important you feel confident in your decision to work with The Personal Development School and myself.  
      We have added some testimonials on this page, but we urge you to do your own research by checking out the Personal Development School’s YouTube Channel to see thousands of user-generated reviews on the hundreds of videos we create to see if our style resonates with you.
        `,
  },
]

export const FaqDefault = ({
  className,
  classNameAnswer,
  classNameExpandable,
  classNameHeading,
  classNameIcon,
  classNameQuestion,
  heading = 'Frequently Asked Questions',
  includeHeading = true,
  faq = DEFAULT_FAQs,
  useMD = true,
  reverseIcons,
  subheading,
}: IFAQsProps) => {
  return (
    <section
      className={cx('max-w-screen-md mx-auto p-2 mb-8 xxs:p-3 xs:p-4 lg:px-16 lg:my-8', className)}>
      {includeHeading && (
        <Text.Heading
          className={cx('text-black text-3xl text-left mb-4', classNameHeading)}
          content={heading}
        />
      )}

      {subheading && <Text className="my-4" content={subheading} />}

      {faq.map((data, index) => (
        <FAQ
          key={`${index}`}
          answer={data.answer}
          classNameExpandable={classNameExpandable}
          classNameIcon={classNameIcon}
          classNameQuestion={classNameQuestion}
          classNameAnswer={classNameAnswer}
          question={data.question}
          reverseIcon={reverseIcons}
          useMD={useMD}
        />
      ))}
    </section>
  )
}

export interface IFAQProps extends IDefaultProps {
  question: string
  answer: string | string[]
  classNameAnswer?: string
  classNameExpandable?: string
  classNameIcon?: string
  classNameQuestion?: string
  reverseIcon?: boolean
  useMD?: boolean
}

const FAQ = ({
  answer,
  classNameExpandable,
  classNameIcon,
  classNameQuestion,
  classNameAnswer,
  question,
  reverseIcon,
  useMD,
}: IFAQProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Expandable
      className={cx('border-b border-black md:hover:bg-grey/10', classNameExpandable)}
      openedClassName={cx('border-b border-black md:hover:bg-grey/10', classNameExpandable)}
      open={isOpen}
      trigger={
        <div
          className={`flex ${
            reverseIcon ? 'justify-start items-center' : 'justify-between'
          } p-4 transition-all !bg-opacity-20`}>
          <Text.Paragraph
            className={cx(
              `font-bold text-left md:text-lg ${reverseIcon ? 'order-2' : ''}`,
              classNameQuestion
            )}
            content={question}
          />

          <FontAwesomeIcon
            className={cx('text-primary ml-5', reverseIcon ? 'order-1 mr-4' : '', classNameIcon)}
            icon={isOpen ? faMinus : faPlus}
          />
        </div>
      }
      onClosing={() => setIsOpen(false)}
      onOpening={() => setIsOpen(true)}>
      <div className="w-full flex flex-col pb-4 px-4">
        {typeof answer === 'string' ? (
          <Text.Paragraph
            useMD={useMD}
            className={cx('text-left', classNameAnswer)}
            content={answer}
          />
        ) : (
          answer.map((data) => (
            <Text.Paragraph
              key={data}
              className={cx('text-left mb-4', classNameAnswer)}
              content={data}
            />
          ))
        )}
      </div>
    </Expandable>
  )
}
