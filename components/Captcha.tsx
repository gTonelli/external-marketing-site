// core
import { useCallback } from 'react'
// components
import { IDefaultProps } from '@/components'
// libraries
import cx from 'classnames'
import ReCAPTCHA from 'react-google-recaptcha'

interface ICaptchaProps extends IDefaultProps {
  /** Event called when user successfully completes the captcha */
  onSuccess?(value: any): void
  /** Event called when user fails validating the captcha */
  onError?(): void
}

/**
 * Simple "I'm not a robot" google captcha
 *
 * @admin https://www.google.com/u/1/recaptcha/admin/site/554372567
 *
 * @docs https://developers.google.com/recaptcha/docs/display
 *
 * @library https://www.npmjs.com/package/react-google-recaptcha
 */
export const Captcha = ({ className, onError, onSuccess }: ICaptchaProps) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY) {
    throw new Error('Missing NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY value in .env !')
  }

  // ==================== Events ====================
  const _onSuccess = useCallback(
    (value: any) => {
      onSuccess?.(value)
    },
    [onSuccess]
  )

  const _onError = useCallback(() => {
    onError?.()
  }, [onError])

  return (
    <ReCAPTCHA
      className={cx('w-full', className)}
      sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY!}
      onChange={_onSuccess}
      onErrored={_onError}
    />
  )
}
