// core

import Image from 'next/image'
// components
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { SocialProofMediaOutlets } from '@/components/SocialProof/SocialProofMediaOutlets'
import { Itinerary } from '@/components/Itinerary'
import { TextAndMedia } from '@/components/TextAndMedia'
import { PDSFeatures } from '@/components/PDSFeatures'
import { PricingSectionAlt } from '@/components/PricingSection/PricingSectionAlt'
import { CarouselTestimonial } from '@/components/Carousel/variants/CarouselTestimonial'
import { SocialProofStatistics } from '@/components/SocialProof/SocialProofStatistics'
import { Faq } from '@/components/Faq/Faq'
import { VideoStream } from '@/components/Video/variants/VideoStream'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
// config
import { ROYAL_RUMBLE } from '../../[style]/config'
import { SEGMENTED_RESULTS_PAGE_FA_CONFIG } from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck, faInfo } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faCheckCircle as faCheckCircleRegular } from '@awesome.me/kit-545b942488/icons/classic/regular'
// styles
import '@/styles/default-styles.css'
import './style.css'

export default function SegmentedResultsPage() {
  const config = SEGMENTED_RESULTS_PAGE_FA_CONFIG

  return (
    <Page page_name={`Segmented Results Page - fa`}>
      <Section className="bg-gradient-to-b from-pink-auxiliary via-white to-white">
        <h1 className="text-primary">
          Heal From Your Past, Change Your Negative Self-Talk & Finally Feel Secure In Yourself
        </h1>

        <p className="mb-0">
          If you want closeness but often find relationships very triggering and difficult, you’re
          not broken—you’re fearful-avoidant.
        </p>

        <p className="lg:mb-10">
          <strong className="text-success">
            As you read this page, you’ll learn that these painful patterns do not have to stay this
            way forever, because you can rewire them (the secret to real change).
          </strong>
        </p>

        <ButtonCheckout label="START YOUR PERSONALIZED HEALING JOURNEY" />
      </Section>

      <Section className="!pt-0" classNameInner="lg:p-10 lg:shadow-centered-2 lg:rounded-20">
        <VideoStream
          className="max-w-xl mx-auto mb-8"
          videoId="2308ea025543fcf37c63cea63c2bd845"
          thumbnailSrc="https://pds-strapi-bucket.s3.ca-central-1.amazonaws.com/pds_video_thumbnail_3437236ac6.jpg"
        />

        <h2 className="text-center">Your Quiz Result: Fearful Avoidant Attachment Style</h2>

        <div className="text-left">
          <p>
            If you’re reading this, chances are that you’ve been on the emotional
            rollercoaster—yearning for closeness, only to feel frequently triggered, which then
            causes you to self-sabotage love. Fearful avoidant attachment develops when love feels
            unsafe—often from inconsistent or traumatic relationships in childhood or past
            relationships, romantic or otherwise. 
          </p>

          <p>
            You may long for connection but fear getting hurt, leading to emotional push-pull
            patterns. You might find yourself shutting down, questioning others' intentions, or
            sabotaging closeness when it starts to feel too real. Understanding your attachment
            style is the first step to healing—and finally building the secure love you deserve.
          </p>

          <p>
            None of this means that you are broken. You just learned, early on, that love was
            inconsistent and chaotic—sometimes safe and other times threatening. As a result, your
            subconscious mind was conditioned with mixed signals about love. As an adult, you play
            out these mixed signals in relationships.
          </p>

          <p>
            The harder you try to “fix”  the volatility in your relationships it with willpower, the
            worse it gets. This is because your subconscious mind likes the familiarity of what it
            knows, even causing you to be attracted to emotionally unavailable people. This cycle is
            exhausting, but the good news is that it is a solvable problem – through learning to
            rewire your subconscious mind.
          </p>

          <ButtonScroll label="VIEW MY PATH TO HEALING" target="#path-to-healing" />
        </div>
      </Section>

      <Section className="relative shadow-centered-2">
        <SocialProofMediaOutlets />
      </Section>

      <TextAndMedia
        heading="Why Attachment Style Matters & Why Our Way Works"
        body={config.sectionTwo.body}
        image={config.sectionTwo.image}
        button={<ButtonScroll label="VIEW MY PATH TO HEALING" target="#path-to-healing" />}
      />

      <Section>
        <h2>Does This Sound Like You?</h2>

        <div className="text-left mb-4 md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3 lg:gap-x-8">
          {config.sectionThree.listItems.map((text, i) => (
            <div key={`section_three_list_item_${i}`} className="grid grid-cols-[20px_1fr] gap-x-4">
              <FontAwesomeIcon
                size="xs"
                className="text-white rounded-full bg-success px-[6px] py-[5px] relative top-1"
                icon={faCheck}
              />

              <p>{text}</p>
            </div>
          ))}
        </div>
      </Section>

      <TextAndMedia
        heading="This ISN’T Your Fault…"
        body={config.sectionFour.body}
        classNameInner="gap-6 rounded-2xl bg-pink-auxiliary px-4 py-10 lg:grid-cols-[282px_484px] lg:items-center lg:py-15 lg:px-52"
        image={config.sectionFour.image}
      />

      <Section>
        <h2>The Secret Ingredient to Finally Healing...</h2>

        {config.sectionFive.body.map((text, i) => (
          <p key={`section_five_text_${i}`}>{text}</p>
        ))}

        <div className="grid gap-4 mb-4 lg:items-stretch lg:grid-cols-3">
          {config.sectionFive.steps.map((step, i) => (
            <div key={`section_five_step_${i}`} className="bg-grey-8 rounded-2xl p-4 text-left">
              <div className="flex">
                <FontAwesomeIcon
                  className="mr-4 text-white bg-black py-1 px-2 rounded"
                  icon={step.icon}
                />

                <p className="font-bold tracking-33">STEP {i + 1}</p>
              </div>

              <p className="font-bold">{step.heading}</p>

              <p>{step.text}</p>
            </div>
          ))}
        </div>

        {config.sectionFive.bodyTwo.map((text, i) => (
          <p key={`section_five_text_two_${i}`}>{text}</p>
        ))}

        <ButtonCheckout label="START HEALING TODAY" />
      </Section>

      <Itinerary
        subheading={config.sectionSix.subheading}
        listItems={config.sectionSix.weeksItems}
      />

      <TextAndMedia
        heading="Discover The Personal Development School"
        body={config.sectionSeven.body}
        image={config.sectionSeven.image}
        button={<ButtonCheckout className="mt-8" label="START MY PROGRAM" />}
      />

      <Section className="!p-0 relative" classNameInner="lg:grid lg:grid-cols-12">
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b section-eight-gradient" />

        <Image
          className="w-full h-[300px] object-cover object-right relative z-5 lg:absolute lg:top-0 lg:left-0 lg:h-full"
          alt="A woman smiling on her tablet"
          width={375}
          height={300}
          src="/images/SegmentedResultsPages/woman-smiling-on-tablet.jpg"
          quality={100}
          sizes="100vw"
        />

        <div className="default-padding relative z-15 text-left lg:pb-4 lg:col-span-9">
          <h2>Your Personalized Healing Program</h2>

          <p>
            <strong>Our promise</strong>: If you do the work, you will see massive transformation.{' '}
            <strong>
              When you use the Secure Rewiring Method™ in our 90-Day Bootcamp, if you don’t feel
              completely different and experience massive changes in your relationships—we’ll refund
              you and extend your membership free until you do. You either transform or you pay
              nothing.
            </strong>{' '}
            That’s how confident we are in this working for you.
          </p>

          <p>
            <strong>The 90-Day Bootcamp is mapped step by step:</strong>
          </p>

          <ul>
            {config.sectionEight.listOne.map((text, i) => (
              <li key={`section_eight_list_one_item_${i}`} className="flex">
                <FontAwesomeIcon className="text-success mr-2 pt-[5px]" icon={faCheck} />

                <p>{text}</p>
              </li>
            ))}
          </ul>

          <p>
            <strong>
              In just 10 minutes a day, you’ll rewire your Six Hidden Pillars into the Six Keys to
              Secure Attachment from our proprietary, copyrighted system that include:
            </strong>
          </p>

          <ul>
            {config.sectionEight.listTwo.map((text, i) => (
              <li key={`section_eight_list_two_item_${i}`} className="flex">
                <FontAwesomeIcon className="text-success mr-2 pt-[5px]" icon={faCheck} />

                <p>{text}</p>
              </li>
            ))}
          </ul>

          <p className="lg:hidden">
            There are daily, optional live events that you can attend (twice per day) for any follow
            up support that you need. You’ll get your questions answered by trained counsellors and
            coaches, be able to connect with other like-minded people on the same journey of growth
            and be able to truly enjoy the journey!
          </p>

          <p className="lg:hidden">
            If you’ve been trapped in the push–pull of fearful avoidant attachment, this is your
            moment. The program is designed so anyone—no matter your history—can recondition old
            patterns and start feeling secure. That’s because everyone’s subconscious mind works the
            same way.
          </p>
        </div>
      </Section>

      <Section className="bg-green-light" classNameInner="!max-w-3xl">
        <p className="hidden lg:block">
          There are daily, optional live events that you can attend (twice per day) for any follow
          up support that you need. You’ll get your questions answered by trained counsellors and
          coaches, be able to connect with other like-minded people on the same journey of growth
          and be able to truly enjoy the journey!
        </p>

        <p className="hidden lg:block">
          If you’ve been trapped in the push–pull of fearful avoidant attachment, this is your
          moment. The program is designed so anyone—no matter your history—can recondition old
          patterns and start feeling secure. That’s because everyone’s subconscious mind works the
          same way.
        </p>
      </Section>

      <PDSFeatures />

      <PricingSectionAlt />

      <Section className="bg-green-7" classNameInner="grid gap-4 text-left lg:grid-cols-2">
        <h2 className="text-center lg:col-span-2">What You’ll Experience</h2>

        {config.sectionTen.featuresList.map((text, i) => (
          <div className="flex text-left" key={`section_ten_features_list_item_${i}`}>
            <FontAwesomeIcon
              className="text-primary rounded-full mr-2 pt-[5px]"
              icon={faCheckCircleRegular}
              size="sm"
            />

            <p>{text}</p>
          </div>
        ))}
      </Section>

      <CarouselTestimonial
        classNameHeaderWrapper="!justify-center"
        classNameHeader="lg:px-16"
        classNameQuotations="lg:w-12"
        headingText="Here's What Our Students Say:"
        quotationSizes="(min-width: 1024px) 48px"
      />

      <Section className="bg-black-2" classNameInner="!max-w-3xl">
        <SocialProofStatistics
          includeButton
          classNameCardWrapper="!mt-0 mb-4"
          classNameHeading="text-white"
        />
      </Section>

      <Section classNameInner="!max-w-3xl">
        <Faq className="!p-0" faq={ROYAL_RUMBLE.FAQs} />

        <div className="!p-4 bg-blue-3 rounded lg:col-span-2 grid gap-4 mb-4 lg:mb-6 lg:grid-cols-[21px_1fr]">
          <FontAwesomeIcon
            className="text-blue-darkest bg-transparent border-2 border-blue-darkest rounded-full px-[6px] py-[2px]"
            icon={faInfo}
            size="xs"
          />

          <p className="text-left">
            *Disclaimer: The 90-day guarantee is subject to the following terms: you must have
            completed all 7 attachment style courses, completed the Kickstart Challenge, and retaken
            The Personal Development School’s Attachment Style Quiz and scored less than 50% as
            Securely Attached. Only then can you obtain a full refund.
          </p>
        </div>

        <div className="text-left">
          <p>
            As we mentioned, here’s our promise:{' '}
            <strong>
              When you use the Secure Rewiring Method™ in our 90-Day Bootcamp, if you don’t feel
              completely different and experience massive changes in your relationships—we’ll refund
              you and extend your membership free until you do.
            </strong>{' '}
            You either transform or you pay nothing. The only condition is that you must actually
            complete the program!
          </p>

          <ul>
            {config.sectionEleven.listItems.map((item, i) => (
              <li key={`section_eleven_list_item_${i}`} className="flex">
                <FontAwesomeIcon className="text-success mr-2" icon={faCheck} />

                <p>{item}</p>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </Page>
  )
}
