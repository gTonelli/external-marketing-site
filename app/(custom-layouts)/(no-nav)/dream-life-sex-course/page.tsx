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
import { faCircle } from '@awesome.me/kit-545b942488/icons/classic/solid'
import VideoTeaser from '@/components/Video/variants/VideoTeaser'
// utils
import { EExternalRoutes } from '@/utils/constants'

export const metadata: Metadata = {
  title: 'Have the Best Sex Life Ever – Thanks to This Course!',
  description:
    'Sign up for our 7-day trial to get your FREE Attachment Style Sex Course for LIFE! Transform and have the best sex life with this guided program!',
  robots: 'noindex',
}

export default function DreamLifeSexCoursePage() {
  const checkoutUrl = EExternalRoutes.THINKIFIC_CHECKOUT_MARCH_2025_PROMO_TRIAL

  return (
    <Page page_name="Dreamlife Sex Course Page" className="relative">
      <section className="w-full text-center bg-grey-7 pt-6 pb-10 px-4 lg:pt-22 lg:pb-0">
        <h1 className="max-w-xl leading-[50px] mx-auto mb-4">
          What if Sex & Relationships Could Feel Easier, Comfortable & Joyful?
        </h1>

        <div className="relative mt-8 lg:mt-12">
          <PaymentOptions className="lg:flex-col" configKey="dreamLifeSexCourse" />
        </div>
      </section>

      <Image
        className="hidden absolute w-1/2 top-36 lg:-left-56 lg:block xl:w-1/3 xl:-left-32 2xl:-left-44"
        src="/images/TrialHeadspace/hero-left-mockup.png"
        alt="hero-mockup-left"
        width={729}
        height={796}
      />

      <Image
        className="hidden absolute w-1/2 top-36 lg:-right-56 lg:block xl:w-1/3 xl:-right-32"
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
        <h2 className="mb-8">Discover More Ease, Confidence, and Joy in Your Sex Life</h2>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="text-left">
            <p className="text-xl mb-4">
              <strong>
                If you've ever felt confused or unsure of what sex means to you, our Attachment
                Styles & Sex Course will empower you to:
              </strong>
            </p>

            <List
              icon={faCircle}
              iconSize="2xs"
              classNameIcon="mt-1"
              classNameListItems="mb-2"
              listItems={[
                'Navigate post-sex dynamics with ease, confidence, and comfort to make sex more meaningful',
                'Clarify boundaries and expectations by removing pressure and stigma around intimacy and relationships',
                'Take sex beyond the physical by unlocking deeper intimacy and connection with your current or future partner',
                'Overcome vulnerability and fear while embracing intimacy without hesitation or awkwardness',
                'Enhance your relationships by exploring your and your partner’s sex life so together you can become more connected',
              ]}
            />
          </div>

          <div>
            <Image
              className="rounded-xl"
              alt="Attachment Styles & Sex Course Thumbnail"
              src="/images/course-attachment-styles-and-sex.jpg"
              width={640}
              height={360}
            />
          </div>
        </div>

        <CheckoutButton className="mt-8" href={checkoutUrl} label="UNLOCK YOUR NEW LOVE LIFE" />
      </Section>

      <Section className="max-w-3xl mx-auto">
        <h2 className="mb-8">
          What If This One Course Could Change the Way You Approach Intimacy, Sex & Relationships?
        </h2>

        <div className="grid grid-cols-1 gap-4 text-left mb-8 lg:grid-cols-2">
          <List
            icon={faCheckCircle}
            classNameIcon="!text-green"
            classNameListItems="mb-4"
            listItems={[
              'Unlock the key role sex plays in strengthening your relationship',
              'Identify why intimacy may diminish and how to reignite the passion',
              'Learn how to set healthy and realistic expectations for yourself and others',
            ]}
          />

          <List
            icon={faCheckCircle}
            classNameIcon="!text-green"
            classNameListItems="mb-4"
            listItems={[
              'Explore how different attachment styles impact your sex life',
              'Break the emotional push-pull dynamic cycle of sex in dating and relationships',
              'Feel emotionally secure and safe in your connections and relationships',
            ]}
          />
        </div>

        <CheckoutButton href={checkoutUrl} label="SIGN UP FOR FREE!*" className="mb-8" />

        <p className="max-w-2xl mx-auto">
          <em>
            *When you join now, you’ll sign up for our All-Access Pass Membership. At the end of the
            trial, you’ll automatically become a member of the $67.00/month plan. If you cancel
            before your trial ends, you still get to keep and access the Attachment Styles & Sex
            Course for life.
          </em>
        </p>
      </Section>

      <Section className="bg-black text-white !py-16">
        <h2 className="mb-8">
          BONUS FREE TRIAL: Gain Exclusive Access to The Results-Driven Proprietary Method Found
          Only At The Personal Development School!
        </h2>

        <p className="mb-8">
          <strong>
            We're the only platform that utilizes the groundbreaking Integrated Attachment Theory™
            to help you understand what you want in your sex life and relationships and how to get
            it faster than ever before by unlocking and rewiring your subconscious patterns.
          </strong>
        </p>

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
      </Section>

      <Section>
        <h2 className="mb-8">Use Your Free Trial to Enter a World of Possibilities</h2>

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
      </Section>

      <Section>
        <div className="max-w-3xl mx-auto">
          <h2 className="mb-8">
            Mastered Sex & Intimacy? Why Stop Now? Unlock Your Full Potential
          </h2>

          <p className="mb-8">
            After completing the <strong>Attachment Styles & Sex Course</strong>, explore new
            insights and tools to enhance your self-awareness, emotional connection, and
            relationships with our most popular courses.
          </p>

          <CheckoutButton href={checkoutUrl} label="TRY THEM WITH A FREE TRIAL" className="mb-8" />
        </div>

        <VideoTeaser description="Progression is the key to success! With the All-Access Pass, you can continue your personal and relationship growth." />
      </Section>

      <Section className="max-w-full p-4 my-8 lg:!p-0" classNameInner="!max-w-full !m-0 !p-0">
        <CarouselTestimonialThinkific initialSlide={1} />
      </Section>

      <CommunityTeaser
        paymentOptionsConfigKey="dreamLifeSexCourse"
        sectionHeading="Experience Belonging to an Unstoppable Powerhouse Community That Ignites Your Life!"
        teaserHeading="Free Trial = Attachment Styles & Sex Course for LIFE"
        communityBullets={[
          'Sign up for the 7-day Free Trial to get Lifetime access to the Attachment Styles & Sex Course',
          'Use our proven framework to create deeper and more intense intimacy and connection',
          'Try our All-Access Pass Membership for free to access everything we offer',
          'Stay on as a member after your trial ends to continue your personal growth journey',
        ]}
      />
    </Page>
  )
}

const PDS_FEATURES = [
  {
    icon: '/images/TrialHeadspace/watching-on-laptop.svg',
    title: '65+ Self-Paced Courses',
    subtitle:
      'Transform your life or relationships by becoming securely attached. Explore and choose from our 65+ courses on attachment styles, relationships, and more.',
  },
  {
    icon: '/images/TrialHeadspace/couple-holding-heart-message.svg',
    title: 'Interactive Webinars',
    subtitle:
      'Embrace a classroom experience by attending weekly live webinars and Q&A sessions with me, Thais Gibson, and our team of Certified Relationship Coaches.',
  },
  {
    icon: '/images/TrialHeadspace/fly-on-rocket.svg',
    title: 'Supportive Community',
    subtitle:
      'Take inspiration, share your experiences, and learn and grow with like-minded people from around the world in our private online community.',
  },
]

const STEPS_TO_PURCHASE = [
  {
    step: 'STEP ONE',
    title: 'Sign Up for the Free Trial Today',
    copy: "Take the free trial to keep and reuse the Attachment Styles & Sex Course for life – even if you don't stay on as a member!",
    image: '/images/RoyalRumblePage/rr-offer.png',
  },
  {
    step: 'STEP TWO',
    title: 'Become Confident, Connected, & Satisfied',
    copy: 'Use the powerful and simple IAT™ tools from the Attachment Styles & Sex Course to navigate intimacy with confidence, overcome barriers, and deepen connections.',
    image: '/images/course-attachment-styles-and-sex.jpg',
  },
  {
    step: 'STEP THREE',
    title: 'Explore Our All-Inclusive Membership',
    copy: 'Use our All-Access Pass Membership for FREE for 7 days to choose from 65+ courses, attend live webinars with me, Thais Gibson, and join our inspiring community.',
    image: '/images/TrialHeadspace/pds-courses-mockup.png',
  },
]
