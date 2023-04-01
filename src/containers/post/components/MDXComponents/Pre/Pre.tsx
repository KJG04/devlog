import { HTMLProps, memo, useRef } from 'react';
import styled from '@emotion/styled';
import CopyButton from '#containers/post/components/MDXComponents/Pre/CopyButton/CopyButton';

const Pre = (props: HTMLProps<HTMLPreElement>) => {
  const { children, ...rest } = props;
  const preRef = useRef<HTMLPreElement>(null);

  return (
    <PreContainer>
      <ButtonContainer>
        <CopyButton preRef={preRef} />
      </ButtonContainer>
      <pre {...rest} ref={preRef}>
        {children}
      </pre>
    </PreContainer>
  );
};

export default memo(Pre) as typeof Pre;

const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  top: 0.5rem;
  right: 0.5rem;
  position: absolute;
`;

const PreContainer = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
`;
