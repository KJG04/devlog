import { useTheme } from '@emotion/react';
import mediumZoom from 'medium-zoom';
import { useEffect } from 'react';

export const useMediumZoom = () => {
  const theme = useTheme();

  useEffect(() => {
    const zoom = mediumZoom(document.querySelectorAll('[data-zoomable]'), {
      background: theme.colors.backgroundAlpha.value,
    });

    return () => {
      zoom.detach();
    };
  }, [theme.colors.backgroundAlpha.value]);
};
