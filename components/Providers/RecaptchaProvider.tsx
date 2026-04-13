'use client'

import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'

interface IRecaptchaProviderProps {
  children: React.ReactNode
}

/**
 * Loads the Google reCAPTCHA v3 script once for the entire app.
 * Forms call `useGoogleReCaptcha()` and `executeRecaptcha(action)` to obtain a token.
 *
 * @admin https://www.google.com/u/1/recaptcha/admin/site/554372567
 * @docs https://developers.google.com/recaptcha/docs/v3
 */
export const RecaptchaProvider = ({ children }: IRecaptchaProviderProps) => {
  if (!process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY) {
    throw new Error('Missing NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY value in .env !')
  }

  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_GOOGLE_RECAPTCHA_V3_SITE_KEY}
      scriptProps={{ async: true, defer: true }}>
      {children}
    </GoogleReCaptchaProvider>
  )
}
