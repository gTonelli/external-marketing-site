'use client'

import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon'
import { Field, Form, Formik, FormikHelpers } from 'formik'
import { ChangeEvent, useState } from 'react'
import * as yup from 'yup'

export const PodcastGuestForm = () => {
  const [selectedFile, setSelectedFile] = useState<File>()

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.currentTarget.files ?? [])
    if (files[0].size > 2000000) setSelectedFile(files[0])
  }

  const onSubmit = (
    values: IPodcastGuestFormSchema,
    formikHelpers: FormikHelpers<IPodcastGuestFormSchema>
  ) => {
    formikHelpers.validateForm()
  }

  return (
    <Formik
      initialValues={podcastGuestFormInitialValues}
      validationSchema={PodcastGuestFormValidationSchema}
      onSubmit={onSubmit}>
      {({ values, errors, touched, handleChange, setFieldValue, isSubmitting }) => (
        <Form className="w-full text-left">
          <div className="grid grid-cols-1 gap-4 mb-4 lg:grid-cols-2">
            <Field
              className={`rounded-lg ${errors.firstName && 'border-danger'}`}
              name="firstName"
              placeholder="First Name*"
              value={values.firstName}
            />

            <Field
              className={`rounded-lg ${errors.lastName && 'border-danger'}`}
              name="lastName"
              placeholder="Last Name*"
              value={values.lastName}
            />
          </div>

          <Field
            className={`w-full rounded-lg mb-4 ${errors.email && 'border-danger'}`}
            name="email"
            type="email"
            placeholder="What's your email?*"
            value={values.email}
          />

          <label htmlFor="guestExpertise">What are you an expert in?*</label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              errors.guestExpertise && 'border-danger'
            }`}
            as="textarea"
            rows={3}
            name="guestExpertise"
            placeholder="Share your areas of expertise or topics you are most known for."
            value={values.guestExpertise}
          />

          <label htmlFor="guestTopics">What main topics are you excited to talk about?*</label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              errors.guestTopics && 'border-danger'
            }`}
            as="textarea"
            rows={3}
            name="guestTopics"
            placeholder="Let us know what you'd love to discuss during the episode."
            value={values.guestTopics}
          />

          <label htmlFor="guestLimits">Is there anything off limits/you want to avoid?*</label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              errors.guestLimits && 'border-danger'
            }`}
            as="textarea"
            rows={3}
            name="guestLimits"
            placeholder="Mention any topics you’d prefer not to cover."
            value={values.guestLimits}
          />

          <label htmlFor="guestHighlights">
            Tell me more about any programs, launches, offers, or any social media or websites you’d
            like to promote!
          </label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              errors.guestHighlights && 'border-danger'
            }`}
            as="textarea"
            rows={3}
            name="guestHighlights"
            placeholder="Highlight any programs, launches, offers, and your social media channels or website."
            value={values.guestHighlights}
          />

          <label htmlFor="guestBio">Please include a bio so we can introduce you!*</label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              errors.guestBio && 'border-danger'
            }`}
            as="textarea"
            rows={3}
            name="guestBio"
            placeholder="Provide a short bio we can use to introduce you to our audience."
            value={values.guestBio}
          />

          <label htmlFor="guestHeadshot">
            Please include a headshot for episode promotion:*
            <div className="flex flex-col items-center justify-center rounded-lg text-center border border-dashed border-black cursor-pointer p-4 mb-4">
              <Icon name="file-arrow-up" type="regular" size="lg" className="mb-4" />

              {selectedFile ? (
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
              errors.guestHistory && 'border-danger'
            }`}
            as="textarea"
            rows={3}
            name="guestHistory"
            placeholder="Link any content that helps us understand your style and expertise."
            value={values.guestHistory}
          />

          <Button className="w-full" type="submit" label="SUBMIT NOW" />
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
