import { Badge } from '@nextui-org/react';
import { FC, memo, PropsWithChildren } from 'react';
import { useCSS } from 'src/hooks';

const Tag: FC<PropsWithChildren> = (props) => {
  const { children } = props;

  const badgeCSS = useCSS(
    () => ({ backgroundColor: '$gray300', border: 0 }),
    []
  );

  return (
    <Badge variant="flat" css={badgeCSS}>
      {children}
    </Badge>
  );
};

export default memo(Tag);
