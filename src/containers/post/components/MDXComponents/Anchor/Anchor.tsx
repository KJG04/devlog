import { useCSS } from '#hooks';
import { Link } from '@nextui-org/react';
import { HTMLProps, memo } from 'react';

const Anchor = (props: HTMLProps<HTMLAnchorElement>) => {
  const { href, children } = props;

  const linkCSS = useCSS(() => ({ display: 'inline' }), []);

  return (
    <Link css={linkCSS} href={href}>
      {children}
    </Link>
  );
};

export default memo(Anchor) as typeof Anchor;
