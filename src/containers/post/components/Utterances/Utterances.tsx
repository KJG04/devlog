import { useCSS } from '#hooks/styles';
import { Container } from '@nextui-org/react';
import { memo } from 'react';
import { useDebounceComments, useRenderComments } from './hooks';

const Utterances: React.FC = () => {
  const { ref, render } = useRenderComments();
  useDebounceComments(render, 500);

  const containerCSS = useCSS(
    () => ({
      padding: 0,
      '.utterances': {
        maxWidth: '100%',
      },
    }),
    []
  );

  return (
    <Container fluid css={containerCSS}>
      <section ref={ref}></section>
    </Container>
  );
};

export default memo(Utterances);
