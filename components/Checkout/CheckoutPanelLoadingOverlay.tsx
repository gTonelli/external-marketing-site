'use client'

type CheckoutPanelLoadingOverlayProps = {
  /** When true, a centered spinner covers the panel (e.g. until Stripe / PayPal is ready). */
  show: boolean
  children: React.ReactNode
  /** Minimum height so the overlay has room before content paints */
  minHeightClassName?: string
}

export function CheckoutPanelLoadingOverlay({
  show,
  children,
  minHeightClassName = 'min-h-[140px]',
}: CheckoutPanelLoadingOverlayProps) {
  return (
    <div className={`relative ${minHeightClassName}`}>
      {children}

      {show ? (
        <div
          className="absolute inset-0 z-10 flex items-center justify-center rounded-lg bg-white/75 backdrop-blur-[1px]"
          role="status"
          aria-live="polite"
          aria-label="Loading checkout">
          <div className="h-9 w-9 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      ) : null}
    </div>
  )
}
