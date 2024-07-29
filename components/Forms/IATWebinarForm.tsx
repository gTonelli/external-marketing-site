'use client'

import { useState } from 'react'
import { SignupForm } from './SignupForm'
import { Dialog } from '../Dialog/Dialog'
import { Icon } from '../Icon'

export const IATWebinarForm = () => {
  const [modalSuccess, setModalSuccess] = useState(false)
  return (
    <>
      <Dialog className="max-w-xl p-4 bg-white rounded-20" isShown={modalSuccess}>
        <div className="w-full flex justify-end mb-2">
          <Icon
            className="cursor-pointer hover:scale-125"
            name="close"
            onClick={() => setModalSuccess(false)}
          />
        </div>
        <h2 className="text-4xl text-left mb-2">
          Thanks for Joining the Masterclass! Details Incoming!
        </h2>

        <p>
          You might not have realized it yet, but you’ve just booked an incredible opportunity with
          this FREE Masterclass. I’ll email you all the details of the{' '}
          <strong>
            <u>High Impact Relationship Coach Masterclass</u>
          </strong>{' '}
          – date, time, and Zoom link. <br /> <br />
          You'll have exclusive 1:1 time to ask me any questions about the program and how being a
          Certified IAT™ Coach will transform your life, career, and finances.
          <br />
          <br />
          Can’t wait to see you!
        </p>
      </Dialog>

      <SignupForm
        userTags={['mkt-iat-webinar-masterclass']}
        listIds={[54]}
        successMessage="Thanks for joining the masterclass!"
        submitButtonLabel="BOOK YOUR FREE MASTERCLASS"
        onSuccess={() => setModalSuccess(true)}
      />
    </>
  )
}
