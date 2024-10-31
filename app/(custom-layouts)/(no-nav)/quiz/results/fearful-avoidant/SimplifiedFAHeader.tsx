'use client'

import { Section } from '@/components/Section'
// modules
import { Storage } from '@/modules/Storage'

export const SimplifiedFAHeader = () => {
  const userFirstName = Storage.get('userFirstName')

  return (
    <Section classNameInner="max-w-4xl mx-auto">
      <h1 className="text-primary mb-4">You're a Fearful Avoidant!</h1>

      <p className="mb-8">Your report is on its way! Check your email inbox.</p>

      <h2>
        {userFirstName ? `Congratulations ${userFirstName}!` : 'Congratulations!'} You're 1 Step
        Away To Having Healthy, Loving Relationships – Without Being Fearful!
      </h2>
    </Section>
  )
}
