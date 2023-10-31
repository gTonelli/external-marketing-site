'use client'

//core
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import dynamic from 'next/dynamic'
// components
import { IResultProps, TUserStyle, IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
// modules
import { useGoogleTagManager } from '@/modules/GTM'
import Mixpanel from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'

const AttachmentQuizResults = dynamic(() =>
  import('./AttachmentQuizResults').then((mod) => mod.AttachmentQuizResults)
)
const RegistrationForm = dynamic(() =>
  import('../RegistrationForm').then((mod) => mod.RegistrationForm)
)

interface IAttachmentQuizFormProps extends IResultProps {
  userStyle: TUserStyle
  userInfo?: IUserInfo
  quiz_traffic_source: TQuizTrafficSources
}

export const AttachmentQuizForm = ({
  ap,
  da,
  fa,
  sa,
  quiz_traffic_source,
  userInfo,
  userStyle,
}: IAttachmentQuizFormProps) => {
  // =================== State ======================
  const [showResults, setShowResults] = useState(true)
  // =================== Hooks ======================
  const tagManager = useGoogleTagManager()

  const router = useRouter()

  // Storage var for a/b test on RR page
  const emailSeriesTest = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.5

  // ==================== Events ====================
  const onAfterSubmit = () => {
    tagManager?.track({
      event: 'form_tracking',
      eventCategory: 'Attachment Quiz',
      eventAction: 'Form',
      eventLabel: 'Submit',
    })

    if (quiz_traffic_source !== 'organic') {
      Storage.set('gm-716-pricing-test', emailSeriesTest)
      Mixpanel.track.ExperimentStarted({
        'Experiment name': 'GM-716-pricing-test',
        'Variant name': emailSeriesTest ? 'Variant 1' : 'Control',
      })
    }

    if (quiz_traffic_source === 'organic') {
      setShowResults(!showResults)
    } else if (userStyle === 'fa') {
      router.push('/quiz/results/fa')
    } else {
      router.push('/quiz/' + userStyle)
    }
  }

  return (
    <section className="flex justify-center">
      {showResults ? (
        <div className="max-w-5xl w-full rounded-2xl py-12 mt-6 mx-2 xxs:shadow-centered md:mx-4">
          <h2 className="font-bold font-sspb mx-4 text-center">
            Fill Out the Form Below to View Your Free Results!
          </h2>

          {/* QUIZ COMPLETION FORM */}
          <RegistrationForm
            clientTag={getClientTag({
              quiz_traffic_source,
              userStyle,
              splitTests: { emailSeriesTest },
            })}
            submitButtonLabel="SUBMIT NOW"
            userInfo={userInfo}
            userStyle={userStyle}
            onAfterSubmit={onAfterSubmit}
          />
        </div>
      ) : (
        <div className="w-full">
          <AttachmentQuizResults ap={ap} da={da} fa={fa} sa={sa} />
        </div>
      )}
    </section>
  )
}

interface IPossibleSplitTests {
  emailSeriesTest: boolean
}

interface IGetClientTagProps {
  userStyle: TUserStyle
  quiz_traffic_source: TQuizTrafficSources
  splitTests: IPossibleSplitTests
}

const getClientTag = ({ quiz_traffic_source, userStyle, splitTests }: IGetClientTagProps) => {
  let clientTag = `attachment-quiz-${userStyle}`

  if (quiz_traffic_source !== 'organic') {
    switch (userStyle) {
      case 'ap':
        if (splitTests.emailSeriesTest) clientTag = `attachment-quiz-ap-5.1`
        break
      case 'da':
        if (splitTests.emailSeriesTest) clientTag = `attachment-quiz-da-5.1`
        break
      case 'fa':
        if (splitTests.emailSeriesTest) clientTag = `attachment-quiz-fa-5.1`
        break
      case 'sa':
        if (splitTests.emailSeriesTest) clientTag = `attachment-quiz-sa-5.1`
        break
      default:
        break
    }
  }

  return clientTag
}
