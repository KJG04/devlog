import { Badge } from '@nextui-org/react';
import { FC, memo, PropsWithChildren } from 'react';

const Tag: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <Badge variant="flat" className="bg-gray-300 border-0">
      {children}
    </Badge>
  );
};

export default memo(Tag);
