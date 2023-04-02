import { useTheme } from '@nextui-org/react';

export const useIconPath = () => {
  const { isDark } = useTheme();

  return isDark ? '/icon/github-logo-dark.svg' : '/icon/github-logo-light.svg';
};
