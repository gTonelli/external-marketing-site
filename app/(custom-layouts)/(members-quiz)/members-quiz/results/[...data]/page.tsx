'use client'
// core
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
// components
import { IQuizCardProps, IQuizResults } from '@/components/QuizCard'
// config
import { CONFIG } from '../../config'
// libraries
import cx from 'classnames'
import * as yup from 'yup'
import { orderBy } from 'lodash'
import { EmailShareButton, FacebookShareButton, TwitterShareButton } from 'react-share'
// modules
// utils
import { getInitials } from '@/utils/functions'

// styles
import '../../styles.css'
import Image from 'next/image'
import { Text } from '@/components/Text/Text'
import { Icon } from '@/components/Icon'
import { IDefaultProps } from '@/components'
import { Card } from '@/components/Card/Card'
import { Video } from '@/components/Video/Video'
import { Button } from '@/components/Button/Button'
import { RegistrationForm } from '@/components/RegistrationForm'
import { TStyle } from '@/utils/types'
import { NotFound } from '@/components/NotFound'
import { Storage } from '@/modules/Storage'
import Link from 'next/link'
import { Page } from '@/components/Page'

type TStyleUnabbreviated =
  | 'Anxious Preoccupied'
  | 'Dismissive Avoidant'
  | 'Fearful Avoidant'
  | 'Secure Attachment'

export interface IChartData {
  style: TStyleUnabbreviated
  value: number
}

type TQuizResultsPageParams = [string, string, string, string, string, string]

export default function QuizResultsPage({ params }: { params: { data: TQuizResultsPageParams } }) {
  // ==================== Params ====================
  const [quizId, style, fa, da, ap, sa] = params.data

  // ==================== State ====================
  const [canViewResults, setCanViewResults] = useState<boolean>(false)
  const [shareUrl, setShareUrl] = useState('')

  const userTag = Storage.get('userTag') || ''

  // ==================== Hooks ====================
  const router = useRouter()

  const onAfterSubmit = () => {
    Storage.set('canViewResults', '1')
    setCanViewResults(true)
  }

  useEffect(() => {
    setShareUrl(window.location.origin + '/members-quiz')
    setCanViewResults(Boolean(JSON.parse(Storage.get('canViewResults') || '0')))
  }, [])

  const quiz: IQuizCardProps | undefined = CONFIG.find((i) => i.id === quizId || i.type === quizId)
  if (!quiz) return <NotFound />
  const results = quiz.results

  const {
    description,
    strengths,
    challanges,
    howWasItFormed,
    whatDoesItMean,
    wordsOfEcouragement,
    secondaryStyle,
    nextSteps,
    otherQuizzes,
    // @ts-ignore
  } = results[style]

  const sortedChartData = orderBy<IChartData>(
    [
      { style: 'Anxious Preoccupied', value: Number(ap || 0) },
      { style: 'Dismissive Avoidant', value: Number(da || 0) },
      { style: 'Fearful Avoidant', value: Number(fa || 0) },
      { style: 'Secure Attachment', value: Number(sa || 0) },
    ],
    'value',
    'desc'
  )

  // The 1st style in chart MUST always be the primary one (result in URL) - this ensures that
  const first = sortedChartData[0]

  if (style !== getInitials(first.style)) {
    const primaryStyleIndex = sortedChartData.findIndex((i) => style === getInitials(i.style))

    sortedChartData[0] = sortedChartData[primaryStyleIndex]
    sortedChartData[primaryStyleIndex] = first
  }

  // If all of them are the same
  if (
    Number(ap || 0) === 25 &&
    Number(da || 0) === 25 &&
    Number(fa || 0) === 25 &&
    Number(sa || 0) === 25
  ) {
    //   if (sa === ap && sa === fa && sa === da && da === fa && da === ap && ap === fa) {
    const second = sortedChartData[1]
    const secureStyleIndex = sortedChartData.findIndex((i) => i.style === 'Secure Attachment')

    sortedChartData[1] = sortedChartData[secureStyleIndex]
    sortedChartData[secureStyleIndex] = second
  }

  const secondStyle = sortedChartData[1].style

  const secondStyleInitials = (str: string) => getInitials(str) as keyof IQuizResults

  const isAllZeros = sortedChartData.filter((i) => i.value === 0).length === sortedChartData.length

  const hasHundredPercent = Boolean(sortedChartData.filter((i) => i.value === 100).length)

  return canViewResults ? (
    <Page page_name="Members Quiz Results" className="w-full flex flex-col overflow-hidden">
      {/* INTRO */}
      <section
        className={cx(
          'relative z-0s flex-center flex-col text-white pt-8 mb-28 lg:mb-32',
          quiz.type === 'romantic' && 'bg-pink-dark',
          quiz.type === 'family' && 'bg-teal-dark',
          quiz.type === 'friends' && 'bg-orange-dark'
        )}>
        <Image
          alt="A styled vector wave"
          className="bg-mobile absolute inset-0 top-24 xxs:top-14 xs:-top-0 z-5"
          src={quiz.introBgMobile}
          width={425}
          height={371}
          tabIndex={-1}
        />
        <Image
          alt="A styled vector wave"
          className="bg-desktop absolute inset-0 z-5 lg:top-0 xl:-top-6 laptop:-top-20 2xl:-top-32 3xl:-top-52 4k:-top-88"
          src={quiz.introBgDesktop}
          width={1024}
          height={251}
          tabIndex={-1}
          sizes="100vw"
        />

        {/* SHARE ICONS */}
        <div className="relative z-10 flex flex-col space-y-3 mb-7 lg:mb-0 lg:absolute lg:top-10 lg:right-10">
          <Text content="Share this quiz with your friends and family!" />
          <div className="flex-center space-x-9 lg:space-x-4">
            <EmailShareButton
              url={shareUrl}
              title="Share this quiz with your friends and family!"
              subject="Find Out What Your Attachment Style is Now!"
              body={
                'Get to know yourself and how you interact with others by taking our new attachment style quiz! Each attachment style comes with different characteristics that impact your relationships with friends, family and romantic partners. \n\nTo discover your attachment style in each of these areas visit our Attachment Style Quiz:\n\n'
              }>
              <Icon type="solid" name="envelope" />
            </EmailShareButton>

            <FacebookShareButton
              url={shareUrl}
              title="Share this quiz with your friends and family!">
              <Icon type="brands" name="facebook" />
            </FacebookShareButton>

            <TwitterShareButton url={shareUrl} title="Try our New Attachment Style Quiz!">
              <Icon type="brands" name="twitter" />
            </TwitterShareButton>
          </div>
        </div>

        <div className="relative z-10 flex flex-col mb-6">
          <div className="w-16 h-16 bg-white flex justify-center text-center items-center rounded-full">
            {quiz.color === 'pink' && (
              <Icon name="heart" type="light" className="w-full text-pink text-4xl" />
            )}
            {quiz.color === 'teal' && (
              <Icon name="house" type="light" className="w-full text-teal text-4xl" />
            )}
            {quiz.color === 'orange' && (
              <Icon name="people" type="light" className="w-full text-orange text-4xl" />
            )}
          </div>
        </div>

        <div className="relative z-10">
          <Text.Heading
            className="font-effra mb-5 lg:mb-2 text-center px-4 lg:px-0"
            size={4}
            spacing="tracking-0.325"
            content="YOUR PRIMARY ATTACHMENT STYLE IS:"
          />
        </div>

        <div className="relative z-10">
          <Text.Heading size={2} content={description.title} />
        </div>
      </section>

      {/* DESCRIPTION */}
      <section
        className="w-full flex flex-col px-page-xxs space-y-12 mb-10 mt-4 relative z-0
            lg:flex-row lg:space-y-0 lg:space-x-11 lg:px-page-md lg:mb-24 lg:items-center
            xl:px-page">
        <AttachmentStylesChart className="xl:w-1/2 xl:self-center" sortedValues={sortedChartData} />

        <div className="flex flex-1 flex-col">
          <Text.Paragraph content={description.content} />
        </div>
      </section>

      {/* STRENGTHS + CHALLANGES */}
      <section
        className="w-full flex flex-col items-center justify-center px-page-xxs space-y-5 mb-10
            xl:flex-row xl:items-stretch  xl:space-y-0 lg:px-page-md lg:mb-16
            xl:space-x-24 xl:justify-center xl:px-page">
        {/* STRENGTHS */}
        <StrengthsAndChallangesCard
          type="strengths"
          items={strengths}
          colorLight={quiz.colorLight}
          colorSecondary={quiz.colorSecondary}
        />

        {/* CHALLANGES */}
        <StrengthsAndChallangesCard
          type="challenges"
          items={challanges}
          colorLight={quiz.colorLight}
          colorSecondary={quiz.colorSecondary}
        />
      </section>

      {/* HOW WAS IT FORMED */}
      <section
        className="relative z-10 w-full flex flex-col px-page-xxs
            lg:px-page-md
            xl:px-page">
        <div>
          <Text.Heading
            className="text-center mb-5 lg:px-40"
            size={2}
            content={howWasItFormed.title}
          />
        </div>

        <div
          className="flex flex-col space-y-5 
            lg:flex-row lg:space-y-0 lg:space-x-11">
          <div className="flex flex-col justify-center lg:w-1/2">
            <Text.Paragraph content={howWasItFormed.content} />
          </div>

          <div className="w-full lg:w-1/2 3xl:w-1/3">
            <Image
              alt="A vector image of a man, woman and child standing in their living room."
              className="w-full"
              src={howWasItFormed.assetUrl}
              width={373}
              height={309}
            />
          </div>
        </div>
      </section>

      <div className="relative z-5">
        {quiz.type === 'friends' ? (
          <Image
            alt="A styled vector wave"
            className="bg-desktop w-full absolute inset-0 lg:-top-32 xl:-top-40 2xl:-top-68"
            src="/images/MembersQuiz/quiz-results-bg-blue.svg"
            width={1024}
            height={322}
            tabIndex={-1}
            sizes="100vw"
          />
        ) : (
          <Image
            alt="A styled vector wave"
            className="bg-desktop w-full absolute inset-0 lg:-top-32 xl:-top-40 2xl:-top-68"
            src="/images/MembersQuiz/quiz-results-bg.svg"
            width={1024}
            height={322}
            tabIndex={-1}
            sizes="100vw"
          />
        )}
      </div>

      {/* HOW DO THESE CHARACTERISTICS PLAY */}
      <section
        className={cx(
          'w-full flex flex-col px-page-xxs relative z-10 pt-10 mb-40 lg:px-page-md lg:mt-48 lg:mb-32 lg:pb-20 xl:px-page xl:mt-60 4k:mt-96',
          quiz.type === 'friends' ? 'bg-blue-light' : 'bg-primary-light'
        )}>
        <div className={cx(!whatDoesItMean.content2 && 'flex-center')}>
          <Text.Heading
            className={cx('w-full mb-6 lg:w-3/5', !whatDoesItMean.content2 && 'text-center')}
            content={whatDoesItMean.title}
          />
        </div>

        <div
          className={cx(
            'flex flex-col mb-20',
            whatDoesItMean.content2
              ? 'space-y-10 lg:flex-row lg:space-x-16 lg:space-y-0 items-start'
              : 'items-center justify-center'
          )}>
          <div
            className={cx(
              'flex flex-col lg:w-1/2',
              whatDoesItMean.content2 ? 'self-start' : 'self-center'
            )}>
            <Text.Paragraph content={whatDoesItMean.content} />
          </div>

          {whatDoesItMean.content2 && (
            <div className="flex flex-col flex-1">
              <Text.Paragraph content={whatDoesItMean.content2} />
            </div>
          )}
        </div>

        {/* ENCOURAGMENT */}
        <div
          className="w-full self-center absolute -bottom-32 
            lg:w-3/5 lg:-bottom-20
            xl:-bottom-16">
          <Card className={cx('w-full  px-6 py-10 lg:px-19 lg:py-8 lg:mx-0', quiz.colorDark)}>
            <Text.Paragraph
              className="text-center text-white tex"
              font="font-sspb"
              size={20}
              content={wordsOfEcouragement.content}
            />
          </Card>
        </div>
      </section>

      {/* 2ND ATTACHMENT STYLE GRAPH */}
      {!isAllZeros && !hasHundredPercent && (
        <section
          className="w-full flex flex-col px-page-xxs space-y-12 mb-10
            lg:flex-row lg:space-y-0 lg:space-x-11 lg:px-page-md lg:mb-24
            xl:px-page">
          <AttachmentStylesChart isSecondary sortedValues={sortedChartData} />

          <div className="flex flex-1 flex-col">
            <Text.Heading className="mb-6 lg:mb-4" content={secondaryStyle.title} />
            <Text.Paragraph content={secondaryStyle.description} />
          </div>
        </section>
      )}

      {/* 2ND ATTACHMENT STYLE GRAPH */}
      {!isAllZeros && !hasHundredPercent && (
        <section
          className="w-full flex mb-10 
             lg:px-page-md lg:mb-15
             xl:px-page">
          <div
            className={cx(
              'w-full flex flex-col  px-page-xxs py-12  lg:space-x-8 lg:px-20 lg:py-13  3xl:flex-row 3xl:px-32',
              quiz.colorLight
            )}>
            <div className="flex flex-col 3xl:w-1/3">
              <Text.Heading
                size={4}
                spacing="tracking-0.325"
                content="YOUR SECONDARY ATTACHMENT STYLE IS:"
              />

              <Text.Heading className="mb-3" content={secondStyle} />

              <Text.Paragraph
                // @ts-ignore
                className="mb-5"
                content={results[secondStyleInitials(secondStyle)].description.content}
              />
            </div>

            <div
              className="flex flex-col space-y-8 
                lg:flex-row lg:justify-center lg:space-x-8 lg:space-y-0">
              <StrengthsAndChallangesCard
                type="strengths"
                items={results[secondStyleInitials(secondStyle)].strengths}
                colorSecondary={quiz.colorSecondary}
              />

              <StrengthsAndChallangesCard
                type="challenges"
                items={results[secondStyleInitials(secondStyle)].challanges}
                colorSecondary={quiz.colorSecondary}
              />
            </div>
          </div>
        </section>
      )}

      {/* NEXT STEPS */}
      <section
        className="w-full flex flex-col px-page-xxs mb-13
            lg:self-center lg:px-page-md lg:mb-16
            xl:px-page">
        <div>
          <Text.Heading className="text-center mb-5" content={nextSteps.title} />
        </div>

        <div className="w-full  flex-center">
          <Text.Paragraph className="lg:w-2/3 lg:self-center" content={nextSteps.content} />
        </div>

        <div
          className="w-full self-center flex flex-col items-center justify-center space-y-8 mt-10 mb-10
            lg:w-3/4 lg:flex-row lg:space-y-0 lg:space-x-4">
          <div>
            <Video.Thumbnail
              url="https://university.personaldevelopmentschool.com/courses/take/the-handbook-for-a-better-life/downloads/27403655-course-workbook"
              thumbnailUrl="/course-handbook-for-a-better-life.jpg"
            />
          </div>

          <div>
            <Video.Thumbnail
              url="https://university.personaldevelopmentschool.com/courses/take/personal-needs/downloads/8813112-workbook-course-summary-worksheet"
              thumbnailUrl="/course-personal-needs.jpg"
            />
          </div>

          <div>
            {style === 'FA' && (
              <Video.Thumbnail
                url="https://university.personaldevelopmentschool.com/courses/take/reprogramming-fa/downloads/8813051-workbook-course-summary-worksheet"
                thumbnailUrl="/course-fa-to-sa.jpg"
              />
            )}
            {style === 'DA' && (
              <Video.Thumbnail
                url="https://university.personaldevelopmentschool.com/courses/take/da-reprogramming/downloads/8813046-workbook-course-summary-worksheet"
                thumbnailUrl="/course-da-to-sa.jpg"
              />
            )}
            {style === 'AP' && (
              <Video.Thumbnail
                url="https://university.personaldevelopmentschool.com/courses/take/aa-reprogramming/downloads/8813131-workbook-course-summary-worksheet"
                thumbnailUrl="/course-ap-to-sa.jpg"
              />
            )}
            {style === 'SA' && (
              <Video.Thumbnail
                url="https://university.personaldevelopmentschool.com/courses/take/setting-achieving-goals-using-your-subconscious-mind/downloads/19267720-course-workbook"
                thumbnailUrl="/course-setting-goals.jpg"
              />
            )}
          </div>
        </div>
      </section>

      {/* OTHER QUIZZES */}
      <section
        className="otherQuizzes relative z-0 w-full flex flex-col py-12 px-page-xxs
            lg:pb-8 lg:px-page-md 
            xl:px-page xl:pt-20">
        <Image
          alt="A styled vector wave"
          className="bg-desktop w-full inset-0 -z-1"
          src="/images/MembersQuiz/quiz-results-footer-desktop-bg.svg"
          tabIndex={-1}
          width={1024}
          height={392}
          sizes="100vw"
        />
        <Image
          alt="A styled vector wave"
          className="bg-mobile inset-0 -z-1"
          src="/images/MembersQuiz/quiz-results-footer-mobile-bg.svg"
          tabIndex={-1}
          width={425}
          height={643}
        />

        <div className="w-full flex-center">
          <Text.Heading
            className="self-center text-center mb-8 w-full xl:w-3/5"
            content={otherQuizzes.title}
          />
        </div>

        <div className="w-full flex-center flex-col space-y-4">
          <Text.Paragraph
            className="self-center text-center lg:w-2/3 xl:w-1/2"
            content={otherQuizzes.content}
          />
        </div>

        <div className="w-full flex-center">
          <Link href="/members-quiz">
            <Button
              className="tracking-widest self-center font-bold rounded-full px-10 py-3 mt-5"
              label="TAKE ANOTHER QUIZ"
            />
          </Link>
        </div>
      </section>
    </Page>
  ) : (
    <Page page_name="Members Quiz Form" className="email-page">
      {/* LEFT PART - image */}
      <div className="px-10 lg:px-0 lg:w-auto flex pb-8 lg:pb-32">
        <Image
          alt="A vector image of a woman wearing headphones and working at her desk."
          src="/images/MembersQuiz/email.png"
          width={297}
          height={190}
        />
      </div>

      {/* RIGHT PART - form */}
      <Card className="relative z-10 w-full flex flex-col max-w-[550px] border-white py-4">
        <Text.Heading className="text-left" size={1} content="Results" />

        <Text.Paragraph
          className="pb-4"
          content="Fill Out the form below to view your free results!"
        />

        <RegistrationForm
          className="!text-left md:!pt-0"
          clientTag={userTag}
          userStyle={style.toLowerCase() as unknown as TStyle | undefined}
          onAfterSubmit={onAfterSubmit}
        />
      </Card>

      {/* BOTTOM BACKGROUND IMAGES */}
      <Image
        alt="A styled vector wave"
        className="w-full bg-mobile bottom-0 left-0 !z-5"
        src="/images/MembersQuiz/bg_email_mobile.png"
        width={425}
        height={114}
        tabIndex={-1}
      />
      <Image
        alt="A styled vector wave"
        className="w-full bg-desktop bottom-0 left-0"
        style={{ margin: 0 }}
        src="/images/MembersQuiz/bg_email.png"
        tabIndex={-1}
        width={1024}
        height={109}
        sizes="100vw"
      />
    </Page>
  )
}

interface IStrengthsAndChallangesCardProps {
  type: 'strengths' | 'challenges'
  items?: string[]
  colorSecondary: 'bg-teal-secondary' | 'bg-orange-secondary' | 'bg-pink-secondary'
  colorLight?: 'bg-teal-light' | 'bg-orange-light' | 'bg-pink-light'
}

const StrengthsAndChallangesCard = ({
  colorLight,
  colorSecondary,
  type,
  items = [],
}: IStrengthsAndChallangesCardProps) => (
  <div className="w-full flex lg:w-103">
    <Card
      className={cx(
        'w-full flex flex-col justify-start overflow-hidden border-none',
        colorLight || 'bg-white'
      )}>
      {/* HEADER */}
      <div className={cx('w-full flex flex-col items-center justify-center py-3', colorSecondary)}>
        <Icon
          className="text-4xl"
          type="light"
          name={type === 'challenges' ? 'dumbbell' : 'mountain'}
        />

        <span className="font-effra font-bold tracking-0.325">
          {type === 'challenges' ? 'CHALLENGES' : 'STRENGTHS'}
        </span>
      </div>

      {/* CONTENT */}
      <div className="flex flex-col p-13">
        {items.map((i, ii) => (
          <span key={`strength_${ii}`} className="block font-bold mb-3">
            {i}
          </span>
        ))}
      </div>
    </Card>
  </div>
)

interface IAttachmentStylesChartProps extends IDefaultProps {
  isSecondary?: boolean
  title?: string
  sortedValues: IChartData[]
  opacity?: string
}

export const AttachmentStylesChart = ({
  className,
  isSecondary,
  title = 'YOUR ATTACHMENT STYLE BREAKDOWN',
  sortedValues = [],
}: IAttachmentStylesChartProps) => {
  return (
    <div
      className={cx(
        'h-fit flex flex-1 flex-col shadow-lg rounded-2xl border border-gray bg-white py-5 px-7',
        className
      )}>
      <Text.Heading
        className="font-effra font-bold mb-4"
        size={4}
        spacing="tracking-0.325"
        content={title}
      />

      {sortedValues.map((style, index) => (
        <div key={`progress_${index}_${style.style}`} className={cx('flex flex-col')}>
          <div className="flex flex-col mb-6 space-y-4 lg:flex-row lg:space-y-0">
            <span className={cx('w-1/2', isSecondary && index === 1 && 'font-bold')}>
              {style.style}
            </span>

            {/* PROGRESSBAR */}
            <div className="w-full flex flex-1">
              <div className="progressbar">
                <div
                  className={cx(
                    'progressbar-fill anim-progress-fill',
                    isSecondary && index !== 1 ? 'bg-primary-light' : 'bg-primary'
                  )}
                  style={{ maxWidth: `${style.value}%` }}
                />
              </div>

              {/* VALUE */}
              <span className={cx('ml-5 pr-2', isSecondary && index === 1 && 'font-bold')}>
                {style.value} %
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
