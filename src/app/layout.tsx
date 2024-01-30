import '#styles/global.scss'
import '#styles/prism-dark.scss'

import { PropsWithChildren } from 'react'
import { Providers } from './providers'
import Script from 'next/script'
import NavigationBar from '#components/NavigationBar'
import Footer from '#components/Footer'
import { Analytics } from '@vercel/analytics/react'

const AppLayout = ({ children }: PropsWithChildren) => {
  const googleAnalyticsScript = {
    __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Y0GBC8LJBX');`,
  }

  return (
    <html lang="ko-KR" className="bg-[#18181B]">
      <head>
        <meta
          name="google-site-verification"
          content="_t993ryqkfkZtQ2TCWO8l2P2oXHwFfba2hMwaCQVP5s"
        />
        <link
          rel="stylesheet preload"
          as="style"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css"
          type="text/css"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="icon" type="image/x-icon" href="/favicon/favicon.ico" />
        <link rel="/manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        <Script
          defer
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-Y0GBC8LJBX"
        />
        <Script
          defer
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={googleAnalyticsScript}
        />
        <Providers>
          <div className="relative flex min-h-[100vh] flex-col dark">
            <NavigationBar />
            {children}
            <Footer />
          </div>
          <Analytics />
        </Providers>
      </body>
    </html>
  )
}

export default AppLayout
