import { memo } from 'react';
import { useThemeController } from './hooks';

const ThemeController = () => {
  useThemeController();

  return <></>;
};

export default memo(ThemeController);
