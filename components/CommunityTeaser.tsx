'use client'

import Mixpanel from '@/modules/Mixpanel'
import { EExternalRoutes } from '@/utils/constants'
import { FormikHelpers, Formik, Form } from 'formik'
import { Input } from './Input/Input'
import { IDefaultProps } from '.'
import { Button } from './Button/Button'
import { Icon } from './Icon'
import { Image } from './Image'
import { Text } from './Text/Text'
import { TRIAL_HEADSPACE as TH } from '@/app/(default-layout)/dream-life/config'
import * as yup from 'yup'
import cx from 'classnames'

interface ICommunityTeaserProps {
  includePaymentOptions?: boolean
  onOptionSelected?: (option: string, checked: boolean) => void
}

export const CommunityTeaser = ({
  includePaymentOptions = true,
  onOptionSelected,
}: ICommunityTeaserProps) => {
  return (
    <>
      <Image className="w-full mt-10 -mb-1 lg:mt-0" src="TrialHeadspace/community-bg.png" />
      <section className="w-full bg-black px-4 py-20">
        <div className="max-w-5xl text-center text-white mx-auto">
          <Text.Heading className="max-w-xl mx-auto" content={TH.COMMUNITY.heading} size={1} />

          <div className="flex row justify-between space-x-4 mt-12 overflow-x-auto scrollbar-hide lg:mt-15">
            {TH.COMMUNITY.cards.map((card, index) => (
              <div
                key={`card_${index}`}
                className="min-w-52 bg-white rounded-[30px] px-8 py-4 lg:w-60 lg:py-10 lg:px-9">
                <div className="min-w-28 min-h-20 mx-auto">
                  <Image className="w-16 h-16 mx-auto" src={`TrialHeadspace/${card.img}`} />
                </div>

                <Text.Heading className="text-black mt-3" content={card.stat} />

                <Text.Paragraph className="text-[#7B7B7B] mt-6" content={card.copy} />
              </div>
            ))}
          </div>

          <div className="mt-12 lg:mt-[70px]">
            <Text.Heading
              className="text-center lg:text-left"
              content={TH.COMMUNITY.bullets.heading}
              size={1}
            />

            <div className="flex flex-col space-y-11 text-left mt-10 md:space-x-10 md:space-y-0 md:flex-row md:mt-20">
              <div>
                <div className="flex row items-center space-x-6 lg:space-x-10">
                  <Icon name="check" size="2x" />

                  <Text.Paragraph className="text-lg" content={TH.COMMUNITY.bullets.bullet1} />
                </div>

                <div className="flex row items-center space-x-6 mt-11 lg:space-x-10 lg:mt-14">
                  <Icon name="check" size="2x" />

                  <Text.Paragraph className="text-lg" content={TH.COMMUNITY.bullets.bullet2} />
                </div>
              </div>

              <div>
                <div className="flex row items-center space-x-6 lg:space-x-10">
                  <Icon name="check" size="2x" />

                  <Text.Paragraph className="text-lg" content={TH.COMMUNITY.bullets.bullet3} />
                </div>

                <div className="flex row items-center space-x-6 mt-11 lg:space-x-10 lg:mt-14">
                  <Icon name="check" size="2x" />

                  <Text.Paragraph className="text-lg" content={TH.COMMUNITY.bullets.bullet4} />
                </div>
              </div>
            </div>
          </div>

          {includePaymentOptions && onOptionSelected && (
            <div className="mt-24">
              <PaymentOptions placement="bottom" onOptionSelected={onOptionSelected} />
            </div>
          )}
        </div>
      </section>
    </>
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
