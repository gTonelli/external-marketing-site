'use client'

// core
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Button } from '@/components/Button/Button'
import { CountdownTimer } from '@/components/CountDownTimer'
import { List } from '@/components/List'
import { Carousel } from '@/components/Carousel/Carousel'
import { Card } from '@/components/Card/Card'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { faCircleSmall } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//libraries
import cx from 'classnames'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// config
import { LIFETIME } from './config'
// utils
import { EExternalRoutes, EWindowWidth } from '@/utils/constants'
import { formatPrice } from '@/utils/functions'

import 'swiper/css'
import 'swiper/css/pagination'
import { Section } from '@/components/Section'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { CarouselTestimonial } from '@/components/Carousel/variants/CarouselTestimonial'

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
  return (
    <Page page_name="Lifetime">
      {/* COUNT DOWN TIMER SECTION */}
      <section className="w-full bg-black">
        <div className="py-4">
          <CountdownTimer date={new Date(`2023-06-29T00:00:00`)} theme="dark" />
        </div>
      </section>

      {/* HERO SECTION */}
      <Section className="max-w-full bg-blue-lightest">
        <p className="max-w-md font-bold uppercase tracking-33 text-black mx-auto">
          {LIFETIME.HERO_SECTION.subheader}
        </p>

        <h1 className="max-w-3xl font-bold text-purple-dark pt-4">
          {LIFETIME.HERO_SECTION.header}
        </h1>

        <p className="text-green-check font-bold mt-4 md:mt-6">
          {LIFETIME.HERO_SECTION.promo_text}
        </p>

        <div className="mx-auto mt-4 md:mt-8">
          <ButtonScroll
            className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
            label="ENROLL NOW AND SAVE"
            target="pricing"
          />
        </div>
      </Section>

      <Image
        alt="green wave"
        className="w-full"
        src="styled-wave-green.png"
        width={1700}
        height={90}
      />

      {/* SITUATIONS SECTION */}
      <Section>
        <h2 className="text-center pt-8">{LIFETIME.SITUATION_SECTION.header}</h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="max-w-sm flex justify-center mt-4 mx-auto md:w-1/2 md:mt-0 md:pr-4">
            <Image
              alt="an upset couple"
              src="/images/LifeTimePage/lifetime_situation.jpg"
              width={462}
              height={380}
            />
          </div>

          <div className="flex flex-col justify-center mt-4 md:w-1/2 md:mt-0 md:pl-2">
            <List
              iconSize="xs"
              icon={faCircleSmall}
              className="flex flex-col items-start py-4"
              classNameIcon="!text-black !pt-[10px] pr-2"
              classNameListItems="text-left text-black !leading-6 pt-4"
              listItems={LIFETIME.SITUATION_SECTION.bullets}
            />
          </div>
        </div>
      </Section>

      {/* IMAGINE SECTION */}
      <Image
        alt="purple"
        className="w-full"
        src="/images/LifeTimePage/purple-wave.png"
        width={1440}
        height={205}
      />

      <Section
        className="max-w-full bg-primary-light-50"
        classNameInner="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <h2 className="text-center md:text-left">{LIFETIME.IMAGINE_SECTION.header}</h2>

          <List
            icon={faCircleSmall}
            iconSize="xs"
            className="flex flex-col items-start py-4"
            classNameIcon="!text-black !pt-[10px] pr-2"
            classNameListItems="text-left text-black !leading-6 pt-4"
            listItems={LIFETIME.IMAGINE_SECTION.bullets}
          />
        </div>

        <div>
          <Image
            alt="a confident woman"
            src="/images/LifeTimePage/woman-headshot.png"
            width={462}
            height={592}
          />
        </div>
      </Section>

      {/* FEATURE SECTION */}
      <Section>
        <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 sm:grid-rows-2 lg:grid-cols-4 lg:grid-rows-none">
          {LIFETIME.FEATURE_SECTION.bullets.map((bullet, index) => (
            <div
              key={`attachment_program_section_bullet${index}`}
              className="max-w-[400px] flex flex-col items-center py-2 lg:py-8 px-6">
              <Image
                alt="vector icon"
                className="w-auto h-[150px]"
                src={`/images/LifeTimePage/${bullet.img}`}
                width={150}
                height={150}
              />

              <p className="font-bold text-left h-full mt-8">{bullet.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ATTACHMENT PROGRAM SECTION */}
      <section className="w-full bg-black-secondary text-white">
        <div className="max-w-6xl flex flex-col items-center text-center mx-auto pt-12 px-4 md:px-8 md:pt-16">
          <Image
            alt="PDS courses mockup"
            src="LifeTimePage/lifetime_mock_up.png"
            width={506}
            height={229}
          />

          <h2 className="mt-8">{LIFETIME.UNLOCK_SECTION.header}</h2>

          <div className="mx-auto mt-8">
            <List
              icon={faCircleCheck}
              className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 gap-x-12 md:gap-y-8"
              classNameIcon="!text-green-check pt-[4px] pr-2"
              classNameListItems="text-left !text-lg !leading-6 pb-4 md:pb-0"
              listItems={LIFETIME.UNLOCK_SECTION.bullets}
            />
          </div>
        </div>
      </section>

      <Image
        alt="black wave"
        className="w-full"
        src="/images/LifeTimePage/black-wave.png"
        width={1440}
        height={102}
      />

      {/* ATTACHMENT PROGRAM SECTION PART 2 */}
      <section className="w-full">
        <div className="max-w-6xl flex flex-col items-center text-center mx-auto py-12 px-4 md:flex-row md:px-8 md:py-16">
          <p className="w-full text-left md:w-1/2">{LIFETIME.UNLOCK_SECTION.text}</p>

          <div className="w-9/12 mt-4 md:w-1/2 md:mt-0">
            <Image
              alt="Thais and PDS product"
              className="w-full"
              src="/images/LifeTimePage/lifetime-thais.jpg"
              width={481}
              height={568}
            />
          </div>
        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <CarouselTestimonial
        className="lg:mt-12"
        classNameHeader="px-2"
        headingText="What Our Students Are Saying"
      />

      {/* MEMBERSHIP_SECTION */}
      <section className="w-full bg-blue-lightest">
        <div className="max-w-5xl mx-auto py-8 md:py-16">
          <div className="flex flex-col items-center text-center">
            <h2
              className="max-w-5xl font-sspb text-4xl text-purple-dark"
              content={LIFETIME.MEMBERSHIP_SECTION.header}
            />

            <Text.Paragraph
              useMD
              className="max-w-xl font-bold text-black mx-auto py-8 px-4"
              content={LIFETIME.MEMBERSHIP_SECTION.text}
            />

            <div className="mx-auto mt-4 md:mt-8">
              <ButtonScroll
                className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                label="ENROLL NOW AND SAVE"
                target="pricing"
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
            className="!overflow-hidden !pb-14"
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
                          <FontAwesomeIcon
                            className="text-green-500 mr-2"
                            icon={faCircleCheck}
                            size="lg"
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
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-start-4 row-start-2">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-start-5 row-start-2">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-span-2 row-start-3 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-4">
                <Text.Paragraph
                  className="text-black !font-sspb font-medium py-3 "
                  content="Interactive Workbooks"
                />
              </div>

              <div className="col-start-3 row-start-3 place-self-stretch flex justify-center items-center bg-primary-light/20">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-start-4 row-start-3 place-self-stretch flex justify-center items-center bg-primary-light/20">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-start-5 row-start-3 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-span-2 row-start-4 place-self-start pl-4">
                <Text.Paragraph
                  className="text-black !font-sspb font-medium py-3 "
                  content="Certificate Of Completion"
                />
              </div>

              <div className="col-start-3 row-start-4">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-start-4 row-start-4">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-start-5 row-start-4">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-span-2 row-start-5 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-4">
                <Text.Paragraph
                  className="text-black !font-sspb font-medium py-3 "
                  content="Live Weekly Webinars with Thais"
                />
              </div>

              <div className="col-start-3 row-start-5 place-self-stretch flex justify-center items-center bg-primary-light/20">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-start-4 row-start-5 place-self-stretch flex justify-center items-center bg-primary-light/20">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-start-5 row-start-5 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-span-2 row-start-6 place-self-start pl-4">
                <Text.Paragraph
                  className="text-black !font-sspb font-medium py-3 "
                  content="Access to 65+ Courses"
                />
              </div>

              <div className="col-start-3 row-start-6">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-start-4 row-start-6">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-start-5 row-start-6">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-span-2 row-start-7 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-4">
                <Text.Paragraph
                  className="text-black !font-sspb font-medium py-3 "
                  content="Private Discussion Forums"
                />
              </div>

              <div className="col-start-3 row-start-7 place-self-stretch flex justify-center items-center bg-primary-light/20">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-start-4 row-start-7 place-self-stretch flex justify-center items-center bg-primary-light/20">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
              </div>

              <div className="col-start-5 row-start-7 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
                <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
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

        <VideoThumbnail
          thumbnailUrl="course-emotional-mastery.jpg"
          thumbnailAlt="emotional mastery thumbanil"
          srcUrl="https://storage.googleapis.com/pds_videos/Emotional_mastery_trailer.mp4"
          type="testimonial"
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
                <FontAwesomeIcon className="text-primary pt-1" icon={faCircleCheck} />

                <Text content={benefit} />
              </div>
            ))}
          </div>

          <div className="flex-center flex-col">
            <Image className="mb-8 lg:mb-10" src="LifeTimePage/lifetime_page_explore.png" />

            <ButtonScroll
              className="bg-gradient-to-b from-purple-medium to-purple-dark border-noGne drop-shadow-lg hover:!text-white"
              label="GET LIFETIME ACCESS"
              target="pricing"
            />
          </div>
        </div>
      </section>
    </Page>
  )
}
