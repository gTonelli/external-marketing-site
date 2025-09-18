// core

import Image from 'next/image'
// components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCheck,
  faCheckCircle,
  faChevronDown,
  faInfo,
} from '@awesome.me/kit-545b942488/icons/classic/solid'
import { faCheckCircle as faCheckCircleRegular } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { Expandable } from '@/components/Expandable'
// libraries
import cx from 'classnames'
// utils
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { SEGMENTED_RESULTS_PAGE_FA_CONFIG } from './config'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
// styles
import '@/styles/default-styles.css'
import './style.css'

import { CarouselTestimonial } from '@/components/Carousel/variants/CarouselTestimonial'
import { SocialProofStatistics } from '@/components/SocialProof/SocialProofStatistics'
import { Faq } from '@/components/Faq/Faq'
import { ROYAL_RUMBLE } from '../../[style]/config'
import { SocialProofMediaOutlets } from '@/components/SocialProof/SocialProofMediaOutlets'

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
        <VideoThumbnail
          className="max-w-xl mx-auto mb-4"
          srcUrl="https://storage.googleapis.com/pds_videos/FA_VSL_FUNNEL.mp4"
          thumbnailUrl="AttachmentQuizResults/thais-writing.jpg"
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

          <ButtonCheckout label="VIEW MY PATH TO HEALING" />
        </div>
      </Section>

      <Section className="relative shadow-centered-2">
        <SocialProofMediaOutlets />
      </Section>

      <Section
        className="bg-green-7"
        classNameInner="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <Image
          alt="A couple smiling at each other on the couch and high-fiving"
          className="w-full h-auto rounded-20"
          width={343}
          height={267}
          quality={90}
          src="/images/SegmentedResultsPages/high-fiving-couple.jpg"
        />

        <div className="text-left">
          <h2>Why Attachment Style Matters & Why Our Way Works</h2>

          <p>
            {config.sectionTwo.body.map((text, i) => (
              <p key={`serction_two_text_${i}`}>{text}</p>
            ))}
          </p>

          <ButtonCheckout label="VIEW MY PATH TO HEALING" />
        </div>
      </Section>

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

      <Section classNameInner="grid gap-6 rounded-2xl bg-pink-auxiliary px-4 py-10 lg:grid-cols-[282px_484px] lg:items-center lg:py-15 lg:px-52">
        <Image
          src="/images/SegmentedResultsPages/consciousness-pie-chart.png"
          alt="A pie chart of consciousness vs subconscious - 97% subconscious and 3% conscious"
          className="lg:w-72 lg:h-72 ml-auto"
          width={250}
          height={250}
          quality={100}
        />

        <div className="text-left">
          <h2>This ISN’T Your Fault…</h2>

          {config.sectionFour.body.map((text, i) => (
            <p key={`section_four_text_${i}`}>{text}</p>
          ))}
        </div>
      </Section>

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

      <Image
        src="/images/SegmentedResultsPages/teal-wave.png"
        className="w-full"
        alt="Teal wave"
        width={1920}
        height={57}
        quality={100}
        tabIndex={-1}
      />

      <Section className="bg-[rgba(227,237,237,0.5)]" classNameInner="!max-w-4xl">
        <h2>Your 90 Day Path to Healing</h2>

        {config.sectionSix.body.map((text, i) => (
          <p key={`section_six_text_${i}`}>{text}</p>
        ))}

        {config.sectionSix.weeksItems.map((item, i) => (
          <Expandable
            key={`section_six_week_item_${i}`}
            className="bg-white rounded-20 border-2 border-green mb-4"
            contentInnerClassName="text-left px-6 grid gap-4 grid-cols-[20px_1fr]"
            open={i === 0}
            openedClassName="bg-white rounded-20 border-2 border-green mb-4"
            trigger={
              <div className="flex justify-between items-center p-6">
                <p className="text-primary font-bold mb-0">{item.heading}</p>

                <FontAwesomeIcon
                  className="text-primary transition-transform"
                  icon={faChevronDown}
                />
              </div>
            }>
            <FontAwesomeIcon
              className="text-white rounded-full py-1 px-[5px] bg-success"
              icon={faCheck}
            />

            <div>
              {item.body.map((text, i) => (
                <p key={`section_six_week_item_text_${i}`}>{text}</p>
              ))}

              <p className="text-grey-9">
                Recommended time: {item.hoursPerWeek} hour{item.hoursPerWeek > 1 ? 's' : ''} per
                week
              </p>
            </div>
          </Expandable>
        ))}

        <div className="border-[3px] border-green-8 rounded-xl px-8 py-10 mt-10 bg-[rgba(49,212,0,0.18)]">
          <h2 className="font-bold mb-0">Change Your Life–Or Pay nothing</h2>

          {config.sectionSix.card.body.map((text, i) => (
            <p key={`section_six_card_text_${i}`}>{text}</p>
          ))}

          <ButtonCheckout className="mt-7" label="START MY PROGRAM" />
        </div>
      </Section>

      <Section classNameInner="grid gap-4 lg:grid-cols-2 lg:items-center lg:gap-8">
        <Image
          src="/images/SegmentedResultsPages/pds-mockup-macbook.png"
          alt="A mockup of PDS courses on a Macbook"
          className="w-full rounded-2xl"
          width={577}
          height={418}
        />

        <div className="text-left">
          <h2>Discover The Personal Development School</h2>

          {config.sectionSeven.body.map((text, i) => (
            <p key={`section_seven_text_${i}`}>{text}</p>
          ))}

          <ButtonCheckout className="mt-8" label="START MY PROGRAM" />
        </div>
      </Section>

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
                <FontAwesomeIcon className="text-success mr-2" icon={faCheckCircle} />

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
                <FontAwesomeIcon className="text-success mr-2" icon={faCheckCircle} />

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

      <Section classNameInner="grid gap-4 !max-w-3xl lg:grid-cols-2 lg:gap-6">
        <h2 className="lg:col-span-2">
          What’s Included In Your Transformation Journey With Your All-Access Pass Membership:
        </h2>

        <div className="text-left">
          <h4 className="text-primary mb-4">The Core Program ($999 Value)</h4>

          <ul>
            {config.sectionNine.coreProgram.map((text, i) => (
              <li key={`section_nine_core_program_item_${i}`} className="flex">
                <FontAwesomeIcon
                  className="text-white bg-primary border border-primary rounded-full mr-2"
                  icon={faCheckCircle}
                />

                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <Image
          src="/images/SegmentedResultsPages/core-program.png"
          alt="Core program"
          className="w-full"
          width={384}
          height={306}
        />

        <Image
          src="/images/SegmentedResultsPages/bonus-community-access.png"
          alt="Bonus community access"
          className="w-full"
          width={384}
          height={204}
        />

        <div className="text-left">
          <h4 className="text-primary mb-4">Bonus Community Access ($499 Value)</h4>

          <ul>
            {config.sectionNine.bonusCommunityAccess.map((text, i) => (
              <li key={`section_nine_bonus_community_access_item_${i}`} className="flex">
                <FontAwesomeIcon
                  className="text-white bg-primary border border-primary rounded-full mr-2"
                  icon={faCheckCircle}
                />

                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="text-left">
          <h4 className="text-primary mb-4">Bonus Course Library ($1999+ Value)</h4>

          <ul>
            {config.sectionNine.bonusCourseLibrary.map((text, i) => (
              <li key={`section_nine_bonus_course_library_item_${i}`} className="flex">
                <FontAwesomeIcon
                  className="text-white bg-primary border border-primary rounded-full mr-2"
                  icon={faCheckCircle}
                />

                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <Image
          src="/images/SegmentedResultsPages/bonus-course-library.png"
          alt="Bonus course library"
          className="w-full"
          width={384}
          height={175}
        />

        <Image
          src="/images/SegmentedResultsPages/tools-trackers.png"
          alt="Tools and trackers"
          className="w-full"
          width={384}
          height={198}
        />

        <div className="text-left">
          <h4 className="text-primary mb-4">Tools and Trackers</h4>

          <ul>
            {config.sectionNine.toolsAndTrackers.map((text, i) => (
              <li key={`section_nine_tools_and_trackers_item_${i}`} className="flex">
                <FontAwesomeIcon
                  className="text-white bg-primary border border-primary rounded-full mr-2"
                  icon={faCheckCircle}
                />

                <p>{text}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="!p-4 bg-blue-3 rounded lg:col-span-2 grid gap-4 lg:grid-cols-[21px_1fr]">
          <FontAwesomeIcon
            className="text-blue-darkest bg-transparent border-2 border-blue-darkest rounded-full px-[6px] py-[2px]"
            icon={faInfo}
            size="xs"
          />

          <div className="text-left">
            <p>
              <strong>90-Day Money-Back Guarantee </strong>
            </p>

            <p>
              If you complete all 7 attachment styles courses, follow the 15-Day Kickstart
              Challenge, and still don’t feel like at least 50% securely attached,{' '}
              <strong>we’ll refund every penny*</strong>. That’s how confident we are in your
              transformation.
            </p>

            <p>
              <em>*See more details at the bottom of the page.</em>
            </p>
          </div>
        </div>
      </Section>

      <Section classNameInner="grid gap-4 lg:grid-cols-2 lg:gap-6 lg:!max-w-[996px]">
        <Image
          src="/images/SegmentedResultsPages/features-mockup.png"
          alt="4 devices, a laptop, mac, and 2 tablets showing PDS features like a course player, webinars and Q&A sessions"
          className="w-full"
          width={466}
          height={270}
        />

        <div className="relative text-left py-10 px-6 rounded-20 shadow-centered-card-2 overflow-hidden">
          <p className="absolute top-7 -right-24 w-max font-bold bg-green-9 text-white px-24 rotate-45">
            SAVE 30%
          </p>

          <h3 className="mb-0">Exclusive Offer & Value</h3>

          <p>Total Value: $3,497+</p>

          <div className="lg:flex lg:items-center">
            <p>
              <strong>Today’s Price</strong>
            </p>

            <div className="flex items-center text-primary">
              <p className="font-bold text-[40px] leading-[40px] mr-2 lg:mx-4">$67.00</p>

              <p> / per month</p>
            </div>
          </div>

          <p className="max-w-[400px]">
            <strong>A 30% discount off the regular price for the All-Access Pass for LIFE.</strong>
          </p>

          <ButtonCheckout label="JOIN THE ALL-ACCESS TODAY" />
        </div>
      </Section>

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
