import { CONFIG as PILLARS_CONFIG } from '../dream-life-pillars-course/config'
import type { TPromotionPageConfig } from '@/components/FreeTrialFreeCourse/FreeTrialFreeCoursePromotionPage'
import { externalRoutes } from '@/utils/constants'
import { cloneDeep } from 'lodash'

export const CONFIG: TPromotionPageConfig = cloneDeep(PILLARS_CONFIG)

CONFIG.paymentOptionsConfigKey = 'newYearNewYou'
CONFIG.checkoutUrl = externalRoutes.checkoutJune2025PromoTrial.concat('-new-year')
CONFIG.timer.title =
  'LIMITED TIME: Claim Your FREE Create Secure Relationships Course ($250 Value) for Life + Your 7 Day Free PDS Membership'
CONFIG.timer.className = 'bg-white !text-black'
CONFIG.timer.imageClassName = 'max-w-xl w-full mx-auto mb-4 lg:w-fit'
CONFIG.timer.imageAlt = 'Party Hangar'
CONFIG.timer.imageSrc = '/images/NewYearPromotion/party-hangar.png'
CONFIG.timer.imageWidth = 735
CONFIG.timer.imageHeight = 60
CONFIG.timer.classNameDate = '!bg-black !text-white !w-12 !h-12 lg:!leading-1'
CONFIG.timer.classNameDateLabel = '!text-black'
CONFIG.timer.classNameDateSeperator = '!text-black'
CONFIG.timer.date = '2026-01-01T23:59:59-05:00'
CONFIG.banner.title =
  'New Year, New You! Get the Only Tools You Need to Build The Best Relationship with Yourself and Others'
CONFIG.banner.className = 'bg-fireworks !bg-blue-auxiliary'
CONFIG.courseOutcome.title =
  'This New Year, Unlock the Tools to Create Healthy, Secure Relationships'
CONFIG.courseOutcome.offer = [
  <>
    Start your New Year right with 7 days of full access to our All-Access Pass, our all-inclusive
    membership! Explore our life-changing courses, live webinars, and a private support community
    embedded with our science-backed, results-driven proprietary method designed to help you become
    securely attached and see results in just 1 week.
  </>,
  <>
    Even if you cancel before the trial ends, you'll keep our{' '}
    <strong>Key Pillars for a Secure Relationship course (A FREE GIFT WORTH $250) for life.</strong>
  </>,
  <>
    Why are we giving all this away at no cost? Because we know you'll love what The Personal
    Development School has to offer, and we're willing to let you try it to believe it, at no risk
    or cost to you.
  </>,
]
CONFIG.howItHelps.classNameInner = 'relative bg-fireworks !bg-pink-auxiliary'
CONFIG.howItHelps.classNameImage =
  'absolute -top-12 -left-8 w-24 h-24 lg:-top-20 lg:-left-16 lg:w-36 lg:h-36'
CONFIG.howItHelps.imageSrc = '/images/NewYearPromotion/happy-new-year-gift.png'
CONFIG.howItHelps.imageAlt = 'Happy New Year Gift'
CONFIG.howItHelps.imageWidth = 150
CONFIG.howItHelps.imageHeight = 150

CONFIG.steps.className = 'relative !pt-44'
CONFIG.steps.classNameImage =
  'absolute top-0 left-0 w-[1440px] h-[100px] object-none mx-auto lg:w-full'
CONFIG.steps.imageSrc = '/images/NewYearPromotion/fireworks.png'
CONFIG.steps.imageAlt = 'Fireworks'
CONFIG.steps.imageWidth = 1440
CONFIG.steps.imageHeight = 100
CONFIG.steps.ctaLabel = 'GET YOUR COURSE + 7-DAY TRIAL!'
CONFIG.communityTeaser.footerImageClassName =
  'w-[1440px] h-[100px] object-none mt-8 mx-auto lg:w-full'
CONFIG.communityTeaser.footerImageSrc = '/images/NewYearPromotion/fireworks.png'
CONFIG.communityTeaser.footerImageAlt = 'Fireworks'
CONFIG.communityTeaser.footerImageWidth = 1440
CONFIG.communityTeaser.footerImageHeight = 100
