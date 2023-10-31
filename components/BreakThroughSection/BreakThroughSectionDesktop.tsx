import Image from 'next/image'
import { BREAKTHROUGH_SEGMENTS } from './config'

export const BreakThroughSectionDesktop = () => {
  return (
    <div className="hidden mt-4 lg:flex max-w-[926px]">
      {/* FLEX SECTION */}
      {BREAKTHROUGH_SEGMENTS.map((breakThroughs, index) => (
        <div key={`breakthrough_${index}`} className="basis-1/3">
          <div className="flex flex-col">
            <div className="mx-auto">
              <Image
                alt={breakThroughs.alt}
                className="w-40"
                priority
                src={breakThroughs.image}
                width={160}
                height={160}
              />
            </div>

            <div>
              <span className="uppercase tracking-33">{breakThroughs.title}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
