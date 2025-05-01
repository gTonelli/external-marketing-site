// core
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { TParams } from '../page'
import { Section } from '@/components/Section'
import { QuizResultsPage } from '../QuizResultsPage'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { List } from '@/components/List'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { Faq } from '@/components/Faq/Faq'
import { PDSFeaturesSection } from './PDSFeaturesSection'
// config
import { config } from './config'
// libraries
import { faCircleCheck, faCircleQuestion } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  fa1,
  fa2,
  fa3,
  faCircleInfo,
  faSparkles,
} from '@awesome.me/kit-545b942488/icons/classic/solid'
// utils
import { getAttachmentStyleText } from '@/utils/functions'
// styles
import './style.css'
import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'

export async function generateMetadata({ params }: TParams) {
  switch (params.style) {
    case 'fa':
      return {
        title: 'Fearful Avoidant Attachment Style Report | PDS',
        description:
          'Discover your Fearful Avoidant attachment style with this detailed report. Learn how it impacts your relationships and get tools to heal and become secure.',
      }

    case 'da':
      return {
        title: 'Dismissive Avoidant Attachment Style Report | PDS',
        description:
          'Uncover the patterns behind the Dismissive Avoidant attachment style. This report offers practical tools for emotional growth and deeper connection.',
      }

    case 'ap':
      return {
        title: 'Anxious Preoccupied Attachment Style Report | PDS',
        description:
          'Explore the Anxious Preoccupied attachment style in this actionable report. Learn how to self-regulate, build secure bonds, and thrive in relationships.',
      }

    case 'sa':
      return { title: 'Securely Attached | Your Attachment Style Results' }
  }
}

export default function QuizResultsB({ params }: TParams) {
  const { style: attachmentStyleShort } = params
  const attachmentStyleLong = getAttachmentStyleText(attachmentStyleShort)
  if (attachmentStyleShort === 'sa') {
    return <QuizResultsPage style={attachmentStyleShort} />
  }
  const { base: baseConfig } = config
  const attachmentStyleConfig = config[attachmentStyleShort]

  return (
    <Page page_name={`ICP Results Page - ${attachmentStyleShort.toUpperCase()}`}>
      <Section
        className="bg-gradient-to-b from-pink-auxiliary via-white to-white mb-6 lg:pb-4"
        classNameInner="!max-w-[792px]">
        <h1 className="text-primary !text-5xl">{attachmentStyleConfig.title}</h1>

        <h2>Your Attachment Style Is: {attachmentStyleLong}</h2>

        <p>Don't Miss This Important Step: Watch This Video to Learn More</p>

        <VideoThumbnail
          className="shadow-centered p-4 rounded-20 max-w-[792px] mx-auto mb-6"
          srcUrl={attachmentStyleConfig.videoSrc}
          thumbnailAlt="Thais Gibson sitting at a desk smiling and filling in a workbook."
          thumbnailUrl={'AttachmentQuizResults/thais-writing.jpg'}
          type="default"
        />

        <ButtonScroll label="READY TO CHANGE?" target="#pds-offer" />
      </Section>

      <Section className="mb-6 lg:py-4 lg:mb-20" classNameInner="lg:!max-w-[996px]">
        <h2>{attachmentStyleConfig.hookTitle}</h2>

        <p className="font-bold">{attachmentStyleConfig.hookSubtitle}</p>

        <div className="mb-4 lg:grid lg:grid-cols-2 lg:gap-6">
          <Image
            alt="An Inukshuk balanced by a heart in the center."
            className="w-full mb-6 lg:mb-0"
            src="/images/AttachmentQuizResults/inukshuk-heart.svg"
            width={341}
            height={200}
          />

          <List
            className="text-left"
            classNameIcon="text-primary mt-[2px]"
            listItems={attachmentStyleConfig.hookListItems}
            icon={faCircleCheck}
          />
        </div>

        <div className="flex rounded bg-pink-auxiliary text-primary text-left py-2 px-4 mb-4">
          <FontAwesomeIcon className="mr-2 pt-2 lg:pt-0" icon={faSparkles} />

          <span>{attachmentStyleConfig.hookFooter}</span>
        </div>

        <ButtonScroll label="READY TO CHANGE?" target="#pds-offer" />
      </Section>

      <Section className="relative !pb-60 text-left mb-6 lg:!py-28 lg:!px-56 xl:!py-32 2xl:!py-40">
        <h2 className="text-white text-left relative z-10 mb-0">
          If that feels familiar, you’re not broken.
        </h2>

        <h2 className="text-white text-left relative z-10 mb-0">
          You’re not too much. And this isn’t your fault.
        </h2>

        <Image
          alt="A pink flower growing out of asphalt."
          className="absolute w-full h-full object-cover top-0 left-0 lg:hidden"
          src="/images/AttachmentQuizResults/flower-asphalt-mobile.png"
          height={400}
          width={375}
          sizes="100vw"
          quality={100}
        />

        <Image
          alt="A pink flower growing out of asphalt."
          className="hidden absolute w-full h-full object-cover top-0 left-0 lg:block"
          src="/images/AttachmentQuizResults/flower-asphalt-desktop.png"
          height={300}
          width={1440}
          sizes="100vw"
          quality={100}
        />
      </Section>

      <Section className="lg:pt-4" classNameInner="lg:!max-w-[792px]">
        <Image
          alt="A purple speech bubble that has no text, with a hand extended pointed upwards."
          className="mx-auto lg:w-36 lg:h-auto"
          src="/images/AttachmentQuizResults/speech-bubble-hand.svg"
          width={120}
          height={80}
        />

        <h2>
          If You Keep Repeating the Same Relationship Dynamics, It's Not You. It's Your Attachment
          Style.
        </h2>

        {attachmentStyleConfig.repeatedPatternsBodyItems.map((text, i) => (
          <p key={`repeated_pattern_${i}`} className="text-left mb-0">
            {text}
          </p>
        ))}

        <p className="mt-4 text-xl font-bold">
          This isn't random. It's a pattern. It's an attachment style and everyone has one. And it
          can be changed.
        </p>
      </Section>

      <Section className="bg-white-secondary !py-10 mb-4" classNameInner="lg:!max-w-[996px]">
        <h2>That pattern has a name: {attachmentStyleLong}</h2>

        <div className="text-left mb-4 lg:grid lg:grid-cols-[384px_588px] lg:gap-6 lg:items-center">
          <Image
            alt="A vector image of a woman sitting on a ledge with a heart above her shoulder."
            className="w-full"
            src="/images/AttachmentQuizResults/woman-sitting-heart.svg"
            width={282}
            height={254}
          />

          <div>
            <p>
              These patterns start forming early in life—based on how emotionally safe you felt with
              the people closest to you. Usually that means your parents, but they can also be
              shaped by other important relationships: teachers, caregivers, even close friends or
              first loves. Attachment styles help explain why you react the way you do to closeness,
              distance, and emotional connection. In fact, they are the driving force in how you
              show up in all your relationships of your life.{' '}
            </p>

            <p>
              <strong>Your attachment style can show:</strong>
            </p>

            <List
              listItems={attachmentStyleConfig.patternListItems}
              classNameIcon="text-primary"
              icon={faCircleCheck}
            />
          </div>
        </div>

        <h3 className="mb-6">
          There are different types of attachment—but at their core, they fall into two main
          categories: secure and insecure.
        </h3>

        <div className="lg:grid lg:grid-cols-2 lg:gap-6">
          <div className="default-padding bg-primary-light rounded-2xl text-left mb-4 lg:py-4">
            <FontAwesomeIcon className="text-primary text-h1 mb-4" icon={faCircleCheck} />

            <p>
              People with <strong>secure attachment</strong> feel safe in love.
            </p>

            <p className="mb-0">
              They can depend on others without fear of rejection or losing themselves. They
              naturally attract people who are consistent, emotionally available, and capable of
              healthy connection.
            </p>
          </div>

          <div className="default-padding bg-blue-light rounded-2xl text-left mb-4 lg:py-4">
            <FontAwesomeIcon className="text-blue-2 text-h1 mb-4" icon={faCircleQuestion} />

            <p>
              People with <strong>insecure attachment</strong>—like the{' '}
              <strong>{attachmentStyleLong}</strong> style—often feel unsafe in relationships, even
              when they deeply want connection.
            </p>

            <p className="mb-0">
              When you have a Fearful Avoidant attachment, your nervous system is always on high
              alert. You may subconsciously choose partners who are emotionally unavailable,
              inconsistent, or triggering in familiar ways.
            </p>
          </div>
        </div>

        <div className="lg:grid lg:grid-cols-[588px_384px] lg:gap-6">
          <div className="text-left">
            <p>
              It’s not about preference—it’s about survival. Their system is drawn to what feels
              familiar, not what feels healthy.
            </p>

            <div className="text-center lg:grid lg:grid-cols-[366px_193px] lg:mb-4">
              <p className="text-primary border-2 border-b-0 border-primary text-xl mb-0 lg:border-b-2 lg:border-r-0">
                But you didn’t choose these patterns.
              </p>

              <p className="border-2 border-primary bg-primary color-white text-xl text-white lg:mb-0">
                You learned them.
              </p>
            </div>

            <p>These patterns develop based on how emotionally safe you felt growing up. </p>

            <p>
              If love was unpredictable in early life, your nervous system learned to expect more of
              the same. It developed <strong>protective mechanisms</strong> designed to help you{' '}
              <strong>survive a difficult situation completely subconsciously.</strong>
            </p>

            <p>
              So even now, as an adult, you might find yourself pulled toward people who feel
              familiar—not{' '}
              <strong>
                because they’re healthy, but because they fit the emotional map you’ve carried since
                adolescence.
              </strong>
            </p>
          </div>

          <Image
            alt="A vector image of two women sitting next to each other holding hands."
            className="w-full"
            src="/images/AttachmentQuizResults/two-women-sitting.svg"
            width={300}
            height={258}
          />
        </div>
      </Section>

      <Section className="mb-4 lg:pb-4">
        <Image
          alt="A vector image of a megaphone"
          className="mx-auto mb-4"
          src="/images/AttachmentQuizResults/megaphone.svg"
          width={80}
          height={80}
        />

        <p className="text-xl">But here’s the most important part:</p>

        <div className="default-padding bg-black rounded-xl mb-6 lg:py-6 lg:px-10">
          <p className="text-white text-h2 font-ssp font-bold">
            These patterns aren’t permanent. Because they were learned, they can be changed. And
            once you understand them, you can finally feel securely attached.
          </p>

          <p className="text-white text-h2 font-ssp font-bold">
            <em>So how can you do that?</em>
          </p>
        </div>

        <ButtonScroll label="LEARN MORE" target="#pds-offer" />
      </Section>

      <Section classNameInner="!text-left lg:!max-w-screen-xl">
        <h2 className="lg:text-center">
          Understanding Yourself Is Just the First Step—Why Patterns Feel So Hard to Break
        </h2>

        <div className="lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center">
          <Image
            alt="An elderly woman sitting on a couch with her arms behind her back, looking upwards and smiling."
            className="mb-6 w-full"
            src="/images/AttachmentQuizResults/elderly-woman-couch.png"
            width={343}
            height={211}
          />

          <div>
            <p>
              Recognizing your attachment style is powerful. It helps you understand why you react
              the way you do in relationships—and where those reactions come from.{' '}
            </p>

            <p>
              But insight alone isn’t enough to change a pattern that’s been running in the
              background for years. That’s because{' '}
              <strong>your relationship struggles aren’t just conscious decisions.</strong> They’re
              deeply wired into your subconscious mind.
            </p>

            <p className="mb-0">And your subconscious isn’t thinking—it’s protecting.</p>

            <ul className="mb-4 pl-4 !list-disc">
              {attachmentStyleConfig.subsconsciousListItems.map((item, i) => (
                <li key={`subconscious_li_${i}`}>{item}</li>
              ))}
            </ul>

            <p>
              So, even though you might understand your patterns, you can still find yourself drawn
              to relationships that reinforce them instead of healing them.
            </p>

            <div className="flex p-4 rounded-lg bg-pink-auxiliary text-primary">
              <FontAwesomeIcon icon={faSparkles} />

              <p className="mb-0 ml-2">That’s why real change requires more than awareness.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-green-light" classNameInner="lg:!max-w-screen-xl">
        <h2>The Three Essential Elements for Real, Lasting Change</h2>

        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mb-6">
          <div className="default-padding flex bg-white rounded-2xl shadow-centered-card mb-4 text-left lg:py-4 xl:py-8 xl:px-8">
            <FontAwesomeIcon
              className="mr-2 mt-[2px] text-white bg-black p-1 px-[6px] rounded-sm"
              icon={fa1}
              size="xs"
            />

            <div>
              <p>
                <strong>The Tools to Support Change</strong>
              </p>

              <p>
                <strong>
                  While your patterns may be subconscious, there are conscious actions that can
                  interrupt and reshape them.
                </strong>
              </p>

              <p>
                These tools give you a way to respond differently and actively shift your patterns
                to healthier ones.
              </p>
            </div>
          </div>

          <div className="default-padding flex bg-white rounded-2xl shadow-centered-card mb-4 text-left lg:py-4 xl:py-8 xl:px-8">
            <FontAwesomeIcon
              className="mr-2 mt-[2px] text-white bg-black p-1 px-[6px] rounded-sm"
              icon={fa2}
              size="xs"
            />

            <div>
              <p>
                <strong>A Safe, Judgment-Free Environment</strong>
              </p>

              <p>
                <strong>
                  Real change begins when you feel supported, understood, and accepted.
                </strong>
              </p>

              <p>
                That’s when your guard softens, your body exhales, and healing becomes possible.
              </p>
            </div>
          </div>

          <div className="default-padding flex bg-white rounded-2xl shadow-centered-card mb-4 text-left lg:py-4 xl:py-8 xl:px-8">
            <FontAwesomeIcon
              className="mr-2 mt-[2px] text-white bg-black p-1 px-[6px] rounded-sm"
              icon={fa3}
              size="xs"
            />

            <div>
              <p>
                <strong>Practice in Real Time</strong>
              </p>

              <p>
                <strong>
                  Change doesn't happen through learning alone. It takes repeated, consistent
                  practice.
                </strong>
              </p>

              <p>
                Once you begin using new tools in real situations, your nervous system slowly learns
                that it’s safe to do things differently. With time, new patterns start to feel more
                familiar—and eventually, more natural than the old ones.
              </p>
            </div>
          </div>
        </div>

        <p className="text-xl font-ssp">
          <em>
            <strong>
              So if those are the ingredients for real change, the next question is simple: where do
              you actually find them?
            </strong>
          </em>
        </p>
      </Section>

      <Section classNameInner="lg:!max-w-screen-xl" id="pds-offer">
        <h2>This Is Where We at The Personal Development School Come In</h2>

        <p className="mb-4">
          <strong>We’ve helped thousands of people just like you. Now, it’s your turn.</strong>
        </p>

        <div className="mb-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center">
          <Image
            src="/images/AttachmentQuizResults/course-player-mockup.png"
            className="w-full mb-4 lg:mb-0"
            alt="2 Card images overlaid on each other with some text. The first image is of a woman sitting and smiling doing a course workbook. The second image is a mockup of the PDS course player on a lap top. The text reads: 'Easy, step-by-step program. Teaches you everything you need to know about relationships.'"
            width={300}
            height={215}
          />

          <div className="text-left">
            <p>
              You now know what real healing requires:{' '}
              <strong>safety, the right tools, and consistent support.</strong>
            </p>

            <p>
              But most people don’t know where to find those things. They’re not taught in school.
              They’re not easy to Google. And even when you want to heal, it’s hard to know where to
              start.
            </p>

            <p className="mb-0">
              <strong>That’s why we created The Personal Development School.</strong>
            </p>

            <p>
              The Personal Development School is a dedicated space for healing—offering on-demand
              courses designed to influence real change, live weekly webinars, and a private
              community of people who truly understand what you’re working through.
            </p>

            <div className="flex bg-white-secondary text-primary rounded mb-4 px-4 py-2">
              <FontAwesomeIcon className="mt-1" icon={faSparkles} />

              <p className="ml-2 mb-0">
                It’s designed so you can access everything you need to rewire old patterns and build
                healthier relationships, all in one place.
              </p>
            </div>

            <p>
              And it’s all included in your <strong>All-Access Pass</strong> with us.
            </p>
          </div>
        </div>

        <Image
          src="/images/AttachmentQuizResults/course-player-mockup-2.png"
          className="w-full max-w-[816px] mx-auto mb-4"
          alt="An image of the Pds course player on several devices: a 3 differnt size tablets, a phone, and a mac"
          width={343}
          height={113}
        />

        <PDSFeaturesSection attachmentStyleLong={attachmentStyleLong} />

        <p className="text-lg font-bold">So what does this look like for you?</p>

        <ButtonCheckout className="mb-4" label="JOIN THE ALL-ACCESS & SAVE 30%" />

        <div className="bg-[#D9E0FE] flex text-blue-darkest p-4 rounded">
          <FontAwesomeIcon className="mr-2" icon={faCircleInfo} />

          <p className="mb-0">
            When you sign up, you'll pay the monthly membership of $67 instead of the regular price
            $97!
          </p>
        </div>
      </Section>

      <Section className="bg-white-secondary">
        <h2>Five Easy Steps Towards Secure Attachment: Your Path to Lasting Love</h2>

        <p>
          Go At Your Own Pace! Healing happens on your timeline. No one will push or rush you, and
          there’s no deadline for ‘getting it right.’ When you feel safe to take each step, that’s
          when real change becomes possible
        </p>

        <p className="mb-4">
          <strong>Here’s what healing could look like for you:</strong>
        </p>

        <Image
          src="/images/AttachmentQuizResults/steps-paper-airplane.svg"
          alt="The number 1 through 5 in a line followed by a paper airplane."
          className="w-full mb-6 max-w-[942px] mx-auto"
          width={311}
          height={75}
        />

        <div className="text-left mb-4 lg:grid lg:grid-cols-5 lg:gap-4">
          {baseConfig.healingSteps(attachmentStyleLong).map((step, i) => (
            <div
              key={`healing_step_${i}`}
              className="bg-white rounded-lg default-padding mb-4 lg:mb-0 lg:py-4">
              <div className="flex mb-4">
                <FontAwesomeIcon
                  className="text-white bg-primary py-1 px-2 rounded"
                  icon={step.icon}
                />

                <p className="text-primary ml-2 mb-0 font-bold">Step {i + 1}</p>
              </div>

              <p className="mb-0">{step.text}</p>
            </div>
          ))}
        </div>

        <ButtonCheckout label="START YOUR JOURNEY TODAY" />
      </Section>

      <section>
        <div className=" default-padding max-w-screen-lg mx-auto text-center">
          <h2>Over 30,000 People Have Healed—Now It's Your Turn</h2>

          <p>
            Thousands have successfully transformed their fearful relationship patterns into secure,
            loving connections. They now live without fear of abandonment, betrayal, or losing
            themselves.
          </p>

          <p>
            <em>You deserve relationships that feel safe, fulfilling, and deeply connected.</em>
          </p>
        </div>

        <CarouselTestimonialThinkific className="mb-4" />
      </section>

      <Section className="!pb-0 bg-[#EFEDF2]" classNameInner="!text-left lg:!max-w-[792px]">
        <h2 className="mb-0">Meet Thais Gibson, PhD:</h2>

        <h2>Your Mentor and Attachment Expert</h2>

        <p>
          Your healing begins with someone who’s been where you are—and knows exactly how to help
          you get where you want to be.
        </p>

        <p>{attachmentStyleConfig.thaisBio}</p>

        <List
          useMD={false}
          icon={faCircleCheck}
          classNameListItems="mb-4"
          listItems={[
            <>
              In our webinars, you’ll get live mentorship directly from Thais every week in the Q&A
              Webinars. Each session is built on{' '}
              <strong>respect for your individual boundaries</strong>, so you can finally trust that
              you’re growing without sacrificing who you are.
            </>,

            <>
              You’ll learn from someone who has helped <strong>over 30,000 people transform</strong>
              and understands exactly what it takes because she’s walked that path herself.
            </>,
          ]}
        />

        <Image
          src="/images/AttachmentQuizResults/thais-couch-mobile.png"
          alt="Thais sitting on a couch smiling with her head slightly tilted to the side."
          className="w-full lg:hidden"
          width={343}
          height={321}
        />

        <Image
          src="/images/AttachmentQuizResults/thais-couch-desktop.png"
          alt="Thais sitting on a couch smiling with her head slightly tilted to the side."
          className="hidden lg:block"
          width={668}
          height={321}
        />
      </Section>

      <Section classNameInner="!text-left lg:grid lg:grid-cols-2 lg:gap-6 lg:items-center">
        <div>
          <h2>Your Next Step—Start Experiencing the Relationships You Truly Desire</h2>

          <p>
            You deserve a love that feels safe, fulfilling, and authentically yours. Begin your
            journey towards trust today.
          </p>

          <Image
            alt="A mockup of PDS courses on the PDs course players on 2 tablets and a laptop."
            className="mb-4 w-full max-w-[502px]"
            src="/images/AttachmentQuizResults/course-player-mockup-3.png"
            width={343}
            height={177}
          />
        </div>

        <div className="default-padding rounded-2xl shadow-centered-card relative overflow-hidden lg:py-10 lg:px-10">
          <p className="w-full text-center text-white absolute top-8 -right-[calc(50%-39px)] rotate-45 bg-[#30A114]">
            SAVE 30%
          </p>

          <p className="font-ssp lg:text-2xl">
            <strong>Your All-Access Pass includes:</strong>
          </p>

          <div className="flex items-center pl-10 mb-4 lg:mb-6">
            <p className="text-danger text-2xl font-bold font-ssp mb-0 lg:text-h2">
              <s>$97</s>
            </p>

            <p className="text-primary text-h1 font-bold font-ssp mx-2 mb-0 lg:text-6xl">$67</p>

            <p className="text-primary mb-0">/ per month</p>
          </div>

          <List
            classNameIcon="text-primary mb-6"
            icon={faCircleCheck}
            listItems={[
              `Unlimited access to 70+ transformative courses, including your starting point, the ${attachmentStyleLong} to Securely Attached program.`,
              'Weekly personalized mentorship sessions with Thais Gibson.',
              'A private, supportive community for safe emotional growth.',
            ]}
          />

          <ButtonCheckout label="Feel Safe In Love–Start Healing Today" />
        </div>
      </Section>

      <Faq faq={baseConfig.faqs} />
    </Page>
  )
}
