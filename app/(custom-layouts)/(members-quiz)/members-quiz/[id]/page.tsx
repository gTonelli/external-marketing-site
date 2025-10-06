'use client'

// core
import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
// components
import { Button } from '@/components/Button/Button'
import { Dialog } from '@/components/Dialog/Dialog'
import { ProgressBar } from '@/components/ProgressBar'
import { Text } from '@/components/Text/Text'
import { NotFound } from '@/components/NotFound'
import { Page } from '@/components/Page'
import { useAttachmentQuiz } from '@/components/AttachmentQuizV2/useAttachmentQuiz'
// config
import { CONFIG, ICalculateQuizPointsParams } from '../config'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faTimes } from '@awesome.me/kit-545b942488/icons/classic/regular'
import { faHeart, faHouse, faPeople } from '@awesome.me/kit-545b942488/icons/classic/light'
import { orderBy } from 'lodash'
// modules
import Mixpanel from '@/modules/Mixpanel'
import { Storage } from '@/modules/Storage'
// styles
import '../styles.css'
// utils
import { getUserData } from '@/utils/functions'

type TQuizType = 'romantic' | 'family' | 'friends'

export default function QuizQuestionsPage({ params }: { params: { id: string | TQuizType } }) {
  // ==================== Params ====================
  const router = useRouter()

  // ==================== State ====================
  const [currentIndex, setCurrentIndex] = useState<number>(0)
  const [apPoints, setApPoints] = useState<number>(0)
  const [daPoints, setDaPoints] = useState<number>(0)
  const [faPoints, setFaPoints] = useState<number>(0)
  const [saPoints, setSaPoints] = useState<number>(0)
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const [showLeaveConfirmationWithQuizId, setShowLeaveConfirmationWithQuizId] = useState<string>('')

  // ==================== Hooks ====================
  const { getPercentageResults, saveResult } = useAttachmentQuiz()

  const quiz = CONFIG.find((i) => i.type === params.id || i.id === params.id)

  useEffect(() => {
    localStorage.removeItem('canViewResults')
    Mixpanel.track.QuizStarted({ quiz_name: 'Members Quiz', quiz_type: quiz?.type })
  }, [quiz?.type])

  const onQuestionAnswer = useCallback(
    (answer: boolean) => () => {
      if (isSubmitting) return
      setIsSubmitting(true)
      let newFaPoints = faPoints,
        newDaPoints = daPoints,
        newSaPoints = saPoints,
        newApPoints = apPoints

      // Answered `true` save the score based on association
      if (answer) {
        if (currentIndex >= 0) {
          const question = questions[currentIndex]
          if (question.styleAssociation === 'fa') {
            newFaPoints += question.styleAssociationValue || 1
            setFaPoints(newFaPoints)
          } else if (question.styleAssociation === 'ap') {
            newApPoints += question.styleAssociationValue || 1
            setApPoints(newApPoints)
          } else if (question.styleAssociation === 'sa') {
            newSaPoints += question.styleAssociationValue || 1
            setSaPoints(newSaPoints)
          } else {
            newDaPoints += question.styleAssociationValue || 1
            setDaPoints(newDaPoints)
          }
        }
      }

      if (currentIndex === questions.length - 1) {
        const totalTrueAnswers = newApPoints + newDaPoints + newFaPoints + newSaPoints

        const apPercentage =
          totalTrueAnswers === 0 ? 0 : ((newApPoints / totalTrueAnswers) * 100).toFixed(0)
        const daPercentage =
          totalTrueAnswers === 0 ? 0 : ((newDaPoints / totalTrueAnswers) * 100).toFixed(0)
        const faPercentage =
          totalTrueAnswers === 0 ? 0 : ((newFaPoints / totalTrueAnswers) * 100).toFixed(0)
        const saPercentage =
          totalTrueAnswers === 0 ? 0 : ((newSaPoints / totalTrueAnswers) * 100).toFixed(0)

        const userData = getUserData()

        if (userData && userData.email && userData.firstName && userData.lastName) {
          Storage.set('canViewResults', '1')
          const { faPercentage, daPercentage, apPercentage, saPercentage } = getPercentageResults({
            fa: newFaPoints,
            da: newDaPoints,
            ap: newApPoints,
            sa: newSaPoints,
          })
          saveResult({
            firstName: userData.firstName,
            lastName: userData.lastName,
            email: userData.email,
            faPercentage,
            daPercentage,
            apPercentage,
            saPercentage,
          })
        }

        router.push(
          `/members-quiz/results/${params.id}/${calculateResult({
            faPoints: newFaPoints,
            daPoints: newDaPoints,
            apPoints: newApPoints,
            saPoints: newSaPoints,
          })}/${faPercentage}/${daPercentage}/${apPercentage}/${saPercentage}`
        )
      }

      // Any other question check if tracking needs to be done and move to the next one
      else {
        // Track completion progress in quartiles
        if ((currentIndex + 1) % (questions.length / 4) === 0)
          Mixpanel.track.QuizProgress({
            quiz_name: 'Members Quiz',
            progress: ((currentIndex + 1) / questions.length) * 100 + '%',
            question: currentIndex + 1,
            total_questions: questions.length,
          })

        setCurrentIndex(currentIndex + 1)
        setIsSubmitting(false)
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [faPoints, daPoints, saPoints, apPoints, currentIndex, router, params.id]
  )

  const onGoToPreviousQuestion = useCallback(() => {
    if (currentIndex === 0) {
      router.back()
    } else {
      setCurrentIndex(currentIndex - 1)
    }
  }, [currentIndex, router])

  if (!quiz) return <NotFound />
  const quizColor = quiz.color
  const questions = quiz.questions

  const isPink = quizColor === 'pink'
  const isTeal = quizColor === 'teal'
  const isOrange = quizColor === 'orange'

  const onShowConfirmationDialog = (id: string) => () => {
    setShowLeaveConfirmationWithQuizId(id)
  }

  const onChangeQuiz = () => {
    setShowLeaveConfirmationWithQuizId('')
    setCurrentIndex(0)
    setApPoints(0)
    setDaPoints(0)
    setFaPoints(0)
    setSaPoints(0)

    router.push(`/members-quiz/${showLeaveConfirmationWithQuizId}`)
  }

  const calculateResult = ({
    faPoints,
    daPoints,
    apPoints,
    saPoints,
  }: ICalculateQuizPointsParams): string => {
    Mixpanel.track.QuizFinished({ quiz_name: 'Members Quiz', quiz_type: quiz.type })

    const scores = [
      { style: 'fa', score: faPoints },
      { style: 'da', score: daPoints },
      { style: 'sa', score: saPoints },
      { style: 'ap', score: apPoints },
    ]

    const style = orderBy(scores, ['score'], ['desc'])[0].style
    const prefix = 'main-attachment-quiz'
    const suffix = quiz.type
    const userTag = `${prefix}-${style}-${suffix}`
    localStorage.setItem('userTag', userTag)

    return style.toUpperCase()
  }

  return (
    <Page page_name="Members Quiz Questions">
      <Dialog
        className="w-full rounded-4xl overflow-hidden m-5 lg:w-1/2 xl:1/3 border border-black bg-white"
        isShown={Boolean(showLeaveConfirmationWithQuizId && window.innerWidth > 768)}
        onToggle={() => setShowLeaveConfirmationWithQuizId('')}>
        <div className="relative flex-center flex-col p-12 text-black">
          <Image
            alt="A vector image of 2 people standing next to a large stop sign"
            src="/images/MembersQuiz/dialog.svg"
            width={208}
            height={132}
          />

          <div
            className="w-6 h-6 flex-center rounded-full border border-black absolute top-7 right-7 clickable"
            onClick={() => setShowLeaveConfirmationWithQuizId('')}>
            <FontAwesomeIcon icon={faTimes} />
          </div>

          <Text.Heading className="mb-2" content="Are you sure you want to leave?" />

          <Text.Paragraph
            className="tracking-0.325 font-bold mb-8"
            content="YOUR PROGRESS WILL BE LOST"
          />

          <Button
            className={cx(
              'font-effra font-bold tracking-widest rounded-full px-4 py-3 bg-primary text-white mb-4'
            )}
            label="STAY ON PAGE"
            onClick={() => setShowLeaveConfirmationWithQuizId('')}
          />

          <Button
            className={cx(
              'font-effra font-bold tracking-widest rounded-full px-4 py-3 bg-white text-black'
            )}
            label={`TAKE ${CONFIG.find(
              (i) => i.id === showLeaveConfirmationWithQuizId
            )?.title.toUpperCase()}`}
            onClick={onChangeQuiz}
          />
        </div>
      </Dialog>

      <div
        className="w-full min-h-screen flex flex-col items-center relative overflow-hidden pt-8 px-page-xs 
                  lg:pt-14 lg:px-page">
        {isPink && (
          <>
            <Image
              alt="A styled vector wave"
              className="w-full bg-desktop absolute z-0 -bottom-20"
              src="/images/MembersQuiz/quiz-romantic-bg.svg"
              width={1024}
              height={396}
              tabIndex={-1}
              sizes="100vw"
            />
            <Image
              alt="A styled vector wave"
              width={425}
              height={400}
              tabIndex={-1}
              className="w-full bg-mobile absolute z-0 -bottom-20"
              src="/images/MembersQuiz/quiz-romantic-mobile-bg.svg"
            />
          </>
        )}

        {isTeal && (
          <>
            <Image
              alt="A styled vector wave"
              width={1024}
              height={396}
              tabIndex={-1}
              className="w-full bg-desktop absolute z-0 -bottom-20"
              src="/images/MembersQuiz/quiz-family-bg.svg"
              sizes="100vw"
            />
            <Image
              alt="A styled vector wave"
              width={425}
              height={400}
              tabIndex={-1}
              className="w-full bg-mobile absolute z-0 -bottom-20"
              src="/images/MembersQuiz/quiz-family-mobile-bg.svg"
            />
          </>
        )}

        {isOrange && (
          <>
            <Image
              alt="A styled vector wave"
              width={1024}
              height={396}
              tabIndex={-1}
              className="w-full bg-desktop absolute z-0 -bottom-20"
              src="/images/MembersQuiz/quiz-friends-bg.svg"
              sizes="100vw"
            />
            <Image
              alt="A styled vector wave"
              width={425}
              height={400}
              tabIndex={-1}
              className="w-full bg-mobile absolute z-0 -bottom-20"
              src="/images/MembersQuiz/quiz-friends-mobile-bg.svg"
            />
          </>
        )}

        {/* CONTENT */}
        <div className="flex-center flex-col text-center relative z-5 lg:w-1/2">
          {showLeaveConfirmationWithQuizId && window.innerWidth <= 768 ? (
            <div className="relative flex-center flex-col p-12 text-black">
              <Image
                alt="A vector image of 2 people standing next to a large stop sign"
                src="/images/MembersQuiz/dialog.svg"
                width={208}
                height={132}
              />

              <div
                className="w-6 h-6 flex-center rounded-full border border-black absolute top-7 right-7 clickable"
                onClick={() => setShowLeaveConfirmationWithQuizId('')}>
                <FontAwesomeIcon icon={faTimes} />
              </div>

              <Text.Heading className="mb-2" content="Are you sure you want to leave?" />

              <Text.Paragraph
                className="tracking-0.325 font-bold mb-8"
                content="YOUR PROGRESS WILL BE LOST"
              />

              <Button
                className={cx(
                  'font-effra font-bold tracking-widest rounded-full px-4 py-3 bg-primary text-white mb-4'
                )}
                label="STAY ON PAGE"
                onClick={() => setShowLeaveConfirmationWithQuizId('')}
              />

              <Button
                className={cx(
                  'font-effra font-bold tracking-widest rounded-full px-4 py-3 bg-white text-black'
                )}
                label={`TAKE ${CONFIG.find(
                  (i) => i.id === showLeaveConfirmationWithQuizId
                )?.title.toUpperCase()}`}
                onClick={onChangeQuiz}
              />
            </div>
          ) : (
            <>
              <Text.Paragraph className="font-bold mb-5" content="Quiz Type" />

              {/* QUIZ TYPES */}
              <div className="flex space-x-6 mb-8 lg:space-x-10">
                {/* @ts-ignore */}
                <QuizIcon
                  color="pink"
                  isActive={isPink}
                  label="Romantic"
                  onClick={onShowConfirmationDialog('1')}
                />
                <QuizIcon
                  color="teal"
                  isActive={isTeal}
                  label="Family"
                  onClick={onShowConfirmationDialog('2')}
                />
                <QuizIcon
                  color="orange"
                  isActive={isOrange}
                  label="Friends"
                  onClick={onShowConfirmationDialog('3')}
                />
              </div>

              {/* PROGRESS BAR */}
              <ProgressBar
                showPercentage
                className="w-full p-1 mb-8 lg:w-2/3 lg:mb-6"
                color={quizColor}
                percentage={Number(((100 / questions.length || 1) * currentIndex).toFixed(0))}
              />

              {/* INDEX  */}
              <Text.Heading
                className="mb-5 lg:mb-2"
                size={2}
                content={`Question ${currentIndex + 1}`}
              />

              {/* QUESTION  */}
              <Text.Paragraph
                className="mb-12 lg:w-2/3 lg:mb-7"
                content={questions[currentIndex]?.question || ''}
              />

              {/* ANSWER BUTTONS */}
              <div className="w-full flex-center space-x-3 mb-5 lg:mb-10">
                <Button
                  disabled={isSubmitting}
                  theme={quizColor}
                  className="font-bold tracking-widest rounded-full py-4 px-10"
                  label="TRUE"
                  onClick={onQuestionAnswer(true)}
                />
                <Button
                  disabled={isSubmitting}
                  theme={quizColor}
                  className="font-bold tracking-widest rounded-full py-4 px-10"
                  label="FALSE"
                  onClick={onQuestionAnswer(false)}
                />
              </div>

              <div className="w-full flex justify-center">
                <button
                  className="flex flex-col items-center justify-center p-0"
                  onClick={onGoToPreviousQuestion}>
                  <FontAwesomeIcon
                    className="flex items-center justify-center w-4 h-8 p-2 text-primary rounded-full bg-white shadow-lg"
                    icon={faChevronLeft}
                  />

                  <span className="w-max">
                    {currentIndex === 0 ? 'Go back' : 'Go to the previous question'}
                  </span>
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </Page>
  )
}

interface IQuizIconProps {
  color: 'teal' | 'orange' | 'pink'
  isActive?: boolean
  label: string
  onClick?(): void
}

const QuizIcon = ({ color, isActive, label, onClick }: IQuizIconProps) => (
  <div
    className={cx('flex-center flex-col', !isActive && 'group cursor-pointer')}
    onClick={onClick}>
    <div
      className={cx(
        'w-[50px] h-[50px]',
        'flex-center rounded-full border-4 p-2 mb-3',
        `border-${color}`,
        isActive && `bg-${color} transform scale-150`
      )}>
      {color === 'pink' && (
        <FontAwesomeIcon
          className={cx(`w-full `, isActive ? 'text-white scale-150' : 'text-pink')}
          icon={faHeart}
        />
      )}
      {color === 'teal' && (
        <FontAwesomeIcon
          className={cx(`w-full `, isActive ? 'text-white scale-150' : 'text-teal')}
          icon={faHouse}
        />
      )}
      {color === 'orange' && (
        <FontAwesomeIcon
          className={cx(`w-full`, isActive ? 'text-white scale-150' : 'text-orange')}
          icon={faPeople}
        />
      )}
    </div>
    <Text className="group-hover:underline" content={label} />
  </div>
)
