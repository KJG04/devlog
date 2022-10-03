import { HTMLProps, useRef } from 'react';
import styled from '@emotion/styled';
import CopyButton from '#containers/post/components/MDXComponents/Pre/CopyButton';

const Pre = (props: HTMLProps<HTMLPreElement>) => {
  const { children, ...rest } = props;
  const preRef = useRef<HTMLPreElement>(null);

  return (
    <span style={{ position: 'relative' }}>
      <ButtonContainer>
        <CopyButton preRef={preRef} />
      </ButtonContainer>
      <pre {...rest} ref={preRef}>
        {children}
      </pre>
    </span>
  );
};

export default Pre;

const ButtonContainer = styled.div`
  width: 40px;
  height: 40px;
  top: 0.5rem;
  right: 0.5rem;
  position: absolute;
`;
