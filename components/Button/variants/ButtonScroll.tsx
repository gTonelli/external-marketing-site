'use client'

import { Button } from '../Button'

interface IButtonScrollProps {
  /** Button label */
  label: string
  /** Query selector for the scroll target */
  target: string
}

export const ButtonScroll = ({ label, target }: IButtonScrollProps) => {
  const onScrollToTarget = () => {
    const element = document.querySelector(target)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return <Button label={label} theme="primary" onClick={onScrollToTarget} />
}
