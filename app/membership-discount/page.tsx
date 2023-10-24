'use client'

// core
import React, { useCallback } from 'react'
import { useRouter } from 'next/navigation'
// components
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
import { Button } from '@/components/Button/Button'
import { List } from '@/components/List'
import { FLASH_SALE_PAGE } from './config'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
// utils
import { ERoutes } from '@/utils/constants'

export default function FlashSalePage() {
  const page_name = `Flash Sale` as Pages
  // ================= Hooks =======================
  const router = useRouter()

  // ================= Events =======================
  const onGoToCheckout = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      Mixpanel.track.ButtonClicked({
        button_label: event.currentTarget.innerText,
        page_name: page_name,
      })

      router.push(ERoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION_59_DOLLAR)
    },
    [page_name]
  )

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="max-w-5xl flex flex-col mx-auto px-4 py-8 md:flex-row md:py-16">
        <div className="w-full flex flex-col items-center flex-1 text-center md:items-start md:text-left">
          <Text.Heading className="text-h1 leading-12" content="Begin Your Journey Today With" />

          <Image className="w-full mt-4 mb-8 sm:w-[60%]" src="thais-gibson-signature.svg" />

          <Button
            className="bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
            label="UNLOCK MY POTENTIAL NOW AT 40% OFF"
            onClick={onGoToCheckout}
          />
        </div>

        <div className="flex justify-center items-center flex-1">
          <Image className="mt-4 md:mt-0" src="FlashSalePage/emotional-mastery-macbook.jpg" />
        </div>
      </section>

      {/* Brand Logo Section */}
      <section className="w-full bg-gray-bg-primary my-4 p-4">
        <div className="max-w-5xl flex justify-between items-center flex-wrap mx-auto">
          {FLASH_SALE_PAGE.BRAND_LOGOS.map((logo, idx) => (
            <Image key={idx} className="w-[30%] px-1 md:w-auto" src={`Logo_Brand/${logo}`} />
          ))}
        </div>
      </section>

      {/* Membership Section */}
      <section>
        <div className="max-w-5xl flex flex-col items-center my-16 px-4 mx-auto">
          <Text.Heading
            className="text-center my-8"
            content="Here's What You Get With Your Membership"
          />

          <div className="flex flex-col my-8 md:flex-row">
            <div className="flex-1 md:pr-6">
              {FLASH_SALE_PAGE.MEMBERSHIP.items.map((item, idx) => (
                <Text key={idx} useMD className="mb-4" content={item} />
              ))}
            </div>

            <div className="flex justify-center items-center flex-1">
              <Image src="FlashSalePage/mobile-tablet-pds.jpg" />
            </div>
          </div>

          <div className="max-w-3xl my-8 mx-auto">
            <Text.Heading
              className="text-center my-4"
              content="Sign up for your All-Access Pass at 40% off today to unlock:"
            />

            {FLASH_SALE_PAGE.MEMBERSHIP.benefits.map((bullet_point, idx) => (
              <List
                key={`benefit_${idx}`}
                className="flex items-start mb-4"
                classNameIcon="text-3xl !text-primary pt-[3px] pr-4"
                classNameListItems="text-left !text-lg !leading-6"
                iconName="circle-check"
                iconType="regular"
                listItems={[bullet_point]}
              />
            ))}
          </div>

          <Text.Paragraph
            className="text-center"
            content="By signing up today, you'll lock in the rate at 40% off for life! This offer is only valid for a few days for our anniversary celebration."
          />

          <Button
            className="w-fit bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg my-8 hover:!text-white"
            label="I'M READY TO LEVEL UP MY LIFE"
            onClick={onGoToCheckout}
          />
        </div>
      </section>

      {/* Dream Life Section */}
      <section className="max-w-5xl flex flex-col mx-auto my-8 px-4 md:flex-row">
        <div className="flex-1">
          <Text.Heading className="mb-4" content="3 Simple Steps To Building Your Dream Life!" />

          <Text.Paragraph className="mb-4" content="No idea where to start? No worries!" />

          {FLASH_SALE_PAGE.DREAM_LIFE.items.map((item, idx) => (
            <Text key={idx} useMD className="mb-4 leading-7" content={item} />
          ))}

          <Button
            className="w-fit bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg my-8 hover:!text-white"
            label="I'M READY FOR BETTER RELATIONSHIPS NOW"
            onClick={onGoToCheckout}
          />
        </div>

        <div className="flex-1 flex flex-col justify-between items-center flex-wrap px-4">
          <div className="max-w-[400px] flex-1">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="rounded-xl mb-4"
              src="https://storage.googleapis.com/pds_videos/Secondary-Sales-Page_Dashboard.mp4">
              Your browser does not support this video.
            </video>
          </div>
          <div className="max-w-[400px] flex-1">
            <Image className="p-0" src="FlashSalePage/emotional-mastery-workbooks.jpg" />
          </div>
        </div>
      </section>

      {/* What's Inside Section */}
      <section className="max-w-5xl mx-auto my-16 px-4">
        <Text.Heading className="mb-4" content="What's Inside?" />

        <Text.Paragraph
          className="mb-4"
          content="If you find yourself sometimes having unhealthy ways of operating in relationships like:"
        />

        <div className="grid grid-cols-12 gap-4 my-8">
          {FLASH_SALE_PAGE.INSIDE.items.map((item, idx) => (
            <div key={idx} className="col-span-12 md:col-span-6 lg:col-span-3 flex flex-col">
              <Image className="self-start h-12 mb-4" src={`FlashSalePage/${item.icon}`} />

              <Text.Paragraph className="font-bold mb-4" content={item.title} />

              <Text.Paragraph className="mb-4" content={item.content} />
            </div>
          ))}
        </div>
      </section>

      {/* Join Community Section */}
      <section className="max-w-5xl mx-auto my-16 px-4">
        <Text.Heading
          className="mb-8"
          content="Join Thousands Of Members In Our Global Community"
        />

        <div className="flex flex-col md:flex-row">
          <div className="flex justify-center items-center flex-1">
            <div className="flex-1">
              <video
                autoPlay
                loop
                muted
                playsInline
                className="rounded-xl"
                src="https://storage.googleapis.com/pds_videos/Secondary-Sales-Page_Dashboard.mp4">
                Your browser does not support this video.
              </video>
            </div>
          </div>

          <div className="flex flex-col justify-center items-center flex-1 mt-8 md:items-start md:ml-16 md:mt-0">
            <Text.Paragraph
              className="text-center mb-8 md:text-left"
              content={`And step into the version of you with a love life based on mutual respect, deep intimacy, and fulfillment.\n\nIt is 100% possible.\n\nUnlock your 40% off today!`}
            />

            <Button
              className="w-fit bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
              label="I'M READY FOR LOVE"
              onClick={onGoToCheckout}
            />
          </div>
        </div>
      </section>

      {/* Join Banner */}
      <section className="w-full flex flex-col justify-center items-center bg-blue-lightest mt-8 py-16">
        <Image className="w-[76px] h-[76px]" src="logo.svg" />

        <Text.Heading className="text-center my-8" content="Join The Personal Development School" />

        <Button
          className="w-fit bg-gradient-to-b from-purple-medium to-purple-dark border-none drop-shadow-lg hover:!text-white"
          label="I CLAIM MY 40% OFF!"
          onClick={onGoToCheckout}
        />
      </section>
    </main>
  )
}
