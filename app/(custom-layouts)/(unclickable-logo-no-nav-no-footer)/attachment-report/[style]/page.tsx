// core
import Image from 'next/image'
import { Metadata } from 'next'
// components
import { Link } from '@/components/Link'
import { List } from '@/components/List'
import { Page } from '@/components/Page'
import { Section } from '@/components/Section'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
// config
import { REPORT_COPY } from './config'
// utils
import { TStyle } from '@/utils/types'

export const dynamicParams = false

export function generateStaticParams() {
  return [{ style: 'fa' }, { style: 'ap' }, { style: 'da' }, { style: 'sa' }]
}

export const metadata: Metadata = {
  /* TODO: General SEO meta */
  title: 'Discover & Learn About Your Attachment Style',
  description:
    'Discover, learn, and take the first steps to having your dream life by uncovering your attachment style. Get all the essential information you need!',
  robots: 'noindex',
}

export default function AttachmentReportPage({ params }: { params: { style: TStyle } }) {
  const COPY = REPORT_COPY[params.style]

  return (
    <Page page_name={`Attachment Style Report Old - ${params.style}`}>
      {/* Hero section */}
      <Section
        className="max-w-5xl mx-auto !pb-0"
        classNameInner="grid grid-cols-1 gap-4 pt-4 pb-0 lg:grid-cols-2">
        <div className="flex flex-col justify-center lg:text-left">
          <p className="font-bold text-lg tracking-33 mb-2">YOUR ATTACHMENT STYLE IS</p>

          <h1 className="text-primary lg:!text-6xl">{COPY.banner.style}</h1>
        </div>

        <div>
          <VideoThumbnail
            srcUrl={COPY.banner.video}
            thumbnailAlt="Thais explaining your attachment style"
          />
        </div>
      </Section>

      {/* Things about you which make you anxious section */}
      <Section
        className="max-w-5xl mx-auto !pb-0"
        classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-left mb-4 md:order-2">
          <p className="font-bold mb-4">{COPY.copy1.header}</p>

          <List
            iconName="circle"
            iconSize="2xs"
            className="mb-8"
            classNameIcon="mt-2"
            classNameListItems="mb-2"
            listItems={COPY.copy1.list}
          />

          <p className="font-bold mb-4">{COPY.copy2.header}</p>

          <List
            iconName="circle"
            iconSize="2xs"
            classNameIcon="mt-2"
            classNameListItems="mb-2"
            listItems={COPY.copy2.list}
          />
        </div>

        <div className="flex text-left justify-center lg:justify-start lg:order-1">
          <Image
            src={`/images/ReportsOld/${COPY.banner.vector}`}
            alt="A vector image of a couple"
            width={350}
            height={300}
          />
        </div>
      </Section>

      {/* When things don't go your way section */}
      {params.style !== 'sa' && (
        <Section className="max-w-5xl mx-auto !pb-0">
          <h2 className="text-primary mb-4">{COPY.copy3.header}</h2>

          <div className="grid grid-cols-1 mt-8 lg:grid-cols-2 lg:gap-4">
            <div className="flex flex-col justify-between text-left">
              {COPY.copy3.leftCopy.map((listItem, idx) => (
                <div key={`copy_${idx}`}>
                  <p className="mb-2 font-bold">{listItem.title}</p>
                  <p className="mb-4">{listItem.copy}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col justify-between text-left">
              {COPY.copy3.rightCopy.map((listItem, idx) => (
                <div key={idx}>
                  <p className="mb-2 font-bold">{listItem.title}</p>
                  <p className="mb-4">{listItem.copy}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Things you're guilty of telling yourself section */}
      <Section className="max-w-5xl mx-auto !pb-0">
        {params.style !== 'sa' && (
          <>
            <h2 className="text-primary mb-4">{COPY.copy4.header}</h2>

            <div className={`grid grid-cols-2 gap-4 my-8 lg:grid-cols-${COPY.copy4.list.length}`}>
              {COPY.copy4.list.map((listItem, idx) => (
                <div
                  key={idx}
                  className="flex justify-center items-center font-bold bg-teal-light rounded-3xl p-8">
                  {listItem}
                </div>
              ))}
            </div>
          </>
        )}

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="text-left mb-4">
            <p className="font-bold mb-4">{COPY.copy5.leftCopy.header}</p>

            <List
              iconName="heart"
              iconSize="xs"
              className="mb-8"
              classNameIcon="mt-2"
              classNameListItems="mb-2"
              listItems={COPY.copy5.leftCopy.list}
            />
          </div>

          <div className="text-left mb-4">
            <p className="font-bold mb-4">{COPY.copy5.rightCopy.header}</p>

            <List
              iconName="circle"
              iconSize="2xs"
              classNameIcon="mt-2"
              classNameListItems="mb-2"
              listItems={COPY.copy5.rightCopy.list}
            />
          </div>
        </div>
      </Section>

      {/* Things to work on section */}
      <Section
        className="bg-primary-light"
        classNameInner="max-w-5xl grid grid-cols-1 gap-4 mx-auto lg:grid-cols-2">
        <div className="text-left mb-4">
          <p className="font-bold mb-4">{COPY.copy6.header}</p>

          <List
            iconName="circle"
            iconSize="2xs"
            className="mb-8"
            classNameIcon="mt-2"
            classNameListItems="mb-2"
            listItems={COPY.copy6.list}
          />

          {params.style === 'sa' && (
            <p className="text-left mb-4">
              When you uncover your secondary attachment style, your triggers will make a lot more
              sense to you.
              <br />
              <br />
              <i>
                * Even though you might be securely attached, you can also have a secondary
                attachment style, which can be: Anxious Preoccupied, Dismissive Avoidant, or Fearful
                Avoidant.
              </i>
              <br />
              <br />
              <i>
                These attachment styles come with a set of unhealed wounds and can surface in your
                behaviors when you’re put in situations that trigger you. They are often the reason
                you might feel anxious or insecure in your relationships sometimes.
              </i>
            </p>
          )}

          <p className="font-bold mb-4">{COPY.copy7.header}</p>

          <List
            iconName="circle"
            iconSize="2xs"
            classNameIcon="mt-2"
            classNameListItems="mb-2"
            listItems={COPY.copy7.list}
          />
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/ReportsOld/couple-vector.svg"
            alt="A vector of a couple"
            width={270}
            height={700}
          />
        </div>
      </Section>

      {/* Possible to change section */}
      <Section className="max-w-5xl mx-auto">
        <h2 className="text-primary mb-8">{COPY.copy8.header}</h2>

        <div className="grid grid-cols-1 gap-4 items-center mb-8 lg:grid-cols-2">
          <div>
            <Image
              src="/images/ReportsOld/pds-platform-1.jpg"
              alt="PDS is available across multiple devices"
              width={626}
              height={288}
            />
          </div>

          <div className="text-left">
            <p className="mb-4">{COPY.copy8.p1}</p>

            <p>{COPY.copy8.p2}</p>
          </div>
        </div>

        <p className="max-w-2xl font-bold mb-8 mx-auto">{COPY.copy8.p3}</p>

        <div className="rounded-3xl border-2 border-blue-lightest my-8">
          <div className="bg-blue-lightest rounded-t-3xl p-12">
            Using the scientifically proven techniques I teach in this program, I’ve helped over
            20,000 students break the same relationship patterns that you have and:
          </div>

          <div className="flex flex-col justify-center items-center gap-4 p-12 lg:flex-row">
            <div className="flex-1 flex justify-center">
              <Image
                src="/images/ReportsOld/heart-o-meter.jpg"
                alt="A vector of a heart-o-meter"
                width={285}
                height={150}
              />
            </div>

            <div className="flex-1 text-left">
              <p className="mb-4">
                Experience a{' '}
                <span className="font-bold">50% improvement in their relationship</span> (if they
                were in a relationship during the program).
              </p>

              <p>
                Experience <span className="font-bold">3x more success in their dating lives.</span>{' '}
                (if they were in a relationship during the program).
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center my-16">
          <Image
            src="/images/ReportsOld/pds-platform-2.jpg"
            alt="PDS courses"
            width={809}
            height={311}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          <div className="text-left">
            <p className="font-bold mb-4">{COPY.copy9.leftCopy.header}</p>

            <List
              iconName="check-circle"
              iconType="light"
              iconSize="sm"
              classNameIcon="!text-green-check mt-2"
              classNameListItems="mb-4"
              listItems={COPY.copy9.leftCopy.list}
            />
          </div>

          <div className="text-left">
            <p className="font-bold mb-4">{COPY.copy9.rightCopy.header}</p>

            <List
              iconName="star"
              iconSize="sm"
              classNameIcon="mt-2"
              classNameListItems="mb-4"
              listItems={COPY.copy9.rightCopy.list}
            />
          </div>
        </div>
      </Section>

      {/* Testimonial section */}
      <Section className="max-w-5xl mx-auto" classNameInner="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="text-left">
          <div className="relative rounded-tl-3xl rounded-br-3xl border-4 border-primary p-8">
            <div className="absolute w-[80%] rounded-20 -top-12 left-0 right-0 bg-gradient-to-r from-beige to-primary-light text-left mx-auto py-4 px-8">
              <h4>
                We have a 99.7% <br />
                satisfaction score!
              </h4>
            </div>

            <p className="mt-4">
              Because of the{' '}
              <span className="underline">
                <Link
                  label="incredible results"
                  url="https://university.personaldevelopmentschool.com/pages/testimonials"
                  target="_blank"
                />
              </span>{' '}
              our students are seeing as they work their way from anxious preoccupied to secure
              attachments, almost all of them agreed that they would gladly recommend us to their
              friends.
            </p>
          </div>
        </div>

        <div className="flex justify-center">
          <Image
            src="/images/ReportsOld/pds-platform-3.jpg"
            alt="PDS platform"
            width={345}
            height={216}
          />
        </div>
      </Section>

      {/* MBG and Footer */}
      <Section className="max-w-5xl mx-auto">
        <h2 className="mb-8">{COPY.footer.title}</h2>

        <div className="max-w-2xl mx-auto mb-16">
          <div className="flex flex-col justify-center items-center gap-4 mb-8 lg:flex-row">
            <div>
              <Image
                src="/images/ReportsOld/money-back.jpg"
                alt="Money back guarantee"
                width={188}
                height={157}
              />
            </div>

            <div className="flex-1">
              <p className="text-left">
                We’re so confident that this program will get you the results you’re looking for
                that we even offer a 7-day money-back guarantee. <br />
                <br />
                If you’re not loving the program, request a refund within your first week of
                starting, and we’ll give you a full refund.
              </p>
            </div>
          </div>

          <p className="text-primary font-bold tracking-33">{COPY.footer.copy}</p>
        </div>

        <Link
          className="border-2 rounded-full tracking-10 px-4 py-2 transition-colors active:shadow-md !no-underline lg:hover:text-white lg:hover:shadow-md bg-primary border-primary text-white active:bg-opacity-50 lg:hover:bg-opacity-50 cursor-pointer"
          label="TRANSFORM MY LIFE"
          url={COPY.footer.ctaLink}
        />
      </Section>

      <Image
        className="w-screen"
        src={`/images/ReportsOld/${COPY.footer.image.name}`}
        alt={COPY.footer.image.altText}
        width={1440}
        height={960}
      />
    </Page>
  )
}
