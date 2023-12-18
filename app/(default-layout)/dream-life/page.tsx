'use client'

// core
import { useState } from 'react'
//components
import { Button } from '@/components/Button/Button'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
import { TestimonialSection } from '@/components/TestimonialSection'
import { Page } from '@/components/Page'
import { Input } from '@/components/Input/Input'
import { IDefaultProps } from '@/components'
import { Video } from '@/components/Video/Video'
// config
import { TRIAL_HEADSPACE as TH } from './config'
// libraries
import cx from 'classnames'
import { Form, Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { Articles } from '@/components/Articles'
import { CommunityTeaser } from '@/components/CommunityTeaser'
// utils
import { EExternalRoutes } from '@/utils/constants'

type ArticleKey = keyof typeof TH.ARTICLES

export default function DreamLifePage() {
  const page_name = '7 Day Free Trial Headspace'

  // ==================== State ====================
  const [selectedOption, setSelectedOption] = useState({ option1: true, option2: false })

  const onGoToCheckout = (event: React.MouseEvent<Element, MouseEvent>) => {
    Mixpanel.track.ButtonClicked({
      button_label: (event.target as HTMLButtonElement).innerText,
      page_name: page_name,
      redirection: selectedOption.option1 ? '7-day-trial' : '14-day-trial',
    })

    window.location.assign(
      selectedOption.option1
        ? EExternalRoutes.THINKIFIC_CHECKOUT_7_DAY_TRIAL
        : EExternalRoutes.THINKIFIC_CHECKOUT_14_DAY_TRIAL_QUARTERLY
    )
  }

  const onOptionSelected = (option: string, checked: boolean) => {
    setSelectedOption((prev) => ({
      ...prev,
      [option]: checked,
    }))
  }

  return (
    <Page className="relative w-full overflow-hidden" page_name="7 Day Free Trial Headspace">
      {/**HERO SECTION */}
      <section className="w-full text-center bg-[#DEEAEA] pt-6 pb-10 px-4 lg:pt-22 lg:pb-0">
        <Image
          className="w-full mx-auto sm:w-3/4 md:w-1/2 lg:hidden"
          src="TrialHeadspace/hero-left-mockup.png"
        />

        <Text.Heading
          className="max-w-[304px] !text-h1 leading-[50px] mx-auto"
          content={TH.HERO.heading}
        />

        <div className="relative mt-8 lg:mt-12">
          <PaymentOptions
            className="lg:flex-col"
            placement="top"
            onOptionSelected={onOptionSelected}
          />
        </div>
      </section>

      <Image
        className="hidden absolute w-1/2 top-20 lg:-left-56 lg:block xl:w-1/3 xl:-left-32 2xl:-left-44"
        src="TrialHeadspace/hero-left-mockup.png"
      />

      <Image
        className="hidden absolute w-1/2 lg:-right-56 top-20 lg:block xl:w-1/3 xl:-right-32"
        src="TrialHeadspace/hero-right-mockup.png"
      />

      <Image className="w-full" src="TrialHeadspace/hero-bg.png" />

      {/** DREAMLIFE SECTION  */}
      <section className="pt-4 lg:pt-0">
        <div className="max-w-5xl mx-4 lg:mx-auto">
          {TH.DREAM_LIFE.benefits.map((benefit, index) => (
            <div
              key={`benefits_${index}`}
              className="flex row items-center space-x-4 mb-1 mx-auto md:justify-center lg:justify-start lg:space-x-14 lg:mb-12">
              <Image className="w-[150px] h-[150px]" src={`TrialHeadspace/${benefit.image}`} />

              <div className="flex flex-col space-y-1 lg:flex-row lg:space-x-20">
                <Text.Heading className="lg:w-56" content={benefit.title} size={3} />

                <Text.Paragraph
                  className="text-sm md:w-64 lg:w-72 lg:text-base"
                  content={benefit.copy}
                />
              </div>
            </div>
          ))}

          <div className="flex flex-col items-center space-y-14 mx-4 mt-20 md:text-center lg:flex-row lg:space-x-20 lg:space-y-0 lg:text-left">
            <div>
              <Text.Heading content={TH.DREAM_LIFE.heading} />

              <Text.Paragraph className="mt-6 lg:mt-11" content={TH.DREAM_LIFE.copy} />

              <Button
                className="mt-8 px-6 lg:mt-11"
                label="TRY FOR FREE"
                onClick={onGoToCheckout}
              />
            </div>

            <Image className="md:w-1/2" src="TrialHeadspace/dreamlife-mockup.jpg" />
          </div>
        </div>
      </section>

      {/**TESTIMONIAL*/}
      <section className="max-w-4xl mx-auto px-4 pt-9 lg:pt-[102px]">
        <TestimonialSection />

        <div className="text-center">
          <Text.Heading className="mt-14 lg:mt-22" content="Take a Moment For Yourself" size={1} />

          <Text.Paragraph
            className="mt-4"
            content="Explore some snippets of our most popular courses from each of the categories below!"
          />

          <Button
            className="text-black bg-blue mt-8"
            label="TRY FOR FREE"
            onClick={onGoToCheckout}
          />
        </div>
      </section>

      <Video.Teaser />

      <Articles />

      <CommunityTeaser onOptionSelected={onOptionSelected} />
    </Page>
  )
}

interface IPaymentOptionsProps extends IDefaultProps {
  placement?: string
  onOptionSelected: (option: string, checked: boolean) => void
}

export const PaymentOptions = ({
  className,
  placement = 'top',
  onOptionSelected,
}: IPaymentOptionsProps) => {
  const onSubmit = (values: any, formikHelpers: FormikHelpers<any>) => {
    formikHelpers.setSubmitting(false)

    Mixpanel.track.ButtonClicked({
      button_label: 'TRY FOR FREE',
      page_name: '7 Day Free Trial Headspace',
      redirection: values.option1 ? '7-day-trial' : '14-day-trial',
    })

    window.location.assign(
      values.option1
        ? EExternalRoutes.THINKIFIC_CHECKOUT_7_DAY_TRIAL
        : EExternalRoutes.THINKIFIC_CHECKOUT_14_DAY_TRIAL_QUARTERLY
    )
  }

  return (
    <Formik
      initialValues={headspaceFormInitialValues}
      validationSchema={HeadspaceFormValidationSchema}
      onSubmit={onSubmit}>
      {({ values, setFieldValue }) => {
        return (
          <Form>
            <div
              className={cx(
                `flex flex-col space-y-4 lg:flex-row lg:justify-between items-center`,
                className
              )}>
              {TH.HERO.offers.map((offer, index) => (
                <label
                  key={`offer_${index}`}
                  className={`relative max-w-[474px] flex row items-center space-x-5 ${
                    // @ts-ignore
                    values[`option${index + 1}`] ? 'text-white bg-primary' : 'text-black bg-white'
                  } rounded-[30px] cursor-pointer p-6 lg:px-7 lg:pt-7 lg:pb-5`}
                  htmlFor={`option_${placement}_${index + 1}`}>
                  {index == 0 && (
                    <Text.Paragraph
                      className="absolute -top-5 font-bold text-black bg-blue rounded-10 py-2 px-4"
                      content="BEST VALUE"
                    />
                  )}

                  <div className="text-left">
                    <Text.Paragraph
                      className="font-bold"
                      content={offer.type}
                      spacing="tracking-0.325"
                    />

                    <Text.Heading className="mt-3" content={offer.title} />

                    <Text.Paragraph
                      className={`max-w-[336px] !text-sm mt-4 lg:block ${
                        placement === 'bottom' && 'hidden lg:block'
                      }`}
                      content={offer.copy}
                    />
                  </div>

                  <Input.Checkbox
                    classNameInput={`!w-7 !h-7 lg:!w-10 lg:!h-10 ${
                      // @ts-ignore
                      values[`option${index + 1}`] ? '!bg-black' : '!bg-white'
                    }`}
                    name={`option_${placement}_${index + 1}`}
                    // @ts-ignore
                    value={values[`option${index + 1}`]}
                    onChange={() => {
                      for (let i = 1; i <= TH.HERO.offers.length; i++) {
                        setFieldValue(`option${i}`, false)
                        onOptionSelected(`option${i}`, false)
                      }
                      setFieldValue(`option${index + 1}`, true)
                      onOptionSelected(`option${index + 1}`, true)
                    }}
                  />
                </label>
              ))}
            </div>

            <Button.Submit
              className="w-44 !font-bold border-none mt-4 lg:mt-10"
              label="TRY FOR FREE"
            />
          </Form>
        )
      }}
    </Formik>
  )
}

const HeadspaceFormValidationSchema = yup
  .object()
  .shape({
    option1: yup.bool().default(true),
    option2: yup.bool().default(false),
  })
  .defined()

const headspaceFormInitialValues = HeadspaceFormValidationSchema.cast({})
