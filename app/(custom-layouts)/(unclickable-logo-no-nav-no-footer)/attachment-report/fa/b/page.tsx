// core
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { List } from '@/components/List'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
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
                Your attachment style is the subconscious framework you use to connect. For Fearful
                Avoidants, this framework is often shaped by inconsistent caregiving, early
                emotional pain, or instability. 
              </p>

              <p>
                <strong>Watch this video now to learn more about your attachment style.</strong>
              </p>
            </div>

            <VideoThumbnail
              srcUrl="https://storage.googleapis.com/pds_videos/FA_VSL_FUNNEL_B.mp4"
              thumbnailAlt={`Fearful Avoidant video fa thumbnail`}
              thumbnailUrl="RoyalRumblePage/rr-video-thumbnail.png"
              type="default"
            />
          </div>

          <ButtonScroll target="#pricing" label="START HEALING RIGHT HERE" />
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

      <Section>
        <h2>Imagine Having Relationships That Feel Safe, Loving, and Free</h2>

        <div className="grid gap-8 text-left lg:grid-cols-2">
          <div>
            <p>
              <strong>This is the life you can create—and we’re here to help you get there.</strong>
            </p>

            <p>
              The Personal Development School is a dedicated space for healing—offering on-demand
              courses designed to influence real change, live weekly webinars, and a private
              community of people who truly understand what you’re working through.
            </p>

            <Image
              alt="A mockup of PDS courses on the PDs course players on 2 tablets and a laptop."
              className="mb-4 w-full max-w-[502px]"
              src="/images/AttachmentQuizResults/course-player-mockup-3-fa.png"
              width={343}
              height={177}
            />
          </div>

          <div
            id="pricing"
            className="default-padding rounded-2xl shadow-centered-card relative overflow-hidden lg:py-10 lg:px-10">
            <p className="w-full text-center text-white absolute top-8 -right-[calc(50%-39px)] rotate-45 bg-[#30A114]">
              SAVE 30%
            </p>

            <p className="font-ssp w-3/4 lg:w-full lg:text-2xl">
              <strong>
                For just $67/month, your All-Access Pass gives you the complete roadmap to change:
              </strong>
            </p>

            <List
              classNameIcon="text-primary mb-4"
              icon={faCircleCheck}
              listItems={[
                <>
                  <strong>Courses:</strong> On-demand courses give you the tools to heal at the root
                </>,
                <>
                  <strong>Community:</strong> A safe place to grow with like-minded people
                </>,
                <>
                  <strong>Webinars:</strong> Live support from experts to help you stay consistent
                </>,
              ]}
            />

            <div className="flex bg-white-secondary p-2 mb-4">
              <FontAwesomeIcon className="text-primary mr-2" icon={faStars} />

              <p className="text-primary mb-0">
                Ready to start building the love and trust you deserve? Sign up for the All-Access
                Pass now for 30% off for life!
              </p>
            </div>

            <ButtonCheckout label="SIGN UP NOW!" />
          </div>
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
      </Section>

      <Section>
        <h2>Grow with The Personal Development School</h2>

        <p>
          <strong>We’ve helped thousands of people just like you. Now, it’s your turn.</strong>
        </p>

        <div className="grid gap-8 mt-8 lg:grid-cols-2">
          <div>
            <Image
              src="/images/AttachmentQuizResults/course-player-mockup-fa.png"
              className="w-full mb-4 lg:mb-0"
              alt="2 Card images overlaid on each other with some text. The first image is of a woman sitting and smiling doing a course workbook. The second image is a mockup of the PDS course player on a lap top. The text reads: 'Easy, step-by-step program. Teaches you everything you need to know about relationships.'"
              width={300}
              height={215}
              quality={100}
              sizes="100vw"
            />
          </div>

          <div className="text-left">
            <p>Real healing require safety, the right tools, and consistent support.</p>

            <p>
              But most people don’t know where to find those things. They’re not taught in school.
              They’re not easy to Google. And even when you want to heal, it’s hard to know where to
              start.
            </p>

            <p>That’s why we created The Personal Development School.</p>

            <div className="flex bg-white-secondary p-2 mb-4">
              <FontAwesomeIcon className="text-primary mr-2" icon={faStars} />

              <p className="text-primary mb-0">
                And you can access everything we offer to start building the love and trust you
                deserve with our All-Access Pass! Now available for just $67/month — a 30% discount
                for life!
              </p>
            </div>

            <ButtonCheckout label="JOIN US NOW!" />
          </div>
        </div>
      </Section>

      <Section>
        <h2>Why Choose Us</h2>

        <p className="max-w-3xl mx-auto">
          When you join The Personal Development School through our All-Access Pass, you get access
          to proven, science-backed tools and programs designed to help you become your best self.
        </p>

        <p>
          <strong>Inside, you’ll find:</strong>
        </p>

        <div className="grid gap-8 text-left my-8 lg:grid-cols-3">
          <div className="flex bg-pink-auxiliary rounded-xl p-4">
            <div className="mr-2">
              <FontAwesomeIcon
                className="text-white bg-primary rounded py-1 px-2 mt-1"
                icon={fa1}
                size="lg"
              />
            </div>

            <div>
              <h3>Courses: Your Tools to Change</h3>

              <p>
                You’ll get immediate access to 70+ on-demand courses, all built using our
                proprietary, evidence-based method. These courses are designed to help you gently
                rewire subconscious patterns, shift your attachment style, and regulate your
                emotions in real time.
              </p>

              <p>
                It’s not just theory—it’s neuroscience-backed support that creates real, lasting
                change.
              </p>

              <p>
                <em>Start with our Fearful Avoidant to Securely Attached program.</em>
              </p>
            </div>
          </div>

          <div className="flex bg-orange-auxillary rounded-xl p-4">
            <div className="mr-2">
              <FontAwesomeIcon
                className="text-white bg-primary rounded py-1 px-2 mt-1"
                icon={fa2}
                size="lg"
              />
            </div>

            <div>
              <h3>Community: Your Safe, Judgment-Free Space</h3>

              <p>
                Inside our private, supportive community, you’ll find people who understand exactly
                what you're working through. It’s a place where it’s safe to be vulnerable and where
                real connections can start to grow.
              </p>

              <p>
                Here, <strong>you won’t be alone or misunderstood</strong>. Our members have walked
                a path similar to yours. Because everyone in our community ‘gets it,’ you’ll find
                the courage to open up and explore new ways of relating without losing yourself in
                the process.
              </p>
            </div>
          </div>

          <div className="flex bg-green-7 rounded-xl p-4">
            <div className="mr-2">
              <FontAwesomeIcon
                className="text-white bg-primary rounded py-1 px-2 mt-1"
                icon={fa3}
                size="lg"
              />
            </div>

            <div>
              <h3>Live Webinars: Practice With Support</h3>

              <p>
                Join weekly live sessions with our founder, Thais Gibson, attachment expert, and
                PhD, for direct coaching, the opportunity to ask questions, get clarity, and
                integrate your learning into daily life.
              </p>

              <p>
                This is where new habits start to take root—through real-time support and gentle
                accountability.
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2>How Much Longer Can You Let Fear Dictate Your Relationships?</h2>

        <p>
          Start changing your attachment style today—with the tools, support, and safety you need to
          build real, lasting connection.
        </p>

        <ButtonCheckout className="mb-4" label="SIGN UP NOW!" />

        <div className="w-fit flex items-center bg-[#D9E0FE] py-2 px-4 mb-4 mx-auto">
          <FontAwesomeIcon className="text-blue-darkest mr-2" icon={faInfoCircle} />

          <p className="text-blue-darkest mb-0">
            Join the All-Access Pass TODAY And Save 30% On Your Membership
          </p>
        </div>

        <div>
          <Image
            src="/images/AttachmentQuizResults/course-player-mockup-2.png"
            className="w-full max-w-[816px] mx-auto mb-4"
            alt="An image of the Pds course player on several devices: a 3 differnt size tablets, a phone, and a mac"
            width={343}
            height={113}
            quality={100}
            sizes="100vw"
          />
        </div>
      </Section>
    </Page>
  )
}
