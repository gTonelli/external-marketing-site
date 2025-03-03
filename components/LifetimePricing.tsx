'use client'

// core
import { useContext } from 'react'
// components
import { Card } from './Card/Card'
import { CheckoutButton } from './CheckoutButton'
import { faCircleCheck } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//libraries
import cx from 'classnames'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// utils
import { ViewportContext } from '@/utils/contexts'
import { EExternalRoutes, EWindowWidth } from '@/utils/constants'
import { formatPrice } from '@/utils/functions'
// styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

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

export const LifetimePricing = () => {
  const { windowWidth } = useContext(ViewportContext)

  return (
    <section id="pricing" className="w-full">
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
                  <p className="text-md font-bold tracking-widest px-2 mb-2">{plan.title}</p>

                  <div className="mb-2">
                    <p className="line-through text-grey font-medium inline pr-2">
                      {`${formatPrice(plan.originalPrice)}`}
                    </p>

                    <p className="!text-3xl !font-sspb font-medium text-purple-dark inline">
                      {`${formatPrice(plan.currentPrice)}`}
                    </p>

                    {index > 0 && <p className="font-medium inline pr-2">/month</p>}
                  </div>

                  <p className="text-green-check font-medium mb-4">
                    {`SAVE ${formatPrice(plan.originalPrice - plan.currentPrice)}`}
                  </p>

                  {/* ENROLL BTN */}
                  <CheckoutButton label="SELECT" href={plan.url} />

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

                        <p className="font-sspb text-sm">{benefit}</p>
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
                <h2>Lifetime Access</h2>

                <h2>All-Access Pass</h2>
              </div>
            </div>

            {/* one time payment */}
            <div className="col-start-3 row-start-1 ">
              <p className="text-md font-medium tracking-widest px-2 mb-2">ONE TIME PAYMENT PLAN</p>

              <div className="mb-2">
                <p className="line-through text-grey font-medium inline pr-2">
                  {`${formatPrice(pricingPlan[0].originalPrice)}`}
                </p>
                <p className="!text-3xl !font-sspb font-medium text-purple-dark inline">
                  {`${formatPrice(pricingPlan[0].currentPrice)}`}
                </p>
              </div>

              <p className="text-green-check font-medium mb-4">
                {`SAVE ${formatPrice(pricingPlan[0].originalPrice - pricingPlan[0].currentPrice)}`}
              </p>

              <CheckoutButton
                label="SELECT"
                href={EExternalRoutes.THINKIFIC_CHECKOUT_LIFETIME_UPFRONT}
              />
            </div>
            {/* 6 month payment */}
            <div className="col-start-4 row-start-1">
              <p className="text-md font-medium tracking-widest px-2 mb-2">6 MONTH PAYMENT PLAN</p>

              <div className="mb-2">
                <p className="line-through text-grey font-medium inline pr-2">
                  {`${formatPrice(pricingPlan[1].originalPrice)}`}
                </p>

                <p className="!text-3xl !font-sspb font-medium text-purple-dark inline">
                  {`${formatPrice(pricingPlan[1].currentPrice)}`}
                </p>

                <p className="font-medium inline pr-2">/month</p>
              </div>

              <p className="text-green-check font-medium mb-4">
                {`SAVE ${formatPrice(pricingPlan[1].originalPrice - pricingPlan[1].currentPrice)}`}
              </p>

              <CheckoutButton
                label="SELECT"
                href={EExternalRoutes.THINKIFIC_CHECKOUT_LIFETIME_6_MONTH_PLAN}
              />
            </div>
            {/* 12 month payment */}
            <div className="col-start-5 row-start-1">
              <p className="text-md font-medium tracking-widest px-2 mb-2">12 MONTH PAYMENT PLAN</p>

              <div className="mb-2">
                <p className="line-through text-grey font-medium inline pr-2">
                  {`${formatPrice(pricingPlan[2].originalPrice)}`}
                </p>

                <p className="!text-3xl !font-sspb font-medium text-purple-dark inline">
                  {`${formatPrice(pricingPlan[2].currentPrice)}`}
                </p>

                <p className="font-medium inline pr-2">/month</p>
              </div>

              <p className="text-green-check font-medium mb-4">
                {`SAVE ${formatPrice(pricingPlan[2].originalPrice - pricingPlan[2].currentPrice)}`}
              </p>

              <CheckoutButton
                label="SELECT"
                href={EExternalRoutes.THINKIFIC_CHECKOUT_LIFETIME_12_MONTH_PLAN}
              />
            </div>
            {/* Background highlight */}
            <div className="col-start-3 col-end-4 row-start-1 row-span-full row-end-8 -z-10 w-full h-full bg-primary-light/20 rounded-20 border-2 border-solid border-primary" />

            <div className="col-span-2 row-start-2 place-self-start pl-4">
              <p className="text-black !font-sspb font-medium py-3">On-Demand Course Video</p>
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
              <p className="text-black !font-sspb font-medium py-3">Interactive Workbooks</p>
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
              <p className="text-black !font-sspb font-medium py-3">Certificate Of Completion</p>
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
              <p className="text-black !font-sspb font-medium py-3">
                Live Weekly Webinars with Thais
              </p>
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
              <p className="text-black !font-sspb font-medium py-3">Access to 65+ Courses</p>
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
              <p className="text-black !font-sspb font-medium py-3">Private Discussion Forums</p>
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
  )
}
