import type { CheckoutSessionIdentity } from '@/modules/checkout/types'

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type MaybeUserData = {
  email?: string
  firstName?: string
  lastName?: string
} | null | undefined

export function deriveSessionIdentity(userData: MaybeUserData): CheckoutSessionIdentity | null {
  if (!userData) return null
  const email = userData.email?.trim()
  const firstName = userData.firstName?.trim()
  const lastName = userData.lastName?.trim()
  if (!email || !firstName || !lastName) return null
  return { email, firstName, lastName }
}

export function isValidEmail(email: string): boolean {
  return EMAIL_REGEX.test(email.trim())
}

export function validateUserIdentity(params: {
  email: string
  firstName: string
  lastName: string
}): { identity: CheckoutSessionIdentity; errorMessage: null } | { identity: null; errorMessage: string } {
  const email = params.email.trim()
  const firstName = params.firstName.trim()
  const lastName = params.lastName.trim()

  if (!email || !firstName || !lastName) {
    return {
      identity: null,
      errorMessage: 'Please enter your first name, last name, and email.',
    }
  }

  if (!isValidEmail(email)) {
    return {
      identity: null,
      errorMessage: 'Please enter a valid email address.',
    }
  }

  return {
    identity: { email, firstName, lastName },
    errorMessage: null,
  }
}
