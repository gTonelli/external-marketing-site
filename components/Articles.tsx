'use client'

import { useCallback, useContext } from 'react'
import { Image } from './Image'
import { Text } from './Text/Text'
import { TRIAL_HEADSPACE as TH } from '@/app/(default-layout)/dream-life/config'
import Mixpanel from '@/modules/Mixpanel'
import { PageContext } from '@/utils/contexts'
import { Icon } from './Icon'

type ArticleKey = keyof typeof TH.ARTICLES

export const Articles = () => {
  const { page_name } = useContext(PageContext)

  const onGoToBlog = (blog: ArticleKey) =>
    useCallback(() => {
      Mixpanel.track.ButtonClicked({
        button_label: TH.ARTICLES[blog].name,
        page_name: page_name,
      })

      window.location.assign(TH.ARTICLES[blog].url)
    }, [page_name, TH, Mixpanel])

  return (
    <>
      <section className="relative w-full pt-5 lg:pt-14">
        <Image
          className="hidden absolute top-5 lg:block 2xl:left-60"
          src="TrialHeadspace/eclipse-left.png"
        />

        <Image
          className="hidden absolute top-80 right-0 -z-10 lg:block 2xl:right-48"
          src="TrialHeadspace/eclipse-right.png"
        />

        <div className="max-w-5xl mx-auto px-4">
          <Text.Heading
            className="!text-h1 text-center mt-10 lg:text-right lg:mt-0"
            content="Latest Articles"
            size={1}
          />

          <div className="mt-5 lg:mt-14">
            <div className="flex flex-col items-center space-y-5 md:justify-center md:space-x-5 md:space-y-0 md:flex-row">
              <div className="relative">
                <Image className="lg:hidden" src="TrialHeadspace/article-mockup-mobile-1.png" />

                <Image className="hidden lg:block" src="TrialHeadspace/article-mockup-1.png" />

                <div
                  className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-[15px] cursor-pointer mx-auto px-6 py-7
                              lg:-translate-x-0 lg:left-5 lg:px-5 lg:pt-6 lg:pb-4"
                  onClick={() => onGoToBlog('article1')}>
                  <Text.Paragraph
                    className="!w-56 text-[#7b7b7b]"
                    content={TH.ARTICLES.article1.name}
                  />

                  <Icon
                    className="text-white bg-primary rounded-full mt-2 p-2 lg:mt-4"
                    name="long-arrow-alt-right"
                  />
                </div>
              </div>

              <div className="relative">
                <Image className="lg:hidden" src="TrialHeadspace/article-mockup-mobile-2.png" />

                <Image className="hidden lg:block" src="TrialHeadspace/article-mockup-2.png" />

                <div
                  className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-[15px] cursor-pointer px-6 py-7 
                              lg:-translate-x-0 lg:left-5 lg:px-5 lg:pt-6 lg:pb-4"
                  onClick={() => onGoToBlog('article2')}>
                  <Text.Paragraph
                    className="!w-56 text-[#7b7b7b]"
                    content={TH.ARTICLES.article2.name}
                  />

                  <Icon
                    className="text-white bg-primary rounded-full mt-2 p-2 lg:mt-4"
                    name="long-arrow-alt-right"
                  />
                </div>
              </div>
            </div>

            <div
              className="flex row items-center justify-between border-primary border-b-[5px] cursor-pointer mx-4 py-7 lg:pt-8"
              onClick={() => onGoToBlog('article3')}>
              <div className="flex row items-center justify-between space-x-5 lg:space-x-20">
                <Text.Paragraph
                  className="w-40 font-bold !text-lg lg:w-64"
                  content={TH.ARTICLES.article3.name}
                />

                <Icon name="long-arrow-alt-right" size="lg" />
              </div>

              <Image className="lg:hidden" src="TrialHeadspace/article-mockup-mobile-3.png" />

              <Image className="hidden lg:block" src="TrialHeadspace/article-mockup-3.png" />
            </div>

            <div
              className="flex row items-center justify-between border-[#DEEAEA] border-b-[5px] cursor-pointer mx-4 py-7 lg:pt-8"
              onClick={() => onGoToBlog('article4')}>
              <div className="flex row items-center justify-between space-x-5 lg:space-x-20">
                <Text.Paragraph
                  className="w-40 font-bold !text-lg lg:w-64"
                  content={TH.ARTICLES.article4.name}
                />

                <Icon name="long-arrow-alt-right" size="lg" />
              </div>

              <Image className="lg:hidden" src="TrialHeadspace/article-mockup-mobile-4.png" />

              <Image className="hidden lg:block" src="TrialHeadspace/article-mockup-4.png" />
            </div>

            <div
              className="flex row items-center justify-between border-primary border-b-[5px] cursor-pointer mx-4 py-7 lg:pt-8"
              onClick={() => onGoToBlog('article5')}>
              <div className="flex row items-center justify-between space-x-5 lg:space-x-20">
                <Text.Paragraph
                  className="w-40 font-bold !text-lg lg:w-64"
                  content={TH.ARTICLES.article5.name}
                />

                <Icon name="long-arrow-alt-right" size="lg" />
              </div>

              <Image className="lg:hidden" src="TrialHeadspace/article-mockup-mobile-5.png" />

              <Image className="hidden lg:block" src="TrialHeadspace/article-mockup-5.png" />
            </div>

            <div
              className="flex row items-center justify-between border-[#DEEAEA] border-b-[5px] cursor-pointer mx-4 py-7 lg:pt-8"
              onClick={() => onGoToBlog('article6')}>
              <div className="flex row items-center justify-between space-x-5 lg:space-x-20">
                <Text.Paragraph
                  className="w-40 font-bold !text-lg lg:w-64"
                  content={TH.ARTICLES.article6.name}
                />

                <Icon name="long-arrow-alt-right" size="lg" />
              </div>

              <Image className="lg:hidden" src="TrialHeadspace/article-mockup-mobile-6.png" />

              <Image className="hidden lg:block" src="TrialHeadspace/article-mockup-6.png" />
            </div>
          </div>
        </div>
      </section>
      {/**LIFE ADVICE SECTION */}
      <section className="w-full pt-14 px-4">
        <div className="max-w-5xl text-center mx-auto">
          <Text.Heading
            className="max-w-3xl mx-auto"
            content="Life Advice for Any Relationship, Experience, or Goal"
            size={1}
          />

          <div className="flex flex-col items-center justify-between mt-12 lg:flex-row">
            <div className="lg:text-left">
              <Text.Heading content="Attachment Styles" size={3} />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article3.name}
                onClick={() => onGoToBlog('article3')}
              />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article1.name}
                onClick={() => onGoToBlog('article1')}
              />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article6.name}
                onClick={() => onGoToBlog('article6')}
              />

              <Text.Heading className="mt-12 lg:mt-14" content="Emotional Wellness" size={3} />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article4.name}
                onClick={() => onGoToBlog('article4')}
              />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article5.name}
                onClick={() => onGoToBlog('article5')}
              />

              <Text.Paragraph
                className="underline cursor-pointer mt-4 hover:font-bold"
                content={TH.ARTICLES.article2.name}
                onClick={() => onGoToBlog('article2')}
              />
            </div>

            <Image className="hidden lg:block" src="TrialHeadspace/life-advice-mockup.png" />
          </div>
        </div>
      </section>
    </>
  )
}
