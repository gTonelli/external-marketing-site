// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { IButtonDefaultProps } from '@/components/Button/variants/ButtonDefault'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { Button } from '@/components/Button/Button'
import { List } from '@/components/List'
import { Faq } from '@/components/Faq/Faq'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'
import { Link } from '@/components/Link'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'
import { Icon } from '@/components/Icon'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
// style
import './style.css'
// utils
import { ERoutes } from '@/utils/constants'

export const metadata: Metadata = {
  title: 'Join Our 90-Day Secure Attachment Bootcamp',
  description:
    'Are you ready to transform your insecure attachment style to rewrite your love life? Join our exclusive 90-Day Secure Attachment Bootcamp for only $149!',
  robots: 'noindex',
}

const BootcampPricing = [
  {
    perk: 'Personalized Attachment Style Program',
    cost: '$300',
  },
  {
    perk: 'Proven Exercises & Downloadable and Lifelong Workbooks',
    cost: '$100',
  },
  {
    perk: 'Daily Live Webinars & Q&As With Thais Gibson',
    cost: '$400',
  },
  {
    perk: 'Daily Peer Support Groups With Trained Coaches',
    cost: '$100',
  },
  {
    perk: 'Online Community Access',
    cost: '$50',
  },
]

export default function AttachmentBootcampPage() {
  return (
    <Page page_name="Attachment Bootcamp">
      <Section className="bg-hero-mobile z-15 lg:hidden">
        <div className="text-black text-left relative z-20 pb-40 lg:col-span-7">
          <h1 className="mb-4">
            Do You Want to Rewrite Your Love Life & Become Securely Attached?
          </h1>

          <p className="mb-4">
            Join our exclusive 90-Day Secure Attachment Bootcamp and rewrite the story of your love
            life. Say goodbye to insecurity and hello to thriving relationships filled with trust,
            intimacy, and mutual respect by becoming securely attached!
            <br />
            <br />
            <strong>Only for $149 – up to 50% off the total price!</strong>
          </p>

          <CheckoutButton track label="SIGN UP FOR BOOTCAMP" />
        </div>
      </Section>

      <Section
        className={`bg-hero w-full hidden min-h-80 z-10 lg:block lg:py-28 xl:py-32 2xl:py-36 3xl:py-64`}
        classNameInner="relative z-10 lg:grid lg:grid-cols-12">
        <div className="text-black text-left lg:col-span-7">
          <h1 className="mb-4">
            Do You Want to Rewrite Your Love Life & Become Securely Attached?
          </h1>

          <p className="mb-4">
            Join our exclusive 90-Day Secure Attachment Bootcamp and rewrite the story of your love
            life. Say goodbye to insecurity and hello to thriving relationships filled with trust,
            intimacy, and mutual respect by becoming securely attached!
            <br />
            <br />
            <strong>Only for $149 – up to 50% off the total price!</strong>
          </p>

          <CheckoutButton track label="SIGN UP FOR BOOTCAMP" />
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div>
          <Image
            src="/images/AttachmentBootcamp/a-couple.jpg"
            alt="A happy couple"
            width={510}
            height={504}
          />
        </div>

        <div className="text-left">
          <h2 className="mb-4">Unlock the Best Relationships of Your Life in Just 90 Days!</h2>

          <p className="mb-4">
            <strong>
              Are you ready to transform your love life, build deep connections, and feel secure in
              yourself and your relationships?
            </strong>
            <br />
            <br />
            We provide you with the tools, support, and knowledge to embark on a journey to
            transform your insecure attachment style to become securely attached, helping you master
            your relationships and discover true fulfillment.
            <br />
            <br />
            Our 90-Day Secure Attachment Bootcamp offers a personalized roadmap, consisting of
            courses, guided exercises, proven scientific theory, daily webinars and study groups,
            and access to our community. Altogether, this comprehensive bundle roadmaps transforming
            your attachment style and unlocking the best relationships in your life.
            <br />
            <br />
            With our proven and revolutionary method, you'll experience major breakthroughs in
            growth within the first 7 days and start building the most meaningful relationships
            you've ever had.
            <br />
            <br />
            Say goodbye to uncertainty and hello to thriving connections in just 90 days!
          </p>

          <CheckoutButton track label="JOIN BOOTCAMP TODAY" className="mb-4" />

          <p>
            <small>*Offer valid for a limited time only. Join now.</small>
          </p>
        </div>
      </Section>

      <Section className="max-w-3xl mx-auto">
        <h2 className="mb-8">
          Watch This Video to See How Our Bootcamp Will Change Your Life & Relationships
        </h2>

        <VideoThumbnail
          thumbnailUrl="AttachmentBootcamp/thais-video-thumbnail.jpg"
          srcUrl="https://storage.googleapis.com/pds_videos/AttachmentBootcampIntro.mp4"
        />
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="w-full bg-blue-lightest p-12">
        <h2 className="mb-4">Here’s What Happens After 90 Days of Bootcamp</h2>

        <p className="mb-4">
          <strong>Stop for a minute and imagine a life where:</strong>
        </p>

        <div className="grid grid-cols-2 gap-4 my-8 lg:grid-cols-5">
          <div>
            <Icon name="heart" type="light" size="5x" className="text-primary mb-4" />

            <p>You are confident and worthy of love</p>
          </div>

          <div>
            <Icon name="comments" type="light" size="5x" className="text-primary mb-4" />

            <p>You experience deep meaningful relationships</p>
          </div>

          <div>
            <Icon name="lock" type="light" size="5x" className="text-primary mb-4" />

            <p>You feel secure in yourself and others</p>
          </div>

          <div>
            <Icon name="people-group" type="light" size="5x" className="text-primary mb-4" />

            <p>You are not lonely and have no anxiety or worries</p>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Icon name="heart-crack" type="light" size="5x" className="text-primary mb-4" />

            <p>You no longer experience heartache</p>
          </div>
        </div>

        <p>
          <strong>
            Sounds like a dream, right?
            <br />
            It doesn't have to be. This can be your new reality.
          </strong>
        </p>
      </Section>

      <Section className="max-w-5xl mx-auto">
        <div className="max-w-2xl mx-auto mb-8">
          <h2 className="mb-4">
            That’s What Our 90-Day Attachment Style Bootcamp Empowers You to Achieve.
          </h2>

          <p>
            Whether you’re a dismissive or fearful avoidant, or an anxious preoccupied individual,
            at the end of the 90 days of our exclusive and in-demand bootcamp, you can:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 text-left mb-8 lg:grid-cols-2">
          <List
            classNameIcon="!text-green-check mt-1 mr-4"
            classNameListItems="font-bold mb-4"
            iconName="check-circle"
            iconType="light"
            listItems={[
              'Rewire your relationship fears and release the baggage weighting down your relationships',
              'Change your built-in habits and patterns by rewiring your subconscious mind',
              'Self-soothe and manage your emotions in a calm and effective manner',
              'Understand what you need from a relationship and a partner',
            ]}
          />

          <List
            classNameIcon="!text-green-check mt-1 mr-4"
            classNameListItems="font-bold mb-4"
            iconName="check-circle"
            iconType="light"
            listItems={[
              'Communicate your personal and relationship needs with clarity and confidence',
              'Create deep and meaningful connections with family, friends, and partners',
              'Master the art of dating to find, create, and maintain a love-filled connection',
              'Set healthy boundaries that honor your needs and values',
            ]}
          />
        </div>

        <p className="mb-4">
          The result? A reality where you have the life and relationships you’ve always desired.
          <br />
          <br />
          And all it takes is 90 days*. How amazing is that?
          <br />
          <br />
          *Pay $149 for the first 90 days. After 90 days, you’ll auto-renew to our All-Access Pass –
          which gives you access to everything in the school – for{' '}
          <strong>$149 per quarter!</strong> That’s <strong>50% off</strong> the regular price. You
          can cancel at any time with no commitment.
        </p>

        <CheckoutButton track label="SIGN UP NOW" />
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4">Your Path to Transformation Starts Here</h2>

          <p className="mb-4">
            The 90-Day Attachment Style Bootcamp is your personalized roadmap to relationship
            success.
            <br />
            <br />
            Based on your insecure attachment style, we’ll equip you with a comprehensive program,
            including essential courses, tools and strategies, and workbooks.
            <br />
            <br />
            To accompany your journey, you'll also get exclusive access to a welcoming and
            supportive network and professional guidance from an industry leader.
            <br />
            <br />
            Together, our bootcamp will empower you to embark on a transformative journey to
            becoming securely attached.
          </p>

          <CheckoutButton track label="START YOUR BOOTCAMP TODAY" className="mb-4" />

          <p>
            <small>*Offer valid for a limited time only. Join Now.</small>
          </p>
        </div>

        <div className="text-left">
          <Faq
            includeHeading={false}
            className="w-full !p-0 !m-0"
            classNameExpandable="md:hover:!bg-white"
            classNameQuestion="!text-base uppercase !tracking-33"
            faq={[
              {
                question: 'Personalized Course Track',
                answer:
                  'You won’t just get standard courses for “everyone”. You’ll get personalized courses tailored to your attachment style, which gives you step-by-step guidance to learn new concepts, challenge your beliefs, and start experiencing personal and relationship growth!',
              },
              {
                question: 'Proven Scientific Theory',
                answer:
                  'The basis of our programs, courses, exercises, and webinars is deeply rooted in Gibson Integrated Attachment Theory™. This groundbreaking methodology has proven to deliver life-changing results in record time as it transforms the subconscious mind.',
              },
              {
                question: 'Daily Live Webinars',
                answer:
                  'Have questions? Get your answers with 1:1 time with Thais Gibson, personal development industry leader, in weekly webinars and Q&As. You’ll learn about your attachment style, relationships, and more to better understand yourself.',
              },
              {
                question: 'Daily Peer Support Groups',
                answer:
                  'Connect with like-minded individuals and receive guidance from trained and certified coaches with our daily peer support groups. This additional support and guidance will empower you to practice transformation tools and learn new methods.',
              },
              {
                question: 'Exclusive Community Access',
                answer:
                  'Join our vibrant and private Facebook and Discord groups of like-minded people to share experiences, learn new tools, and create healthy relationships. Our community will support you, so you don’t have to go on your journey alone.',
              },
              {
                question: 'Guided Exercises and Meditations',
                answer:
                  'Get a toolbox of exercises and meditations to help you anytime, anywhere. This curated toolbox will heal past wounds, cultivate inner peace, and inspire you to live a life in peace and harmony.',
              },
              {
                question: '90-Day Roadmap',
                answer:
                  'You’ll never lose track of your progress with our comprehensive roadmap. This ensures you stay on your path, never lose sight of your goal, and see all the gains you’ve made over 90 days.',
              },
              {
                question: 'Completion Certificate',
                answer:
                  'Acknowledgment and recognition can inspire you to continue your journey to become the best version of you ever. You can celebrate your achievements with an official Attachment Bootcamp Completion Certificate.',
              },
            ]}
          />
        </div>
      </Section>

      <Section className="w-full bg-blue-lightest" classNameInner="max-w-5xl mx-auto">
        <h2 className="mb-4">Become the Best Version of You Ever</h2>

        <p className="mb-8">
          Our 90-Day Attachment Style Bootcamp will rewrite your love life, unlock your
          relationships, and make you securely attached.
        </p>

        <div className="bg-white rounded-3xl p-4 lg:p-12">
          <div className="grid grid-cols-3 gap-x-4 gap-y-8 pb-8 border-b border-black">
            <div>
              <p className="text-left">
                <strong>What You're Getting</strong>
              </p>
            </div>
            <div>
              <p>
                <strong>Cost Separately</strong>
              </p>
            </div>
            <div>
              <p>
                <strong>Included in 90-day Bootcamp</strong>
              </p>
            </div>
            {BootcampPricing.map((item) => (
              <>
                <div>
                  <p className="text-left">{item.perk}</p>
                </div>
                <div>
                  <p>{item.cost}</p>
                </div>
                <div>
                  <Icon name="check-circle" type="light" className="!text-green-check" size="2x" />
                </div>
              </>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 pt-8">
            <div>
              <p className="text-3xl text-left font-bold">Total Cost</p>
            </div>

            <div>
              <p className="text-3xl font-bold">$1000</p>
              <p>as per industry averages*</p>
            </div>

            <div>
              <p className="text-3xl text-green-check font-bold">$149</p>
              <p>Up to 50% off</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 my-12 lg:grid-cols-2">
          <div className="text-left">
            <h2 className="mb-4">Join Our Bootcamp Now!</h2>

            <p>
              *Offer valid for a limited time only. Pay $149 for the first 90 days. After 90 days,
              you’ll auto-renew to our All-Access Pass – which gives you access to everything in the
              school – for <strong>$149 per quarter!</strong> That’s <strong>50%</strong> off the
              regular price. You can cancel at any time with no commitment.
            </p>
          </div>

          <BootcampPriceCard />
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div>
            <Image
              src="/images/AttachmentBootcamp/upset-woman.jpg"
              alt="An upset woman"
              width={588}
              height={508}
            />
          </div>

          <div className="text-left mb-8">
            <h2 className="mb-4">What’s the Cost of Not Taking Action?</h2>

            <List
              classNameIcon="!text-primary mt-1 mr-4"
              classNameListItems="mb-4"
              iconName="face-disappointed"
              iconType="light"
              listItems={[
                'Missing out on the relationships you want',
                'Believing you don’t deserve true love and connection',
                'Allowing your fears to impact you and your relationships',
                'Letting your self-sabotaging habits ruin any potential happiness',
                'Never understanding your or your partner’s needs',
                'Allowing people to cross your boundaries',
                'Struggle to communicate your emotions and feelings healthily',
              ]}
            />

            <p>
              But you have the chance to take control of your life and relationships with our
              exclusive 90-Day Attachment Style Bootcamp. Your chance is now:
            </p>
          </div>
        </div>

        <CheckoutButton track label="START YOUR TRANSFORMATION" className="mb-4" />

        <p>
          <small>*Offer valid for a limited time only. Join now.</small>
        </p>
      </Section>

      <Section className="max-w-5xl mx-auto">
        <h2 className="mb-4">Don't Just Take Our Word For It</h2>

        <p>
          Here's what our students have to say about their experience with the 90-Day Attachment
          Style Bootcamp
        </p>
      </Section>

      <CarouselTestimonialThinkific />

      <Section className="bg-about-mobile min-h-screen z-15 lg:hidden">
        <div className="text-black text-left relative z-20 pb-96 lg:col-span-7">
          <h2 className="mb-4">
            Meet Your Instructor:
            <br />
            Thais Gibson, PhD
          </h2>

          <p>
            As the founder of our revolutionary program, Thais Gibson brings a wealth of knowledge,
            expertise, understanding, and empathy to the table.
            <br />
            <br />
            With a PhD and over 13 different certifications, and co-founder of The Personal
            Development School, she’s leading people worldwide to change their lives and
            relationships through their attachment style.
            <br />
            <br />
            She’s featured on many popular podcasts, including The Mel Robbins Podcast. And is
            launching her brand new podcast soon – The Thais Gibson Podcast – which will include
            special guests, such as Dr. Caroline Leaf, Dr. Isabella Wentz, Kevin Miller, host of
            What's Driving You, and Jemma Sbeg, the host of Psychology of Your 20s.
            <br />
            <br />
            You can find her best-selling book,{' '}
            <Link
              className="!underline"
              url="https://www.amazon.com/Learning-Love-Relationships-Integrated-Attachment/dp/B0CFGFV5CH"
              label="Learning Love"
            />
            , on Amazon now, explaining how you can get the best relationships of your life.
            <br />
            <br />
            As part of this exclusive bootcamp, you’ll get to enjoy 1-1 time with Thais in weekly
            Q&A, giving you the opportunity to ask her any personal questions.
            <br />
            <br />
            It’s what makes this bootcamp so powerful and truly unique: how often do you get to work
            with a personal development leader?
          </p>
        </div>
      </Section>

      <Section
        className={`bg-about w-full hidden min-h-80 z-10 lg:block lg:py-16 xl:py-18 2xl:py-20 3xl:py-22`}
        classNameInner="relative z-10 lg:grid lg:grid-cols-12">
        <div className="text-black text-left lg:col-span-7">
          <h2 className="mb-4">
            Meet Your Mentor:
            <br />
            Thais Gibson, PhD
          </h2>

          <p>
            As the founder of our revolutionary program, Thais Gibson brings a wealth of knowledge,
            expertise, understanding, and empathy to the table.
            <br />
            <br />
            With a PhD and over 13 different certifications, and co-founder of The Personal
            Development School, she’s leading people worldwide to change their lives and
            relationships through their attachment style.
            <br />
            <br />
            She’s featured on many popular podcasts, including The Mel Robbins Podcast. And is
            launching her brand new podcast soon – The Thais Gibson Podcast – which will include
            special guests, such as Dr. Caroline Leaf, Dr. Isabella Wentz, Kevin Miller, host of
            What's Driving You, and Jemma Sbeg, the host of Psychology of Your 20s.
            <br />
            <br />
            You can find her best-selling book,{' '}
            <Link
              className="!underline"
              url="https://www.amazon.com/Learning-Love-Relationships-Integrated-Attachment/dp/B0CFGFV5CH"
              label="Learning Love"
            />
            , on Amazon now, explaining how you can get the best relationships of your life.
            <br />
            <br />
            As part of this exclusive bootcamp, you’ll get to enjoy 1-1 time with Thais in weekly
            Q&A, giving you the opportunity to ask her any personal questions.
            <br />
            <br />
            It’s what makes this bootcamp so powerful and truly unique: how often do you get to work
            with a personal development leader?
          </p>
        </div>
      </Section>

      <TrustbarSlider />

      <Section className="max-w-5xl mx-auto" classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-left">
          <h2 className="mb-4">Why We're Your Best Choice for Relationship Transformation</h2>

          <p className="font-bold tracking-33 mb-4">
            OUR COMMITMENT TO EXCELLENCE IS ESTABLISHED WITH A 99.7% STUDENT SATISFACTION SCORE
          </p>

          <p>
            With our 90-Day Attachment Style Bootcamp, you won't find another program with as much
            ongoing support, life-changing tools, and scientifically proven methods to transform
            your relationships and become secure:
          </p>
        </div>

        <div className="text-left">
          <List
            classNameIcon="!text-green-check mt-1 mr-4"
            classNameListItems="font-bold mb-4"
            iconName="check-circle"
            iconType="light"
            listItems={[
              'Personalized program tracks tailored to your specific attachment style and goals',
              '30,000+ people experiencing significant change in their lives thanks to the program',
              'A stunning 99.7 NPS score (student recommending the program) from students from over 200+ countries',
              'Groundbreaking research and methodologies rooted in Gibson Integrated Attachment Theory™, proven to deliver results in record time',
              'Daily support in small and large group formats, led by trained and certified counselors and coaches',
              'A supportive online community of like-minded individuals committed to growth and connection',
            ]}
          />
        </div>
      </Section>

      <Section className="w-full bg-blue-lightest" classNameInner="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 gap-8 text-left mb-8 lg:grid-cols-3">
          <div>
            <p>
              <Image
                className="mb-4"
                src="/images/AttachmentBootcamp/vector-1.svg"
                alt="A happy couple"
                width={176}
                height={136}
              />
            </p>

            <p className="font-bold tracking-33 mb-4">WHY YOU NEED US</p>

            <p>
              Everyone wants to feel secure and have deeply connective and loving relationships.
              They just don’t know how to get them.
              <br />
              <br />
              You now have an opportunity that many people don’t: the chance to move past your
              insecurities and create the love and relationships you desire.
              <br />
              <br />
              This 90-Day Attachment Style Bootcamp will do it for you.
            </p>
          </div>

          <div>
            <p>
              <Image
                className="mb-4"
                src="/images/AttachmentBootcamp/vector-2.svg"
                alt="A unique idea"
                width={176}
                height={136}
              />
            </p>

            <p className="font-bold tracking-33 mb-4">WHY WE'RE UNIQUE</p>

            <p>
              Our game-changing approach goes into the subconscious mind to uncover and reprogram
              your thoughts, patterns, and beliefs, so you can move past your insecure attachment
              style and become securely attached.
              <br />
              <br />
              It’s why our students enjoy long-lasting results and positive outcomes and become the
              best version of themselves.
              <br />
              <br />
              And you can get it all with our 90-Day Attachment Style Bootcamp.
            </p>
          </div>

          <div>
            <p>
              <Image
                className="mb-4"
                src="/images/AttachmentBootcamp/vector-3.svg"
                alt="We are in demand"
                width={176}
                height={136}
              />
            </p>

            <p className="font-bold tracking-33 mb-4">WHY WE'RE IN-DEMAND</p>

            <p>
              By creating the Bootcamp, we’ve combined the perfect formula of learning, empowerment,
              and encouragement that makes us stand out.
              <br />
              <br />
              Most importantly, we’ve made it affordable and accessible.
              <br />
              <br />
              We’ve never made this offer before for this price or value. It’s a small investment
              that will lead to secure relationships without breaking the bank.
              <br />
              <br />
              That’s why this program is available for a limited time only.
            </p>
          </div>
        </div>

        <CheckoutButton track label="START YOUR BOOTCAMP NOW" className="mb-8" />

        <div className="max-w-2xl mx-auto">
          <p>
            *Pay $149 for the first 90 days. After 90 days, you’ll auto-renew to our All-Access Pass
            – which gives you access to everything in the school – for $149 per quarter! That’s 25%
            off the regular price. You can cancel at any time with no commitment.
          </p>
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto">
        <h2 className="mb-4">You Won’t Be Alone In Your Journey</h2>

        <p className="tracking-33 mb-4">
          <strong>
            EMBARKING ON A TRANSFORMATIONAL JOURNEY ALONE CAN BE SCARY AND LONELY WITH A FEAR OF
            FAILURE.
          </strong>
        </p>

        <p>
          <strong>But with our 90-Day Attachment Style Bootcamp, you’ll constantly:</strong>
        </p>

        <div className="grid grid-cols-2 gap-4 my-8 lg:grid-cols-5">
          <div>
            <Icon name="compass" type="light" size="5x" className="text-primary mb-4" />

            <p>Meet like-minded people who are on their own journey — like you</p>
          </div>

          <div>
            <Icon name="heart" type="light" size="5x" className="text-primary mb-4" />

            <p>Make healthy relationships with a thriving community</p>
          </div>

          <div>
            <Icon name="people-group" type="light" size="5x" className="text-primary mb-4" />

            <p>Have a welcoming and helpful group to turn to for questions</p>
          </div>

          <div>
            <Icon name="hand-heart" type="light" size="5x" className="text-primary mb-4" />

            <p>Have daily support from coaches and peers with support groups</p>
          </div>

          <div className="col-span-2 lg:col-span-1">
            <Icon name="messages-question" type="light" size="5x" className="text-primary mb-4" />

            <p>Get personal guidance from Thais Gibson via webinars and Q&As</p>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <p>
            Our vibrant and empowering community environment will empower you through the hard
            times, have a shoulder to hold you up, and offer ideas that can spark new habits.
            <br />
            <br />
            You’ll never feel or be alone in your journey.
          </p>
        </div>
      </Section>

      <Section className="bg-pricing-mobile min-h-screen z-15 lg:hidden">
        <div className="relative z-20 pb-96 lg:col-span-5">
          <BootcampPriceCard />
        </div>
      </Section>

      <Section
        className={`bg-pricing w-full hidden min-h-80 z-10 lg:block lg:py-16 xl:py-18 2xl:py-20 3xl:py-22`}
        classNameInner="relative z-10 lg:grid lg:grid-cols-12">
        <div className="lg:col-span-5">
          <BootcampPriceCard />
        </div>
      </Section>
    </Page>
  )
}

const BootcampPriceCard = () => (
  <div className="bg-white rounded-3xl p-8">
    <p className="mb-8">
      <span className="text-3xl line-through mr-4">$1000</span>

      <span className="text-3xl font-bold mr-4">$149</span>

      <span>per quarter</span>
    </p>

    <CheckoutButton track className="mb-8" label="PAY $149 & SAVE 50%" />

    <div className="flex flex-wrap justify-around">
      <Icon name="cc-amex" type="brands" size="2x" />
      <Icon name="cc-discover" type="brands" size="2x" />
      <Icon name="cc-mastercard" type="brands" size="2x" />
      <Icon name="cc-paypal" type="brands" size="2x" />
      <Icon name="cc-visa" type="brands" size="2x" />
    </div>
  </div>
)

const CheckoutButton = ({ className, label }: IButtonDefaultProps) => {
  return (
    <a href={ERoutes.CHECKOUT_ATTACHMENT_BOOTCAMP}>
      <Button track className={className} label={label} />
    </a>
  )
}
