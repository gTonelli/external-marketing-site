// core
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { List } from '@/components/List'
import { Button } from '@/components/Button/Button'
import { PodcastFreebieForm } from '@/components/PodcastFreebieForm'
import { TrustbarSlider } from '@/components/Trustbar/variants/TrustbarSlider'
// style
import './style.css'
import { CarouselTestimonialThinkific } from '@/components/Carousel/variants/CarouselTestimonialThinkific'

export default function PodcastFreebiePage() {
  return (
    <Page page_name="Podcast Freebie">
      <Section className="bg-hero-mobile min-h-[44rem] z-15 lg:hidden">
        <div className="text-black text-left relative z-20 lg:col-span-7">
          <h1 className="mb-4">The Thais Gibson Podcast</h1>

          <p>
            Join Thais Gibson as she discusses life, love, relationships, and personal development
            in her all new podcast series. Episodes will explore exclusive strategies ad tools,
            personal stories, the latest trending topics, and special interviews with renowned
            guests. This podcast will empower you with the skills to have the life you always
            wanted.
          </p>
        </div>
      </Section>

      <Section
        className={`bg-hero w-full hidden min-h-80 z-10 lg:block lg:py-32 xl:py-28 2xl:py-36 3xl:py-72`}
        classNameInner="relative z-10 lg:grid lg:grid-cols-12">
        <div className="text-black text-left lg:col-span-7">
          <h1 className="mb-4">The Thais Gibson Podcast</h1>

          <p>
            Join Thais Gibson as she discusses life, love, relationships, and personal development
            in her all new podcast series. Episodes will explore exclusive strategies ad tools,
            personal stories, the latest trending topics, and special interviews with renowned
            guests. This podcast will empower you with the skills to have the life you always
            wanted.
          </p>
        </div>
      </Section>

      <Section
        className="w-full bg-primary-light"
        classNameInner="max-w-5xl flex flex-col justify-start align-center mx-auto lg:flex-row lg:justify-around">
        <div className="flex items-center mb-6 lg:mb-0">
          <Image
            src="/icons/icon-spotify.svg"
            alt="Spotify icon"
            width={56}
            height={68}
            className="mr-4"
          />

          <p className="font-bold tracking-33">SPOTIFY</p>
        </div>

        <div className="flex items-center mb-6 lg:mb-0">
          <Image
            src="/icons/icon-youtube.svg"
            alt="YouTube icon"
            width={57}
            height={51}
            className="mr-4"
          />

          <p className="font-bold tracking-33">YOUTUBE</p>
        </div>

        <div className="flex items-center mb-6 lg:mb-0">
          <Image
            src="/icons/icon-apple-podcast.svg"
            alt="Podcast icon"
            width={48}
            height={55}
            className="mr-4"
          />

          <p className="font-bold tracking-33">APPLE PODCAST</p>
        </div>

        <div className="flex items-center mb-6 lg:mb-0">
          <Image
            src="/icons/icon-google-podcast.svg"
            alt="Icon for Google podcast"
            width={60}
            height={60}
            className="mr-4"
          />

          <p className="font-bold tracking-33">GOOGLE PODCAST</p>
        </div>
      </Section>

      <Section className="max-w-5xl mx-auto" classNameInner="flex flex-col gap-4 my-8 lg:flex-row">
        <div className="flex-1 flex items-center justify-center md:justify-start">
          <Image
            src="/images/PodcastFreebie/subconscious-reprogramming.jpg"
            alt="Subconscious Reprogramming Workbook Mockup"
            width={278}
            height={309}
          />
        </div>

        <div className="flex-1 flex flex-col justify-center text-left">
          <h2 className="mb-4">Sign Up Now For Our Podcast List</h2>

          <p className="font-bold uppercase mb-4">
            Hurry, the first 500 people will get a free Workbook.
          </p>

          <p className="font-bold mb-4">Start building your dream today!</p>

          <p className="mb-4">
            Sign up to our exclusive list to receive the latest updates about Thais’ new podcasts,
            exciting discounts, giveaways, and your FREE exclusive copy of our workbook which
            includes actionable tools and techniques on subconscious reprogramming. It offers a
            sample of how we do things here at The Personal Development School.
          </p>

          <PodcastFreebieForm />
        </div>
      </Section>

      <Section className="bg-about-mobile min-h-screen z-15 lg:hidden">
        <div className="text-black text-left relative z-20 pb-96 lg:col-span-7">
          <h2 className="mb-4">Hey, I'm Thais Gibson.</h2>

          <p className="font-bold tracking-33 mb-4">HERE'S ALL ABOUT ME!</p>

          <p>
            I'm a regular girl turned best-selling author, counselor, and personal development
            leader. My journey started with wanting to uncover and change my attachment style. It
            led to a decade of self-discovery, academic training, client-based research, and the
            creation of The Personal Development School.
            <br />
            <br />
            What I've discovered throughout my journey is that people want an easy, accessible way
            to learn how to experience profound transformations in their lives. That's why I created
            this podcast: to teach you how to make the life you want with the best practices
            possible.
          </p>
        </div>
      </Section>

      <Section
        className={`bg-about w-full hidden min-h-80 z-10 lg:block lg:py-32 xl:py-28 2xl:py-36 3xl:py-44`}
        classNameInner="relative z-10 lg:grid lg:grid-cols-12">
        <div className="text-black text-left lg:col-span-7">
          <h2 className="mb-4">Hey, I'm Thais Gibson.</h2>

          <p className="font-bold tracking-33 mb-4">HERE'S ALL ABOUT ME!</p>

          <p>
            I'm a regular girl turned best-selling author, counselor, and personal development
            leader. My journey started with wanting to uncover and change my attachment style. It
            led to a decade of self-discovery, academic training, client-based research, and the
            creation of The Personal Development School.
            <br />
            <br />
            What I've discovered throughout my journey is that people want an easy, accessible way
            to learn how to experience profound transformations in their lives. That's why I created
            this podcast: to teach you how to make the life you want with the best practices
            possible.
          </p>
        </div>
      </Section>

      <CarouselTestimonialThinkific className="mt-14" />

      <Section className="max-w-full w-full" classNameInner="max-w-full">
        <TrustbarSlider />
      </Section>

      <Section className="w-full bg-blue-lightest" classNameInner="max-w-5xl mx-auto my-8">
        <h2 className="mb-16">What’s Stopping You From Having the Life You Always Wanted?</h2>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="text-left">
            <p className="font-bold mb-4">
              Here’s Why You Can Improve Your Life &amp; Relationships
            </p>

            <p className="mb-8">
              Everyone wants to improve their lives. You included.
              <br />
              <br />
              You can build your dream life with the people you want it with. And you have the power
              to do it; you just don’t know it yet. We’ll provide you with the platform to do it.
            </p>

            <p className="font-bold mb-4">Here’s How We’ll Guide You</p>

            <p className="mb-8">
              Our All-Access Pass is the comprehensive platform to achieve your personal and
              relationship goals.
              <br />
              <br />
              Our courses and programs will guide you with easy-to-master tools and
              scientific-backed strategies, while our weekly webinars, Q&As, study groups, and
              members-only community will support your journey.
            </p>

            <p className="font-bold mb-4">Here’s Why We’re Better</p>

            <p className="mb-8">
              Our unique approach goes beyond basic tools and support that disappear when life gets
              tough.
              <br />
              <br />
              We dive deep into the mind to discover what makes you tick and guide you to complete
              your goals. This perfect combination of knowledge, empowerment, and encouragement
              makes us exceptional.
            </p>

            <p className="font-bold mb-4">Here’s Why You’re Being Financially Responsible</p>

            <p>
              People used to have two options: one-on-one traditional therapy or costly
              self-development programs.
              <br />
              <br />
              Our All-Access Pass is the difference maker. It's an affordable and accessible
              platform that anyone, anywhere, can use. You’ll spend less and get more with just one
              simple pass.
            </p>
          </div>

          <div className="text-left border-2 border-green-check rounded-3xl bg-white p-8 md:p-20">
            <h3 className="text-center mb-16">What’s Included in the All-Access Pass?</h3>

            <List
              iconName="check-circle"
              iconType="regular"
              classNameIcon="!text-green-check"
              classNameListItems="items-center mb-4"
              classNameText="font-bold"
              className="mb-16"
              listItems={[
                'Unlimited Access to 65+ Courses & Programs',
                'All On-Demand, Available Anywhere, 24/7',
                'Interactive Workbooks & Engaging Exercises',
                'Weekly Live Webinars and Q&As with Thais Gibson',
                'Access to the Webinar Libary with Over 500+ Recordings',
                'Download the free PDS App from iTunes or Google Store',
                'Exclusive & Private Online Community & Facebook Groups',
                'Weekly Support Groups Hosted by IAT™ Certified Coaches',
              ]}
            />

            <Button
              label="LEARN ABOUT OUR MEMBERSHIPS"
              link="https://university.personaldevelopmentschool.com/collections"
            />
          </div>
        </div>
      </Section>
    </Page>
  )
}
