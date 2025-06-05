// core
import Link from 'next/link'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { List } from '@/components/List'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { Button } from '@/components/Button/Button'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { FearfulAvoidantInAdulthood } from './FearfulAvoidantInAdulthood'
import {
  faCheckCircle,
  faCircleCheck,
  faInfoCircle,
} from '@awesome.me/kit-545b942488/icons/classic/regular'
import {
  fa1,
  fa2,
  fa3,
  faLightbulbGear,
  faStars,
} from '@awesome.me/kit-545b942488/icons/classic/solid'
// config
import { config } from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// styles
import './style.css'

export const metadata = {
  title: 'Discover & Learn About Your Attachment Style',
  description:
    'Discover, learn, and take the first steps to having your dream life by uncovering your attachment style. Get all the essential information you need!',
  robots: 'noindex',
}

export default function FearfulAvoidantReportPageB() {
  return (
    <Page page_name="Attachment Style Report - FA">
      <Section className="relative">
        <div className="absolute top-0 left-0 w-full h-3/5 bg-gradient-to-b from-blue-lightest to-primary-light z-5" />

        <div className="relative z-10">
          <h1>Your Attachment Style Report: Fearful Avoidant</h1>

          <p>
            Your Report is Just the Beginning — Watch This Video to Discover Your Attachment Style!
          </p>

          <div className="shadow-centered-card rounded-10 mb-4 bg-white text-left items-center p-4 lg:mb-8 lg:grid lg:grid-cols-2 lg:gap-4 lg:p-8">
            <div className="hidden lg:block">
              <h2>What Is a Fearful Avoidant Attachment Style?</h2>

              <p>
                Your attachment style is the subconscious framework you use to connect. For Fearful
                Avoidants, this framework is often shaped by inconsistent caregiving, early
                emotional pain, or instability.
              </p>

              <p>
                <strong>Watch this video now to learn more about your attachment style.</strong>
              </p>
            </div>

            <VideoThumbnail
              srcUrl="https://storage.googleapis.com/pds_videos/FA_VSL_FUNNEL.mp4"
              thumbnailAlt={`Fearful Avoidant video fa thumbnail`}
              thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
              type="default"
            />
          </div>

          <Link href="/limited-offer/fa">
            <Button label="LEARN ABOUT YOUR TRANSFORMATIONAL JOURNEY" />
          </Link>
        </div>
      </Section>

      <Section>
        <h2>How Does Fearful Avoidant Attachment Develop?</h2>

        <p>
          Your attachment style developed in childhood, based on how your caregivers met your
          emotional and physical needs. Here are some common experiences in childhood that shape
          your Fearful Avoidant patterns:
        </p>

        <div className="rounded-20 overflow-hidden text-left mb-4">
          {config.experiencesArray.map(({ title, paragraph, bgColor }, i) => (
            <div
              className="grid grid-cols-2 gap-1 bg-white xxs:grid-cols-3 lg:grid-cols-4"
              key={`experience_item_${i}`}>
              <p className={`px-2 py-4 ${bgColor} mb-1 lg:p-4`}>
                <strong>{title}</strong>
              </p>

              <p className={`px-2 py-4 ${bgColor} mb-1 xxs:col-span-2 lg:p-4 lg:col-span-3`}>
                {paragraph}
              </p>
            </div>
          ))}
        </div>

        <p>
          <em>
            These early experiences taught your nervous system to stay on high alert and associate
            relationships with both comfort and risk.
          </em>
        </p>
      </Section>

      <FearfulAvoidantInAdulthood />

      <Section>
        <h2>Why Fearful Avoidants Feel Stuck</h2>

        <p>Fearful Avoidants often find themselves trapped in a cycle of emotional conflict:</p>

        <Image
          className="mb-4 mx-auto lg:hidden"
          quality={100}
          width={343}
          height={343}
          src="/images/FAReportVariant/fa-wheel.png"
          alt={`A wheel outlining 'Why Fearful Avoidants Feel Stuck.' Each item points to the next in a cycle. 1. Pulling 
            Away: To protect yourself, you withdraw, shut down, or self-sabotage the connection. 2. Emotional Overwhelm: 
            Fear triggers intense emotions - such as anxiety, anger, or guilt - that feel hard to process. 3. Craving Connection: 
            You deeply want love, trust, and emotional intimacy. 4. Fear of Vulnerability: As soon as closeness begins, fears 
            of betrayal, abandonment, or being hurt arise. 5. Reinforcing Beliefs: The experience confirms the belief that 
            closeness is risky, restarting the cycle.`}
        />

        <Image
          className="hidden mb-4 lg:block lg:mx-auto"
          quality={100}
          width={500}
          height={500}
          src="/images/FAReportVariant/fa-wheel.png"
          alt={`A wheel outlining 'Why Fearful Avoidants Feel Stuck.' Each item points to the next in a cycle. 1. Pulling 
            Away: To protect yourself, you withdraw, shut down, or self-sabotage the connection. 2. Emotional Overwhelm: 
            Fear triggers intense emotions - such as anxiety, anger, or guilt - that feel hard to process. 3. Craving Connection: 
            You deeply want love, trust, and emotional intimacy. 4. Fear of Vulnerability: As soon as closeness begins, fears 
            of betrayal, abandonment, or being hurt arise. 5. Reinforcing Beliefs: The experience confirms the belief that 
            closeness is risky, restarting the cycle.`}
        />

        <p>
          <em>
            This cycle keeps you stuck, replaying patterns that reinforce fears and insecurities.
          </em>
        </p>

        <div className="bg-pink-6 flex items-center max-w-max mx-auto mb-12 rounded-lg p-2">
          <FontAwesomeIcon className="text-primary" icon={faLightbulbGear} />

          <p className="mb-0">
            <strong>
              Take a moment to think: When was the last time you found yourself in this cycle?
            </strong>
          </p>
        </div>

        <h2>Core Fearful Avoidant Mindsets, Behaviors, Actions, and Fears</h2>

        <p className="mb-6">
          Fearful Avoidants often find themselves trapped in a cycle of emotional conflict:
        </p>

        <div className="grid gap-4 lg:grid-cols-2">
          {config.coreBeliefsArray.map(({ title, beliefs }, i) => (
            <div
              key={`core_belief_${i}`}
              className="bg-grey-8 default-padding text-left rounded-20 lg:p-4">
              <h3 className="lg:!text-h3">{title}</h3>

              <List classNameIcon="text-primary" icon={faCheckCircle} listItems={beliefs} />
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <h2>What Do Fearful Avoidants Deeply Want?</h2>

        <p>Beneath the fear and conflict, you have clear desires:</p>

        <div className="grid grid-cols-3 rounded-20 overflow-hidden gap-1 text-left">
          <p className="text-white mb-0 p-4 bg-primary">
            <strong>Desire</strong>
          </p>

          <p className="text-white mb-0 p-4 bg-primary col-span-2">
            <strong>What This Looks Like</strong>
          </p>

          {config.faWants.map(({ label, body }, i) => (
            <>
              <p key={`fa_wants_label_${i}`} className="mb-0 p-4 bg-pink-6">
                <strong>{label}</strong>
              </p>

              <p key={`fa_wants_body_${i}`} className="mb-0 p-4 bg-pink-6 col-span-2">
                {body}
              </p>
            </>
          ))}
        </div>

        <p>
          <em>
            These desires can feel impossible to achieve, but they are entirely within your reach
            with the right tools.
          </em>
        </p>
      </Section>

      <Section classNameInner="lg:!max-w-screen-xl lg:grid lg:grid-cols-[321px_642px] lg:gap-6 lg:items-center xl:items-start xl:grid-cols-[384px_792px]">
        <Image
          className="w-full rounded-20 mb-6 lg:mb-0"
          src="/images/FAReportVariant/woman-holding-coffee.png"
          alt="A woman smiling with her eyes closed, holding a cup of coffee."
          width={384}
          height={496}
        />

        <div className="text-left">
          <h2>Your Healing Journey Starts with the Right Tools </h2>

          <p>
            Fearful Avoidant patterns are learned — they are not permanent. Research shows that you
            can rewire your attachment style in as little as thirty days.
          </p>

          <p>
            <strong>Key Steps for Healing:</strong>
          </p>

          <ul>
            {config.healingSteps.map(({ text, icon }, i) => (
              <li className="flex" key={`healing_step_${i}`}>
                <FontAwesomeIcon icon={icon} className="text-primary pt-1" />
                <p className="mb-0 pl-4">{text}</p>
              </li>
            ))}
          </ul>

          <p>
            <em>
              These skills allow you to feel calm, confident, and secure—in both relationships and
              yourself.
            </em>
          </p>

          <p>
            Click below to begin your healing journey with The Personal Development School. We offer
            proprietary, evidence-based tools—engineered for maximum impact in minimal time and
            flexible enough to learn at your own pace. Strengthen relationships, stay deeply
            connected, and maintain your independence through our coursework, webinars, and
            community. Get the All-Access Pass for just $67/month!
          </p>

          <Link href="/limited-offer/fa">
            <Button label="TAKE THE NEXT STEP IN YOUR JOUNREY" />
          </Link>
        </div>
      </Section>

      <Section className="text-white bg-black" classNameInner="lg:!max-w-screen-xl">
        <h2>What Makes Our Approach Different?</h2>

        <p className="mb-10">
          We’ve helped over 30,000 students heal their attachment styles, with a 99.7% satisfaction
          rate. Our approach is:
        </p>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 xl:gap-6">
          {config.pdsApproach.map(({ icon, title, body }, i) => (
            <div className="text-left" key={`approach_item_${i}`}>
              <FontAwesomeIcon className="text-white mb-2" icon={icon} size="3x" />

              <h4 className="mb-2">{title}</h4>

              <p>{body}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section classNameInner="lg:!max-w-screen-xl">
        <h2>Your Path to Becoming Securely Attached</h2>

        <p>
          You don't have to stay stuck in this cycle forever. Here's how your transformation will
          look like:
        </p>

        <div className="grid gap-4 mb-4 lg:mb-6 lg:grid-cols-3 lg:gap-9">
          {config.pathItems.map(({ icon, title, body }, i) => (
            <div className="rounded-20 bg-white-secondary p-6 text-left" key={`path_item_${i}`}>
              <div className="flex">
                <FontAwesomeIcon className="text-black mr-4" icon={icon} size="xl" />

                <p className="tracking-33">
                  <strong>STEP {i + 1}</strong>
                </p>
              </div>

              <h3>{title}</h3>

              <p>{body}</p>
            </div>
          ))}
        </div>

        <Link href="/limited-offer/fa">
          <Button label="START YOUR JOURNEY TODAY" />
        </Link>
      </Section>
    </Page>
  )
}
