'use client'

// core
import { useContext, useState } from 'react'
import Image from 'next/image'
// components
import { Card } from '@/components/Card/Card'
import { Button } from '@/components/Button/Button'
import { Dialog } from '@/components/Dialog/Dialog'
import { IATPriceCard } from '@/components/IATPriceCard/IATPriceCard'
import { faCircleCheck, faXmarkCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
//libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
// utils
import { ViewportContext } from '@/utils/contexts'
import { externalRoutes, EWindowWidth } from '@/utils/constants'
import { formatPrice } from '@/utils/functions'
// config
import { IAT_COPY as IAT } from '@/app/(default-layout)/iat/config'
// pricing data
import { iatLivePrices, iatRecordedPrices } from './IATPriceCardSection'
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
  url: string
  benefits: IPricingPlanBenefit[]
}

const pricingPlanbenefits: IPricingPlanBenefit[] = [
  { text: 'Certification', price: '$2,000' },
  {
    text: 'Weekly live group practice sessions with supervised feedback from Thais',
    price: '$1,000',
  },
  {
    text: 'Weekly live Q&A time to gain extra support and get your questions answered',
    price: '$1000',
  },
  { text: '12 Weeks of video content that teaches mastery of every tool', price: '$2,200' },
  {
    text: 'Materials to use in your business, including worksheets, workbooks and intake forms',
    price: '$500',
  },
  {
    text: 'Training on how to launch your coaching business and build systems that drive clients into your practice',
    price: '$500',
  },
  {
    text: 'Business skills that will allow you to continuously expand and evolve',
    price: '$300',
  },
  { text: 'Live Q&A With Thais', price: '$1500' },
]

const pricingPlan: IPricingPlan[] = [
  {
    title: 'LIVE TRAINING',
    currentPrice: 3499,
    originalPrice: 7000,
    isRecommended: true,
    url: externalRoutes.checkoutIATLiveUpfront,
    benefits: pricingPlanbenefits,
  },
  {
    title: 'ON-DEMAND',
    currentPrice: 1999,
    originalPrice: 4000,
    isRecommended: false,
    url: externalRoutes.checkoutIATRecordedUpfront,
    benefits: pricingPlanbenefits,
  },
]

export const IATPricingTable = () => {
  const { windowWidth } = useContext(ViewportContext)

  // Modal state
  const [isLiveModalOpen, setIsLiveModalOpen] = useState(false)
  const [isRecordedModalOpen, setIsRecordedModalOpen] = useState(false)

  return (
    <section id="click-purchase-target" className="w-full">
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
                  {/* badge for sale */}
                  {isRecommended && (
                    <div className="absolute top-4 left-28 w-full text-sm font-bold text-white text-center bg-green-check rotate-45 py-1 px-12 xxs:top-4 xxs:left-36">
                      SAVE 60%
                    </div>
                  )}

                  {isRecommended ? (
                    <Image
                      alt="Live Icon Red"
                      className="mx-auto h-12"
                      src="/images/IATPage/live-icon-red.png"
                      width={120}
                      height={43}
                    />
                  ) : (
                    <Image
                      alt="Recorded Icon Red"
                      className="w-fit h-12 mx-auto"
                      src="/images/IATPage/recorded-icon-red.png"
                      width={120}
                      height={43}
                    />
                  )}
                  <p className="text-md font-bold tracking-widest px-2 mb-2">{plan.title}</p>

                  <div className="mb-2">
                    <p className="line-through text-grey font-medium inline pr-2">
                      {`${formatPrice(plan.originalPrice)}`}
                    </p>

                    <p className="!text-3xl font-ssp font-bold text-primary inline">
                      {`${formatPrice(plan.currentPrice)}`}
                    </p>
                  </div>

                  <p className="text-green-check font-medium mb-4">
                    {`SAVE ${formatPrice(plan.originalPrice - plan.currentPrice)}`}
                  </p>

                  {/* ENROLL BTN */}
                  <Button
                    label="VIEW PLANS"
                    onClick={() =>
                      isRecommended ? setIsLiveModalOpen(true) : setIsRecordedModalOpen(true)
                    }
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
                        <div className="flex items-center pr-4">
                          {[1, 2, 7].includes(benefitIndex) && !isRecommended ? (
                            <FontAwesomeIcon className="text-danger pr-2" icon={faXmarkCircle} />
                          ) : (
                            <FontAwesomeIcon
                              className="text-green-check  pr-2"
                              icon={faCircleCheck}
                            />
                          )}
                          <p className="font-sspb text-left text-sm m-0">{benefit.text}</p>
                        </div>

                        <div className="text-primary">
                          <strong>{benefit.price}</strong>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="w-full text-center text-base bg-primary text-white rounded-lg p-2 mt-4">
                    <strong>Savings Valued At Over $3,500</strong>
                  </div>
                </Card>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      {/* desktop ver */}
      <div className="hidden max-w-7xl  mx-auto py-8 px-4 md:my-12 lg:block lg:px-8">
        <section className="container shadow-centered rounded-2xl mx-auto p-6 overflow-visible">
          <div className="relative w-full grid grid-cols-5 grid-rows-9 gap-y-2 text-center place-items-center overflow-visible">
            <div className="h-fit flex col-span-2 place-self-start mt-4">
              <div className=" text-primary text-2xl pl-4 ">
                <h2>Integrated Attachment</h2>

                <h2>
                  Theory<sup>TM</sup> Certification
                </h2>

                <div className="w-fit text-base bg-primary text-white rounded-lg p-2 mt-4">
                  <strong>Savings Valued At Over $3,500</strong>
                </div>
              </div>
            </div>

            {/* live training */}
            <div className="col-start-4 row-start-1 mt-4 z-10">
              <Image
                alt="Live Icon Red"
                className="w-fit h-6 mx-auto"
                src="/images/IATPage/live-icon-red.png"
                width={120}
                height={43}
              />

              <p className="font-bold tracking-widest px-2 my-2">LIVE TRAINING</p>

              <div className="mb-2">
                <p className="line-through text-grey font-medium inline pr-2">
                  {`${formatPrice(pricingPlan[0].originalPrice)}`}
                </p>

                <p className="!text-3xl font-ssp font-bold text-primary inline">
                  {`${formatPrice(pricingPlan[0].currentPrice)}`}
                </p>
              </div>

              <p className="text-green-check font-medium mb-4">
                {`SAVE ${formatPrice(pricingPlan[0].originalPrice - pricingPlan[0].currentPrice)}`}
              </p>

              <Button label="VIEW PLANS" onClick={() => setIsLiveModalOpen(true)} />
            </div>
            {/* on-demand */}
            <div className="col-start-5 row-start-1 mt-4">
              <Image
                alt="Recorded Icon Red"
                className="w-fit h-6 mx-auto"
                src="/images/IATPage/recorded-icon-red.png"
                width={120}
                height={43}
              />

              <p className="font-bold tracking-widest px-2 my-2">ON-DEMAND</p>

              <div className="mb-2">
                <p className="line-through text-grey font-medium inline pr-2">
                  {`${formatPrice(pricingPlan[1].originalPrice)}`}
                </p>

                <p className="!text-3xl font-ssp font-bold text-primary inline">
                  {`${formatPrice(pricingPlan[1].currentPrice)}`}
                </p>
              </div>

              <p className="text-green-check font-medium mb-4">
                {`SAVE ${formatPrice(pricingPlan[1].originalPrice - pricingPlan[1].currentPrice)}`}
              </p>

              <Button label="VIEW PLANS" onClick={() => setIsRecordedModalOpen(true)} />
            </div>

            {/* highlight */}
            <div className="absolute w-full h-[115%] -top-12 left-0 col-start-4 col-end-5 row-start-1 row-end-10 rounded-xl border-2 border-primary bg-primary/10 overflow-hidden z-5" />

            <div className="col-span-2 row-start-2 place-self-start pl-6">
              <p className="text-black text-left font-medium py-3 m-0">Certification</p>
            </div>

            <div className="col-start-3 row-start-2 text-primary font-bold">
              <p className="m-0">$2,000</p>
            </div>

            <div className="col-start-4 row-start-2">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-2 rounded-r-full">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-span-2 row-start-3 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-6">
              <p className="text-black text-left font-medium py-3 m-0">
                Weekly live group practice sessions with supervised feedback from Thais
              </p>
            </div>

            <div className="col-start-3 row-start-3 place-self-stretch font-bold flex justify-center items-center text-primary bg-primary-light/20">
              <p className="m-0">$1,000</p>
            </div>

            <div className="col-start-4 row-start-3 place-self-stretch flex justify-center items-center bg-primary-light/20">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-3 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
              <FontAwesomeIcon className="text-danger" icon={faXmarkCircle} />
            </div>

            <div className="col-span-2 row-start-4 place-self-start pl-6">
              <p className="text-black text-left font-medium py-3 m-0">
                Weekly live Q&A time to gain extra support and get your questions answered
              </p>
            </div>

            <div className="col-start-3 row-start-4 text-primary font-bold">
              <p className="m-0">$1,000</p>
            </div>

            <div className="col-start-4 row-start-4">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-4 rounded-r-full">
              <FontAwesomeIcon className="text-danger" icon={faXmarkCircle} />
            </div>

            <div className="col-span-2 row-start-5 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-6">
              <p className="text-black text-left font-medium py-3 m-0">
                12 Weeks of video content that teaches mastery of every tool
              </p>
            </div>

            <div className="col-start-3 row-start-5 place-self-stretch font-bold flex justify-center items-center text-primary bg-primary-light/20">
              <p className="m-0">$2,200</p>
            </div>

            <div className="col-start-4 row-start-5 place-self-stretch flex justify-center items-center bg-primary-light/20">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-5 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-span-2 row-start-6 place-self-start pl-6">
              <p className="text-black text-left font-medium py-3 m-0">
                Materials to use in your business, including worksheets, workbooks and intake forms
              </p>
            </div>

            <div className="col-start-3 row-start-6 text-primary font-bold">
              <p className="m-0">$500</p>
            </div>

            <div className="col-start-4 row-start-6">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-6 rounded-r-full">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-span-2 row-start-7 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-6">
              <p className="text-black text-left font-medium py-3 m-0">
                Training on how to launch your coaching business and build systems that drive
                clients into your practice
              </p>
            </div>

            <div className="col-start-3 row-start-7 place-self-stretch font-bold flex justify-center items-center text-primary bg-primary-light/20">
              <p className="m-0">$500</p>
            </div>

            <div className="col-start-4 row-start-7 place-self-stretch flex justify-center items-center bg-primary-light/20">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-7 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-span-2 row-start-8 place-self-start w-full text-left rounded-l-full pl-6">
              <p className="text-black text-left font-medium py-3 m-0">
                Business skills that will allow you to continuously expand and evolve
              </p>
            </div>

            <div className="col-start-3 row-start-8 place-self-stretch font-bold flex justify-center items-center text-primary">
              <p className="m-0">$300</p>
            </div>

            <div className="col-start-4 row-start-8 place-self-stretch flex justify-center items-center">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-8 place-self-stretch flex justify-center items-center rounded-r-full">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-span-2 row-start-9 place-self-start w-full bg-primary-light/20 text-left rounded-l-full pl-6">
              <p className="text-black text-left font-medium py-3 m-0">Live Q&A With Thais</p>
            </div>

            <div className="col-start-3 row-start-9 place-self-stretch font-bold flex justify-center items-center text-primary bg-primary-light/20">
              <p className="m-0">$1,500</p>
            </div>

            <div className="col-start-4 row-start-9 place-self-stretch flex justify-center items-center bg-primary-light/20">
              <FontAwesomeIcon className="text-green-check" icon={faCircleCheck} />
            </div>

            <div className="col-start-5 row-start-9 place-self-stretch flex justify-center items-center bg-primary-light/20 rounded-r-full">
              <FontAwesomeIcon className="text-danger" icon={faXmarkCircle} />
            </div>
          </div>
        </section>
      </div>

      {/* Live Training Modal */}
      <Dialog
        isShown={isLiveModalOpen}
        onToggle={() => setIsLiveModalOpen(!isLiveModalOpen)}
        className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full max-w-2xl overflow-y-auto pt-16">
        <IATPriceCard
          isLive
          isCardExpanded
          benefits={IAT.price.live_mode}
          heading="Live Training"
          originalPrice="$7,000.00"
          prices={iatLivePrices}
          salePrice="$3,499.00"
          onClose={() => setIsLiveModalOpen(false)}
        />
      </Dialog>

      {/* On-Demand Modal */}
      <Dialog
        isShown={isRecordedModalOpen}
        onToggle={() => setIsRecordedModalOpen(!isRecordedModalOpen)}
        className="[&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] w-full max-w-2xl overflow-y-auto pt-16">
        <IATPriceCard
          isCardExpanded
          benefits={IAT.price.recorded_mode}
          heading="On Demand"
          originalPrice="$4,000.00"
          prices={iatRecordedPrices}
          salePrice="$1,999.00"
          subheading="MONTHLY INSTALLMENT PAYMENT OPTIONS AVAILABLE"
          onClose={() => setIsRecordedModalOpen(false)}
        />
      </Dialog>
    </section>
  )
}
