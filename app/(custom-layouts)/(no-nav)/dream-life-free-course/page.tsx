// core
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { List } from '@/components/List'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { CheckoutButton } from '@/components/CheckoutButton'
import { CommunityTeaser } from '@/components/CommunityTeaser'
import { PaymentOptions } from '@/components/PaymentOptions'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
import VideoTeaser from '@/components/Video/variants/VideoTeaser'
// utils
import { EExternalRoutes } from '@/utils/constants'

export const metadata: Metadata = {
  title: 'Get Your Dream Life with a Free Trial & Course for Life!',
  description:
    'It’s time for you to discover your needs in life. Sign up for our 7-Day Free Trial to our All-Access Pass and get our Needs Course for Free for LIFE!',
  robots: 'noindex',
}

export default function DreamLifeFreeCoursePage() {
  const checkoutUrl = EExternalRoutes.THINKIFIC_CHECKOUT_JAN_2025_PROMO_TRIAL

  return (
    <Page page_name="Dreamlife Free Course Page" className="relative">
      <section className="w-full text-center bg-grey-7 pt-6 pb-10 px-4 lg:pt-22 lg:pb-0">
        <Image
          className="w-full mx-auto sm:w-3/4 md:w-1/2 lg:hidden"
          src="/images/TrialHeadspace/hero-left-mockup.png"
          alt="hero-mockup-left"
          width={729}
          height={796}
        />

        <h1 className="max-w-xl leading-[50px] mx-auto mb-4">
          What’s REALLY Holding Your Relationships Back? Discover The Missing Piece in Love &amp;
          Life!
        </h1>

        <p className="max-w-xl font-bold mx-auto">
          Tap into the power of your subconscious mind with our proprietary model to finally uncover
          and fulfill your deepest personal and relationship needs!
        </p>

        <div className="relative mt-8 lg:mt-12">
          <PaymentOptions className="lg:flex-col" configKey="dreamLifeFreeCourse" />
        </div>
      </section>

      <Image
        className="hidden absolute w-1/2 top-20 lg:-left-56 lg:block xl:w-1/3 xl:-left-32 2xl:-left-44"
        src="/images/TrialHeadspace/hero-left-mockup.png"
        alt="hero-mockup-left"
        width={729}
        height={796}
      />

      <Image
        className="hidden absolute w-1/2 lg:-right-56 top-20 lg:block xl:w-1/3 xl:-right-32"
        src="/images/TrialHeadspace/hero-right-mockup.png"
        alt="hero-mockup-right"
        width={656}
        height={708}
      />

      <Image
        className="w-full"
        src="/images/TrialHeadspace/hero-bg.png"
        alt="hero-mockup"
        width={1120}
        height={88}
      />

      <Section>
        <h2 className="mb-8">
          Rebuild Your Life — With This Course, Your Needs Get Met Now & Forever!
        </h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <Image
              className="rounded-xl"
              alt="Needs Course Thumbnail"
              src="/images/course-personal-needs-alt.jpg"
              width={640}
              height={360}
            />
          </div>

          <div className="text-left">
            <p className="mb-4">
              <strong>
                Take the All-Access Pass Free Trial to Get Lifetime Access to the Discover, Embrace
                & Fulfill Your Personal Needs Course
              </strong>
            </p>

            <p className="mb-4">
              Discover who you truly are, what you truly “need” in life and relationships to feel
              fulfilled, and how to get them with our Needs Course – which you get to KEEP for FREE
              for LIFE. It’s part of our All-Access Pass Membership, which you’ll get for FREE for 7
              days! That’s access to this beginner course that will pave the way for continuous
              personal growth and transformation and always be there when you need it in the future.
            </p>

            <CheckoutButton href={checkoutUrl} label="JOIN TO TAKE THE COURSE" />
          </div>
        </div>
      </Section>

      <Section
        className="!max-w-full bg-[url('/images/pds-bg-vector.svg')] bg-center bg-no-repeat !bg-cover mx-auto !p-0"
        classNameInner="px-4 py-24 lg:py-48">
        <h2>
          Get the Discover, Embrace & Fulfill Your Personal Needs Course FREE for LIFE with a 7-Day
          Free Trial to the All-Access Pass!
        </h2>
      </Section>

      <Section>
        <h2 className="mb-8">A 7-Day Free Trial to Our All-Access Pass Gives You:</h2>

        <div className="grid grid-cols-1 gap-4 mb-8 lg:grid-cols-3">
          {PDS_FEATURES.map((feature, idx) => (
            <div key={`feature_${idx}`}>
              <div className="flex justify-center mb-4">
                <Image alt="vector icon" src={feature.icon} width={92} height={86} />
              </div>

              <h3 className="mb-4">{feature.title}</h3>

              <p>{feature.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8">
            Ready for a Love Life Like No Other? Get Results You Can’t Find Anywhere Else With Our
            Needs Course!
          </h2>

          <div className="grid grid-cols-1 gap-4 text-left mb-8 lg:grid-cols-2">
            <List
              icon={faCheckCircle}
              classNameIcon="!text-green"
              classNameListItems="mb-4"
              listItems={[
                'Identify and understand your subconscious personality needs & how they define your life and relationships',
                'Create healthy life habits and utilize strategies to support and meet your needs so you can honor yourself and show up as your best self',
              ]}
            />

            <List
              icon={faCheckCircle}
              classNameIcon="!text-green"
              classNameListItems="mb-4"
              listItems={[
                'Understand the power of procrastination and self-sabotage and how they derail your growth and love life – and how to stop them from happening',
                'Start your journey to becoming securely attached so you have the fulfilling, peaceful, and harmonious life and relationships you want',
              ]}
            />
          </div>

          <CheckoutButton href={checkoutUrl} label="START THE COURSE NOW!*" className="mb-8" />

          <p className="max-w-2xl mx-auto">
            <i>
              *When you join now to start the course, you’ll sign up for our All-Access Pass
              Membership. At the end of the trial, you’ll automatically become a member with plans
              starting at $67.00/month. Cancel anytime before your trial ends to avoid charges!*
            </i>
          </p>
        </div>
      </Section>

      <Section className="bg-black text-white !py-16">
        <div className="grid grid-cols-1 gap-8 !text-left lg:grid-cols-3">
          {STEPS_TO_PURCHASE.map((item, idx) => (
            <div key={`puchase_steps_${idx}`}>
              <div className="min-h-48 mb-4">
                <Image
                  className="rounded-xl"
                  alt="PDS Journey Step"
                  src={item.image}
                  width={360}
                  height={180}
                />
              </div>

              <p className="font-bold tracking-33 mb-4">{item.step}</p>

              <h3 className="mb-4">{item.title}</h3>

              <p>{item.copy}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="mb-4">
            Become Your Best Self By Using Our Results Driven Proprietary Method Found Exclusively
            Only At The Personal Development School
          </h2>

          <p className="mb-8">
            We're the only platform that utilizes the groundbreaking Integrated Attachment Theory™
            to help you understand what you want and how to get it faster than ever before by
            unlocking and rewiring your subconscious patterns.
          </p>

          <CheckoutButton href={checkoutUrl} label="YOUR JOURNEY STARTS NOW" />
        </div>
      </Section>

      <Section className="max-w-full !p-0 my-8" classNameInner="!max-w-full !m-0 !p-0">
        <CarouselTestimonialThinkific initialSlide={1} />
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-4">
            Master Your Needs With Our Revolutionary Model & Unlock Your Full Potential
          </h2>

          <p className="mb-4">
            Completing the Needs Course will set you up to continue exploring your personal growth
            and relationship needs. Check out some snippets of our most popular courses from each of
            the categories below!
          </p>

          <CheckoutButton href={checkoutUrl} label="TRY THEM WITH A FREE TRIAL" />
        </div>

        <VideoTeaser description="Progression is the key to success! With the All-Access Pass, you can use what you learned in the Needs course to continue your personal and relationship growth." />
      </Section>

      <CommunityTeaser
        paymentOptionsConfigKey="dreamLifeFreeCourse"
        sectionHeading="Experience Belonging to an Unstoppable Powerhouse Community That Ignites Your Life!"
        teaserHeading="Get a 7-Day Free Trial + Lifetime Access to Our Needs Course"
      />
    </Page>
  )
}

const PDS_FEATURES = [
  {
    icon: '/images/TrialHeadspace/watching-on-laptop.svg',
    title: '65+ Video Courses',
    subtitle: 'Choose and take any of our 65+ courses on needs, attachment styles, and more.',
  },
  {
    icon: '/images/TrialHeadspace/couple-holding-heart-message.svg',
    title: 'Weekly Webinars & Q&As',
    subtitle: 'Attend live webinars and Q&As with me, Thais Gibson, and our Certified Coaches.',
  },
  {
    icon: '/images/TrialHeadspace/fly-on-rocket.svg',
    title: 'An Online Community',
    subtitle: 'Learn and grow with like-minded people from around the world in our community.',
  },
]

const STEPS_TO_PURCHASE = [
  {
    step: 'STEP ONE',
    title: 'Sign Up for the 7-Day Free Trial',
    copy: 'Sign up for our 7-day free trial to the All-Access Pass Membership to start your healing journey with the Needs course! You have a week to try everything we offer at The Personal Development School.',
    image: '/images/RoyalRumblePage/rr-offer.png',
  },
  {
    step: 'STEP TWO',
    title: 'Go Ahead & Take Your Needs Course',
    copy: 'Use the powerful and simple tools and strategies from the Needs Course to rediscover who you are, what you truly desire in yourself and your relationships, and, most importantly, get them met!',
    image: '/images/course-personal-needs-alt.jpg',
  },
  {
    step: 'STEP THREE',
    title: 'Continue Your Journey to Become Securely Attached',
    copy: 'The Needs Course is the first step in your journey to become securely attached! With this as your foundation, continue your growth by taking our Attachment Style intro courses – for FREE for 7 days!',
    image: '/images/TrialHeadspace/pds-courses-mockup.png',
  },
]
