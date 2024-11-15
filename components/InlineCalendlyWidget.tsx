'use client'

import { InlineWidget } from 'react-calendly'

export const InlineCalendlyWidget = () => {
  return (
    <InlineWidget
      pageSettings={{
        hideEventTypeDetails: true,
        hideGdprBanner: true,
        primaryColor: '#8a50a0',
      }}
      url="https://calendly.com/info-pds/call-with-melanie-pds"
    />
  )
}
