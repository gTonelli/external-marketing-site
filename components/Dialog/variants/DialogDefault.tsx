'use client'

// core
import React, { useEffect } from 'react'
// components
import { IDefaultWrapperProps } from '@/components'
import { Backdrop } from '@/components/Backdrop'
// libraries
import cx from 'classnames'
import ReactDOM from 'react-dom'
import { overrideTailwindClasses as two } from 'tailwind-override'

export interface IDialogDefaultProps extends IDefaultWrapperProps {
  /**
   * Sets the dialog as fullscreen below `md` breakpoint.
   *
   * @default false
   */
  isSmFullHeight?: boolean
  /**
   * Whether the Dialog is visible or not
   */
  isShown?: boolean
  zIndex?: number
  /**
   * Event called when Dialog's visibility is toggled.
   * This can be done either via this prop, or render props from `DialogRP`
   * @param isShown Whether the Dialog is visible or not
   */
  onToggle?(isShown?: boolean): void
}

/**
 * Default Dialog variant, a simple, screen-centered `div` with fullscreen background blur using `<Backdrop />`
 */
export const DialogDefault = ({
  children,
  className,
  isSmFullHeight = false,
  isShown,
  zIndex,
  style,
  onToggle,
}: IDialogDefaultProps) => {
  /**
   * Toggle the Dialog's visibility
   */
  const _onToggle = () => {
    onToggle?.(!isShown)
  }

  // Disables scroll in the app when a Dialog is present
  useEffect(() => {
    document.body.style.overflow = isShown ? 'hidden' : 'auto'
  }, [isShown])

  if (!isShown) return null

  return ReactDOM.createPortal(
    <div
      className="w-full h-screen flex-center fixed z-[1000] inset-0 p-4"
      style={zIndex ? { zIndex } : undefined}>
      {/* BLURRED BACKGROUND */}
      <Backdrop visible zIndex="z-30" onClick={_onToggle} />

      {/* DIALOG */}
      <div
        className={two(
          cx('card flex flex-col z-50 max-h-full', isSmFullHeight && 'h-full sm:h-auto', className)
        )}
        style={style}>
        {children}
      </div>
    </div>,
    document.body
  )
}
