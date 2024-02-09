import { effra, sourceSerifPro } from '@/fonts'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'
import { IDefaultWrapperProps } from '..'

import '@/app/globals.css'

export const LayoutWrapper = ({ children }: IDefaultWrapperProps) => {
  return (
    <html lang="en" className={`${effra.variable} ${sourceSerifPro.variable}`}>
      {/* HYROS */}
      <Script
        defer
        type="text/javascript"
        src="https://t.personaldevelopmentschool.com/v1/lst/universal-script?ph=b8a3426fb8e80314f3ba1bbeb78db76454a57084d1e165ba830f52cda229dd6b&tag=!clicked"
        strategy="lazyOnload"
      />

      <Script defer id="hotjar-script" type="text/javascript" strategy="lazyOnload">
        {`
            (function(h,o,t,j,a,r){
                h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                h._hjSettings={hjid:1654590,hjsv:6};
                a=o.getElementsByTagName('head')[0];
                r=o.createElement('script');r.async=1;
                r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                a.appendChild(r);
            })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
          `}
      </Script>

      <body className="relative">
        <main className="flex flex-col min-h-screen relative bg-white overflow-x-hidden base-typography lg:overflow-x-visible">
          {children}
        </main>
      </body>

      <GoogleTagManager gtmId="GTM-T49JFVN" />
    </html>
  )
}
