'use client'

// core
import { useEffect, useState } from 'react'
// components
import { IDefaultProps } from '.'
import { Toast } from './Toast'
// libraries
import { FacebookShareButton, LinkedinShareButton, TwitterShareButton } from 'react-share'
import cx from 'classnames'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter } from '@awesome.me/kit-545b942488/icons/classic/brands'
import { faLink } from '@awesome.me/kit-545b942488/icons/classic/solid'

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
    navigator.clipboard.writeText(currentUrl)
    setShowToast(true)
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
            <FontAwesomeIcon icon={faTwitter} />
          </TwitterShareButton>

          <FacebookShareButton
            url={currentUrl}
            className="w-8 h-8 flex items-center justify-center !bg-primary !text-white rounded-full mx-2">
            <FontAwesomeIcon icon={faFacebook} />
          </FacebookShareButton>

          <LinkedinShareButton
            url={currentUrl}
            className="w-8 h-8 flex items-center justify-center !bg-primary !text-white rounded-full mx-2">
            <FontAwesomeIcon icon={faLinkedin} />
          </LinkedinShareButton>

          <div
            className="w-8 h-8 flex items-center justify-center !bg-primary !text-white rounded-full cursor-pointer mx-2"
            onClick={onCopyText}>
            <FontAwesomeIcon icon={faLink} />
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
