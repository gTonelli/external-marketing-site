// core
import { Metadata } from 'next'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
// style
import './style.css'
import { Button } from '@/components/Button/Button'
import { List } from '@/components/List'
import { Faq } from '@/components/Faq/Faq'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'

export const metadata: Metadata = {
  title: 'Join Our 90-Day Secure Attachment Bootcamp',
  description:
    'Are you ready to transform your insecure attachment style to rewrite your love life? Join our exclusive 90-Day Secure Attachment Bootcamp for only $149!',
  robots: 'noindex',
}

export default function AttachmentBootcampPage() {
  return (
    <Page page_name="Attachment Bootcamp">
      <Section className="bg-hero-mobile z-15 lg:hidden">
        <div className="text-black text-left relative z-20 pb=12 lg:col-span-7">
          <h1 className="mb-4">
            Do You Want to Rewrite Your Love Life & Become Securely Attached?
          </h1>

          <p className="mb-4">
            Join our exclusive 90-Day Secure Attachment Bootcamp and rewrite the story of your love
            life. Say goodbye to insecurity and hello to thriving relationships filled with trust,
            intimacy, and mutual respect by becoming securely attached!
            <br />
            <br />
            <strong>Only for $149 – up to 85% off the total price!</strong>
          </p>

          <Button label="SIGN UP FOR BOOTCAMP" />
        </div>
      </Section>

      <Section
        className={`bg-hero w-full hidden min-h-80 z-10 lg:block lg:py-32 xl:py-28 2xl:py-36 3xl:py-72`}
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
            <strong>Only for $149 – up to 85% off the total price!</strong>
          </p>

          <Button label="SIGN UP FOR BOOTCAMP" />
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div>IMAGE</div>

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
            With our proven and revolutionary method, you'll experience major breakthroughs in
            growth within the first 7 days and start building the most meaningful relationships
            you've ever had.
            <br />
            <br />
            Say goodbye to uncertainty and hello to thriving connections in just three months!
          </p>

          <Button label="JOIN OUR BOOTCAMP TODAY" className="mb-4" />

          <p>
            <small>*Offer valid for a limited time only. Join now.</small>
          </p>
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="w-full bg-blue-lightest p-12">
        <h2 className="mb-4">Here’s What Happens After 90 Days of Bootcamp</h2>

        <p className="mb-4">
          <strong>Stop for a minute and imagine a life where:</strong>
        </p>

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
            at the end of the three months of our exclusive and in-demand bootcamp, you can:
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 text-left mb-8 lg:grid-cols-2">
          <List
            classNameIcon="!text-green-check mt-1 mr-2"
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
            classNameIcon="!text-green-check mt-1 mr-2"
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
          <strong>$149 per quarter!</strong> That’s <strong>25% off</strong> the regular price. You
          can cancel at any time with no commitment.
        </p>

        <Button label="SIGN UP NOW" />
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

          <Button label="JOIN OUR BOOTCAMP TODAY" className="mb-4" />

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
                  'You’ll never lose track of your progress with our comprehensive roadmap. This ensures you stay on your path, never lose sight of your goal, and see all the gains you’ve made over the three months.',
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

      <Section className="max-w-5xl mx-auto">
        <h2 className="mb-4">Don't Just Take Our Word For It</h2>

        <p>
          Here's what our students have to say about their experience with the 90-Day Attachment
          Style Bootcamp
        </p>
      </Section>

      <CarouselTestimonialThinkific />
    </Page>
  )
}
