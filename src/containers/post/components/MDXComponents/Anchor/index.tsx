import { Link } from '@nextui-org/react';
import { HTMLProps } from 'react';

const Anchor = (props: HTMLProps<HTMLAnchorElement>) => {
  const { href, children } = props;
  return (
    <Link css={{ display: 'inline' }} href={href}>
      {children}
    </Link>
  );
};

export default Anchor;
