import cx from 'classnames'
import { IDefaultProps } from '.'

/**
 * Required legal notice when the reCAPTCHA v3 badge is hidden via CSS.
 * @docs https://developers.google.com/recaptcha/docs/faq#id-like-to-hide-the-recaptcha-badge.-what-is-allowed
 */
export const RecaptchaNotice = ({ className }: IDefaultProps) => {
  return (
    <p className={cx('text-xs text-gray-400 mt-2', className)}>
      This site is protected by reCAPTCHA and the Google{' '}
      <a
        href="https://policies.google.com/privacy"
        target="_blank"
        rel="noopener noreferrer"
        className="underline">
        Privacy Policy
      </a>{' '}
      and{' '}
      <a
        href="https://policies.google.com/terms"
        target="_blank"
        rel="noopener noreferrer"
        className="underline">
        Terms of Service
      </a>{' '}
      apply.
    </p>
  )
}
