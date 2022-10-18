import { useTheme } from '@nextui-org/react';

export const useIconPath = () => {
  const { isDark } = useTheme();

  return isDark ? '/github-logo-dark.svg' : '/github-logo-light.svg';
};
