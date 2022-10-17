import { Badge } from '@nextui-org/react';
import { FC, PropsWithChildren } from 'react';

const Tag: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <Badge variant="flat" css={{ backgroundColor: '$gray300', border: 0 }}>
      {children}
    </Badge>
  );
};

export default Tag;
