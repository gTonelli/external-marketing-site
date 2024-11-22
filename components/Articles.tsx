// core
import Image from 'next/image'
import Link from 'next/link'
// components
import { faLongArrowAltRight } from '@awesome.me/kit-545b942488/icons/classic/solid'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// config
import { TRIAL_HEADSPACE as TH } from '@/app/(custom-layouts)/(no-nav)/dream-life/config'

export const Articles = () => {
  return (
    <>
      <section className="relative w-full pt-5 lg:pt-14">
        <Image
          alt="A vector blob image"
          tabIndex={-1}
          className="hidden absolute top-5 lg:block 2xl:left-60"
          src="/images/TrialHeadspace/eclipse-left.png"
          width={337}
          height={312}
        />

        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-center mt-10 lg:text-right lg:mt-0">Latest Articles</h2>

          <div className="mt-5 lg:mt-14">
            <div className="flex flex-col items-center space-y-5 md:justify-center md:space-x-5 md:space-y-0 md:flex-row">
              <div className="relative">
                <Image
                  alt="A man and a woman kissing."
                  className="lg:hidden"
                  src="/images/TrialHeadspace/article-mockup-mobile-1.png"
                  height={456}
                  width={343}
                />

                <Image
                  alt="A man and a woman kissing."
                  className="hidden lg:block"
                  src="/images/TrialHeadspace/article-mockup-1.png"
                  height={371}
                  width={486}
                />

                <Link
                  href={TH.ARTICLES['article1'].url}
                  className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-[15px] cursor-pointer mx-auto px-6 py-5 transition-all hover:no-underline hover:bg-gray-100
                              lg:-translate-x-0 lg:left-5 lg:px-5 lg:pt-6 lg:pb-4">
                  <p className="!w-56 text-[#7b7b7b]">{TH.ARTICLES.article1.name}</p>

                  <FontAwesomeIcon
                    className="text-white bg-primary rounded-full mt-2 p-2 lg:mt-4"
                    icon={faLongArrowAltRight}
                  />
                </Link>
              </div>

              <div className="relative">
                <Image
                  alt="A woman hugging a man from behind, both are smiling."
                  className="lg:hidden"
                  src="/images/TrialHeadspace/article-mockup-mobile-2.png"
                  height={463}
                  width={343}
                />

                <Image
                  alt="A woman hugging a man from behind, both are smiling."
                  className="hidden lg:block"
                  src="/images/TrialHeadspace/article-mockup-2.png"
                  height={370}
                  width={486}
                />

                <Link
                  href={TH.ARTICLES['article2'].url}
                  className="absolute bottom-5 left-1/2 transform -translate-x-1/2 bg-white rounded-[15px] cursor-pointer px-6 py-5 transition-all hover:no-underline hover:bg-gray-100
                              lg:-translate-x-0 lg:left-5 lg:px-5 lg:pt-6 lg:pb-4">
                  <p className="!w-56 text-[#7b7b7b]">{TH.ARTICLES.article2.name}</p>

                  <FontAwesomeIcon
                    className="text-white bg-primary rounded-full mt-2 p-2 lg:mt-4"
                    icon={faLongArrowAltRight}
                  />
                </Link>
              </div>
            </div>

            <Link
              href={TH.ARTICLES['article3'].url}
              className="flex row items-center justify-between border-primary border-b-[5px] cursor-pointer mx-4 mt-1 py-5 transition-all hover:bg-gray-100 lg:px-4 lg:pt-8">
              <div className="flex row items-center justify-between space-x-5 lg:space-x-20">
                <p className="w-40 font-bold !text-lg lg:w-64">{TH.ARTICLES.article3.name}</p>

                <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" />
              </div>

              <Image
                alt="A woman with her arms spread piggybacking with a man."
                className="lg:hidden"
                src="/images/TrialHeadspace/article-mockup-mobile-3.png"
                height={100}
                width={100}
              />

              <Image
                alt="A woman with her arms spread piggybacking with a man."
                className="hidden lg:block"
                src="/images/TrialHeadspace/article-mockup-3.png"
                height={100}
                width={160}
              />
            </Link>

            <Link
              href={TH.ARTICLES['article4'].url}
              className="flex row items-center justify-between border-grey-7 border-b-[5px] cursor-pointer mx-4 py-5 transition-all hover:bg-gray-100 lg:px-4 lg:pt-8">
              <div className="flex row items-center justify-between space-x-5 lg:space-x-20">
                <p className="w-40 font-bold !text-lg lg:w-64">{TH.ARTICLES.article4.name}</p>

                <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" />
              </div>

              <Image
                alt="A woman sitting in a chair looking unsure."
                className="lg:hidden"
                src="/images/TrialHeadspace/article-mockup-mobile-4.png"
                height={100}
                width={100}
              />

              <Image
                alt="A woman sitting in a chair looking unsure."
                className="hidden lg:block"
                src="/images/TrialHeadspace/article-mockup-4.png"
                height={100}
                width={160}
              />
            </Link>

            <Link
              href={TH.ARTICLES['article5'].url}
              className="flex row items-center justify-between border-primary border-b-[5px] cursor-pointer mx-4 py-5 transition-all hover:bg-gray-100 lg:px-4 lg:pt-8">
              <div className="flex row items-center justify-between space-x-5 lg:space-x-20">
                <p className="w-40 font-bold !text-lg lg:w-64">{TH.ARTICLES.article5.name}</p>

                <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" />
              </div>

              <Image
                alt="Two men hugging and smiling at each other."
                className="lg:hidden"
                src="/images/TrialHeadspace/article-mockup-mobile-5.png"
                height={100}
                width={100}
              />

              <Image
                alt="Two men hugging and smiling at each other."
                className="hidden lg:block"
                src="/images/TrialHeadspace/article-mockup-5.png"
                height={100}
                width={160}
              />
            </Link>

            <Link
              href={TH.ARTICLES['article6'].url}
              className="flex row items-center justify-between border-grey-7 border-b-[5px] cursor-pointer mx-4 py-5 transition-all hover:bg-gray-100 lg:px-4 lg:pt-8">
              <div className="flex row items-center justify-between space-x-5 lg:space-x-20">
                <p className="w-40 font-bold !text-lg lg:w-64">{TH.ARTICLES.article6.name}</p>

                <FontAwesomeIcon icon={faLongArrowAltRight} size="lg" />
              </div>

              <Image
                alt="A man hugging a woman from behind and smiling at her."
                className="lg:hidden"
                src="/images/TrialHeadspace/article-mockup-mobile-6.png"
                height={100}
                width={100}
              />

              <Image
                alt="A man hugging a woman from behind and smiling at her."
                className="hidden lg:block"
                src="/images/TrialHeadspace/article-mockup-6.png"
                height={100}
                width={160}
              />
            </Link>
          </div>
        </div>
      </section>
      {/**LIFE ADVICE SECTION */}
      <section className="w-full pt-14 px-4">
        <div className="max-w-5xl text-center mx-auto">
          <h2 className="max-w-3xl mx-auto">
            Life Advice for Any Relationship, Experience, or Goal
          </h2>

          <div className="flex flex-col items-center justify-between mt-12 lg:flex-row">
            <div className="lg:text-left">
              <h3>Attachment Styles</h3>

              <Link
                href={TH.ARTICLES['article3'].url}
                className="block underline cursor-pointer mt-4 hover:text-primary">
                {TH.ARTICLES.article3.name}
              </Link>

              <Link
                href={TH.ARTICLES['article1'].url}
                className="block underline cursor-pointer mt-4 hover:text-primary">
                {TH.ARTICLES.article1.name}
              </Link>

              <Link
                href={TH.ARTICLES['article6'].url}
                className="block underline cursor-pointer mt-4 hover:text-primary">
                {TH.ARTICLES.article6.name}
              </Link>

              <h3 className="mt-12 lg:mt-14">Emotional Wellness</h3>

              <Link
                href={TH.ARTICLES['article4'].url}
                className="block underline cursor-pointer mt-4 hover:text-primary">
                {TH.ARTICLES.article4.name}
              </Link>

              <Link
                href={TH.ARTICLES['article5'].url}
                className="block underline cursor-pointer mt-4 hover:text-primary">
                {TH.ARTICLES.article5.name}
              </Link>

              <Link
                href={TH.ARTICLES['article2'].url}
                className="block underline cursor-pointer mt-4 hover:text-primary">
                {TH.ARTICLES.article2.name}
              </Link>
            </div>

            <Image
              alt="A man and a woman looking at PDS content"
              className="hidden lg:block"
              src="/images/TrialHeadspace/life-advice-mockup.png"
              width={502}
              height={595}
            />
          </div>
        </div>
      </section>
    </>
  )
}
