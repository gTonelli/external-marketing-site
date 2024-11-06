'use client'

// core
import { ChangeEvent, useState } from 'react'
// components
import { Button } from '@/components/Button/Button'
import { Icon } from '@/components/Icon'
// libraries
import { Field, Form, Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'
import { Maybe } from 'yup'
// utils
import { Regexes } from '@/utils/constants'

export const PodcastGuestForm = () => {
  const [submitted, setSubmitted] = useState(false)
  const [selectedFile, setSelectedFile] = useState<Maybe<File>>()
  const [validFile, setValidFile] = useState<Maybe<Boolean>>()
  const [fileErrorMsg, setFileErrorMsg] = useState('')

  const onFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.currentTarget.files ?? [])
    if (files[0].size > 4000000) {
      setValidFile(false)
      setFileErrorMsg('File too large! Maximum upload size is 4mb.')
      return
    }
    if (!['image/png', 'image/jpeg'].includes(files[0].type)) {
      setValidFile(false)
      setFileErrorMsg('Invalid file type! Please upload a png or a jpg.')
      return
    }
    setValidFile(true)
    setFileErrorMsg('')
    setSelectedFile(files[0])
  }

  const onSubmit = async (
    values: IPodcastGuestFormSchema,
    formikHelpers: FormikHelpers<IPodcastGuestFormSchema>
  ) => {
    if (!validFile || !selectedFile) {
      setFileErrorMsg('Headshot image is required')
      await formikHelpers.validateForm()
      return
    }
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
    formdata.append('to', values.email) // @TODO: after staging test, revert back to info@pds
    formdata.append('reason', 'Guest Reaching Out for Podcast')
    formdata.append('message', message)
    formdata.append('templateReferenceId', '5')
    formdata.append('subject', 'Podcast Guest Form Test')
    formdata.append('attachment', selectedFile)
    formdata.append('sendSubmissionConfirmation', 'true')

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
      <div className="w-full block rounded-lg p-3 border border-success text-left">
        <p className="font-bold mb-2">
          <span>
            <Icon name="check-circle" className="text-success mr-2" />
          </span>
          Thank you for filling out the form!
        </p>

        <p>
          If you have any other questions in the meantime, feel free to reach out at
          info@personaldevelopmentschool.com. Looking forward to our conversation!
        </p>
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
            <div>
              <Field
                className={`w-full rounded-lg ${
                  touched.firstName && errors.firstName && 'border-danger'
                }`}
                name="firstName"
                placeholder="First Name*"
                value={values.firstName}
                onChange={handleChange}
              />
              {errors.firstName && <small className="flex text-danger">{errors.firstName}</small>}
            </div>

            <div>
              <Field
                className={`w-full rounded-lg ${
                  touched.lastName && errors.lastName && 'border-danger'
                }`}
                name="lastName"
                placeholder="Last Name*"
                value={values.lastName}
                onChange={handleChange}
              />
              {errors.lastName && <small className="flex text-danger">{errors.lastName}</small>}
            </div>
          </div>

          <Field
            className={`w-full rounded-lg mb-4 ${
              touched.email && errors.email && 'border-danger !mb-0'
            }`}
            name="email"
            type="email"
            placeholder="What's your email?*"
            value={values.email}
            onChange={handleChange}
          />

          {errors.email && <small className="flex text-danger mb-4">{errors.email}</small>}

          <label htmlFor="guestExpertise">What are you an expert in?*</label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              touched.guestExpertise && errors.guestExpertise && 'border-danger !mb-0'
            }`}
            as="textarea"
            rows={3}
            name="guestExpertise"
            placeholder="Share your areas of expertise or topics you are most known for."
            value={values.guestExpertise}
            onChange={handleChange}
          />

          {errors.guestExpertise && (
            <small className="flex text-danger mb-4">{errors.guestExpertise}</small>
          )}

          <label htmlFor="guestTopics">What main topics are you excited to talk about?*</label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              touched.guestTopics && errors.guestTopics && 'border-danger !mb-0'
            }`}
            as="textarea"
            rows={3}
            name="guestTopics"
            placeholder="Let us know what you'd love to discuss during the episode."
            value={values.guestTopics}
            onChange={handleChange}
          />

          {errors.guestTopics && (
            <small className="flex text-danger mb-4">{errors.guestTopics}</small>
          )}

          <label htmlFor="guestLimits">Is there anything off limits/you want to avoid?*</label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              touched.guestLimits && errors.guestLimits && 'border-danger !mb-0'
            }`}
            as="textarea"
            rows={3}
            name="guestLimits"
            placeholder="Mention any topics you’d prefer not to cover."
            value={values.guestLimits}
            onChange={handleChange}
          />

          {errors.guestLimits && (
            <small className="flex text-danger mb-4">{errors.guestLimits}</small>
          )}

          <label htmlFor="guestHighlights">
            Tell me more about any programs, launches, offers, or any social media or websites you’d
            like to promote!
          </label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              touched.guestHighlights && errors.guestHighlights && 'border-danger !mb-0'
            }`}
            as="textarea"
            rows={3}
            name="guestHighlights"
            placeholder="Highlight any programs, launches, offers, and your social media channels or website."
            value={values.guestHighlights}
            onChange={handleChange}
          />

          {errors.guestHighlights && (
            <small className="flex text-danger mb-4">{errors.guestHighlights}</small>
          )}

          <label htmlFor="guestBio">Please include a bio so we can introduce you!*</label>

          <Field
            className={`w-full rounded-lg border border-black py-2 px-3 mb-4 ${
              touched.guestBio && errors.guestBio && 'border-danger !mb-0'
            }`}
            as="textarea"
            rows={3}
            name="guestBio"
            placeholder="Provide a short bio we can use to introduce you to our audience."
            value={values.guestBio}
            onChange={handleChange}
          />

          {errors.guestBio && <small className="flex text-danger mb-4">{errors.guestBio}</small>}

          <label htmlFor="guestHeadshot">
            Please include a headshot for episode promotion:*
            <div
              className={`flex flex-col items-center justify-center rounded-lg text-center border border-dashed border-black cursor-pointer p-4 mb-4 ${
                validFile !== undefined && !validFile && 'border-danger !mb-0'
              }`}>
              <Icon name="file-arrow-up" type="regular" size="lg" className="mb-4" />

              {validFile && selectedFile ? (
                selectedFile.name
              ) : (
                <small>
                  Choose an image
                  <br />
                  <span
                    className={`font-bold ${
                      validFile !== undefined && !validFile && 'text-danger'
                    }`}>
                    PNG or JPG only (max size 4 mb)
                  </span>
                </small>
              )}
            </div>
            {fileErrorMsg && <small className="flex text-danger mb-4">{fileErrorMsg}</small>}
            <input
              className="hidden"
              name="guestHeadshot"
              id="guestHeadshot"
              type="file"
              accept="image/png, image/jpeg"
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
              touched.guestHistory && errors.guestHistory && 'border-danger !mb-0'
            }`}
            as="textarea"
            rows={3}
            name="guestHistory"
            placeholder="Link any content that helps us understand your style and expertise."
            value={values.guestHistory}
            onChange={handleChange}
          />

          {errors.guestHistory && (
            <small className="flex text-danger mb-4">{errors.guestHistory}</small>
          )}

          <Button className="w-full" type="submit" label="SUBMIT NOW" disabled={isSubmitting} />
        </Form>
      )}
    </Formik>
  )
}

const PodcastGuestFormValidationSchema = yup
  .object()
  .shape({
    firstName: yup.string().defined().ensure().required('Firstname is required'),
    lastName: yup.string().defined().ensure().required('Lastname is required'),
    email: yup
      .string()
      .email()
      .defined()
      .ensure()
      .matches(Regexes.email, 'Please enter a valid email')
      .required('Email is required'),
    guestExpertise: yup
      .string()
      .defined()
      .ensure()
      .required('Your expertise information is required'),
    guestTopics: yup.string().defined().ensure().required('Your topics preference is required'),
    guestLimits: yup
      .string()
      .defined()
      .ensure()
      .required('Off limits topics knowledge is required'),
    guestHighlights: yup.string().defined().ensure().required('This information is required'),
    guestBio: yup.string().defined().ensure().required('Your bio is required'),
    guestHistory: yup
      .string()
      .defined()
      .ensure()
      .required('Your recent history information is required'),
  })
  .defined()

export interface IPodcastGuestFormSchema
  extends yup.InferType<typeof PodcastGuestFormValidationSchema> {}

const podcastGuestFormInitialValues: IPodcastGuestFormSchema =
  PodcastGuestFormValidationSchema.cast({})
