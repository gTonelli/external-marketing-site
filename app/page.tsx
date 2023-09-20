import { Button, Page } from '@/components'
import { AttachmentQuiz } from '@/components/AttachmentQuiz/AttachmentQuiz'
import Image from 'next/image'

export default function Home() {
  return (
    <Page page_name="Attachment Style Quiz">
      <section className="text-center">
        <h1>What's Your Attachment Style?</h1>

        <p>TAKE OUR FREE QUIZ NOW TO FIND OUT!</p>
      </section>

      <AttachmentQuiz quiz_traffic_source="organic" />

      <div className="max-w-lg mx-auto lg:max-w-5xl lg:grid lg:gap-8 lg:grid-cols-12">
        <Image
          alt=""
          className="w-full mt-10 
                md:w-1/2 
                lg:w-56 lg:mt-0 lg:col-span-3"
          src="img/attachment-style-ap.svg"
          width={224}
          height={180}
        />

        <div className="lg:col-span-9 lg:col-start-4">
          <h2>Anxious Preoccupied</h2>

          <p>
            Relationships can often make you feel anxious, unsafe or insecure because you likely
            have a subconscious fear of abandonment.
          </p>

          <p>
            As a result, you seek more closeness in your relationships, and can feel afraid if you
            sense a loved one is pulling away.
          </p>
        </div>

        <Image
          alt=""
          className="w-full mt-10 
                md:w-1/2 
                lg:w-56 lg:mt-0 lg:col-span-3 lg:col-start-10 lg:row-start-2"
          src="img/attachment-style-fa.svg"
          width={224}
          height={180}
        />

        <div className="lg:col-span-9 lg:col-start-1 lg:row-start-2">
          <h2>Fearful Avoidant</h2>

          <p>
            Relationships can feel chaotic, confusing and overwhelming because you swing between
            being avoidant and anxious.
          </p>

          <p>
            Depending on the relationship, you can shift between being "hot and cold," often feeling
            confused about your feelings.
          </p>
        </div>

        <Image
          alt=""
          className="w-full mt-10 
                md:w-1/2 
                lg:w-56 lg:mt-0 lg:col-span-3  lg:row-start-3"
          src="img/attachment-style-da.svg"
          width={224}
          height={180}
        />

        <div className="lg:col-span-9 lg:col-start-4  lg:row-start-3">
          <h2>Dismissive Avoidant</h2>

          <p>
            Intense emotions can feel overwhelming and can cause you to pull away from others. You
            may find yourself withdrawing from arguments or triggering situations.
          </p>

          <p>
            This need for independence can cause challenges in your relationships and inner conflict
            for you, because deep down, you want to connect with others.
          </p>
        </div>

        <Image
          alt=""
          className="w-full mt-10 
                md:w-1/2 
                lg:w-56 lg:mt-0 lg:col-span-3 lg:col-start-10  lg:row-start-4"
          src="img/attachment-style-sa.svg"
          width={224}
          height={180}
        />

        <div className="lg:col-span-9 lg:col-start-1  lg:row-start-4">
          <h2>Securely Attached</h2>

          <p>
            You often feel comfortable and at ease in relationships. You’re also good at
            communicating your needs and feelings, and feel open to vulnerability in your
            relationships.
          </p>

          <p>
            However, sometimes you can experience difficulty when relating to those who aren’t as
            secure in relationships.
          </p>
        </div>
      </div>
    </Page>
  )
}
