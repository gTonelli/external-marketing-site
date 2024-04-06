// components
import { Section } from '@/app/(custom-layouts)/(quiz-v2)/quiz/v2/config'
import { EExternalRoutes } from '@/utils/constants'
import Link from 'next/link'
import { Button } from '../Button/Button'
import Image from 'next/image'
import { AttachmentQuizV2SelfImprovementSlider } from './AttachmentQuizV2SelfImprovementSlider'
import { Icon } from '../Icon'
import { Animation } from '../Animation'
import { TrustbarSlider } from '../Trustbar/variants/TrustbarSlider'
import { VideoYoutube } from '../Video/variants/VideoYoutube'
import { PricingSection } from '../PricingSection'
import { IconName } from '@fortawesome/fontawesome-common-types'
import { CarouselTestimonial } from '../Carousel/variants/CarouselTestimonial'
import { Faq } from '../Faq/Faq'
// config
import {
  aapWhatsIncluded,
  courseCommunityOutcomes,
  faqCopy,
  footerCards,
  mockupSectionCards,
  toolsStrategies,
} from './config'
// libraries
import cx from 'classnames'

export const AttachmentQuizV2ResultsOfferSections = () => {
  return (
    <>
      <Section className="!px-0 !pt-0">
        <div className="default-padding !pb-0 !pt-0 mb-8">
          <Animation>
            <h3 className="mb-6">
              Become a better version of yourself with courses, global community and live coaching
              of The Personal Development School.
            </h3>
          </Animation>

          <Animation direction="fromRight">
            <Link href={EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION}>
              <Button label="GET STARTED" />
            </Link>
          </Animation>
        </div>

        <div className="relative w-full grid grid-cols-5 gap-1">
          <div className="absolute top-0 left-0 z-5 w-full h-full bg-gradient-to-t from-white/70 to-transparent" />

          <Animation direction="fromBottom" delay={0}>
            <Image
              alt="A thumbnail for the PDS Course: Handbook for a Better Life"
              src="/images/course-handbook-for-a-better-life-alt.png"
              width={224}
              height={125}
              quality={95}
            />
          </Animation>

          <Animation direction="fromBottom" delay={0.15}>
            <Image
              alt="A thumbnail for the PDS Course: Discover, Embrace & Fulfill Your Personal Needs"
              src="/images/course-personal-needs-alt.png"
              width={224}
              height={125}
              quality={95}
            />
          </Animation>

          <Animation direction="fromBottom" delay={0.3}>
            <Image
              alt="A thumbnail for the PDS Course: Fearful Avoidant Advanced: Thrive in the 6 stages of your relationship"
              src="/images/course-fa-advance-alt.png"
              width={224}
              height={125}
              quality={100}
            />
          </Animation>

          <Animation direction="fromBottom" delay={0.45}>
            <Image
              alt="A thumbnail for the PDS Course: Emotional Mastery & Belief Reprogramming"
              src="/images/course-emotional-mastery-alt.png"
              width={224}
              height={125}
              quality={95}
            />
          </Animation>

          <Animation direction="fromBottom" delay={0.6}>
            <Image
              alt="A thumbnail for the PDS Course: Overcoming Unworthiness & Accepting Your Shadow"
              src="/images/course-shadow-work-alt.png"
              width={224}
              height={125}
              quality={95}
            />
          </Animation>
        </div>
      </Section>

      <Section classNameInner="default-padding bg-gradient-to-b from-blue-lightest/50 to-blue-light/50 rounded-20 !text-left lg:shadow-md">
        <Animation>
          <h3 className="mb-4">Your Guided 7-Day Roadmap to Self-Improvement</h3>
        </Animation>

        <Animation delay={0.15}>
          <p>
            Our roadmap will guide your transformational journey with powerful tools, easy-to-digest
            courses, insightful webinars, supportive community, and exclusive interaction with
            Thais!
          </p>
        </Animation>

        <AttachmentQuizV2SelfImprovementSlider />
      </Section>

      <Section classNameInner="lg:grid lg:grid-cols-3 lg:gap-x-6">
        <Animation className="max-w-3xl mx-auto mb-4 lg:col-span-3">
          <h2>Your journey can be tough – but not when you have The Personal Development School</h2>
        </Animation>

        <Animation className="max-w-3xl mx-auto lg:mb-8 lg:col-span-3">
          <p>
            I built The Personal Development School with a single mission: to empower your personal
            growth through simple-to-digest and on-demand courses, practical exercises and
            strategies, webinars, and community support to accomplish your goals more
            straightforward, manageable, and possible
          </p>
        </Animation>

        {mockupSectionCards.map((data, i) => (
          <Animation key={`mockup_section_card_${i}`} direction="fromBottom">
            <Image
              alt={data.imgAlt}
              className="mb-4 w-2/3 max-w-[300px] mx-auto lg:w-full"
              src={data.imgSrc}
              width={300}
              height={200}
              quality={95}
            />

            <h4 className="mb-4 lg:!text-h3">{data.heading}</h4>

            <ul className="text-left">
              {data.listItems.map((item, j) => (
                <li key={`mockup_section_li_${i}_${j}`} className="flex mb-4">
                  <Icon className="text-primary mr-2 mt-1" name="circle-check" type="light" />

                  <p className="mb-0">{item}</p>
                </li>
              ))}
            </ul>
          </Animation>
        ))}
      </Section>

      <Animation>
        <TrustbarSlider />
      </Animation>

      <Section>
        <Animation>
          <h3 className="mb-4">The Results You’ll Get With Our Courses & Community</h3>
        </Animation>

        <Animation delay={0.15}>
          <p className="lg:mb-8">
            Our average members tell us that 10 minutes a day for 90 days is all you need experience
            these transformations
          </p>
        </Animation>

        <ul className="md:grid md:grid-cols-2 md:gap-4 lg:grid-cols-3">
          {courseCommunityOutcomes.map((outcome, i) => (
            <Animation key={`outcome_${i}`} delay={i * 0.1} direction="fromBottom">
              <li className="mb-2 text-white bg-black/80 p-2 rounded-lg lg:p-4 lg:mb-0">
                {outcome}
              </li>
            </Animation>
          ))}
        </ul>
      </Section>

      <Section className="bg-green-light">
        <Animation>
          <h3 className="mb-4 max-w-3xl mx-auto lg:hidden">
            Taking your life to the next level with Thais Gibson - Expert in Attachment Style
          </h3>
        </Animation>

        <Animation>
          <h2 className="hidden mb-4 max-w-3xl mx-auto lg:block">
            Take your life to the next level with Thais Gibson –  Ph.D. certified, best-selling
            author, and personal development leader
          </h2>
        </Animation>

        <Animation>
          <VideoYoutube
            className="max-w-4xl mx-auto"
            videoId="D2a2v4c9Xg8"
            thumbnail="/images/AttachmentQuizResults/V2/video-thumbnail.png"
            thumbnailQuality={95}
          />
        </Animation>

        <div className="bg-blue-light h-1 w-full mt-6 mb-4 lg:mb-15" />

        <div className="lg:grid lg:grid-cols-[1fr_384px_500px_1fr] lg:items-center lg:gap-4 xl:gap-28">
          <Animation className="lg:col-start-2">
            <h3 className="text-left mb-4 lg:!text-h2">
              Become Your Best Self With The All-Access Pass
            </h3>

            <strong className="text-left block tracking-33 font-bold leading-6 mb-4">
              WHAT'S INCLUDED
            </strong>

            <ul>
              {aapWhatsIncluded.map((text, i) => (
                <li key={`whats_included_${i}`} className="flex mb-2">
                  <Icon className="text-primary mr-2 mt-1" name="check" />

                  <p className="mb-0">{text}</p>
                </li>
              ))}
            </ul>
          </Animation>

          <Animation direction="fromRight">
            <PricingSection />
          </Animation>
        </div>
      </Section>

      <Section>
        <Animation>
          <h3 className="mb-4 max-w-3xl mx-auto">
            Are you ready to learn powerful tools and strategies with our easy-to-digest courses?
          </h3>
        </Animation>

        <div className="grid grid-cols-2 gap-3 text-left lg:grid-cols-4 lg:gap-6">
          {toolsStrategies.map((data, i) => (
            <Animation
              key={`tool_strategy_${i}`}
              className={cx(
                'p-4 flex flex-col flex-1 rounded-2xl lg:shadow-md',
                data.youAreHere ? 'bg-blue-light' : 'bg-green-light'
              )}
              delay={i * 0.1}>
              <div className="w-max relative flex p-1 mb-3 lg:mb-4">
                <Icon
                  name={(i + 1).toString() as unknown as IconName}
                  className="w-max text-green-light text-xs bg-black px-2 py-1 rounded-md md:text-base"
                />{' '}
                {data.youAreHere && (
                  <strong className="absolute top-[3px] left-12 z-5 block w-max text-white bg-success px-2 py-1 mb-0 rounded-md text-sm">
                    You are here!
                  </strong>
                )}
              </div>

              <p className="text-xs font-bold mb-3 md:text-base">{data.heading}</p>

              <p className="text-xs md:text-base">{data.body}</p>

              <Icon
                className={cx(
                  'text-lg w-max ml-auto mt-auto lg:text-3xl',
                  i > 2 ? 'text-primary' : 'text-blue'
                )}
                name={i > 2 ? 'flag' : 'arrow-right'}
              />
            </Animation>
          ))}
        </div>
      </Section>

      <Animation>
        <CarouselTestimonial
          showQuotations={false}
          headingText="Trusted by thousands of people around the world."
          subheadingText="The Personal Development School has helped thousands of people make inspiring life transformations."
        />
      </Animation>

      <Animation>
        <Faq
          classNameHeading="text-center"
          classNameAnswer="whitespace-normal"
          faq={faqCopy}
          subheading={`We always get asked: "I've tried many different approaches to changing my life. What makes Thais and The Personal Development School different?" Here's why...`}
          useMD={false}
        />
      </Animation>

      <Animation direction="fromRight">
        <Section classNameInner="bg-primary-light/50 rounded-20 p-4 lg:px-24 lg:pt-20 !pb-0 !max-w-lg mx-auto lg:!max-w-screen-xl lg:grid lg:grid-cols-[1fr_380px] lg:gap-8">
          <div className="lg:pb-20 lg:text-left">
            <h3 className="mb-4">Elevate Your Self-Care, Anytime, Anywhere</h3>

            <p>
              Empower your well-being journey with The Personal Development School App, putting
              self-care at your fingertips for a more accessible and convenient experience.
            </p>

            <Link href={EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION}>
              <Button label="GET STARTED" />
            </Link>
          </div>

          <div className="w-full flex items-start justify-center lg:self-end">
            <Icon className="text-primary-light text-3xl mt-2" name="diamond" />

            <Image
              src="/images/AttachmentQuizResults/V2/phone-mockup.png"
              alt="A mockup of PDS courses on a Samsung phone."
              className="mx-auto mt-4 lg:mt-0"
              width={300}
              height={291}
              quality={90}
            />

            <Icon className="text-primary-light mt-6" name="diamond" />
          </div>
        </Section>
      </Animation>

      <Animation>
        <Section classNameInner="!text-left lg:grid lg:grid-cols-[140px_1fr] lg:gap-10 lg:!max-w-screen-md lg:mb-12">
          <Image
            alt="100% Money Back Guarantee"
            className="w-24 mx-auto mb-4 lg:mb-0 lg:w-36"
            src="/images/AttachmentQuizResults/V2/money-back.svg"
            width={140}
            height={140}
          />

          <div>
            <h3 className="mb-4 text-center lg:text-left">The Cancel-Anytime Guarantee</h3>

            <p>
              The Personal Development School always wants what is best for you. Join today and get
              full access to the courses, live coaching, and global community. If you don’t fall in
              love, receive a full refund within the first 7 days of membership. Please note that
              requests made after the first 7 days will not be granted.
            </p>
          </div>
        </Section>
      </Animation>

      <Section className="bg-black">
        <Animation>
          <h3 className="mb-4 text-white">
            The Personal Development School is here to help every person build healthy relationships
            with their loved ones
          </h3>

          <div className="max-w-lg mb-4 lg:grid lg:grid-cols-3 lg:max-w-none lg:gap-8">
            {footerCards.map((card, i) => (
              <div
                key={`footer_card_${i}`}
                className="bg-white rounded-20 p-4 mb-4 lg:py-9 lg:px-6">
                <Icon className="text-5xl text-primary mb-4" name={card.iconName} />

                <h4 className="mb-4">{card.heading}</h4>

                <p className="mb-0">{card.body}</p>
              </div>
            ))}
          </div>

          <Link href={EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION}>
            <Button label="TRANSFORM YOUR LOVE LIFE" />
          </Link>
        </Animation>
      </Section>
    </>
  )
}
