import { effra, sourceSerifPro } from '@/fonts'
import { GoogleTagManager } from '@next/third-parties/google'
import Script from 'next/script'
import { IDefaultWrapperProps } from '..'
import { GoogleAdsTag } from '../GoogleAdsTag'

import '@/app/globals.css'

export const LayoutWrapper = ({ children }: IDefaultWrapperProps) => {
  return (
    <html lang="en" className={`${effra.variable} ${sourceSerifPro.variable}`}>
      {/* Preconnect for Triple Whale */}
      <link
        rel="preconnect dns-prefetch"
        href="https://api.config-security.com/"
        crossOrigin="anonymous"
      />
      <link
        rel="preconnect dns-prefetch"
        href="https://conf.config-security.com/"
        crossOrigin="anonymous"
      />

      {/* TRIPLE WHALE */}
      <Script
        id="triple-whale-pixel"
        strategy='beforeInteractive'
        dangerouslySetInnerHTML={{
          __html: `
            window.TriplePixelData = {
              TripleName: "university.personaldevelopmentschool.com",
              ver: "2.17",
              plat: "stripe",
              isHeadless: true
            };
            
            (function(W, H, A, L, E, _, B, N) {
              function O(U, T, P, H, R) {
                void 0 === R && (R = !1);
                H = new XMLHttpRequest;
                P ? (H.open("POST", U, !0), H.setRequestHeader("Content-Type", "text/plain")) : H.open("GET", U, !0);
                H.send(JSON.stringify(P || {}));
                H.onreadystatechange = function() {
                  4 === H.readyState && 200 === H.status ? 
                    (R = H.responseText, U.includes("/first") ? eval(R) : P || (N[B] = R)) : 
                    (299 < H.status || H.status < 200) && T && !R && (R = !0, O(U, T - 1, P))
                }
              }
              
              if (N = window, !N[H + "sn"]) {
                N[H + "sn"] = 1;
                L = function() {
                  return Date.now().toString(36) + "_" + Math.random().toString(36)
                };
                
                try {
                  A.setItem(H, 1 + (0 | A.getItem(H) || 0));
                  (E = JSON.parse(A.getItem(H + "U") || "[]")).push({
                    u: location.href,
                    r: document.referrer,
                    t: Date.now(),
                    id: L()
                  });
                  A.setItem(H + "U", JSON.stringify(E))
                } catch (e) {}
                
                var i, m, p;
                A.getItem('"!nC\`') || (_ = A, A = N, A[H] || (E = A[H] = function(t, e, a) {
                  return void 0 === a && (a = []), "State" == t ? E.s : (W = L(), (E._q = E._q || []).push([W, t, e].concat(a)), W)
                }, E.s = "Installed", E._q = [], E.ch = W, B = "configSecurityConfModel", N[B] = 1, O("https://conf.config-security.com/model", 5), i = L(), m = A[atob("c2NyZWVu")], _.setItem("di_pmt_wt", i), p = {
                  id: i,
                  action: "profile",
                  avatar: _.getItem("auth-security_rand_salt_"),
                  time: m[atob("d2lkdGg=")] + ":" + m[atob("aGVpZ2h0")],
                  host: A.TriplePixelData.TripleName,
                  plat: A.TriplePixelData.plat,
                  url: window.location.href.slice(0, 500),
                  ref: document.referrer,
                  ver: A.TriplePixelData.ver
                }, O("https://api.config-security.com/event", 5, p), O("https://api.config-security.com/first?host=university.personaldevelopmentschool.com&plat=stripe", 5)))
              }
            })("", "TriplePixel", localStorage);
            
            // Mark TripleWhale as ready
            window.TripleWhaleReady = true;
          `
        }}
      />

      {/* HYROS */}
      <Script
        defer
        type="text/javascript"
        src="https://t.personaldevelopmentschool.com/v1/lst/universal-script?ph=b8a3426fb8e80314f3ba1bbeb78db76454a57084d1e165ba830f52cda229dd6b&tag=!clicked"
        strategy="lazyOnload"
      />

      {/* HOTJAR */}
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

      <body>
        <div className="flex flex-col min-h-screen relative bg-white base-typography overflow-x-hidden">
          {children}
        </div>
      </body>

      <GoogleTagManager gtmId="GTM-T49JFVN" />

      <GoogleAdsTag />
    </html>
  )
}
