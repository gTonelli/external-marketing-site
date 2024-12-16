import Image from 'next/image'
import { Section } from './Section'

export const ThaisIntro = () => {
  return (
    <Section classNameInner="lg:grid lg:grid-cols-12 lg:gap-24 lg:items-center">
      <div className="text-left lg:col-span-7">
        <h2 className="mb-8">Hi! I’m Thais.</h2>

        <p className="mb-4">
          <strong>
            I’m the co-founder of The Personal Development School, best-selling author, host of The
            Thais Gibson Podcast, Ph.D. recipient,
          </strong>{' '}
          and <strong>leader in the personal development field</strong> with an audience of{' '}
          <strong>over 500,000 followers across social media.</strong>
        </p>

        <p className="mb-4">
          After completing my Ph.D. and over 13 different certifications in a variety of
          disciplines, such as Cognitive Behavioral Therapy, Hypnosis, Somatic Experiencing, and
          more – I ran an extremely busy client-based practice for the better part of a decade.
        </p>

        <p className="mb-4">
          The ever-growing waitlist of clients made me realize that people of all ages, backgrounds,
          and cultures needed a more accessible and affordable way to overcome lifelong emotional
          challenges and heal themselves. Hence,{' '}
          <strong>The Personal Development School was born.</strong>
        </p>

        <p className="mb-4">
          <strong>You’ll learn directly from me</strong> via self-paced courses, weekly webinars,
          and Q&As as I guide you to utilize our proprietary and game-changing healing method to
          help you transform!
        </p>

        <p className="mb-4">
          Since its launch, coupled with my years of research and client experience, I have become a{' '}
          <strong>leading authority on healing attachment trauma</strong> and have built a thriving
          membership and online community, including over{' '}
          <strong>
            45,000 members in 120+ countries worldwide, more than 50,000,000 views on YouTube and
            70,000+ course enrollments.
          </strong>
        </p>

        <p>
          So, I would like to welcome you to <strong>The Personal Development School!</strong>
        </p>
      </div>

      <Image
        alt="a headshot of Thais Gibson"
        className="w-full rounded-full max-w-106 lg:max-w-none lg:col-span-5 lg:p-4"
        width={285}
        height={285}
        src="/images/thais_headshot.png"
      />
    </Section>
  )
}
