import { useMemo } from 'react';
import { CSS } from '@nextui-org/react';
import { CSSProperties } from '@nextui-org/react/types/theme';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useCSS = (factory: () => CSS, deps: any[]) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(factory, deps);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useStyle = (factory: () => CSSProperties, deps: any[]) =>
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(factory, deps);
