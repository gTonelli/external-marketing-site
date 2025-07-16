// core
import Image from 'next/image'
import { Metadata } from 'next'
import Link from 'next/link'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { List } from '@/components/List'
import { VideoYoutube } from '@/components/Video/variants/VideoYoutube'
import { Button } from '@/components/Button/Button'
import { faCheckCircle } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faLightbulbGear } from '@awesome.me/kit-545b942488/icons/classic/solid'
// library
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// config
import { FA_RELATIONSHIP_CONFIG as CONFIG } from './config'
// styles
import './style.css'

export const dynamicParams = false

interface IFARelationshipPageParams {
  params: Promise<{
    slug: 'push-pull' | 'unsafe' | 'self-connection'
  }>
}

export function generateStaticParams() {
  return [{ slug: 'push-pull' }, { slug: 'unsafe' }, { slug: 'self-connection' }]
}

export async function generateMetadata({ params }: IFARelationshipPageParams): Promise<Metadata> {
  const { slug } = await params

  return {
    title: CONFIG[slug].seoTitle,
    description: CONFIG[slug].seoDescription,
    robots: 'noindex',
  }
}

export default async function FARelationshipPage({ params }: IFARelationshipPageParams) {
  const { slug } = await params
  const config = CONFIG[slug]
  const ctaUrl = '/limited-offer/fa'

  return (
    <Page page_name={`FA Relationship - ${slug}`}>
      <Section classNameInner="!max-w-4xl mx-auto">
        <h1 className="mb-8">{config.hero.header}</h1>

        <p className="mb-8">{config.hero.subheader}</p>

        <div className="w-full bg-white rounded-2xl shadow-xl p-4 mx-auto">
          <VideoYoutube
            playInline
            classNameThumbnail="w-full"
            videoId={config.hero.videoId}
            thumbnail="/images/pds-video-thumbnail.jpg"
            thumbnailAlt={`Video about FA relationship - ${slug}`}
          />
        </div>
      </Section>

      <Section classNameInner="!max-w-4xl mx-auto">
        <h2 className="mb-8">{config.nextSteps.header}</h2>

        {config.nextSteps.copy.map((item, idx) => (
          <p key={`nextsteps_copy_${idx}`} className="mb-8">
            {item}
          </p>
        ))}

        <Link href={ctaUrl}>
          <Button label="START THE PROGRAM NOW!" />
        </Link>
      </Section>

      <Section classNameInner="flex flex-col gap-8 items-center">
        <Image
          src={'/images/FARelationship/telescope-vector.png'}
          alt="an illustration of a man looking into a telescope"
          width={375}
          height={300}
        />

        <h2 className="max-w-3xl text-primary mx-auto">
          Now That You Know Your Next Step, Here's What You Can Expect When You Start This Journey
        </h2>
      </Section>

      <Section
        className="bg-woman-arms-spread min-h-52 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-screen-xl !m-0 lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-woman-arms-spread-mobile lg:hidden" />

        <div className="relative text-left p-4 z-5 lg:col-span-6">
          <h2 className="mb-4">
            Our Program Gives You The Roadmap to Feel Safe & Secure in Your Relationship
          </h2>

          <List
            classNameIcon="!text-primary mt-1"
            classNameListItems="mb-4"
            icon={faCheckCircle}
            listItems={[
              <>
                <strong>Discover What You Really Need:</strong> Understand your triggers, needs, and
                emotional patterns to build security in your relationship.
              </>,
              <>
                <strong>Calm the Inner Chaos:</strong> Learn how to soothe fear, insecurity, and
                self-doubt that hijack your connection.
              </>,
              <>
                <strong>Break the Push-Pull Cycle:</strong> Stop shutting down to protect yourself
                or clinging when you feel unsafe.
              </>,
              <>
                <strong>See Your Partner More Clearly:</strong> Learn their attachment style so you
                can connect more deeply.
              </>,
              <>
                <strong>Balance Boundaries and Intimacy:</strong> Learn how to stay connected while
                protecting your space.
              </>,
              <>
                <strong>Communicate Without Fear:</strong> Express yourself clearly, even during
                conflict, without shutting down or lashing out.
              </>,
            ]}
          />

          <div className="w-full flex bg-black-secondary text-white rounded-xl p-4">
            <p>
              <FontAwesomeIcon className="block text-primary-light" icon={faLightbulbGear} />
            </p>

            <p className="ml-2">
              This Step-by-Step Fearful Avoidant Program & More is Waiting Inside Your All-Access
              Pass
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-black-secondary" classNameInner="text-white !max-w-4xl mx-auto">
        <h2 className="mb-8">
          Everything You Need to Feel Secure in Your Relationship In One Place
        </h2>

        <p className="mb-8">
          Sign up for our comprehensive membership, the All-Access Pass, to unlock the Fearful
          Avoidant to Securely Attached Program, the step-by-step roadmap that will enable you to
          build the secure relationship you desire.
        </p>

        <Link href={ctaUrl}>
          <Button label="SIGN UP FOR YOUR PASS" />
        </Link>
      </Section>

      <Section
        className="bg-man-drinking-coffee min-h-52 !p-0 lg:!p-4 lg:!py-24 xl:!py-28 2xl:!py-32 3xl:!py-40"
        classNameInner="relative !max-w-screen-xl !m-0 lg:!mx-auto lg:grid lg:grid-cols-12">
        <div className="bg-gradient lg:hidden" />

        <div className="bg-man-drinking-coffee-mobile lg:hidden" />

        <div className="relative text-left p-4 z-5 lg:col-start-7 lg:col-span-6">
          <h2 className="mb-4">Be Honest With Yourself...</h2>

          <List
            classNameIcon="!text-primary mt-1"
            classNameListItems="mb-4"
            icon={faCheckCircle}
            listItems={[
              'How long have you been stuck in this push-pull cycle hoping things will change?',
              'How much has this emotional rollercoaster cost you in your relationship?',
              'What would it feel like to finally trust your partner and yourself?',
            ]}
          />

          <div className="bg-white text-center rounded-xl p-4 mb-8">
            <p className="mb-4">
              <strong>Now ask:</strong>
            </p>

            <p>
              <strong>
                What if this is the turning point? What if this Program gives you the clarity you
                deserve to build security and trust in your relationship now and forever?
              </strong>
            </p>
          </div>

          <Link href={ctaUrl}>
            <Button label="START THE PROGRAM TODAY*" />
          </Link>

          <p className="mt-4">
            <em>
              *When you sign up for the Program, you’ll become an All-Access Pass Member for $67 per
              month, instead of $97 – a 30% discount for LIFE! And because I know this Program will
              change your life, I’ll give you a 100% refund if you don’t see a transformation within
              7 days – no questions asked!
            </em>
          </p>
        </div>
      </Section>
    </Page>
  )
}
