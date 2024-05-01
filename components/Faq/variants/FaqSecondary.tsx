'use client'

// core
import React, { forwardRef, useContext, useState } from 'react'
// components
import { IFAQProps, IFAQsProps } from './FaqDefault'
import { Expandable } from '@/components/Expandable'
import { Icon } from '@/components/Icon'
import { Text } from '@/components/Text/Text'
// libraries
import cx from 'classnames'
// utils
import { EWindowWidth } from '@/utils/constants'
import { ViewportContext } from '@/utils/contexts'

interface IFaqSecondaryProps extends IFAQsProps {
  /**
   * Classname for FAQ answer
   */
  classNameSecondary?: string
  /**
   * Classname for FAQ Exandable
   */
  classNameFAQ?: string
  /**
   * Classname for FAQ answer
   */
  classNameAnswer?: string
  /**
   * Classname for subheading
   */
  classNameHeadingPrimary?: string
  /**
   * Classname for FAQ question
   */
  classNameQuestionFAQ?: string
  /**
   * if FAQ has header
   */
  hasHeader?: boolean
  /**
   * Heading text
   */
  headerText?: string
  /**
   * Subheading text desktop
   */
  subheaderTextDesktop?: string
  /**
   * Subheading text mobile
   */
  subheaderTextMobile?: string
}

export const DEFAULT_FAQs = [
  {
    question: 'Is 7 days really enough time to have a breakthrough?',
    answer: `We polled and researched over 20,000 people who have previously taken the free trial, and within just 7 days, those in relationships experienced a breakthrough that improved their relationship by 50%. Whereas single people had 3 times the amount of success in their dating lives.
      \nAnd with the powerful tools and techniques you’ll get access to, you can expect even more profound breakthroughs – such as you healing your attachment style – in the months that follow once you learn how to reprogram these patterns.`,
  },
  {
    question: 'How does this offer work and when will I be charged?',
    answer: `This special offer includes a 7 day free trial of the All-Access Pass membership AND 50% off your first month of membership.
      \nThis means the first 7 days are 100% free and you’ll only be charged after your free trial.
      \nEssentially, you get 5 weeks of membership for the very low price of just $48.50 (50% off).`,
  },
  {
    question: 'Can you remind me what I get access to?',
    answer: `Absolutely! In short, you get access to everything. This includes our entire video course library, live weekly webinars hosted by Thais Gibson, our webinar library, daily live groups led by our trained coaches, plus access to our private forum, Facebook group and chat group so you can connect with other members.`,
  },
  {
    question:
      'I’ve got a busy life, I’m worried I won’t have time to go through everything. Should I join when I have more time?',
    answer: `We have a growing library of courses and live events to support our members with nearly every relationship and emotional issue they might ever encounter. 
      \nBut this doesn’t mean you need to go through them all! We provide all the support you might need, but the membership is designed for you to go at your own pace. 
      \nEach course is about 1.5 hours in length, and broken up into small modules, and our live events and webinars range from 60-90 mins. So even if you have just 10 minutes a day, you can expect to experience results.`,
  },
  {
    question: 'Which courses or webinars should I start with first?',
    answer: `Great question! If you want to test out a course during your free trial, I recommend that you start with the beginner course for your attachment style. (You can find our Attachment Style Quiz on our website if you’re unsure what yours is).
      \nWe also have suggested course journeys based on attachment styles (which you’ll find in your members dashboard). We recommend that you follow this path once you become a member because it outlines a very clear and proven healing journey tailored to your attachment style.`,
  },
  {
    question: 'Can I cancel my membership once I become a member?',
    answer: `Absolutely! There are no obligations to remain a member, you can cancel at any time.
      \nWe also offer a 7-day money-back guarantee once your membership kicks in – so there are zero risks by testing out the membership to see how it can change your life.`,
  },
]

export const FaqSecondary = ({
  faq = DEFAULT_FAQs,
  className,
  classNameFAQ,
  classNameSecondary,
  classNameAnswer,
  classNameIcon,
  classNameHeading,
  classNameHeadingPrimary,
  classNameQuestionFAQ,
  hasHeader = true,
  headerText = 'Questions you might have',
  subheaderTextDesktop = `BEFORE SAYING "YES!" `,
  subheaderTextMobile = `BEFORE SAYING "YES!" `,
}: IFaqSecondaryProps) => {
  //======================== Hooks ============================
  const { windowWidth } = useContext(ViewportContext)

  return (
    <section className={cx('w-full bg-blue-lightest', className)}>
      <div className={cx('max-w-screen-md mx-auto py-16', classNameSecondary)}>
        {hasHeader && (
          <Text
            className={cx('text-black text-center text-3xl mb-4', classNameHeadingPrimary)}
            content={headerText}
          />
        )}

        <Text.Heading
          className={cx(
            '!text-[24px] font-sans font-bold text-black text-center tracking-[0.325em] mb-8 md:text-3xl',
            classNameHeading
          )}
          content={windowWidth > EWindowWidth.lg ? subheaderTextDesktop : subheaderTextMobile}
        />

        {faq.map((data, index) => (
          <FAQ
            key={`${index}`}
            answer={data.answer}
            className={classNameFAQ}
            classNameAnswer={classNameAnswer}
            classNameIcon={classNameIcon}
            classNameQuestion={classNameQuestionFAQ}
            question={data.question}
          />
        ))}
      </div>
    </section>
  )
}

const FAQ = ({
  question,
  answer,
  className,
  classNameIcon,
  classNameQuestion,
  classNameAnswer,
}: IFAQProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={cx('bg-white text-left rounded-lg mb-4 mx-4', className)}>
      <Expandable
        trigger={
          <div
            className={cx(
              'flex justify-between items-center text-black transition-all bg-white rounded-lg  p-4',
              classNameQuestion
            )}>
            <Text.Paragraph className="font-bold mb-0 md:text-lg" content={question} />

            <Icon
              className={cx(`ml-5 text-xl transition-all ${isOpen && 'rotate-180'}`, classNameIcon)}
              name="chevron-down"
            />
          </div>
        }
        onClosing={() => setIsOpen(false)}
        onOpening={() => setIsOpen(true)}>
        <div
          className={cx(
            'w-full flex flex-col text-black bg-white rounded-lg px-4 pb-4',
            classNameAnswer
          )}>
          {typeof answer === 'string' ? (
            <Text.Paragraph useMD className="text-left" content={answer} />
          ) : (
            answer.map((data) => (
              <Text.Paragraph key={data} className="text-left mb-4" content={data} />
            ))
          )}
        </div>
      </Expandable>
    </div>
  )
}
