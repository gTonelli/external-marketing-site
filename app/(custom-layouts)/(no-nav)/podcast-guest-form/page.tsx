// core
import { Metadata } from 'next'
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { PodcastGuestForm } from './PodcastGuestForm'

export const metadata: Metadata = {
  title: 'The Attachment Style Quiz',
  description: 'Take the leading Attachment Style Quiz by Thais Gibson for Free!',
  robots: 'noindex',
}

export default function PodcastGuestFormPage() {
  return (
    <Page page_name="Podcast Guest Form">
      <Section className="max-w-5xl mx-auto" classNameInner="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <div className="text-left">
          <h1 className="mb-4">Podcast Guest Preparation Form</h1>

          <p className="mb-4">
            We’re excited to have you on our next podcast! Please fill out this form to help us
            prepare and make the recording smooth and engaging. Your input ensures we ask the right
            questions and highlight your expertise. Thank you for your time and cooperation!
          </p>

          <Image
            className="rounded-2xl"
            alt="Thais Gibson"
            src="/images/RoyalRumblePage/thais-bg-bottom-mobile.png"
            width={1184}
            height={957}
          />
        </div>

        <div>
          <PodcastGuestForm />
        </div>
      </Section>
    </Page>
  )
}
