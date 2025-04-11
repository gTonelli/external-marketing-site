'use client'

// core
import { useContext } from 'react'
// components
import { Card } from './Card/Card'
import { ButtonCheckout } from './Button/variants/ButtonCheckout'
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

interface IPricingPlanBenefit {
  text: string
  price: string
}
interface IPricingPlan {
  title: string
  currentPrice: number
  originalPrice: number
  isRecommended: boolean
  url: EExternalRoutes
  benefits: IPricingPlanBenefit[]
}

const pricingPlanbenefits: IPricingPlanBenefit[] = [
  { text: 'Daily Live Webinars and Q&As with Thais', price: '$1,200' },
  { text: 'Daily Support Groups with Trained Coaches', price: '$300' },
  { text: 'Unlimited Access to 65+ Courses & Programs', price: '$185' },
  { text: 'Interactive Workbooks and Exercises', price: '$1,550' },
  { text: 'Private Online Community Access', price: '$500' },
  { text: 'Mobile App', price: '$50' },
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
      <div className="relative w-full max-w-96 flex mx-auto lg:hidden">
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
                    'relative w-full flex flex-col items-center justify-center shadow-centered p-4 rounded-3xl overflow-hidden',
                    isRecommended && 'border-2 border-primary bg-primary-light/20'
                  )}>
                  {isRecommended && (
                    <div className="absolute top-4 left-36 py-1 px-12 rotate-45 bg-green-check text-center text-white text-sm font-bold w-full">
                      SAVE 50%
                    </div>
                  )}
                  <p className="text-md font-bold tracking-widest px-2 mb-2">{plan.title}</p>

                  <div className="mb-2">
                    <p className="line-through text-grey font-medium inline pr-2">
                      {`${formatPrice(plan.originalPrice)}`}
                    </p>

                    <p className="!text-3xl font-ssp font-bold text-purple-dark inline">
                      {`${formatPrice(plan.currentPrice)}`}
                    </p>

                    {index > 0 && <p className="font-medium inline pr-2">/month</p>}
                  </div>

                  <p className="text-green-check font-medium mb-4">
                    {`SAVE ${formatPrice(plan.originalPrice - plan.currentPrice)}`}
                  </p>

                  {/* ENROLL BTN */}
                  <ButtonCheckout
                    className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                    label="SELECT"
                    href={plan.url}
                  />

                  {/* BENEFITS */}
                  <div className="w-full mt-8">
                    {plan.benefits.map((benefit, benefitIndex) => (
                      <div
                        key={`pricingPlanBenefitMobile_${benefitIndex}`}
                        className={cx(
                          'w-full col-span-4 flex justify-between items-center rounded-full pl-5 py-3 pr-3',
                          benefitIndex & 1 && 'bg-primary-light/20'
                        )}>
                        <div className="flex pr-4">
                          <FontAwesomeIcon
                            className="!text-purple-dark mr-2 mt-1"
                            icon={faCircleCheck}
                            size="sm"
                          />

                          <p className="font-sspb text-sm">{benefit.text}</p>
                        </div>

                        <div className="text-purple-dark">
                          <strong>{benefit.price}</strong>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="w-full text-center text-base bg-purple-dark text-white rounded-lg p-2 mt-4">
                    <strong>Savings worth over $3,000</strong>
                  </div>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      {/* desktop ver */}
      <div className="hidden max-w-6xl  mx-auto py-8 px-4 md:my-12 lg:block lg:px-8">
        <section className="container shadow-centered rounded-2xl mx-auto p-6 overflow-visible">
          <div className="relative w-full grid grid-cols-6 grid-rows-7 gap-y-2 text-center place-items-center overflow-visible">
            <div className="h-fit flex col-span-2 place-self-start mt-4">
              <div className=" text-purple-dark text-2xl pl-4 ">
                <h2>Lifetime Access</h2>

                <h2>All-Access Pass</h2>

                <div className="w-fit text-base bg-purple-dark text-white rounded-lg p-2 mt-4">
                  <strong>Savings worth over $3,000</strong>
                </div>
              </div>
            </div>

            {/* one time payment */}
            <div className="col-start-4 row-start-1 mt-4 z-10">
              <p className="text-sm font-bold tracking-widest px-2 mb-2">
                ONE TIME
                <br />
                PAYMENT PLAN
              </p>

              <div className="mb-2">
                <p className="line-through text-grey font-medium inline pr-2">
                  {`${formatPrice(pricingPlan[0].originalPrice)}`}
                </p>

                <p className="!text-3xl font-ssp font-bold text-purple-dark inline">
                  {`${formatPrice(pricingPlan[0].currentPrice)}`}
                </p>
              </div>

              <p className="text-green-check font-medium mb-4">
                {`SAVE ${formatPrice(pricingPlan[0].originalPrice - pricingPlan[0].currentPrice)}`}
              </p>

              <ButtonCheckout
                className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                label="SELECT"
                href={EExternalRoutes.THINKIFIC_CHECKOUT_LIFETIME_UPFRONT}
              />
            </div>
            {/* 6 month payment */}
            <div className="col-start-5 row-start-1 mt-4">
              <p className="text-sm font-bold tracking-widest px-2 mb-2">
                6 MONTH
                <br />
                PAYMENT PLAN
              </p>

              <div className="mb-2">
                <p className="line-through text-grey font-medium inline pr-2">
                  {`${formatPrice(pricingPlan[1].originalPrice)}`}
                </p>

                <p className="!text-3xl font-ssp font-bold text-purple-dark inline">
                  {`${formatPrice(pricingPlan[1].currentPrice)}`}
                </p>

                <p className="font-medium inline pr-2">/month</p>
              </div>

              <p className="text-green-check font-medium mb-4">
                {`SAVE ${formatPrice(pricingPlan[1].originalPrice - pricingPlan[1].currentPrice)}`}
              </p>

              <ButtonCheckout
                className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                label="SELECT"
                href={EExternalRoutes.THINKIFIC_CHECKOUT_LIFETIME_6_MONTH_PLAN}
              />
            </div>
            {/* 12 month payment */}
            <div className="col-start-6 row-start-1 mt-4">
              <p className="text-sm font-bold tracking-widest px-2 mb-2">
                12 MONTH <br />
                PAYMENT PLAN
              </p>

              <div className="mb-2">
                <p className="line-through text-grey font-medium inline pr-2">
                  {`${formatPrice(pricingPlan[2].originalPrice)}`}
                </p>

                <p className="!text-3xl font-ssp font-bold text-purple-dark inline">
                  {`${formatPrice(pricingPlan[2].currentPrice)}`}
                </p>

                <p className="font-medium inline pr-2">/month</p>
              </div>

              <p className="text-green-check font-medium mb-4">
                {`SAVE ${formatPrice(pricingPlan[2].originalPrice - pricingPlan[2].currentPrice)}`}
              </p>

              <ButtonCheckout
                className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
                label="SELECT"
                href={EExternalRoutes.THINKIFIC_CHECKOUT_LIFETIME_12_MONTH_PLAN}
              />
            </div>

            {/* highlight */}
            <div className="absolute w-full h-[120%] -top-12 left-0 col-start-4 col-end-5 row-start-1 row-end-8 rounded-xl border-2 border-primary bg-primary/10 overflow-hidden z-5 before:absolute before:top-4 before:left-12 before:py-1 before:px-12 before:rotate-45 before:bg-green-check before:text-white before:text-sm before:font-bold before:w-full before:content-['SAVE_50%']"></div>

            <div className="col-span-2 row-start-2 place-self-start pl-4">
              <p className="text-black !font-sspb font-medium py-3">
                Daily Live Webinars and Q&As with Thais
              </p>
            </div>

            <div className="col-start-3 row-start-2 text-purple-dark font-bold">
              <p>$1,200</p>
            </div>

            <div className="col-start-4 row-start-2">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-2">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-6 row-start-2">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-span-2 row-start-3 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-4">
              <p className="text-black !font-sspb font-medium py-3">
                Daily Support Groups with Trained Coaches
              </p>
            </div>

            <div className="col-start-3 row-start-3 place-self-stretch font-bold flex justify-center items-center text-purple-dark bg-primary-light/20">
              <p>$300</p>
            </div>

            <div className="col-start-4 row-start-3 place-self-stretch flex justify-center items-center bg-primary-light/20">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-3 place-self-stretch flex justify-center items-center bg-primary-light/20">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-6 row-start-3 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-span-2 row-start-4 place-self-start pl-4">
              <p className="text-black text-left !font-sspb font-medium py-3">
                Unlimited Access to 65+ Courses & Programs
              </p>
            </div>

            <div className="col-start-3 row-start-4 text-purple-dark font-bold">
              <p>$185</p>
            </div>

            <div className="col-start-4 row-start-4">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-4">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-6 row-start-4">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-span-2 row-start-5 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-4">
              <p className="text-black !font-sspb font-medium py-3">
                Interactive Workbooks and Exercises
              </p>
            </div>

            <div className="col-start-3 row-start-5 place-self-stretch font-bold flex justify-center items-center text-purple-dark bg-primary-light/20">
              <p>$1,550</p>
            </div>

            <div className="col-start-4 row-start-5 place-self-stretch flex justify-center items-center bg-primary-light/20">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-5 place-self-stretch flex justify-center items-center bg-primary-light/20">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-6 row-start-5 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-span-2 row-start-6 place-self-start pl-4">
              <p className="text-black !font-sspb font-medium py-3">
                Private Online Community Access
              </p>
            </div>

            <div className="col-start-3 row-start-6 text-purple-dark font-bold">
              <p>$500</p>
            </div>

            <div className="col-start-4 row-start-6">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-6">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-6 row-start-6">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-span-2 row-start-7 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-4">
              <p className="text-black !font-sspb font-medium py-3">Mobile App</p>
            </div>

            <div className="col-start-3 row-start-7 place-self-stretch font-bold flex justify-center items-center text-purple-dark bg-primary-light/20">
              <p>$50</p>
            </div>

            <div className="col-start-4 row-start-7 place-self-stretch flex justify-center items-center bg-primary-light/20">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-7 place-self-stretch flex justify-center items-center bg-primary-light/20">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-6 row-start-7 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>
          </div>
        </section>
      </div>
    </section>
  )
}
