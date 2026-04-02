'use client'

// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowRotateLeft,
  faHeadset,
  faShieldCheck,
} from '@awesome.me/kit-545b942488/icons/classic/regular'

export function TrustBlock({ className = '' }: { className?: string }) {
  return (
    <section className={`flex flex-col gap-6 ${className}`}>
      <h2 className="text-lg font-bold leading-7 text-black-2">Purchase with confidence</h2>

      <div className="flex gap-5">
        <FontAwesomeIcon
          icon={faArrowRotateLeft}
          className="mt-0.5 h-10 w-10 shrink-0 text-primary"
          size="2xl"
        />

        <div className="flex flex-col gap-2 text-black-2">
          <p className="text-base font-normal leading-[22px]">Refund / Cancellation Policy</p>

          <p className="text-sm leading-[18px]">
            Feel safe. 15 days for a Full refund, where applicable.
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <FontAwesomeIcon
          icon={faShieldCheck}
          className="mt-0.5 h-10 w-10 shrink-0 text-primary"
          size="2xl"
        />

        <div className="flex flex-col gap-2 text-black-2">
          <p className="text-base font-normal leading-[22px]">Privacy and Security</p>

          <p className="text-sm leading-[18px]">
            All Personal information you submit is Encrypted and Secure
          </p>
        </div>
      </div>

      <div className="flex gap-5">
        <FontAwesomeIcon
          icon={faHeadset}
          className="mt-0.5 h-10 w-10 shrink-0 text-primary"
          size="2xl"
        />

        <div className="flex flex-col gap-2 text-black-2">
          <p className="text-base font-normal leading-[22px]">Easy Support & Help</p>

          <p className="text-sm leading-[18px]">
            Need help? Our support team is available at any time. Please visit{' '}
            <a
              href="https://support.personaldevelopmentschool.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#142bd5] underline">
              support.personaldevelopmentschool.com
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
