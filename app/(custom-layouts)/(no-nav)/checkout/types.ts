export type CheckoutPriceRecurring = {
  interval: 'day' | 'week' | 'month' | 'year'
  intervalCount: number
}

export type CheckoutProductImage = {
  url?: string | null
  formats?: Record<string, unknown> | null
} | null

export type CheckoutProduct = {
  thinkificId: number | null
  documentId: string
  name: string
  description: string | null
  image?: CheckoutProductImage
  userIsEnrolled?: boolean | null
}

export type CheckoutPrice = {
  id: string
  lookupKey: string
  pricingPlanDocumentId: string
  description: string | null
  originalPrice: number
  currentPrice: number
  recurring: CheckoutPriceRecurring | null
  type: 'one_time' | 'recurring'
  title: string
  payPalPriceApiId: string | null
  currency: string
  trialPeriodDays: number | null
}

export type CheckoutPriceDataResponse = {
  success: boolean
  product: CheckoutProduct
  price: CheckoutPrice
  stripeAccount?: string | null
  subscriptionSchedule?: unknown
  discount?: Record<string, unknown> | null
}

export type CheckoutIntentType = 'payment' | 'setup' | 'subscription'

export type CheckoutSessionResponse = {
  success?: boolean
  type?: CheckoutIntentType
  clientSecret?: string
  stripeAccountId?: string | null
  newUser?: boolean
  thinkificId?: number
  stripeCustomerId?: string
  message?: string
  status?: number
  existingSubscription?: unknown
}
