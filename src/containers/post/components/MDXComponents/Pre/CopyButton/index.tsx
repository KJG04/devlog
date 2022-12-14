import { Button } from '@nextui-org/react';
import { useCopy, useCopyButton } from './hooks';
import { FC, RefObject } from 'react';
import { useTheme } from '@emotion/react';

interface PropsType {
  preRef: RefObject<HTMLPreElement>;
}

const CopyButton: FC<PropsType> = (props) => {
  const { preRef } = props;
  const copy = useCopy();
  const onCopyPress = useCopyButton(preRef, copy);
  const theme = useTheme();

  return (
    <Button
      css={{
        padding: 0,
        width: 40,
        height: 40,
        backgroundColor: '$gray500',
        position: 'relative',
        '.nextui-button-text': {
          position: 'relative',
          zIndex: 1,
        },
      }}
      auto
      onPress={onCopyPress}
      value="복사"
    >
      <svg
        width={17.5}
        height={17.5}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        style={{ position: 'relative', zIndex: 1 }}
      >
        <path
          style={{ position: 'relative', zIndex: 1 }}
          fill={theme.colors.gray800.value}
          d="M0 448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H224c-53 0-96-43-96-96V160H64c-35.3 0-64 28.7-64 64V448zm224-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"
        />
      </svg>
    </Button>
  );
};

export default CopyButton;
