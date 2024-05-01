'use client'

import { useState } from 'react'
import { Expandable } from '../Expandable'
import { Icon } from '../Icon'
import { FAQs } from './config'

export const AttachmentQuizV2Faq = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Expandable
      open={isOpen}
      onOpening={() => setIsOpen(true)}
      onClosing={() => setIsOpen(false)}
      trigger={
        <div className={`grid grid-cols-[16px_1fr] gap-4 justify-start items-center p-4`}>
          <Icon className="w-full text-primary" name={isOpen ? 'minus' : 'plus'} />

          <p className="font-bold text-left mb-0 md:text-lg">Get my exclusive sneak peak</p>

          <p className="col-span-2">
            Thais will guide you through our unique courses to help you understand your attachment
            style.
          </p>
        </div>
      }>
      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        {FAQs.map((faq, i) => (
          <div key={`attachment_quiz_v2_faq_${i}`} className="p-4 bg-white rounded-lg mb-4 lg:mb-0">
            <div className="flex justify-start items-center mb-4">
              <Icon className="text-primary mr-4" name="minus" />

              <p className="font-bold mb-0">{faq.question}</p>
            </div>

            <p className="mb-0">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Expandable>
  )
}
