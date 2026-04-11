'use client'
// core
import Link from 'next/link'
import { useCallback, useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'
// components
import { Captcha } from '../Captcha'
import { Loader } from '../Loader'
import { Input } from '../Input/Input'
import { gtag } from '../GoogleAdsTag'
import { Button } from '../Button/Button'
import { faFilm } from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import { TMasterclassTitle } from '@/app/(custom-layouts)/(no-nav)/masterclass/config'
// libraries
import cx from 'classnames'
import * as yup from 'yup'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Form, Formik } from 'formik'
import dayjs from 'dayjs'
// modules
import { useFacebookPixel } from '@/modules/FacebookPixel'
import { useGamAnalytics } from '@/modules/GAM'
import Mixpanel from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'
// utils
import { Regexes } from '@/utils/constants'
import { PageContext } from '@/utils/contexts'

interface IMasterclassRegistrationFormProps {
  id?: string
  className?: string
  classNameFields?: string
  masterclassTitle: TMasterclassTitle
}

export default function MasterclassRegistrationForm({
  id,
  className,
  masterclassTitle,
}: IMasterclassRegistrationFormProps) {
  const router = useRouter()
  const [loading, setLoading] = useState(true)
  const { page_name } = useContext(PageContext)

  const FBQ = useFacebookPixel()
  const { setUserData } = useGamAnalytics()
  const [captchaToken, setCaptchaToken] = useState<string>('')

  const onCaptchaSuccess = useCallback((token: string) => {
    setCaptchaToken(token)
  }, [])

  const onCaptchaClear = useCallback(() => {
    setCaptchaToken('')
  }, [])

  useEffect(() => {
    setLoading(false)
  }, [])

  function scheduleTagAndDateTime(email: string, booked_time: Date) {
    let gap = dayjs(booked_time).diff(dayjs(), 'hours')
    Storage.set(`${masterclassTitle}-mcst`, booked_time.toISOString())
    let tagSuffix = `-masterclass-in-1h`
    let scheduled_time = dayjs(booked_time).subtract(1, 'hour').format()
    if (gap >= 48) {
      tagSuffix = `-masterclass-in-48h`
      scheduled_time = dayjs(booked_time).subtract(48, 'hours').format()
    } else if (gap >= 24) {
      tagSuffix = `-masterclass-in-24h`
      scheduled_time = dayjs(booked_time).subtract(24, 'hours').format()
    } else if (gap >= 12) {
      tagSuffix = `-masterclass-in-12h`
      scheduled_time = dayjs(booked_time).subtract(12, 'hours').format()
    } else if (gap >= 6) {
      tagSuffix = `-masterclass-in-6h`
      scheduled_time = dayjs(booked_time).subtract(6, 'hours').format()
    } else if (gap >= 1) {
      tagSuffix = `-masterclass-in-1h`
      scheduled_time = dayjs(booked_time).subtract(1, 'hour').format()
    }

    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/contact-us/schedule-registration`, {
      method: 'POST',
      credentials: 'include',
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        date: scheduled_time,
        tags: [`${masterclassTitle}${tagSuffix}`],
      }),
    })
  }

  function mergeDateAndHour(date: string, hour: number) {
    let mergedDate = new Date(date)
    mergedDate.setHours(hour, 0, 0, 0)
    return mergedDate
  }

  const onSubmit = (values: IMasterclassRegistrationFormSchema) => {
    const { name, email, date, time } = values
    const webinarBookingDateTime =
      date === 'watch-now'
        ? new Date()
        : date === 'later-today'
          ? mergeDateAndHour(new Date().toDateString(), +time)
          : mergeDateAndHour(date, +time)

    setUserData({ email, firstName: name })
    Mixpanel.setUser(email)
    Mixpanel.setPeople({
      $email: email,
      $first_name: name,
      [`${masterclassTitle}_masterclass_booking`]: webinarBookingDateTime.toISOString(),
    })
    Mixpanel.track.MasterclassBooked({
      masterclass_title: masterclassTitle,
      masterclass_time: webinarBookingDateTime.toISOString(),
      page_name,
    })
    gtag({
      event: 'form_tracking',
      eventCategory: 'Masterclass Registration Form - ' + masterclassTitle,
      eventAction: 'Form',
      eventLabel: 'Submit',
    })

    const eventId = crypto.randomUUID()
    Mixpanel.track.SignUp({
      distinct_id: email,
      $insert_id: eventId,
    })
    FBQ?.trackLead({ email, eventId })
    gtag('set', 'user_data', { email })

    const requestBody = {
      tags: [
        date === 'watch-now'
          ? `${masterclassTitle}-masterclass-watch-now`
          : `${masterclassTitle}-masterclass-watch-later`,
      ],
      firstName: name,
      email,
      listIds: [40],
      insertId: eventId,
      website: values.website,
      'g-recaptcha-response': captchaToken,
    }
    fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/register`, {
      method: 'POST',
      credentials: 'include',
      keepalive: true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    }).catch((error) => {
      console.error(error)
    })
    if (date !== 'watch-now') scheduleTagAndDateTime(email, webinarBookingDateTime)

    if (date === 'watch-now') router.push(`/masterclass/${masterclassTitle}/live`)
    else router.push(`/masterclass/${masterclassTitle}/thank-you`)
  }

  if (loading) return <Loader />

  return (
    <div className="w-full min-h-fit !rounded-b-lg shadow-xl">
      <div className="bg-[#8645EC] text-white rounded-t-lg px-6 py-4">
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
          {({ values, errors, touched, setFieldValue, isSubmitting }) => (
            <Form className={cx('w-full flex-col overflow-hidden', className)} id={id}>
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
                  onChange={(e) => {
                    let val = e.target.value.toString()
                    setFieldValue('date', val)
                    if (val === 'watch-now') setFieldValue('time', 'start-now')
                    else if (val === 'later-today') setFieldValue('time', '')
                  }}>
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
                    Select Time
                  </option>

                  <option disabled value="Select Time" className="text-gray-500">
                    Select Time
                  </option>

                  {values.date === 'watch-now' && <option value="start-now">Start Now</option>}

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

              <div aria-hidden="true" className="absolute left-[-9999px] h-0">
                <Input.Field
                  value={values.website}
                  autocomplete="off"
                  className="!p-2 !m-0 w-full"
                  label="Website"
                  name="website"
                  tabIndex={-1}
                />
              </div>

              <div className="flex justify-center my-4">
                <Captcha
                  onSuccess={onCaptchaSuccess}
                  onError={onCaptchaClear}
                  onExpired={onCaptchaClear}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !captchaToken}
                className="masterclass-yellow-cta"
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
    website: yup.string().optional(),
  })
  .defined()

export interface IMasterclassRegistrationFormSchema extends yup.InferType<
  typeof MasterclassRegistrationFormValidationSchema
> {}

const masterclassRegistrationFormInitialValues: IMasterclassRegistrationFormSchema =
  MasterclassRegistrationFormValidationSchema.cast({})
