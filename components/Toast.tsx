'use client'

// core
import { Dispatch, SetStateAction, useEffect } from 'react'
import { createPortal } from 'react-dom'
// components
import { IDefaultProps } from '.'
// libraries
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClose } from '@awesome.me/kit-545b942488/icons/classic/solid'

interface IToastProps extends IDefaultProps {
  type: 'success' | 'error' | 'neutral'
  showToast: boolean
  setShowToast: Dispatch<SetStateAction<boolean>>
  message: string
  /** in number of milliseconds */
  timeout?: number
}

export const Toast = ({
  showToast,
  setShowToast,
  message,
  type,
  timeout = 3000,
  className,
}: IToastProps) => {
  useEffect(() => {
    if (showToast) {
      const toastTimer = setTimeout(() => setShowToast(false), timeout)
      return () => clearTimeout(toastTimer)
    }
  }, [showToast])

  return showToast ? (
    createPortal(
      <div
        className={cx(
          'fixed right-4 bottom-4 w-max flex items-center gap-4 shadow-2xl text-left p-4 mx-auto z-20 transition-all',
          type === 'success' && 'bg-green-check text-white',
          type === 'error' && 'bg-red-700 text-white',
          type === 'neutral' && 'bg-slate-950 text-white',
          className
        )}>
        <p>{message}</p>

        <FontAwesomeIcon icon={faClose} className="p-2" onClick={() => setShowToast(false)} />
      </div>,
      document.body
    )
  ) : (
    <></>
  )
}
