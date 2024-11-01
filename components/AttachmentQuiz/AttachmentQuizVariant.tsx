'use client'

// core
import { useCallback, useRef, useState } from 'react'
// components
import { AttachmentQuiz } from '@/components/AttachmentQuiz/AttachmentQuiz'
import { Page } from '@/components/Page'
import { Image } from '@/components/Image'
import { Text } from '@/components/Text/Text'
import { Button } from '@/components/Button/Button'
import { Trustbar } from '@/components/Trustbar/Trustbar'
import { List } from '@/components/List'
import { LinkDefault } from '../Link'
import { Video } from '../Video/Video'
import { TAttachmentQuizVariant } from '@/app/(custom-layouts)/(no-nav)/quiz/(variants)/config'
import { SplitTestContext } from '@/utils/contexts'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight, faCheckSquare } from '@awesome.me/kit-545b942488/icons/classic/solid'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
// styles
import './style.css'

interface IQuizVariantProps {
  page_name: Pages
  config: TAttachmentQuizVariant
}

export const AttachmentQuizVariant = ({ page_name, config }: IQuizVariantProps) => {
  // ================= State =======================
  const [viewQuiz, setViewQuiz] = useState(false)

  // ================= Refs =======================
  const [watchedVideos, setWatchedVideos] = useState(new Set<string>())
  const quizSectionRef = useRef<HTMLDivElement>(null)

  // ================== Events =====================
  const onVideoStarted = (type: string) => {
    if (!watchedVideos.has(type)) {
      Mixpanel.track.VideoStarted({
        video_type: `${type} - ${page_name}`,
        page_name: page_name,
      })
    }

    setWatchedVideos(new Set<string>([...watchedVideos, type]))
  }

  const onStartQuiz = useCallback(() => {
    if (!viewQuiz) {
      Mixpanel.track.QuizStarted({
        quiz_name: page_name,
      })
      setViewQuiz((prev) => !prev)
    }
    quizSectionRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [page_name, viewQuiz])

  return (
    <Page className="w-full" page_name={page_name}>
      <div className="bg-attachment-quiz-variant w-full">
        <div className="max-w-4xl flex flex-col justify-center items-center text-center mx-auto px-4 pt-16 py-2">
          <Image alt="PDS Logo" height={80} src="logo-footer.svg" width={80} />

          <Text.Paragraph
            className="text-white mt-2 lg:mt-4"
            content="The Personal Development School's"
          />

          <Text.Heading
            className="text-white md:text-lg"
            content="ATTACHMENT STYLE QUIZ"
            size={4}
          />

          <Text.Paragraph className="text-white font-bold mb-8" content="by Thais Gibson" />

          <Text.Heading
            className="text-white mt-4 lg:!leading-[110%]"
            content={config.BANNER.heading}
            size={1}
          />

          <Text.Heading
            className="italic text-primary-light mt-4 md:!text-2xl"
            content={config.BANNER.subheading}
          />

          <TakeQuizCTA onStartQuiz={onStartQuiz} />
        </div>
      </div>

      <div className="p-6 lg:pt-16">
        <div className="max-w-3xl text-center mx-auto">
          <h2 className="mb-4">Once I Learned This, It Changed My Relationships For Life...</h2>
        </div>

        <Video.Large
          className="mx-auto shadow-centered max-w-3xl"
          srcUrl="https://storage.googleapis.com/pds_videos/Mel_Robbins_Podcast.mp4"
          thumbnailUrl="AttachmentQuiz/mel-robbins.jpg"
          thumbnailAlt="IAT Video Thumbnail"
          onPlay={() => onVideoStarted('YouTube')}
        />

        <p className="mt-4 text-center">
          *As seen as, and taken from the The Mel Robbins Podcast :
          <LinkDefault
            className="text-primary"
            label=" YouTube Link"
            target="_blank"
            url="https://m.youtube.com/watch?v=GIkspM20BeY&pp=ygURVGhhaXMgbWVsIHJvYmJpbnM%3D"
          />
        </p>
      </div>

      {/* Quiz Section */}
      <div ref={quizSectionRef} className="w-full px-4">
        {viewQuiz && (
          <div className="w-full flex justify-center mx-auto py-16">
            <SplitTestContext.Provider
              value={{
                key: 'GM-1226',
                experimentName: 'Mel Robbins Content (Quiz B)',
                variantUrl: '/quiz/b/',
              }}>
              <AttachmentQuiz
                newQuiz
                className="!max-w-5xl"
                quizName="Attachment Style Quiz"
                quiz_traffic_source="paid"
                showStartButton={false}
              />
            </SplitTestContext.Provider>
          </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="w-full flex flex-col justify-between items-center bg-primary my-6 p-16 md:flex-row">
        {config.STATS.map((stat, idx) => (
          <div key={idx} className="flex-1 flex flex-col text-center p-4">
            <FontAwesomeIcon className="text-white mb-4" icon={stat.icon} size="3x" />

            <Text.Heading className="text-white" content={stat.value} size={1} />

            <Text.Paragraph
              className="text-white font-medium tracking-wider mt-4 md:text-lg"
              content={stat.label}
            />
          </div>
        ))}
      </div>

      {/* Featured On Section */}
      <div className="max-w-5xl flex flex-col justify-center items-center mx-auto my-16">
        <Image
          alt="Thais Gibson Portrait"
          height="auto"
          src="IATPage/thais-portrait.png"
          width="100%"
        />

        <Text.Paragraph
          className="text-xl font-bold underline text-center my-2"
          content="Thais Gibson"
        />

        <Text.Paragraph
          className="text-center"
          content="Founder of The Personal Development School and Gibson Integrated Attachment Theory™"
        />

        <div className="w-[100%] flex flex-col flex-1 overflow-hidden">
          <Text.Heading className="text-center my-8" content="Featured On:" size={1} />

          <div className="relative flex whitespace-nowrap overflow-x-hidden">
            <Trustbar.Slider brandLogosList={config.FEATURED} classNameImage="grayscale" />
          </div>
        </div>
      </div>

      {/* Quiz For */}
      <div className="w-full bg-teal-light px-4 py-16">
        <div className="max-w-3xl bg-white rounded-10 shadow mx-auto p-8">
          <Text.Heading className="text-center mb-8" content="Who Is This Quiz For?" size={1} />

          <Text.Paragraph className="mb-4 md:text-lg" content="This quiz is for you if you're:" />

          <List
            className="md:text-lg"
            classNameIcon="text-primary-light mr-2 md:text-lg"
            classNameListItems="flex mb-4"
            icon={faCheckSquare}
            listItems={config.QUIZ_FOR}
          />
        </div>
      </div>

      {/* CTA Banner 1 */}
      <div className="w-full bg-black px-4 py-16">
        <div className="max-w-3xl flex flex-col items-center mx-auto">
          <Text.Heading
            className="text-center text-white mb-4"
            content={config.CTA_BANNER_1.heading}
            size={1}
          />

          <Text.Heading
            className="italic text-center text-primary-light mb-4 lg:!text-2xl"
            content={config.CTA_BANNER_1.subheading}
          />

          <TakeQuizCTA onStartQuiz={onStartQuiz} />
        </div>
      </div>

      {/* Types of Attachment Styles */}
      <div className="max-w-5xl mx-auto my-16 px-4">
        <Text.Heading
          className="text-center mb-8"
          content="The Four Types Of Attachment Styles"
          size={1}
        />

        <div className="grid grid-cols-1 gap-8 md:!grid-cols-2">
          {config.TYPES.map((type, idx) => (
            <div key={idx}>
              <div className="flex items-center mb-4">
                <FontAwesomeIcon className="text-primary-light mr-1" icon={type.icon} />

                <Text.Paragraph
                  className="font-medium tracking-widest md:text-lg"
                  content={type.title}
                />
              </div>

              <Text.Paragraph className="md:text-lg" content={type.content} />
            </div>
          ))}
        </div>
      </div>

      {/* Key To Success */}
      <div className="w-full bg-teal-light px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <Text.Heading
            className="text-center mb-6"
            content={config.KEY_TO_SUCCESS.title}
            size={1}
          />

          <Text.Paragraph useMD className="md:text-lg" content={config.KEY_TO_SUCCESS.content} />
        </div>
      </div>

      {/* CTA Banner 2 */}
      <div className="w-full bg-black px-4 py-16">
        <div className="max-w-3xl flex flex-col items-center mx-auto">
          <Text.Heading
            className="inline-block text-center text-white mb-4"
            content="Finally Answer The Question:"
            size={1}
          />

          <Text.Heading
            className="inline-block text-center italic text-primary-light mb-4"
            content={config.CTA_BANNER_2.heading}
            size={1}
          />

          <Text.Paragraph
            className="text-white mb-4 uppercase font-bold text-center lg:text-xl"
            content={config.CTA_BANNER_2.subheading}
          />

          <TakeQuizCTA onStartQuiz={onStartQuiz} />
        </div>
      </div>

      {/* BENEFITS */}
      <div className="w-full bg-primary-light px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Text.Heading className="text-center mb-8" content={config.BENEFITS.heading} size={1} />

          {config.BENEFITS.items.map((benefit, idx) => (
            <div key={idx} className="rounded-10 bg-white shadow mb-8 p-8">
              <div className="flex mb-4">
                <FontAwesomeIcon
                  className="inline-block text-primary-light mr-2 mt-[2px] md:mt-[6px]"
                  icon={faCheckSquare}
                />

                <Text.Paragraph
                  className="inline-block font-bold tracking-0.325 md:text-lg"
                  content={benefit.title}
                />
              </div>

              <Text.Paragraph className="md:text-lg" content={benefit.content} />
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="w-full bg-teal-light px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Text.Heading
            className="text-center mb-8"
            content={config.TESTIMONIALS.heading}
            size={1}
          />

          {config.TESTIMONIALS.items.map((testimonial, idx) => (
            <div
              key={idx}
              className="flex flex-col bg-white rounded-10 shadow mb-8 p-8 md:flex-row">
              <div className="flex flex-col items-center px-8">
                <div className="w-[150px] h-[150px] flex items-center justify-center rounded-full overflow-hidden mb-2">
                  <Image
                    alt={`${testimonial.author_name}_headshot`}
                    height={150}
                    src={`${testimonial.author_avatar}`}
                    width={150}
                  />
                </div>

                <Text.Paragraph
                  className="font-medium text-primary mb-4 md:text-lg"
                  content={testimonial.author_name}
                />
              </div>

              <div className="flex flex-col">
                <Text.Paragraph className="font-medium mb-4" content={testimonial.heading} />

                <Text.Paragraph content={testimonial.content} />
              </div>
            </div>
          ))}

          <div className="flex items-center justify-center flex-col">
            <Text.Heading className="mt-4 text-center" content={config.BENEFITS.teaser} size={3} />

            <TakeQuizCTA onStartQuiz={onStartQuiz} />
          </div>
        </div>
      </div>

      {/* Rollercoaster Section */}
      <div className="max-w-4xl mx-auto px-4 my-16">
        <Text.Heading
          className="text-center mb-8"
          content={config.ROLLERCOASTER.heading}
          size={1}
        />

        <Text.Paragraph useMD className="md:text-lg" content={config.ROLLERCOASTER.aboveTheList} />

        <List
          className="my-8"
          classNameIcon="text-primary"
          classNameListItems="mb-4 md:text-lg"
          icon={faAngleDoubleRight}
          listItems={config.ROLLERCOASTER.list}
        />

        <Text.Paragraph useMD className="md:text-lg" content={config.ROLLERCOASTER.belowTheList} />

        <div className="flex items-center justify-center">
          <Image
            alt="rollercoster fun ride"
            height={400}
            src="MarketingQuizVariantPage/rollercoaster.jpg"
            width={400}
          />
        </div>
      </div>

      {/* Endnote */}
      <div className="w-full bg-black py-16">
        <div className="max-w-3xl flex flex-col items-center text-center mx-auto px-4">
          <Text.Paragraph
            className="text-white mb-4 md:text-lg"
            content="GET A FREE RELATIONSHIP REPORT:"
          />

          <Text.Heading
            className="inline italic text-primary-light lg:hidden"
            content="Uncover The Secret To Lasting Love: "
          />

          <Text.Heading
            className="hidden italic text-primary-light lg:inline"
            content="Uncover The Secret To Lasting Love: "
            size={1}
          />

          <Text.Heading className="inline text-white lg:hidden" content={config.BENEFITS.teaser} />

          <Text.Heading
            className="hidden text-white lg:inline"
            content={config.BENEFITS.teaser}
            size={1}
          />

          <TakeQuizCTA onStartQuiz={onStartQuiz} />
        </div>
      </div>
    </Page>
  )
}

interface IQuizCTAProps {
  onStartQuiz: () => void
  showTeaser?: boolean
}

const TakeQuizCTA = ({ onStartQuiz }: IQuizCTAProps) => {
  return (
    <Button
      className="block bg-gradient-to-r from-primary-old to-primary-light text-black border-none tracking-0.325 my-10 hover:text-white md:text-xl md:!px-10 md:!py-5"
      label="TAKE THE FREE QUIZ!"
      onClick={onStartQuiz}
    />
  )
}
