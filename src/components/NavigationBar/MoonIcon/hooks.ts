import { useTheme } from '@nextui-org/react';
import { useMemo } from 'react';

export const useFill = () => {
  const { theme } = useTheme();
  const fill = useMemo(
    () => theme?.colors.white.value || '#ffffff',
    [theme?.colors.white.value]
  );

  return fill;
};
