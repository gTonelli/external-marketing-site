'use client'

// libraries
import { motion } from 'framer-motion'
import { IDefaultWrapperProps } from '.'
import { isMobile } from 'react-device-detect'

interface IAnimationProps extends IDefaultWrapperProps {
  delay?: number
  disabled?: boolean
  direction?: 'fromLeft' | 'fromRight' | 'fromTop' | 'fromBottom'
  onClick?: () => void
  onAnimationComplete?: () => void
}

export const Animation = ({
  delay = 0,
  direction = 'fromLeft',
  disabled = false,
  className,
  children,
  onClick,
  onAnimationComplete,
}: IAnimationProps) => {
  const x = direction === 'fromLeft' ? '-100%' : direction === 'fromRight' ? '100%' : 0
  const y = direction === 'fromTop' ? '-100%' : direction === 'fromBottom' ? '100%' : 0

  return (
    <motion.div
      className={className}
      initial={disabled ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: isMobile ? 0 : delay }}
      exit={{ opacity: 0, x, y }}
      viewport={{ once: true }}
      onClick={onClick}
      onAnimationComplete={onAnimationComplete}>
      {children}
    </motion.div>
  )
}
