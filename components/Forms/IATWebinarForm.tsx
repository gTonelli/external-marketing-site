'use client'

// core
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
// components
import { SignupForm } from './SignupForm'
import { Dialog } from '../Dialog/Dialog'
import { Button } from '../Button/Button'
import { faClose } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { gtag } from '../GoogleAdsTag'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const IATWebinarForm = () => {
  const router = useRouter()
  return (
    <SignupForm
      showPhoneField
      userTags={['mkt-iat-webinar-masterclass']}
      listIds={[54]}
      classNameSuccessMessage="w-fit bg-white rounded-lg p-2"
      formSource="IAT Webinar"
      successMessage="Thanks for joining the masterclass!"
      submitButtonLabel="BOOK YOUR FREE MASTERCLASS"
      onSuccess={() => router.push('/iat/post-registration-masterclass?signup=success')}
    />
  )
}

interface IIATWebinarSuccessModalProps {
  modalSuccess: boolean
}

export const IATWebinarSuccessModal = ({ modalSuccess }: IIATWebinarSuccessModalProps) => {
  // =========== State =========
  const [isOpen, setIsOpen] = useState(modalSuccess)

  useEffect(() => {
    gtag({
      event: 'iat_webinar_signup',
      eventCategory: 'IAT Webinar Signup',
      eventAction: 'Form',
      eventLabel: 'Submit',
    })
  }, [])

  return (
    <Dialog className="max-w-xl p-4 bg-white rounded-20" isShown={isOpen}>
      <div className="w-full flex justify-end mb-2">
        <FontAwesomeIcon
          className="cursor-pointer hover:scale-125"
          icon={faClose}
          onClick={() => setIsOpen(false)}
        />
      </div>

      <h2 className="text-3xl text-left mb-2">
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

      <div className="text-center">
        <Button label="CONTINUE" onClick={() => setIsOpen(false)} />
      </div>
    </Dialog>
  )
}
