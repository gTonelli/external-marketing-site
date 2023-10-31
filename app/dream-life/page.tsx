'use client'

// core
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
//components
import { Button } from '@/components/Button/Button'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
import { TestimonialSection } from '@/components/TestimonialSection'
import { Page } from '@/components/Page'
import { Storage } from '@/modules/Storage'
import { List } from '@/components/List'
import { Icon } from '@/components/Icon'
import { Input } from '@/components/Input/Input'
import { IDefaultProps } from '@/components'
import { Video } from '@/components/Video/Video'
import { TRIAL_HEADSPACE as TH } from './config'
//libraries
import cx from 'classnames'
import { Form, Formik, FormikHelpers } from 'formik'
import * as yup from 'yup'
//modules
import { EExternalRoutes, ERoutes } from '@/utils/constants'
import Mixpanel from '@/modules/Mixpanel'

type ArticleKey = keyof typeof TH.ARTICLES

export default function DreamLifePage() {
  const [isVariant, setIsVariant] = useState<boolean>(false)

  useEffect(() => {
    let _isVariant = Storage.get('gm-755-headspace-split') === 'yes'
    if (Storage.get('gm-755-headspace-split') === null) {
      _isVariant = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.5
      Storage.set('gm-755-headspace-split', isVariant ? 'yes' : 'no')
      Mixpanel.track.ExperimentStarted({
        'Experiment name': 'GM-755-headspace-split',
        'Variant name': isVariant ? 'Variant 1' : 'Control',
      })
    }
    setIsVariant(_isVariant)
  }, [])

  const page_name = '7 Day Free Trial Headspace'
  // ==================== Hooks ====================
  const router = useRouter()
  // ==================== State ====================
  const [selectedOption, setSelectedOption] = useState({ option1: true, option2: false })
  const [videoIndex, setVideoIndex] = useState(0)

  const onGoToBlog = (blog: ArticleKey) => {
    Mixpanel.track.ButtonClicked({
      button_label: TH.ARTICLES[blog].name,
      page_name: page_name,
    })

    router.push(TH.ARTICLES[blog].url)
  }

  const onGoToCheckout = (event: React.MouseEvent<Element, MouseEvent>) => {
    Mixpanel.track.ButtonClicked({
      button_label: (event.target as HTMLButtonElement).innerText,
      page_name: page_name,
      redirection: selectedOption.option1 ? '7-day-trial' : '14-day-trial',
    })

    router.push(
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
            isVariant={isVariant}
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

              <Text.Paragraph
                className="mt-6 lg:mt-11"
                content={isVariant ? TH.DREAM_LIFE.copyVariant : TH.DREAM_LIFE.copy}
              />

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

      {isVariant && (
        <section className="flex flex-col items-center mt-16 px-4">
          <Text.Heading
            className="text-center capitalize mb-8"
            content="What's included in your membership:"
          />

          <div className="flex justify-center items-center my-4 mb-10">
            <List
              classNameIcon="w-fit !text-green-check"
              classNameListItems="mb-2"
              iconName="circle-check"
              iconType="regular"
              listItems={TH.HERO.benefits}
            />
          </div>

          <Text.Paragraph className="max-w-[540px] mb-8 mx-auto" content={TH.HERO.joinProgram} />

          <Button className="mb-8 px-6 py-4" label="JOIN TODAY FOR FREE" onClick={onGoToCheckout} />
        </section>
      )}

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

      {/**VIDEO SECTION*/}
      <section className="w-full pt-14 lg:pt-28">
        <div className="max-w-5xl bg-pale-pink text-center mx-auto px-4 py-16 lg:rounded-20 lg:px-36 lg:py-[68px]">
          <div className="-mt-[88px] lg:-mt-24">
            <div className="flex row justify-center space-x-1 lg:space-x-9">
              {TH.VIDEO_CATEGORIES.map((category, index) => (
                <div
                  key={`category_${index}]`}
                  className={`${
                    videoIndex === index ? 'bg-black' : 'bg-primary'
                  } text-white rounded-10 cursor-pointer px-2 py-2 lg:w-[204px] lg:py-4`}
                  onClick={() => setVideoIndex(index)}>
                  <Text.Paragraph
                    className="font-bold !text-[12px] lg:text-base"
                    content={category.name}
                  />
                </div>
              ))}
            </div>
          </div>

          <Text.Paragraph
            className="max-w-[430px] mx-auto mt-10"
            content="Learn to communicate more effectively, connect deeply, and repair any relationship in a matter of weeks."
          />

          <Video.Thumbnail
            playAuto
            playInline
            className="mt-5 lg:mx-auto lg:mt-10"
            classNameVideo="object-fit"
            playButtonSize="none"
            srcUrl={TH.VIDEO_CATEGORIES[videoIndex].url}
            style={{ maxWidth: '100%', height: 'auto' }}
          />
        </div>
      </section>

      {/**ARTICLE SECTION */}
      <section className="relative w-full pt-5 lg:pt-14">
        <Image
          className="hidden absolute top-5 lg:block 2xl:left-60"
          src="TrialHeadspace/eclipse-left.png"
        />

        <Image
          className="hidden absolute top-80 right-0 -z-10 lg:block 2xl:right-48"
          src="TrialHeadspace/eclipse-right.png"
        />

        <div className="max-w-5xl mx-auto px-4">
          <Text.Heading
            className="!text-h1 text-center mt-10 lg:text-right lg:mt-0"
            content="Latest Articles"
            size={1}
          />

          <div className="mt-5 lg:mt-14">
            <div className="flex flex-col items-center space-y-5 md:justify-center md:space-x-5 md:space-y-0 md:flex-row">
              <div className="relative">
                <Image className="lg:hidden" src="TrialHeadspace/article-mockup-mobile-1.png" />

                <Image className="hidden lg:block" src="TrialHeadspace/article-mockup-1.png" />

                <div
                  className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-[15px] cursor-pointer mx-auto px-6 py-7
                                lg:-translate-x-0 lg:left-5 lg:px-5 lg:pt-6 lg:pb-4"
                  onClick={() => onGoToBlog('article1')}>
                  <Text.Paragraph
                    className="!w-56 text-[#7b7b7b]"
                    content={TH.ARTICLES.article1.name}
                  />

                  <Icon
                    className="text-white bg-primary rounded-full mt-2 p-2 lg:mt-4"
                    name="long-arrow-alt-right"
                  />
                </div>
              </div>

              <div className="relative">
                <Image className="lg:hidden" src="TrialHeadspace/article-mockup-mobile-2.png" />

                <Image className="hidden lg:block" src="TrialHeadspace/article-mockup-2.png" />

                <div
                  className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-[15px] cursor-pointer px-6 py-7 
                                lg:-translate-x-0 lg:left-5 lg:px-5 lg:pt-6 lg:pb-4"
                  onClick={() => onGoToBlog('article2')}>
                  <Text.Paragraph
                    className="!w-56 text-[#7b7b7b]"
                    content={TH.ARTICLES.article2.name}
                  />

                  <Icon
                    className="text-white bg-primary rounded-full mt-2 p-2 lg:mt-4"
                    name="long-arrow-alt-right"
                  />
                </div>
              </div>
            </div>

            <div
              className="flex row items-center justify-between border-primary border-b-[5px] cursor-pointer mx-4 py-7 lg:pt-8"
              onClick={() => onGoToBlog('article3')}>
              <div className="flex row items-center justify-between space-x-5 lg:space-x-20">
                <Text.Paragraph
                  className="w-40 font-bold !text-lg lg:w-64"
                  content={TH.ARTICLES.article3.name}
                />

                <Icon name="long-arrow-alt-right" size="lg" />
              </div>

              <Image className="lg:hidden" src="TrialHeadspace/article-mockup-mobile-3.png" />

              <Image className="hidden lg:block" src="TrialHeadspace/article-mockup-3.png" />
            </div>

            <div
              className="flex row items-center justify-between border-[#DEEAEA] border-b-[5px] cursor-pointer mx-4 py-7 lg:pt-8"
              onClick={() => onGoToBlog('article4')}>
              <div className="flex row items-center justify-between space-x-5 lg:space-x-20">
                <Text.Paragraph
                  className="w-40 font-bold !text-lg lg:w-64"
                  content={TH.ARTICLES.article4.name}
                />

                <Icon name="long-arrow-alt-right" size="lg" />
              </div>

              <Image className="lg:hidden" src="TrialHeadspace/article-mockup-mobile-4.png" />

              <Image className="hidden lg:block" src="TrialHeadspace/article-mockup-4.png" />
            </div>

            <div
              className="flex row items-center justify-between border-primary border-b-[5px] cursor-pointer mx-4 py-7 lg:pt-8"
              onClick={() => onGoToBlog('article5')}>
              <div className="flex row items-center justify-between space-x-5 lg:space-x-20">
                <Text.Paragraph
                  className="w-40 font-bold !text-lg lg:w-64"
                  content={TH.ARTICLES.article5.name}
                />

                <Icon name="long-arrow-alt-right" size="lg" />
              </div>

              <Image className="lg:hidden" src="TrialHeadspace/article-mockup-mobile-5.png" />

              <Image className="hidden lg:block" src="TrialHeadspace/article-mockup-5.png" />
            </div>

            <div
              className="flex row items-center justify-between border-[#DEEAEA] border-b-[5px] cursor-pointer mx-4 py-7 lg:pt-8"
              onClick={() => onGoToBlog('article6')}>
              <div className="flex row items-center justify-between space-x-5 lg:space-x-20">
                <Text.Paragraph
                  className="w-40 font-bold !text-lg lg:w-64"
                  content={TH.ARTICLES.article6.name}
                />

                <Icon name="long-arrow-alt-right" size="lg" />
              </div>

              <Image className="lg:hidden" src="TrialHeadspace/article-mockup-mobile-6.png" />

              <Image className="hidden lg:block" src="TrialHeadspace/article-mockup-6.png" />
            </div>
          </div>
        </div>
      </section>

      {/**LIFE ADVICE SECTION */}
      <section className="w-full pt-14 px-4">
        <div className="max-w-5xl text-center mx-auto">
          <Text.Heading
            className="max-w-3xl mx-auto"
            content="Life Advice for Any Relationship, Experience, or Goal"
            size={1}
          />

          <div className="flex flex-col items-center justify-between mt-12 lg:flex-row">
            <div className="lg:text-left">
              <Text.Heading content="Attachment Styles" size={3} />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article3.name}
                onClick={() => onGoToBlog('article3')}
              />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article1.name}
                onClick={() => onGoToBlog('article1')}
              />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article6.name}
                onClick={() => onGoToBlog('article6')}
              />

              <Text.Heading className="mt-12 lg:mt-14" content="Emotional Wellness" size={3} />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article4.name}
                onClick={() => onGoToBlog('article4')}
              />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article5.name}
                onClick={() => onGoToBlog('article5')}
              />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article2.name}
                onClick={() => onGoToBlog('article2')}
              />
            </div>

            <Image className="hidden lg:block" src="TrialHeadspace/life-advice-mockup.png" />
          </div>
        </div>
      </section>

      {/**COMMUNITY SECTION*/}
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

          <div className="mt-24">
            <PaymentOptions
              isVariant={isVariant}
              placement="bottom"
              onOptionSelected={onOptionSelected}
            />
          </div>
        </div>
      </section>
    </Page>
  )
}

interface IPaymentOptionsProps extends IDefaultProps {
  isVariant?: boolean
  placement?: string
  onOptionSelected: (option: string, checked: boolean) => void
}

const PaymentOptions = ({
  className,
  isVariant,
  placement = 'top',
  onOptionSelected,
}: IPaymentOptionsProps) => {
  // ==================== Hooks ====================
  const router = useRouter()

  const onSubmit = (values: any, formikHelpers: FormikHelpers<any>) => {
    formikHelpers.setSubmitting(false)

    Mixpanel.track.ButtonClicked({
      button_label: 'TRY FOR FREE',
      page_name: '7 Day Free Trial Headspace',
      redirection: values.option1 ? '7-day-trial' : '14-day-trial',
    })

    router.push(
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
                        !isVariant && placement === 'bottom' && 'hidden lg:block'
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

            {!isVariant && placement == 'bottom' && (
              <Text.Paragraph
                className="max-w-sm mt-4 mx-auto"
                content={values.option1 ? TH.HERO.copy7day : TH.HERO.copy14day}
              />
            )}

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
