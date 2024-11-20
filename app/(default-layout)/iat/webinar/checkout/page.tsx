// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { CountdownTimer } from '@/components/CountDownTimer'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'
import { InlineCalendlyWidget } from '@/components/InlineCalendlyWidget'
import { List } from '@/components/List'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { IATPricingCard, TIATCardDetails, TIATPriceOption } from '@/components/IATPricingCard'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
import {
  faFileLines,
  faFileVideo,
  faSquare1,
  faSquare2,
} from '@awesome.me/kit-545b942488/icons/classic/solid'
import {
  faArrowUpRightDots,
  faEarthAmericas,
  faFileCertificate,
  faLaptop,
  faMoneyBill1Wave,
  faPeopleGroup,
  faScrewdriverWrench,
} from '@awesome.me/kit-545b942488/icons/classic/light'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// utils
import { getOfferEndDate } from '@/utils/functions'
import { EExternalRoutes } from '@/utils/constants'
// style
import './style.css'

export const metadata: Metadata = {
  title: 'Claim Your $300 IAT Masterclass Discount!',
  description:
    'Save $300 on the IAT Program by claiming your IAT Masterclass Discount within the next 72 hours! Hurry, time is running out for this exclusive one-time offer!',
  robots: 'noindex',
}

const trustbarSlides = [
  'mel-robbins-logo.png',
  'psychology-today-logo.png',
  'new-york-post-logo.png',
  'ceo-weekly-logo.png',
  'yahoo-logo.png',
]

const IATLiveCardDetails: TIATCardDetails = {
  liveLogo: true,
  title: 'Live Training',
  originalPrice: [
    { price: '$7,000' },
    { price: '$3,499', label: '(50%)' },
    { price: '$3,299', label: '(Specialist Call Discount)' },
  ],
  currentPrice: '$2,999.00',
  currentPriceLabel: '($300 Masterclass Discount)',
  discount: 'TOTAL SAVINGS: $4,001',
  subheader: 'Unleash Your Coaching Potential with this Interactive Experience',
  copy: 'Join weekly practice and Q&A sessions with Thais Gibson. Get on-the-spot support to learn quickly, receive helpful feedback to boost your confidence, and have all your questions answered about relationship coaching or building a business. Seats are limited for this unique opportunity.',
  perks: [
    '12-Week Comprehensive Live Program',
    '8 Weeks of Intensive Training with Thais Gibson',
    'Immersive & Engaging Classroom Experience',
    'Designed for All Levels of Expertise',
  ],
}

const OnDemandIATCardDetails: TIATCardDetails = {
  title: 'On Demand',
  originalPrice: [{ price: '$4,000' }, { price: '$1,999', label: '(50%)' }],
  currentPrice: '$1,799.00',
  currentPriceLabel: '(Masterclass Discount)',
  discount: 'TOTAL SAVINGS: $2,200',
  subheader: 'Ignite Your Career & Finances With a Self-Paced Format',
  copy: "The perfect format for self-paced learners or those who can't make the weekly sessions. Get access to the same features as the Live Program IAT™, including pre-recorded video modules, essential client resources, and business materials to build your coaching practice. You can enroll for this Program at any time.",
  perks: [
    'Pre-Recorded & Detailed Video Modules',
    'Self-Paced & Flexible Format',
    'Monthly Payment Plans Available',
    'Additional Prerequisites Courses',
  ],
}

const IATLiveCardPricing: TIATPriceOption[] = [
  {
    label: 'ONE TIME PAYMENT',
    price: '$2,999.00',
    checkout: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_WEBINAR_UPFRONT,
  },
  {
    label: '3 MONTH PAYMENT PLAN',
    price: '$1,039.00',
    checkout: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_WEBINAR_3_MONTH_PLAN,
  },
  {
    label: '6 MONTH PAYMENT PLAN',
    price: '$539.00',
    checkout: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_WEBINAR_6_MONTH_PLAN,
  },
  {
    label: '12 MONTH PAYMENT PLAN',
    price: '$289.00',
    checkout: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_WEBINAR_12_MONTH_PLAN,
  },
]

const OnDemandIATCardPricing: TIATPriceOption[] = [
  {
    label: 'ONE TIME PAYMENT',
    price: '$1,799.00',
    checkout: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_RECORDED_WEBINAR_UPFRONT,
  },
  {
    label: '3 MONTH PAYMENT PLAN',
    price: '$619.00',
    checkout: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_RECORDED_WEBINAR_3_MONTH_PLAN,
  },
  {
    label: '6 MONTH PAYMENT PLAN',
    price: '$319.00',
    checkout: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_RECORDED_WEBINAR_6_MONTH_PLAN,
  },
  {
    label: '12 MONTH PAYMENT PLAN',
    price: '$169.00',
    checkout: EExternalRoutes.THINKIFIC_CHECKOUT_IAT_RECORDED_WEBINAR_12_MONTH_PLAN,
  },
]

export default function IATWebinarSqueezePage() {
  return (
    <Page page_name="IAT Webinar Squeeze Page">
      <Section
        className="bg-hero w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-hero-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-span-7">
          <p className="font-bold mb-4 tracking-33">
            UNLEASH YOUR SPECIAL $300 MASTERCLASS DISCOUNT
          </p>

          <h1 className="mb-4">
            <span className="text-primary">Transform Lives</span> & Secure Your Financial Future
          </h1>

          <p className="font-bold text-xl mb-8">Join the Live IAT™ Program on January 8th, 2025</p>

          {/* countdown for December 15, 2024 */}
          <CountdownTimer
            className="!justify-start"
            classNameDate="!bg-inherit !shadow-none !text-black !p-0"
            theme="light"
            date={getOfferEndDate(new Date('2024-12-15T00:16:00-05:00'), 1)}
          />

          <ButtonScroll className="mt-8" label="JOIN NOW & SAVE $300" target="#pricing" />
        </div>
      </Section>

      <Section className="!py-0 mb-6">
        <TrustbarSlider
          brandLogosList={trustbarSlides}
          className="items-stretch !pb-0"
          classNameImage="!mx-0"
          classNameSlides="flex flex-col flex-1 items-center justify-center"
        />
      </Section>

      <Section
        className="bg-watch w-full min-h-52 z-10 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-full !m-0 lg:!max-w-5xl lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-watch-mobile lg:hidden" />

        <div className="relative text-black text-left p-4 z-20 lg:col-span-7">
          <h2 className="mb-8">Ready to Become a Certified & 6-Figure Relationship Coach?</h2>

          <List
            classNameListItems="mb-4"
            icon={faCheckCircle}
            listItems={[
              'Insights into Integrated Attachment Theory™',
              'Rare Direct Learning from Thais Gibson',
              '30+ Hours of Groundbreaking Training',
              'Exclusive Results-Proven Business Strategies',
              'Lifetime Access to Coaching & Business Resources',
              'Recognized and Accredited Certification',
              '100% Remote Learning Across the Globe',
              'Lively & Supportive Online Community',
              'Valued at Over $7000',
            ]}
          />
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="!max-w-full">
        <div className="max-w-xl text-left pb-8">
          <h2 className="mb-4">Is This World-Class Relationship Coaching Program For You?</h2>

          <p>
            As an inspiring and revolutionary global movement in over 120 countries, our
            all-inclusive program is for you if you want to:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 text-left my-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div>
            <FontAwesomeIcon icon={faFileCertificate} className="text-primary mb-2" size="2x" />

            <p className="font-bold mb-4">
              Become a leading and certified coaching expert for your personal and professional
              relationships
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faScrewdriverWrench} className="text-primary mb-2" size="2x" />

            <p className="font-bold mb-4">
              Use powerful yet simple tools that actually change people’s lives and relationships
              immediately
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faMoneyBill1Wave} className="text-primary mb-2" size="2x" />

            <p className="font-bold mb-4">
              Explore career growth and opportunities while experiencing financial freedom that
              secures your future
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faEarthAmericas} className="text-primary mb-2" size="2x" />

            <p className="font-bold mb-4">
              Make a bigger, positive, and empowering impact in the community and the entire world
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faPeopleGroup} className="text-primary mb-2" size="2x" />

            <p className="font-bold mb-4">
              Gain access to a supportive community to develop and evolve your skills and knowledge
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faLaptop} className="text-primary mb-2" size="2x" />

            <p className="font-bold mb-4">
              Learn Live in a virtual and dynamic classroom experience or at your own pace when it
              suits you
            </p>
          </div>

          <div>
            <FontAwesomeIcon icon={faArrowUpRightDots} className="text-primary mb-2" size="2x" />

            <p className="font-bold mb-4">
              Level up your relationship coaching training, whether you have expertise as a
              professional or zero experience
            </p>
          </div>
        </div>

        <div className="flex">
          <ButtonScroll label="START YOUR TRAINING" target="#pricing" />
        </div>
      </Section>

      <Section className="bg-black" classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-white text-left">
          <h2 className="mb-4">Talk to an IAT™ Coaching Specialist</h2>

          <p className="mb-8">
            Have some last-minute questions before you sign up? Book a quick talk with our Coaching
            Specialist.
          </p>

          {[
            'Choose a date and time for our IAT™ Coaching Specialist to call you',
            'Discuss your experience, current goals, and the IAT™ Programs',
            'Get all your questions answered and talk through the next steps',
          ].map((item, idx) => (
            <p key={idx} className="flex mb-4">
              <span className="flex !w-7 !h-7 items-center justify-center bg-primary !rounded-full p-1 mr-4">
                {idx + 1}
              </span>

              <span className="font-bold">{item}</span>
            </p>
          ))}
        </div>

        <div className="min-h-min">
          <InlineCalendlyWidget />
        </div>
      </Section>

      <Section>
        <div id="pricing" className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <IATPricingCard cardDetails={IATLiveCardDetails} pricingMenu={IATLiveCardPricing} />

          <IATPricingCard
            cardDetails={OnDemandIATCardDetails}
            pricingMenu={OnDemandIATCardPricing}
          />
        </div>
      </Section>

      <Section className="max-w-full !p-0 my-8" classNameInner="!max-w-full !m-0 !p-0">
        <h2 className="mb-4">This How You Can Be Transforming Lives</h2>

        <p className="mb-8">Just Like The Personal Development School</p>

        <CarouselTestimonialThinkific initialSlide={1} />
      </Section>

      <Section classNameInner="max-w-6xl bg-gradient-to-b from-beige-30 to-primary-light-25 rounded-xl mx-auto px-4 py-8">
        <h2 className="mb-8">Discover Our Relationship Coaching Syllabus</h2>

        <div className="grid grid-cols-1 gap-4 text-left lg:grid-cols-2">
          <div>
            <h3>
              <span className="mr-2">
                <FontAwesomeIcon icon={faSquare1} />
              </span>
              Prerequisite Week 1 - 4
            </h3>

            <div className="border-t border-black mt-4 pt-4">
              <p>Week One: The Handbook For A Better Life</p>
            </div>

            <div className="border-t border-black mt-4 pt-4">
              <p>Week Two: Emotional Mastery & Belief Reprogramming Course Part 1</p>
            </div>

            <div className="border-t border-black mt-4 pt-4">
              <p>Week Three: Emotional Mastery & Belief Reprogramming Course Part 2</p>
            </div>

            <div className="border-t border-black mt-4 pt-4">
              <p>Week Four: Discover, Embrace And Fulfill Your Personal Needs</p>
            </div>

            <h3 className="mt-8">
              <span className="mr-2">
                <FontAwesomeIcon icon={faSquare2} />
              </span>
              Intensive Training Week 5 - 12
            </h3>

            <div className="border-t border-black mt-4 pt-4">
              <p>Week Five: Mastering The Basics</p>
            </div>

            <div className="border-t border-black mt-4 pt-4">
              <p>Week Six: Gibson Integrated Attachment Theory™</p>
            </div>

            <div className="border-t border-black mt-4 pt-4">
              <p>Week Seven: Identifying Core Wounds & Secret Of The Subconscious</p>
            </div>

            <div className="border-t border-black mt-4 pt-4">
              <p>Week Eight: Reprogramming Your Client’s Attachment Style</p>
            </div>

            <div className="border-t border-black mt-4 pt-4">
              <p>
                Week Nine: Understanding Subconscious Needs & Forming Healthy Relationship Habits
              </p>
            </div>

            <div className="border-t border-black mt-4 pt-4">
              <p>Week Ten: Activating, Deactivating & Mastering Conflict Resolution</p>
            </div>

            <div className="border-t border-black mt-4 pt-4">
              <p>Week Eleven: Unlocking Deeper Connection</p>
            </div>

            <div className="border-t border-black mt-4 pt-4">
              <p>Week Twelve: Build A Thriving Business</p>
            </div>
          </div>

          <div className="h-fit bg-white shadow-md rounded-xl p-4">
            <Image
              width={588}
              height={334}
              alt="Thumbnail for IAT webinar"
              src="/images/IATWebinar/iat-winter-2025.jpg"
            />

            <div className="border-b border-black pt-4 my-4">
              <h3>About this Training</h3>
            </div>

            <div className="text-left">
              <p className="mb-4">
                <span>
                  <FontAwesomeIcon className="text-primary mr-2" icon={faFileLines} />
                </span>
                73 Lessons
              </p>

              <p className="mb-4">
                <span>
                  <FontAwesomeIcon className="text-primary mr-2" icon={faFileVideo} />
                </span>
                30+ Hours of Video and Live Content
              </p>
            </div>

            <ButtonScroll className="mt-8" label="JOIN TODAY" target="#pricing" />
          </div>
        </div>
      </Section>
    </Page>
  )
}
