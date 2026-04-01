'use client'

import { useState } from 'react'
import Image from 'next/image'
import cx from 'classnames'

interface ICourse {
  title: string
  thumbnail: string
}

interface ICategory {
  label: string
  courses: ICourse[]
}

interface ICourseLibraryProps {
  title: string
  subtitle: string
  categories: ICategory[]
}

export const CourseLibrary = ({ title, subtitle, categories }: ICourseLibraryProps) => {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeCourses = categories[activeIndex]?.courses ?? []

  return (
    <div>
      <h2>{title}</h2>

      <p className="text-gray-600 mb-8">{subtitle}</p>

      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((category, index) => (
          <button
            key={`course_pill_${index}`}
            onClick={() => setActiveIndex(index)}
            className={cx(
              'rounded-full px-5 py-2 text-sm font-semibold transition-colors cursor-pointer border',
              index === activeIndex
                ? 'bg-primary text-white border-primary'
                : 'bg-white text-gray-700 border-gray-300 hover:border-gray-400'
            )}>
            {category.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {activeCourses.map((course, index) => (
          <div
            key={`course_card_${activeIndex}_${index}`}
            className="flex items-center gap-4 bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm p-2">
            <div className="w-36 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-gray-200 lg:w-44 lg:h-24">
              {course.thumbnail && (
                <Image
                  src={course.thumbnail}
                  alt={course.title}
                  width={112}
                  height={80}
                  className="w-full h-auto"
                />
              )}
            </div>

            <div className="text-left">
              <p className="font-semibold mb-1 text-sm lg:text-base">{course.title}</p>

              <p className="text-gray-500 text-sm mb-0">Thais Gibson</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
