'use client'

import { useCallback, useEffect, useState } from 'react'
// components
import { Button } from '@/components/Button/Button'
import { Carousel } from '@/components/Carousel/Carousel'
import { CountdownTimer } from '@/components/CountDownTimer'
import { Tab, Tabs } from '@/components/Tabs'
import { Trustbar } from '@/components/Trustbar/Trustbar'
import { Video } from '@/components/Video/Video'
import { List } from '@/components/List'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
import { Page } from '@/components/Page'
import { Loader } from '@/components/Loader'
// config
import { LEARN_PAGE, SECONDARY_SALES_PAGE as SSP } from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faStar, faChevronsRight } from '@awesome.me/kit-545b942488/icons/classic/solid'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
//utils
import { externalRoutes, EWindowWidth } from '@/utils/constants'
import { getOfferEndDate } from '@/utils/functions'
import { TStyle } from '@/utils/types'

import 'swiper/css'
import 'swiper/css/navigation'

type TSidePanelTabs =
  | 'you_will_learn'
  | 'webinar'
  | 'dashboard'
  | 'course'
  | 'course_selection'
  | 'workbook'

const TABS = [
  {
    icon: `webinar-icon.png`,
    id: `webinar`,
    label: `Weekly Webinars`,
  },
  {
    icon: `dashboard-icon.png`,
    id: `dashboard`,
    label: `My Dashboard`,
  },
  {
    icon: `course-icon.png`,
    id: `course`,
    label: `Courses With Thais`,
  },
  {
    icon: `course-selection-icon.png`,
    id: `course_selection`,
    label: `View Course Selection`,
  },
  {
    icon: `workbook-icon.png`,
    id: `workbook`,
    label: `Workbooks and Quizzes`,
  },
]

const LEARN_TABS = [
  {
    icon: `workbook-icon.png`,
    id: `you_will_learn`,
    label: `You Will Learn`,
  },
  {
    icon: `dashboard-icon.png`,
    id: `dashboard`,
    label: `My Dashboard`,
  },
  {
    icon: `webinar-icon.png`,
    id: `webinar`,
    label: `Weekly Webinars`,
  },
  {
    icon: `course-icon.png`,
    id: `course`,
    label: `Courses With Thais`,
  },
  {
    icon: `course-selection-icon.png`,
    id: `course_selection`,
    label: `View Course Selection`,
  },
]
export interface ISSPPageParams {
  style: TStyle | undefined
}

export default function SecondarySalesPage() {
  //======================== Hooks ============================
  const page_name = `Learn - 30% OFF` as Pages

  //======================== State ============================
  const [selectedTab, setSelectedTab] = useState<TSidePanelTabs>('you_will_learn')
  const [offerEndDate, setOfferEndDate] = useState<Date | undefined>()
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    document.title = 'Learn'
    setOfferEndDate(getOfferEndDate(new Date(`2023-06-29T00:00:00`), 1))
    setIsDesktop(window.innerWidth >= EWindowWidth.lg)
  }, [])

  const onSelectTab = useCallback((tab: TSidePanelTabs) => {
    setSelectedTab(tab)
  }, [])

  //============================ Events ========================================
  const onGoToCheckout = (event: React.MouseEvent<Element, MouseEvent>) => {
    window.location.assign(externalRoutes.checkoutRegularSubscription)
  }

  // Dynamic title
  const title = 'Learn'
  // Dynamic course tab
  const feature_list = LEARN_TABS

  return (
    <Page page_name={page_name}>
      <div className="bg-black w-full z-65 left-0">
        {offerEndDate ? (
          <CountdownTimer date={offerEndDate} theme="dark" />
        ) : (
          <Loader className="!py-8 lg:py-10" classNameSpinner="text-white" />
        )}
      </div>

      <main className="w-full">
        {/* BANNER SECTION */}
        <section
          className="relative w-full bg-grey-7 z-10
                     lg:bg-gradient-to-r lg:from-grey-7 lg:to-[#BDD7D1]">
          <div
            className="relative max-w-screen-lg mx-auto
                       lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center">
            <div
              className="max-w-lg justify-self-start text-center mx-auto p-4 pt-8 xs:pt-12
                         lg:text-left lg:max-w-lg">
              <Text.Heading className="text-h2 mb-5 lg:text-left" content={SSP.BANNER.heading} />

              <Image className="w-1/2 mx-auto mb-4 lg:hidden" src="best-value-mockup.png" />

              <Text.Paragraph useMD className="mb-4" content={LEARN_PAGE.BANNER.subheading} />

              <Button
                className="bg-primary lg:hidden"
                label="ENROLL NOW"
                onClick={onGoToCheckout}
              />

              <Button
                className="hidden bg-primary lg:block"
                label="ENROLL NOW FOR 30% OFF"
                onClick={onGoToCheckout}
              />
            </div>

            <div
              className="hidden max-w-lg mx-auto
                         lg:block lg:-mb-32 2xl:-mb-36 lg:max-w-lg">
              <Image src="SecondarySalesPage/ssp-banner-mockup.png" />
            </div>
          </div>
        </section>

        <Image
          className="hidden w-full lg:block lg:relative lg:z-5"
          src="SecondarySalesPage/ssp-banner-bg.png"
        />

        <Image className="w-full lg:hidden" src="SecondarySalesPage/ssp-banner-bg.png" />
        {/* TRUSTBAR AND FEATURE SECTION */}
        <section className="relative w-full">
          <div
            className="relative max-w-screen-lg mx-auto pt-7
                          lg:pt-18 lg:pb-32">
            <Text.Paragraph
              className="text-center font-bold text-black"
              content="AS SEEN ON..."
              spacing="tracking-0.325"
            />

            {/* TRUST BAR */}
            <Trustbar.Slider />

            {/* FEATURE TABS */}
            <div className="max-w-screen-lg lg:pt-8">
              <Tabs<TSidePanelTabs>
                activeTab={selectedTab}
                className="lg:!border-0 lg:p-8 lg:pb-0 bg-gray-lightest !border-0 rounded-[30px] px-4 pb-0 lg:px-4"
                classNameNav="lg:grid lg:grid-cols-5 lg:scrollbar-hide"
                onChangeTab={onSelectTab}>
                {feature_list.map((obj, index) => (
                  <Tab
                    key={`tab_${index}`}
                    className="flex-center font-effra text-lg lg:w-full lg:border-b-[5px] lg:rounded-none lg:py-auto lg:px-0"
                    hasIcon={isDesktop}
                    iconName={`SecondarySalesPage/icon/${obj.icon}`}
                    id={obj.id}
                    isDesktop={isDesktop}
                    label={obj.label}>
                    <div className="p-10 lg:grid lg:grid-cols-2 lg:justify-items-center lg:pt-18 lg:pb-0 lg:px-0">
                      <div className="mx-auto max-w-4xl md:text-center lg:max-w-lg lg:text-left lg:mx-0">
                        <Text.Heading content={LEARN_PAGE.LEARN_FEATURES[index].heading} />

                        <Text.Paragraph
                          useMD
                          className="hidden text-primary mt-3 lg:block lg:text-xl"
                          content={LEARN_PAGE.LEARN_FEATURES[index].subheading}
                          spacing="tracking-0.325"
                        />

                        <Video.Thumbnail
                          hideVideoControlsOnPlay
                          playAuto
                          playInline
                          className="mt-3 md:mx-auto lg:hidden"
                          playButtonSize="none"
                          srcUrl={LEARN_PAGE.LEARN_FEATURES[index].videoURL}
                          style={{ maxWidth: '450px', borderRadius: '20px' }}
                        />

                        <Text.Paragraph
                          className="text-lg mt-7"
                          content={LEARN_PAGE.LEARN_FEATURES[index].copy}
                        />

                        <List
                          className="mt-2"
                          classNameIcon="!text-primary pl-2 mt-2"
                          classNameListItems="mt-1"
                          icon={faCircle}
                          iconSize="2xs"
                          listItems={LEARN_PAGE.LEARN_FEATURES[index].bullet}
                        />

                        <Button
                          className="block bg-primary mx-auto mt-6 mb-2 lg:mt-12 lg:ml-12"
                          label="SIGN UP NOW"
                          onClick={onGoToCheckout}
                        />

                        <Text.Paragraph
                          className="inline text-left line-through"
                          content="($97/month)"
                        />

                        <Text.Paragraph
                          className="inline text-left"
                          content={` $67/month. Cancel anytime.`}
                        />
                        <Text.Paragraph
                          className="text-left"
                          content=" Get 30% off for life. For a limited time only."
                        />
                      </div>
                      <div className="hidden max-w-lg lg:block">
                        <Video.Thumbnail
                          hideVideoControlsOnPlay
                          playAuto
                          playInline
                          playButtonSize="none"
                          srcUrl={LEARN_PAGE.LEARN_FEATURES[index].videoURL}
                          style={{ maxWidth: '450px', borderRadius: '20px' }}
                        />
                      </div>
                    </div>
                  </Tab>
                ))}
              </Tabs>
            </div>
          </div>
        </section>

        <Carousel.Courses
          headerTextDesktop="Unlock Instant Access to These Courses"
          headerTextMobile="Unlock Instant Access to These Courses"
        />

        {/* SKILL SECTION */}
        <section className="relative w-full">
          <div
            className="max-w-screen-lg text-center py-8 px-10 mx-auto 
                          lg:py-12 lg:px-0">
            <Text.Heading content={LEARN_PAGE.SKILL.heading} />
            <Text.Paragraph
              useMD
              className="text-primary font-bold mt-4 lg:hidden"
              content="AT YOUR OWN PACE, ANYTIME"
              spacing="tracking-0.325"
            />

            <Text.Paragraph
              useMD
              className="text-primary font-bold mt-4 hidden lg:block lg:text-xl"
              content={SSP.SKILL.subheading}
              spacing="tracking-0.325"
            />

            <div className="flex flex-col md:flex-row md:justify-evenly">
              <div className="flex justify-center items-center pt-4 md:pt-0">
                <Image className="" src="thais_headshot.png" />
              </div>
              <div className="w-full md:w-3/5">
                <Text.Paragraph
                  useMD
                  className="text-left mt-6 lg:mt-9"
                  content={LEARN_PAGE.SKILL.copy}
                />
              </div>
            </div>
            <div>
              <Button
                className="block bg-primary mx-auto mt-3 mb-2 lg:mt-8"
                label="CLAIM MY OFFER NOW"
                onClick={onGoToCheckout}
              />

              <div className="">
                <Text.Paragraph className="inline items-start line-through" content="($97/month)" />

                <Text.Paragraph
                  className="inline"
                  content={` $67/month. Limited Time Offer.
              Cancel Anytime.`}
                />
              </div>
            </div>
          </div>
        </section>
        {/* DISCOUNT SECTION */}
        <DiscountSection
          offerEndDate={offerEndDate}
          title={title}
          onGoToCheckout={onGoToCheckout}
        />
        {/* TESTIMONIAL SECTION */}
        <section className="relative w-full">
          <div
            className="max-w-screen-lg text-center mx-auto py-8 px-10 
                          lg:px-22 lg:py-18">
            <Text.Heading content="What Our Members Love about The Personal Development School:" />

            <Video.Large
              className="max-w-4xl mt-3 mx-auto lg:mt-9"
              srcUrl={SSP.TESTIMONIAL_URL}
              style={{ maxWidth: '845px', borderRadius: '20px' }}
              thumbnailUrl="SecondarySalesPage/testimonial-thumbnail.png"
              onClick={() =>
                Mixpanel.track.VideoStarted({
                  video_type: `testimonial - ${page_name}}`,
                  page_name: page_name,
                })
              }
            />

            <div className="text-left mt-8 lg:mt-14">
              {SSP.TESTIMONIALS.map((testimonial, index) => (
                <div key={`testimonial_${index}`}>
                  {/* RATINGS */}
                  <div className="space-x-1 py-4">
                    {Array(5)
                      .fill(1)
                      .map((_, ii: number) => (
                        <FontAwesomeIcon
                          key={`star_'${ii}`}
                          className="text-primary"
                          icon={faStar}
                        />
                      ))}
                  </div>

                  <Text.Paragraph content={testimonial} />
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* DISCOUNT SECTION */}
        <DiscountSection
          isBottomSection
          isSecondCTA
          offerEndDate={offerEndDate}
          title={title}
          onGoToCheckout={onGoToCheckout}
        />
      </main>
    </Page>
  )
}

interface IDiscountSectionProps {
  isBottomSection?: boolean
  offerEndDate: Date | undefined
  onGoToCheckout: any
  title: string
  isSecondCTA?: boolean
}

const DiscountSection = ({
  isBottomSection = false,
  offerEndDate,
  onGoToCheckout,
  title,
  isSecondCTA = false,
}: IDiscountSectionProps) => {
  return (
    <section
      className={`w-full relative bg-gradient-to-b from-white to-blue-lightest ${
        !isBottomSection && 'lg:rounded-br-[90px]'
      }`}>
      <div
        className="max-w-screen-lg text-center mx-auto px-10 pb-18 
                      lg:px-0 lg:pt-4 lg:pb-22">
        <Text.Heading content="Discount Offer Expires Soon. Claim Your All-Access Pass Now!" />

        {offerEndDate ? (
          <CountdownTimer date={offerEndDate} theme="light" />
        ) : (
          <Loader className="!py-8 lg:py-10" />
        )}

        <div
          className="relative bg-white border-primary border-[5px] rounded-[30px] mt-12 pt-12 
                        lg:mt-20 lg:px-18 lg:pt-18 lg:mt-18">
          <div className="absolute -top-8 inset-x-1/4 bg-gradient-to-r from-[#74B3C1] to-primary rounded-20 sm:inset-x-[35%]">
            <Text.Paragraph
              className="text-white font-bold p-3 xl:text-2xl lg:py-4 lg:px-5"
              content="BEST VALUE"
              spacing="tracking-0.325"
            />
          </div>
          <Text.Heading
            className="px-2 lg:px-0"
            content={
              isSecondCTA
                ? 'Our Courses Have a 99.7% Satisfaction Score From Our Students!'
                : 'Start Building Loving and Long-Lasting Relationships'
            }
          />

          <Text.Paragraph
            className="text-primary uppercase font-bold px-2 mt-3 lg:mt-4 lg:text-2xl"
            content={
              isSecondCTA
                ? `and offer a full 7-day money-back guarantee!`
                : `Enjoy unlimited courses, a supportive community, and weekly webinars with your All-Access Pass!`
            }
            spacing="tracking-0.325"
          />

          <div
            className={`flex col flex-center text-left py-8 px-5 -mt-0 lg:px-12 ${
              isBottomSection ? 'lg:pb-0' : 'lg:pb-16'
            } lg:row`}>
            <div
              className={`${
                isBottomSection ? 'text-center' : 'text-center max-w-lg lg:text-left'
              }`}>
              {isSecondCTA ? (
                <div className="text-left">
                  <Text.Paragraph content="Sign up today to instantly unlock:" />

                  <List
                    classNameListItems="my-4 lg:my-6"
                    icon={faChevronsRight}
                    listItems={LEARN_PAGE.DISCOUNT_SECTION_SECOND.bullets}
                  />

                  <Text.Paragraph
                    className="text-center"
                    content="Preview all of the courses in your All-Access Pass!"
                  />

                  <Text.Paragraph className="text-center" content="Time is running out!" />
                </div>
              ) : (
                <>
                  <Text
                    className="text-2xl font-bold"
                    content={LEARN_PAGE.DISCOUNT_SECTION.copy2}
                  />

                  <Text.Paragraph content={LEARN_PAGE.DISCOUNT_SECTION.copy} />

                  <List
                    classNameListItems="my-4 text-left lg:my-6"
                    icon={faChevronsRight}
                    listItems={LEARN_PAGE.DISCOUNT_SECTION.bullets}
                  />

                  <Text.Paragraph content={LEARN_PAGE.DISCOUNT_SECTION.copy3} />
                </>
              )}

              <Button
                className="bg-primary mx-auto mt-4 lg:mx-0"
                label="SIGN UP NOW"
                onClick={onGoToCheckout}
              />
              <div>
                {isSecondCTA ? (
                  <Text.Paragraph
                    className="w-full inline items-start text-center mt-4"
                    content="30% off FOR LIFE!"
                  />
                ) : (
                  <>
                    <Text.Paragraph className="mt-2 lg:pl-5" content="30% OFF FOR LIFE!" />
                    <Text.Paragraph
                      useMD
                      className="mt-2"
                      content={`7 day money-back guarantee. \nCancel anytime – no questions asked.`}
                    />
                  </>
                )}
              </div>

              {isBottomSection && (
                <div>
                  <Text.Paragraph className="inline text-left line-through" content="($97/month)" />

                  <Text.Paragraph
                    className="inline text-left mt-4 mb-11"
                    content=" $67.00 billed monthly, cancel anytime."
                  />
                </div>
              )}
            </div>

            {!isBottomSection && (
              <Image className="hidden w-1/2 lg:block" src="best-value-mockup.png" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
