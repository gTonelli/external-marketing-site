'use client'

// core
import { useEffect, useState } from 'react'
// components
import { ButtonCheckout, IButtonCheckoutProps } from '@/components/Button/variants/ButtonCheckout'
// utils
import { getSplitTest, TSplitTestKey } from '@/utils/functions'
import { ISplitTest } from '@/utils/interfaces'

interface IButtonCheckoutSplitTest extends Omit<ISplitTest, 'key'>, IButtonCheckoutProps {
  experimentKey: TSplitTestKey
  variantUrl: string
  controlUrl?: string
  useCookies?: boolean
}

export const ButtonCheckoutSplitTest = ({
  experimentKey,
  experimentName,
  controlUrl,
  variantUrl,
  useCookies = true,
  ...otherProps
}: IButtonCheckoutSplitTest) => {
  const [isVariant, setIsVariant] = useState<boolean | undefined>()

  useEffect(() => {
    setIsVariant(getSplitTest({ key: experimentKey, experimentName, useCookies }))
  }, [experimentKey, experimentName, setIsVariant, useCookies])

  return (
    <ButtonCheckout href={isVariant ? variantUrl : controlUrl} {...otherProps}>
      {otherProps.children}
    </ButtonCheckout>
  )
}
