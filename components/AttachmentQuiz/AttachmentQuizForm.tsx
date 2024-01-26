'use client'

//core
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
// components
import { IResultProps, TUserStyle, IUserInfo, TQuizTrafficSources } from './AttachmentQuiz'
import { RegistrationForm } from '../RegistrationForm'
// modules
import { useGoogleTagManager } from '@/modules/GTM'
import Mixpanel from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'

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
  const [showPaidVariants, setShowPaidVariants] = useState(false)

  // =================== Hooks ======================
  const tagManager = useGoogleTagManager()
  const userTag = useClientTag({ userStyle })
  const router = useRouter()

  useEffect(() => {
    if (quiz_traffic_source === 'paid' && userStyle !== 'fa') {
      let showPaidVariants: string | null | boolean = Storage.get(
        `gm-860-rr-split-test-${userStyle}`
      )
      if (showPaidVariants === null) {
        showPaidVariants = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.2
        Storage.set(`gm-860-rr-split-test-${userStyle}`, showPaidVariants)
        Mixpanel.track.ExperimentStarted({
          'Experiment name': 'GM-860-RR-Split-Test',
          'Variant name': showPaidVariants ? 'Variant 1' : 'Control',
          page_name: `VSL Royal Rumble Results - ${userStyle}`,
        })
        setShowPaidVariants(showPaidVariants)
      } else {
        setShowPaidVariants(showPaidVariants === 'true' || showPaidVariants === true)
      }
    }
  }, [quiz_traffic_source, Storage, Mixpanel])

  // ==================== Events ====================
  const onAfterSubmit = () => {
    tagManager?.track({
      event: 'form_tracking',
      eventCategory: 'Attachment Quiz',
      eventAction: 'Form',
      eventLabel: 'Submit',
    })

    if (quiz_traffic_source === 'organic') {
      router.push('/results/' + userStyle)
    } else if (showPaidVariants) {
      router.push('/quiz/results/' + userStyle)
    } else if (quiz_traffic_source === 'paid' && userStyle === 'fa') {
      router.push('/quiz/results/fa')
    } else {
      router.push('/quiz/' + userStyle)
    }
  }

  return (
    <section className="flex justify-center">
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
    </section>
  )
}

interface IUseClientTagProps {
  userStyle: TUserStyle
}

const useClientTag = ({ userStyle }: IUseClientTagProps) => {
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
