import { Button } from '@nextui-org/react';
import { useCopy, useCopyButton } from './hooks';
import { FC, memo, RefObject } from 'react';
import { useCSS } from '#hooks/styles';
import styled from '@emotion/styled';

interface PropsType {
  preRef: RefObject<HTMLPreElement>;
}

const CopyButton: FC<PropsType> = (props) => {
  const { preRef } = props;
  const copy = useCopy();
  const { onCopyPress, buttonBackgroundColor, buttonColor } = useCopyButton(
    preRef,
    copy
  );

  const buttonCSS = useCSS(
    () => ({
      padding: 0,
      width: 40,
      height: 40,
      backgroundColor: buttonBackgroundColor,
      position: 'relative',
      '.nextui-button-text': {
        position: 'relative',
        zIndex: 1,
      },
    }),
    [buttonBackgroundColor]
  );

  return (
    <Button css={buttonCSS} auto onPress={onCopyPress} value="복사">
      <StyledSVG
        width={17.5}
        height={17.5}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <StyledPath
          fill={buttonColor}
          d="M0 448c0 35.3 28.7 64 64 64H288c35.3 0 64-28.7 64-64V384H224c-53 0-96-43-96-96V160H64c-35.3 0-64 28.7-64 64V448zm224-96H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H224c-35.3 0-64 28.7-64 64V288c0 35.3 28.7 64 64 64z"
        />
      </StyledSVG>
    </Button>
  );
};

export default memo(CopyButton);

const StyledSVG = styled.svg`
  position: relative;
  z-index: 1;
`;

const StyledPath = styled.path`
  position: relative;
  z-index: 1;
`;
