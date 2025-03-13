// core
import Image from 'next/image'
// components
import { Page } from '@/components/Page'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { List } from '@/components/List'
import { faCircleSmall } from '@awesome.me/kit-545b942488/icons/classic/solid'
import { ButtonCheckout } from '@/components/Button/variants/ButtonCheckout'
// config
import { EMAIL_RESULTS as SERIES_BELIEFS_RESULTS, FA_EMAIL_RESULTS } from './config'
// modules
import { Pages } from '@/modules/Mixpanel'
// utils
import { TStyle } from '@/utils/types'
import { EExternalRoutes } from '@/utils/constants'

export type TSeriesParam =
  | 'needs'
  | 'beliefs'
  | 'attachment-style'
  | 'signs'
  | 'top-needs'
  | 'healing'
  | 'key-tools'
  | 'trust-wounds'

type TStyleParam = TStyle
interface IAttachmentSeriesPageParams {
  series: TSeriesParam
  style: TStyleParam
}
interface IEmailResult {
  title?: {
    text_start?: string
    text_purple?: string
    text_end?: string
  }
  body?: string
  videoUrlID?: string
  cardText?: string
}
interface IEmailResults {
  [key: string]: {
    [key: string]: IEmailResult
  }
}

export const dynamicParams = false

export function generateStaticParams(): IAttachmentSeriesPageParams[] {
  return [
    { series: 'needs', style: 'fa' },
    { series: 'needs', style: 'ap' },
    { series: 'needs', style: 'da' },
    { series: 'needs', style: 'sa' },
    { series: 'beliefs', style: 'fa' },
    { series: 'beliefs', style: 'ap' },
    { series: 'beliefs', style: 'da' },
    { series: 'beliefs', style: 'sa' },
    { series: 'attachment-style', style: 'fa' },
    { series: 'signs', style: 'fa' },
    { series: 'top-needs', style: 'fa' },
    { series: 'healing', style: 'fa' },
    { series: 'key-tools', style: 'fa' },
    { series: 'trust-wounds', style: 'fa' },
  ]
}

export default function AttachmentStyleNeedsBeliefsPage({
  params,
}: {
  params: IAttachmentSeriesPageParams
}) {
  let [seriesParam, styleParam] = [params.series, params.style]
  const pageName = `Attachment Styles Email Page - ${seriesParam} ${styleParam}` as Pages
  const EMAIL_RESULTS: IEmailResults =
    seriesParam === 'needs' || seriesParam === 'beliefs' ? SERIES_BELIEFS_RESULTS : FA_EMAIL_RESULTS

  return (
    <Page page_name={pageName}>
      <div className="flex flex-col h-full items-start px-4 lg:flex-row lg:px-8 lg:space-x-16 lg:my-16 ">
        <section className="flex flex-col items-center my-6 mx-auto lg:w-1/2 lg:mt-0">
          <div className="max-w-lg">
            <h1 className="text-center !text-2xl font-sans font-bold mb-4 lg:text-left">
              {EMAIL_RESULTS[seriesParam][styleParam].title!.text_start}
              <span className="text-purple-dark">
                {EMAIL_RESULTS[seriesParam][styleParam].title!.text_purple}
              </span>
              {EMAIL_RESULTS[seriesParam][styleParam].title!.text_end}
            </h1>

            <p className="text-center lg:text-left">
              {EMAIL_RESULTS[seriesParam][styleParam].body}
            </p>
          </div>

          <div className="w-[inherit] my-6">
            <VideoThumbnail
              srcUrl={EMAIL_RESULTS[seriesParam][styleParam].videoUrlID}
              thumbnailAlt={`Video ${styleParam} thumbnail`}
              type="GCP"
            />
          </div>

          {seriesParam === 'needs' && (
            <div className="max-w-lg">
              <div className="flex justify-center mb-4 lg:hidden">
                <ButtonCheckout
                  href={EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION}
                  label="GET STARTED"
                />
              </div>

              <p className="text-center mb-2 lg:mb-4 lg:text-left">
                If you’ve tried traditional methods and modalities for years and years…but are still
                stuck with the same patterns and struggles in your relationship —{' '}
                <strong>you can’t afford to miss this video.</strong>
              </p>

              <List
                icon={faCircleSmall}
                classNameIcon="!text-black !pt-2"
                classNameListItems="mb-2"
                iconSize="xs"
                listItems={[
                  'You’ll learn about our unique, groundbreaking, proprietary process – **Integrated Attachment Theory™** – and how it’s unlike anything you’ve ever seen before.',
                  'It works FAST, is simple to USE, and is disrupting the relationship industry because it quickly HELPS anyone, anywhere, regardless of age, sex, or education!',
                  'Unlock the secret to rewiring your subconscious patterns (responsible for 95% of what keeps you stuck) so you can experience real-life TRANSFORMATIONS in yourself and your relationships!',
                  'And uncover the Where-What-Why-and-How of your attachment style, how it impacts your relationships, and why you FINALLY have the power to change it!',
                ]}
              />
            </div>
          )}
        </section>

        <section className="mx-auto mb-6 lg:w-1/2 ">
          <div className="max-w-lg rounded-2xl overflow-hidden shadow-lg ">
            <Image
              className="w-full object-cover object-top sm:max-h-60"
              width={523}
              height={392}
              src="/images/attachment-style-email-series.jpg"
              alt="attachment-series-mockup"
            />

            {seriesParam === 'needs' ? (
              <div className="px-6 py-4 bg-purple-dark lg:py-8">
                <p className="text-center text-md font-bold text-white p-4 mb-2">
                  The time is now to transform your love life, build deep connections, and feel
                  secure in yourself and your relationships. Claim this special, limited-time offer
                  for the All-Access Pass.
                </p>
                <p className="text-center text-md font-bold text-white p-4 mb-2">
                  Our All-Access Pass membership gives you complete and unlimited access to
                  everything we offer at our transformative and life-changing online school so you
                  can rewrite your love life, unlock your relationships, and become the best version
                  of yourself ever.
                </p>

                <div className="flex justify-center mt-4">
                  <ButtonCheckout
                    href={EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION}
                    label="GET STARTED"
                  />
                </div>
              </div>
            ) : (
              <div className="px-6 py-4 bg-purple-dark lg:py-8">
                <p className="text-center text-md font-bold text-white p-4 mb-2">
                  {EMAIL_RESULTS[seriesParam][styleParam].cardText}
                </p>

                {styleParam === 'fa' && (
                  <p className="text-center text-md font-semibold text-white tracking-33">
                    GET A 30% DISCOUNT ON YOUR ALL-ACCESS PASS
                  </p>
                )}

                <div className="flex justify-center mt-4">
                  <ButtonCheckout
                    href={EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION}
                    label={styleParam === 'fa' ? `SIGN UP NOW` : `GET STARTED`}
                  />
                </div>
              </div>
            )}
          </div>
        </section>
      </div>
    </Page>
  )
}
