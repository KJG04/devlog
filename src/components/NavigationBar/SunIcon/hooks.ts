import { useTheme } from '@nextui-org/react';
import { useMemo } from 'react';

export const useFill = () => {
  const { theme } = useTheme();
  const fill = useMemo(
    () => theme?.colors.gray900.value || '#ffffff',
    [theme?.colors.gray900.value]
  );

  return fill;
};
