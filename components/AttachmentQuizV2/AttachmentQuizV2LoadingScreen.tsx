// core
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// components
import { IQuizComponentDefaultArgs } from './useAttachmentQuiz'
import { Animation } from '../Animation'
// utils
import { ERoutes } from '@/utils/constants'
// libraries
import { motion } from 'framer-motion'
import { useTime, useTransform } from 'framer-motion'

interface IAttachmentQuizV2LoadingScreenProps extends IQuizComponentDefaultArgs<'LoadingScreen'> {
  onEndLoading: () => string | ERoutes
}

export const AttachmentQuizV2LoadingScreen = ({
  question,
  onEndLoading,
}: IAttachmentQuizV2LoadingScreenProps) => {
  const [header, setHeader] = useState(question.heading)
  const [index, setIndex] = useState(-1)
  const totalDuration = question.screens.reduce(
    (prev, curr) => prev + curr.duration,
    question.duration
  )
  const time = useTime()
  const width = useTransform(
    time,
    [0, totalDuration * 1000],
    [0, Math.min(window.innerWidth - 32, 576)]
  )
  const router = useRouter()

  useEffect(() => {
    if (index === question.screens.length) router.push(onEndLoading())
    if (index > question.screens.length - 1) return
    setTimeout(
      () => setIndex(index + 1),
      question.screens[index]?.duration * 1000 || question.duration * 1000
    )
    if (index < 0) return
    setHeader(question.screens[index].heading)
  }, [index, onEndLoading, question.duration, question.screens, router])

  return (
    <>
      <Animation key={`header_${Math.min(index, question.screens.length - 1)}`}>
        <p className="text-h3 mb-4 font-ssp max-w-xl mx-auto">{header}</p>
      </Animation>

      <div className="w-full max-w-xl mx-auto border border-black p-1 rounded full overflow-hidden relative">
        <motion.div className="bg-primary absolute top-0 left-0 h-full" style={{ width }} />
      </div>
    </>
  )
}
