// core
import Image from 'next/image'
// config
import { IAT_COPY as IAT } from '@/app/(default-layout)/iat/config'

export const IATCertificationCoaches = () => {
  return (
    <div className="mt-16 mb-8 lg:grid lg:grid-cols-3 lg:gap-5">
      {IAT.certification.coaches.map((coach, index) => {
        return (
          <div key={`audience-${index}`} className="mt-4 lg:mt-0">
            <Image
              alt={`IAT Coach - ${coach.title}`}
              className="w-3/4 mx-auto max-w-64"
              src={`/images/IATPage/iat-coaches-${index + 1}.png`}
              width={256}
              height={247}
            />

            <p className="font-bold tracking-0.33 my-4">{coach.title}</p>

            <p>{coach.copy}</p>
          </div>
        )
      })}
    </div>
  )
}
