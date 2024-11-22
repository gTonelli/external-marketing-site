'use client'

import { Button } from '../Button'

interface IButtonScrollProps {
  /** Button label */
  label: string
  /** Query selector for the scroll target */
  target: string
  /** className for tailwind css */
  className?: string
}

export const ButtonScroll = ({ label, target, className }: IButtonScrollProps) => {
  const onScrollToTarget = () => {
    const element = document.querySelector(target)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return <Button className={className} label={label} theme="primary" onClick={onScrollToTarget} />
}
