// core
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { Itinerary } from '@/components/Itinerary'
import { TextAndMedia } from '@/components/TextAndMedia'
import { PDSFeatures } from '@/components/PDSFeatures'
import { PricingSectionAlt } from '@/components/PricingSection/PricingSectionAlt'
import { CarouselTestimonial } from '@/components/Carousel/variants/CarouselTestimonial'
import { SocialProofStatistics } from '@/components/SocialProof/SocialProofStatistics'
import { Faq } from '@/components/Faq/Faq'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { SocialProofMediaOutlets } from '@/components/SocialProof/SocialProofMediaOutlets'
// config
import { SEGMENTED_RESULTS_PAGE_AP_CONFIG } from './config'
import { ROYAL_RUMBLE } from '../../[style]/config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faLightbulb } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faInfo, faSparkles } from '@awesome.me/kit-545b942488/icons/classic/solid'
// styles
import '@/styles/default-styles.css'
import './style.css'

export default function SegmentedResultsPage() {
  const config = SEGMENTED_RESULTS_PAGE_AP_CONFIG

  return (
    <Page page_name={`Segmented Results Page - ap`}>
      <Section className="bg-gradient-to-b from-pink-auxiliary via-white to-white">
        <div className="bg-white rounded-20 p-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:p-10 lg:items-center">
          <VideoThumbnail
            className="lg:rounded-20"
            srcUrl={''}
            thumbnailUrl="AttachmentQuizResults/thais-writing.jpg"
          />

          <div className="text-left">
            <h2 className="text-center text-primary lg:text-left">
              Why do I love so much… and still feel like it’s never enough?
            </h2>

            <p>
              If you constantly find yourself chasing, overthinking, and fearing abandonment—only to
              end up feeling like you’re “too much”—your attachment style is driving the pattern.
              Right now, you’re going to learn how to rewire those subconscious fears so you can
              finally feel calm and confident in love.
            </p>

            <ButtonCheckout label="START YOUR PERSONALIZED HEALING JOURNEY" />
          </div>
        </div>
      </Section>

      <Section classNameInner="grid gap-4 lg:grid-cols-2 lg:gap-6 lg:items-center">
        <div className="text-left">
          <h2>Your Quiz Results: Anxious Preoccupied Attachment Style</h2>

          {config.sectionTwo.body.map((text, i) => (
            <p key={`section_two_body_${i}`}>{text}</p>
          ))}

          <ButtonCheckout label="VIEW MY PATH TO HEALING" />
        </div>

        <Image
          src="/images/SegmentedResultsPages/woman-frowning-with-phone.png"
          alt="A woman holding a phone with a frown on her face"
          className="w-full rounded-2xl"
          width={588}
          height={378}
        />
      </Section>

      <Section className="relative shadow-centered-2">
        <SocialProofMediaOutlets />
      </Section>

      <Section className="bg-green-7" classNameInner="!max-w-3xl">
        <h2>Why Attachment Style Matters In Your Love Life</h2>

        <p>
          Attachment styles have been studied for decades, starting with John Bowlby at Cambridge
          University. For a long time, people were told their attachment style was permanent—a
          subconscious blueprint for love they’d be stuck with forever. But with Integrated
          Attachment Theory™, everything changes. Created by Thais Gibson, IAT™ shows you that your
          attachment style isn’t stuck one way forever—you can heal it, rewire it, and create the
          love you’ve always longed for. When you do, your relationships stop feeling like a battle
          and start feeling like home.
        </p>
      </Section>

      <Section classNameInner="grid gap-4 lg:grid-cols-3">
        <h2 className="lg:col-span-3">Anxious Attachment Styles Often End Up…</h2>

        {config.sectionFour.listItems.map((item, i) => (
          <li key={`section_four_list_item_${i}`} className="flex">
            <FontAwesomeIcon icon={faLightbulb} className="pt-[5px] mr-2 text-red-2" />

            <p className="text-left">{item}</p>
          </li>
        ))}

        <ButtonCheckout
          className="lg:block lg:col-span-3 lg:w-max lg:mx-auto"
          label="START HEALING TODAY"
        />
      </Section>

      <TextAndMedia heading="Instead…" image={config.sectionFive.image}>
        <ul>
          {config.sectionFive.listItems.map((item, i) => (
            <li key={`section_five_list_item_${i}`} className="flex">
              <FontAwesomeIcon icon={faSparkles} className="mr-2 text-green-9" />

              <p>{item}</p>
            </li>
          ))}
        </ul>

        {config.sectionFive.body.map((text, i) => (
          <p key={`section_five_body_${i}`}>{text}</p>
        ))}
      </TextAndMedia>

      <TextAndMedia
        reverse
        heading="What Makes This Different…"
        body={config.sectionSix.body}
        image={config.sectionSix.image}
      />

      <TextAndMedia
        classNameInner="lg:grid-cols-[288px_1fr]"
        heading="Why It’s Not Your Fault"
        body={config.sectionSeven.body}
        image={config.sectionSeven.image}
        button={<ButtonCheckout label="START HEALING TODAY" />}
      />

      <Itinerary listItems={config.sectionEight.listItems} />

      <TextAndMedia
        heading="Discover The Personal Development School"
        body={config.sectionNine.body}
        image={config.sectionNine.image}
        button={<ButtonCheckout className="mt-8" label="START MY PROGRAM" />}
      />

      <Section className="!p-0 relative" classNameInner="lg:grid lg:grid-cols-12">
        <div className="absolute top-0 left-0 z-10 w-full h-full bg-gradient-to-b section-ten-gradient" />

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
          <h2>Your Personalized Healing Path</h2>

          <p>
            <strong>Our promise</strong>: If you commit only 10-minutes a day, you will experience
            massive transformation. You’ll finally be empowered to end the cycle of chasing, fearing
            abandonment, overthinking, and feeling “too much.”
          </p>

          <div className="bg-white rounded p-4 grid gap-2 grid-cols-[20px_1fr] mb-4">
            <FontAwesomeIcon
              className="text-blue-darkest bg-transparent border-2 border-blue-darkest rounded-full px-[6px] py-[2px] mt-[5px]"
              icon={faInfo}
              size="xs"
            />

            <span>
              If you don’t feel completely different in 90 days, we’ll refund you and extend your
              membership for free—so you either transform or pay nothing.
            </span>
          </div>

          <p>
            <strong>The 90-Day Bootcamp is mapped step by step:</strong>
          </p>

          <ul>
            {config.sectionTen.listItems.map((text, i) => (
              <li key={`section_ten_list_one_item_${i}`} className="flex">
                <FontAwesomeIcon className="text-primary mr-2" icon={faCheckCircle} />

                <p>{text}</p>
              </li>
            ))}
          </ul>

          <p>
            In just 10 minutes a day, you’ll rewire your Six Hidden Pillars into the Six Keys to
            Secure Attachment from our proprietary, copyrighted system.
          </p>

          <p>
            By working with your subconscious directly, you’ll replace fear and overthinking with
            calm confidence and self-worth.
          </p>

          <div className="lg:hidden">
            <h2>This Is Only Available For A Short Time…</h2>

            <p>
              There are daily, optional live events that you can attend (twice per day) for any
              follow up support that you need. You’ll get your questions answered by trained
              counselors and coaches, be able to connect with other like-minded people on the same
              journey of growth and be able to truly enjoy the journey!
            </p>

            <p>
              If you’ve been trapped in the push–pull of fearful avoidant attachment, this is your
              moment. The program is designed so anyone—no matter your history—can recondition old
              patterns and start feeling secure. That’s because everyone’s subconscious mind works
              the same way.
            </p>
          </div>
        </div>
      </Section>

      <Section className="hidden bg-blue-lightest lg:block">
        <h2>This Is Only Available For A Short Time…</h2>

        <p>
          There are daily, optional live events that you can attend (twice per day) for any follow
          up support that you need. You’ll get your questions answered by trained counselors and
          coaches, be able to connect with other like-minded people on the same journey of growth
          and be able to truly enjoy the journey!
        </p>

        <p>
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

        {config.sectionEleven.featuresList.map((text, i) => (
          <div className="flex text-left" key={`section_ten_features_list_item_${i}`}>
            <FontAwesomeIcon
              className="text-primary rounded-full mr-2 pt-[5px]"
              icon={faCheckCircle}
              size="sm"
            />

            <p>{text}</p>
          </div>
        ))}
      </Section>

      <TextAndMedia
        reverse
        heading="As mentioned, here’s our promise to you:"
        body={config.sectionTwelve.body}
        image={config.sectionTwelve.image}
      />

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
      </Section>

      <Section className="relative !py-40 lg:!py-22" classNameInner="!max-w-xl">
        <Image
          src="/images/SegmentedResultsPages/vector-wave-background-1.png"
          alt="A stylized wave of vectors meant to accent the inner text"
          className="absolute top-0 left-0 w-full h-full object-cover z-5 md:hidden"
          width={375}
          height={748}
          sizes="100vw"
          quality={100}
          tabIndex={-1}
        />

        <Image
          src="/images/SegmentedResultsPages/vector-wave-background-desktop.png"
          alt="A stylized wave of vectors meant to accent the inner text"
          className="absolute top-0 left-0 w-full h-full object-cover z-5 hidden md:block"
          width={1440}
          height={500}
          sizes="100vw"
          quality={100}
          tabIndex={-1}
        />

        <div className="relative z-10">
          <h2>What Happens If You Don't Take Action</h2>

          {config.sectionFifteen.body.map((text, i) => (
            <p key={`section_fifteen_body_${i}`}>{text}</p>
          ))}

          <ButtonCheckout label="TAKE ACTION & START HEALING NOW!" />
        </div>
      </Section>
    </Page>
  )
}
