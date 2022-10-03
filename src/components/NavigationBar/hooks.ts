import { SwitchEvent, useTheme } from '@nextui-org/react';
import { useTheme as useNextTheme } from 'next-themes';
import { useCallback } from 'react';

export const useThemeSwitch = () => {
  const { isDark } = useTheme();
  const { setTheme } = useNextTheme();

  const onChangeTheme = useCallback(
    (e: SwitchEvent) => {
      setTheme(e.target.checked ? 'light' : 'dark');
    },
    [setTheme]
  );

  return { checked: !isDark, onChangeTheme };
};
