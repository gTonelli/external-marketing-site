// components
import { Image } from '@/components/Image'
import { Page } from '@/components/Page'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
import { Button } from '@/components/Button/Button'
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

          <div className="w-[inherit] mt-6">
            <VideoThumbnail
              srcUrl={EMAIL_RESULTS[seriesParam][styleParam].videoUrlID}
              thumbnailAlt={`Video ${styleParam} thumbnail`}
              type="GCP"
            />
          </div>
        </section>

        <section className="mx-auto mb-6 lg:w-1/2 ">
          <div className="max-w-lg rounded-2xl overflow-hidden shadow-lg ">
            <Image
              className="w-full object-cover object-top sm:max-h-60"
              src="attachment-style-email-series.jpg"
              alt="needs-mockup"
            />

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
                <Button
                  track
                  link={EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION}
                  label={styleParam === 'fa' ? `SIGN UP NOW` : `GET STARTED`}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </Page>
  )
}
