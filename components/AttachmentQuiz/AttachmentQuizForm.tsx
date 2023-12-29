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
  const userTag = getClientTag({ userStyle })
  const router = useRouter()

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
    } else if (userStyle === 'fa') {
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
