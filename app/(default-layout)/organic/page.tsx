// core
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button/Button'
import { TextHeading } from '@/components/Text/variants/TextHeading'
import Link from 'next/link'
import { AttachmentQuiz } from '@/components/AttachmentQuiz/AttachmentQuiz'

export default function OrganicQuizPage() {
  return (
    <Page page_name="Attachment Style Quiz">
      <div className="relative w-full">
        <Image
          priority
          alt="A picture of a couple smiling while looking down at the phone."
          className="absolute z-0 h-full w-full top-0 left-0 object-cover object-bottom xs:object-top md:hidden"
          width={376}
          height={799}
          src="/images/AttachmentQuiz/organic-hero.jpg"
        />
        <Image
          priority
          alt="A picture of a couple smiling while looking down at the phone."
          className="absolute z-0 h-full w-full top-0 left-0 object-cover object-bottom hidden md:block md:object-right xl:object-right"
          width={1440}
          height={594}
          src="/images/AttachmentQuiz/organic-hero-desktop.jpg"
          sizes="100vw"
        />
        <div className="absolute w-full h-full bg-gradient-to-r from-[#E3EDED22] to-[#D5B8D822] z-10" />

        <div className="relative z-20 w-full max-w-6xl flex mx-auto pt-4 pb-72 sm:pb-8 sm:pt-8 lg:pt-16 lg:pb-16 xl:pt-36 xl:pb-36 2xl:pt-56 2xl:pb-56 3xl:pt-64 3xl:pb-64">
          <div className="w-full max-w-2xl z-2 p-4">
            <TextHeading
              className="mb-4"
              size={1}
              content="Take our Free Life-Changing Quiz to Discover Your Attachment Style in Just 5 Minutes"
            />

            <TextHeading
              className="mb-4"
              size={5}
              content="Get a free personalized report with everything you need to know!"
            />

            <Button label="TAKE QUIZ" theme="primary" link="#quiz" />
          </div>
        </div>
      </div>

      <div className="max-w-5xl default-padding mx-auto" id="quiz">
        {/* <div id="quiz" /> */}

        <TextHeading className="text-left mb-8" content="Build Loving and Lasting Relationships" />

        <AttachmentQuiz quiz_traffic_source="organic" quizName="Attachment Style Quiz" />
      </div>

      <Section
        className="max-w-5xl mx-auto"
        classNameInner="w-full flex flex-col justify-center items-center lg:flex-row">
        <div className="flex-1">
          <Image
            alt="Attachment Styles Description"
            src="/images/AttachmentQuiz/attachment-styles.jpg"
            width={400}
            height={400}
          />
        </div>

        <div className="flex-1">
          <TextHeading className="text-left mb-4" content="What Are The Four Attachment Styles?" />

          <p className="mb-4">
            Attachment Theory is the single largest predictor of success in your relationships,
            whether they are romantic partners, familial (such as parents, caregivers, or siblings),
            or platonic (friends).
          </p>

          <p>
            There are four types of attachment styles, all with different characteristics. Three are
            recognized as insecure attachment styles; the other is securely attached. Check them out
            below:
          </p>
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto">
        <div className="flex flex-col mb-12 lg:flex-row lg:items-center">
          <div className="mb-4 lg:mb-0">
            <div className="min-w-40 max-w-40 h-40 flex items-center justify-center bg-blue-lightest rounded-full p-4">
              <Image
                alt="Couple-AP"
                src="/images/AttachmentQuiz/couple-AP.svg"
                width={42}
                height={101}
              />
            </div>
          </div>

          <div className="pl-0 lg:pl-8">
            <TextHeading className="text-left mb-4" content="Anxious Preoccupied" />

            <p>
              Relationships can often make you feel anxious, unsafe, or insecure because you likely
              have a subconscious fear of abandonment. As a result, you seek more closeness in your
              relationships, need constant reassurance, and can feel afraid if there is a strong
              sense a loved one is pulling away. While anxiously attached partners can be "clingy",{' '}
              <span className="underline">
                <Link
                  href="https://blog.personaldevelopmentschool.com/25/how-to-overcome-anxious-attachment"
                  target="_blank">
                  there are several ways to overcome it.
                </Link>
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col mb-12 lg:flex-row lg:items-center">
          <div className="mb-4 lg:mb-0">
            <div className="min-w-40 max-w-40 h-40 flex items-center justify-center bg-blue-lightest rounded-full p-4">
              <Image
                alt="Couple-AP"
                src="/images/AttachmentQuiz/couple-FA.svg"
                width={82}
                height={101}
              />
            </div>
          </div>

          <div className="pl-0 lg:pl-8">
            <TextHeading className="text-left mb-4" content="Fearful Avoidant" />

            <p>
              Also known as the "disorganized attachment style". Relationships can feel chaotic,
              confusing, and overwhelming because you swing between being avoidant and anxious.
              Depending on the relationship, you can shift between being "hot and cold," often
              feeling confused about your feelings. FAs are known for having elements of both
              anxious and avoidant attachment styles but,{' '}
              <span className="underline">
                <Link
                  href="https://blog.personaldevelopmentschool.com/19/8-ways-to-heal-a-fearful-avoidant-attachment-style"
                  target="_blank">
                  can heal their fearful avoidance using several tools.
                </Link>
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col mb-12 lg:flex-row lg:items-center">
          <div className="mb-4 lg:mb-0">
            <div className="min-w-40 max-w-40 h-40 flex items-center justify-center bg-blue-lightest rounded-full p-4">
              <Image
                alt="Couple-DA"
                src="/images/AttachmentQuiz/couple-DA.svg"
                width={70}
                height={107}
              />
            </div>
          </div>

          <div className="pl-0 lg:pl-8">
            <TextHeading className="text-left mb-4" content="Dismissive Avoidant" />

            <p>
              Intense emotions can feel overwhelming and can cause you to pull away from others. You
              may find yourself withdrawing from arguments or triggering situations. This need for
              independence can cause challenges in your relationships and inner conflict for you
              because you want to connect with others on a deeper level and desire affection and
              comfort.{' '}
              <span className="underline">
                <Link
                  href="https://blog.personaldevelopmentschool.com/28/how-to-approach-intimacy-if-you-have-a-dismissive-avoidant-attachment-style"
                  target="_blank">
                  Changing your approach to intimacy can help overcome these challenges.
                </Link>
              </span>
            </p>
          </div>
        </div>

        <div className="flex flex-col mb-12 lg:flex-row lg:items-center">
          <div className="mb-4 lg:mb-0">
            <div className="min-w-40 max-w-40 h-40 flex items-center justify-center bg-blue-lightest rounded-full p-4">
              <Image
                alt="Couple-SA"
                src="/images/AttachmentQuiz/couple-SA.svg"
                width={51}
                height={95}
              />
            </div>
          </div>

          <div className="pl-0 lg:pl-8">
            <TextHeading className="text-left mb-4" content="Secure Attached" />

            <p>
              You often feel comfortable and at ease in secure relationships. You’re also good at
              communicating your needs and feelings and feel open to vulnerability in healthy
              relationships. However, sometimes you can experience difficulty when relating to those
              who aren’t as secure in relationships. You bond better with secure people seeking
              close or long-term relationships.{' '}
              <span className="underline">
                <Link
                  href="https://blog.personaldevelopmentschool.com/20/5-steps-to-cultivating-secure-attachment"
                  target="_blank">
                  Anyone can cultivate a secure attachment style through patience and persistence.
                </Link>
              </span>
            </p>
          </div>
        </div>
      </Section>

      <Section
        className="w-full bg-blue-lightest"
        classNameInner="max-w-5xl flex flex-col items-center mx-auto lg:flex-row">
        <div className="w-full flex flex-col items-start pr-0 lg:pr-8">
          <p className="max-w-lg mb-4">
            Our free 5-minute quiz and personalized report will help you heal your attachment style
            and unlock the keys to a healthy, loving relationship!
          </p>

          <Button className="mb-8" label="START OUR FREE QUIZ NOW" theme="primary" link="#quiz" />
        </div>

        <div className="min-w-64 h-auto">
          <Image
            alt="Attachment Style Results Mockup"
            src="/images/AttachmentQuiz/attachment-style-results.png"
            width={250}
            height={298}
          />
        </div>
      </Section>
    </Page>
  )
}
