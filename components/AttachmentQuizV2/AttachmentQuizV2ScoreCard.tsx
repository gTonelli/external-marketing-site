'use client'

// core
import { useEffect, useState } from 'react'
// libraries
import { orderBy } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@awesome.me/kit-545b942488/icons/classic/solid'

type TAttachmentStyle = {
  style: string
  score: string
  color: string
}

export const AttachmentQuizV2ScoreCard = ({
  style,
  scores,
}: {
  style: string
  scores: string[]
}) => {
  const [styles, setStyles] = useState<TAttachmentStyle[]>([])

  useEffect(() => {
    const styles = orderBy(
      [
        { style: 'Fearful Avoidant', score: scores[0], color: '#EBC1C7' },
        { style: 'Anxious Preoccupied', score: scores[1], color: '#FCE1C7' },
        { style: 'Dismissive Avoidant', score: scores[2], color: '#CBE1F7' },
        { style: 'Secure', score: scores[3], color: '#C9D9D9' },
      ],
      ['score'],
      ['desc']
    )
    setStyles(styles)
  }, [scores])

  return (
    <div className="bg-white rounded-20 border border-primary-light text-center p-6">
      <p className="mb-0">Your Primary Attachment Style is</p>

      <h3 className="text-primary mb-6">{style}</h3>

      {styles.map((data, index) => (
        <div key={`style_${index}`} className="text-left mb-4">
          <p className="mb-1 text-sm leading-[18px]">
            {data.style} {data.score}%
          </p>

          <div className="relative rounded-full overflow-hidden w-full h-3 bg-gray-lightest">
            <div
              className={`absolute top-0 left-0 h-full`}
              style={{ backgroundColor: data.color, width: `${data.score}%` }}
            />
          </div>
        </div>
      ))}

      <div className="bg-[#F1F2F4] rounded-lg p-2 grid grid-cols-[16px_1fr] gap-2">
        <FontAwesomeIcon className="text-primary" icon={faInfoCircle} />

        <p className="text-xs leading-4 text-left mb-0">
          Here are the results of your quiz. Based on your answers, you might have traits of a
          secondary attachment style but one primary attachment style.
        </p>
      </div>
    </div>
  )
}
