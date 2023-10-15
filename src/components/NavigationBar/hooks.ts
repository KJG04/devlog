import { useTheme } from 'next-themes';
import { useCallback } from 'react';
import { SwitchProps } from '@nextui-org/react';

export const useThemeSwitch = () => {
  const { setTheme, theme } = useTheme();

  const onChangeTheme = useCallback<NonNullable<SwitchProps['onValueChange']>>(
    (e) => {
      setTheme(e ? 'light' : 'dark');
    },
    [setTheme],
  );

  return { checked: theme === 'light', onChangeTheme };
};
