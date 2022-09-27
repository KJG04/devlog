import { Container, useTheme } from '@nextui-org/react';
import { useEffect, useRef } from 'react';
import { useDebouncedCallback } from 'use-debounce';

const Utterances: React.FC = () => {
  const { isDark } = useTheme();
  const ref = useRef<HTMLElement>(null);

  const debounced = useDebouncedCallback((isDark) => {
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
  }, 500);

  useEffect(() => {
    debounced(isDark);
  }, [debounced, isDark]);

  return (
    <Container
      fluid
      css={{
        padding: 0,
        '.utterances': {
          maxWidth: '100%',
        },
      }}
    >
      <section ref={ref}></section>
    </Container>
  );
};

export default Utterances;
