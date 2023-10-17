import { memo } from 'react';

interface PropsType {
  children?: React.ReactNode;
  wrapperClassName?: string;
}

const Blockquote = (props: PropsType) => {
  const { children, wrapperClassName } = props;

  return (
    <div className={wrapperClassName}>
      <blockquote className="">{children}</blockquote>
    </div>
  );
};

export default memo(Blockquote) as typeof Blockquote;
