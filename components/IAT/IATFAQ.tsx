// components
import { Faq } from '../Faq/Faq'
// config
import { IAT_COPY as IAT } from '@/app/(default-layout)/iat/config'

export const IATFAQ = () => (
  <Faq className="bg-transparent py-0" classNameHeading="text-center" faq={IAT.faq} />
)
