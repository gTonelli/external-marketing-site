import { Button } from '@/components/Button/Button'
import { Image } from '@/components/Image'
import { Page } from '@/components/Page'
import { VideoThumbnail } from '@/components/Video/variants/VideoThumbnail'
// config
import { FA_EMAIL_COPY as EMAIL_RESULTS } from './config'

type TSeriesParams = 'email2' | 'email3' | 'email4' | 'email5' | 'email6' | 'email7'

export default function FAEmailSeriesPage({ params }: { params: { series: TSeriesParams } }) {
  const seriesParam = params.series

  return (
    <Page page_name={`FA Email Page - ${params}`}>
      <div className="flex flex-col h-full items-start px-4 lg:flex-row lg:px-8 lg:space-x-16 lg:my-16 ">
        <section className="flex flex-col items-center my-6 mx-auto lg:w-1/2 lg:mt-0">
          <div className="max-w-lg">
            <h1 className="text-center !text-2xl font-sans font-bold mb-4 lg:text-left">
              {EMAIL_RESULTS[seriesParam].title.text_start}
              <span className="text-purple-dark">
                {EMAIL_RESULTS[seriesParam].title.text_purple}
              </span>
              {EMAIL_RESULTS[seriesParam].title.text_end}
            </h1>

            <p className="text-center lg:text-left">{EMAIL_RESULTS[seriesParam].body}</p>
          </div>
          <div className="w-[inherit] mt-6">
            <VideoThumbnail
              srcUrl={EMAIL_RESULTS[seriesParam].videoUrlID}
              thumbnailAlt={`Video thumbnail`}
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
                {EMAIL_RESULTS[seriesParam].cardText}
              </p>

              <p className="text-center text-md font-semibold text-white tracking-[5px]">
                GET A 30% DISCOUNT ON YOUR ALL-ACCESS PASS
              </p>

              <Button className="block bg-teal border-none mx-auto m-6" label="SIGN UP NOW" />
            </div>
          </div>
        </section>
      </div>
    </Page>
  )
}
