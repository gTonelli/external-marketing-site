// core
import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { SignupForm } from '@/components/Forms/SignupForm'
import { List } from '@/components/List'
import { Button } from '@/components/Button/Button'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// styles
import '../dream-life-pillars-course/style.css'

export const metadata: Metadata = {
  title: 'Download Your Life-Changing Dating Freebie!',
  description:
    'Empower your dating life by using our FREE Standards & Non-Negotiables Guide! It has everything you need to elevate your dating life and relationships!',
  robots: 'noindex',
}

export default function DatingFreebiePage() {
  return (
    <Page page_name="Dating Freebie Page">
      <Section
        className="bg-gradient-to-b from-blue-lightest-50 to-primary-light"
        classNameInner="flex flex-col items-center pb-16">
        <Image
          alt="PDS logo"
          src="/images/pds-logo-stacked-right-primary.png"
          width={200}
          height={73}
        />

        <h1 className="max-w-4xl mx-auto mt-8 mb-4">
          Limited Time Offer: Download this Exclusive Free Guide to Start Thriving in Love
        </h1>
      </Section>

      <Section classNameInner="relative min-h-96 pt-[850px] xs:pt-[900px] lg:pt-96">
        <div
          id="freebie-form"
          className="absolute w-full grid gap-8 bg-white shadow-xl rounded-lg overflow-hidden -top-16 left-0 p-4 z-10 md:-top-20 lg:-top-24 lg:grid-cols-3 lg:p-6">
          <div className="flex justify-center">
            <Image
              alt="a mockup image of the Standards & Non-Negotiables Guide freebie"
              src="/images/DatingFreebie/dating-freebie-mockup.png"
              width={400}
              height={400}
              quality={100}
              sizes="100vw"
            />
          </div>

          <div className="text-left lg:col-span-2">
            <h2 className="mb-8">
              Enter Your Details Below and Start Understanding Your Relationship Standards &amp;
              Boundaries So You Get The Love Life You Deserve!
            </h2>

            <SignupForm
              classNameFields="!flex-col !gap-y-4"
              submitButtonLabel="GET YOUR FREE GUIDE!"
              successMessage="Thank you for your submission. Your personalised guide is on its way to you, and will be in your inbox shortly!"
              userTags={['dating-freebie']}
              listIds={[40]}
            />
          </div>
        </div>
      </Section>

      <Section
        className="bg-white-secondary"
        classNameInner="max-w-3xl flex flex-col items-center mx-auto">
        <Image
          className="mb-4"
          alt="Limited Offer Illustration"
          src="/images/limited-offer-vector.png"
          width={150}
          height={90}
        />

        <p>
          <strong>So, What Does This FREE & Life-Changing Guide Offer You?</strong>
        </p>

        <h2 className="mb-4">
          Defining Your Standards &amp; Boundaries That Will Protect You & Build Attract Authentic
          Relationships
        </h2>
      </Section>

      <Section classNameInner="grid gap-8 lg:grid-cols-2">
        <div>
          <Image
            alt="A mockup of the dating freebie with the cover shown on a mobile screen and a section about reflecting your strength shown on a tablet screen"
            src="/images/DatingFreebie/dating-freebie-mockup-2.png"
            width={882}
            height={882}
          />
        </div>

        <div className="text-left">
          <h2 className="mb-4">
            The Standards & Non-Negotiables Guide Will Help You Build Authentic Clarity in Your Love
            Life
          </h2>

          <List
            classNameIcon="text-primary mt-1"
            classNameListItems="mb-4"
            icon={faCheckCircle}
            listItems={[
              <>
                <strong>Reflect on Your Strengths & Values:</strong> Recognize the unique qualities
                and emotional depth you already bring to a relationship.
              </>,
              <>
                <strong>Learn From the Past:</strong> Identify the patterns, lessons, and moments
                (both painful and positive) that shaped your relationship standards.
              </>,
              <>
                <strong>Define Your Non-Negotiables With Confidence:</strong> Get clear on the
                behaviors, traits, and dynamics to stop compromising your well-being.
              </>,
              <>
                <strong>Secure Your Standards:</strong> Build rock-solid standards by understanding
                your emotional needs and long-term vision for love.
              </>,
              <>
                <strong>Visualize What Alignment Looks Like in Real Life:</strong> Learn how to spot
                red flags and green lights so you can commit with clarity, not confusion.
              </>,
              <>
                <strong>Commit to Honoring Yourself:</strong> Create a personal affirmation rooted
                in your truth so your dating decisions align with your highest self.
              </>,
              <>
                <strong>Break Cycles That No Longer Serve You:</strong> Reset yourself to stop
                attracting unavailable, misaligned, or emotionally draining relationships.
              </>,
            ]}
          />

          <ButtonScroll target="#freebie-form" label="SEND ME THIS FREE GUIDE!" />
        </div>
      </Section>

      <Section
        className="!w-full bg-pink-auxiliary p-0"
        classNameInner="grid gap-8 lg:grid-cols-12">
        <div className="text-left lg:col-span-8">
          <h2>Ready for Real Change? Get Your Free Key Pillars Course!</h2>

          <p className="tracking-33">
            <strong>
              SIGN UP FOR A 7-DAY FREE TRIAL OF OUR ALL-ACCESS PASS TO GET THE KEY PILLARS COURSE
              FOR FREE AND TO FINALLY BECOME SECURE IN LOVE!
            </strong>
          </p>

          <List
            classNameIcon="text-primary mt-1"
            icon={faCheckCircle}
            listItems={[
              'Get instant access to 70+ expert-led courses and weekly live webinars.',
              'Keep the Key Pillars for a Secure Relationship Course for FREE and for LIFE—yours to use anytime.',
              'Join a supportive community focused on healthy love, emotional growth, and lasting transformation.',
            ]}
          />

          <Link href="/dream-life-pillars-course">
            <Button label="EXPLORE MORE & SIGN UP" />
          </Link>
        </div>

        <div className="lg:col-span-4">
          <Image
            alt="a mockup image of PDS resources - Attachment Quiz in a desktop, Webinars in a tablet"
            src="/images/DatingFreebie/pds-mockup.png"
            width={768}
            height={566}
            quality={100}
            sizes="100vw"
          />
        </div>
      </Section>

      <Section
        className="overflow-hidden relative"
        classNameInner="max-w-none pb-10 pt-72 grid-cols-2 gap-4 md:pt-10 md:grid md:max-w-screen-lg">
        <Image
          alt="A man and woman smiling and sharing a computer on the couch. They are sitting next to a dog and working together on their PC."
          className="absolute h-full aspect-[3/2] w-auto object-cover top-0 left-0 z-5 md:hidden"
          src="/images/SpinTheWheel/offer-bg.png"
          width={375}
          height={250}
        />

        <Image
          alt="A man and woman smiling and sharing a computer on the couch. They are sitting next to a dog and working together on their PC."
          className="absolute h-full aspect-[3.21/1] w-auto object-cover top-0 left-0 z-5 hidden md:block 2xl:w-full 2xl:h-auto"
          src="/images/SpinTheWheel/offer-bg-desktop.png"
          width={1024}
          height={319}
        />

        <div className="bg-white relative shadow-xl z-10 p-6 rounded-20 xs:p-10">
          <h2 className="mb-4">Get the #1 Guide to Transform Your Love Life</h2>

          <p className="mb-4">
            The first step to better relationships? Knowing your standards. Grab the free guide now!
          </p>

          <ButtonScroll target="#freebie-form" label="SEND ME THIS FREE GUIDE!" />
        </div>
      </Section>
    </Page>
  )
}
