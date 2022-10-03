import { useTheme } from 'next-themes';
import { useCallback, useEffect } from 'react';

export const useThemeController = () => {
  const { setTheme } = useTheme();

  const onChangeSystemColorScheme = useCallback(() => {
    setTheme('system');
  }, [setTheme]);

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', onChangeSystemColorScheme);

    return () => {
      window
        .matchMedia('(prefers-color-scheme: dark)')
        .removeEventListener('change', onChangeSystemColorScheme);
    };
  }, [onChangeSystemColorScheme]);
};
