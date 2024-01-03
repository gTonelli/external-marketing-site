'use client'

// core
import React, { useContext, useEffect, useRef, useState } from 'react'
// components
import { LIFETIME } from './config'
import { ViewportContext } from '@/utils/contexts'
import { Page } from '@/components/Page'
import { Text } from '@/components/Text/Text'
import { Button } from '@/components/Button/Button'
import { Image } from '@/components/Image'
import { CountdownTimer } from '@/components/CountDownTimer'
import { List } from '@/components/List'
import { Carousel } from '@/components/Carousel/Carousel'
import { Card } from '@/components/Card/Card'
import { Icon } from '@/components/Icon'
import { Video } from '@/components/Video/Video'
import { Loader } from '@/components/Loader'
//library
import cx from 'classnames'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
// utils
import { EExternalRoutes, EWindowWidth } from '@/utils/constants'
import { formatPrice, getOfferEndDate } from '@/utils/functions'

import 'swiper/css'
import 'swiper/css/pagination'

interface IPricingPlan {
  title: string
  currentPrice: number
  originalPrice: number
  isRecommended: boolean
  url: EExternalRoutes
  benefits: string[]
}

const pricingPlanbenefits: string[] = [
  'All 65+ Courses',
  'Interactive Workbooks',
  'Certificate of Completion',
  'Weekly Webinars',
  'Community Social Events',
  'Private Discussion Forums',
]

const pricingPlan: IPricingPlan[] = [
  {
    title: 'ONE TIME PAYMENT',
    currentPrice: 1799,
    originalPrice: 2399,
    isRecommended: true,
    url: EExternalRoutes.THINKIFIC_CHECKOUT_LIFETIME_UPFRONT,
    benefits: pricingPlanbenefits,
  },
  {
    title: '6 MONTH PAYMENT PLAN',
    currentPrice: 339,
    originalPrice: 449,
    isRecommended: false,
    url: EExternalRoutes.THINKIFIC_CHECKOUT_LIFETIME_6_MONTH_PLAN,
    benefits: pricingPlanbenefits,
  },
  {
    title: '12 MONTH PAYMENT PLAN',
    currentPrice: 179,
    originalPrice: 239,
    isRecommended: false,
    url: EExternalRoutes.THINKIFIC_CHECKOUT_LIFETIME_12_MONTH_PLAN,
    benefits: pricingPlanbenefits,
  },
]

export default function LifeTimePage() {
  const page_name = `Lifetime` as Pages
  // ==================== Context ====================
  const { windowWidth } = useContext(ViewportContext)

  // ==================== Hook ====================
  const pricingTableRef = useRef<null | HTMLDivElement>(null)

  // ==================== State ====================
  const [offerEndDate, setOfferEndDate] = useState<Date | undefined>()

  useEffect(() => {
    setOfferEndDate(getOfferEndDate(new Date(`2023-06-29T00:00:00`), 1))
  }, [])

  // Mixpanel Button Clicks
  const onGoToCheckout = (event: React.MouseEvent<HTMLButtonElement>, link: EExternalRoutes) => {
    Mixpanel.track.ButtonClicked({
      button_label: event.currentTarget.innerText,
      page_name: page_name,
    })

    window.location.assign(link)
  }

  const onClickPurchase = () => {
    if (pricingTableRef.current) pricingTableRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Page page_name="Lifetime">
      {/* COUNT DOWN TIMER SECTION */}
      <section className="w-full bg-black">
        <div className="py-4">
          {offerEndDate ? (
            <CountdownTimer date={offerEndDate} theme="dark" />
          ) : (
            <Loader className="!py-8 lg:py-10" classNameSpinner="text-white" />
          )}
        </div>
      </section>

      {/* HERO SECTION */}
      <section className="w-full bg-blue-lightest">
        <div className="max-w-5xl mx-auto pt-8 pb-4 md:pt-8 md:pb-0">
          <div className="flex flex-col items-center text-center md:pt-4">
            <Text.Paragraph
              className="max-w-md font-bold uppercase text-black mx-auto"
              content={LIFETIME.HERO_SECTION.subheader}
              spacing="tracking-0.325"
            />

            <Text.Heading
              className="max-w-3xl font-bold font-sspb text-4xl text-purple-dark pt-4"
              content={LIFETIME.HERO_SECTION.header}
            />

            <Text.Paragraph
              className="text-green-check font-bold mt-4 md:mt-6"
              content={LIFETIME.HERO_SECTION.promo_text}
            />

            <div className="mx-auto mt-4 md:mt-8">
              <Button
                className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                label="ENROLL NOW AND SAVE"
                onClick={onClickPurchase}
              />
            </div>
          </div>
        </div>
      </section>
      <Image alt="" className="w-full" src="styled-wave-green.png" />

      {/* SITUATIONS SECTION */}
      <section className="w-full">
        <Text.Heading
          className="text-center pt-8"
          content={LIFETIME.SITUATION_SECTION.header}
          size={3}
        />

        <div className="max-w-6xl flex flex-col mx-auto my-4 px-4 md:flex-row md:items-center md:items-top md:px-8 md:my-8">
          {/* LEFT COL  */}
          <div className="max-w-sm flex justify-center mt-4 mx-auto md:w-1/2 md:mt-0 md:pr-4">
            <Image alt="" className="" src="LifeTimePage/lifetime_situation.jpg" />
          </div>

          {/* RIGHT COL */}
          <div className="flex flex-col justify-center mt-4 md:w-1/2 md:mt-0 md:pl-2">
            <List
              className="flex flex-col items-start py-4"
              classNameIcon="!text-black !pt-[10px] pr-2"
              classNameListItems="text-left text-black !leading-6 pt-4"
              iconName="circle-small"
              iconSize="xs"
              iconType="solid"
              listItems={LIFETIME.SITUATION_SECTION.bullets}
            />
          </div>
        </div>
      </section>

      {/* IMAGINE SECTION */}
      <Image alt="" className="w-full" src="LifeTimePage/purple-wave.png" />
      <section className="w-full bg-primary-light-50">
        <div className="max-w-6xl flex flex-col mx-auto pb-4 px-4 md:flex-row md:items-center md:items-top md:px-8 md:pb-8">
          {/* LEFT COL  */}
          <div className="flex flex-col justify-center mt-4 md:w-1/2 md:mt-0 md:pr-4">
            <Text.Heading
              className="text-center md:text-left"
              content={LIFETIME.IMAGINE_SECTION.header}
              size={3}
            />

            <List
              className="flex flex-col items-start py-4"
              classNameIcon="!text-black !pt-[10px] pr-2"
              classNameListItems="text-left text-black !leading-6 pt-4"
              iconName="circle-small"
              iconSize="xs"
              iconType="solid"
              listItems={LIFETIME.IMAGINE_SECTION.bullets}
            />
          </div>

          {/* RIGHT COL */}
          <div className="max-w-sm flex justify-center mt-4 mx-auto md:w-1/2 md:mt-0 md:pl-2">
            <Image alt="" className="" src="LifeTimePage/woman-headshot.png" />
          </div>
        </div>
      </section>

      {/* FEATURE SECTION */}
      <section className="w-full">
        <div className="max-w-6xl  mx-auto my-8 px-4 md:my-12 lg:px-8">
          <div className="grid gridcols-1 justify-items-center sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-none">
            {LIFETIME.FEATURE_SECTION.bullets.map((bullet, index) => (
              <div
                key={`attachment_program_section_bullet${index}`}
                className="max-w-[400px] flex flex-col items-center py-2 lg:py-8 px-6">
                <Image className="w-auto h-[150px]" src={`LifeTimePage/${bullet.img}`} />

                <Text.Paragraph className="font-bold text-left h-full mt-8" content={bullet.text} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ATTACHMENT PROGRAM SECTION */}
      <section className="w-full bg-black-secondary text-white">
        <div className="max-w-6xl flex flex-col items-center text-center mx-auto pt-12 px-4 md:px-8 md:pt-16">
          <Image alt="mock-up" src="LifeTimePage/lifetime_mock_up.png" />

          <Text.Heading className="mt-8" content={LIFETIME.UNLOCK_SECTION.header} />

          <div className="mx-auto mt-8">
            <List
              className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 gap-x-12 md:gap-y-8"
              classNameIcon="!text-green-check pt-[4px] pr-2"
              classNameListItems="text-left !text-lg !leading-6 pb-4 md:pb-0"
              iconName="circle-check"
              iconType="regular"
              listItems={LIFETIME.UNLOCK_SECTION.bullets}
            />
          </div>
        </div>
      </section>

      <Image alt="" className="w-full" src="LifeTimePage/black-wave.png" />
      {/* ATTACHMENT PROGRAM SECTION PART 2 */}
      <section className="w-full">
        <div className="max-w-6xl flex flex-col items-center text-center mx-auto py-12 px-4 md:flex-row md:px-8 md:py-16">
          <Text.Paragraph
            className="w-full text-left md:w-1/2"
            content={LIFETIME.UNLOCK_SECTION.text}
          />

          <div className="w-9/12 mt-4 md:w-1/2 md:mt-0">
            <Image alt="" className="w-full" src="LifeTimePage/lifetime-thais.jpg" />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <Carousel.Testimonial
        className="lg:mt-12"
        classNameHeader="px-2"
        headingText="What Our Students Are Saying"
      />

      {/* MEMBERSHIP_SECTION */}
      <section className="w-full bg-blue-lightest">
        <div className="max-w-5xl mx-auto py-8 md:py-16">
          <div className="flex flex-col items-center text-center">
            <Text.Heading
              className="max-w-5xl font-sspb text-4xl text-purple-dark"
              content={LIFETIME.MEMBERSHIP_SECTION.header}
            />

            <Text.Paragraph
              useMD
              className="max-w-xl font-bold text-black mx-auto py-8 px-4"
              content={LIFETIME.MEMBERSHIP_SECTION.text}
            />

            <div className="mx-auto mt-4 md:mt-8">
              <Button
                className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                label="ENROLL NOW AND SAVE"
                onClick={onClickPurchase}
              />
            </div>
          </div>
        </div>
      </section>

      {/* LEVEL-UP_SECTION */}
      <section className="w-full">
        <div className="max-w-6xl  mx-auto my-8 px-4 md:my-12 lg:px-8">
          <Text.Heading className="text-center" content={LIFETIME.LEVEL_SECTION.header} />
          <div className="grid gridcols-1 justify-items-center pt-8 md:grid-cols-3 md:grid-rows-none">
            {LIFETIME.LEVEL_SECTION.bullets.map((bullet, index) => (
              <div
                key={`attachment_program_section_bullet${index}`}
                className="max-w-[400px] flex flex-col items-center py-2 lg:py-8 px-6">
                <Image className="w-auto max-h-[125px]" src={`LifeTimePage/${bullet.img}`} />

                <Text.Paragraph className="text-center h-full mt-8" content={bullet.text} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section ref={pricingTableRef} className="w-full">
        {/* mobile ver */}
        <div className="relative w-full max-w-[400px] flex mx-auto lg:hidden">
          <Swiper
            autoplay={{ delay: 6000 }}
            className="!pb-14"
            initialSlide={pricingPlan.findIndex((i) => i.isRecommended)}
            modules={[Navigation, Pagination]}
            pagination={{
              clickable: true,
              renderBullet: (_, className) =>
                '<div class="!w-2 !h-2 !bg-primary rounded-full ' + className + '"/></div>',
            }}
            slidesPerView={
              windowWidth <= EWindowWidth.lg ? 1 : 4 // </section>: windowWidth <= EWindowWidth.xl ? 4 : 3
            }
            spaceBetween={20}>
            {pricingPlan.map((plan, index) => {
              const isRecommended = plan.isRecommended

              return (
                <SwiperSlide
                  key={`popularCourse_${index}`}
                  className="flex justify-evenly mx-auto px-3 pt-4  xs:px-5">
                  <Card
                    className={cx(
                      'w-full flex flex-col items-center justify-center shadow-centered px-2 py-12 xs:px-8',
                      isRecommended && 'border-2 border-primary bg-primary-light/20'
                    )}>
                    <Text.Paragraph
                      useMD
                      className="text-md font-bold tracking-widest px-2 mb-2"
                      content={plan.title}
                    />

                    <div className="mb-2">
                      <Text.Paragraph
                        className="line-through text-grey font-medium inline pr-2"
                        content={`${formatPrice(plan.originalPrice)}`}
                      />

                      <Text.Paragraph
                        className="!text-3xl !font-sspb font-medium text-purple-dark inline"
                        content={`${formatPrice(plan.currentPrice)}`}
                      />

                      {index > 0 && (
                        <Text.Paragraph className="font-medium inline pr-2" content="/month" />
                      )}
                    </div>

                    <Text.Paragraph
                      className="text-green-check font-medium mb-4"
                      content={`SAVE ${formatPrice(plan.originalPrice - plan.currentPrice)}`}
                    />

                    {/* ENROLL BTN */}
                    <Button
                      className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                      label="SELECT"
                      onClick={(e) => onGoToCheckout(e, plan.url)}
                    />

                    {/* BENEFITS */}
                    <div className="w-full flex flex-col px-4 mt-8">
                      {plan.benefits.map((benefit, benefitIndex) => (
                        <div
                          key={`pricingPlanBenefitMobile_${benefitIndex}`}
                          className={cx(
                            'w-full flex justify-start items-center rounded-full pl-5 py-3 pr-3',
                            benefitIndex % 2 !== 0 && 'bg-primary-light/20'
                          )}>
                          <Icon
                            className="text-green-500 mr-2"
                            name="circle-check"
                            size="lg"
                            type="regular"
                          />

                          <Text className="font-sspb text-sm" content={benefit} />
                        </div>
                      ))}
                    </div>
                  </Card>
                </SwiperSlide>
              )
            })}
          </Swiper>
        </div>
        {/* desktop ver */}
        <div className="hidden max-w-6xl  mx-auto py-8 px-4 md:my-12 lg:block lg:px-8">
          <section className="container shadow-centered rounded-2xl mx-auto p-6 overflow-x-auto">
            <div className="w-full grid grid-cols-5 grid-rows-7 gap-y-1 text-center place-items-center">
              <div className="h-[250px] flex col-span-2 place-self-start items-center">
                <div className=" text-purple-dark text-2xl pl-4 ">
                  <Text.Heading useMD content="Lifetime Access" />

                  <Text.Heading useMD content="All-Access Pass" />
                </div>
              </div>

              {/* one time payment */}
              <div className="col-start-3 row-start-1 ">
                <Text.Paragraph
                  useMD
                  className="text-md font-medium tracking-widest px-2 mb-2"
                  content={`ONE TIME\n PAYMENT PLAN`}
                />

                <div className="mb-2">
                  <Text.Paragraph
                    className="line-through text-grey font-medium inline pr-2"
                    content={`${formatPrice(pricingPlan[0].originalPrice)}`}
                  />
                  <Text.Paragraph
                    className="!text-3xl !font-sspb font-medium text-purple-dark inline"
                    content={`${formatPrice(pricingPlan[0].currentPrice)}`}
                  />
                </div>

                <Text.Paragraph
                  className="text-green-check font-medium mb-4"
                  content={`SAVE ${formatPrice(
                    pricingPlan[0].originalPrice - pricingPlan[0].currentPrice
                  )}`}
                />

                <Button
                  className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                  label="SELECT"
                  onClick={(e) =>
                    onGoToCheckout(e, EExternalRoutes.THINKIFIC_CHECKOUT_LIFETIME_UPFRONT)
                  }
                />
              </div>
              {/* 6 month payment */}
              <div className="col-start-4 row-start-1">
                <Text.Paragraph
                  useMD
                  className="text-md font-medium tracking-widest px-2 mb-2"
                  content={`6 MONTH\n PAYMENT PLAN`}
                />

                <div className="mb-2">
                  <Text.Paragraph
                    className="line-through text-grey font-medium inline pr-2"
                    content={`${formatPrice(pricingPlan[1].originalPrice)}`}
                  />

                  <Text.Paragraph
                    className="!text-3xl !font-sspb font-medium text-purple-dark inline"
                    content={`${formatPrice(pricingPlan[1].currentPrice)}`}
                  />

                  <Text.Paragraph className="font-medium inline pr-2" content="/month" />
                </div>

                <Text.Paragraph
                  className="text-green-check font-medium mb-4"
                  content={`SAVE ${formatPrice(
                    pricingPlan[1].originalPrice - pricingPlan[1].currentPrice
                  )}`}
                />

                <Button
                  className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                  label="SELECT"
                  onClick={(e) =>
                    onGoToCheckout(e, EExternalRoutes.THINKIFIC_CHECKOUT_LIFETIME_6_MONTH_PLAN)
                  }
                />
              </div>
              {/* 12 month payment */}
              <div className="col-start-5 row-start-1">
                <Text.Paragraph
                  useMD
                  className="text-md font-medium tracking-widest px-2 mb-2"
                  content={`12 MONTH\n PAYMENT PLAN`}
                />

                <div className="mb-2">
                  <Text.Paragraph
                    className="line-through text-grey font-medium inline pr-2"
                    content={`${formatPrice(pricingPlan[2].originalPrice)}`}
                  />

                  <Text.Paragraph
                    className="!text-3xl !font-sspb font-medium text-purple-dark inline"
                    content={`${formatPrice(pricingPlan[2].currentPrice)}`}
                  />

                  <Text.Paragraph className="font-medium inline pr-2" content="/month" />
                </div>

                <Text.Paragraph
                  className="text-green-check font-medium mb-4"
                  content={`SAVE ${formatPrice(
                    pricingPlan[2].originalPrice - pricingPlan[2].currentPrice
                  )}`}
                />

                <Button
                  className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                  label="SELECT"
                  onClick={(e) =>
                    onGoToCheckout(e, EExternalRoutes.THINKIFIC_CHECKOUT_LIFETIME_12_MONTH_PLAN)
                  }
                />
              </div>
              {/* Background highlight */}
              <div className="col-start-3 col-end-4 row-start-1 row-span-full row-end-8 -z-10 w-full h-full bg-primary-light/20 rounded-20 border-2 border-solid border-primary" />

              <div className="col-span-2 row-start-2 place-self-start pl-4">
                <Text.Paragraph
                  className="text-black !font-sspb font-medium py-3 "
                  content="On-Demand Course Video"
                />
              </div>

              <div className="col-start-3 row-start-2">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-start-4 row-start-2">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-start-5 row-start-2">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-span-2 row-start-3 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-4">
                <Text.Paragraph
                  className="text-black !font-sspb font-medium py-3 "
                  content="Interactive Workbooks"
                />
              </div>

              <div className="col-start-3 row-start-3 place-self-stretch flex justify-center items-center bg-primary-light/20">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-start-4 row-start-3 place-self-stretch flex justify-center items-center bg-primary-light/20">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-start-5 row-start-3 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-span-2 row-start-4 place-self-start pl-4">
                <Text.Paragraph
                  className="text-black !font-sspb font-medium py-3 "
                  content="Certificate Of Completion"
                />
              </div>

              <div className="col-start-3 row-start-4">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-start-4 row-start-4">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-start-5 row-start-4">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-span-2 row-start-5 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-4">
                <Text.Paragraph
                  className="text-black !font-sspb font-medium py-3 "
                  content="Live Weekly Webinars with Thais"
                />
              </div>

              <div className="col-start-3 row-start-5 place-self-stretch flex justify-center items-center bg-primary-light/20">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-start-4 row-start-5 place-self-stretch flex justify-center items-center bg-primary-light/20">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-start-5 row-start-5 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-span-2 row-start-6 place-self-start pl-4">
                <Text.Paragraph
                  className="text-black !font-sspb font-medium py-3 "
                  content="Access to 65+ Courses"
                />
              </div>

              <div className="col-start-3 row-start-6">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-start-4 row-start-6">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-start-5 row-start-6">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-span-2 row-start-7 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-4">
                <Text.Paragraph
                  className="text-black !font-sspb font-medium py-3 "
                  content="Private Discussion Forums"
                />
              </div>

              <div className="col-start-3 row-start-7 place-self-stretch flex justify-center items-center bg-primary-light/20">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-start-4 row-start-7 place-self-stretch flex justify-center items-center bg-primary-light/20">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>

              <div className="col-start-5 row-start-7 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
                <Icon className="text-green-check" name="circle-check" type="regular" />
              </div>
            </div>
          </section>
        </div>
      </section>

      {/* POPULAR COURSE SECTION */}
      <section className="w-full">
        <div className="max-w-4xl mx-auto">
          <Carousel.PopularCourses
            className="lg:!px-0 xl:!px-0"
            classNameHeading="text-primary !text-h3"
            classNameSubheading="max-w-[800px] mx-auto !mb-8"
            heading="Our Most Popular Courses"
            subheading="Courses range from: Repairing Any Relationship, Communicating in Relationships, Overcoming Anxiety for Peace of Mind, Beating Procrastination and Setting Goals, Skyrocketing Your Self-Esteem and more!"
          />
        </div>
      </section>

      {/* SECTION VIDEO PLAYER */}
      <section className="w-full flex-center flex-col px-4 my-16">
        <Text.Heading
          className="font-effra font-medium mb-9 lg:mb-10"
          content="GET A SNEAK PEEK"
          size={4}
          spacing="tracking-0.325"
        />

        <Video.Youtube
          className="shadow-centered rounded-20 max-w-none"
          maxHeight={512}
          playButtonSize="medium"
          thumbnail="course-emotional-mastery.jpg"
          videoId="1_GbEDgwgqE"
        />
      </section>

      {/* EXPLORE COURSE SECTION */}
      <section className="w-full flex flex-col items-center justify-center px-4 py-8 pb-24">
        <Text.Heading className="mb-8" content={LIFETIME.COURSE_BENEFITS_SECTION.header} />

        <Text.Paragraph className="mb-8" content={LIFETIME.COURSE_BENEFITS_SECTION.subheader} />

        <div className="flex flex-col lg:flex-row">
          <div
            className="w-full max-w-[400px] flex flex-col self-center space-y-4 mb-5 
                lg:items-start lg:mr-20 lg:mb-0">
            {LIFETIME.COURSE_BENEFITS_SECTION.bullets.map((benefit, index) => (
              <div key={`lifetime_explore_course_benefit_${index}`} className="flex space-x-4">
                <Icon className="text-primary pt-1" name="circle-check" size="md" type="regular" />

                <Text content={benefit} />
              </div>
            ))}
          </div>

          <div className="flex-center flex-col">
            <Image className="mb-8 lg:mb-10" src="LifeTimePage/lifetime_page_explore.png" />

            <Button
              className="bg-gradient-to-b from-purple-medium to-purple-dark border-noGne drop-shadow-lg hover:!text-white"
              label="GET LIFETIME ACCESS"
              onClick={onClickPurchase}
            />
          </div>
        </div>
      </section>
    </Page>
  )
}
