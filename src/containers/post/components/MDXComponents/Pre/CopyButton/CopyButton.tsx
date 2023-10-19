import { Button, Tooltip } from '@nextui-org/react';
import { useCopy, useCopyButton } from './hooks';
import { FC, memo, RefObject } from 'react';

interface PropsType {
  preRef: RefObject<HTMLPreElement>;
}

const CopyButton: FC<PropsType> = (props) => {
  const { preRef } = props;
  const copy = useCopy();
  const { onCopyPress, copyStatus } = useCopyButton(preRef, copy);

  return (
    <Tooltip
      content={copyStatus === 'success' ? '복사 성공!' : '복사 실패'}
      showArrow
      color={copyStatus === 'success' ? 'success' : 'danger'}
      isOpen={copyStatus !== 'idle'}
    >
      <Button
        className="p-0 w-[40px] h-[40px] bg-codeBack relative z-20 min-w-[40px] rounded-none justify-center items-center flex"
        onPress={onCopyPress}
        value="복사"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="relative z-10 w-[17.5px] h-[17.5px]"
        >
          <path
            className="relative z-10 fill-zinc-400"
            d="M0 448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H224c-53 0-96-43-96-96V160H64c-35.3 0-64 28.7-64 64V448zm224-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"
          />
        </svg>
      </Button>
    </Tooltip>
  );
};

export default memo(CopyButton);
