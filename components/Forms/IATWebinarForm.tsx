'use client'

// core
import { useState } from 'react'
// components
import { SignupForm } from './SignupForm'
import { Dialog } from '../Dialog/Dialog'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@awesome.me/kit-545b942488/icons/classic/solid'

export const IATWebinarForm = () => {
  const [modalSuccess, setModalSuccess] = useState(false)

  return (
    <>
      <Dialog className="max-w-xl p-4 bg-white rounded-20" isShown={modalSuccess}>
        <div className="w-full flex justify-end mb-2">
          <FontAwesomeIcon
            className="cursor-pointer hover:scale-125"
            icon={faClose}
            onClick={() => setModalSuccess(false)}
          />
        </div>

        <h2 className="text-4xl text-left mb-2">
          Thanks for Signing Up For the FREE Masterclass! Details Incoming!
        </h2>

        <p className="mb-4">
          You might not have realized it yet, but you’ve just booked an incredible opportunity with
          this FREE Masterclass. I’ll email you all the details of the{' '}
          <strong>
            <u>High Impact Relationship Coach Masterclass</u>
          </strong>{' '}
          – date, time, and Zoom link.
        </p>

        <p className="mb-4">
          You'll have the exclusive opportunity to ask me questions at the end about the program and
          how being a Certified IAT™ Coach will transform your life, career, and finances.
        </p>

        <p className="mb-4">
          P.S: Remember this is a no commitment, no obligation, free masterclass. You just have to
          show up!
        </p>

        <p>Can’t wait to see you!</p>
      </Dialog>

      <SignupForm
        includePhoneField
        userTags={['mkt-iat-webinar-masterclass']}
        listIds={[54]}
        classNameSuccessMessage="w-fit bg-white rounded-lg p-2"
        successMessage="Thanks for joining the masterclass!"
        submitButtonLabel="BOOK YOUR FREE MASTERCLASS"
        onSuccess={() => setModalSuccess(true)}
      />
    </>
  )
}
