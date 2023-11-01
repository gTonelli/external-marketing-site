'use client'

// core
import { useCallback, useState } from 'react'
// components
import { Button } from '@/components/Button/Button'
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
import { Video } from '@/components/Video/Video'
import { NotFound } from '@/components/NotFound'
import { EMAIL_RESULTS } from './config'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
// utils
import { TStyle } from '@/utils/types'
import { EExternalRoutes } from '@/utils/constants'
import { Page } from '@/components/Page'

export type TSeriesParam = 'needs' | 'beliefs'
export interface IAttachmentSeriesPageParams {
  seriesParam: TSeriesParam
  styleParam: TStyle
}

export default function AttachmentStyleNeedsBeliefsPage({
  params,
}: {
  params: { series: TSeriesParam; style: TStyle }
}) {
  const [seriesParam, styleParam] = [params.series, params.style]

  // ==================== State ====================
  const [watched, setWatched] = useState<boolean>(false)

  const pageName = `Attachment Styles Email Page - ${seriesParam} ${styleParam}` as Pages

  // ================== Events =====================
  //Only register the Video Started event once for Mixpanel
  const onVideoStarted = () => {
    if (!watched) {
      Mixpanel.track.VideoStarted({
        video_type: `YouTube - Attachment Styles Email Series Video - ${seriesParam} ${styleParam}`,
        page_name: pageName,
      })
    }
    setWatched((prev) => !prev)
  }

  const onGoToCheckout = useCallback((event: React.MouseEvent<Element, MouseEvent>) => {
    Mixpanel.track.ButtonClicked({
      button_label: (event.target as HTMLButtonElement).innerText,
      page_name: pageName,
    })

    window.location.assign(EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION)
  }, [])

  if (!EMAIL_RESULTS[seriesParam][styleParam]) return <NotFound />

  return (
    <Page page_name="Attachment Style Needs Beliefs Page">
      <div className="flex flex-col h-full items-start px-4 lg:flex-row lg:px-8 lg:space-x-16 lg:my-16 ">
        <section className="flex flex-col items-center my-6 mx-auto lg:w-1/2 lg:mt-0">
          <div className="max-w-lg">
            <h2 className="text-center !text-2xl font-sans font-bold mb-4 lg:text-left">
              {EMAIL_RESULTS[seriesParam][styleParam].title.text_start}
              <span className="text-purple-dark">
                {EMAIL_RESULTS[seriesParam][styleParam].title.text_purple}
              </span>
              {EMAIL_RESULTS[seriesParam][styleParam].title.text_end}
            </h2>

            <Text.Paragraph
              className="text-center lg:text-left"
              content={EMAIL_RESULTS[seriesParam][styleParam].body}
            />
          </div>
          <div className="mt-6">
            <Video.Youtube
              className="rounded-20 shadow-centered"
              iframeClassName="w-full aspect-video rounded-10"
              maxHeight={498}
              videoId={EMAIL_RESULTS[seriesParam][styleParam].videoUrlID}
              onPlay={onVideoStarted}
            />
          </div>
        </section>
        <section className="mx-auto mb-6 lg:w-1/2 ">
          <div className="max-w-lg rounded-2xl overflow-hidden shadow-lg ">
            <Image
              className="w-full object-cover object-top sm:max-h-60"
              src="attachment-style-email-series.jpg"
            />

            <div className="px-6 py-4 bg-purple-dark lg:py-8">
              <Text
                className="text-center text-md font-bold text-white p-4 mb-2"
                content={EMAIL_RESULTS[seriesParam][styleParam].cardText}
              />

              {styleParam === 'fa' && (
                <Text.Paragraph
                  className="text-center text-md font-semibold text-white tracking-[5px]"
                  content="GET A 30% DISCOUNT ON YOUR ALL-ACCESS PASS"
                />
              )}

              <Button
                className="block bg-teal border-none mx-auto m-6"
                label={styleParam === 'fa' ? `SIGN UP NOW` : `GET STARTED`}
                onClick={onGoToCheckout}
              />
            </div>
          </div>
        </section>
      </div>
    </Page>
  )
}
