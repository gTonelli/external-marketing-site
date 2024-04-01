// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import Image from 'next/image'
import { SignupForm } from '@/components/Forms/SignupForm'
import { Trustbar } from '@/components/Trustbar/Trustbar'
import { Button } from '@/components/Button/Button'
import { Animation } from '@/components/Animation'
import { CarouselTestimonial } from '@/components/Carousel/variants/CarouselTestimonial'
import Link from 'next/link'
// config
import { ebookFeatureList, trustbarSlides } from './config'
// styles
import './style.css'

import type { Metadata } from 'next'
import { CarouselTestimonialPlain } from '@/components/Carousel/variants/CarouselTestimonialPlain'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'

export const metadata: Metadata = {
  title: "Thais Gibson's Integrated Attachment Theory Coaching Certification",
  description: 'Become an Integrated Attachment Coach through PDS',
  robots: 'noindex',
}

export default function IATInfoPage() {
  return (
    <Page page_name="IAT Info Page">
      <Section
        className="bg-gradient-to-b from-blue-lightest/10 via-blue-lightest to-primary-light/50 rounded-bl-[100px]"
        classNameInner="!max-w-screen-xl !text-left pb-24 lg:pb-36 lg:grid lg:grid-cols-[588px_1fr] lg:items-center lg:gap-32">
        <Animation>
          <p className="tracking-33 font-bold">BECOME A RELATIONSHIP EXPERT TODAY...</p>

          <h1>Learn How to Create a Thriving Coaching Business</h1>

          <p>
            If you're looking to build a coaching practice with{' '}
            <strong>the most effective tools</strong>, <strong>best client results</strong>, and to{' '}
            <strong>become financially free</strong>, you're in the right place!
          </p>

          <p>
            The first step is downloading <strong className="text-primary">our free e-book</strong>{' '}
            to learn how exactly to get started.
            <i> Note: It's only free for a limited time, so act fast!</i>
          </p>

          <EbookForm />
        </Animation>

        <Animation direction="fromRight">
          <Image
            priority
            alt="An image of Thais gibson on an eBoo kcover for 'Transforming Your Coaching Practice."
            className="my-4 lg:my-0 lg:w-full lg:max-w-md lg:mx-auto"
            src="/images/IATPage/InfoPage/hero.png"
            width={373}
            height={395}
            quality={95}
          />
        </Animation>
      </Section>

      <Section
        className="-mt-24 mx-auto overflow-visible !pb-0 lg:-mt-36"
        classNameInner="!max-w-screen-xl !text-left">
        <CarouselTestimonialPlain />
      </Section>

      <Section className="!pt-0">
        <TrustbarSlider
          brandLogosList={trustbarSlides}
          className="items-stretch"
          classNameImage="!mx-0"
          classNameSlides="flex flex-col flex-1 items-center justify-center"
        />
      </Section>

      <Section
        className="shadow-center-light lg:shadow-none"
        classNameInner="!max-w-screen-xl lg:p-20 lg:rounded-4xl lg:shadow-md">
        <h2 className="text-left lg:text-center">
          What is Stopping You from Living the Life You've Always Wanted?
        </h2>

        <p className="text-left lg:mb-8 lg:text-center">
          If you are looking to become a coach, are already a coach, or simply want to understand
          relationships better, you are in the right place. Download our free e-book to quickly
          learn coaching fundamentals and unlock the secret to successful relationships.
        </p>

        <div className="text-left">
          <p className="tracking-33 font-bold leading-6">TAKE A LOOK AT WHAT'S INSIDE...</p>

          {ebookFeatureList.map((feature, i) => (
            <div key={`ebook_feature_${i}`} className="border-b border-black mb-4">
              <h4 className="text-primary mb-2">{feature.heading}</h4>

              <p>
                <i>{feature.body}</i>
              </p>
            </div>
          ))}

          <h4 className="text-green">Bonus Content</h4>

          <p className="mb-8">
            <i>
              {' '}
              Learn more about how you can change the lives of others and harness your own financial
              freedom through a thriving coaching business.
            </i>
          </p>

          <Link href="#form">
            <Button label="CLAIM FREE E-BOOK" />
          </Link>
        </div>
      </Section>

      <Image
        alt="An image of the inside of the ebook. It shows many features about the eboo such as learning howe to identify core wounds or reqire emotional patterns."
        className="hidden w-full lg:block"
        src="/images/IATPage/InfoPage/ebook-preview.png"
        width={425}
        height={188}
        quality={100}
        sizes="100vw"
      />

      <Section classNameInner="!max-w-screen-xl !text-left lg:gap-24 lg:grid lg:grid-cols-2 lg:items-center">
        <Image
          alt="An image of thais looking at the camera and smiling"
          className="hidden lg:block"
          src="/images/IATPage/InfoPage/thais.png"
          width={516}
          height={484}
          quality={90}
        />

        <div>
          <h2>Let Me Guide You Through This...</h2>

          <p className="font-bold tracking-33 leading-6 mb-4 lg:mb-8">
            I'VE DONE IT THOUSANDS OF TIMES BEFORE
          </p>

          <Image
            alt="An image of thais looking at the camera and smiling"
            className="mb-4 lg:hidden"
            src="/images/IATPage/InfoPage/thais.png"
            width={516}
            height={484}
            quality={90}
          />

          <p>
            If you want to make a bigger impact on the lives of others, run your own thriving
            business, or simply want to become a relationship expert,{' '}
            <strong>I have the answers that you are searching for</strong>.
          </p>

          <p>
            As a relationship expert who has personally worked with thousands of clients worldwide,
            I know the <strong>exact formula for building a coaching business</strong> that will
            completely change your life.
          </p>

          <p>
            And the good news? It doesn't matter if you are already a coach, a therapist, or just
            starting out.
          </p>

          <p>
            <strong>The first step is simple</strong>. Download the free guide below to access the
            blueprint for a thriving business!
          </p>

          <Link href="#form">
            <Button label="CLAIM FREE E-BOOK" />
          </Link>
        </div>
      </Section>

      <Section
        className="bg-gradient-to-b from-blue-lightest/10 via-blue-lightest to-primary-light/50 lg:py-28"
        classNameInner="!max-w-screen-xl !text-left lg:grid lg:grid-cols-[588px_1fr] lg:items-center lg:gap-32">
        <div>
          <p className="font-bold tracking-33 leading-6 mb-8">
            BECOME A RELATIONSHIP EXPERT TODAY...
          </p>

          <h2>Claim Your Free E-book Now</h2>

          <p>
            If you are ready to become financially independent, make a real impact in the lives of
            others, and understand relationships from every angle, the first step is simple: simply
            download our free e-book to learn exactly how you can change your life.
          </p>

          <Image
            priority
            alt="An image of Thais gibson on an eBoo kcover for 'Transforming Your Coaching Practice."
            className="lg:hidden"
            src="/images/IATPage/InfoPage/hero.png"
            width={373}
            height={395}
            quality={95}
          />

          <EbookForm id="form" />
        </div>

        <Image
          priority
          alt="An image of Thais gibson on an eBoo kcover for 'Transforming Your Coaching Practice."
          className="hidden lg:block lg:w-full lg:max-w-md lg:mx-auto"
          src="/images/IATPage/InfoPage/hero.png"
          width={373}
          height={395}
          quality={95}
        />
      </Section>
    </Page>
  )
}

const EbookForm = ({ id }: { id?: string }) => (
  <SignupForm
    id={id}
    userTags={['iat-tips-ebook']}
    listIds={[54]}
    successMessage="Your e-book is on the way!"
  />
)
