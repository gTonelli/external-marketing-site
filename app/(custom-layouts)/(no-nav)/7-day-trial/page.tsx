// core
import { Metadata } from 'next'
// components
import DreamLifePage from '../dream-life/page'
import { metadata as _metadata } from '../dream-life/page'

export const metadata: Metadata = _metadata

export default function TrialPage() {
  return <DreamLifePage />
}
