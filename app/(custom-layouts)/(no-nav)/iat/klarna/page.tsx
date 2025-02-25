// core
import { metadata as _metadata } from '../page'
// components
import { IATPage } from '@/components/IAT/IATPage'

export const metadata = _metadata

export default function IATSalePage() {
  return <IATPage showKlarna page_name="External IAT Page (Klarna)" />
}
