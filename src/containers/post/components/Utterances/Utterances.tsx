import { memo } from 'react';
import { useDebounceComments, useRenderComments } from './hooks';

const Utterances: React.FC = () => {
  const { ref, render } = useRenderComments();
  useDebounceComments(render, 500);

  return (
    <div className="[&>.utterances]:max-w-full p-0">
      <section ref={ref}></section>
    </div>
  );
};

export default memo(Utterances);
