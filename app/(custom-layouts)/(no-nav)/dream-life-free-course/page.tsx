import Image from 'next/image'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { CheckoutButton } from '@/components/CheckoutButton'
import { CommunityTeaser } from '@/components/CommunityTeaser'
import { List } from '@/components/List'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import VideoTeaser from '@/components/Video/variants/VideoTeaser'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { PaymentOptions } from '@/components/PaymentOptions'

export default function DreamLifeFreeCoursePage() {
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

      <Section classNameInner="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>Image</div>

        <div className="text-left">
          <h2 className="mb-4">
            Rebuild Your Life — With This Course, Your Needs Get Met Now & Forever!
          </h2>

          <p className="mb-4">
            <strong>
              Take the All-Access Pass Free Trial to Get Lifetime Access to the Discover, Embrace &
              Fulfill Your Personal Needs Course
            </strong>
          </p>

          <p className="mb-4">
            Discover who you truly are, what you truly “need” in life and relationships to feel
            fulfilled, and how to get them with our Needs Course – which you get for FREE for LIFE.
            It’s part of our All-Access Pass Membership, which you’ll get for FREE for 7 days!
            That’s access to this beginner course that will pave the way for continuous personal
            growth and transformation and always be there when you need it in the future.
          </p>

          <CheckoutButton label="JOIN TO TAKE THE COURSE" />
        </div>
      </Section>

      <section className="relative overflow-hidden h-full py-48">
        <Image
          className="absolute top-0 left-0 w-full h-auto z-0"
          alt="Vector background"
          src="/images/pds-bg-vector.png"
          width={1440}
          height={591}
        />

        <div className="default-padding relative max-w-5xl z-10 mx-auto">
          <h2>
            Get the Discover, Embrace & Fulfill Your Personal Needs Course FREE for LIFE with a
            7-Day Free Trial to the All-Access Pass!
          </h2>
        </div>
      </section>

      <Section>
        <h2 className="mb-8">A 7-Day Free Trial to our All-Access Pass Gives You:</h2>

        <div className="grid grid-cols-1 gap-4 mb-8 lg:grid-cols-3">
          {PDS_FEATURES.map((feature, idx) => (
            <div key={`feature_${idx}`}>
              <div className="mb-4">Image</div>

              <h3 className="mb-4">{feature.title}</h3>

              <p>{feature.subtitle}</p>
            </div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8">
            Ready for a Love Life Like No Other? Get Results You Can’t Find Anywhere Else with Our
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
                'Understand the power of procrastination and self-sabotage and how they derail your growth and love life – and how to stop them from happening!',
                'Start your journey to becoming securely attached so you have the fulfilling, peaceful, and harmonious life and relationships you want',
              ]}
            />
          </div>

          <CheckoutButton label="START THE COURSE NOW!*" className="mb-8" />

          <p className="max-w-2xl mx-auto">
            <i>
              *When you join now to start the course, you’ll sign up for our All-Access Pass
              Membership. At the end of the trial, you’ll automatically become a member with plans
              starting at $67.00/month. Cancel anytime before your trial ends to avoid charges!*
            </i>
          </p>
        </div>
      </Section>

      <Section
        className="bg-black"
        classNameInner="grid grid-cols-1 gap-8 text-white !text-left lg:grid-cols-3 !py-16">
        {STEPS_TO_PURCHASE.map((item, idx) => (
          <div key={`puchase_steps_${idx}`} className="grid ">
            <div>Image</div>

            <p className="font-bold tracking-33">{item.step}</p>

            <h3>{item.title}</h3>

            <p>{item.copy}</p>
          </div>
        ))}
      </Section>

      <Section className="max-w-full !p-0 my-8" classNameInner="!max-w-full !m-0 !p-0">
        <CarouselTestimonialThinkific initialSlide={1} />
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-4">
            Master Your Needs With Our Revolutionary Model and Unlock Your Full Potential
          </h2>

          <p className="mb-4">
            Completing the Needs Course will set you up to continue exploring your personal growth
            and relationship needs. Check out some snippets of our most popular courses from each of
            the categories below!
          </p>

          <CheckoutButton label="TRY THEM WITH A FREE TRIAL" />
        </div>

        <VideoTeaser />
      </Section>

      <CommunityTeaser paymentOptionsConfigKey="dreamLifeFreeCourse" />
    </Page>
  )
}

const PDS_FEATURES = [
  {
    icon: '',
    title: '65+ Video Courses',
    subtitle: 'Choose and take any of our 65+ courses on needs, attachment styles, and more.',
  },
  {
    icon: '',
    title: 'Weekly Webinars & Q&As',
    subtitle: 'Attend live webinars and Q&As with me, Thais Gibson, and Certified Coaches.',
  },
  {
    icon: '',
    title: 'An Online Community',
    subtitle: 'Learn and grow with like-minded people from around the world in our community.',
  },
]

const STEPS_TO_PURCHASE = [
  {
    step: 'STEP ONE',
    title: 'Sign Up for the 7-Day Free Trial',
    copy: 'Sign up for our 7-day free trial to the All-Access Pass Membership to start your healing journey with the Needs course! You have a week to try everything we offer at The Personal Development School.',
    image: '',
  },
  {
    step: 'STEP TWO',
    title: 'Go Ahead & Take Your Needs Course',
    copy: 'Use the powerful and simple tools and strategies from the Needs Course to rediscover who you are, what you truly desire in yourself and your relationships, and, most importantly, get them met!',
    image: '',
  },
  {
    step: 'STEP THREE',
    title: 'Continue Your Journey to Become Securely Attached',
    copy: 'The Needs Course is the first step in your journey to become securely attached! With this as your foundation, continue your growth by taking our Attachment Style intro courses – for free for 7 days!',
    image: '',
  },
]
