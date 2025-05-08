import { ButtonScroll } from '@/components/Button/variants/ButtonScroll'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { Metadata } from 'next'
import '@/app/(custom-layouts)/(no-nav)/quiz/[style]/b/style.css'
import { List } from '@/components/List'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { fa1, fa2, fa3, faCircleSmall } from '@awesome.me/kit-545b942488/icons/classic/solid'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { PDSResultsOfferSection } from '@/app/(custom-layouts)/(no-nav)/quiz/[style]/b/PDSResultsOfferSection'

export const metadata: Metadata = {
  title: 'Securely Attached Style Report | PDS',
  description:
    'Uncover your Secure Attachment Style in this in-depth and free report. Get the information that will transform your life now and forever!',
  robots: 'noindex',
}

export default function QuizResultsSAB() {
  return (
    <Page page_name="ICP Results Page - SA">
      <Section
        className="bg-gradient-to-b from-pink-auxiliary via-white to-white mb-6 lg:pb-4"
        classNameInner="!max-w-[792px]">
        <h1 className="text-primary !text-5xl">
          Stay secure. Stay grounded. Stay true to yourself.
        </h1>

        <h2>Your Attachment Style Is: Securely Attached</h2>

        <p>Don't Miss This Important Step: Watch This Video to Learn More</p>

        <VideoThumbnail
          className="shadow-centered p-4 rounded-20 max-w-[792px] mx-auto mb-6"
          srcUrl="https://storage.googleapis.com/pds_videos/RoyalRumbleSAshortvideo.mp4"
          thumbnailAlt="Thais Gibson sitting at a desk smiling and filling in a workbook."
          thumbnailUrl={'AttachmentQuizResults/thais-writing.jpg'}
          type="default"
        />

        <ButtonScroll label="LEARN MORE" target="#pds-offer" />
      </Section>

      <Section className="bg-white-secondary" classNameInner="!max-w-4xl mx-auto">
        <h2>What Does It Mean to Be Securely Attached?</h2>

        <p>
          <strong>
            There are four main attachment styles—each shaped by the emotional experiences you had
            early in life. They fall into two broad categories:
          </strong>
        </p>

        <div className="bg-[#F4D9F7] text-left rounded-2xl p-6 mb-8">
          <p className="lg:text-center">
            <strong>The Secure Attachment and the Insecure Attachment Styles, </strong> which
            include:
          </p>

          <List
            className="lg:flex lg:justify-between"
            classNameIcon="text-primary mr-2"
            icon={faCheckCircle}
            listItems={[
              'Anxious (Anxious Preoccupied)',
              'Avoidant (Dismissive Avoidant)',
              'Disorganized (Fearful Avoidant)',
            ]}
          />
        </div>

        <div className="grid gap-8 text-left my-8 lg:grid-cols-2">
          <div>
            <p>
              Your attachment style was shaped by how emotionally safe and supported you felt with
              your caregivers and early relationships.
            </p>

            <p>If you're securely attached, it likely means you experienced:</p>

            <List
              icon={faCircleSmall}
              listItems={[
                'Consistent emotional availability from your caregivers',
                'Encouragement to express your feelings and needs',
                'Repair after conflict, rather than withdrawal or punishment',
                'Safety in both independence and connection',
              ]}
            />
          </div>

          <div>Image</div>
        </div>

        <div>
          <h3>As a result, securely attached individuals like you tend to:</h3>

          <div className="grid gap-8 text-left lg:grid-cols-2">
            <div>Image</div>

            <div className="text-left">
              <List
                className="mb-4"
                classNameIcon="text-primary mr-2"
                icon={faCheckCircle}
                listItems={[
                  'Trust themselves and others',
                  'Communicate clearly and respectfully',
                  'Handle conflict with emotional regulation',
                  'Form deep, balanced relationships without losing themselves',
                  'Feel confident expressing needs and receiving love',
                ]}
              />

              <p>
                <strong>
                  Being secure doesn’t mean you never feel triggered or hurt—it means you know how
                  to move through those moments without spiraling or shutting down.
                </strong>
              </p>

              <p>And in a world where many people are still healing, that’s a powerful strength.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <h2>You’ve done the work. Now protect what you’ve built.</h2>

        <div className="grid gap-8 text-left lg:grid-cols-2">
          <div className="rounded-2xl border border-primary p-4">
            <p>
              <strong>
                You know your worth. You trust your instincts. You show up with honesty, empathy,
                and clarity.
              </strong>
            </p>

            <p>But here’s the thing:</p>

            <ul className="list-disc list-inside mb-4">
              <li>Being secure doesn’t mean the world around you always is.</li>

              <li>Insecure dynamics can still show up—in dating, friendships, family, or work.</li>

              <li>And when they do, it’s not always easy to stay grounded.</li>
            </ul>

            <p>You might find yourself:</p>

            <ul className="list-disc list-inside mb-4">
              <li>Supporting people who expect you to carry the emotional weight</li>

              <li>Feeling out of sync in relationships that lack emotional maturity</li>

              <li>Questioning your boundaries when others don’t respect them</li>

              <li>Wondering how to stay connected without slipping into old patterns</li>
            </ul>

            <p>
              <strong>Being secure is a blessing. Staying secure takes skill.</strong>
            </p>
          </div>

          <div className="rounded-2xl border border-primary p-4">
            <p>
              <strong>
                Even if you’ve done the healing, the world doesn’t always reflect it back.
              </strong>
            </p>

            <p>
              Most people are still learning how to communicate clearly, regulate their emotions,
              and feel safe with intimacy.
            </p>

            <p>That means you’re likely to encounter:</p>

            <ul className="list-disc list-inside mb-4">
              <li>Mixed signals or game-playing in dating</li>

              <li>Avoidant or anxious behavior from partners, friends, or family</li>

              <li>Difficulty connecting deeply without taking on a “therapist” role</li>

              <li>Emotional burnout from managing others’ instability</li>
            </ul>

            <p>It’s not your job to fix anyone.</p>

            <p>
              But you can learn how to protect your energy, maintain strong boundaries, and
              communicate in a way that invites connection without sacrificing your peace.
            </p>
          </div>

          <div className="rounded-2xl border border-primary p-4">Image</div>

          <div className="rounded-2xl border border-primary p-4">
            <p>
              <strong>Being Secure Doesn’t Mean Relationships Are Always Simple</strong>
            </p>

            <p>You’ve built a strong foundation—emotionally aware, grounded, and self-trusting.</p>

            <p>But even when you're secure, not everyone around you will be.</p>

            <p>
              And navigating relationships with people who are still healing—whether anxious,
              avoidant, or emotionally reactive—can sometimes feel frustrating, draining, or
              confusing.
            </p>

            <p>You might:</p>

            <ul className="list-disc list-inside mb-4">
              <li>Find yourself doing emotional labour in relationships that lack balance</li>

              <li>Feel unclear on how to handle mixed signals or avoidant behaviour</li>

              <li>Struggle to express your needs when someone else is overwhelmed or defensive</li>

              <li>
                Notice your peace is disrupted when others communicate from fear instead of clarity
              </li>
            </ul>

            <p>
              That doesn’t mean you’re losing your center. It means you’re aware. You’re attuned.
              And you care.
            </p>

            <p>
              But in order to protect the connection and your well-being, you need tools that match
              your growth.
            </p>
          </div>
        </div>
      </Section>

      <Section className="relative !pb-60 text-left lg:!py-28 lg:!px-56 xl:!py-32 2xl:!py-40">
        <h2 className="text-white text-left relative z-10 mb-0">That’s where we come in.</h2>

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

      <Section className="bg-green-light" classNameInner="lg:!max-w-screen-xl">
        <h2>Three Essentials for Staying Secure in an Insecure World</h2>

        <p>You already have a solid foundation.</p>

        <p>
          Now it’s about reinforcing it—so you can keep showing up with clarity, strength, and
          compassion, no matter who you're interacting with. Here’s what helps:
        </p>

        <div className="lg:grid lg:grid-cols-3 lg:gap-4 lg:mb-6">
          <div className="default-padding flex bg-white rounded-2xl shadow-centered-card mb-4 text-left p-4 lg:p-6">
            <FontAwesomeIcon
              className="mr-2 mt-[2px] text-white bg-black p-1 px-[6px] rounded-sm"
              icon={fa1}
              size="xs"
            />

            <div>
              <p>
                <strong>A Grounded, Like-Minded Community</strong>
              </p>

              <p>
                <strong>
                  Real change begins when you feel supported, understood, and accepted.
                </strong>
              </p>

              <p>
                Even secure people benefit from connection. When you’re surrounded by others who
                value emotional awareness and healthy communication, it becomes easier to stay in
                alignment—especially when the outside world feels noisy or reactive.
              </p>
            </div>
          </div>

          <div className="default-padding flex bg-white rounded-2xl shadow-centered-card mb-4 text-left p-4 lg:p-6">
            <FontAwesomeIcon
              className="mr-2 mt-[2px] text-white bg-black p-1 px-[6px] rounded-sm"
              icon={fa2}
              size="xs"
            />

            <div>
              <p>
                <strong>Tools That Match Your Emotional Maturity</strong>
              </p>

              <p>
                <strong>
                  Navigating insecure attachment styles can be tricky—even when you’re calm and
                  clear.
                </strong>
              </p>

              <p>
                Whether it’s handling emotional reactivity, avoidant shutdowns, or anxious
                over-pursuit, our tools help you respond with confidence while staying true to
                yourself.
              </p>
            </div>
          </div>

          <div className="default-padding flex bg-white rounded-2xl shadow-centered-card mb-4 text-left p-4 lg:p-6">
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
                  It’s not about learning everything from scratch—it’s about staying sharp.
                </strong>
              </p>

              <p>
                By applying these tools in real time, reflecting on interactions, and integrating
                new strategies, you’ll keep strengthening your ability to lead with grounded
                connection—even in complex or emotionally charged situations.
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

      <PDSResultsOfferSection attachmentStyleShort="sa" />
    </Page>
  )
}
