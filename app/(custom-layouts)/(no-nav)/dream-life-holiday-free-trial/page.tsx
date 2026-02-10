// core
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { Section } from '@/components/Section'
import {
  faCircleCheck,
  faClock,
  faEye,
  faHeart,
  faSadTear,
} from '@awesome.me/kit-545b942488/icons/classic/regular'
import { List } from '@/components/List'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CarouselPromotionCourses } from '@/components/Carousel/variants/CarouselPromotionCourses'
import { CarouselTestimonial } from '@/components/Carousel/variants/CarouselTestimonial'
import { Card } from '@/components/Card/Card'
import { faCircle } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { ThaisIntro } from '@/components/ThaisIntro'
import { CommunityTeaser } from '@/components/CommunityTeaser'
// utils
import { externalRoutes } from '@/utils/constants'

export const metadata: Metadata = {
  title: 'Sign up for a 7-Day Free Trial this Holiday Season!',
  description:
    ' End the year with purpose! Sign up for our 7-Day Free Trial to the All-Access Pass to get everything you need to transform this coming new year!',
  robots: 'noindex',
}

const benefits = [
  {
    image: `dreamlife-icon-1.png`,
    title: `Find Lasting Love & Never Be Alone`,
    copy: `Connect deeply with others, work together to build a strong foundation, and commit to each other for a lifetime.`,
  },
  {
    image: `dreamlife-icon-2.png`,
    title: `Heal Your Relationships`,
    copy: `Feel 88% happier in relationships in as little as 30 days. You’ll embrace the best romantic, platonic, and familial relationships ever.`,
  },
  {
    image: `dreamlife-icon-3.png`,
    title: `Master Self-Love`,
    copy: `Learn to love yourself, build your confidence and self-esteem, and meet your needs so you can become your best self.`,
  },
]

export default function DreamLifeHolidayFTPage() {
  const checkoutUrl = externalRoutes.checkout7DayTrial

  return (
    <Page page_name="Dreamlife Holiday Free Trial Page" className="relative w-full">
      <section className="default-padding relative w-full !py-32 xl:!py-44">
        <Image
          className="absolute w-full h-full top-0 left-0 z-0"
          src="/images/TrialHeadspace/snow-bg.webp"
          alt="hero-mockup"
          width={3029}
          height={1072}
        />

        <div className="inner-section-wrapper relative text-center max-w-2xl mx-auto">
          <Image
            className="w-full mx-auto sm:w-3/4 md:w-1/2 lg:hidden"
            src="/images/TrialHeadspace/hero-left-mockup.png"
            alt="hero-mockup-left"
            width={729}
            height={796}
          />

          <h1 className="mb-4">Your Dream Life Isn’t Waiting – It’s Calling You in 2025.</h1>

          <p className="tracking-33 font-bold text-xl mb-8">
            EMBRACE IT RIGHT NOW WITH YOUR 7-DAY FREE TRIAL TO THE ALL ACCESS PASS!
          </p>

          <p className="font-bold mb-8">
            Shatter old patterns, heal past wounds, empower yourself, and create unshakable
            relationships with 7 FREE days of the All-Access Pass. Gain access to every
            transformational course at The Personal Development School, master our groundbreaking,
            proprietary process, and get expert guidance directly from me (founder, Thais Gibson) to
            get the life you deserve. Don’t just set goals — conquer them and become unstoppable in
            2025!
          </p>

          <ButtonCheckout href={checkoutUrl} label="SIGN UP & TRANSFORM" />
        </div>

        <Image
          className="hidden absolute max-w-2xl w-1/3 top-20 lg:-left-56 lg:block xl:-left-32 2xl:-left-44"
          src="/images/TrialHeadspace/hero-left-mockup.png"
          alt="hero-mockup-left"
          width={729}
          height={796}
        />

        <Image
          className="hidden absolute max-w-2xl w-1/3 lg:-right-56 top-20 lg:block xl:-right-32"
          src="/images/TrialHeadspace/hero-right-mockup.png"
          alt="hero-mockup-right"
          width={656}
          height={708}
        />
      </section>

      <Section className="bg-black-secondary text-white 2xl:py-24">
        <h2 className="mb-8">The #1 Platform to Step Into Your Dream Life This New Year</h2>

        <p className="max-w-2xl tracking-33 text-xl mx-auto mb-8">
          TRY OUR ALL-ACCESS PASS MEMBERSHIP FOR FREE FOR 7 DAYS
        </p>

        <div className="lg:grid lg:grid-cols-2 lg:gap-12 lg:items-center lg:my-8">
          <Image
            alt="best value mockup"
            className="w-full"
            width={1980}
            height={981}
            src="/images/best-value-mockup.png"
          />

          <div className="text-left">
            <p className="font-medium">Join today and get instant access to:</p>

            <List
              className="mb-4"
              classNameIcon="text-success"
              classNameListItems="my-4"
              icon={faCircleCheck}
              listItems={[
                `**A Complete Library of Courses:** Take any of our 60+ video courses that you can watch anytime, anywhere. These courses focus on helping you find lasting love, heal your relationships, and unlock personal growth.`,
                `**Live Weekly Webinars & Q&A Sessions:** Learn new tools while getting your questions answered in real-time by me, Thais Gibson, founder of The Personal Development School, and my team of Certified Coaches. Watch recordings so you’ll never miss a session.`,
                `**Ongoing Community Support:** Join a safe and encouraging online forum with like-minded individuals who encourage growth and discussion. Plus, attend weekly support groups led by expert coaches to help you continue your journey.`,
              ]}
            />
          </div>
        </div>

        <ButtonCheckout href={checkoutUrl} label="START YOUR 7-DAY FREE TRIAL" />

        <p className="max-w-xl italic font-medium mx-auto mt-4">
          *At the end of the trial, you’ll automatically become an All-Access Pass member with plans
          starting at $67.00/month. Cancel anytime before your trial ends to avoid charges!*
        </p>
      </Section>

      <Section className="bg-primary-light-50">
        <h2>
          Can Your Mental Health & Emotional Wellness Really Keep Taking A Backseat This Season?
        </h2>

        <p className="max-w-3xl mx-auto lg:my-8">
          It’s the time of year that brings up lots of emotions, past experiences, and future goals.
          If you’re questioning whether it’s time to make a change, break away, and start afresh,
          ask yourself: 
        </p>

        <div className="mb-8 lg:grid lg:grid-cols-4 lg:gap-6">
          <div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto mb-4">
              <FontAwesomeIcon className="text-purple-dark text-4xl" icon={faEye} />
            </div>

            <p className="w-3/4 mx-auto lg:w-auto">
              Can I really keep feeling anxious and tense this way every year?
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto mb-4">
              <FontAwesomeIcon className="text-purple-dark text-4xl" icon={faHeart} />
            </div>

            <p className="w-3/4 mx-auto lg:w-auto">
              How much will it hurt to find myself alone again during the holidays?
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto mb-4">
              <FontAwesomeIcon className="text-purple-dark text-4xl" icon={faSadTear} />
            </div>

            <p className="w-3/4 mx-auto lg:w-auto">
              Why do I put so much pressure on myself every festive season?
            </p>
          </div>

          <div>
            <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mx-auto mb-4">
              <FontAwesomeIcon className="text-purple-dark text-4xl" icon={faClock} />
            </div>

            <p className="w-3/4 mx-auto lg:w-auto">
              How much longer can I let my self-esteem derail my relationships?
            </p>
          </div>
        </div>

        <p className="max-w-xl mx-auto mb-4">
          With this free, limited-time offer, you can finally discover why you feel and act the way
          you do each year, how to break your personal and relationship self-sabotaging patterns,
          and start experiencing the change you want to see in your life.
        </p>

        <p className="max-w-xl font-bold mx-auto mb-8">
          Our self-paced courses and proprietary personalized tools will help you work through and
          overcome your troubles in just 7 days – perfect for our trial!
        </p>

        <ButtonCheckout href={checkoutUrl} label="SIGN UP & START HEALING" />
      </Section>

      <Image
        alt="purple wave vector"
        className="w-full rotate-180 lg:hidden"
        width={792}
        height={426}
        src="/images/BlackFridayPage/mha-purple-wave.jpg"
      />

      <Image
        alt="purple wave vector"
        className="w-full -mt-12 hidden rotate-180 lg:block"
        width={2881}
        height={430}
        src="/images/BlackFridayPage/mha-purple-wave-desktop.jpg"
      />

      <Section>
        {benefits.map((benefit, index) => (
          <div
            key={`benefits_${index}`}
            className="flex flex-col items-center justify-center space-x-4 mb-4 mx-auto lg:flex-row">
            <Image
              className="w-[150px] h-[150px]"
              src={`/images/TrialHeadspace/${benefit.image}`}
              alt="attachment-style-benefits"
              width={438}
              height={453}
            />

            <div className="flex flex-col items-center text-left space-y-1 lg:flex-row lg:space-x-20">
              <h3 className="lg:w-56">{benefit.title}</h3>

              <p className="text-sm md:w-64 lg:w-72 lg:text-base">{benefit.copy}</p>
            </div>
          </div>
        ))}
      </Section>

      <Section className="!pt-0">
        <CarouselPromotionCourses />

        <ButtonCheckout href={checkoutUrl} label="TRY THEM FOR FREE NOW!" />
      </Section>

      <Section classNameInner="!max-w-full !w-full">
        <CarouselTestimonial
          className="mt-6"
          classNameHeader="text-center"
          headingText="You Could Be Joining Our Members in Having Breakthroughs Like This:"
          showQuotations={false}
        />
      </Section>

      <section className="default-padding relative w-full">
        <Image
          className="absolute w-full h-full top-0 left-0 z-0"
          src="/images/TrialHeadspace/snow-bg.webp"
          alt="hero-mockup"
          width={3029}
          height={1072}
        />

        <div className="section-inner-wrapper relative">
          <h2 className="mb-8">
            Your 7-Day All-Access Pass is the Key to Unlock Your New Reality:
          </h2>

          <Card
            className="default-padding text-left border-none my-4 
                      lg:grid lg:grid-cols-2 lg:gap-12 lg:p-6 lg:items-start lg:my-12 
                      xl:p-8">
            <div>
              <p className="text-primary font-bold tracking-33 mb-2 lg:mb-6">
                EMPOWERING ONLINE COURSES FOR EVERY AREA OF YOUR LIFE
              </p>

              <Image
                alt="dashboard mockup"
                className="w-full"
                width={768}
                height={617}
                src="/images/BlackFridayPage/dashboard-preview.jpg"
              />
            </div>

            <div>
              <p className="mb-4">
                Get unlimited access to explore our extensive library of self-paced courses,
                carefully designed to help you tackle a wide range of personal challenges, like:
              </p>

              <List
                className="mb-4"
                classNameIcon="!text-black text-xxxs !pt-2"
                classNameListItems="font-bold mb-2"
                icon={faCircle}
                listItems={[
                  'Learning your relationship needs to feel loved',
                  'Building your self-esteem and confidence',
                  'Repairing and healing your relationship',
                  'Releasing resentments and trauma',
                  'And much, much more!',
                ]}
              />

              <p className="mb-8">
                Our short 1 to 3-hour courses give you the simple, step-by-step roadmaps and PDF
                workbooks (filled with thought-provoking exercises) you need to experience
                significant transformation in your daily life faster than ever.
              </p>

              <ButtonCheckout href={checkoutUrl} label="SIGN UP FOR FREE NOW!" />
            </div>
          </Card>
        </div>
      </section>

      <ThaisIntro />

      <CommunityTeaser
        paymentOptionsConfigKey="dreamLifeHoliday"
        sectionHeading="Step Into the New Year with Us – Join Our Unstoppable Community!"
        teaserHeading="Step Into the Life You Deserve This New Year – Take Our 7-Day Free Trial"
      />
    </Page>
  )
}
