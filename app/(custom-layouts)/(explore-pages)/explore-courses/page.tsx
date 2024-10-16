'use client'

// core
import React, { useEffect, useState } from 'react'
// components
import { Text } from '@/components/Text/Text'
import { Image } from '@/components/Image'
import { Page } from '@/components/Page'
import { Button } from '@/components/Button/Button'
import { Section } from '@/components/Section'
// config
import { EXPLORE_COURSES_PAGE as EP } from './config'
// libraries
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@awesome.me/kit-545b942488/icons/classic/regular'
// modules
import Mixpanel, { Pages } from '@/modules/Mixpanel'
// utils
import { EExternalRoutes } from '@/utils/constants'
import { EWindowWidth } from '@/utils/constants'
import { useWindowWidth } from '@/utils/hooks'

export default function ExploreCoursesPage() {
  const page_name = 'Explore Courses Page' as Pages
  // ==================== Hooks ====================
  const windowWidth = useWindowWidth().windowWidth
  // ==================== State ====================
  const showFooterThreshold = windowWidth < EWindowWidth.lg ? 0.97 : 0.9
  const [showFooter, setShowFooter] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Fearful Avoidant')
  const [selectedCourses, setSelectedCourses] = useState<
    { title: string; thumbnail_url: string; description: string }[]
  >([])

  const onSelectCategory = (category: string) => {
    setSelectedCategory(category)
    const selectedCategory = EP.COURSES.find((c) => c.categoryTitle === category)
    setSelectedCourses(selectedCategory?.courses ?? [])
  }

  useEffect(() => {
    onSelectCategory('Fearful Avoidant')

    const onScroll = () => {
      const scrollPosition = window.scrollY
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      const shouldShow = scrollPosition / maxScroll >= showFooterThreshold
      setShowFooter(shouldShow)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const onGoToCheckout = (event: React.MouseEvent<Element, MouseEvent>) => {
    Mixpanel.track.ButtonClicked({
      button_label: (event.target as HTMLButtonElement).innerText,
      page_name: page_name,
    })

    window.location.assign(EExternalRoutes.THINKIFIC_CHECKOUT_REGULAR_SUBSCRIPTION)
  }

  return (
    <Page className="relative w-full" page_name={page_name}>
      <Section className="w-full lg:!pt-16">
        <div className="text-left text-primary cursor-pointer" onClick={() => history.back()}>
          <div>
            <FontAwesomeIcon className="inline" icon={faArrowLeft} />

            <Text.Paragraph className="inline font-bold ml-3" content="GO BACK" />
          </div>
        </div>

        <Text.Heading content={EP.title} size={1} />

        <Text.Paragraph useMD className="max-w-3xl mx-auto mt-3" content={EP.copy} />

        {/** Dropdown for selecting categories on mobile */}
        <div className="relative text-left mt-4 md:hidden">
          <label className="font-bold" htmlFor="courseCategory">
            Filter Category
          </label>

          <select
            className="block w-full rounded-md bg-white text-gray-700 border border-primary mt-2 py-2 px-3 pr-10 appearance-none leading-tight focus:outline-none focus:shadow-outline"
            id="courseCategory"
            value={selectedCategory}
            onChange={(e) => onSelectCategory(e.target.value)}>
            {EP.COURSES.map((course, index) => (
              <option key={`category_${index}`} value={course.categoryTitle}>
                {course.categoryTitle}
              </option>
            ))}
          </select>
        </div>

        <div className="hidden mt-12 md:grid sm:grid-cols-3 lg:grid-cols-4 md:gap-4">
          {EP.COURSES.map((course, index) => (
            <div
              key={`category_${index}`}
              className={`rounded-full border-black border-2 px-6 py-2 ${
                selectedCategory === course.categoryTitle &&
                'bg-primary font-bold text-white border-white'
              } hover:cursor-pointer`}
              onClick={() => onSelectCategory(course.categoryTitle)}>
              <Text.Paragraph content={course.categoryTitle} />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 mt-11">
          {selectedCourses.map((course, index) => (
            <div key={`course_${index}`}>
              <Image alt={course.title} src={course.thumbnail_url} />

              <Text.Paragraph className="font-bold text-left mt-7" content={course.title} />

              <Text.Paragraph className="text-left mt-7" content={course.description} />
            </div>
          ))}
        </div>
      </Section>
      {!showFooter && (
        <Section className="anim-fade-in-secondary fixed bottom-0 bg-black !py-4 z-5">
          <div className="flex flex-col justify-between space-y-3 lg:flex-row lg:space-y-0">
            <div className="max-w-lg text-white lg:text-left">
              <Text.Paragraph content={EP.JOURNEY.copy} />
            </div>

            <div className="flex flex-col space-y-4">
              <Button className="border-primary" label="JOIN TODAY" onClick={onGoToCheckout} />
            </div>
          </div>
        </Section>
      )}
    </Page>
  )
}
