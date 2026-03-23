'use client'
// core
import Link from 'next/link'
import { useState, useEffect, useCallback } from 'react'
// components
import { Loader } from '../Loader'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilm } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { Input } from '../Input/Input'
import { Form, Formik, FormikHelpers, useFormikContext } from 'formik'
import cx from 'classnames'
import * as yup from 'yup'
// utils
import { Regexes } from '@/utils/constants'
import { isPhoneValid } from '@/utils/functions'
import { PhoneInput } from 'react-international-phone'
import { Button } from '../Button/Button'
// styles
import 'react-international-phone/style.css'

interface IMasterclassRegistrationFormProps {
  id?: string
  className?: string
  classNameFields?: string
}

const timeSlotInit = Array.from({ length: 16 }, (_, i) => {
  const h = 16 + i
  const label = new Date(0, 0, 0, h).toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
  return (
    <option key={h} value={h}>
      {label}
    </option>
  )
})

export default function MasterclassRegistrationForm({
  id,
  className,
}: IMasterclassRegistrationFormProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(false)
  }, [])

  useEffect(() => {}, [])

  const onSubmit = useCallback(() => {}, [])

  if (loading) return <Loader />

  return (
    <div className="w-full min-h-fit !rounded-b-lg shadow-xl">
      <div className="bg-primary text-white rounded-t-lg px-6 py-4">
        <span>
          <FontAwesomeIcon icon={faFilm} className="text-base mr-2" />
        </span>{' '}
        <strong>Playing for a limited time only</strong>
      </div>

      <div className="bg-white rounded-b-lg p-4 pb-6">
        <p>
          <strong>All times shown are in your local time</strong>
        </p>

        <Formik
          initialValues={masterclassRegistrationFormInitialValues}
          validateOnBlur={false}
          validationSchema={MasterclassRegistrationFormValidationSchema}
          onSubmit={onSubmit}>
          {({ values, errors, touched, handleChange, setFieldValue, isSubmitting }) => (
            <Form className={cx('w-full flex-col', className)} id={id}>
              <div className="mb-4">
                <Input.Field
                  value={values.name}
                  autocomplete="given-name"
                  className="!p-2 !mt-0 !mx-0 mb-2 xxs:!mb-0 w-full"
                  label="Name*"
                  name="name"
                />
              </div>

              <div className="mb-4">
                <Input.Field
                  value={values.email}
                  autocomplete="email"
                  className="!p-2 !m-0 w-full"
                  label="Email*"
                  name="email"
                />
              </div>

              <div className="mb-4">
                <select
                  required
                  value={values.date}
                  name="date"
                  className={`w-full rounded-lg p-4 border border-grey-border !outline-none ${
                    touched.date && errors.date && 'border-danger'
                  }`}
                  onChange={(e) => setFieldValue('date', e.target.value.toString())}>
                  <option disabled value="">
                    Select Date
                  </option>

                  <option disabled value="Select Date" className="text-gray-500">
                    Select Date
                  </option>

                  <option value="watch-now">Watch Now Instantly</option>

                  {new Date().getHours() < 22 && (
                    <option value="later-today">Watch Later Today</option>
                  )}

                  <option
                    value={new Date(new Date().setDate(new Date().getDate() + 1)).toDateString()}>
                    {new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString(
                      'en-US',
                      { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' }
                    )}
                  </option>

                  <option
                    value={new Date(new Date().setDate(new Date().getDate() + 2)).toDateString()}>
                    {new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString(
                      'en-US',
                      { weekday: 'short', month: 'short', day: '2-digit', year: 'numeric' }
                    )}
                  </option>
                </select>

                {touched.date && errors.date && (
                  <div className="text-left text-sm text-danger">{errors.date}</div>
                )}
              </div>

              <div className="mb-4">
                <select
                  required
                  disabled={values.date === 'watch-now'}
                  value={values.time}
                  name="time"
                  className={`w-full rounded-lg p-4 border border-grey-border !outline-none ${
                    touched.time && errors.time && 'border-danger'
                  }`}
                  onChange={(e) => setFieldValue('time', e.target.value.toString())}>
                  <option disabled value="">
                    {values.date === 'watch-now' ? 'Start Now' : 'Select Time'}
                  </option>

                  <option disabled value="Select Time" className="text-gray-500">
                    Select Time
                  </option>

                  {Array.from(
                    {
                      length:
                        24 -
                        (values.date === 'later-today' && new Date().getHours() > 8
                          ? new Date().getHours() + 2
                          : 8),
                    },
                    (_, i) => {
                      const h =
                        (values.date === 'later-today' && new Date().getHours() > 8
                          ? new Date().getHours() + 2
                          : 8) + i
                      const label = new Date(0, 0, 0, h).toLocaleTimeString('en-US', {
                        hour: '2-digit',
                        minute: '2-digit',
                        hour12: true,
                      })
                      return (
                        <option key={h} value={h}>
                          {label}
                        </option>
                      )
                    }
                  )}
                </select>

                {touched.time && errors.time && (
                  <div className="text-left text-sm text-danger">{errors.time}</div>
                )}
              </div>

              <div className="mb-4">
                <PhoneInput
                  disableDialCodePrefill
                  value={values.phone}
                  className={`!rounded-xl bg-white !border items-center py-2 ${
                    errors.phone ? 'border-danger' : 'border-[#6b7280]'
                  }`}
                  inputClassName="w-[80%] !text-base !border-none !ml-2"
                  countrySelectorStyleProps={{ buttonClassName: '!border-none !ml-4' }}
                  name="phone"
                  placeholder="Phone Number (Optional)"
                  onChange={(val) => {
                    setFieldValue('phone', val)
                  }}
                />

                {errors['phone'] && (
                  <p className="text-danger">
                    <em>*{errors.phone}</em>
                  </p>
                )}
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="masterclass-primary-cta"
                label={'RESERVE MY SPOT NOW'}
              />
            </Form>
          )}
        </Formik>

        <p className="text-xs text-left text-gray-400 mt-4">
          By registering for the above, you confirm that you agree to the{' '}
          <Link
            href="https://university.personaldevelopmentschool.com/pages/terms"
            target="_blank"
            className="text-primary">
            <strong>Terms of Use</strong>
          </Link>{' '}
          & the{' '}
          <Link
            href="https://university.personaldevelopmentschool.com/pages/policy"
            target="_blank"
            className="text-primary">
            <strong>Privacy Policy</strong>
          </Link>{' '}
          as well as receiving notification for future events. You can withdraw your consent at any
          time by unsubscribing.
        </p>
      </div>
    </div>
  )
}

// function TimeSelect() {
//   const { values } = useFormikContext<IMasterclassRegistrationFormSchema>()

//   const selectedDate = values.date

//   const startHour =
//     selectedDate === 'watch-later' ? (new Date().getHours() > 8 ? new Date().getHours() + 2 : 8) : 8

//   return (
//     <select name="time">
//       {Array.from({ length: 24 - startHour }, (_, i) => {
//         const h = startHour + i
//         const label = new Date(0, 0, 0, h).toLocaleTimeString('en-US', {
//           hour: '2-digit',
//           minute: '2-digit',
//           hour12: true,
//         })
//         return (
//           <option key={h} value={h}>
//             {label}
//           </option>
//         )
//       })}
//     </select>
//   )
// }

const MasterclassRegistrationFormValidationSchema = yup
  .object()
  .shape({
    name: yup.string().defined().ensure().required('First name required'),
    email: yup
      .string()
      .defined()
      .ensure()
      .matches(Regexes.email, 'Please enter a valid email')
      .required('Email required'),
    date: yup.string().defined().ensure().required('Please select a value'),
    time: yup.string().defined().ensure().required('Please select a value'),
    phone: yup
      .string()
      .transform((value) => (value === '' ? null : value))
      .test('isPhoneValid', 'Please enter a valid phone number', (value) =>
        value ? isPhoneValid(value) : true
      ),
  })
  .defined()

export interface IMasterclassRegistrationFormSchema extends yup.InferType<
  typeof MasterclassRegistrationFormValidationSchema
> {}

const masterclassRegistrationFormInitialValues: IMasterclassRegistrationFormSchema =
  MasterclassRegistrationFormValidationSchema.cast({})
