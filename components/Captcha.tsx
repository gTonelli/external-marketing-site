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
  /** Event called when the captcha token expires */
  onExpired?(): void
}

/**
 * Simple "I'm not a robot" google captcha
 *
 * @admin https://www.google.com/u/1/recaptcha/admin/site/554372567
 * @docs https://developers.google.com/recaptcha/docs/display
 * @library https://www.npmjs.com/package/react-google-recaptcha
 */
export const Captcha = ({ className, onError, onExpired, onSuccess }: ICaptchaProps) => {
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

  const _onExpired = useCallback(() => {
    onExpired?.()
  }, [onExpired])

  return (
    <ReCAPTCHA
      className={cx('w-full', className)}
      sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY!}
      onChange={_onSuccess}
      onErrored={_onError}
      onExpired={_onExpired}
    />
  )
}
