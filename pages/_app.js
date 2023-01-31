import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;

import '../styles/globals.css'
import React from "react";
import Script from "next/script";


const MyApp = ({ Component, pageProps }) => {
  
  return (
    <>
    <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX"/>
    <Script
      id='google-analytics'
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
      __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VHQ0TTFV2S', {
      page_path: window.location.pathname,
      });
      `,
    }}
    />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
