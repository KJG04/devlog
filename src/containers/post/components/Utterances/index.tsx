import { Container } from '@nextui-org/react';
import { useDebounceComments, useRenderComments } from './hooks';

const Utterances: React.FC = () => {
  const { ref, render } = useRenderComments();
  useDebounceComments(render, 500);

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
