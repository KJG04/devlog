import { memo } from 'react';
import { useDebounceComments, useRenderComments } from './hooks';

const Utterances: React.FC = () => {
  const { ref, render } = useRenderComments();
  useDebounceComments(render, 500);

  return (
    <div className="p-0">
      <section ref={ref} className="[&>.utterances]:max-w-full"></section>
    </div>
  );
};

export default memo(Utterances);
