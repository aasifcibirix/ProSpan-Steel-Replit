// gatsby-ssr.js
import React from "react"

export const onRenderBody = ({ setHeadComponents, setPostBodyComponents }) => {
  // Add to head
  setHeadComponents([
    <script
      key="fb-pixel-init"
      dangerouslySetInnerHTML={{
        __html: `
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window, document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '3729031990734548');
          fbq('track', 'PageView');
        `,
      }}
    />,
  ])

  // Add noscript to body
  setPostBodyComponents([
    <noscript
      key="fb-pixel-noscript"
      dangerouslySetInnerHTML={{
        __html: `
          <img height="1" width="1" style="display:none"
          src="https://www.facebook.com/tr?id=3729031990734548&ev=PageView&noscript=1"
          />
        `,
      }}
    />,
  ])
}