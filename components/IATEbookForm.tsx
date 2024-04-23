'use client'

import { useState } from 'react'
import { SignupForm } from './Forms/SignupForm'
import { Dialog } from './Dialog/Dialog'

export const IATEbookForm = ({ id }: { id?: string }) => {
  const [success, setSuccess] = useState(false)

  return (
    <>
      <Dialog className="max-w-xl p-4" isShown={success} onToggle={() => setSuccess(!success)}>
        <h2 className="text-4xl text-left mt-4">Thanks for Downloading Our Ebook!</h2>

        <p>
          Congratulations on starting your journey towards becoming a certified relationship coach!
          Our eBook is on its way. <br />
          <br /> I’ll be sending you the best resources and latest updates about our IAT™
          Relationship Coaching Program. Stay tuned!
        </p>
      </Dialog>

      <SignupForm
        id={id}
        userTags={['iat-tips-ebook']}
        listIds={[54]}
        successMessage="Your e-book is on the way!"
        onSuccess={() => setSuccess(true)}
      />
    </>
  )
}
