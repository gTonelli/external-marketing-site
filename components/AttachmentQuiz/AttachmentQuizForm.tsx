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
import { Storage, TStorageKeys } from '@/modules/Storage'
import { useCheckoutSplitTest } from '@/utils/hooks'

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
  const userTag = useClientTag({ userStyle })
  const router = useRouter()

  // =================== States ======================
  const [isVariant, setIsVariant] = useState<boolean>()

  useEffect(() => {
    if (quiz_traffic_source === 'paid' && userStyle === 'fa') {
      let storageVar = 'gm-896-fa-retest' as TStorageKeys
      let showVariant: string | null | boolean = Storage.get(storageVar)
      if (showVariant === null) {
        showVariant = window.crypto.getRandomValues(new Uint8Array(1))[0] / 255 < 0.2
        Storage.set(storageVar, showVariant)
        Mixpanel.track.ExperimentStarted({
          'Experiment name': 'GM-896-FA-Retest',
          'Variant name': showVariant ? 'Variant 1' : 'Control',
        })
      }
      setIsVariant(showVariant === 'true' || showVariant === true)
    }
  }, [quiz_traffic_source, userStyle])

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
    } else if (quiz_traffic_source === 'paid' && userStyle === 'fa') {
      router.push(isVariant ? '/quiz/fa' : '/quiz/results/fa')
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
  const { usingVariant } = useCheckoutSplitTest({ userStyle })

  useEffect(() => {
    let tag = `attachment-quiz-${userStyle}`
    if (userStyle === 'fa' && usingVariant) {
      tag += `,one-step-checkout`
    }
    setTag(tag)
  }, [userStyle, usingVariant])

  return tag
}
