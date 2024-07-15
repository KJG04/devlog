import '#styles/global.scss'
import '#styles/prism-dark.scss'

import { PropsWithChildren } from 'react'
import Providers from './providers'
import Script from 'next/script'
import NavigationBar from '#components/NavigationBar'
import Footer from '#components/Footer'
import localFont from 'next/font/local'
import NextTopLoader from 'nextjs-toploader'
import { Metadata } from 'next'

const pretendardFont = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
})

const AppLayout = ({ children }: PropsWithChildren) => {
  const googleAnalyticsScript = {
    __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Y0GBC8LJBX');`,
  }

  return (
    <html lang="ko-KR" className={`bg-[#18181B] ${pretendardFont.variable}`}>
      <head>
        <meta
          name="google-site-verification"
          content="_t993ryqkfkZtQ2TCWO8l2P2oXHwFfba2hMwaCQVP5s"
        />
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
        <NextTopLoader color="#006FEE" showSpinner={false} />
        <Providers>
          <div className="relative flex min-h-[100vh] flex-col dark">
            <NavigationBar />
            <main className="flex flex-1 flex-col">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  )
}

export default AppLayout

export const metadata: Metadata = {
  icons: {
    icon: [
      {
        url: '/favicon/apple-touch-icon.png',
        sizes: '180x180',
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '32x32',
      },
      {
        url: '/favicon/favicon-32x32.png',
        sizes: '16x16',
      },
      {
        url: '/favicon/android-chrome-192x192',
        sizes: '192x192',
      },
      {
        url: '/favicon/android-chrome-512x512',
        sizes: '512x512',
      },
      {
        url: '/favicon/favicon.ico',
        type: 'image/x-icon',
      },
      {
        url: '/favicon/favicon.ico',
      },
    ],
  },
}
