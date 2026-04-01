'use client'

import Link from 'next/link'
import ScrollProgress from '../ScrollProgress'
import { Section } from '../Section'
import { Button } from '../Button/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@awesome.me/kit-545b942488/icons/classic/solid'

interface IFloatingNavigationProps {
  links: {
    label: string
    href: string
  }[]
  ctaLabel?: string
  ctaHref?: string
}

export const FloatingNavigation = ({ links, ctaLabel, ctaHref }: IFloatingNavigationProps) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const href = e.target.value
    if (href && typeof window !== 'undefined') {
      window.location.hash = href.replace('#', '')
    }
  }

  return (
    <>
      <div className="sticky bg-white top-0 z-[999]">
        <ScrollProgress />
      </div>

      <Section
        className="lg:sticky lg:top-1 min-h-fit bg-white !p-0 z-[998]"
        classNameInner="!min-w-full border-t border-b border-slate-300 !p-0 !m-0">
        <div className="section-inner-wrapper mx-auto">
          <div className="hidden lg:flex justify-between items-center py-4">
            {links.map((link, index) => (
              <div key={`floating-nav-link-${index}`} className="px-4">
                <Link href={link.href}>
                  <strong>{link.label}</strong>
                </Link>
              </div>
            ))}

            {ctaLabel && ctaHref && (
              <div className="px-4">
                <Link href={ctaHref}>
                  <Button className="masterclass-yellow-cta" label={ctaLabel} />
                </Link>
              </div>
            )}
          </div>

          <div className="lg:hidden relative">
            <select
              defaultValue={links[0]?.href}
              onChange={handleSelectChange}
              className="w-full appearance-none border-0 px-6 py-4 pr-12 text-primary font-bold bg-white focus:outline-none">
              {links.map((link, index) => (
                <option key={`floating-nav-select-${index}`} value={link.href}>
                  {link.label}
                </option>
              ))}
            </select>

            <FontAwesomeIcon
              icon={faChevronDown}
              className="pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 text-slate-500 text-sm"
            />
          </div>
        </div>
      </Section>
    </>
  )
}
