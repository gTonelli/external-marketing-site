'use client'

// core
import { useEffect, useState } from 'react'
// components
import { Icon } from './Icon'
import { IDefaultProps } from '.'
// libraries
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import cx from 'classnames'
import { Toast } from './Toast'
//utils

interface IShareIconsProps extends IDefaultProps {
  classNameInner?: string
}

export const ShareIcons = ({ className, classNameInner }: IShareIconsProps) => {
  // ========= State ============
  const [currentUrl, setCurrentUrl] = useState('')
  const [showToast, setShowToast] = useState(false)

  useEffect(() => {
    setCurrentUrl(window.location.href)
  }, [])

  const onCopyText = () => {
    setShowToast(true)
    navigator.clipboard.writeText(currentUrl)
  }

  return (
    <div className={cx(className)}>
      <div
        className={cx(
          'flex flex-col justify-center items-center lg:flex-row lg:!px-4 lg:!py-0',
          classNameInner
        )}>
        <div className="flex items-center justify-center">
          <TwitterShareButton
            url={currentUrl}
            className="w-8 h-8 flex items-center justify-center !bg-primary !text-white rounded-full mx-2">
            <Icon name="twitter" type="brands" />
          </TwitterShareButton>

          <FacebookShareButton
            url={currentUrl}
            className="w-8 h-8 flex items-center justify-center !bg-primary !text-white rounded-full mx-2">
            <Icon name="facebook" type="brands" />
          </FacebookShareButton>

          <LinkedinShareButton
            url={currentUrl}
            className="w-8 h-8 flex items-center justify-center !bg-primary !text-white rounded-full mx-2">
            <Icon name="linkedin" type="brands" />
          </LinkedinShareButton>

          <div
            className="w-8 h-8 flex items-center justify-center !bg-primary !text-white rounded-full cursor-pointer mx-2"
            onClick={onCopyText}>
            <Icon name="link" />
          </div>

          <Toast
            showToast={showToast}
            setShowToast={setShowToast}
            message="Copied to clipboard!"
            type="success"
          />
        </div>
      </div>
    </div>
  )
}
