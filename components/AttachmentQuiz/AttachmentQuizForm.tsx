'use client'

//core
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
// components
import { IResultProps, TUserStyle, IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
import { Loader } from '../Loader'
import { RegistrationForm } from '../RegistrationForm'
// modules
import { EExternalRoutes } from '@/utils/constants'
import Mixpanel from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'
import { useGoogleTagManager } from '@/modules/GTM'

const AttachmentQuizResults = dynamic(
  () => import('./AttachmentQuizResults').then((mod) => mod.AttachmentQuizResults),
  {
    loading: () => <Loader />,
  }
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
  // =================== Hooks ======================
  const tagManager = useGoogleTagManager()
  // =================== State ======================
  const [showResults, setShowResults] = useState(false)
  const [showFaVariant, setShowFaVariant] = useState(false)
  const [showOrganicVariants, setShowOrganicVariants] = useState(false)
  const userTag = getClientTag({ userStyle })
  const router = useRouter()

  useEffect(() => {
    if (userStyle === 'fa' && quiz_traffic_source === 'paid') {
      let showFaVariant: string | null | boolean = Storage.get('gm-822-fa-split-test')
      if (showFaVariant === null) {
        showFaVariant = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.5
        Storage.set('gm-822-fa-split-test', showFaVariant)
        Mixpanel.track.ExperimentStarted({
          'Experiment name': 'GM-822-FA-Split-Test',
          'Variant name': showFaVariant ? 'Variant 1' : 'Control',
        })
        setShowFaVariant(showFaVariant)
      } else {
        setShowFaVariant(showFaVariant === 'true' || showFaVariant === true)
      }
    }

    if (quiz_traffic_source == 'organic') {
      let showOrganicVariants: string | null | boolean = Storage.get('gm-849-quiz-outputs')
      if (showOrganicVariants === null) {
        showOrganicVariants = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.5
        Storage.set('gm-849-quiz-outputs', showOrganicVariants)
        Mixpanel.track.ExperimentStarted({
          'Experiment name': 'GM-849-Quiz-Outputs',
          'Variant name': showOrganicVariants ? 'Variant 1' : 'Control',
        })
        setShowOrganicVariants(showOrganicVariants)
      } else {
        setShowOrganicVariants(showOrganicVariants === 'true' || showOrganicVariants === true)
      }
    }
  }, [userStyle, quiz_traffic_source, Storage, Mixpanel])

  // ==================== Events ====================
  const onAfterSubmit = () => {
    tagManager?.track({
      event: 'form_tracking',
      eventCategory: 'Attachment Quiz',
      eventAction: 'Form',
      eventLabel: 'Submit',
    })

    if (quiz_traffic_source === 'organic') {
      showOrganicVariants ? router.push('/results/' + userStyle) : setShowResults(true)
    } else if (userStyle === 'fa') {
      showFaVariant
        ? window.location.assign(EExternalRoutes.FA_VARIANT)
        : router.push('/quiz/results/fa')
    } else {
      router.push('/quiz/' + userStyle)
    }
  }

  return (
    <section className="flex justify-center">
      {showResults ? (
        <div className="w-full">
          <AttachmentQuizResults ap={ap} da={da} fa={fa} sa={sa} />
        </div>
      ) : (
        <div className="max-w-5xl w-full rounded-2xl py-12 mt-6 mx-2 xxs:shadow-centered md:mx-4">
          <h2 className="font-bold font-sspb mx-4 text-center">
            Fill Out the Form Below to View Your Free Results!
          </h2>

          {/* QUIZ COMPLETION FORM */}
          <RegistrationForm
            clientTag={userTag}
            submitButtonLabel="SUBMIT NOW"
            userInfo={userInfo}
            userStyle={userStyle}
            onAfterSubmit={onAfterSubmit}
          />
        </div>
      )}
    </section>
  )
}

interface IGetClientTagProps {
  userStyle: TUserStyle
}

const getClientTag = ({ userStyle }: IGetClientTagProps) => {
  // ============= State =============
  const [tag, setTag] = useState('')
  // ============= Hooks =============
  // const { usingVariant } = useCheckoutSplitTest({ userStyle, trafficRatio: 0.2 })

  useEffect(() => {
    let tag = `attachment-quiz-${userStyle}`
    // if (userStyle === 'ap' && usingVariant) {
    //   tag += `,one-step-checkout`
    // }
    setTag(tag)
  }, [userStyle])

  return tag
}
