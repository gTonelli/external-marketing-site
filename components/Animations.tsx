'use client'

// libraries
import { motion } from 'framer-motion'
import { IDefaultWrapperProps } from '.'
import { isMobile } from 'react-device-detect'

interface IAnimationProps extends IDefaultWrapperProps {
  delay?: number
  direction?: 'fromLeft' | 'fromRight' | 'fromTop' | 'fromBottom'
}

export const Animation = ({
  delay = 0,
  direction = 'fromLeft',
  className,
  children,
}: IAnimationProps) => {
  const x = direction === 'fromLeft' ? '-100%' : direction === 'fromRight' ? '100%' : 0
  const y = direction === 'fromTop' ? '-100%' : direction === 'fromBottom' ? '100%' : 0

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: isMobile ? delay : 0 }}>
      {children}
    </motion.div>
  )
}
