'use client'

// core
import { useState } from 'react'
// components
import { Expandable } from '../Expandable'
import { FAQs } from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus, faPlus } from '@awesome.me/kit-545b942488/icons/classic/solid'

export const AttachmentQuizV2Faq = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Expandable
      open={isOpen}
      onOpening={() => setIsOpen(true)}
      onClosing={() => setIsOpen(false)}
      trigger={
        <div className={`grid grid-cols-[16px_1fr] gap-4 justify-start items-center p-4`}>
          <FontAwesomeIcon className="w-full text-primary" icon={isOpen ? faMinus : faPlus} />

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
              <FontAwesomeIcon className="text-primary mr-4" icon={faMinus} />

              <p className="font-bold mb-0">{faq.question}</p>
            </div>

            <p className="mb-0">{faq.answer}</p>
          </div>
        ))}
      </div>
    </Expandable>
  )
}
