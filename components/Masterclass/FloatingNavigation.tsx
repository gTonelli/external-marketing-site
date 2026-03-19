'use client'

import Link from 'next/link'
import ScrollProgress from '../ScrollProgress'
import { Section } from '../Section'
interface IFloatingNavigationProps {
  links: {
    label: string
    href: string
  }[]
}

export const FloatingNavigation = ({ links }: IFloatingNavigationProps) => {
  return (
    <Section
      className="sticky top-0 min-h-fit bg-white !p-0 z-[9999]"
      classNameInner="!min-w-full border-t border-b border-slate-300 border-1 !p-0 !m-0">
      <ScrollProgress />

      <div className="section-inner-wrapper flex justify-between py-4 mx-auto">
        {links.map((link, index) => (
          <div key={`floating-nav-link-${index}`} className="px-4">
            <Link href={link.href}>
              <strong>{link.label}</strong>
            </Link>
          </div>
        ))}
      </div>
    </Section>
  )
}
