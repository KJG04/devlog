import { Link } from '@nextui-org/react';
import { HTMLProps, memo } from 'react';

const Anchor = (props: HTMLProps<HTMLAnchorElement>) => {
  const { href, children } = props;

  return (
    <Link
      className="inline"
      href={href}
      target={href?.startsWith('#') ? undefined : '_blank'}
      rel={href?.startsWith('#') ? undefined : 'noopener noreferrer'}
    >
      {children}
    </Link>
  );
};

export default memo(Anchor) as typeof Anchor;
