import { useTheme } from 'next-themes';
import { useCallback, useEffect, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';

export const useRenderComments = () => {
  const ref = useRef<HTMLElement>(null);

  const render = useCallback((isDark: boolean) => {
    const elem = ref.current;

    if (!elem || typeof window === 'undefined') {
      return;
    }

    const scriptElem = document.createElement('script');
    scriptElem.src = 'https://utteranc.es/client.js';
    scriptElem.async = true;
    scriptElem.setAttribute('repo', 'KJG04/devlog');
    scriptElem.setAttribute('issue-term', 'title');
    scriptElem.setAttribute('theme', isDark ? 'github-dark' : 'github-light');
    scriptElem.setAttribute('label', 'blog-comment');
    scriptElem.crossOrigin = 'anonymous';
    elem.replaceChildren(scriptElem);
  }, []);

  return { ref, render };
};

export const useDebounceComments = (
  callback: (isDark: boolean) => void,
  wait: number,
) => {
  const debounced = useDebouncedCallback(callback, wait);
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  useEffect(() => {
    if (isDark !== undefined) {
      debounced(isDark);
    }
  }, [debounced, isDark]);
};
