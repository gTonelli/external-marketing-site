'use client'

// core
import React, { forwardRef, useState } from 'react'
// components
import { IDefaultProps } from '@/components'
import { Icon } from '@/components/Icon'
// libraries
import cx from 'classnames'
import { Text } from '@/components/Text/Text'
import { Expandable } from '@/components/Expandable'

export interface IFAQs {
  question: string
  answer: string
}

export interface IFAQsProps extends IDefaultProps {
  className?: string
  /**
   * Classname for title color
   */
  classNameHeading?: string
  /**
   * Classname for Plus/Minus Icon
   */
  classNameIcon?: string
  /**
   * Faq(questions and answers) to show
   */
  faq?: IFAQs[]
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
  classNameHeading,
  classNameIcon,
  faq = DEFAULT_FAQs,
}: IFAQsProps) => {
  return (
    <section
      className={cx('max-w-screen-md mx-auto p-2 mb-8 xxs:p-3 xs:p-4 lg:px-16 lg:my-8', className)}>
      <Text.Heading
        className={cx('text-black text-3xl text-left mb-4', classNameHeading)}
        content="Frequently Asked Questions"
      />

      {faq.map((data, index) => (
        <FAQ
          key={`${index}`}
          answer={data.answer}
          classNameIcon={classNameIcon}
          question={data.question}
        />
      ))}
    </section>
  )
}

export interface IFAQProps extends IDefaultProps {
  question: string
  answer: string
  classNameAnswerFAQ?: string
  classNameIcon?: string
  classNameQuestionFAQ?: string
}

const FAQ = ({ question, answer, classNameIcon }: IFAQProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Expandable
      className="border-b border-black"
      open={isOpen}
      trigger={
        <div className="flex justify-between p-4 transition-all !bg-opacity-20 ">
          <Text.Paragraph className="font-bold text-left md:text-lg" content={question} />

          <Icon
            className={cx('text-primary ml-5', classNameIcon)}
            name={isOpen ? 'minus' : 'plus'}
          />
        </div>
      }
      onClosing={() => setIsOpen(false)}
      onOpening={() => setIsOpen(true)}>
      <div className="w-full flex flex-col border-b border-black pb-4 px-4">
        <Text.Paragraph useMD className="text-left" content={answer} />
      </div>
    </Expandable>
  )
}
