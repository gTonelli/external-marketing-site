'use client'

// components
import { Button } from '../Button/Button'
import { IResultProps } from './AttachmentQuiz'
// modules
import Mixpanel from '@/modules/Mixpanel'
// utils
import { EExternalRoutes } from '@/utils/constants'

export const AttachmentQuizResults = ({ ap, da, fa, sa }: IResultProps) => {
  const goToMembershipsPage = () => {
    Mixpanel.track.ButtonClicked({
      page_name: 'Attachment Style Quiz',
      redirection: 'Memberships page',
    })

    window.location.assign(EExternalRoutes.COLLECTIONS)
  }

  const calcPercentage = () => {
    const totalTrueAnswers = ap + da + fa + sa
    const apPercentage = totalTrueAnswers === 0 ? 0 : ((ap / totalTrueAnswers) * 100).toFixed(0)

    const daPercentage = totalTrueAnswers === 0 ? 0 : ((da / totalTrueAnswers) * 100).toFixed(0)

    const faPercentage = totalTrueAnswers === 0 ? 0 : ((fa / totalTrueAnswers) * 100).toFixed(0)

    const saPercentage = totalTrueAnswers === 0 ? 0 : ((sa / totalTrueAnswers) * 100).toFixed(0)

    return {
      'Anxious Preoccupied': apPercentage,
      'Dismissive Avoidant': daPercentage,
      'Fearful Avoidant': faPercentage,
      'Securely Attached': saPercentage,
    }
  }

  return (
    <>
      {Object.entries(calcPercentage()).map((style, index) => (
        <div key={`result_${index}`} className="mt-6">
          <div className="w-3/4 font-bold text-left mx-auto lg:w-1/2">
            {style[0]} {style[1]}%
          </div>

          {/* PROGRESSBAR */}
          <div className="w-3/4 mx-auto lg:w-1/2">
            <div className="progressbar">
              <div
                className="progressbar-fill anim-progress-fil bg-primary"
                style={{ maxWidth: `${style[1]}%` }}
              />
            </div>
          </div>
        </div>
      ))}
      <div className="text-center">
        <Button
          className="rounded bg-primary-old mt-6"
          label="Start My Journey Today"
          onClick={goToMembershipsPage}
        />
      </div>
    </>
  )
}
