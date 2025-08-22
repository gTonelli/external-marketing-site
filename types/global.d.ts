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
    gtag: any
    fbq: any
    dataLayer: any
    hj: any
  }
}

export {}
