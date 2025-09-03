declare global {
  interface Window {
    TriplePixelData?: {
      TripleName: string
      ver: string
      plat: string
      isHeadless: boolean
    }
    TriplePixel?: (event: string, props?: any) => string
    TripleWhaleReady?: boolean
    gtag?: (...args: any[]) => void
    fbq?: (...args: any[]) => void
    dataLayer?: Record<string, any>[]
    hj?: (...args: any[]) => void
  }
}

export {}
