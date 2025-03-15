// 'use client';

// import Script from 'next/script';
// import { Suspense } from 'react';

// function AnalyticsScript() {
//   // Usa el ID de seguimiento de las variables de entorno
//   const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_TRACKING_ID || 'G-CFBJNKW729';
  
//   return (
//     <>
//       {/* Global Site Tag (gtag.js) - Google Analytics */}
//       <Script
//         strategy="afterInteractive"
//         src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
//       />
//       <Script
//         id="google-analytics"
//         strategy="afterInteractive"
//         dangerouslySetInnerHTML={{
//           __html: `
//             window.dataLayer = window.dataLayer || [];
//             function gtag(){dataLayer.push(arguments);}
//             gtag('js', new Date());
//             gtag('config', '${GA_TRACKING_ID}');
//           `,
//         }}
//       />
//     </>
//   );
// }

// export default function GoogleAnalytics() {
//   return (
//     <Suspense fallback={null}>
//       <AnalyticsScript />
//     </Suspense>
//   );
// } 