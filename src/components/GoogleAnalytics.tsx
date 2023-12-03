'use client'

import Script from 'next/script'
import * as gtag from '@/lib/GoogleAnalytics'
import { useNavigationEvent } from '@/hooks/useNavigationEvent'

export default function GoogleAnalytics() {
  useNavigationEvent((url: string) => {
    gtag.pageview(url)
  })

  return (
    <>
      <Script src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`} />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${gtag.GA_TRACKING_ID}');
        `}
      </Script>
    </>
  )
}
