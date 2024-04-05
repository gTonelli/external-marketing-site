// core
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
// components
import { IQuizComponentDefaultArgs } from './useAttachmentQuiz'
import { Animation } from '../Animation'
// libraries
import { motion } from 'framer-motion'
import { useTime, useTransform } from 'framer-motion'
// utils
import { ERoutes } from '@/utils/constants'

interface IAttachmentQuizV2LoadingScreenProps extends IQuizComponentDefaultArgs<'LoadingScreen'> {
  onEndLoadingUrl: () => string | ERoutes
}

export const AttachmentQuizV2LoadingScreen = ({
  question,
  onEndLoadingUrl,
}: IAttachmentQuizV2LoadingScreenProps) => {
  // ========== State ==========
  const [header, setHeader] = useState(question.heading)
  const [index, setIndex] = useState(-1)
  const [url, setUrl] = useState<string | ERoutes>('')
  // ========== Hooks ==========
  const totalDuration = question.screens.reduce(
    (prev, curr) => prev + curr.duration,
    question.duration
  )
  const time = useTime()
  const width = useTransform(
    time,
    [0, totalDuration * 1000],
    [0, Math.min(window.innerWidth - 16, 576)]
  )
  const router = useRouter()

  useEffect(() => {
    setUrl(onEndLoadingUrl())
  }, [onEndLoadingUrl])

  useEffect(() => {
    if (index === question.screens.length) router.push(url)
    if (index > question.screens.length - 1) return
    setTimeout(
      () => setIndex(index + 1),
      question.screens[index]?.duration * 1000 || question.duration * 1000
    )
    if (index < 0) return
    setHeader(question.screens[index].heading)
  }, [index, onEndLoadingUrl, question.duration, question.screens, router, url])

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
