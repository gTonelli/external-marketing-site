'use client'

import { Section } from '@/components/Section'
// modules
import { Storage } from '@/modules/Storage'

export const SimplifiedFAHeader = () => {
  const userFirstName = Storage.get('userFirstName')

  return (
    <Section classNameInner="max-w-4xl mx-auto">
      <h1 className="mb-4">You're a Fearful Avoidant!</h1>

      <p className="mb-8">Your Report Is On Its Way!</p>

      <h2>
        {userFirstName ? `Congratulations ${userFirstName}!` : 'Congratulations!'} You're 1 Step
        Away To Having A Healthy, Loving Relationship – Without Being Fearful!
      </h2>
    </Section>
  )
}
