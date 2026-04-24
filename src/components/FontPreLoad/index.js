import React from 'react'
import { Helmet } from 'react-helmet'

const FontPreloader = () => {
  return (
    <Helmet>
      {/* Preconnect for performance */}
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Preload critical font files */}
      {/* Kanit Regular */}
      <link
        rel="preload"
        as="font"
        href="https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr4-ORWnVaE.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Kanit Bold */}
      <link
        rel="preload"
        as="font"
        href="https://fonts.gstatic.com/s/kanit/v15/nKKU-Go6G5tXcr4-ORWnVaE.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Rajdhani Regular */}
      <link
        rel="preload"
        as="font"
        href="https://fonts.gstatic.com/s/rajdhani/v15/LDI2apCSOBg7S-QT7pasEcOsc-bGkqIw.woff2"
        type="font/woff2"
        crossOrigin="anonymous"
      />

      {/* Load the actual font stylesheet */}
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
        media="print"
        onLoad="this.media='all'"
        crossOrigin="anonymous"
      />

      {/* Noscript fallback */}
      <noscript>{`
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;200;300;400;500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&display=swap"
          crossOrigin="anonymous"
        />
      `}</noscript>
    </Helmet>
  )
}

export default FontPreloader