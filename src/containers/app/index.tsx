import type { AppProps } from 'next/app';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import Head from 'next/head';
import Favicon from '#containers/app/components/Favicon';
import ThemeController from '#containers/app/components/ThemeController';
import ThemeProvider from '#containers/app/components/ThemeProvider';

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

function App({ Component, pageProps }: AppProps) {
  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      enableSystem={true}
      value={{
        light: lightTheme.className,
        dark: darkTheme.className,
      }}
    >
      <NextUIProvider>
        <ThemeProvider>
          <Head>
            <Favicon />
          </Head>
          <Component {...pageProps} />
          <ThemeController />
        </ThemeProvider>
      </NextUIProvider>
    </NextThemesProvider>
  );
}

export default App;
