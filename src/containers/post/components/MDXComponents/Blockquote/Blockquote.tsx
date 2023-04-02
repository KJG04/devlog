import { useCSS } from '#hooks/styles';
import { Container } from '@nextui-org/react';
import { memo } from 'react';

interface PropsType {
  children?: React.ReactNode;
  size?: string;
  color?: string;
  borderColor?: string;
}

const Blockquote = (props: PropsType) => {
  const { children, size, color, borderColor } = props;

  const containerCSS = useCSS(
    () => ({
      fontSize: size ?? '$md',
      padding: 0,
      'p, code': {
        fontSize: size ?? '$md',
      },
      blockquote: {
        color: color ?? '$gray800',
        borderColor: borderColor ?? color ?? '$gray500',
        padding: `${size ?? '$md'} $lg`,
      },
    }),
    []
  );

  return (
    <Container css={containerCSS}>
      <blockquote>{children}</blockquote>
    </Container>
  );
};

export default memo(Blockquote) as typeof Blockquote;
