import type { AppProps } from 'next/app';
import { NextUIProvider } from '@nextui-org/react';
import { ThemeProvider } from 'next-themes';
import Head from 'next/head';
import Favicon from '#containers/app/components/Favicon';
import ThemeController from '#containers/app/components/ThemeController';
import NextNProgress from 'nextjs-progressbar';
import NavigationBar from '#components/NavigationBar';
import Footer from '#components/Footer';
import Script from 'next/script';
import { memo, useMemo } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { RecoilRoot } from 'recoil';

const App = ({ Component, pageProps }: AppProps) => {
  const googleAnalyticsScript = useMemo(
    () => ({
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Y0GBC8LJBX');`,
    }),
    [],
  );

  const progressOptions = useMemo(() => ({ showSpinner: false }), []);

  return (
    <>
      <RecoilRoot>
        <ThemeProvider
          defaultTheme="system"
          attribute="class"
          enableSystem={true}
        >
          <NextUIProvider>
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
            <Head>
              <Favicon />
            </Head>
            <NextNProgress
              color="var(--nextui-colors-primaryLightContrast)"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
              options={progressOptions}
            />
            <div className="flex min-h-[100vh] flex-col">
              <NavigationBar />
              <Component {...pageProps} />
              <Footer />
            </div>
            <ThemeController />
            <Analytics />
          </NextUIProvider>
        </ThemeProvider>
      </RecoilRoot>
    </>
  );
};

export default memo(App);
