/**
 * GA4 + Meta Pixel script tags.
 *
 * Rendered in <head> via Next.js <Script> with `afterInteractive` strategy
 * so they don't block first paint.
 *
 * ENV VARS REQUIRED:
 *   NEXT_PUBLIC_GA4_ID        — e.g. "G-XXXXXXXXXX"
 *   NEXT_PUBLIC_META_PIXEL_ID — e.g. "123456789012345"
 *
 * If either env var is missing the corresponding script is not rendered,
 * making local dev and preview deploys clean.
 *
 * PRIVACY: No enhanced measurement features that could capture PHI.
 * GA4 IP anonymization is on by default in GA4 properties.
 */

import Script from "next/script";

const GA4_ID = process.env.NEXT_PUBLIC_GA4_ID;
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID;

export function AnalyticsScripts() {
  return (
    <>
      {/* ---- Google Analytics 4 ---- */}
      {GA4_ID && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`}
            strategy="afterInteractive"
          />
          <Script id="ga4-init" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA4_ID}', {
                send_page_view: true,
                anonymize_ip: true
              });
              window.gtag = gtag;
            `}
          </Script>
        </>
      )}

      {/* ---- Meta Pixel ---- */}
      {META_PIXEL_ID && (
        <Script id="meta-pixel-init" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${META_PIXEL_ID}');
            fbq('track', 'PageView');
          `}
        </Script>
      )}
    </>
  );
}
