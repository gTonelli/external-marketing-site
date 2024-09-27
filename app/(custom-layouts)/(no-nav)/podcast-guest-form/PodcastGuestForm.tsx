'use client'

import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { ChangeEvent, useState } from 'react'
import * as yup from 'yup'
import { Maybe } from 'yup'

export const PodcastGuestForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [selectedFile, setSelectedFile] = useState<Maybe<File>>()
  const [validFile, setValidFile] = useState<Maybe<Boolean>>()

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.currentTarget.files ?? [])
    if (files[0].size > 2000000) {
      setValidFile(false)
      return
    }
    setValidFile(true)
    setSelectedFile(files[0])
  }

  const onSubmit = (
    values: IPodcastGuestFormSchema,
    formikHelpers: FormikHelpers<IPodcastGuestFormSchema>
  ) => {
    if (!validFile || !selectedFile) return

    formikHelpers.setSubmitting(true)

    const message = `
      Guest Name: ${values.firstName} ${values.lastName}  --  
      Guest Email: ${values.email}  --    
      [Q] What are you an expert in? 
      [A] ${values.guestExpertise} -- 
      [Q] What main topics are you excited to talk about?
      [A] ${values.guestTopics}  --  
      [Q] Is there anything off limits/you want to avoid?
      [A] ${values.guestLimits}  --  
      [Q] Tell me more about any programs, launches, offers, or any social media or websites you’d like to promote!
      [A] ${values.guestHighlights}  --  
      [Q] Please include a bio so we can introduce you!
      [A] ${values.guestBio}  --  
      [Q] Do you have any previously recorded podcasts, interviews, blog posts, social posts that you think I should read before the interview to get to know you and your expertise better?
      [A] ${values.guestHistory}  --  
      Guest headshot for promotion is attached.
    `

    const formdata = new FormData()
    formdata.append('firstName', values.firstName)
    formdata.append('lastName', values.lastName)
    formdata.append('email', values.email)
    formdata.append('to', 'pratikraj@personaldevelopmentschool.com') // @TODO: after staging test, revert back to info@pds
    formdata.append('reason', 'Guest Reaching Out for Podcast')
    formdata.append('message', message)
    formdata.append('templateReferenceId', '5')
    formdata.append('subject', 'Podcast Guest Form Test')
    formdata.append('attachment', selectedFile)

    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-us`, {
      method: 'POST',
      body: formdata,
      redirect: 'follow',
    })
      .then((res) => res.json())
      .then((res) => {
        if (!res.success) throw res?.message || 'An unexpected error occured'
        else setSubmitted(true)
      })
      .catch((error) => {
        console.error(error)
        formikHelpers.setSubmitting(false)
      })
  }

  if (submitted)
    return (
      <div>
        <p className="font-bold text-success mb-4">Thank you for the submission.</p>

        <p>Our team will reach out to you shortly</p>
      </div>
    )

  return (
    <Formik
      initialValues={podcastGuestFormInitialValues}
      validationSchema={PodcastGuestFormValidationSchema}
      onSubmit={onSubmit}>
      {({ values, errors, touched, handleChange, isSubmitting }) => (
        <Form className="w-full text-left">
          <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
            <Field
              className={`rounded-lg ${touched.firstName && errors.firstName && 'border-danger'}`}
              name="firstName"
              placeholder="First Name*"
              value={values.firstName}
              onChange={handleChange}
            />

            <Field
              className={`rounded-lg ${touched.lastName && errors.lastName && 'border-danger'}`}
              name="lastName"
              placeholder="Last Name*"
              value={values.lastName}
              onChange={handleChange}
            />
          </div>

          <Field
            className={`w-full rounded-lg mb-4 ${touched.email && errors.email && 'border-danger'}`}
            name="email"
            type="email"
            placeholder="What's your email?*"
            value={values.email}
            onChange={handleChange}
          />

          <label htmlFor="guestExpertise">What are you an expert in?*</label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              touched.guestExpertise && errors.guestExpertise && 'border-danger'
            }`}
            as="textarea"
            rows={3}
            name="guestExpertise"
            placeholder="Share your areas of expertise or topics you are most known for."
            value={values.guestExpertise}
            onChange={handleChange}
          />

          <label htmlFor="guestTopics">What main topics are you excited to talk about?*</label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              touched.guestTopics && errors.guestTopics && 'border-danger'
            }`}
            as="textarea"
            rows={3}
            name="guestTopics"
            placeholder="Let us know what you'd love to discuss during the episode."
            value={values.guestTopics}
            onChange={handleChange}
          />

          <label htmlFor="guestLimits">Is there anything off limits/you want to avoid?*</label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              touched.guestLimits && errors.guestLimits && 'border-danger'
            }`}
            as="textarea"
            rows={3}
            name="guestLimits"
            placeholder="Mention any topics you’d prefer not to cover."
            value={values.guestLimits}
            onChange={handleChange}
          />

          <label htmlFor="guestHighlights">
            Tell me more about any programs, launches, offers, or any social media or websites you’d
            like to promote!
          </label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              touched.guestHighlights && errors.guestHighlights && 'border-danger'
            }`}
            as="textarea"
            rows={3}
            name="guestHighlights"
            placeholder="Highlight any programs, launches, offers, and your social media channels or website."
            value={values.guestHighlights}
            onChange={handleChange}
          />

          <label htmlFor="guestBio">Please include a bio so we can introduce you!*</label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              touched.guestBio && errors.guestBio && 'border-danger'
            }`}
            as="textarea"
            rows={3}
            name="guestBio"
            placeholder="Provide a short bio we can use to introduce you to our audience."
            value={values.guestBio}
            onChange={handleChange}
          />

          <label htmlFor="guestHeadshot">
            Please include a headshot for episode promotion:*
            <div
              className={`flex flex-col items-center justify-center rounded-lg text-center border border-dashed border-black cursor-pointer p-4 mb-4 ${
                !validFile && 'border-danger'
              }`}>
              <Icon name="file-arrow-up" type="regular" size="lg" className="mb-4" />

              {validFile && selectedFile ? (
                selectedFile.name
              ) : (
                <small>
                  Drag and drop your file here or choose one
                  <br />
                  PNG or JPG only (max size 2 mb)
                </small>
              )}
            </div>
            <input
              className="hidden"
              name="guestHeadshot"
              id="guestHeadshot"
              type="file"
              accept="image/x-png, image/jpeg"
              onChange={onFileChange}
            />
          </label>

          <label htmlFor="guestHistory">
            Do you have any previously recorded podcasts, interviews, blog posts, social posts that
            you think I should read before the interview to get to know you and your expertise
            better?*
          </label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              touched.guestHistory && errors.guestHistory && 'border-danger'
            }`}
            as="textarea"
            rows={3}
            name="guestHistory"
            placeholder="Link any content that helps us understand your style and expertise."
            value={values.guestHistory}
            onChange={handleChange}
          />

          <Button className="w-full" type="submit" label="SUBMIT NOW" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  )
}

const PodcastGuestFormValidationSchema = yup
  .object()
  .shape({
    firstName: yup.string().defined().ensure().required(),
    lastName: yup.string().defined().ensure().required(),
    email: yup.string().email().defined().ensure().required(),
    guestExpertise: yup.string().defined().ensure().required(),
    guestTopics: yup.string().defined().ensure().required(),
    guestLimits: yup.string().defined().ensure().required(),
    guestHighlights: yup.string().defined().ensure().required(),
    guestBio: yup.string().defined().ensure().required(),
    guestHistory: yup.string().defined().ensure().required(),
  })
  .defined()

export interface IPodcastGuestFormSchema
  extends yup.InferType<typeof PodcastGuestFormValidationSchema> {}

const podcastGuestFormInitialValues: IPodcastGuestFormSchema =
  PodcastGuestFormValidationSchema.cast({})
