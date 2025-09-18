// core
import Link from 'next/link'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
// config
import { SEGMENTED_RESULTS_PAGE_AP_CONFIG } from './config'
// styles
import '@/styles/default-styles.css'
// utils
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
import { SocialProofMediaOutlets } from '@/components/SocialProof/SocialProofMediaOutlets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@awesome.me/kit-545b942488/icons/classic/regular'
import Image from 'next/image'

export default function SegmentedResultsPage() {
  const config = SEGMENTED_RESULTS_PAGE_AP_CONFIG

  return (
    <Page page_name={`Segmented Results Page - ap`}>
      <Section className="bg-gradient-to-b from-pink-auxiliary via-white to-white">
        <div className="bg-white rounded-20 p-4 lg:grid lg:grid-cols-2 lg:gap-6 lg:p-10 lg:items-center">
          <VideoThumbnail
            className="lg:rounded-20"
            srcUrl={''}
            thumbnailUrl="AttachmentQuizResults/thais-writing.jpg"
          />

          <div className="text-left">
            <h2 className="text-center text-primary lg:text-left">
              Why do I love so much… and still feel like it’s never enough?
            </h2>

            <p>
              If you constantly find yourself chasing, overthinking, and fearing abandonment—only to
              end up feeling like you’re “too much”—your attachment style is driving the pattern.
              Right now, you’re going to learn how to rewire those subconscious fears so you can
              finally feel calm and confident in love.
            </p>

            <ButtonCheckout label="START YOUR PERSONALIZED HEALING JOURNEY" />
          </div>
        </div>
      </Section>

      <Section classNameInner="grid gap-4 lg:grid-cols-2 lg:gap-6 lg:items-center">
        <div>
          <h2>Your Quiz Results: Anxious Preoccupied Attachment Style</h2>

          {config.sectionTwo.body.map((text, i) => (
            <p key={`section_two_body_${i}`}>{text}</p>
          ))}

          <ButtonCheckout label="VIEW MY PATH TO HEALING" />
        </div>

        <Image
          src="/images/SegmentedResultsPages/woman-frowning-with-phone.png"
          alt="A woman holding a phone with a frown on her face"
          className="w-full rounded-2xl"
          width={588}
          height={378}
        />
      </Section>

      <Section className="relative shadow-centered-2">
        <SocialProofMediaOutlets />
      </Section>

      <Section className="bg-green-7" classNameInner="!max-w-3xl">
        <h2>Why Attachment Style Matters In Your Love Life</h2>

        <p>
          Attachment styles have been studied for decades, starting with John Bowlby at Cambridge
          University. For a long time, people were told their attachment style was permanent—a
          subconscious blueprint for love they’d be stuck with forever. But with Integrated
          Attachment Theory™, everything changes. Created by Thais Gibson, IAT™ shows you that your
          attachment style isn’t stuck one way forever—you can heal it, rewire it, and create the
          love you’ve always longed for. When you do, your relationships stop feeling like a battle
          and start feeling like home.
        </p>
      </Section>

      <Section classNameInner="grid gap-4 lg:grid-cols-3">
        <h2 className="lg:col-span-3">Anxious Attachment Styles Often End Up…</h2>

        {config.sectionFour.listItems.map((item, i) => (
          <li key={`section_four_list_item_${i}`} className="flex">
            <FontAwesomeIcon icon={faLightbulb} className="pt-[5px] mr-2 text-red-2" />

            <p className="text-left">{item}</p>
          </li>
        ))}

        <ButtonCheckout
          className="lg:block lg:col-span-3 lg:w-max lg:mx-auto"
          label="Start Healing Today"
        />
      </Section>
    </Page>
  )
}
