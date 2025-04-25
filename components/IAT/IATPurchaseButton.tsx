'use client'

// components
import { Button } from '../Button/Button'

export const IATPurchaseButton = ({ label = 'GET STARTED NOW' }) => (
  <Button
    className="trial-btn mt-8 lg:mt-13"
    label={label}
    onClick={() => {
      document
        .querySelector('#click-purchase-target')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }}
  />
)
