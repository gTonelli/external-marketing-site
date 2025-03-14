'use client'

// components
import { ButtonCheckout, IButtonCheckoutProps } from '@/components/Button/variants/ButtonCheckout'
// utils
import { EExternalRoutes } from '@/utils/constants'
import { getSplitTest, TSplitTestKey } from '@/utils/functions'
import { ISplitTest } from '@/utils/interfaces'

interface IButtonCheckoutSplitTest extends Omit<ISplitTest, 'key'>, IButtonCheckoutProps {
  experimentKey: TSplitTestKey
  variantUrl: EExternalRoutes
  controlUrl?: EExternalRoutes
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
  const isVariant = getSplitTest({ key: experimentKey, experimentName, useCookies })

  return (
    <ButtonCheckout href={isVariant ? variantUrl : controlUrl} {...otherProps}>
      {otherProps.children}
    </ButtonCheckout>
  )
}
