export type TFonts =
  // Effra
  | 'font-effra'

  // Source Serif Pro
  | 'font-ssp'
  | 'font-sspb'

export type TStyle = 'ap' | 'da' | 'fa' | 'sa'

/**
 * Window width breakpoints
 */
export type TBreakpoints = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export type TOpacityValues =
  | 'opacity-0'
  | 'opacity-5'
  | 'opacity-10'
  | 'opacity-20'
  | 'opacity-25'
  | 'opacity-30'
  | 'opacity-40'
  | 'opacity-50'
  | 'opacity-60'
  | 'opacity-70'
  | 'opacity-75'
  | 'opacity-80'
  | 'opacity-90'
  | 'opacity-95'
  | 'opacity-100'

export type TZIndexValues =
  | 'z-0'
  | 'z-5'
  | 'z-10'
  | 'z-15'
  | 'z-20'
  | 'z-25'
  | 'z-30'
  | 'z-35'
  | 'z-40'
  | 'z-45'
  | 'z-50'
  | 'z-55'
  | 'z-60'
  | 'z-65'

export type TVariantVideoData = {
  key: string
  videoId: string
}

export interface IStrapiThumbnail {
  id: number
  attributes: {
    name: string
    alternativeText: string
    url: string
    width: number
    height: number
  }
}

export interface IStrapiFetchProps<T> {
  data: T
  meta: {
    pagination: {
      page: number
      pageSize: number
      pageCount: number
      total: number
    }
  }
}
export interface IStrapiResponse<T> {
  id: string
  attributes: T
}
