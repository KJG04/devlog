import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';
import { useTheme } from '@nextui-org/react';
import { FC, PropsWithChildren } from 'react';

const ThemeProvider: FC<PropsWithChildren> = (props) => {
  const { theme } = useTheme();
  if (!theme) {
    return <></>;
  }

  return (
    <EmotionThemeProvider theme={theme}>{props.children}</EmotionThemeProvider>
  );
};

export default ThemeProvider;
