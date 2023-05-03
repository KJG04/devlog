import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Head from 'next/head';
import Favicon from '#containers/app/components/Favicon';
import ThemeController from '#containers/app/components/ThemeController';
import ThemeProvider from '#containers/app/components/ThemeProvider';
import NextNProgress from 'nextjs-progressbar';
import NavigationBar from '#components/NavigationBar';
import Footer from '#components/Footer';
import Script from 'next/script';
import { memo, useMemo } from 'react';
import { Analytics } from '@vercel/analytics/react';
import styled from '@emotion/styled';

const darkTheme = createTheme({
  type: 'dark',
  theme: {
    fonts: {
      sans: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    },
  },
});

const lightTheme = createTheme({
  type: 'light',
  theme: {
    fonts: {
      sans: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif',
    },
  },
});

const App = ({ Component, pageProps }: AppProps) => {
  const themeValue = useMemo(
    () => ({
      light: lightTheme.className,
      dark: darkTheme.className,
    }),
    []
  );

  const googleAnalyticsScript = useMemo(
    () => ({
      __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-Y0GBC8LJBX');`,
    }),
    []
  );

  const progressOptions = useMemo(() => ({ showSpinner: false }), []);

  return (
    <>
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        enableSystem={true}
        value={themeValue}
      >
        <NextUIProvider>
          <ThemeProvider>
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
            <Container>
              <NavigationBar />
              <Component {...pageProps} />
              <Footer />
            </Container>
            <ThemeController />
          </ThemeProvider>
        </NextUIProvider>
      </NextThemesProvider>
      <Analytics />
    </>
  );
};

export default memo(App);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;
