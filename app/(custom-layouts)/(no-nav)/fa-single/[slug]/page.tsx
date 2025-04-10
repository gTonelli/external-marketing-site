// core
import { Metadata } from 'next'
import Link from 'next/link'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { List } from '@/components/List'
import { VideoYoutube } from '@/components/Video/variants/VideoYoutube'
import { Button } from '@/components/Button/Button'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
// config
import { FA_SINGLE_CONFIG as CONFIG } from './config'
// styles
import './style.css'

export const dynamicParams = false

interface IFASinglePageParams {
  params: Promise<{
    slug: 'behaviors' | 'dating-tips' | 'heal-triggers' | 'situationship' | 'dating-apps' | 'needs'
  }>
}

export function generateStaticParams() {
  return [
    { slug: 'behaviors' },
    { slug: 'dating-tips' },
    { slug: 'heal-triggers' },
    { slug: 'situationship' },
    { slug: 'dating-apps' },
    { slug: 'needs' },
  ]
}

export async function generateMetadata({ params }: IFASinglePageParams): Promise<Metadata> {
  const { slug } = await params

  return {
    title: CONFIG[slug].seoTitle,
    description: CONFIG[slug].seoDescription,
    robots: 'noindex',
  }
}

export default async function FASinglePage({ params }: IFASinglePageParams) {
  const { slug } = await params
  const config = CONFIG[slug]
  const ctaUrl = '/limited-offer/fa'

  return (
    <Page page_name={`FA Single - ${slug}`}>
      <Section classNameInner="!max-w-4xl mx-auto">
        <h1 className="mb-8">{config.header}</h1>

        <p className="mb-8">{config.subheader}</p>

        <div className="w-full bg-white rounded-2xl shadow-xl p-4 mx-auto">
          <VideoYoutube
            playInline
            classNameThumbnail="w-full"
            videoId={config.videoId}
            thumbnail="/images/pds-video-thumbnail.jpg"
            thumbnailAlt={`Video about FA - ${slug}`}
          />
        </div>
      </Section>

      <Section classNameInner="!max-w-4xl mx-auto">
        <h2 className="mb-8">
          It’s Time To Own Your Confidence, Overcome Trauma, and Find Relationship Harmony
        </h2>

        <p className="tracking-33 mb-8">
          <strong>THIS IS THE COURSE &amp; TOOLS WILL TRANSFORM EVERYTHING!</strong>
        </p>

        <p className="mb-8">
          Our <strong>Fearful Avoidant 7-Day Transformation Course</strong> gives you the
          personalized roadmap and revolutionary, practical tools (only available at our school) to
          break unhealthy patterns, build deeper connections, and thrive in emotionally strong
          relationships while maintaining your independence and freedom!
        </p>

        <p className="mb-8">
          It’s part of our BONUS offer: a <strong>30% discount on our All-Access Pass</strong>; our
          comprehensive membership that gives you everything we offer at our school, including
          courses, live webinars and Q&A sessions, study groups, and access to our online community.
        </p>

        <Link href={ctaUrl}>
          <Button label="TAKE CHARGE OF YOUR GROWTH" />
        </Link>
      </Section>

      <Section
        className="bg-woman-using-laptop min-h-52 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-screen-xl !m-0 lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-woman-using-laptop-mobile lg:hidden" />

        <div className="relative text-left p-4 z-5 lg:col-span-6">
          <h2 className="mb-4">
            Get Ready for a Major Shift—Here’s What Our Fearful Avoidant Course Will Do for You
          </h2>

          <p className="tracking-33 mb-8">
            <strong>
              EXPECT DEEP HEALING FROM PAST TRAUMA, RAPID RESULTS, &amp; PERSONAL GROWTH
            </strong>
          </p>

          <List
            classNameIcon="!text-primary mt-1"
            classNameListItems="mb-4"
            icon={faCheckCircle}
            listItems={[
              '**Get What You Need** – Whether you crave more freedom or deeper connection, it’s time to know exactly what fuels your happiness in relationships and yourself.',
              "**Crush Your Insecurities** – Say goodbye to self-doubt and fear. Learn powerful tools to overcome the self-doubt and fear that's holding you back so you can feel rock-solid and secure in your love life.",
              '**Raise Your Standards** – Stop settling for less than you deserve. Get crystal clear on what you want in a relationship and stand firm in your expectations.',
              '**Set Boundaries Like a Boss** – Tired of feeling taken advantage of? Discover how to prioritize yourself and create healthy, fulfilling relationships on your terms.',
              '**Talk So They Listen** – Master the art of communication with different personalities to eliminate misunderstandings and build aligned relationships.',
              "**Read People Fast** – Quickly identify others' attachment styles, understand their needs and boundaries, and navigate relationships with confidence and ease.",
            ]}
          />
        </div>
      </Section>

      <Section className="bg-black-secondary" classNameInner="text-white !max-w-4xl mx-auto">
        <h2 className="mb-8">Are You Ready To Truly Unlock Your Best Self & Relationships?</h2>

        <p className="mb-8">
          Our step-by-step Fearful Avoidant 7-Day Transformation Course will give you the
          breakthroughs you need to transform how you approach love. Expect to experience more
          success and confidence in your dating life or relationships to end up with the person you
          want.
        </p>

        <Link href={ctaUrl}>
          <Button label="SAY YES TO THE NEW YOU*" />
        </Link>

        <p className="text-sm mt-8">
          <strong>
            <em>
              *When you sign up for the course, you’ll become an All-Access Pass Member for $67 per
              month – a 30% discount! And because I know this course will change your life, I’ll
              give you a 100% refund if you don’t see a transformation within 7 days – no questions
              asked!
            </em>
          </strong>
        </p>
      </Section>

      <Section
        className="bg-couple-using-laptop min-h-52 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-screen-xl !m-0 lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-couple-using-laptop-mobile lg:hidden" />

        <div className="relative text-left p-4 z-5 lg:col-start-7 lg:col-span-6">
          <h2 className="mb-4">The Sooner You Start, The Sooner You’ll Experience Results</h2>

          <p className="mb-4">Ask yourself:</p>

          <List
            classNameIcon="!text-primary mt-1"
            classNameListItems="mb-4"
            icon={faCheckCircle}
            listItems={[
              '**What if the missing piece in your life has been right in front of you all along?**',
              '**How much of your energy did those painful relationship cycles take from you – and ruin your chance of a happier, transparent one?**',
              "**Isn't it draining to keep riding the endless highs and lows of relationships, never knowing what's next?**",
              "**Do you ever feel like you're carrying the weight of the world alone – wondering if you'll ever truly be able to trust someone again?**",
            ]}
          />

          <p className="mb-8">
            Imagine what your life could look like if, in another 1, 3, or even 5 years, you're
            still stuck in the same exhausting patterns.
          </p>

          <p className="mb-8">
            <strong>
              But what if, by taking action today, you could step into a completely different
              reality where you're your best self with the transparent, honest, and exciting
              relationships you want?
            </strong>
          </p>

          <Link href={ctaUrl}>
            <Button label="TRANSFORM YOUR LIFE NOW!" />
          </Link>
        </div>
      </Section>
    </Page>
  )
}
